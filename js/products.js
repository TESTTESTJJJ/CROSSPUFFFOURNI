// js/products.js

const products = [
  {
    id: 1,
    name: "Casque Bluetooth",
    price: 49.99,
    image: "assets/img/casque.jpg",
    description: "Casque sans fil haute qualité avec réduction de bruit."
  },
  {
    id: 2,
    name: "Montre connectée",
    price: 89.90,
    image: "assets/img/montre.jpg",
    description: "Montre intelligente avec suivi de santé."
  },
  {
    id: 3,
    name: "Enceinte Portable",
    price: 35.00,
    image: "assets/img/enceinte.jpg",
    description: "Petite enceinte Bluetooth avec son puissant."
  },
  {
    id: 4,
    name: "Clavier Mécanique RGB",
    price: 69.99,
    image: "assets/img/clavier.jpg",
    description: "Clavier gamer rétroéclairé multicolore."
  },
  {
    id: 5,
    name: "Chargeur Rapide USB-C",
    price: 19.99,
    image: "assets/img/chargeur.jpg",
    description: "Chargeur 30W pour téléphone, tablette et plus."
  }
];

// Ajoute un produit au panier dans localStorage
function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = products.find(p => p.id === id);
  if (!product) return;

  const existing = cart.find(p => p.id === id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} ajouté au panier !`);
}
