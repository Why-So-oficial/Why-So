const head = document.getElementById('head');
const body = document.getElementById('body');

const globalStyles = "<link rel='stylesheet' href='../css/global.css'>";
const iconStyles = '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">';
const faviconStyles = '<link rel="shortcut icon" href="../img/favicon.ico" type="image/x-icon">'

head.innerHTML += globalStyles;
head.innerHTML += iconStyles;
head.innerHTML += faviconStyles;


//Criação do elemento semantico <header>
const header = document.createElement('header');
header.setAttribute('id', 'header');
header.setAttribute('class', 'header');
body.prepend(header);
//Criação do botão home do header
const contentHeader = 
    '<img class="logo-header" src="../img/logo-header.png" alt="logo Why so">'+
    '<div class="divBusca">'+
        '<input type="text" class="txtBusca" placeholder="Pesquisar"/>'+
        '<i class="bi bi-search"></i>'+
    '</div>'+
    '<nav>'+
    '<div class="menu">'+
        '<a class="nav-item" href="/index.html">Home</a>'+
        '<a class="nav-item" href="/assets/html/quem_somos.html">Quem somos</a>'+
    '</div>'+
    '</nav>';

//Adiçao do botão home no header 
header.innerHTML += contentHeader;

//Crição do elemento semantico <footer>
const footer = document.createElement('footer');
footer.setAttribute('id', 'footer');
footer.setAttribute('class', 'footer');
body.appendChild(footer);

const contentFooter = 
    '<span class="logo-footer">'+
        '<img id="img-footer" src="../img/logo-footer.png" alt="Why so">'+
    '</span>'+
    '<p id="direitos">Todos os direitos reservados&copy;</p>'+
    '<div class="sup">'+
        '<a id="suport" href="#" class="nav-footer">'+
        '<i class="bi bi-person-raised-hand"></i> Suporte</a>'+
    '</div>';

footer.innerHTML += contentFooter;