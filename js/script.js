
// Constants and variables 

// Slider picture
let id = 0

// Elements
let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');
let closeBtn = document.querySelector('#close-navbar');

// Slider pictures array 
const images = [
   'workplace1.jpg', 'workplace2.jpg', 'workplace3.jpg', 'workplace4.jpg', 'workplace5.jpg'
]

// Functions 

menuBtn.onclick = () => {
   navbar.classList.add('active');
};

closeBtn.onclick = () => {
    navbar.classList.remove('active');
 };

window.onscroll = () => {
   navbar.classList.remove('active');
};

// Slider arrows click
document.querySelector('.arrow-left').addEventListener('click', () => {
   id--;
   if(id < 0) {
      id = images.length - 1;
   }
   slide(id);
});

document.querySelector('.arrow-right').addEventListener('click', () => {
   id++;
   if(id > images.length - 1) {
      id = 0;
   }
   slide(id);
});


// Sliding function 
function slide(id) {
   let slider = document.querySelector('#slider')
   slider.style.backgroundImage = `url(../images/${images[id]})`;
   // fadeOut(slider, 500)
   fadeIn(slider)
}

function autoSliding() {
   deleteInterval = setInterval(timer, 30000);
   function timer() {
      if (id < images.length - 1) {
         id++;
      } else {
         id = 0
      }
      slide(id)
   }
}

// Slider fade effect
function fadeIn(element) {
   (function increment(value = 0) {
       element.style.opacity = String(value);

      if (element.style.opacity == '0') {
         setTimeout(() => {
             increment(value + 0.1);
         }, 200);
      }

      if (element.style.opacity >= '0.1' && element.style.opacity !== '1') {
           setTimeout(() => {
               increment(value + 0.1);
         }, 100);
      }
   })();
};

// Runtime
autoSliding();