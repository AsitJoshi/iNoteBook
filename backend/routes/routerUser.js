const express = require("express");
const app = express();
const router = new express.Router();
const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const fetchuser = require("../middleware/fetchuser")


//Idealy this is kept in .evn file 
//this is a string from which jwt token sign is created and this should be kept hidden form anyone
const JWT_SECRET = "Asitisa@goodboy";

//create a user using POST method
router.post("/api/createuser", async (req, res) => {
    let success = false;

    try {
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);//genrates a hash for ur pwd with salt added
        const user = await User.create({
            name: req.body.name,
            password: secPass,//instead of pwd we save user with hashed pwd
            email: req.body.email
        });

        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = await jwt.sign(data, JWT_SECRET);
        console.log(authToken);


        // await user.save();
        // res.status(200).send(user);
        success = true;
        res.status(200).json({ success, authToken });
    } catch (error) {
        res.status(500).json({ success, msg: error.message })
        console.log(error.message);
    }

});




//Authenticate a user using post req
router.post("/api/authuser", async (req, res) => {
    let success = false;

    const { email, password } = req.body;
    // console.log(password);
    try {
        let user = await User.findOne({ email });
        if (!user) {
            success = false;
            return res.status(400).json({ success, msg: "invalid email aur password" });
        }
        //password-entered by user//user.password=pwd present in ur db
        const comparePwd = await bcrypt.compare(password, user.password);//this function comapare the entered pwd with the hash present in ur data base
        if (!comparePwd) {
            success = false;
            return res.status(400).json({ success, msg: "invalid email aur password" });
        }

        const payload = {//payload is the data present in the aut token
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(payload, JWT_SECRET);
        success = true;
        res.json({ success, authToken })

    } catch (error) {
        console.log(error);
        // res.status(500).send("some error occured");
    }
});

//Get loggedin user details using post : login requried
//fetchuser is my middleware
router.post("/api/getuser", fetchuser, async (req, res) => {
    try {
        const userid = req.user.id;//fetching the id from req that has been atteched by middleware
        const user = await User.findById(userid, { password: 0 });
        res.status(200).send(user);
    } catch (error) {
        console.log(error);
    }
})



module.exports = router;