let root = document.getElementById('root')
        root.innerText="0"
        let btn = document.getElementById('btn')
        let count = 0;
        const xhr = new XMLHttpRequest();
        btn.addEventListener('click',()=>{
            count ++;
            
            console.log(count)
            let url = 'http://localhost:3000/';  // 요청할 URL을 지정합니다.

            xhr.open('POST', url, true);  // POST 요청을 설정합니다.
            xhr.setRequestHeader('Content-Type', 'text/plain');  // 요청 헤더에 Content-Type을 설정합니다.
            xhr.onload = function(){
                if(xhr.status===200){
                    console.log(xhr.response)
                    root.innerText=`${xhr.response}`;
                }
                else{
                    console.err("에러발생",xhr.status)
                }
            }
            xhr.send(count.toString());  // 데이터를 문자열로 변환하여 요청 본문에 포함시킵니다.
        })