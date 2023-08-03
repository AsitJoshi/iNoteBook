const express = require("express");
const app = express(); 
const router = new express.Router();
const User = require("../model/User");


//create a user using POST method
router.post("/api/auth",(req,res)=>{
   console.log(req.body);
   const user =new User(req.body);
   user.save();
    res.status(200).send("hello"+req.body);
});

module.exports = router;