function back() {
  location.replace("../Home.html")
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
      location.replace("../Index.html")
  }, 400)
}