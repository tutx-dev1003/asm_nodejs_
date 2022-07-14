const mongoose = require("mongoose");

const schemaCatagory = new mongoose.Schema({
    Name: {
        type: String
    }
    
}, { timestamps: true });

module.exports = mongoose.model("catagory", schemaCatagory);
