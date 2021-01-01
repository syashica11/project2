require('dotenv').config();
var express = require("express");
var app = express();

var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/views"));

var todoRoutes = require("./routes/todos");

app.use("/api/todos", todoRoutes);

app.use("/", function(req, res) {
    res.send("index.html");
});

app.listen(process.env.PORT, function() {
    console.log("Working @ " + process.env.PORT);
});