const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    LastName: String,
    email: String,
    password: String,
    city: String,
    state: String,
    created_at: String,
});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
