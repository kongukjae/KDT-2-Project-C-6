
function makeTag(target,tagName,width,height,display){
  let tag = document.createElement(`${tagName}`);
  target.appendChild(tag)
  tag.style.width=width
  tag.style.height=height
  tag.style.display=display
  tag.style.border='1px solid black'
  tag.style.boxSizing='border-box'
}


export default makeTag