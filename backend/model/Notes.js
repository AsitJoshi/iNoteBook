const mongoose=  require("mongoose");

const NotesSch = new mongoose.Schema({
    //user is my foriegn key
    userId:{
        type: mongoose.Schema.Types.ObjectId,// it defines that the user will hold data from another schema
        ref:'User'
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    tag:{
        type:String,
        default:"General"
    },
    date:{
        type:Date,
        default:Date.now
    },
});

module.exports = mongoose.model("note",NotesSch);