//ACTIVAR LA BUSQUEDA

let ilustraHeader = document.getElementById('ilustra-header');
let h1 = document.getElementById('h1');
let iconoBus = document.getElementById('iconoBus');
let closeBus = document.getElementById('closeBus');
let srchBar = document.getElementById('srchBar');


srchBar.addEventListener('focusin', ()=> {
    ilustraHeader.classList.add('displayNone');
    ilustraHeader.classList.remove('displayBlock');

    h1.classList.add('displayNone');
    h1.classList.remove('displayBlock');

    iconoBus.classList.add('displayNone');
    iconoBus.classList.remove('displayBlock');

    closeBus.classList.add('displayBlock');
    closeBus.classList.remove('displayNone');
});
srchBar.addEventListener('keydown', () => {
    ilustraHeader.classList.add('displayNone');
    ilustraHeader.classList.remove('displayBlock');
    h1.classList.add('displayNone');
    h1.classList.remove('displayBlock');
    iconoBus.classList.add('displayNone');
    iconoBus.classList.remove('displayBlock');
    closeBus.classList.add('displayBlock');
    closeBus.classList.remove('displayNone');
});

//Click e la x para cerrar la busqueda
closeBus.addEventListener('click', () => {
    iconoBus.classList.add('displayBlock');
    iconoBus.classList.remove('displayNone');
    closeBus.classList.add('displayNone');
    closeBus.classList.remove('displayBlock');
    ilustraHeader.classList.add('displayBlock');
    ilustraHeader.classList.remove('displayNone');
    h1.classList.add('displayBlock');
    h1.classList.remove('displayNone');
    srchBar.value = '';
});

//Hacer busqueda

let contGifBus = document.getElementById('contGifBus');
let trenBus = document.getElementById('tren-bus');
let tituloBusq = document.getElementById('tituloBusq');
let cantImg = 0;
let verMas = document.getElementById('verMas');
let busqueda = '';

function appendGifs(elemento) {
    for (let index = cantImg; index < (cantImg+12); index++) {
        const element = elemento[index];
        console.log(element);
        let contGifBus = document.createElement('div');
        let gifBusq = document.createElement('img');
        let hover = document.createElement('div');
        gifBusq.src = element.images.downsized_large.url;
        contGifBus.classList.add('imgBusCont');

        //botones hover
        let contBtn = document.createElement('div');
        contBtn.classList.add('contImg');
        let contTit = document.createElement('div');
        contTit.classList.add('contTit');

        let img1 = document.createElement('img');
        let img2 = document.createElement('img');
        img2.src = '/assets/icon-download.svg';
        let img3 = document.createElement('img');
        img3.src = '/assets/icon-max-normal.svg';

        if(listaFavoritos.includes(element.id)){
            img1.src = '/assets/icon-fav-active.svg';
        }
        else{
            img1.src = '/assets/icon-fav.svg';
        }
        img1.addEventListener('mouseover', () =>{
            img1.src = '/assets/icon-fav-hover.svg';
        });
        img1.addEventListener('mouseout', () =>{
            img1.src = '/assets/icon-fav.svg';
        });
        img2.addEventListener('mouseover', () =>{
            img2.src = '/assets/icon-download-hover.svg';
        });
        img2.addEventListener('mouseout', () =>{
            img2.src = '/assets/icon-download.svg';
        });
        img3.addEventListener('mouseover', () =>{
            img3.src = '/assets/icon-max-hover.svg';
        });
        img3.addEventListener('mouseout', () =>{
            img3.src = '/assets/icon-max-normal.svg';
        });

        //titulos hover
        let titUser = document.createElement('h4');
        titUser.innerHTML = 'User';
        let titGif = document.createElement('h3');
        if (element.title == '') {
            titGif.innerHTML = 'No hay titulo';           
        }
        else{
            titGif.innerHTML = element.title;
        }
        
        contTit.appendChild(titUser);
        contTit.appendChild(titGif);

        contBtn.appendChild(img1);
        contBtn.appendChild(img2);
        contBtn.appendChild(img3);
        hover.appendChild(contBtn);
        hover.appendChild(contTit);
        hover.classList.add('displayNone');
        
        function favGifbusq() {
            if(listaFavoritos.includes(element.id)){
                let elim = listaFavoritos.indexOf(element.id);
                listaFavoritos.splice(elim, 1);
                img1.src = '/assets/icon-fav.svg';  
                localStorage.setItem('fav', listaFavoritos);
            }
            else{
                
                listaFavoritos.push(element.id);
                img1.src = '/assets/icon-fav-active.svg';  
                localStorage.setItem('fav', listaFavoritos);
            }  
            console.log(listaFavoritos);
        }

        img1.addEventListener('click', favGifbusq);

        contGifBus.appendChild(gifBusq);
        contGifBus.appendChild(hover);
        contGifs.appendChild(contGifBus);

        //anadir el hover

        contGifBus.addEventListener('mouseover', (event)=>{
            hover.classList.add('hoverImg');
            hover.classList.remove('displayNone');
        });
        contGifBus.addEventListener('mouseout', (event)=>{
            hover.classList.remove('hoverImg');
            hover.classList.add('displayNone');
        });

        gifBusq.addEventListener('click', () =>{
            openGif.style.display = 'flex';
            gifSelect.src = element.images.downsized_large.url;
            if (element.title == '') {
                titGifSelect.innerHTML = 'No hay titulo';           
            }
            else{
                titGifSelect.innerHTML = element.title;
            }

            //anadir fav
            if(listaFavoritos.includes(element.id)){
                likebtn.src = '/assets/icon-fav-active.svg';
            }
            else{
                likebtn.src = '/assets/icon-fav.svg';
            }

            function closeGifSelect(){
                openGif.style.display = 'none';
                this.removeEventListener('click', closeGifSelect);
                likebtn.removeEventListener('click', favGif);
            }
        function favGif() {
            if(listaFavoritos.includes(element.id)){
                let elim = listaFavoritos.indexOf(element.id);
                listaFavoritos.splice(elim, 1);
                likebtn.src = '/assets/icon-fav.svg';  
                localStorage.setItem('fav', listaFavoritos);
            }
            else{
                
                listaFavoritos.push(element.id);
                likebtn.src = '/assets/icon-fav-active.svg';  
                localStorage.setItem('fav', listaFavoritos);
            }  
            console.log(listaFavoritos);
        }
            likebtn.addEventListener('click', favGif);
            closeGifboton.addEventListener('click', closeGifSelect);
        });

    }
    cantImg = cantImg + 12;
    
}

