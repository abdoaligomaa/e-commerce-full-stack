const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Define some sample products
const products = [
  { id: 1, name: 'Product 1', price: 10.99 },
  { id: 2, name: 'Product 2', price: 19.99 },
  { id: 3, name: 'Product 3', price: 7.99 },
];

// Get all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Get a single product by ID
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).send('Product not found');
  }
  res.json(product);
});

// Add a new product
app.post('/api/products', (req, res) => {
  const product = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price,
  };
  products.push(product);
  res.json(product);
});

// Update a product by ID
app.put('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).send('Product not found');
  }
  product.name = req.body.name;
  product.price = req.body.price;
  res.json(product);
});

// Delete a product by ID
app.delete('/api/products/:id', (req, res) => {
  const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
  if (productIndex === -1) {
    return res.status(404).send('Product not found');
  }
  products.splice(productIndex, 1);
  res.sendStatus(204);
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
