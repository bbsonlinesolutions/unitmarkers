
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    variants: [String],
    stock: Number,
    image: String,
});

module.exports = mongoose.model('Product', productSchema);
