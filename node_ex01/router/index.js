var express = require("express");
var app = express();
var main = require("./main");
var email = require("./email");
var router = express.Router();
var path = require("path");



app.use("/main",main);
app.use("/email",main);


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname ,"../public/src/html/service.html"));
});

module.exports = router;
