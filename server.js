import http from 'http'
import fs from 'fs'

const server = http.createServer((req,res)=>{
  if(req.method==="GET" && req.url==="/"){
    fs.readFile('./layout1.html','utf-8',(err,data)=>{
      if(err){
        console.log(err);
        res.statusCode=500;
        res.end('err')
      }
      else{
        res.writeHead(200,'Content-Type','text/html');
        res.end(data)
      }
    })
    if(req.url==="/core.js"){
      fs.readFile('./core.js','utf-8',(err,data)=>{
        if(err){
          console.log(err);
          res.statusCode=500;
          res.end('err')
        }
        else{
          res.writeHead(200,'Content-Type','text/javascript');
          res.end(data)
        }
      })
    }
    if(req.url==="/TopLayout.js"){
      fs.readFile('./TopLayout.js','utf-8',(err,data)=>{
        if(err){
          console.log(err);
          res.statusCode=500;
          res.end('err')
        }
        else{
          res.writeHead(200,'Content-Type','text/javascript');
          res.end(data)
        }
      })
    }
  }
  })
server.listen(3001,()=>{
  console.log("서버가동 http://localhost:3001");
  })