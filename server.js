import http from 'http'
import fs from 'fs'

const server = http.createServer((req,res)=>{
  // const url = url.parse(req.url);
  if(req.method=="GET"){
    console.log(req.url) 
    if(req.url==='/'){
      fs.readFile('./layout1.html','utf-8',(err,data)=>{
        if(err){
          console.log(err);
          res.statusCode=500;
          res.end('err')
        }
        else{
          res.writeHead(200,'Content-Type','text/html');
          res.write(data)
          res.end()
        }
    })
    }
    if(req.url==='/core.js'){
      fs.readFile('./core.js','utf-8',(err,data1)=>{
        if(err){
          console.log(err);
          res.statusCode=500;
          res.end('err')
        }
        else{
          res.writeHead(200,'Content-Type','text/javascript');
          res.end(data1);
        }
      })
    }
    if(req.url==='/TopLayout.js'){
      fs.readFile('./TopLayout.js','utf-8',(err,data2)=>{
        if(err){
          console.log(err)
        }
        else{
        res.writeHead(200,'Content-Type','text/javascript');
        res.end(data2);
        }
      })
    }
  }}
  )


server.listen(3000,()=>{
  console.log("서버가동 http://localhost:3000")
})