/**
 * Created by donghyunkim on 2017. 3. 24..
 */


var express = require("express");
var app = express();
var path = require("path");


//express 하단의 Router 라는 메소드를 실핸 시킨다.
var router = express.Router();

// main url로 처리 되는 것을 app 에서 모두 처리하지 말고 router 모듈을 통해 처리한다
//서버에서도 비동기로 해당 경로로 들어오길 기다리고 있다

// 이미 app에서 /main으로 라우팅 되어 들어왔기 때문에 루트만 써줘도 "http://localhost:3000/main" 으로 처리된 것이다.
router.get('/',(req,res)=>{
    // tip. 상대 경로를 사용하기 위해 path.join을 사용하여 현재 경로와 두번째 인자의 경로를 합쳐 상대경로로 인식하게 한다.
    res.sendFile(path.join(__dirname + "../public/src/html/service.html"));
});

module.exports = router; 
