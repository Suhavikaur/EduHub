const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://suhavibhatia2:koko1105@clustesr0.79arqzj.mongodb.net/doctorapp", {useNewUrlParser: true}, {useUnifiedTopology: true})
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html")
})

const notesSchema = {
    title: String,
    content: String,
    email: String
}

const Note = mongoose.model("Note", notesSchema)

app.post("/" ,function(req, res) {
    let newNote = new Note({
        title : req.body.title,
        content : req.body.content,
        email : req.body.email
    })
    newNote.save()
    res.redirect("/")
})

app.listen(3000, function() {
    console.log('Server is running on port 3000')
})