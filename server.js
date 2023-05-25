import http from 'http'
import fs, { rmSync } from 'fs'


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
  if(req.url==="/modules/mysql.js"){
    fs.readFile('./modules/mysql.js','utf-8',(err,data)=>{
      if(err){
        console.err("에러발생")
      }
      else{
        res.writeHead(200,'Content-Type','text/javascript')
        res.end(data)
      }
    })
  }
  if(req.url==="/modules/join.js"){
    fs.readFile('./modules/join.js','utf-8',(err,data)=>{
      if(err){
        console.err("에러발생")
      }
      else{
        res.writeHead(200,'Content-Type','text/javascript')
        res.end(data)
      }
    })
  }
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
  if(req.method==="POST" && req.url==="/a"){
    console.log(req.url)
    let data
    req.on('data',(chunk)=>{
      data+=chunk      
  })
  req.on('end',()=>{
      console.log(data);
      //res.writeHead(200,'text/plain')
      res.end()
  })
  }
  
})

   
      

server.listen(3000,()=>{
  console.log("서버가동 http://localhost:3000")
})