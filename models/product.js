const mongoose = require("mongoose");

const Product = new mongoose.Schema({
    productName: {
        type: String
    },
    price: {
        type: String
    },
    description: {
        type: String
    },
    size: [{
        type: String
    }], 
    color: [{
        type: String
    }], 
    image: {
        type: String
    },
    catagoryName: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("product", Product);
