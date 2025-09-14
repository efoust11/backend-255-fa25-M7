//setup
const express = require("express");
var cors = require("cors");
//activate or tell this app variable to be an express server
const app = express();
app.use(cors());
const router = express.Router();



//making an api using routes

//GET or a regular request when someone goes to http://localhost:3000/hello


router.get("/songs", function(req,res){
    const song = [
        {
            title: "We Found Love",
            artist: "Rihanna",
            popularity: 10,
            releaseDate: new Date(2011, 9, 22),
            genre: ["electro house"]
        },
        {
            title:"Happy",
            artist:"Pharrell Williams",
            popularity:10,
            releaseDate: new Date(2019, 11, 21),
            genre: ["soul", "new soul"]
        }
    ];
    res.json(song);
});

app.use("/api", router);
app.listen(3000);

