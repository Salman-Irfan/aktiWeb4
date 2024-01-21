const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    productImageLink: String,
}, {
    timestamps: true,
});

const Product = mongoose.model('products',productSchema)

module.exports = Product