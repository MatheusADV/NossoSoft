// Script menu
window.addEventListener("scroll", function(){
  let header = document.querySelector('#header')
  header.classList.toggle('rolagem', window.scrollY > 50)
})


// Script ancora interna
var $doc = $('html, body');
$('.Scroll').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

//SCRIPT CARROSSEL GALERIA
const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    });

    items[currentItem].classList.add("current-item");
  });
});

// Script carrossel dos cards
const cf = document.getElementById("crachafrente");
const cv = document.getElementById("crachaverso");
const ie = document.getElementById("imge");
const id = document.getElementById("imgd");
const prev = document.getElementById("prev-button");
const next = document.getElementById("next-button");

let x = 0;

function cardsa(){
    if(next.click){
        x++
    }

    if (x == 0){
        cf.src = ''
        cv.src = ''
        ie.src = 'imagens/img-car-3d/_DSC0370.JPG'
        id.src = 'imagens/img-car-3d/_DSC0374.JPG'
    }
    else if (x == 1){
        cf.src = ''
        cv.src = ''
        ie.src = 'imagens/img-car-3d/_DSC0370.JPG'
        id.src = 'imagens/img-car-3d/_DSC0374.JPG'
    }
    else if(x == 2){
        cf.src = ''
        cv.src = ''
        ie.src = 'imagens/img-car-3d/_DSC0370.JPG'
        id.src = 'imagens/img-car-3d/_DSC0374.JPG'
    }
    else if(x == 3){
        cf.src = ''
        cv.src = ''
        ie.src = 'imagens/img-car-3d/_DSC0370.JPG'
        id.src = 'imagens/img-car-3d/_DSC0374.JPG'
    }
    else if(x == 4){
        cf.src = ''
        cv.src = ''
        ie.src = 'imagens/img-car-3d/_DSC0370.JPG'
        id.src = 'imagens/img-car-3d/_DSC0374.JPG'
    }
    else if(x == 5){
        cf.src = ''
        cv.src = ''
        ie.src = 'imagens/img-car-3d/_DSC0370.JPG'
        id.src = 'imagens/img-car-3d/_DSC0374.JPG'
    }
    else if(x == 6){
        cf.src = ''
        cv.src = ''
        ie.src = 'imagens/img-car-3d/_DSC0370.JPG'
        id.src = 'imagens/img-car-3d/_DSC0374.JPG'
    }
    else if(x == 7){
        cf.src = ''
        cv.src = ''
        ie.src = 'imagens/img-car-3d/_DSC0370.JPG'
        id.src = 'imagens/img-car-3d/_DSC0374.JPG'
    }
    else if(x == 8){
        cf.src = ''
        cv.src = ''
        ie.src = 'imagens/img-car-3d/_DSC0370.JPG'
        id.src = 'imagens/img-car-3d/_DSC0374.JPG'
    } 
    else if (x == 9){
        cf.src = ''
        cv.src = ''
        ie.src = 'imagens/img-car-3d/_DSC0370.JPG'
        id.src = 'imagens/img-car-3d/_DSC0374.JPG'
        x = 0
    }
    else if (x < 0){
        cf.src = ''
        cv.src = ''
        ie.src = 'imagens/img-car-3d/_DSC0370.JPG'
        id.src = 'imagens/img-car-3d/_DSC0374.JPG'
        x = 8
    }
}
function cardsb(){
    if(prev.click){
        x--
    }

    if (x == 0){
        cf.src = ''
        cv.src = ''
        ie.src = 'imagens/img-car-3d/_DSC0370.JPG'
        id.src = 'imagens/img-car-3d/_DSC0374.JPG'
    }
    else if (x == 1){
        cf.src = ''
        cv.src = ''
        ie.src = 'imagens/img-car-3d/_DSC0370.JPG'
        id.src = 'imagens/img-car-3d/_DSC0374.JPG'
    }
    else if(x == 2){
        cf.src = ''
        cv.src = ''
        ie.src = 'imagens/img-car-3d/_DSC0370.JPG'
        id.src = 'imagens/img-car-3d/_DSC0374.JPG'
    }
    else if(x == 3){
        cf.src = ''
        cv.src = ''
        ie.src = 'imagens/img-car-3d/_DSC0370.JPG'
        id.src = 'imagens/img-car-3d/_DSC0374.JPG'
    }
    else if(x == 4){
        cf.src = ''
        cv.src = ''
        ie.src = 'imagens/img-car-3d/_DSC0370.JPG'
        id.src = 'imagens/img-car-3d/_DSC0374.JPG'
    }
    else if(x == 5){
        cf.src = ''
        cv.src = ''
        ie.src = 'imagens/img-car-3d/_DSC0370.JPG'
        id.src = 'imagens/img-car-3d/_DSC0374.JPG'
    }
    else if(x == 6){
        cf.src = ''
        cv.src = ''
        ie.src = 'imagens/img-car-3d/_DSC0370.JPG'
        id.src = 'imagens/img-car-3d/_DSC0374.JPG'
    }
    else if(x == 7){
        cf.src = ''
        cv.src = ''
        ie.src = 'imagens/img-car-3d/_DSC0370.JPG'
        id.src = 'imagens/img-car-3d/_DSC0374.JPG'
    }
    else if(x == 8){
        cf.src = ''
        cv.src = ''
        ie.src = 'imagens/img-car-3d/_DSC0370.JPG'
        id.src = 'imagens/img-car-3d/_DSC0374.JPG'
    } 
    else if (x == 9){
        cf.src = ''
        cv.src = ''
        ie.src = 'imagens/img-car-3d/_DSC0370.JPG'
        id.src = 'imagens/img-car-3d/_DSC0374.JPG'
        x = 0
    }
    else if (x < 0){
        cf.src = ''
        cv.src = ''
        ie.src = 'imagens/img-car-3d/_DSC0370.JPG'
        id.src = 'imagens/img-car-3d/_DSC0374.JPG'
        x = 8
    }
}
