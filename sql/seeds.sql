INSERT INTO department(name)
VALUES
('Marketing'),
('Cleaning'),
('Food');

INSERT INTO role (title, salary, department_id)
VALUES 
("Master Marketer", 5000.00, 1),
("Bathroom Cleaner", 4000.00, 2),
("Duster", 2000.00, 2),
("Head Chef", 4000.00, 3),
("Marketing Analyst", 1000.00, 1),
("Taste tester", 1000.00, 3);

INSERT INTO employee(first_name, last_name, manager_id, role_id)
VALUES
('Ken', 'Kanaki', 1,1),
('George', 'Lucas', NULL,2),
('Marvin', 'Gaye', NULL,3),
('George', 'Harrison', 2,4),
('Ringo', 'Starr', NULL,5 ),
('Paul', 'McCartney', 3,6),
('John','Lennon', 4,7);