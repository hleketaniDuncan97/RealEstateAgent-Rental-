import pool from "../database"

export const fetchLeases = modifier => {
  const query = `
    SELECT
      l.id,
      l.rentalid AS rentalId,
      l.tenantid AS tenantId,
      l.startdate AS startDate,
      l.enddate AS endDate,
      l.rentamount AS rentAmount,
      r.propertyid AS propertyId,
      rs.description AS rentalStatus
    FROM rap.leases l
    INNER JOIN rap.rentals r
    ON l.rentalid = r.id
    INNER JOIN rap.rentalStatuses rs
    ON r.statusid = rs.id
  `

  return pool.query(query).then(response => response.rows)
}