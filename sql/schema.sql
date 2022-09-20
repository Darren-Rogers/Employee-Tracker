DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

CREATE TABLE department (
name VARCHAR(100) NOT NULL,
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
);

CREATE TABLE roles (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(30) NOT NULL,
salary DECIMAL(10,2) NOT NULL,
department_id INT,
FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT,
FOREIGN KEY(role_id) REFERENCES roles(id),
manager_id INT,
FOREIGN KEY(manager_id) REFERENCES employee(id),

);

