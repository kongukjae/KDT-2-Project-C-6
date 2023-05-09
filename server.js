import http from 'http'

const server = http.createServer((req,res)=>{
  res.statusCode=200;
  res.setHeader('Content-Type','text/plain');
  res.end('Hello world');
});

server.listen(3000,()=>{
  console.log("서버가동")
})