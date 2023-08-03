const mongoose = require('mongoose');
const connect = require("./db/conn");
const express = require("express");
const router = require("./routes/router")
const app = express();
const port = 80;

//connecting to db
connect();
app.use(express.json());//middleware to deal with req.body and json

app.use(router);



//listening server

app.listen(port,()=>{
    console.log("server started");
})