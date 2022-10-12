//Define the schema of the collection 
const mongoose = require("mongoose"); 

//Object as the representation of the data schmema
const UserSchema = new mongoose.Schema( {
    _id: String,
    userName: String,
    password: String

});

const UserModel = mongoose.model('user', UserSchema); 

module.exports = UserModel; 