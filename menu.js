let btnmenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');


btnmenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})


// REMOVE MENU
menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

// CLICANDO NA TELA O MENU FECHA
overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})




document.addEventListener('DOMContentLoaded', () => {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
  
    dropdownToggle.addEventListener('click', (event) => {
      event.stopPropagation();
      dropdownMenu.classList.toggle('show');
    });
  
    document.addEventListener('click', () => {
      if (dropdownMenu.classList.contains('show')) {
        dropdownMenu.classList.remove('show');
      }
    });
  });
  
