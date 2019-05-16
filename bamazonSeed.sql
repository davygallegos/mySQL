DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(100) NOT NULL,
department_name VARCHAR(100) NOT NULL,
price INT default 0,
stock_quantity INT default 0,
  PRIMARY KEY (item_id)
);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Altra Shoe", "Sporting", 100, 10);
VALUES ("Bow", "Sporting", 50, 15);
VALUES ("Desert Eagle", "Sporting", 5, 1000);
VALUES ("Snot Hanky", "Survival", 200, 25);
VALUES ("Nipple bandaids", "Survival", 1, 7);
VALUES ("Pedialyte", "Survival", 2, 20);
VALUES ("Razer Phone", "Entertainment", 500, 79);
VALUES ("Kindle Paperwrite", "Entertainment", 100, 1000);
VALUES ("Count Chocula", "Food", 3, 5);
VALUES ("Gummy Bears", "Food", 2, 10);
