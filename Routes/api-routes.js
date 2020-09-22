const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/getNotes',(req,res) => {
    fs.readFile('./notes.json', "utf8", (err,data) => {
        if (err) throw err;
        data = JSON.parse(data);
        res.send(data);
    });
});

router.post("/addNotes", (req,res)=>{
    let notes = fs.readFileSync("./notes.json", "utf8");
    let note = req.body;
    let newNote = JSON.parse(notes);
    note.id = newNote.length + 1;
    
    newNote.push(note);
    fs.writeFileSync("./notes.json", JSON.stringify(newNote, null, 2));
    res.send({msg: "added"});
});

module.exports = router;