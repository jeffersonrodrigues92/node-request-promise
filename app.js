const express = require("express");
const consign = require("consign");

var app = express();

consign().include("app/routes").into(app);

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});