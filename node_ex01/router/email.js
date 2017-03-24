var express = require("express");
var app = express();

var router = express.Router();
var path = require("path");


router.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname , "../public/src/html/form.html"))
});

router.post('/email_post',(req,res)=>{
    //req.body는 input 태그의 name 과 val값을 {}객체 형태로 만들어 준다
    let body = req.body;
    //res.send("<h2>welcome " + body.emailId);

    res.render('email.ejs', {'email' : body.emailId});
});


module.exports = router;
