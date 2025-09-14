//setup
const express = require("express");
//activate or tell this app variable to be an express server
const app = express();
const router = express.Router();

//start the web server
app.listen(3000, function(){
    console.log("listening on port 3000");
});

//making an api using routes

//GET or a regular request when someone goes to http://localhost:3000/hello
// app.get("/hello", function(req,res){
//     res.send("<h1>Hello Express</h1>");
// });

// app.get("/goodbye", function(req,res){
//     res.send("<h1>Goodbye, Express!</h1>");
// });