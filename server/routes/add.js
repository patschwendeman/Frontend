//Import Modules
const express = require('express');
const router = express.Router();
//Import Data Model
const CardModel = require("../models/cards");  


//Add new Todo to Database
router.post("/", async (req, res)=>{ 

    //Represents the value from the frontend 
    const _id = req.body._id;;
    const quest = req.body.quest; 
    const answer = req.body.answer;

    //Create new Todo based on defined schema
    const card = new CardModel({ _id: _id, quest: quest, answer: answer });

    try{
        await card.save(); 
        res.send("Added new Card");
    }
    catch(err){
        console.log(err);
    }
});

module.exports = router;