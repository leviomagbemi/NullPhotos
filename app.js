//menu variables
const hamburger = document.getElementById('hamburger');
const mobilenav = document.querySelector('.mobilenav');
const mnav = document.querySelector('.mnav');


// media query
const mediaQuery = window.matchMedia('(max-width: 600px)');

// eventlistners
hamburger.addEventListener('click', navBar);
window.addEventListener('resize', screenChange);
document.addEventListener('DOMContentLoaded', screenChange);



//functions
function screenChange(){
  if(!mediaQuery.matches){  
    mnav.style.display = 'none'; 
  } else {mnav.style.display = 'flex';}
}

function navBar(){
  if(mediaQuery.matches && hamburger.className === 'fas fa-bars'){
    mobilenav.style.right = 0;
    hamburger.className = 'fas fa-window-close';
   } else if (mediaQuery.matches && hamburger.className !== 'fas fa-bars'){
    mobilenav.style.right = '-100%';
    hamburger.className = 'fas fa-bars';
   }
}

