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
    price INT NOT NULL,
    stock_quantity INT
);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUE("Potato Peeler",
    "Kitchenware",
    3,
    5
    ),
    ("Stock Pot", "Kitchenware", 20, 15),
    ("40 inch TV", "Home Entertainment", 500, 50),
    ("Game System", "Home Entertainment", 200, 5),
    ("5.1 Surround sound system", "Home Entertainment", 100, 10),
    ("Queen Size Bed", "Furniture", 200, 5),
    ("3-Seater couch", "Furniture", 80 , 20),
    ("Bandsaw", "Power Tools", 50, 15),
    ("Drill Press", "Power Tools", 30, 5),
    ("Angle Grinder", "Power Tools", 40, 20);