const products = [
  {name:'Avvatar 100% Performance Whey', price:2799, mrp:2999, img:'assets/avvatar-whey.jpg', desc:'Belgian Chocolate, 1kg premium whey protein', tag:'17% OFF'},
  {name:'MuscleBlaze Creatine Monohydrate', price:999, mrp:1099, img:'assets/mb-creatine.jpg', desc:'Micronised creatine, 250g unflavoured', tag:'27% OFF'},
  {name:'MuscleBlaze WrathX Pre Workout', price:1999, mrp:2199, img:'assets/mb-wrathx.jpg', desc:'Fruit Fury pre-workout for pump and energy', tag:'25% OFF'},
  {name:'MB Biozyme Performance Whey', price:3399, mrp:3499, img:'assets/mb-whey.jpg', desc:'Rich Chocolate, 1kg performance whey', tag:'20% OFF'},
  {name:'Wellcore Creatine', price:499, mrp:699, img:'assets/wellcore.avif', desc:'Premium creatine for strength and power', tag:'23% OFF'}
];
let cart=[];
function renderProducts(list=products){
  document.getElementById('productGrid').innerHTML=list.map((p,i)=>`
    <div class="card">
      <div class="badge">${p.tag}</div>
      <div class="card-img"><img src="${p.img}" alt="${p.name}"></div>
      <div class="rating">★★★★★ 4.${8-i}</div>
      <h3>${p.name}</h3>
      <p class="desc">${p.desc}</p>
      <div class="price"><b>₹${p.price}</b><del>₹${p.mrp}</del></div>
      <button onclick="addToCart(${i})">Add to Cart</button>
    </div>`).join('');
}
function addToCart(i){cart.push(products[i]);updateCart();document.getElementById('cartBox').classList.add('open')}
function updateCart(){
  document.getElementById('cartCount').innerText=cart.length;
  document.getElementById('cartItems').innerHTML=cart.map((p,i)=>`<div class="cart-item"><span>${p.name}<br>₹${p.price}</span><button onclick="removeItem(${i})">Remove</button></div>`).join('');
  document.getElementById('total').innerText=cart.reduce((s,p)=>s+p.price,0);
}
function removeItem(i){cart.splice(i,1);updateCart()}
function toggleCart(){document.getElementById('cartBox').classList.toggle('open')}
function searchProducts(){
  const q=document.getElementById('search').value.toLowerCase();
  renderProducts(products.filter(p=>p.name.toLowerCase().includes(q)||p.desc.toLowerCase().includes(q)));
}
function orderWhatsApp(){
  if(!cart.length){alert('Cart empty hai bhai');return}
  let total=cart.reduce((s,p)=>s+p.price,0);
  let msg='Hello O Supplements, mujhe ye order karna hai:%0A%0A';
  cart.forEach((p,i)=>msg+=`${i+1}. ${p.name} - ₹${p.price}%0A`);
  msg+=`%0ATotal: ₹${total}`;
  window.open('https://wa.me/918724811023?text='+msg,'_blank');
}
renderProducts();
