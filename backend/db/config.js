const mongoose = require('mongoose');
async function connect(e) {
    await mongoose.connect("mongodb://localhost:27017/Kalpo_ecommerce");

}
connect();