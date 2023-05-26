import http from 'http'
import fs from 'fs' 
import join from './modules/join.js'
import join2 from './modules/join2.js'
import emailDulicateCheck from './modules/emailDulicateCheck.js'


const server = http.createServer((req,res)=>{
  // const url = url.parse(req.url);
  if(req.method==="GET" && req.url==="/"){ 
    fs.readFile('./views/html/topPage.html','utf-8',(err,data)=>{
      if(err){
        console.log(err);
        res.statusCode=500;
        res.end('err')
      }
      else{
        res.writeHead(200,'Content-Type','text/html');
        console.log(req.url)
        res.write(data)
        res.end()
      }
    })  
  }
  else if(req.method==="GET" && req.url==="/modules/core.js"){
    fs.readFile('./modules/core.js','utf-8',(err,data)=>{
      if(err){
        throw new Error
      }
      else{
        res.writeHead(200,'Content-Type','text/javascript');
        res.end(data);
      }
    })
  }
  else if(req.method==="GET" && req.url==="/views/js/topLayout.js"){ 
    fs.readFile('./views/js/topLayout.js','utf-8',(err,data)=>{
      if(err){
        console.log(err)
      }
      else{
      res.writeHead(200,'Content-Type','text/javascript');
      res.end(data);
      }
    })
  }


  if(req.method==="GET" && req.url==="/mypage"){
    fs.readFile('./views/html/myPage.html','utf-8',(err,data)=>{
       if(err){
        console.log(err)
       }
       else{
        res.writeHead(200,'Content-Type','text/html');
        console.log(req.url)
        res.write(data)
        res.end()
       }
    })
    
  }

  if(req.url==="/modules/core.js"){
    fs.readFile('./modules/core.js','utf-8',(err,data)=>{
      if(err){
        console.log(err)
      }
      else{
      console.log(req.url)
      res.writeHead(200,'Content-Type','text/javascript');
      res.end(data);
      }
    })
  }
   if(req.url==="/views/js/mypageLayout.js"){
    fs.readFile('./views/js/mypageLayout.js','utf-8',(err,data)=>{
      if(err){
        console.log(err)
      }
      else{
      console.log("a")
      console.log(req.url)
      res.writeHead(200,'Content-Type','text/javascript');
      res.end(data);
      }
    })
  }
  if(req.method==="GET" && req.url==="/login"){
    fs.readFile('./views/html/loginPage.html','utf-8',(err,data)=>{
      if(err){
        console.err("에러발생")
      }
      else{
        res.writeHead(200,'Content-Type','text/html');
        res.end(data);
      }
    })
  }
  if(req.url==="/modules/core.js"){
    fs.readFile('./modules/core.js','utf-8',(err,data)=>{
      if(err){
        console.err("에러발생")
      }
      else{
        res.writeHead(200,'Content-Type','text/javascript');
        res.end(data);
      }
    })
  }
  if(req.url==="/views/js/loginLayout.js"){
    fs.readFile('./views/js/loginLayout.js','utf-8',(err,data)=>{
      if(err){
        console.err("에러")
      }
      else{
        res.writeHead(200,'Content-Type','text/javascript')
        res.end(data);
      }
    })
  }
  if(req.method==="GET" && req.url==="/join"){
    fs.readFile('./views/html/joinPage.html','utf-8',(err,data)=>{
      if(err){
        console.err("에러발생")
      }
      else{
        res.writeHead(200,'Content-Type','text/html')
        res.end(data)
      }
    })
  }
  if(req.url==="/modules/core.js"){
    fs.readFile('./modules/core.js','utf-8',(err,data)=>{
      if(err){
        console.err("에러발생")
      }
      else{
        res.writeHead(200,'Content-Type','text/html')
        res.end(data)
      }
    })
  }
 
  // if(req.url==="/modules/join.js"){
  //   fs.readFile('./modules/join.js','utf-8',(err,data)=>{
  //     if(err){
  //       console.err("에러발생")
  //     }
  //     else{
  //       res.writeHead(200,'Content-Type','text/javascript')
  //       res.end(data)
  //     }
  //   })
  // }
  if(req.url==="/views/js/joinLayout.js"){
    fs.readFile('./views/js/joinLayout.js','utf-8',(err,data)=>{
      if(err){
        console.err("에러발생")
      }
      else{
        res.writeHead(200,'Content-Type','text/javascript')
        res.end(data)
      }
    })
  }
  if(req.url==="/modules/mysqlreq.js"){
    fs.readFile('./modules/mysqlreq.js','utf-8',(err,data)=>{
      if(err){
        console.err("에러발생")
      }
      else{
        res.writeHead(200,'Content-Type','text/javascript')
        res.end(data)
      }
    })
  }
  if(req.method==="POST" && req.url==="/a"){
    let data=""
    let data1={}
    req.on('data',(chunk)=>{
      data+=chunk      
      let splitdata = data.split('&')
      data1.id=splitdata[0]
      data1.password=splitdata[1]
      data1.name=splitdata[2]
      data1.phone1=splitdata[3]
      data1.phone2=splitdata[4]
      data1.phone3=splitdata[5]
      data1.email=splitdata[6]
      console.log(data1)
    })

  req.on('end',()=>{
    join2(data1)
    .then(result=>{
        if(result===true){
          res.writeHead(200,'text/plain')
          res.end("회원가입 완료")
        }
        else{
          res.writeHead(200,'text/plain')
          res.end("회원가입 실패")
        }
    })
    .catch(err=>{
      console.err("err")
    })
  })
  }
  if(req.method==="POST" && req.url==="/idcheck"){
    let data=""
    let data1={};
    let text =""
    req.on('data',(chunk)=>{
      data+=chunk
      // console.log(data)
      data1.id=data
      // console.log(data1)
      
    })
    req.on('end',(chunk)=>{
      let text =""
      join(data1)
      .then(result => {
        if(result===true){
          text="아이디 생성이 가능합니다!."
        }
        else{
          text="중복된 아이디가 존재합니다!"
        }
        res.writeHead(200,'Content-Type','text/plain')
        res.end(text)    

      })
      .catch(error => {
        console.error(error);
      });
    })
  }
  if(req.method==="POST" && req.url==="/emailDuplicateCheck"){
    let data=""
    let data1={};
    req.on('data',(chunk)=>{
      data+=chunk
      let splitdata = data.split('&')
      data1.id=splitdata[0]
      data1.password=splitdata[1]
      data1.name=splitdata[2]
      data1.phone1=splitdata[3]
      data1.phone2=splitdata[4]
      data1.phone3=splitdata[5]
      data1.email=splitdata[6]      
      console.log(data1)
    })
    req.on('end',(chunk)=>{
      emailDulicateCheck(data1)
      .then(result => {
        if(result===true){
          res.writeHead(200,'Content-Type','text/plain')
          res.end('이메일이 사용 가능합니다')    
        }
        else{
          res.writeHead(200,'Content-Type','text/plain')
          res.end('이메일 사용이 불가능합니다.')
        }

      })
      .catch(error => {
        console.error(error);
      });
    })

  }
})

   
      

server.listen(3000,()=>{
  console.log("서버가동 http://localhost:3000")
})