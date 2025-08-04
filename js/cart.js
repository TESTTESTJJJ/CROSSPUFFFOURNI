// js/cart.js

// Affiche les produits dans le panier
function displayCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>Votre panier est vide.</p>";
    document.getElementById("cart-total").textContent = "Total : 0 €";
    return;
  }

  cartItemsContainer.innerHTML = ""; // Vide avant ajout

  let total = 0;

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";
    itemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
      <div class="cart-item-info">
        <h3>${item.name}</h3>
        <p>Prix unitaire : ${item.price.toFixed(2)} €</p>
        <p>Quantité : ${item.quantity}</p>
        <p>Total : ${itemTotal.toFixed(2)} €</p>
        <button onclick="removeFromCart(${item.id})">Supprimer</button>
      </div>
    `;
    cartItemsContainer.appendChild(itemDiv);
  });

  document.getElementById("cart-total").textContent = `Total : ${total.toFixed(2)} €`;
}

// Supprime un produit du panier (ou réduit quantité)
function removeFromCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter(item => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

// Vide tout le panier
function clearCart() {
  if (confirm("Voulez-vous vraiment vider le panier ?")) {
    localStorage.removeItem("cart");
    displayCart();
  }
}

// Au chargement de la page, affiche le panier
document.addEventListener("DOMContentLoaded", () => {
  displayCart();
});
