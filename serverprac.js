import http from 'http'
import fs, { readdirSync, rmdirSync } from 'fs'
import { resourceLimits } from 'worker_threads'

const server = http.createServer((req,res)=>{
    if(req.method="GET" && req.url=='/'){
        fs.readFile('./serverprac.html','utf-8',(err,data)=>{
            if(err){
                console.log("error")
                res.statusCode=500;
                res.end()
            }
            else{
                res.writeHead(200,{'Content-Type':'text/html'})
                res.write(data)
                res.end()
            }
        })
    }
    if(req.method==="GET" && req.url==="/post"){
       fs.readFile('./post.js','utf-8',(err,data)=>{
        if(err){
            console.log("error")
            res.statusCode=500;
            res.end()
        }
        else{
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            res.end()
        }
       })
       
       
       
       
       
       
        // let data=''
        // req.on('data',chunk=>{
            
        //     data+=chunk;
        //     console.log("server",data)
        // })
        // req.on('end',()=>{
        //     res.writeHead(200,{'Content-Type':'text/plain'});
        //     res.end(data)
        // })
    }
})

server.listen(3000,()=>{
    console.log("http://localhost:3000")
})