const express = require('express');
require('dotenv').config();
const path = require('path');
const mongoose = require('mongoose');
const app = express();


app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, 'public')));

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1);
  }
};
connectDB();

const port = process.env.PORT;

const newUserSchema = new mongoose.Schema({
    email : String,
    phoneNumber : Number,
    firstName : String,
    lastName : String,
    isSlotBokked : Boolean,
    date : String,
    slot : String
});

const UserSchema = new mongoose.Schema({
    email : String,
    phoneNumber : Number,
    firstName : String,
    lastName : String,
    isSlotBokked : Boolean
});

const User = mongoose.model('User', UserSchema);
const newUser = mongoose.model('newUser', newUserSchema);



app.get('/', async(req,res)=>{
    res.render('index')
});

app.get('/send_data_1', async(req,res)=>{
    try {

        const data = await User.find();
        // console.log(data);
        res.json(data);
    } catch (error) {
        console.log(error);
    }
});

app.get('/send_data_2', async(req,res)=>{
    try {

        const data = await newUser.find();
        // console.log(data);
        res.json(data);
    } catch (error) {
        console.log(error);
    }
});

app.listen(port,()=>{
    console.log('server listing at port',port);
})