const mongoose = require('mongoose');
const connect = require("./db/conn");
const express = require("express");
const routerUser = require("./routes/routerUser");
const routerNotes = require("./routes/routerNotes");
const app = express();
const port = 80;
const cors = require('cors');

//connecting to db
connect();
app.use(express.json());//middleware to deal with req.body and json
app.use(cors());

app.use(routerUser);
app.use(routerNotes);
// app.use();



//listening server

app.listen(port,()=>{
    console.log("server started");
})