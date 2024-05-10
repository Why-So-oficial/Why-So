const head = document.getElementById('head');
const body = document.getElementById('body');

const iconStyles = '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">';
const faviconStyles = '<link rel="shortcut icon" href="../img/favicon.ico" type="image/x-icon">'

head.innerHTML += iconStyles;
head.innerHTML += faviconStyles;

//Criação do elemento semantico <header>
const header = document.createElement('header');
header.setAttribute('id', 'header');
header.setAttribute('class', 'header');
body.prepend(header);
//Criação do botão home do header
const contentHeader = 
    '<header id="header">'+
            '<a href="../../index.html"><img class="logo-header" src="../img/logo-header.png" alt="logo Why so"></a>'+
            '<nav class="navMenu">'+
                '<div class="menu">'+
                    '<a class="nav-item" href="../../index.html">Home</a>'+
                    '<a class="nav-item" href="./artigosGerais.html">Artigos</a>'+
                    '<a class="nav-item" href="./quemSomos.html">Quem somos</a>'+
                    '<a class="nav-item" href="./podcast.html">Podcast</a>'+
                '</div>'+
            '</nav>'+
            '<div class="hamburguer">'+
                '<span class="bar"></span>'+
                '<span class="bar"></span>'+
                '<span class="bar"></span>'+
            '</div>'+
            '<nav class="menu-mobile">'+
            '<a class="nav-item-mob" href="./index.html">Home</a>'+
            '<a class="nav-item-mob" href="./artigosGerais.html">Artigos</a>'+
            '<a class="nav-item-mob" href="./quemSomos.html">Quem somos</a>'+
            '</nav>'+
        '</header>';
//Adiçao do botão home no header 
header.innerHTML += contentHeader;


const footer = document.createElement('footer');
footer.setAttribute('id', 'footer');
footer.setAttribute('class', 'footer');
body.appendChild(footer);

const contentFooter = 
    '<div class="footer-link img">'+
    '<span class="logo-footer">'+
        '<a id="backToTop">'+
            '<video class="logo-footer" src="../video/logo-footer.mp4"  alt="Why so" autoplay loop>'+
        '</a>'+
    '</span>'+
'</div>'+

'<div class="footer-link">'+
    '<p id="direitos">Todos os direitos reservados&copy;</p>'+
'</div>'+

'<div class="footer-link sup">'+
    '<div class="sup">'+
        '<a href="https://youtube.com/@Whyso_ofc?si=xBRdUNteaPMieeCi" target="_blank" class="youtube-footer">'+
            '<i id="youtube-bi2" class="bi bi-youtube"></i>'+
        '</a>'+
        '<a  class="bi bi-instagram" href="https://www.instagram.com/whyso_031?igsh=MWttdWE0a203anFtag==" target="_blank"></a>'+

        '<a id="suport" href="assets/html/construcao.html" class="nav-footer">'+
        '<i class="bi bi-person-raised-hand"></i> Suporte</a>'+
    '</div>'+
'</div>';

footer.innerHTML += contentFooter;

//Responsividade menu hamburguer
const hamburgMenu = document.querySelector('.hamburguer');
const mobileMenu = document.querySelector('.menu-mobile');

hamburgMenu.addEventListener('click',()=>{
    hamburgMenu.classList.toggle('mobile-active');
    mobileMenu.classList.toggle('active');
    
});

//Criacao para voltar para o topo

const backToTop = document.querySelector('#backToTop');

backToTop.addEventListener('click', ()=>{
    window.scrollTo(0, 0);
})
