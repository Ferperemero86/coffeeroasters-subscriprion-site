document.addEventListener('DOMContentLoaded', function() {

  //// Menu selection ////

  // Order Summary
  const howEl = document.querySelector('.o-order-summary .how');
  const typeEl = document.querySelector('.o-order-summary .type');
  const quantityEl = document.querySelector('.o-order-summary .quantity');
  const grindEl = document.querySelector('.o-order-summary .grind');
  const deliveryEl = document.querySelector('.o-order-summary .delivery');
  const orderElements = [howEl, typeEl, quantityEl, grindEl, deliveryEl];
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

  const placeOrderContent = function() {
    orderElements.map(function(el, idx) {
      const keys = Object.keys(orderSumary);
  
      el.innerHTML = orderSumary[keys[idx]];
    });
  }

  

  placeOrderContent();


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
        placeOrderContent();
      }
    })
    
  }


  //// Checkout ////
  const orderBtn = document.querySelector('.o-order-summary-btn');
  const checkoutBtns = document.querySelector('.o-checkout-btns');
  const checkoutBtn = document.querySelector('.o-checkout-btns .checkout');
  const cancelBtn = document.querySelector('.o-checkout-btns .cancel');
  const textSuccess = document.querySelector('.text-success');

  const orderSummary = document.querySelector('.o-order-summary');
  const orderSummaryBody = document.querySelector('.o-order-summary-body');
  const checkoutPrice = document.querySelector('.o-checkout-price');
  const layer = document.querySelector('.layer');


  orderBtn.addEventListener('click', function(e) {
    console.log('click');
    window.scrollTo(0,0);

    this.classList.add('hidden');
    checkoutBtns.classList.remove('hidden');
    orderSummary.classList.add('o-checkout');
    checkoutPrice.classList.remove('hidden');
    layer.classList.add('show');
  });


  checkoutBtn.addEventListener('click', function(e) {
    textSuccess.classList.remove('hidden');
    orderSummaryBody.classList.add('hidden');
    checkoutBtns.classList.add('hidden');
    checkoutPrice.classList.add('hidden');

    setTimeout(function() {
      orderSummary.classList.remove('o-checkout');
      orderBtn.classList.remove('hidden');
      layer.classList.remove('show');
      textSuccess.classList.add('hidden');
      orderSummaryBody.classList.remove('hidden');
    }, 1500)
  })


  cancelBtn.addEventListener('click', function(e) {
      orderSummary.classList.remove('o-checkout');
      orderBtn.classList.remove('hidden');
      layer.classList.remove('show');
      textSuccess.classList.add('hidden');
      orderSummaryBody.classList.remove('hidden');
      checkoutBtns.classList.add('hidden');
      checkoutPrice.classList.add('hidden');
  })

});