import pool from "../database"

export const fetchRentals = modifier => {
  const query = `
    SELECT  
      r.id,
      r.propertyid AS propertyId,
      rs.description AS status
    FROM rap.rentals r
    INNER JOIN rap.rentalstatuses rs
    ON r.statusid = rs.id
  `

  return pool.query(query).then(response => response.rows)
}