document.addEventListener('DOMContentLoaded', function() {

  // Menu bar
  const menuBar = document.querySelector('.menu-bar');

  document.addEventListener('scroll', function(e) {
    if (window.pageYOffset > menuBar.offsetTop) {
      menuBar.classList.add('fixed');

    } else {
      menuBar.classList.remove('fixed');
    }
  })

  // Main menu
  const hamburger = document.querySelector('.hamburger');
  const closeIcon = document.querySelector('.close-icon');
  const verticalMenu = document.querySelector('.m-vertical-menu');

  hamburger.addEventListener('click', function() {
    verticalMenu.classList.remove('slide-up');
    verticalMenu.classList.add('slide-down');
    hamburger.classList.add('hidden');
    closeIcon.classList.remove('hidden');
  });

  closeIcon.addEventListener('click', function() {
    verticalMenu.classList.add('slide-up');
    verticalMenu.classList.remove('slide-down');
    hamburger.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  })


  // Projects slider
  const bodyContentBtn = document.querySelector('.o-projects .body-content-btn');
  const headerImg = document.querySelectorAll('.o-projects-header img');
  const textHeading = document.querySelector('.o-projects .header-text-heading');
  const text = document.querySelector('.o-projects .header-text-content');


  let currentIndex = 0;
  const images = ['first', 'second', 'third'];
  const imageUrls = {

    'first' : {
      'images':
        [
          'https://res.cloudinary.com/dby4kdmbv/image/upload/v1617469176/creative-site/mobile/monirn1ybzxr31mh0osd.jpg',
          'https://res.cloudinary.com/dby4kdmbv/image/upload/v1617469021/creative-site/desktop/nyzwb1qbbsijvj8otp1y.jpg',
          'https://res.cloudinary.com/dby4kdmbv/image/upload/v1617469021/creative-site/desktop/nyzwb1qbbsijvj8otp1y.jpg'
        ],
      'text': {
        'heading': 'Learn Product Roadmap',
        'content': '2019 Project'
      }

    },
    'second' : {
      'images':
        [
          'https://res.cloudinary.com/dby4kdmbv/image/upload/v1617469177/creative-site/mobile/barvrsdva3ilaovzoi0k.jpg',
          'https://res.cloudinary.com/dby4kdmbv/image/upload/v1617469271/creative-site/tablet/hgxxol6lrquoniod1hwp.jpg',
          'https://res.cloudinary.com/dby4kdmbv/image/upload/v1617469023/creative-site/desktop/ygcdewlzhl4c5ayxqqww.jpg'
        ],
      'text': {
        'heading': 'New Majestic Hotel',
        'content': '2018 Project'
      }
    },
    'third' : {
      'images':
        [
          'https://res.cloudinary.com/dby4kdmbv/image/upload/v1617469177/creative-site/mobile/barvrsdva3ilaovzoi0k.jpg',
          'https://res.cloudinary.com/dby4kdmbv/image/upload/v1617469021/creative-site/desktop/kllwr8p1ewu9ag259il5.jpg',
          'https://res.cloudinary.com/dby4kdmbv/image/upload/v1617469021/creative-site/desktop/kllwr8p1ewu9ag259il5.jpg'

        ],
      'text': {
        'heading': 'Crypto Dashboard',
        'content': '2016 Project'
      }
    }

  };


  function addClasses(classVal) {
    for (let i=0; i < headerImg.length; i++) {
      headerImg[i].classList.add(classVal);
    }
  }

  function removeClasses(classVal) {
    for (let i=0; i < headerImg.length; i++) {
      headerImg[i].classList.remove(classVal);
    }
  }

  function addUrls(currentUrlImages) {
    for (let i=0; i<headerImg.length; i++) {
      headerImg[i].src = currentUrlImages[i];
    }

    setTimeout(function(){
      addClasses('slide-in');
      removeClasses('slide-out-left');
    }, 10); 

   const currentText = imageUrls[images[currentIndex]]['text'];
  
   textHeading.innerHTML = currentText['heading'];
   text.innerHTML = currentText['content'];
  }

 
  bodyContentBtn.addEventListener('click', function(e) {
    const btn = e.target;

    removeClasses('slide-in');
    addClasses('slide-out-left');

    if (btn.classList.contains('left')) {

      if (currentIndex === 0) {
        currentIndex = images.length-1;

      } else {
        currentIndex--;
      }
     

    } else if (btn.classList.contains('right')) {
      
      if (currentIndex === images.length-1) {
        currentIndex = 0;

      } else {
        currentIndex++;
      }

    }

    const currentUrlImages = imageUrls[images[currentIndex]]['images'];
    
    addUrls(currentUrlImages);

  });
});