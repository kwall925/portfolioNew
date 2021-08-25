function counter() {
  let imgs = document.getElementsByClassName('gridimg');
  let i = 0;
  setInterval(function() {
    if (i == imgs.length) clearInterval(this);
    else imgs[i].style.opacity = 1;
    i++;
  }, 100);
}

counter()

