const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
//Import Data Model
const UserModel = require("../models/user");  

router.post("/", async (req, res)=>{  

    const { userName, password} = req.body;
    const user = await UserModel.findOne({userName}); //Looking for User in DB

    if(!user) {
        console.log("not a match");        
    }

    const isMatch = await bcrypt.compare(password, user.password); //Rehashing password and looking for match

    if(!isMatch){
        console.log("wrong pw");      
    }
    else{
        res.send(true); //authorizated User       
    }
});

module.exports = router;