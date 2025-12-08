const express = require('express');
const app = express();
const port = 3000;
require('dotenv').config();

const { mongoose, userSchema } = require('./db');

const User = mongoose.model('User', userSchema);

mongoose.connection.once('open', async () => {
    console.log("MongoDB Connected Successfully");

    const newUser = new User({
        username: "Shalini",
        email: "shalinigr.23it@kongu.edu",
        age: 30
    });

    try {
        await newUser.save();
        console.log("User Saved");
    } catch (err) {
        console.log("Error saving user:", err);
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
