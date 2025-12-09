const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Todo = require('./models/todo');

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log("DB Error:", err));

app.use(cors());
app.use(express.json());

app.post('/insert', async (req, res) => {
    const { title, description } = req.body;

    try {
        const todo = new Todo({ title, description });
        await todo.save();
        res.status(201).json({ message: "Todo created successfully", todo });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/read', async (req, res) => {
    try {
        const todos = await Todo.find({});
        res.status(200).json(todos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put('/todos/:id', async (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;

    try {
        const updatedTodo = await Todo.findByIdAndUpdate(
            id,
            { title, description, completed },
            { new: true }
        );
        res.status(200).json({ message: "Todo updated successfully", updatedTodo });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/del/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await Todo.findByIdAndDelete(id);
        res.status(200).json({ message: "Todo deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
