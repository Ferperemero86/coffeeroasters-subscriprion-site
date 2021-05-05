document.addEventListener('DOMContentLoaded', function() {

  //// Menu selection ////
  const selectMenu = document.querySelector('.o-selection-menu');
  const orderSumary = {
    'how': 'Capsule',
    'type': 'Single Origin',
    'quantity': '250g',
    'grind': 'Wholebean',
    'delivery': 'Every Week'
  };

  const getCardSelectedText = function (cardEl) {
    let card = cardEl;
    let found = false;
    let result = 'test';

    while (!found) {

      if (card.children[0].classList.contains('a-heading-3')) {
        found = true;
        result = card.children[0].innerHTML;

      } else {
        card = card.children[0];
      }
    }

    return result;

  }

  
  // Card display
  const removeClasses = function(cards) {

    for (let i=0; i<cards.length; i++) {
      if (cards[i].classList.contains('card-active')) {
        cards[i].classList.remove('card-active');
      }
    }
  }

  const addSelectionToOrder = function(cardHeading) {
    if (cardHeading === 'Capsule' || cardHeading === 'Filter' || cardHeading === 'Espresso') {
      orderSumary['how'] = cardHeading;
    }

    if (cardHeading === 'Single Origin' || cardHeading === 'Decaf' || cardHeading === 'Blended') {
      orderSumary['type'] = cardHeading;
    }

    if (cardHeading === '250g' || cardHeading === '500g' || cardHeading === '1000g') {
      orderSumary['quantity'] = cardHeading;
    }

    if (cardHeading === 'Wholebean' || cardHeading === 'Filter' || cardHeading === 'Cafetiére') {
      orderSumary['grind'] = cardHeading;
    }

    if (cardHeading === 'Every week' || cardHeading === 'Every 2 weeks' || cardHeading === 'Every month') {
      orderSumary['delivery'] = cardHeading;
    }
  }


  for (let i=0; i<selectMenu.children.length; i++) {
    const currentMenu = selectMenu.children[i];
    const currentMenuBody = currentMenu.children[1];
    const arrow = currentMenu.children[0].children[1];
    const cards = currentMenu.children[1];


    arrow.addEventListener('click', function(e) {
      
      if (currentMenuBody.classList.contains('slide-up')) {
        currentMenuBody.classList.remove('slide-up');
        currentMenuBody.classList.add('slide-down');
        this.classList.remove('a-arrow-right');
        this.classList.add('a-arrow-down');

      } else {
        currentMenuBody.classList.remove('slide-down');
        currentMenuBody.classList.add('slide-up');
        this.classList.remove('a-arrow-down');
        this.classList.add('a-arrow-right');

      }
      
    });

    cards.addEventListener('click', function(e) {
      const card = e.target.closest('.menu-field-card');
      const cardsChildren = this.children;

      removeClasses(cardsChildren);

      if (!card.classList.contains('card-active')) {
        card.classList.add('card-active');
        cardSelectedText = getCardSelectedText(card);
        
        addSelectionToOrder(cardSelectedText);
        console.log(orderSumary);
      }
    })
    
  }

});