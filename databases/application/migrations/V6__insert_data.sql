INSERT INTO rap.rentalStatuses (description) VALUES
('VACANT'),
('OCCUPIED');

INSERT INTO rap.tenants (name, email, phoneNumber) VALUES
('John Doe', 'john.doe@example.com', '555-1234'),
('Jane Smith', 'jane.smith@example.com', '555-5678'),
('Alice Johnson', 'alice.johnson@example.com', '555-8765'),
('Bob Brown', 'bob.brown@example.com', '555-4321'),
('Charlie Davis', 'charlie.davis@example.com', '555-6789'),
('Diana Evans', 'diana.evans@example.com', '555-9876'),
('Edward Harris', 'edward.harris@example.com', '555-6543'),
('Fiona Green', 'fiona.green@example.com', '555-3456'),
('George Hill', 'george.hill@example.com', '555-7654'),
('Hannah King', 'hannah.king@example.com', '555-2345');

INSERT INTO rap.rentals (propertyId, cost, statusId) VALUES
('3f6c0c4e-59b4-4f3d-a3a4-b8ad9a8f4e0d', 1000.00, 1),
('f4bfa9b4-634e-4b62-95f3-51b76d6ff3e6', 1100.00, 1),
('896ace68-6a90-4c4c-bae2-6bb8e8f71c0d', 1200.00, 1),
('be1ccbb7-82a2-4453-b2b5-b1b084c8f842', 1300.00, 1),
('d3778c13-9d1b-4721-9530-3cfe3c9e5b34', 1400.00, 1),
('c80a1f9b-d3a2-4716-84b2-c7e32b5e8f11', 1500.00, 1),
('184bb2cc-9a36-4d75-ace3-12b10f6b84b7', 1600.00, 1),
('5a1a091b-760b-49cf-93c0-0c7f4e42cf7c', 1700.00, 1),
('35c2a5db-dc65-4e3f-85e3-9039ecf2b635', 1800.00, 1),
('b8e7e5d4-1b49-4cb8-841d-68ab8e1849c3', 1900.00, 1);

INSERT INTO rap.leases (rentalId, tenantId, startDate, endDate, rentAmount) VALUES
(1, 1, '2023-01-31', '2024-01-31', 1000.00),
(2, 2, '2023-02-28', '2024-02-29', 1100.00),
(3, 3, '2023-03-31', '2024-03-31', 1200.00),
(4, 4, '2023-04-30', '2024-04-30', 1300.00),
(5, 5, '2023-05-31', '2024-05-31', 1400.00),
(6, 6, '2023-06-30', '2024-06-30', 1500.00),
(7, 7, '2023-07-31', '2024-07-31', 1600.00),
(8, 8, '2023-08-31', '2024-08-31', 1700.00),
(9, 9, '2023-09-30', '2024-09-30', 1800.00),
(10, 10, '2023-10-31', '2024-10-31', 1900.00);