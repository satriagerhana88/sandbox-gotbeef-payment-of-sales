function back() {
    location.replace("../Home.html")
}




// bottom sheet
function show() {
  let container = document.querySelector ('#overlay');
  let bottomSheet = document.querySelector ('#overlay #bottomSheet');

  

  container.classList.add('active');
  setTimeout(() => {
      bottomSheet.classList.add('active');
  }, 1);
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

function show3() {
  let container3 = document.querySelector ('#overlay-3');
  let bottomSheet3 = document.querySelector ('#overlay-3 #bottomSheet-3');
  let bottomSheet1 = document.querySelector('#overlay #bottomSheet');
  let bottomSheet2 = document.querySelector('#overlay-2 #bottomSheet-2');

  bottomSheet1.classList.remove('active');
  bottomSheet2.classList.remove('active');

  container3.classList.add('active');
  setTimeout(() => {
      bottomSheet3.classList.add('active');
  }, 1);
}

function show4() {
  let container4 = document.querySelector ('#overlay-4');
  let bottomSheet4 = document.querySelector ('#overlay-4 #bottomSheet-4');

  
  container4.classList.add('active');
  setTimeout(() => {
      bottomSheet4.classList.add('active');
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

function hideOverlay2() {
  let container2 = document.querySelector ('#overlay-2');
  let bottomSheet2 = document.querySelector ('#overlay-2 #bottomSheet-2');

  bottomSheet2.classList.remove('active');

  setTimeout(() => {
      container2.classList.remove('active')
  }, 400)
}

function hideOverlay3() {
  let container3 = document.querySelector ('#overlay-3');
  let bottomSheet3 = document.querySelector ('#overlay-3 #bottomSheet-3');

  bottomSheet3.classList.remove('active');
  
  setTimeout(() => {
    container3.classList.remove('active')
  }, 400)
}

function hideOverlay4() {
  let container4 = document.querySelector ('#overlay-4');
  let bottomSheet4 = document.querySelector ('#overlay-4 #bottomSheet-4');

  bottomSheet4.classList.remove('active');
  
  setTimeout(() => {
      container4.classList.remove('active')
  }, 400)
}