// Carrito de compras
const cart = [];

// Función para agregar un producto al carrito
function addToCart(product) {
  cart.push(product);
  updateCart();
}

// Función para actualizar la visualización del carrito
function updateCart() {
  // Obtener el elemento del carrito en el HTML
  const cartElement = document.getElementById("cart");
  cartElement.innerHTML = ""; // Limpiar el contenido del carrito

  // Agregar cada producto al carrito
  cart.forEach((product) => {
    const productItem = document.createElement("li");
    productItem.textContent = `${product.name} - $${product.price}`;
    cartElement.appendChild(productItem);
  });

  // Actualizar el total del carrito (opcional)
  const total = cart.reduce((sum, product) => sum + product.price, 0);
  document.getElementById("cart-total").textContent = `Total: $${total}`;
}

// Función para mostrar/ocultar el carrito desplegable
function toggleCartDropdown() {
  const cartDropdown = document.getElementById("cart-dropdown");
  cartDropdown.style.display = cartDropdown.style.display === "none" ? "block" : "none";
}

// Ejemplo de productos
const products = [
  { id: 1, name: "Marketing digital", price: 15 },
  { id: 2, name: "Diseño Gráfico", price: 30 },
  { id: 3, name: "Diseño Web y apps", price: 50 },
];

// Agregar productos al carrito (ejemplo)
//addToCart(products[0]);
//addToCart(products[2]);

// Mostrar el carrito
updateCart();

// Evento para el botón del carrito
const cartButton = document.getElementById("cart-button");
cartButton.addEventListener("click", toggleCartDropdown);

// Evento para el botón de cerrar el carrito
const closeCartButton = document.getElementById("close-cart");
closeCartButton.addEventListener("click", toggleCartDropdown);

// Agregar evento click a los botones "Agregar al carrito"
const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;
    const product = products.find((p) => p.id === parseInt(productId));
    addToCart(product);
  });
});






