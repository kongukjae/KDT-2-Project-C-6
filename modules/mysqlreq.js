root.children[0].children[3].children[3].children[1].addEventListener('click',()=>{
    let data=""
    data= root.children[0].children[3].children[1].children[2].children[1].children[1].value + "&" +
          root.children[0].children[3].children[1].children[2].children[3].children[1].value + "&" +
          root.children[0].children[3].children[1].children[2].children[7].children[1].value + "&" +
          root.children[0].children[3].children[1].children[2].children[9].children[1].value + "&" +
          root.children[0].children[3].children[1].children[2].children[9].children[3].value + "&" +
          root.children[0].children[3].children[1].children[2].children[9].children[5].value + "&" +
          root.children[0].children[3].children[1].children[2].children[11].children[1].value
    
    let xhr = new XMLHttpRequest();
    let url = 'http://localhost:3000/a';  // 요청할 URL을 지정합니다.
  
        xhr.open('POST', url, true);  // POST 요청을 설정합니다.
        xhr.setRequestHeader('Content-Type', 'text/plain');  // 요청 헤더에 Content-Type을 설정합니다.
        xhr.send(data);  // 데이터를 문자열로 변환하여 요청 본문에 포함시킵니다.
        xhr.onload = function(){
          if(xhr.status===200){
            console.log(xhr.response)
            root.innerText=`${xhr.response}`;
            }
          else{
            console.err("에러발생",xhr.status)
           }
          }
  })