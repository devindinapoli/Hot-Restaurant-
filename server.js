var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req,res){
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req,res){
    res.sendFile(path.join(__dirname, "reserve.html"));
});

//Fill with dummy data later 
var tables = [
    {
        name: "Devin",
        number: "910-550-7665",
        email: "devindinapoli@gmail.com",
        id: "The Dude"
    },
    {
        name: "Devin",
        number: "910-550-7665",
        email: "devindinapoli@gmail.com",
        id: "The Dude"
    },
    {
        name: "Devin",
        number: "910-550-7665",
        email: "devindinapoli@gmail.com",
        id: "The Dude"
    },
    {
        name: "Devin",
        number: "910-550-7665",
        email: "devindinapoli@gmail.com",
        id: "The Dude"
    },
    {
        name: "Devin",
        number: "910-550-7665",
        email: "devindinapoli@gmail.com",
        id: "The Dude"
    },
];

app.get("/api/tables", function(req,res){
    res.json(tables);
});

app.post("/api/reserve", function(req,res){
    var newRes = req.body;

    tables.push(newRes);

    var isFull;

    if(tables.length === 5) {
        isFull = true
    }
    else{
        isFull = false;
    }
    res.json(isFull);
});

app.listen(PORT, function(){
    console.log("Listening on PORT " + PORT);
});