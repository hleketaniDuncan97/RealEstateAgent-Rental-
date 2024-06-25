CREATE TABLE rap.leases (
  id SERIAL PRIMARY KEY,
  effectiveDate DATE NOT NULL,
  maturityDate DATE NOT NULL,
  rate MONEY NOT NULL
);