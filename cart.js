let root = document.getElementById('root');

  let mainDiv = document.createElement('div')
  root.appendChild(mainDiv)
  root.children[0].style.width='100vw';
  root.children[0].style.height='100vh';
  root.children[0].style.border='1px solid black';
  root.children[0].style.boxSizing='border-box';


  //* 상단 컨테이너
  let topDiv = document.createElement('div');
  let topCategoryDiv= document.createElement('div');

  root.children[0].appendChild(topDiv)
  root.children[0].children[0].style.display="flex";
  root.children[0].children[0].style.width="100%";
  root.children[0].children[0].style.height="10%";
  root.children[0].children[0].style.border='1px solid black';
  root.children[0].children[0].style.boxSizing='border-box';

  //*상단 컨테이너 3개 div
  for(let i=0;i<3;i++){
    let div = document.createElement('div');
    root.children[0].children[0].appendChild(div)
    root.children[0].children[0].children[i].style.flex='1';
    root.children[0].children[0].children[i].style.border='1px solid black'; 
    root.children[0].children[0].children[i].style.boxSizing='border-box'; 

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
    root.children[0].children[0].children[2].children[1].children[i].style.borderRadius="30px";
    root.children[0].children[0].children[2].children[1].children[i].style.border="1px solid black";
  }

  //*상단 category 컨테이너
  root.children[0].appendChild(topCategoryDiv);
  root.children[0].children[1].style.width="100%";
  root.children[0].children[1].style.height="5%";
  root.children[0].children[1].style.border="1px solid red";
  root.children[0].children[1].style.boxSizing="border-box";


  // //*상단 컨테이너와 상단 category 컨테이너 fixed
  // root.children[0].children[0].style.position="fixed"
  // root.children[0].children[1].style.position="fixed"
  // root.children[0].children[1].style.top="10%"

  // //*list 메뉴

  let hamburgerListDiv = document.createElement('div')
  root.children[0].appendChild(hamburgerListDiv);
  root.children[0].children[2].style.width="60%"
  root.children[0].children[2].style.height="100%"
  root.children[0].children[2].style.position="fixed"
  root.children[0].children[2].style.left="40%"
  root.children[0].children[2].style.top="10%"
  root.children[0].children[2].style.display="flex"
  root.children[0].children[2].style.backgroundColor="red"
  root.children[0].children[2].style.display="none"

  // root.children[0].children[2].style.transition="width 0.5s ease-out 1s";
  // root.children[0].children[2].style.transform="translate(20%,0)";
  // root.children[0].children[2].style.width="30vw"

  let listOnOff = true;

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



console.dir(root)
 //* 중간 화면 (cart container)
let middleDiv = document.createElement('div');
root.children[0].appendChild(middleDiv)
root.children[0].children[3].style.width="100%";
root.children[0].children[3].style.height="70%";
root.children[0].children[3].style.overflowX="auto";
root.children[0].children[3].style.overflowY="scroll";
root.children[0].children[3].style.border="1px solid blue";
root.children[0].children[3].style.display="flex";
root.children[0].children[3].style.flexDirection="column";
root.children[0].children[3].style.boxSizing="border-box";


//* cart div들
for(let i=0;i<5;i++){
  let cartDiv = document.createElement('div');
  root.children[0].children[3].appendChild(cartDiv);
  root.children[0].children[3].children[i].style.width="100%";
  root.children[0].children[3].children[i].style.height="20%";
  root.children[0].children[3].children[i].style.border="1px solid black";
  root.children[0].children[3].children[i].style.boxSizing="border-box";
  root.children[0].children[3].children[i].style.display="flex";
  root.children[0].children[3].children[i].style.flexDirection="column";

  //*cart div안 layout1 작업들
  for(let a=0;a<3;a++){
    let height=["15%","70%","15%"]
    let cartDivInnerFirst = document.createElement('div');
    root.children[0].children[3].children[i].appendChild(cartDivInnerFirst);
    root.children[0].children[3].children[i].children[a].style.height=height[a]  
  }
  //*cart div안 layout2 작업들(아이템 이미지, 항목들 칸 나누기)
  for(let q=0;q<4;q++){
    let widthArray=["5%","20%","5%","67%","3%"];
    let cartDivInnerSecond = document.createElement('div');
    root.children[0].children[3].children[i].children[1].appendChild(cartDivInnerSecond);
    root.children[0].children[3].children[i].children[1].style.display="flex";
    root.children[0].children[3].children[i].children[1].style.boxSizing="border-box";
    root.children[0].children[3].children[i].children[1].children[q].style.width=widthArray[q];
    root.children[0].children[3].children[i].children[1].children[q].style.height="100%";
  }
  //*cart div안 layout3 작업들(아이템 정보들 항목)
  for(let k =0;k<3;k++){
    let cartDivInnerThird = document.createElement('div');
    root.children[0].children[3].children[i].children[1].children[3].appendChild(cartDivInnerThird);
    root.children[0].children[3].children[i].children[1].children[3].style.display="flex";
    root.children[0].children[3].children[i].children[1].children[3].style.flexDirection="column";
    root.children[0].children[3].children[i].children[1].children[3].style.boxSizing="border-box"
    root.children[0].children[3].children[i].children[1].children[3].children[k].style.width="100%";
    root.children[0].children[3].children[i].children[1].children[3].children[k].style.height="33%";
  }
 //*cart div안 layout4 작업들(아이템 제목과 x 버튼)
  for(let w=0;w<2;w++){
    let widthArray=["40%","10%"];
    let cartDivInnerfourth = document.createElement('div');
    root.children[0].children[3].children[i].children[1].children[3].children[0].appendChild(cartDivInnerfourth)
    root.children[0].children[3].children[i].children[1].children[3].children[0].style.display="flex"
    root.children[0].children[3].children[i].children[1].children[3].children[0].style.justifyContent="space-between"
    root.children[0].children[3].children[i].children[1].children[3].children[0].children[w].style.width=widthArray[w]
  }
//*car div안 layout5 작업들(수량추가및삭제 와 가격정보 태그)
  for(let b=0;b<2;b++){
    let widthArray=["30%","30%"]
    let cartDivInnerfifth = document.createElement('div');
    root.children[0].children[3].children[i].children[1].children[3].children[2].appendChild(cartDivInnerfifth)
    root.children[0].children[3].children[i].children[1].children[3].children[2].style.display="flex";
    root.children[0].children[3].children[i].children[1].children[3].children[2].children[b].style.width=widthArray[b];

  }

}

 //* 하단 화면 
let bottomDiv = document.createElement('div');
root.children[0].appendChild(bottomDiv)
root.children[0].children[4].style.width="100%";
root.children[0].children[4].style.height="15%";
root.children[0].children[4].style.border="1px solid pink";
root.children[0].children[4].style.boxSizing="border-box";
