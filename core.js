let root = document.getElementById('root')

function makeTag(target,tagName,width,height,display){
  let tag = document.createElement(`${tagName}`);
  target.appendChild(tag)
  tag.style.width=width
  tag.style.height=height
  tag.style.display=display
  tag.style.boxSizing='border-box'
}


