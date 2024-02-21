
// bottom sheet
function show() {
    let container = document.querySelector ('#overlay');
    let bottomSheet = document.querySelector ('#overlay #bottomSheet');

    

    container.classList.add('active');
    setTimeout(() => {
        bottomSheet.classList.add('active');
    }, 1);
}

function openingPOS() {
    let container2 = document.querySelector ('#overlay-2');
    let bottomSheet2 = document.querySelector ('#overlay-2 #bottomSheet-2');
    let bottomSheet = document.querySelector ('#overlay #bottomSheet');

    bottomSheet.classList.remove('active');

    container2.classList.add('active');
    setTimeout(() => {
        bottomSheet2.classList.add('active');
    }, 1);
}
