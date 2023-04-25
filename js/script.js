


// This section selects the menu button and navbar elements from the DOM and attaches an onclick event listener to the menu button. When clicked, the function toggles the 'fa-times' class on the menu button and 'active' class on the navbar.

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};

// This section attaches an onscroll event listener to the window object. When scrolled, the function removes the 'fa-times' class from the menu button and 'active' class from the navbar.

window.onscroll = () =>{
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');
};

// This section selects all input elements with type "number" from the DOM and attaches an oninput event listener to each input. When the input value exceeds the maximum length, the function truncates the value.

document.querySelectorAll('input[type="number"]').forEach(inputNumber => {
   inputNumber.oninput = () =>{
      if(inputNumber.value.length > inputNumber.maxLength) inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength);
   };
});

// This section initializes a new Swiper object for the home-slider container with specified options for loop and navigation buttons.

var swiper = new Swiper(".home-slider", {
   loop:true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".reviews-slider", {
   grabCursor:true,
   loop:true,
   autoHeight:true,
   spaceBetween: 20,
   breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
   },
});

// This section selects the load more button element from the DOM and attaches an onclick event listener to it. When clicked, the function displays the next 3 packages and increments the current item counter. If there are no more packages to display, the function hides the load more button.

let loadMoreBtn = document.querySelector('.packages .load-more .btn');
let currentItem = 3;

loadMoreBtn.onclick = () =>{
   let boxes = [...document.querySelectorAll('.packages .box-container .box')];
   for (var i = currentItem; i < currentItem + 3; i++){
      boxes[i].style.display = 'inline-block';
   };
   currentItem += 3;
   if(currentItem >= boxes.length){
      loadMoreBtn.style.display = 'none';
   }
}
