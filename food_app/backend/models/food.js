const mongoose = require('mongoose');
require('dotenv').config();

const foodSchema = new mongoose.Schema({
    foodName: {
        type: String,
        required: true
    },
    daysSinceIAte: {
        type: Number,
        required: true
    }
    ,
    user: {
        type: String,
        required: false
    }
},);

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
