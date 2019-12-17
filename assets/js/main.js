var defaultButtonText = 'Add to cart <i class="fas fa-shopping-cart" aria-hidden="true"></i>';
var addToCartBtn = document.getElementsByClassName('item-actions__cart');
var cartCounterIcon = document.getElementById('cart-counter');
var itemPrice = document.getElementsByClassName('item-price');
var cartCounter = 0;
var cartValue = 0;

function cartIncrement() {
  cartCounterIcon.style.display = "block";
  cartCounterIcon.innerHTML = ++cartCounter;
} 

for (var i = 0; i < addToCartBtn.length; i++) {
  (function(i) {
    addToCartBtn[i].onclick = function() {
      var currentPrice = itemPrice[i].textContent;
      var processedPrice = currentPrice.substr(1).replace(' ', '.');
      cartValue += +processedPrice;
      var currentCartValue = cartValue.toFixed(2);

      addToCartBtn[i].innerHTML = `ADDED ${currentCartValue} $`;
      disableButtons();
      setTimeout(function() {
        enableButtons();
        addToCartBtn[i].innerHTML = defaultButtonText;
      }, 2000);
      cartIncrement();
    }
  })(i);
}

function disableButtons() {
  for (var i = 0; i < addToCartBtn.length; i++) {
    addToCartBtn[i].style.pointerEvents = 'none';
  }
}

function enableButtons() {
  for (var i = 0; i < addToCartBtn.length; i++) {
    addToCartBtn[i].style.pointerEvents = 'all';
  }
}