async function buscGifs(busq) {
    const path = `https://api.giphy.com/v1/gifs/search?api_key=${apyKey}&q=${busq}`;
    try {
        const busqData = await fetch(path);
        const busqJson = await busqData.json();
        console.log(busqJson);
        if (busqJson.data.length === 0) {
            let imgError = document.createElement('img');
            let mensajeError = document.createElement('h3');
            mensajeError.innerHTML = 'Intenta con otra búsqueda.'
            mensajeError.classList.add('mensajeError');
            imgError.src = './assets/icon-busqueda-sin-resultado.svg';
            imgError.classList.add('imgError');
            contGifs.classList.add('busErronea');
            contGifs.appendChild(imgError);
            contGifs.appendChild(mensajeError);
            verMas.classList.add('displayNone');
            verMas.classList.remove('displayBlock');
        }
        else{
            contGifs.classList.add('busquedaOk');
            trenBus.classList.add('trenaux');
            appendGifs(busqJson.data);
        }


        function agregarMas(){
            if (cantImg<30) {
                appendGifs(busqJson.data);
            }
            else{
                appendGifs(busqJson.data);
                verMas.style.display = 'none';
            }
        }

        srchBar.addEventListener('keyup', (event)=>{
            if (event.key === 'Enter') {
                verMas.removeEventListener('click', agregarMas);
            }
        })
        verMas.addEventListener('click', agregarMas);
        
    } catch (error) {
        console.log(error);  
    }

}

srchBar.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        verMas.classList.add('displayBlock');
        verMas.classList.remove('displayNone');
        cantImg = 0;
        let contGifs = document.getElementById('contGifs');
        contGifs.innerHTML='';
        contGifs.classList='';
        contGifBus.classList.add('contBus');
        contGifBus.classList.remove('contGifBusNone');
        tituloBusq.classList.add('tituloBusq');
        tituloBusq.innerHTML = srchBar.value;
        busqueda = srchBar.value;
        
        buscGifs(busqueda);
    }
});

//  SUGERENCIAS

let contSug = document.getElementById('contSug');
let listaSug = document.getElementsByClassName('txtSug');



for (let index = 0; index < listaSug.length; index++) {
    const element = listaSug[index];
    element.addEventListener('click', ()=>{
        valor = element.innerHTML;
        srchBar.value = valor;
        verMas.classList.add('displayBlock');
        verMas.classList.remove('displayNone');
        cantImg = 0;
        let contGifs = document.getElementById('contGifs');
        contGifs.innerHTML='';
        contGifs.classList='';
        contGifBus.classList.add('contBus');
        contGifBus.classList.remove('contGifBusNone');
        tituloBusq.classList.add('tituloBusq');
        tituloBusq.innerHTML = srchBar.value;
        busqueda = srchBar.value;
        buscGifs(valor);
    }); 
}

async function sugerencias(pathS){
    const busqSug = await fetch(pathS);
    const sugJson = await busqSug.json();
    for (let index = 0; index < listaSug.length; index++) {
        const element = listaSug[index];
        element.innerHTML = sugJson.data[index].name;   
    }
}

 // Evento al escribir
srchBar.addEventListener('keyup', (event) =>{
    contSug.classList.remove('displayNone');
    contSug.classList.add('contSugerencias');

    if(srchBar.value!="" && event.key!="Enter"){
        let tag = srchBar.value;
        const pathSug = `https://api.giphy.com/v1/tags/related/${tag}?api_key=${apyKey}&limit=4`;
        sugerencias(pathSug);
    }
    if(srchBar.value==""){
        contSug.classList.add('displayNone');
        contSug.classList.remove('contSugerencias');
    }


      
});

closeBus.addEventListener('click', ()=>{
    trenBus.classList.remove('trenaux');
    contSug.classList.add('displayNone');
    contSug.classList.remove('contSugerencias');
});













