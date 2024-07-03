CREATE TABLE rap.tenants (
  id SERIAL PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phoneNumber TEXT NOT NULL
);

ALTER SEQUENCE rap.tenants_id_seq RESTART WITH 1;

ALTER TABLE rap.leases
ADD CONSTRAINT fk_lease_tenant
FOREIGN KEY (tenantId) 
REFERENCES rap.tenants(id);