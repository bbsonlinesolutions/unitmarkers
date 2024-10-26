
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Database connection
mongoose.connect('mongodb://localhost:27017/unitmarkers', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Routes
app.use('/api/products', require('./routes/products'));
app.get('/', (req, res) => res.render('index'));
app.get('/products', (req, res) => res.render('products'));

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
