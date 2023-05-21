import http from 'http'
import fs from 'fs'

const server = http.createServer((req,res)=>{
    if(req.method="GET" && req.url=='/'){
        fs.readFile('./serverprac.html','utf-8',(err,data)=>{
            if(err){
                console.log("error")
                res.statusCode=500;
                res.end()
            }
            else{
                res.writeHead(200,'Content-Type','text/html')
                res.end(data)
            }
        })
    }
    if(req.method=="POST" && req.url=="/a"){
        let data
        req.on('data',chunk=>{
            data=chunk;
        })
        req.on('end',()=>{
            res.end(data)
        })
    }
})

server.listen(3000,()=>{
    console.log("localhost:3000 서버작동")
})