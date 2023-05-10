import http from 'http'
import url from 'url'
import fs from 'fs'
import path from "path";

const server = http.createServer((req,res)=>{
  if(req.method=="GET"){
    fs.readFile('./layout1.html','utf-8',(err,data)=>{
      if(err){
        console.log(err);
        res.statusCode=500;
        res.end('err')
      }
      else{
        res.statusCode=200;
        res.setHeader('Content-Type','text/html');
        console.log(req)
        res.write(data)
        res.end()
    }
    if(req.url.startsWith("/")){
      fs.readFile('./core.mjs','utf-8',(err,data1)=>{
        // res.write(data1)
        res.end()
        
        // console.log(data1)

      })
      fs.readFile('./TopLayout.mjs','utf-8',(err,data2)=>{
        // res.write(data2)
        res.end()
        // console.log(data2)
      })
    }
  })  
  
}
});

server.listen(3000,()=>{
  console.log("서버가동")
})