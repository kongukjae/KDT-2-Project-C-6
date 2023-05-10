import {makeTag,makeItems} from './core.js'
let root = document.getElementById('root');
let listOnOff = true;

  makeTag(root,"div","100vw","100vh")
  root.children[0].style.border='1px solid black';

  // let mainDiv = document.createElement('div')
  // root.appendChild(mainDiv)
  // root.children[0].style.width='100vw';
  // root.children[0].style.height='100vh';
  // root.children[0].style.boxSizing='border-box';



  //* 상단 컨테이너
  makeTag(root.children[0],"div","100%","10%","flex")
  
  // let topDiv = document.createElement('div');
  // root.children[0].appendChild(topDiv)
  // root.children[0].children[0].style.display="flex";
  // root.children[0].children[0].style.width="100%";
  // root.children[0].children[0].style.height="10%";
  // root.children[0].children[0].style.border='1px solid black';
  // root.children[0].children[0].style.boxSizing='border-box';

  //*상단 컨테이너 3개 div
  for(let i=0;i<3;i++){
    makeTag(root.children[0].children[0],"div","","")
    root.children[0].children[0].children[i].style.flex='1';
    
    // let div = document.createElement('div');
    // root.children[0].children[0].appendChild(div)
    // root.children[0].children[0].children[i].style.flex='1';
    // root.children[0].children[0].children[i].style.border='1px solid black'; 
    // root.children[0].children[0].children[i].style.boxSizing='border-box'; 
    
  }
  //* 햄버거 메뉴 만드는 flex  
  root.children[0].children[0].children[2].style.display='flex'; 
  for(let i=0;i<3;i++){
    let array = ["40%","40%","10%"]
    makeTag(root.children[0].children[0].children[2],"div",array[i],"")
    // let hamburgerflex = document.createElement('div')
    // root.children[0].children[0].children[2].appendChild(hamburgerflex);
    // root.children[0].children[0].children[2].children[i].style.width=array[i];
    // root.children[0].children[0].children[2].children[i].style.border="1px solid black";
  }
  
  //* 햄버거 메뉴 3줄
  root.children[0].children[0].children[2].children[1].style.display="flex";
  root.children[0].children[0].children[2].children[1].style.flexDirection="column";
  root.children[0].children[0].children[2].children[1].style.justifyContent="space-evenly";
  
  for(let i=0;i<3;i++){
    makeTag(root.children[0].children[0].children[2].children[1],"div","100%","10%")
    root.children[0].children[0].children[2].children[1].children[i].style.backgroundColor="black";
    root.children[0].children[0].children[2].children[1].children[i].style.borderRadius="30px";

    // let hamburger = document.createElement('div')
    // root.children[0].children[0].children[2].children[1].appendChild(hamburger);
    // root.children[0].children[0].children[2].children[1].children[i].style.width="100%";
    // root.children[0].children[0].children[2].children[1].children[i].style.height="10%";
    // root.children[0].children[0].children[2].children[1].children[i].style.border="1px solid black";
  }
  
  //*상단 category 컨테이너 (fixed처리 해야함)
  makeTag(root.children[0],"div","100%","5%","flex")
  root.children[0].children[1].style.justifyContent="center";
  root.children[0].children[1].style.alignItems="center";
  root.children[0].children[1].innerText="공통";
  // let topCategoryDiv= document.createElement('div');
  // root.children[0].appendChild(topCategoryDiv);
  // root.children[0].children[1].style.width="100%";
  // root.children[0].children[1].style.height="5%";
  // root.children[0].children[1].style.border="1px solid red";
  // root.children[0].children[1].style.boxSizing="border-box";
  // root.children[0].children[1].style.display="flex";

  //*list 메뉴
  makeTag(root.children[0],"div","60%","100%","flex")
  root.children[0].children[2].style.position="fixed"
  root.children[0].children[2].style.left="40%"
  root.children[0].children[2].style.top="10%"
  root.children[0].children[2].style.backgroundColor="red"
  root.children[0].children[2].style.display="none"
  // let hamburgerListDiv = document.createElement('div')
  // root.children[0].appendChild(hamburgerListDiv);
  // root.children[0].children[2].style.width="60%"
  // root.children[0].children[2].style.height="100%"
  // root.children[0].children[2].style.display="flex"

//*햄버거 클릭시, list 나오는 기능
root.children[0].children[0].children[2].children[1].addEventListener('click',()=>{
  if(listOnOff==true){
       listOnOff=false;
      root.children[0].children[2].style.display=""

      root.children[0].children[0].style.opacity=0.1;
      root.children[0].children[1].style.opacity=0.1;

  }  
  else{
    listOnOff=true;
   root.children[0].children[2].style.display="none"
   root.children[0].children[0].style.opacity=1;
   root.children[0].children[1].style.opacity=1;

  }
})

//* 중간 화면 (cart container)
makeTag(root.children[0],"div","100%","70%","flex")
root.children[0].children[3].style.overflowX="auto";
root.children[0].children[3].style.overflowY="scroll";
root.children[0].children[3].style.flexDirection="column";
// let middleDiv = document.createElement('div');
// root.children[0].appendChild(middleDiv)
// root.children[0].children[3].style.width="100%";
// root.children[0].children[3].style.height="70%";
// root.children[0].children[3].style.display="flex";
// root.children[0].children[3].style.boxSizing="border-box";

 //* 하단 화면 
 makeTag(root.children[0],"div","100%","15%","flex")

// let bottomDiv = document.createElement('div');
// root.children[0].appendChild(bottomDiv)
// root.children[0].children[4].style.width="100%";
// root.children[0].children[4].style.height="15%";
// root.children[0].children[4].style.boxSizing="border-box";

console.dir(root)