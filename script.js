//Variáveis
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')



//Event
btnMenu.addEventListener('click', ()=>{
  menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
  menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
  menu.classList.remove('abrir-menu')
})


// Variáveis para o swipe
let startX = 0; // Posição inicial do toque

// Detecta o início do toque
document.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

// Detecta o fim do toque
document.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  const swipeDistance = startX - endX;

  // Verifica se o swipe foi da direita para a esquerda
  if (swipeDistance > 50) { // Ajuste para um swipe mínimo
    menu.classList.add('abrir-menu');
  }
});


document.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  const swipeDistance = startX - endX;

  if (swipeDistance > 50) {
    menu.classList.add('abrir-menu'); // Abre o menu
  } else if (swipeDistance < -50) {
    menu.classList.remove('abrir-menu'); // Fecha o menu
  }
});

//ABRIR WHATSAPP
function openWhatsApp() {
    const phoneNumber = "+244928134599"; // Substitua com o número do restaurante
    const message = "Oi Lauriano tudo bem?";
    open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
}