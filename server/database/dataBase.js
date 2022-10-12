const mongoose = require("mongoose");

const mongoURI = "mongodb+srv://Project:Password@cluster0.8w636pp.mongodb.net/?retryWrites=true&w=majority";

//Connection to MongoDB Atlas Database Cluster
const db = mongoose.connect(
    mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = db; 