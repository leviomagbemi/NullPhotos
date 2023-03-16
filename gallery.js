const images = new Image();

//ui
const categories = document.querySelectorAll('.categories li');
const gallery = document.querySelector('.gallery-gallery');

//EventListeners
document.addEventListener('DOMContentLoaded', getContainers);

//get class
function selector(clas){
  return document.querySelector(clas).classList.remove('active');
}

// getcon
function getContainers(){
  getAdultimg();
}


function getAdultimg(){
  images.adultImg()
  .then(data => {
    let div = '';

    data.forEach(link => {
      div += `<div class ="gbox animate"><img class ="over" src = "${link.src}"></div>`;
    });

    gallery.innerHTML = div;  
  })
}

function getBabyimg(){
  images.babyImg()
  .then(data => {
    let div = ''

    data.forEach(link => {
      div += `<div class ="gbox animate"><img class ="over" src = "${link.src}"></div>`;
    });

    gallery.innerHTML = div;
  })
}

function getFamilyimg(){
  images.familyImg()
  .then(data => {
    let div = ''

    data.forEach(link => {
      div += `<div class ="gbox animate"><img class ="over" src = "${link.src}"></div>`;
    });

    gallery.innerHTML = div;
  })
}

function getMaternityimg(){
  images.maternityImg()
  .then(data => {
    let div = ''

    data.forEach(link => {
      div += `<div class ="gbox animate"><img class ="over" src = "${link.src}"></div>`;
    });

    gallery.innerHTML = div;
  })
}



//gallery
categories.forEach(items => {
  items.addEventListener('click', () => {
    if(items.className === 'adult'){
     getAdultimg();
     selector('.baby');
     selector('.family'); 
     selector('.maternity');
      
     items.classList.add('active');

    } else if (items.className === 'baby'){
      getBabyimg();
      selector('.adult');
      selector('.family');
      selector('.maternity');

      items.classList.add('active');

    } else if (items.className === 'family'){
      getFamilyimg();
      selector('.baby');
      selector('.adult');
      selector('.maternity');

      items.classList.add('active');

    } else if (items.className === 'maternity'){
      getMaternityimg()
      selector('.baby');
      selector('.adult');
      selector('.family');

      items.classList.add('active'); 
  }})
})



