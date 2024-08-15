CREATE DATABASE restaurant;

USE restaurant;

CREATE TABLE menu (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(255) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  quantity INT NOT NULL
);

CREATE TABLE customers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  contact VARCHAR(255) NOT NULL
);

CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  customer_id INT,
  menu_item_id INT,
  quantity INT,
  FOREIGN KEY (customer_id) REFERENCES customers(id),
  FOREIGN KEY (menu_item_id) REFERENCES menu(id)
);
