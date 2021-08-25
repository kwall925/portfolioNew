// the purpose of this first function is to prevent hiding grid items before they have rendered
let timer = function(){(setTimeout(function(){timer.called = true}, 1800))}

function hidegrid(gridId, wmId, color){
  if(timer.called){
    let grid = document.getElementsByClassName('gridimg');
    for (let i = 0; i < grid.length; i++){
      grid[i].style.display = 'none';
    }
    document.getElementById(gridId).style.display = 'block';
    document.getElementById(wmId).style.cssText = `visibility: visible; color: ${color}; opacity: 60%;`
  }
}
  function showgrid(gridId, wmId){
    let grid = document.getElementsByClassName('gridimg');
      for (let i = 0; i < grid.length; i++){
        grid[i].style.display = 'block';
    }
    document.getElementById(wmId).style.visibility = 'hidden';
}

// start the timer
window.onload = timer()
