const express = require("express");
const Song = require("./models/song");
var cors = require('cors')

const app = express();
app.use(cors());

// Middleware that parses HTTP requests with JSON body
app.use(express.json());

const router = express.Router();

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


app.use("/api", router);

app.listen(3000);