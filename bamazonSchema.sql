DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products(
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(100) NULL,
department_name VARCHAR(100) NULL,
price DECIMAL (6,2) default 0,
stock_quantity INT default 0,
  PRIMARY KEY (item_id)
);