CREATE DATABASE IF NOT EXISTS
dockerapi;
USE dockerapi;


CREATE TABLE IF NOT EXISTS `products` (
    id INT(11) AUTO_INCREMENT,
    name VARCHAR(255),
    price DECIMAL(10,2),
    PRIMARY KEY (id)
);


INSERT INTO `products` VALUES(0, 'Produto 001 vestuario',310.00);
INSERT INTO `products` VALUES(0, 'Produto 002 comestivel',120.00);


