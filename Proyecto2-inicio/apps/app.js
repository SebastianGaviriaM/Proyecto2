// NAVEGACION

let openBurger = document.getElementById('open-burger');
let closeBurger = document.getElementById('close-burger');
let navList = document.getElementById('nav-list');
let BtonCrearGifo = document.getElementById('BtonCrearGifo');


//HOVERS


BtonCrearGifo.addEventListener('mouseover', () =>{
    if(localStorage.getItem('Darkmode')=='false'){
        BtonCrearGifo.src='/assets/CTA-crear-gifo-hover.svg';
    }
    else{
        BtonCrearGifo.src='/assets/CTA-crear-gifo-hover-modo-noc.svg';
    }
    
});
BtonCrearGifo.addEventListener('mouseout', () =>{
    if(localStorage.getItem('Darkmode')=='false'){
        BtonCrearGifo.src='/assets/button-crear-gifo.svg';
    }
    else{
        BtonCrearGifo.src='/assets/CTA-crear-gifo-modo-noc.svg';
    }
    
});


let chkNavBar = document.getElementById('chk-nav-bar');

openBurger.addEventListener('click', () =>{
    chkNavBar.attributes.type.ownerElement.checked = true;
}); 

closeBurger.addEventListener('click', () =>{
    chkNavBar.attributes.type.ownerElement.checked = false;
}); 


//  MODO NOCTURNO


let darkBoton = document.getElementById('darkBoton');
let darkBotonCtn = document.getElementById('darkBoton-ctn');
let lightBoton = document.getElementById('lightBoton');
let lightBotonCtn = document.getElementById('lightBoton-ctn');


let lineaSup = document.getElementById('lineaSup');
let nav = document.getElementById('nav');
let logo = document.getElementById('logo');

let mainCont = document.getElementById('mainCont');
let footer = document.getElementById('footer');
let lineaInf = document.getElementById('lineaInf'); 

let Darkmode;

//FUNCIONES MODO OSCURO

function Dark(){
    
    //DarkNAV
    lineaSup.classList.add('lineasDark');
    nav.classList.add('navDark');
    navList.classList.remove('navList');
    navList.classList.add('navListDark');
    openBurger.src = '/assets/burger-modo-noct.svg';
    closeBurger.src = '/assets/close-modo-noct.svg';
    logo.src = 'assets/logo-mobile-modo-noct.svg';
    BtonCrearGifo.src = '/assets/CTA-crear-gifo-modo-noc.svg';
    
    //BusquedaDark
    mainCont.classList.add('mainDark');
    try {
        iconoBus.src = '/assets/icon-search-modo-noct.svg' ;
        closeBus.src = '/assets/close-modo-noct.svg';
    } catch (error) {
        console.log('Hubo cambio de clase en otra pagina');
    }

    //trend
    contTrend.classList.add('contTrendDark');
    footer.classList.add('footerDark');
    lineaInf.classList.add('lineasDark');

    lightBotonCtn.style.display = 'flex';
    darkBotonCtn.style.display = 'none';
    rightSlider.src = '/assets/button-slider-right-md-noct.svg';
    leftSlider.src = '/assets/button-slider-left-md-noct.svg';
}

function Light(){

    //NAV
    lineaSup.classList.remove('lineasDark');
    nav.classList.remove('navDark');
    navList.classList.remove('navListDark');
    navList.classList.add('navList');
    openBurger.src = '/assets/burger.svg';
    closeBurger.src = '/assets/close.svg';
    logo.src = 'assets/logo-mobile.svg';
    BtonCrearGifo.src = '/assets/button-crear-gifo.svg';

    //Busqueda
    mainCont.classList.remove('mainDark');
    try {
        iconoBus.src = '/assets/icon-search.svg' ;
        closeBus.src = '/assets/close.svg';
    } catch (error) {
        console.log(error);
    }

    //ternd
    contTrend.classList.remove('contTrendDark');
    //Footer
    footer.classList.remove('footerDark');
    lineaInf.classList.remove('lineasDark');

    lightBotonCtn.style.display = 'none';
    darkBotonCtn.style.display = 'flex';
}




// DARLE VALORES AL PRINCIPIO DE LA EJECUCION

Darkmode = localStorage.getItem('Darkmode'); 

if (Darkmode == 'true'){
    Dark();
}


darkBoton.addEventListener('click', () =>{
    localStorage.setItem('Darkmode', true);
    Dark();
});

lightBoton.addEventListener('click', ()=>{
    localStorage.setItem('Darkmode', false);
    Light();
});

