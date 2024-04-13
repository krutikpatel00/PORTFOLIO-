$(document).ready(function () {
      $(".taggle-manu").click(function (e) {
            $("header nav").slideToggle();
      });
});


// trip select
const tripItems = document.querySelector('.trip-move');
const tripSelect = document.querySelector('.trip-select');
const tripLinks = document.querySelectorAll('.trip-select ul li a');

tripLinks.forEach(link => {
      link.addEventListener('click', (e) => {
            e.preventDefault();

            // Calculate the center offset relative to the trip-select container
            const linkWidth = link.offsetWidth;
            const offset = link.parentElement.offsetLeft - tripSelect.offsetLeft + (linkWidth / 2);
            console.log(offset);

            // Update the position of the pseudo-element based on the selected link
            tripItems.style.left = `${offset}px`;
      });
});