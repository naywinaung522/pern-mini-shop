CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  price NUMERIC(10,2) NOT NULL,
  description TEXT,
  image_url TEXT
);

INSERT INTO products (name, price, description, image_url) VALUES
('Wireless Mouse', 19.99, 'Ergonomic 2.4G mouse', 'https://picsum.photos/seed/mouse/400'),
('Mechanical Keyboard', 79.99, 'RGB hot-swap keyboard', 'https://picsum.photos/seed/keyboard/400'),
('USB-C Hub', 34.50, '7-in-1 adapter', 'https://picsum.photos/seed/hub/400'),
('Noise-Cancelling Headphones', 129.00, 'Over-ear Bluetooth', 'https://picsum.photos/seed/headphones/400'),
('1080p Webcam', 49.99, 'Auto-focus webcam', 'https://picsum.photos/seed/webcam/400'),
('Portable SSD 1TB', 99.00, 'USB 3.2 external drive', 'https://picsum.photos/seed/ssd/400');