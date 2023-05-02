let root = document.getElementById('root');

let mainDiv = document.createElement('div')
root.appendChild(mainDiv)
root.children[0].style.width='390px';
root.children[0].style.height='844px';
root.children[0].style.border='1px solid black';

//* 상단 컨테이너
let topDiv = document.createElement('div');
let topListDiv= document.createElement('div');

root.children[0].appendChild(topDiv)
root.children[0].children[0].style.display="flex";
root.children[0].children[0].style.width="100%";
root.children[0].children[0].style.height="10%";
root.children[0].children[0].style.border='1px solid black';

//*상단 컨테이너 3개 div
for(let i=0;i<3;i++){
  let div = document.createElement('div');
  root.children[0].children[0].appendChild(div)
  root.children[0].children[0].children[i].style.flex='1';
  root.children[0].children[0].children[i].style.border='1px solid black'; 
}
//* 햄버거 메뉴 만드는 flex  
root.children[0].children[0].children[2].style.display='flex'; 
for(let i=0;i<3;i++){
  let hamburgerflex = document.createElement('div')
  let array = ["40%","40%","10%"]
  root.children[0].children[0].children[2].appendChild(hamburgerflex);
  root.children[0].children[0].children[2].children[i].style.width=array[i];
  root.children[0].children[0].children[2].children[i].style.border="1px solid black";
}

//* 햄버거 메뉴 3줄
root.children[0].children[0].children[2].children[1].style.display="flex";
root.children[0].children[0].children[2].children[1].style.flexDirection="column";
root.children[0].children[0].children[2].children[1].style.justifyContent="space-evenly";


for(let i=0;i<3;i++){
  let hamburger = document.createElement('div')
  root.children[0].children[0].children[2].children[1].appendChild(hamburger);
  root.children[0].children[0].children[2].children[1].children[i].style.width="100%";
  root.children[0].children[0].children[2].children[1].children[i].style.height="10%";
  root.children[0].children[0].children[2].children[1].children[i].style.backgroundColor="black";
  root.children[0].children[0].children[2].children[1].children[i].style.border="1px solid black";
}
//*투명도
root.children[0].style.opacity=0.1;




//*상단 list 컨테이너
root.children[0].appendChild(topListDiv);
root.children[0].children[1].style.width="100%";
root.children[0].children[1].style.height="5%";
root.children[0].children[1].style.border="1px solid black";

console.dir(root)
//* 중간 화면 
// let middleDiv = document.createElement('div');
// root.children[0].appendChild(middleDiv)
// root.children[0].children[1].style.width="100%";
// root.children[0].children[1].style.height="70%";
// root.children[0].children[1].style.overflowX="auto";
// root.children[0].children[1].style.overflowY="scroll";
// root.children[0].children[1].style.border="1px solid black";

// //* 하단 화면 
// let bottomDiv = document.createElement('div');
// root.children[0].appendChild(bottomDiv)
// root.children[0].children[2].style.width="100%";
// root.children[0].children[2].style.height="15%";
// root.children[0].children[2].style.border="1px solid black";