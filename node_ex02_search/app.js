var express = require("express");
var bodyParser = require("body-parser");


var app = express();

//경로는 상대적이기 때문에 __dirname을 사용해서 상대적이 경로를 잡아주는 것이 좋다
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.set("view engine","ejs");










app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/main.html");
});



app.get("/searchResult",(req,res)=>{
    res.render("result.ejs");
});



app.listen(3000,(req,res)=>{
    console.log("3000 port server open!!");
});


