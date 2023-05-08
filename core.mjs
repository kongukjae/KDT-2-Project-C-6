
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
  let liTag = document.createElement('li')
  liTag.style.width="100%"
  liTag.style.height="100%"
  let imgTag = document.createElement('img')
  
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
    liTag.children[1].appendChild(div);
  }

  target.appendChild(liTag);
}

export {makeTag,makeItems} 