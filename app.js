const mongoose = require('mongoose');
const express = require('express');
const app = express();
const router = require('./router');

mongoose.set('strictQuery', true);
app.use(express.json());

mongoose
    .connect('mongodb://0.0.0.0:27017/user_data')
    .then(() => {
        console.log('Connected With MongoDB');
        app.use(router);
    })
    .catch((err) => {
        console.log(err);
    });

app.listen(4040);
