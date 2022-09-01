const body = document.querySelector('body');
const contains = body.children[0].classList.contains("container");


window.addEventListener('DOMContentLoaded', function() {
    let width = window.innerWidth;
    if(!contains && width > 576) {
       body.children[0].classList.add("container");
     }
})

window.addEventListener('resize', function() {
    let width = window.innerWidth;
    if (width > 576 && !contains) {
      body.children[0].classList.add("container");
    } else if(width < 576 && !contains){
      body.children[0].classList.remove("container");
    }
})