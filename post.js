import http from 'http'

const server = http.createServer((req,res)=>{
    if(req.method==="GET" && req.url==="/"){
        res.writeHead(200,'Content-Type','text/html')
        let firestPage=`
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        </head>
        <body>
        <form method="post" action="/a">
        <input type="text" name="id">
        <input type="text" name="password">
        <input type="submit">
        </form>
        </body>
        </html>`
        res.write(firestPage)
        res.end()
        
    }
    
    let data=''
    if(req.method==="POST" && req.url==="/a"){
        req.on('data',(chunk)=>{
            data+=chunk
        })
        req.on('end',()=>{
            console.log(data);
            res.writeHead(200,'text/plain')
            res.end(data)
        })
    }

})

server.listen(3000,()=>{
    console.log("http://localhost:3000/")
})

