const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    LastName: String,
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: String,
    city: String,
    state: String,
    created_at: {
        type: String,
        default: new Date(),
    },
});

const userEducation = new mongoose.Schema({
    degree: String,
    university: String,
});

const userModel = mongoose.model('users', userSchema);
const userEduModel = mongoose.model('users_education', userEducation);

module.exports = { userModel, userEduModel };
