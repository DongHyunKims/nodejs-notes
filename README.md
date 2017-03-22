## nodejs

#### node 기초

- package.json을 사용하면 용량이 큰 npm 폴더를 github에 업로드 하지 않고도 클론시 npm을 설치하여 바로 사용 할수 있다. 일종의 config 파일이다.
- npm install express `--save` 시 package 파일에 의존 되어 어디서든지 사용가능하다

- require은 nodemodules 폴더에 있는 node package 들을 가져와 사용 할수 있도록 해준다
- 노드 js는 비동기로 동작 하기 때문에 콜백 함수는 가장 늦게 실행된다.
- dist 폴더에는 서비스 배포시 공백등 필요없는 파일을 줄여서 배포하는 min.js같은 파일을 넣을 수 있다.

  > gulf, grunt, webpack등 , 프로젝트의 모든 js 파일을 합치고 공백과 같은 내용을 모두 없앤후 bundle파일이다.
  > 결국 dist파일이 최종적으로 배포 되는 것다

- dom 조작을 방해 하지 않기 위해 스크립트파일은 모두 밑에 정의 한다
- 다양한 테스트 코드를 test 폴더 안에 작성한다.
- 위와 같은 폴더 구조를 만들수 있다.


#### node 프로젝트 생성순서

1. npm init 명령어를 통해 package.json 파일을 생성
2. `npm install --save [modules]` 명령어를 통해 필요한 모듈을 package.json에 dependencies를 추가 한다.
 > ex) npm install --save body-parser ejs express mongoose ...

 > <img src="./images/node_dependencies.png" width="400"/>

3. app.js 파일을 생성
 - app.js의 기본 구성
> <img src="./images/node_app.png" width="600"/>

#### url 라우팅

- url은 http메소드 중 get으로 요청한다
- res.sendFile메소드를 통해 html 파일을 클라이언트에게 보내줄 수 있다


- get
> get이란?
> 데이터를 가져오는 역할을 하는 메소드<br>
> 서버에서도 비동기로 해당 경로로 들어오길 기다리고 있다.
~~~
    app.get('/main',(req,res)=>{
        res.sendFile(__dirname + "/public/src/html/service.html");
    });
~~~

- post
> post란?
> http method 이다. post는 url에 정보가 담기는 것이 아니다. 중요한 데이터를 보낼때에는 post로 보내는 것이 정상 적이다.<br>
> post는 데이터를 보낼때 사용하는 메소드, 데이터를 저장하는 메소드<br>
> 보통 form 태그와 submit을 통해 데이터를 보낼 수 있다.
~~~
  app.post('/email_post',(req,res)=>{
      console.log(req.body);
      let body = req.body;
      res.render('email.ejs', {'email' : body.emailId});
  });
~~~

- body-parser
> post의 데이터를 받을수 있도록 만드는 모듈, post는 정보를 body안에 넣어 오기 때문에 body안의 정보를 body-parser을 통해 바꾸어준다.<br>
> app.use(bodyParser.urlencoded({extended : true})); 을 통해 url인코딩을 계속 적용 할수 있다.<br>
> req.body는 input 태그의 name 과 val값을 {}객체 형태로 받아온다

- view engine
> node.js의 view engine을 통해 클라이언트로 응답을 보낼 때 적절한 데이터를 넣어서 보내줄수 있다.<br>
> view template는 여러개 있다 기본으로 jade, ejs등이 있다.<br>
> npm install ejs --save를 통해 설치 후 `app.set('view engine', 'ejs');` 을 셋팅 해준다<br>
> `res.render('email.ejs', {'email' : body.emailId});` 와 같이 render 함수를 통해서 서버로 부터 데이터를 받아 views/email.ejs파일에 렌더링 해준다.


- static 디렉토리 추가
> url로 접근해서 브라우저에 내려 받을수 있는 정적파일의 위치를 등록한다.<br>
> `app.use(express.static('public'))`을 통해 public 아래에 있는 js,css,images폴더의 정적파일을 받아 렌더링 하게 해준다.<br>
> app.use(express.static('public')); 을 사용하여 public폴더 안에 있는 모든 static 파일을 서버에서 내려보내지도록 처리한다.<br>
> node 에서는 js, css 등과 같은 파일을 static 파일이라고 한다. 변경이 되지 않는 정적인 파일이다. 서버에서 요청 받는데로 바로 처리하면 좋다.<br><br>
> <img src="./images/node_public.png" width="300" height="400">
