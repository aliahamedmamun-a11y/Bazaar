const products = [
{
id:1,
name:"Smartphone",
price:199,
image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
},
{
id:2,
name:"Laptop",
price:799,
image:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
},
{
id:3,
name:"Headphone",
price:99,
image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
}
];

// Load Products
const productList = document.getElementById("productList");

if(productList){
products.forEach(product=>{
productList.innerHTML += `
<div class="card">
<img src="${product.image}">
<h3>${product.name}</h3>
<div class="price">$${product.price}</div>
<button onclick="addToCart(${product.id})">Add to Cart</button>
</div>
`;
});
}

// Cart System
function addToCart(id){
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let product = products.find(p=>p.id===id);
cart.push(product);
localStorage.setItem("cart", JSON.stringify(cart));
alert("Added to Cart");
}

// Load Cart Page
const cartItems = document.getElementById("cartItems");

if(cartItems){
let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.forEach(item=>{
cartItems.innerHTML += `
<div class="cart-item">
<h3>${item.name}</h3>
<p>$${item.price}</p>
</div>
`;
});
}
