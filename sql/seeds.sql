INSERT INTO department(name)
VALUES
('Marketing')
('Cleaning')
('Food')

INSERT INTO roles(title, salary, department_id)
VALUES
('Bathroom Cleaner', 1400, 2)
('Media Marketing', 4000, 1)
('Head Chef', 3000, 3)
('Taste Tester', 1500, 3)
('Duster', 1500, 2)
('Head Marketer',7000, 1 )

INSERT INTO employee(first_name, last_name, role_id, manager_id)
('Ken', 'Kanaki', 1, 1)
('George', 'Lucas', 2, NULL)
('Marvin', 'Gaye',3, NULL)
('George', 'Harrison',4, 2)
('Ringo', 'Starr',5, NULL )
('Paul', 'McCartney', 6, 3)
('John''Lennon', 7, 4)