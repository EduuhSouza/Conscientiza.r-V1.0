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