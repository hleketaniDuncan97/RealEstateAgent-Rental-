import pool from "./database"

export const fetchRentals = modifier => {
  const query = 'SELECT r.id, r.propertyid, r.ownerid, r.tenantid, r.leaseid FROM rap.rentals r'

  return pool.query(query)
    .then(response => response.rows)
}