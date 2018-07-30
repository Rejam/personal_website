const select = q => document.querySelector(q)
const selectAll = q => document.querySelectorAll(q)

// DOM items
const menuBtn = select(".menu-btn")
const menu = select('.menu')
const menuBrand = select('.menu-brand')
const menuNav = select('.menu-nav')
const menuItems = selectAll('.nav-item')

// Menu initial state
let showMenu = false;

// Menu Toggle
menuBtn.addEventListener('click', toggleMenu)
function toggleMenu() {
  menuBtn.classList.toggle('close')
  menu.classList.toggle('show')
  menuNav.classList.toggle('show')
  menuBrand.classList.toggle('show')
  menuItems.forEach(item => item.classList.toggle('show'))
  showMenu = !showMenu
}
