/**
 * Created by donghyunkim on 2017. 3. 21..
 */


var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = require('./router/index');
var main = require("./router/main");
var email = require("./router/emial");


//main에 대한 라우터는 "main" 이 router 하는 것.
app.use("/main",main);

app.use("/email",main);

app.use(router);


app.use(express.static('public'));
app.use(express.static('public/src'));


//클라이언트 에서 올때 json형태로 올수도 있기 때문에  지정 해준다
app.use(bodyParser.json());
//한글이나 특수기호를 인코딩을 통해 다른 문자로 치환해서 보내주어야 한다
// extended:true를 해줘야 한다 .왜냐하면 url인코딩이 계속 적용될지 1번만 적용할지 묻는 것이기 때문

app.use(bodyParser.urlencoded({extended : true}));

//뷰 엔진을 설정하는 방법
app.set('view engine', 'ejs');



//3000 포트를 기반으로 콜백함수를 실행 시켜준다
app.listen(3000, function(){
    console.log("start server!! port 3000");
});
