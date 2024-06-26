CREATE TABLE rap.rentals (
  id SERIAL PRIMARY KEY,
  propertyId UUID NOT NULL,
  ownerId UUID NOT NULL,
  tenantId UUID NOT NULL,
  leaseId INT NOT NULL
);

ALTER TABLE rap.rentals
ADD CONSTRAINT fk_lease
FOREIGN KEY (leaseId) 
REFERENCES rap.leases(id);