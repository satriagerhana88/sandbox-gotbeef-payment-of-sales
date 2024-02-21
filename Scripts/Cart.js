function back() {
    location.replace("../Product.html")
}

function show() {
    let container = document.querySelector ('#overlay');
    let bottomSheet = document.querySelector ('#overlay #bottomSheet');
  
  
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

function show2() {
    let container2 = document.querySelector ('#overlay-2');
    let bottomSheet2 = document.querySelector ('#overlay-2 #bottomSheet-2');
    let bottomSheet = document.querySelector ('#overlay #bottomSheet');
  
    bottomSheet.classList.remove('active');
  
    container2.classList.add('active');
    setTimeout(() => {
        bottomSheet2.classList.add('active');
    }, 1);
}

function hideOverlay2() {
    let container2 = document.querySelector ('#overlay-2');
    let bottomSheet2 = document.querySelector ('#overlay-2 #bottomSheet-2');
    const cart = document.getElementById("cart");
  
    bottomSheet2.classList.remove('active');
    cart.remove();
  
    setTimeout(() => {
        container2.classList.remove('active')
    }, 400)
  }
  