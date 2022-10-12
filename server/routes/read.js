const express = require('express');
const router = express.Router();
//Import Data Model
const CardModel = require("../models/cards");  

//Read all Todos from the Database
router.get("/", (req, res)=>{  

    CardModel.find({}, (err, result)=>{ 

        if(err){
            
            res.send(err);
        }

        res.send(result); 
    }); 
});

module.exports = router;

