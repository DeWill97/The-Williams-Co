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

  <section class="products" id="tees">
    <h2>Graphic Tees</h2>
    <div class="item">
      <img src="https://via.placeholder.com/200x200?text=Tee+1" alt="Tee 1" />
      <p>Cool Graphic Tee</p>
      <p>
