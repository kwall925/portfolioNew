function init(){
  let el = document.querySelector('.soft');
  setTimeout(function(){ el.classList.add('addAnimation') }, 100);
  let hard = document.querySelector('.hard');
  setTimeout(function(){ hard.classList.add('hardAnimation') }, 1000);
}

window.onload = init;
