const express = require("express");
const { model } = require("mongoose");
const router = new express.Router();
const fetchuser = require("../middleware/fetchuser");
const Notes = require("../model/Notes");
const { param } = require("express-validator");


//Route:1 GET ALL NOTES OF A PARTICULAR USER
//user needs to be loged in
router.get("/api/fetchallnotes", fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({ userId: req.user.id });
        res.json(notes);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("internal server error");
    }

});

//Route:2  CREATE NOTES OF A PARTICULAR USER
//user needs to be loged in
router.post("/api/addnote", fetchuser, async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        const note = await Notes.create({
            title,
            description,
            tag,
            userId: req.user.id
        });
        res.send(note);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("internal server error");
    }

});

//Route:3  UPDATE NOTES OF A PARTICULAR USER
//user needs to be loged in
router.patch("/api/updatenote/:id", fetchuser, async (req, res) => {
    try {

        const { title, description, tag } = req.body;
        let note = await Notes.findById(req.params.id);
        const newNote = {};
        //checking weather user provided title desc or tag
        if (title) newNote.title = title;
        if (description) newNote.description = description;
        if (tag) newNote.tag = tag;
        if (!note) return res.status(404).send("Not Found");
        //checking if the user is trying to update its own note or not
        if (note.userId.toString() != req.user.id) { return res.status(401).send("Not Allowed") };

        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { upsert: true });
        res.send(note);
    } catch (err) {
        console.log(err.message);
        res.status(500).send("some internal error occured");
    }
});

//Route:4  DELETE NOTES OF A PARTICULAR USER
//user needs to be loged in
router.delete("/api/deletenote/:id", fetchuser,async (req, res) => {
    try {
        //finding the note to be deleted
        const note =await  Notes.findById(req.params.id);
        if (!note) return res.status(404).send("Not found");
        //checking if the user is trying to delete its own note or not
        if (note.userId.toString() != req.user.id) return res.status(401).send("Not Allowed")
        const delNote =await Notes.findByIdAndDelete(req.params.id);
        res.send(delNote);
    } catch (err) {
        console.log(err.message);
        res.status(500).send("some internal error occured");
    }

});
module.exports = router;