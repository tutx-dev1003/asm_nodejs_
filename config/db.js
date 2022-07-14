const mongoose = require("mongoose");

async function connect(){
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/asm_nodejs_dev',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("connect success");
    } catch (error) {
        console.log("connect false");
    }
}

module.exports = {connect};
