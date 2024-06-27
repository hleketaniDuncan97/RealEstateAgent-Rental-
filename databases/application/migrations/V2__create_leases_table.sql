CREATE TABLE rap.leases (
  id SERIAL PRIMARY KEY NOT NULL,
  rentalId INT NOT NULL,
  tenantId INT NOT NULL,
  startDate DATE NOT NULL,
  endDate DATE NOT NULL,
  rentAmount MONEY NOT NULL
);

ALTER SEQUENCE rap.leases_id_seq RESTART WITH 1;