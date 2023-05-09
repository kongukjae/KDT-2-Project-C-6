import http from 'http'
import url from 'url'
import fs from 'fs'
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); //es6에서는 __dirname 지원 X

const server = http.createServer((req,res)=>{
  const filePath = path.join(__dirname,'/layout1.html');
  fs.readFile(filePath,'utf-8',(err,data)=>{
    if(err){
      console.log(err);
      res.statusCode=500;
      res.end('err')
    }
    else{
      res.statusCode=200;
      res.setHeader('Content-Type','text/javascript');
      res.end(data)
    }
  })  
  
  // if(req.url=="/main"){
  //   res.write("zz")
  //   console.log(req)
  // }
  // res.end()
});

server.listen(3000,()=>{
  console.log("서버가동")
})