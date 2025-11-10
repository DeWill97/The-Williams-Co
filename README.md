<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>De's Clothing Store</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
    header, footer { background: #222; color: #fff; padding: 1em; text-align: center; }
    nav a { margin: 0 1em; color: #fff; text-decoration: none; }
    .products { display: flex; flex-wrap: wrap; justify-content: center; padding: 2em; }
    .item { border: 1px solid #ccc; margin: 1em; padding: 1em; width: 200px; text-align: center; }
    .item img { width: 100%; height: auto; }
    .checkout, .help { padding: 2em; text-align: center; }
    button { padding: 0.5em 1em; background: #000; color: #fff; border: none; cursor: pointer; }
  </style>
</head>
<body>

  <header>
    <h1>De's Clothing Store</h1>
    <nav>
      <a href="#tees">Graphic Tees</a>
      <a href="#hoodies">Hoodies</a>
      <a href="#shorts">Shorts</a>
      <a href="#pants">Pants</a>
      <a href="#checkout">Checkout</a>
      <a href="#help">Help</a>
    </nav>
  </header>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My First Website</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background: #f4f4f4;
      color: #333;
    }
    header {
      background: #0077cc;
      color: white;
      padding: 1rem;
      text-align: center;
    }
    nav {
      background: #005fa3;
      display: flex;
      justify-content: center;
      gap: 1rem;
      padding: 0.5rem;
    }
    nav a {
      color: white;
      text-decoration: none;
      font-weight: bold;
    }
    main {
      padding: 2rem;
      text-align: center;
    }
    button {
      padding: 0.5rem 1rem;
      font-size: 1rem;
      background: #0077cc;
      color: white;
      border: none;
      cursor: pointer;
      margin-top: 1rem;
    }
    footer {
      background: #333;
      color: white;
      text-align: center;
      padding: 1rem;
      position: fixed;
      bottom: 0;
      width: 100%;
    }
    @media (max-width: 600px) {
      nav {
        flex-direction: column;
      }
    }
  </style>
</head>
<body>
  <header>
    <h1>Welcome to My Website</h1>
  </header>
  <nav>
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </nav>
  <main>
    <h2>Hello, world!</h2>
    <p>This is a simple website built with HTML, CSS, and JavaScript.</p>
    <button onclick="changeText()">Click Me</button>
    <p id="message"></p>
  </main>
  <footer>
    &copy; 2025 My Website. All rights reserved.
  </footer>

  <script>
    function changeText() {
      const msg = document.getElementById("message");
      msg.textContent = "Thanks for clicking! 🎉";
    }
  </script>
</body>
</html>

  <section class="products" id="tees">
    <h2>Graphic Tees</h2>
    <div class="item">
      <img src="https://via.placeholder.com/200x200?text=Tee+1" alt="Tee 1" />
      <p>Cool Graphic Tee</p>
      <p>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Williams Company | Shop</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <header>
    <h1>The Williams Company</h1>
    <p class="slogan">Built for Hustle. Styled for Life.</p>
    <nav>
      <a href="index.html">Home</a>
      <a href="shop.html" class="active">Shop</a>
      <a href="contact.html">Contact</a>
    </nav>
  </header>

  <section class="shop">
    <h2>Our Collection</h2>


