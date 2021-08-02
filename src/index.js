import './css/styles.css';

let cart = document.getElementById('cart');
let increment = 0;

document.querySelector('.buy1').addEventListener('click', () => {
  increment += 1;
  cart.innerHTML = '<span class="cart">' + increment + '</span>';
  document.getElementById('callout-message').style.display = 'block'
  setTimeout(() => document.getElementById('callout-message').style.display = 'none', 3000)
});
document.querySelector('.buy2').addEventListener('click', () => {
  increment += 1;
  cart.innerHTML = '<span class="cart">' + increment + '</span>';
  document.getElementById('callout-message').style.display = 'block'
  setTimeout(() => document.getElementById('callout-message').style.display = 'none', 3000)
});
document.querySelector('.buy3').addEventListener('click', () => {
  increment += 1;
  cart.innerHTML = '<span class="cart">' + increment + '</span>';
  document.getElementById('callout-message').style.display = 'block'
  setTimeout(() => document.getElementById('callout-message').style.display = 'none', 3000)
});
document.querySelector('.buy4').addEventListener('click', () => {
  increment += 1;
  cart.innerHTML = '<span class="cart">' + increment + '</span>';
  document.getElementById('callout-message').style.display = 'block'
  setTimeout(() => document.getElementById('callout-message').style.display = 'none', 3000)
});
