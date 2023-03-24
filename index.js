const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const port = process.env.PORT;
const url = process.env.URL;

app.use(express.json());
app.use(bodyParser());

mongoose.set('strictQuery', true);
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("Connected to database");
})
.catch(err => {
    console.log("Error connecting databse", err);
})

app.get('/test', (req,res) => {
    res.json('express server test OK');
})

app.listen(port, () => {
    console.log(`Server is Running on ${port}`);
})