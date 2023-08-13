const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');


const JWT_SECRET = "Asitisa@goodboy"

const fetchuser = (req, res, next) => {
    //get the user from the jwt token and add id to req
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ error: "pls use a valid token" });

    }
    try {
        const str = jwt.verify(token, JWT_SECRET);
        //As while creating a auth token i have used user as payload data
        //here i am userin verify method to decode auth token and get the data 
        //i am attechong thepayload dta to req obj and will fetch it in the route created 
        req.user = str.user;
        next();

    } catch (error) {
        res.status(401).send({ error: "pls use a valid token" })
    }
}
module.exports = fetchuser