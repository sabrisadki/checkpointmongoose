const mongoose = require('mongoose');

const contactsSchema = mongoose.Schema({
    firstname: String,
    lastname: {
        type: String,
        required: true
    },
    age: Number,
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: String,
    telephone: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Francis', contactsSchema);
