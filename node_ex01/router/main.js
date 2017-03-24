/**
 * Created by donghyunkim on 2017. 3. 24..
 */


var express = require("express");
var app = express();


//express 하단의 Router 라는 메소드를 실핸 시킨다.
var router = express.Router();



// main url로 처리 되는 것을 app 에서 모두 처리하지 말고 router 모듈을 통해 처리한다



//서버에서도 비동기로 해당 경로로 들어오길 기다리고 있다
app.get('/main',(req,res)=>{
    res.sendFile(__dirname + "/public/src/html/service.html");
});

