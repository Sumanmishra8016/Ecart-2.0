CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description TEXT,
    image_url VARCHAR(255)
);

CREATE TABLE cart_items (
    id SERIAL PRIMARY KEY,
    product_id INT REFERENCES products(id) ON DELETE CASCADE,
    quantity INT NOT NULL DEFAULT 1
);

INSERT INTO products (name, price, description, image_url) VALUES
('Wireless Headphones', 99.99, 'Noise-canceling over-ear headphones', '/DSC06348.JPG'),
('Smart Watch', 199.49, 'Fitness tracking smartwatch', 'http://localhost:5000/DSC06344.JPG'),
('Mechanical Keyboard', 85.00, 'RGB tactile mechanical keyboard', 'http://localhost:5000/DSC06344.JPG'),
('Gaming Mouse', 49.99, 'High-precision gaming mouse', 'http://localhost:5000/DSC06344.JPG'),
('4K Monitor', 299.99, '27-inch 4K UHD monitor', 'http://localhost:5000/DSC06344.JPG'),
('Bluetooth Speaker', 59.99, 'Portable Bluetooth speaker', 'http://localhost:5000/DSC06344.JPG'),
('External Hard Drive', 79.99, '2TB USB 3.0 external hard drive', 'http://localhost:5000/DSC06344.JPG'),
('Smartphone', 699.00, 'Latest model smartphone with OLED display', 'http://localhost:5000/DSC06344.JPG'),
('Tablet', 329.99, '10-inch tablet with stylus support', 'http://localhost:5000/DSC06344.JPG'),
('Digital Camera', 499.99, 'Mirrorless digital camera with lens kit', 'http://localhost:5000/DSC06344.JPG');
('Smart Watch', 199.49, 'Fitness tracking smartwatch', 'https://via.placeholder.com/150'),
('Mechanical Keyboard', 85.00, 'RGB tactile mechanical keyboard', 'D:\boudi all\DSC06344.JPG'),
('Gaming Mouse', 49.99, 'High-precision gaming mouse', 'https://via.placeholder.com/150'),
('4K Monitor', 299.99, '27-inch 4K UHD monitor', 'https://via.placeholder.com/150'),
('Bluetooth Speaker', 59.99, 'Portable Bluetooth speaker', 'https://via.placeholder.com/150'),
('External Hard Drive', 79.99, '2TB USB 3.0 external hard drive', 'https://via.placeholder.com/150'),
('Smartphone', 699.00, 'Latest model smartphone with OLED display', 'https://via.placeholder.com/150'),
('Tablet', 329.99, '10-inch tablet with stylus support', 'https://via.placeholder.com/150'),
('Digital Camera', 499.99, 'Mirrorless digital camera with lens kit', 'D:\boudi all\DSC06344.JPG');