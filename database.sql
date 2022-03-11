CREATE DATABASE n_database
-- \c database_name to select database in pgsql

CREATE TABLE Employee (id SERIAL PRIMARY KEY,name VARCHAR(55) NOT NULL, job VARCHAR(55) NOT NULL, department VARCHAR(30) NOT NULL,salary INT NOT NULL,hire_date DATE NOT NULL);
