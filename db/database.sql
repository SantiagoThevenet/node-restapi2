DROP DATABASE IF EXISTS comanydb;
CREATE DATABASE companydb CHARSET utf8mb4;
USE companydb;

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) DEFAULT NULL,
    salary INT DEFAULT NULL,
    PRIMARY KEY(id)
)

INSERT INTO employee VALUES
    (1, 'Pedro',1000 ),
    (2, 'Santi',1200 ),
    (3, 'Juan',2000 ),
    (4, 'Paquito',3000 ),
    (5, 'Messi',5000 );