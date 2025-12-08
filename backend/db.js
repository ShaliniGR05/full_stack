const mongoose = require('mongoose')
require('dotenv').config();

const uri = process.env.uri;
mongoose.connect( uri)
const connection = mongoose.connection;
connection.once('open',() =>{
    console.log("MongoDB database connected Succesfully");
});

const userSchema = new mongoose.Schema({
    username: {type:String,required:true},
    email: {type:String,required:true},
    age: {type:Number,required:true}
});

module.exports = {mongoose,userSchema};
