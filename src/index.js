import './css/styles.css';

let cart = document.getElementById('cart');
let increment = 0;

document.querySelector('.heading').addEventListener('click', () => {
  increment +=1;
  cart.innerHTML = '<span class="cart">' + increment +'</span>';
});
