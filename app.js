const express = require("express");
const consign = require("consign");

var app = express();

consign().include("app/routes").into(app);

var port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log("Server is running on port 3000");
});
