import http from 'http'
import fs from 'fs'

const server = http.createServer((request,response)=>{
  if(request.url==='/'){
    response.writeHead(200);
    response.write(`
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>


</head>
<body>
  <div id="root"></div>
  <script src="/cute" ></script>
  <script src="/script/TopLayout.js" ></script>
</body>
</html>
    `);
    response.end();
  }
  if(request.url==='/cute'){
    fs.readFile(`./core.js`, function (err, data) {
      if(err){
        console.log(err)
      }
      else{
        response.writeHead(200);
        response.write(data);
        response.end();
      }
    });
  }
  if(request.url==='/cuttttttttttsddfjksldfjlkdsjflk'){
    fs.readFile(`./222.jpg`, function (err, data) {
      if(err){
        console.log(err)
      }
      else{
        response.writeHead(200);
        response.write(data);
        response.end();
      }
    });
  }
  let count = 0
  if(request.url==='/cuteeee'){
    console.log('오른발에서 패스 옴@@@@@@@@@@@@@')
    if(count%2==0){
      fs.readFile(`./images.jpg`, function (err, data) {
        if(err){
          console.log(err)
        }
        else{
          response.writeHead(200);
          response.write(data);
          response.end();
        }
      });
    }
  }
  if(request.url==='/healthy'){
    console.log('오른발에서 패스 옴@@@@@@@@@@@@@')
    if(count%2==0){
      fs.readFile(`.images.jpg`, function (err, data) {
        if(err){
          console.log(err)
        }
        else{
          response.writeHead(200);
          response.write(data);
          response.end();
        }
      });
    }
  }
  if (request.url.startsWith("/script")) {
    console.log(request.url);
    let fileLocation = request.url.replace("/script", "");
    fileReadAndSend(`.${fileLocation}`, request, response);
  } else if (request.url.startsWith("/image")) {
    console.log(request.url);
    let fileLocation = request.url.replace("/image", "");
    fileReadAndSend(`.${fileLocation}`, request, response);
  } else if (request.url.startsWith("/html")) {
    console.log(request.url);
    let fileLocation = request.url.replace("/html", "");
    fileReadAndSend(`.${fileLocation}`, request, response);
  }
  })
server.listen(3001,()=>{
  console.log("서버가동 http://localhost:3001");
})

function fileReadAndSend(directory, request, response) {
  fs.readFile(`${directory}`, function (err, data) {
    if(err){
      console.log(err)
    }
    else{
      response.writeHead(200);
      response.write(data);
      response.end();
    }
  });
}


