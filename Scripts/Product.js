function back() {
    location.replace("../Home.html")
}

function cart() {
  location.replace("../Cart.html")
}





function show() {
    let container = document.querySelector ('#overlay');
    let bottomSheet = document.querySelector ('#overlay #bottomSheet');
    let bottomSheet3 = document.querySelector ('#overlay-3 #bottomSheet-3');
    let container3 = document.querySelector ('#overlay-3');
  
    bottomSheet3.classList.remove('active');
    container3.classList.remove('active');
    
  
    container.classList.add('active');
    setTimeout(() => {
        bottomSheet.classList.add('active');
    }, 1);
  }

  
function hideOverlay() {
    let container = document.querySelector ('#overlay');
    let bottomSheet = document.querySelector ('#overlay #bottomSheet');
  
    bottomSheet.classList.remove('active');
  
    setTimeout(() => {
        container.classList.remove('active')
    }, 400)
  }


  function showadd() {
    let container2 = document.querySelector ('#overlay-2');
    let bottomSheet2 = document.querySelector ('#overlay-2 #bottomSheet-2');
  
    
  
    container2.classList.add('active');
    setTimeout(() => {
        bottomSheet2.classList.add('active');
    }, 1);
  }

  
function hideOverlay2() {
    let container2 = document.querySelector ('#overlay-2');
    let bottomSheet2 = document.querySelector ('#overlay-2 #bottomSheet-2');
  
    bottomSheet2.classList.remove('active');
  
    setTimeout(() => {
        container2.classList.remove('active')
    }, 400)
  }

  
  function custome() {
    let container3 = document.querySelector ('#overlay-3');
    let bottomSheet3 = document.querySelector ('#overlay-3 #bottomSheet-3');
  
    
  
    container3.classList.add('active');
    setTimeout(() => {
        bottomSheet3.classList.add('active');
    }, 1);
  }

  
function hideOverlay3() {
    let container3 = document.querySelector ('#overlay-3');
    let bottomSheet3 = document.querySelector ('#overlay-3 #bottomSheet-3');
  
    bottomSheet3.classList.remove('active');

  
    setTimeout(() => {
        container3.classList.remove('active')
    }, 400)
  }

