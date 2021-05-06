document.addEventListener('DOMContentLoaded', function() {

  //// Mobile menu ////
  const hamburgerEl = document.querySelector('.a-hamburger');
  const mobileMenuEl = document.querySelector('.m-mobile-menu');

  hamburgerEl.addEventListener('click', function(e) {
   
    if (this.classList.contains('down')) {
      mobileMenuEl.classList.add('hidden');
      this.classList.remove('down');

    } else {
      mobileMenuEl.classList.remove('hidden');
      this.classList.add('down');
    }
   
  });

});