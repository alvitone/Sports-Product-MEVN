const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter product name"],
    },
    price: {
        type: Number,
        required: [true, "Please enter the product price"],
    },
    available:{
        type:Boolean,
    required:true    }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
