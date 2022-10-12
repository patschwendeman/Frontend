//Define the schema of the collection 
const mongoose = require("mongoose"); 

//Object as the representation of the data schmema
const CardSchema = new mongoose.Schema( {
    _id: String,
    quest: String,
    answer: String

});

const CardModel = mongoose.model('card', CardSchema); 

module.exports = CardModel; 


