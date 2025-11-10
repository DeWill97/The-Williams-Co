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

// --- Falling “The Williams Company” Wallpaper ---
function createFallingText() {
  const container = document.getElementById("falling-bg");
  const text = document.createElement("div");
  text.classList.add("falling-text");
  text.textContent = "The Williams Company";

  text.style.left = Math.random() * 100 + "vw";
  text.style.animationDuration = (6 + Math.random() * 5) + "s";
  text.style.fontSize = (16 + Math.random() * 20) + "px";

  container.appendChild(text);

  setTimeout(() => text.remove(), 10000);
}

// Create falling text every 400 milliseconds
setInterval(createFallingText, 400);
