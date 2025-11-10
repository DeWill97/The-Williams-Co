let cart = [];
function addToCart(item, price) {
  cart.push({ item, price });
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const totalElem = document.getElementById("total");

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(c => {
    const li = document.createElement("li");
    li.textContent = `${c.item} - $${c.price}`;
    cartItems.appendChild(li);
    total += c.price;
  });

  totalElem.textContent = `Total: $${total.toFixed(2)}`;
}
