CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
id INT NOT NULL AUTO_INCREMENT,
product_name  VARCHAR(30),
department_name VARCHAR(30),
price INTEGER(10),
quantity INTEGER(10),
PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, quantity)
	VALUES('kids_shoes', 'clothing', 10, 15);
    
INSERT INTO products (product_name, department_name, price, quantity)
	VALUES('adult_shoes', 'clothing', 15, 25);
INSERT INTO products (product_name, department_name, price, quantity)
	VALUES('kids_shirt', 'clothing', 8, 10);
INSERT INTO products (product_name, department_name, price, quantity)
	VALUES('adult_shirt', 'clothing', 27, 25);
INSERT INTO products (product_name, department_name, price, quantity)
	VALUES('kids_pants', 'clothing', 13, 15);
    INSERT INTO products (product_name, department_name, price, quantity)
	VALUES('adult_pants', 'clothing', 18, 10);
    
INSERT INTO products (product_name, department_name, price, quantity)
	VALUES('blocks', 'toys', 10, 15);
INSERT INTO products (product_name, department_name, price, quantity)
	VALUES('magnets', 'toys', 10, 10);
INSERT INTO products (product_name, department_name, price, quantity)
	VALUES('doll', 'toys', 16, 25);
INSERT INTO products (product_name, department_name, price, quantity)
	VALUES('ball', 'toys', 2, 30);

INSERT INTO products (product_name, department_name, price, quantity)
	VALUES('microwave', 'kitched', 38, 10);
INSERT INTO products (product_name, department_name, price, quantity)
	VALUES('pots_pans', 'kitched', 52, 20);
INSERT INTO products (product_name, department_name, price, quantity)
	VALUES('toaster', 'kitched', 13, 25);
INSERT INTO products (product_name, department_name, price, quantity)
	VALUES('corckpot', 'kitched', 27, 20);




SELECT * FROM products;