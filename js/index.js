function counter() {
  let imgs = document.getElementsByClassName('gridimg');
  let i = 0;
  //let arr = [...imgs];//
  //arr.sort(() => Math.random() - 0.5);
  //let newimgs = Object.assign({}, arr);
  setInterval(function() {
    if (i == imgs.length) clearInterval(this);
    else imgs[i].style.opacity = 1;
    i++;
  }, 100);
}

counter()


//window.onload = counter();


