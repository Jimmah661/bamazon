DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE products
(
    item_id INT NOT NULL
    AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR
    (30) NOT NULL,
    department_name VARCHAR
    (30) NOT NULL,
    stock_quantity INT
);

    INSERT INTO products
        (product_name, department_name, stock_quantity)
    VALUE("Potato Peeler",
    "Kitchenware",
    5
    ),
    ("Stock Pot", "Kitchenware", 20),
    ("40 inch TV", "Home Entertainment", 500),
    ("Game System", "Home Entertainment", 200),
    ("5.1 Surround sound system", "Home Entertainment", 100),
    ("Queen Size Bed", "Furniture", 200),
    ("3-Seater couch", "Furniture", 80),
    ("Bandsaw", "Power Tools", 50),
    ("Drill Press", "Power Tools", 30),
    ("Angle Grinder", "Power Tools", 40);