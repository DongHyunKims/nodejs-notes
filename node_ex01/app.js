/**
 * Created by donghyunkim on 2017. 3. 21..
 */


var express = require('express');
var app = express();

var bodyParser = require('body-parser');


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


app.get('/',(req,res)=>{
   // res.send("<h1>hi firends!!!!</h1>");

    //
    res.sendFile(__dirname + "/public/src/html/service.html");
});


//서버에서도 비동기로 해당 경로로 들어오길 기다리고 있다
app.get('/main',(req,res)=>{
    res.sendFile(__dirname + "/public/src/html/service.html");
});



app.get('/login',(req,res)=>{

    res.sendFile(__dirname + "/public/src/html/form.html")
});


app.post('/email_post',(req,res)=>{

    //req.body는 input 태그의 name 과 val값을 {}객체 형태로 만들어 준다
    console.log(req.body);
    let body = req.body;
    //res.send("<h2>welcome " + body.emailId);

    res.render('email.ejs', {'email' : body.emailId});
});

