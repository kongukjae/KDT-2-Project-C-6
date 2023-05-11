// import {makeTag,makeItems} from './core.js'

let root = document.getElementById('root');
let listOnOff = true;

  makeTag(root,"div","100vw","100vh")
  root.children[0].style.border='1px solid black';



  //* 상단 컨테이너
  makeTag(root.children[0],"div","100%","10%","flex")
  
 

  //*상단 컨테이너 3개 div
  for(let i=0;i<3;i++){
    makeTag(root.children[0].children[0],"div","","")
    root.children[0].children[0].children[i].style.flex='1';
    
 
    
  }
  //* 햄버거 메뉴 만드는 flex  
  root.children[0].children[0].children[2].style.display='flex'; 
  for(let i=0;i<3;i++){
    let array = ["40%","40%","10%"]
    makeTag(root.children[0].children[0].children[2],"div",array[i],"")

  }
  
  //* 햄버거 메뉴 3줄
  root.children[0].children[0].children[2].children[1].style.display="flex";
  root.children[0].children[0].children[2].children[1].style.flexDirection="column";
  root.children[0].children[0].children[2].children[1].style.justifyContent="space-evenly";
  
  for(let i=0;i<3;i++){
    makeTag(root.children[0].children[0].children[2].children[1],"div","100%","10%")
    root.children[0].children[0].children[2].children[1].children[i].style.backgroundColor="black";
    root.children[0].children[0].children[2].children[1].children[i].style.borderRadius="30px";

  }
  
  //*상단 category 컨테이너 (fixed처리 해야함)
  makeTag(root.children[0],"div","100%","5%","flex")
  // root.children[0].children[1].style.justifyContent="center";
  // root.children[0].children[1].style.alignItems="center";
  // root.children[0].children[1].innerText="Top";
  root.children[0].children[1].style.flexDirection="column"

  //* 중분류 category 
  // for(let w=0;w<2;w++){
  //   let topCategoryDiv1= document.createElement('div');
  //   root.children[0].children[1].appendChild(topCategoryDiv1);
  // }
  makeTag(root.children[0].children[1],"div","100%","50%","flex")
  // root.children[0].children[1].children[0].style.width="100%";
  // root.children[0].children[1].children[0].style.height="50%";
  // root.children[0].children[1].children[0].style.display="flex";
  root.children[0].children[1].children[0].style.justifyContent="center";
  root.children[0].children[1].children[0].style.alignItems="center";
  root.children[0].children[1].children[0].innerText="TOP";  
  
  //*상단 category중 중분류 태그 
  makeTag(root.children[0].children[1],"div","100%","50%","flex")
  // root.children[0].children[1].children[1].style.width="100%";
  // root.children[0].children[1].children[1].style.height="50%";
  // root.children[0].children[1].children[1].style.display="flex";

  for(let i=0;i<4;i++){
    let middleCategoryTextArray=["outer","longsleeve","T-shirt","tank"]
    makeTag(root.children[0].children[1].children[1],"div","25%","","flex")    
    // let middleCategoryDiv = document.createElement('div');
    // root.children[0].children[1].children[1].appendChild(middleCategoryDiv);
    // root.children[0].children[1].children[1].children[i].style.width="25%"
    root.children[0].children[1].children[1].children[i].innerText=middleCategoryTextArray[i]
    root.children[0].children[1].children[1].children[i].style.display="flex"
    root.children[0].children[1].children[1].children[i].style.justifyContent="center"
    root.children[0].children[1].children[1].children[i].style.alignItems="center"
    root.children[0].children[1].children[1].children[i].style.opacity="0.3"

  }


  //*list 메뉴
  makeTag(root.children[0],"div","60%","100%","flex")
  root.children[0].children[2].style.position="fixed"
  root.children[0].children[2].style.left="40%"
  root.children[0].children[2].style.top="0px"
  root.children[0].children[2].style.backgroundColor="white"
  root.children[0].children[2].style.display="none"
  //* list 메뉴 -좌측 상단 x div
  makeTag(root.children[0].children[2],"div","100%","5%","flex")
  makeTag(root.children[0].children[2].children[0],"div","20%","100%","flex")
  root.children[0].children[2].children[0].children[0].innerText="X"
  //* list 메뉴 -mypage, cart 버튼 태그 레이아웃
  makeTag(root.children[0].children[2],"div","100%","5%","flex")
  makeTag(root.children[0].children[2].children[1],"div","10%","100%","")
  makeTag(root.children[0].children[2].children[1],"div","35%","100%","")
  root.children[0].children[2].children[1].children[1].innerText="Mypage"
  root.children[0].children[2].children[1].children[1].style.textAlign="center"

  makeTag(root.children[0].children[2].children[1],"div","10%","100%","")
  makeTag(root.children[0].children[2].children[1],"div","35%","100%","")
  root.children[0].children[2].children[1].children[3].innerText="Cart"
  root.children[0].children[2].children[1].children[3].style.textAlign="center"

  makeTag(root.children[0].children[2].children[1],"div","10%","100%","")

  makeTag(root.children[0].children[2],"div","100%","5%","flex")
  //* list 메뉴 - 카테고리div들
  makeTag(root.children[0].children[2],"div","100%","65%","flex")
  makeTag(root.children[0].children[2].children[3],"div","50%","100%","")

  makeTag(root.children[0].children[2].children[3],"div","50%","100%","flex")
  root.children[0].children[2].children[3].children[1].style.flexDirection="column"
  for(let i=0;i<9;i++){
    let listArray=["All","Top","Bottom","Etc","Brands","Order","Service","Notice","Community"]
  makeTag(root.children[0].children[2].children[3].children[1],"div","100%","10%","")
  root.children[0].children[2].children[3].children[1].children[i].innerText=listArray[i]
  root.children[0].children[2].children[3].children[1].children[i].style.textAlign=""

  }
  
  
  makeTag(root.children[0].children[2],"div","100%","20%","flex")



//*햄버거 클릭시, list 나오는 기능
root.children[0].children[0].children[2].children[1].addEventListener('click',()=>{
  if(listOnOff==true){
       listOnOff=false;
      root.children[0].children[2].style.display=""
      root.children[0].children[2].style.transition="transform 3s ease-in 1s"
      root.children[0].children[2].style.transform="translateX(-10px)"

      root.children[0].children[0].style.opacity=0.1;
      root.children[0].children[1].style.opacity=0.1;
      root.children[0].children[3].style.opacity=0.1;


    }  
  })
  root.children[0].children[2].children[0].children[0].addEventListener('click',()=>{
    if(listOnOff==false){
      listOnOff=true;
      root.children[0].children[2].style.display="none"
      root.children[0].children[0].style.opacity=1;
      root.children[0].children[1].style.opacity=1;
      root.children[0].children[3].style.opacity=1;

    }
  })
 

//* 중간 화면 (cart container)
makeTag(root.children[0],"div","100%","70%","grid")
root.children[0].children[3].style.overflowX="auto";
root.children[0].children[3].style.overflowY="scroll";
root.children[0].children[3].style.gridTemplateColumns="1fr 1fr";



makeItems(root.children[0].children[3],"a","B","c")
makeItems(root.children[0].children[3],"a","B","c")
makeItems(root.children[0].children[3],"a","B","c")
makeItems(root.children[0].children[3],"a","B","c")
makeItems(root.children[0].children[3],"a","B","c")






 //* 하단 화면 
 makeTag(root.children[0],"div","100%","15%","flex")



console.dir(root)