let root = document.getElementById('root');

let mainDiv = document.createElement('div')
root.appendChild(mainDiv)
root.children[0].style.width='390px';
root.children[0].style.height='844px';
root.children[0].style.border='1px solid black';

//* 상단 화면
let topDiv = document.createElement('div');
root.children[0].appendChild(topDiv)
root.children[0].children[0].style.display="flex";
root.children[0].children[0].style.width="100%";
root.children[0].children[0].style.height="15%";
root.children[0].children[0].style.border='1px solid black';


for(let i=0;i<3;i++){
  let div = document.createElement('div');
  root.children[0].children[0].appendChild(div)
  root.children[0].children[0].children[i].style.flex='1';
  root.children[0].children[0].children[i].style.border='1px solid black';

}

//* 중간 화면 
let middleDiv = document.createElement('div');
root.children[0].appendChild(middleDiv)
root.children[0].children[1].style.width="100%";
root.children[0].children[1].style.height="70%";
root.children[0].children[1].style.overflowX="auto";
root.children[0].children[1].style.overflowY="scroll";
root.children[0].children[1].style.border="1px solid black";

//* 하단 화면 
let bottomDiv = document.createElement('div');
root.children[0].appendChild(bottomDiv)
root.children[0].children[2].style.width="100%";
root.children[0].children[2].style.height="15%";
root.children[0].children[2].style.border="1px solid black";