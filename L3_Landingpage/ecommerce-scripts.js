// JavaScript for "Add to Cart" functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', event => {
    const productName = event.target.getAttribute('data-product');
    const productPrice = event.target.getAttribute('data-price');
    alert(`${productName} has been added to your cart for $${productPrice}.`);
  });
});

// JavaScript for Newsletter Form Submission
document.getElementById('newsletter-form').addEventListener('submit', event => {
  event.preventDefault();
  const email = event.target.querySelector('input[type="email"]').value;
  alert(`Thank you for subscribing, ${email}!`);
});
