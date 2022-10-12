//Import modules
const express = require("express");
const cors = require("cors");
const db = require("./database/dataBase.js"); 

//Server Settings
const HOST = 'localhost';
const PORT = '8000';

//Create Server
const app = express(); 

app.use(express.json()); //Allows to receive information from the frontend in JSON format
app.use(cors()); //Allows Cross Origin Requests, connecting frontend and backend


//Import Routes
const loginRoute = require('./routes/login');
const readRoute = require('./routes/read');
const addRoute = require('./routes/add');

//Middleware
app.use('/login', loginRoute);
app.use('/read', readRoute);
app.use('/add', addRoute);

//run Server
const server = app.listen(PORT, () =>{
    console.log(`Server runs:http://${HOST}:${PORT}`);
});