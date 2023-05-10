import http from 'http'
import url from 'url'
import fs from 'fs'
import path from "path";

const server = http.createServer((req,res)=>{
  // const url = url.parse(req.url);
  if(req.method=="GET"){ 
    fs.readFile('./layout1.html','utf-8',(err,data)=>{
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

        if(req.url=='/core.js'){
          fs.readFile('core.js','utf-8',(err,data1)=>{
            if(err){
              throw new Error
            }
            else{
            
            res.writeHead(200,'Content-Type','text/javascript');
            res.end(data1);
            }
          })
        }
        if(req.url=='/TopLayout.js'){
          fs.readFile('TopLayout.js','utf-8',(err,data2)=>{
            if(err){
              console.log(err)
            }
            else{
            res.writeHead(200,'Content-Type','text/javascript');
            res.end(data2);
            }
          })
        }
      }
    
    })

  }
});

server.listen(3000,()=>{
  console.log("서버가동")
})