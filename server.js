import http from 'http'
import url from 'url'
import fs from 'fs'
import path from "path";
import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename); //es6에서는 __dirname 지원 X
// const filePath = path.join(__dirname,'/layout1.html');

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
        res.setHeader('Content-Type','text/javascript');
        console.log(req.url)
        res.end(data)
    }
    if(req.url=="/favicon.ico"){
      fs.readFile('./core.mjs','utf-8',(err,data)=>{
        console.log(data)
      })
      fs.readFile('./TopLayout.mjs','utf-8',(err,data)=>{
        console.log(data)
      })
    }
  })  
  
}
  //   res.write("zz")
  //   console.log(req)
  // res.end()
});

server.listen(3000,()=>{
  console.log("서버가동")
})