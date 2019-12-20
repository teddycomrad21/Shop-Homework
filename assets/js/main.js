const defaultButtonText = 'Add to cart <i class="fas fa-shopping-cart" aria-hidden="true"></i>';
const cartCounterIcon = document.getElementById('cart-counter');
const content = document.querySelector('.page-content');
let cartCounter = 0;
let cartValue = 0;

const cartIncrement = () => {
  cartCounterIcon.style.display = 'block';
  cartCounterIcon.innerHTML = ++cartCounter;
} 

const addToCartLogic = (event) => {
  const target = event.target;

  if (target.classList.contains('item-actions__cart')) {
    const parentContainer = target.closest('.container-fluid');
    const currentPrice = parentContainer.querySelector('.item-price').textContent;
    let processedPrice = currentPrice.substr(1).replace(' ', '.');
    cartValue += +processedPrice;
    const formatter = new Intl.NumberFormat('en-US', {
      currency: 'USD',
      minimumFractionDigits: 2
    });

    target.innerHTML = `ADDED ${formatter.format(cartValue)} $`;
    content.removeEventListener('click', addToCartLogic);

    setTimeout(() => {
      content.addEventListener('click', addToCartLogic);
      target.innerHTML = defaultButtonText;
    }, 2000);
    cartIncrement();
  }
}
    
content.addEventListener('click', addToCartLogic);
  



