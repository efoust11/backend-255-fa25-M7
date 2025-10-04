const express = require("express");
const Song = require("./models/song");
var cors = require('cors')
//const bodyParser = require("body-parser")
const jwt = require("jwt-simple")
const User = require("./models/users")

const app = express();
app.use(cors());

// Middleware that parses HTTP requests with JSON body
app.use(express.json());

const router = express.Router();
const secret = "supersecret"

//creating a new user
router.post("/user", async(req,res) => {
   if(!req.body.username || !req.body.password){
      res.status(400).json({error: "Missing username or password"})
   }

   const newUser = await new User({
      username: req.body.username,
      password: req.body.password,
      status: req.body.status
   })
   try{
      await newUser.save
      res.sendStatus(201)
   }
   catch(err){
      res.status(400).send(err)
   }
})

// Get list of all songs in the database
router.get("/songs", async function(req, res) {
   try {
      const songs = await Song.find();
      res.json(songs);
   }
   catch (ex) {
      res.status(400).send(ex.message);
   }
});

//Grab a single song
router.get("/songs/:id", async (req,res) => {
   try{
      const song = await Song.findById(req.params.id)
      res.json(song)
   }
   catch(err){
      res.status(400).send(err)
   }
})

// Add a new song to the database
router.post("/songs", async(req, res) => {
   try {
      const song = await new Song(req.body);
      await song.save();
      res.status(201).json(song);
      console.log(song);
   }
   catch (ex) {
      res.status(400).send(ex.message);
   }
});

//update an existing record, uses a put request
router.put("/songs/:id", async(req,res) => {
   //grab song by id
   try{
      const song = req.body
      await Song.updateOne({_id : req.params.id}, song)
      console.log(song)
      res.sendStatus(204)
   }
   catch(err){
      res.status(400).send(err)
   }
})

router.delete("/songs:id", async(req,res) => {
   try{
      const song = await Song.findById(req.params.id)
      console.log(song)
      await Song.deleteOne({_id: song._id})
      res.sendStatus(204)
   }
   catch(err){
      res.status(400).send(err)
   }
})


app.use("/api", router);

var port = process.env.PORT || 3000

app.listen(3000);