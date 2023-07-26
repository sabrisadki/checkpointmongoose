const mongoose = require('mongoose');

const connectdb = async () => {
    try {
        await mongoose.connect("mongodb+srv://contactlist:QC6nwXbJJ5kie0Q5@cluster0.aidgufy.mongodb.net/?retryWrites=true&w=majority");
        console.log("DB connect successful!");
    } catch (err) {
        console.error("DB connection error:", err);
    }
};

module.exports = connectdb;
