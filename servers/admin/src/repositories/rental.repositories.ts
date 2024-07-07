import pool from '../database'

export const fetchRentals = ({
  limit = 10,
  page = 1,
  sortBy = 'id',
  order = 'ASC',
  status,
}) => {
  const parameters: (string | number)[] = []

  const offset = (page - 1) * limit
  sortBy = ['id', 'propertyId', 'cost', 'status'].includes(sortBy)
    ? sortBy
    : 'id'
  order = order?.toLocaleUpperCase()
  order = ['ASC', 'DESC'].includes(order) ? order : 'ASC'

  let query = `
    SELECT  
      r.id,
      r.propertyid AS propertyId,
      r.cost,
      rs.description AS status
    FROM rap.rentals r
    INNER JOIN rap.rentalstatuses rs
    ON r.statusid = rs.id
  `

  if (status) {
    query += `WHERE rs.id = $${parameters.length + 1}`
    parameters.push(status)
  }

  query += `
    ORDER BY ${sortBy} ${order}
    LIMIT $${parameters.length + 1}
    OFFSET $${parameters.length + 2}
  `

  parameters.push(limit, offset)

  return pool
    .query(query, parameters)
    .then(response => response.rows)
}

export const fetchRental = id => {
  const query = `
    SELECT  
      r.id,
      r.propertyid AS propertyId,
      r.cost,
      rs.description AS status
    FROM rap.rentals r
    INNER JOIN rap.rentalstatuses rs
    ON r.statusid = rs.id
    WHERE r.id = $1
  `

  return pool.query(query, [id]).then(response => response.rows[0])
}

export const insertRentals = property => {
  const query = `
    DO $$
      DECLARE
        index INTEGER;
      BEGIN
        FOR index 1..$1 LOOP 
          INSERT INTO rap.rentals (propertyId, status) VALUES
            ($2, 1);
        END LOOP;
      END
    $$;
  `

  return pool.query(query, [property.capacity, property.id])
}

export const occupyRentalsInsertLeases = (rentals, leases) => {
  const rentalQuery = `
    UPDATE rap.rentals r
    SET statusid = 2
    WHERE r.id = ANY($1::INT[])
  `

  const leaseQuery = `
    INSERT INTO rap.leases (
      rentalid,
      tenantid,
      startdate,
      enddate,
      rentamount
    )
    VALUES ($1, $2, $3, $4, $5)
  `

  pool.query('BEGIN')
    .then(async () => {
      for (const lease of leases) {
        await pool.query(
          leaseQuery,
          [
            lease.rentalId,
            lease.tenantId,
            lease.startDate,
            lease.endDate,
            lease.rentAmount,
          ]
        )
      }
    })
    .then(() => pool.query(rentalQuery, [rentals.map(r => r.id)]))
    .then(() => pool.query('COMMIT'))
    .catch(error => pool.query('ROLLBACK')
      .then(() => {
        throw new Error('Error creating rental')
      })
    )
}

export const updateRental = rental => {
  const query = `
    UPDATE rap.rentals r
    SET
      cost = $1,
      statusid = $2
    WHERE r.id = ANY($1::INT[])
  `

  return pool.query(query, [rental.id, rental.statusId]).then(() => rental)
}