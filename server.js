import http from 'http'
import url from 'url'
import fs from 'fs'

const server = http.createServer((req,res)=>{
  const
  
  res.statusCode=200;
  res.setHeader('Content-Type','text/html');
  if(req.url=="/main"){
    res.write("zz")
    console.log(req)
  }
  res.end()
});

server.listen(3000,()=>{
  console.log("서버가동")
})