
function makeTag(target,tagName,width,height,display){
  let tag = document.createElement(tagName);
  target.appendChild(tag)
  tag.style.width=width
  tag.style.height=height
  tag.style.display=display
  tag.style.border='1px solid black'
  tag.style.boxSizing='border-box'
}

function makeItems(target,brandName,content,price) {
  let array=[]
  array[0]=brandName;
  array[1]=content;
  array[2]=price;


  let liTag = document.createElement('li')
  liTag.style.width="100%"
  liTag.style.height="100%"
  liTag.style.listStyle="none"
  liTag.style.padding="3%"

  let imgTag = document.createElement('img')
  imgTag.style.width="50%"
  imgTag.style.height="10%"
  imgTag.src="./images.jpg"
console.dir(imgTag)

  for(let i =0;i<2;i++){
    let div = document.createElement('div');
    liTag.appendChild(div)
  }
  liTag.children[0].appendChild(imgTag)
  liTag.children[1].style.display="flex";
  liTag.children[1].style.flexDirection="column";

  for(let i =0;i<3;i++){
    let div = document.createElement('div');
    div.style.width="100%"
    div.style.height="20%"
    div.style.textAlign="center";

    div.innerText=array[i]
    liTag.children[1].appendChild(div);
  }

  target.appendChild(liTag);
  target.style.gridTemplateRows="50%";

  

}

// export {makeTag,makeItems} 