const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const Food = require('./models/Food');
const User = require('./models/User');

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

app.use(cors());
app.use(express.json());

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) return res.status(401).send("Access Denied: No Token Provided");

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).send("Invalid Token");

        req.user = user; 
        next();
    });
}

app.post('/signup', async (req, res) => {
    const { username, password } = req.body;

    try {
        const existingUser = await User.findOne({ username });

        if (existingUser) {
            return res.status(409).send("User already exists");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();

        res.status(201).send("Signup successful");
    } catch (err) {
        res.status(500).send("Error signing up: " + err);
    }
});


app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (!user) return res.status(404).send("User not found");

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) return res.status(401).send("Invalid password");

        // Create JWT token
        const token = jwt.sign(
            { id: user._id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: "2h" }
        );

        res.status(200).json({ message: "Login successful", token });
    } catch (err) {
        res.status(500).send("Error logging in: " + err);
    }
});



app.post('/insert', authenticateToken, async (req, res) => {
    const { foodName, daysSinceIAte } = req.body;

    const food = new Food({
        foodName,
        daysSinceIAte,
        user: req.user.id 
    });

    try {
        await food.save();
        res.status(200).send("Food Item added successfully");
    } catch (err) {
        res.status(500).send("Error adding food item: " + err);
    }
});


app.get('/read', authenticateToken, async (req, res) => {
    try {
        const foodItems = await Food.find({ user: req.user.id });
        res.status(200).json(foodItems);
    } catch (err) {
        res.status(500).send("Error retrieving food items: " + err);
    }
});


app.put('/update/:id', authenticateToken, async (req, res) => {
    try {
        await Food.findOneAndUpdate(
            { _id: req.params.id, user: req.user.id },
            { daysSinceIAte: req.body.newDays }
        );

        res.status(200).send("Food Item updated");
    } catch (err) {
        res.status(500).send("Error updating: " + err);
    }
});


app.delete('/delete/:id', authenticateToken, async (req, res) => {
    try {
        await Food.findOneAndDelete({ _id: req.params.id, user: req.user.id });
        res.status(200).send("Food Item deleted");
    } catch (err) {
        res.status(500).send("Error deleting: " + err);
    }
});



app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
