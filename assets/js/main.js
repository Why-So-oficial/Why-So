//Responsividade menu hamburguer
const hamburgMenu = document.querySelector('.hamburguer');
const mobileMenu = document.querySelector('.menu-mobile');

hamburgMenu.addEventListener('click',()=>{
    hamburgMenu.classList.toggle('mobile-active');
    mobileMenu.classList.toggle('active');
    
});

// carrousel 
const myCarouselElement = document.querySelector('#carrousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 4000,
    pause: 'hover',
    keyboard: true,
})

//fim carrousel

const backToTop = document.querySelector('#backToTop');

backToTop.addEventListener('click', ()=>{
    window.scrollTo(0, 0);
})
