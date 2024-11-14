const menuBurger = document.getElementById('menuBurger');
const mobileMenu = document.getElementById('mobileMenu');
const menuClose = document.getElementById('menuClose');

menuBurger.addEventListener('click', ()=>{
  mobileMenu.style.display = 'block';
})

menuClose.addEventListener('click', ()=>{
  mobileMenu.style.display = 'none';
})
