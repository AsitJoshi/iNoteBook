const mongoose = require("mongoose");

const connectToMongo = async ()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/inotebook");
        console.log("success");

    }catch(err){
        console.log(err);
    }
}
module.exports = connectToMongo;