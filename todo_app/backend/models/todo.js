const mongoose = require('mongoose');
require('dotenv').config();

const todoSchema = new mongoose.Schema({
    title: {
        type: String,   
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    completed: {
        type: String,
    }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;