
const apyKey = 's6a2skHmzWS4f2KZSuYUbjzhsWoH7Zbl';

//Traer los gifs correspondientes a los trendings del momento
let openGif = document.getElementById('openGif');
let gifSelect = document.getElementById('imgGifSelected');
let titGifSelect = document.getElementById('TitGifSelect');
let closeGifboton = document.getElementById('closeGifSelect');
let likebtn = document.getElementById('likebtn');
let listaFavoritos = []; 
if(localStorage.getItem('fav')==""){
    listaFavoritos = [];
}
else{
    listaFavoritos = localStorage.getItem('fav').split(',');
}



const trendGifs = `https://api.giphy.com/v1/gifs/trending?api_key=${apyKey}&limit=10`;


let trenContent = document.getElementById('trenContent');

function crearImg(lista){
    for (let index = 0; index < lista.length; index++) {
        const element = lista[index];
        let gif = document.createElement('img');
        gif.src = element.images.downsized_medium.url;
        gif.classList.add('trendgif')
        trenContent.appendChild(gif);
        gif.addEventListener('click', () =>{
            openGif.style.display = 'flex';
            gifSelect.src = element.images.downsized_large.url;
            if (element.title == '') {
                titGifSelect.innerHTML = 'No hay titulo';           
            }
            else{
                titGifSelect.innerHTML = element.title;
            }

            //Anadir a favoritos
            
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
    
}

function crearImgDesk(lista) {
    let tit1 = document.getElementById('tit1');
    let tit2 = document.getElementById('tit2');
    let tit3 = document.getElementById('tit3');

    let gif1 = document.getElementById('gif1');
    let gif2 = document.getElementById('gif2');
    let gif3 = document.getElementById('gif3');
    let conts = document.getElementsByClassName('contGifTrend');

    let leftSlider = document.getElementById('leftSlider');
    let rightSlider = document.getElementById('rightSlider');
    listaAux = lista;

    let img1 = 0;
    let img2 = 1;
    let img3 = 2;

    gif1.src = listaAux[img1].images.downsized_large.url;
    gif2.src = listaAux[img2].images.downsized_large.url;
    gif3.src = listaAux[img3].images.downsized_large.url;
    tit1.innerHTML = listaAux[img1].title;
    tit2.innerHTML = listaAux[img2].title;
    tit3.innerHTML = listaAux[img3].title;

    for (let index = 0; index < conts.length; index++) {
        const element = conts[index];
        element.addEventListener('mouseover', ()=>{
            element.lastElementChild.classList.add('hoverTrend');
            element.lastElementChild.classList.remove('displayNone');
        });
        element.addEventListener('mouseout', ()=>{
            element.lastElementChild.classList.add('displayNone');
            element.lastElementChild.classList.remove('hoverTrend');
        });
        let imagenes = element.lastElementChild.firstElementChild.children;

        imagenes[0].src = '/assets/icon-fav.svg';
        imagenes[0].addEventListener('mouseover', ()=>{
            imagenes[0].src = '/assets/icon-fav-hover.svg';
        });
        imagenes[0].addEventListener('mouseout', ()=>{
            imagenes[0].src = '/assets/icon-fav.svg';
        });

        imagenes[0].addEventListener('click', ()=>{
            if(index==0){
                elegido = img1;
            }
            else if(index==1){
                elegido = img2;
            }
            else{
                elegido = img3;
            }
            
            if(listaFavoritos.includes(listaAux[elegido].id)){
                let elim = listaFavoritos.indexOf(listaAux[elegido].id);
                listaFavoritos.splice(elim, 1); 
                localStorage.setItem('fav', listaFavoritos);
            }
            else{
                listaFavoritos.push(listaAux[elegido].id);
                localStorage.setItem('fav', listaFavoritos); 
            }
        });

        imagenes[1].src = '/assets/icon-download.svg';
        imagenes[1].addEventListener('mouseover', ()=>{
            imagenes[1].src = '/assets/icon-download-hover.svg';
        });
        imagenes[1].addEventListener('mouseout', ()=>{
            imagenes[1].src = '/assets/icon-download.svg';
        });

        imagenes[2].src = '/assets/icon-max-normal.svg';
        imagenes[2].addEventListener('mouseover', ()=>{
            imagenes[2].src = '/assets/icon-max-hover.svg';
        });
        imagenes[2].addEventListener('mouseout', ()=>{
            imagenes[2].src = '/assets/icon-max-normal.svg';
        });

        imagenes[2].addEventListener('click', ()=>{
            console.log('aqui');
        });
        

    }
    function favGifTrend() {
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
        
    }
    if(Darkmode=='true'){
        rightSlider.src = '/assets/button-slider-right-md-noct.svg';
        leftSlider.src = '/assets/button-slider-left-md-noct.svg';
    }
    

    rightSlider.addEventListener('mouseover', ()=>{
        Darkmode = localStorage.getItem('Darkmode');
        if(Darkmode=='false'){
            rightSlider.src = '/assets/Button-Slider-right-hover.svg';
            console.log(Darkmode);
        }
        
    });
    rightSlider.addEventListener('mouseout', ()=>{
        Darkmode = localStorage.getItem('Darkmode');
        if(Darkmode=='false'){
            rightSlider.src = '/assets/Button-Slider-right.svg'
        }
        
    });
    leftSlider.addEventListener('mouseover', ()=>{
        if(Darkmode=='false'){
            leftSlider.src = '/assets/Button-Slider-left-hover.svg'
        }
        console.log(typeof(Darkmode));
    });
    leftSlider.addEventListener('mouseout', ()=>{
        if(Darkmode=='false'){
            leftSlider.src = '/assets/Button-Slider-left.svg'
        }
        console.log(typeof(Darkmode));
    });
    

    rightSlider.addEventListener('click', ()=>{
        if(img3+1<10){
            img1 ++;
            img2 ++;
            img3 ++;
            gif1.src = listaAux[img1].images.downsized_large.url;
            gif2.src = listaAux[img2].images.downsized_large.url;
            gif3.src = listaAux[img3].images.downsized_large.url;
            tit1.innerHTML = listaAux[img1].title;
            tit2.innerHTML = listaAux[img2].title;
            tit3.innerHTML = listaAux[img3].title;

        }
    });
    leftSlider.addEventListener('click', ()=>{
        if(img1-1>-1){
            img1 --;
            img2 --;
            img3 --;
            gif1.src = listaAux[img1].images.downsized_large.url;
            gif2.src = listaAux[img2].images.downsized_large.url;
            gif3.src = listaAux[img3].images.downsized_large.url;
            tit1.innerHTML = listaAux[img1].title;
            tit2.innerHTML = listaAux[img2].title;
            tit3.innerHTML = listaAux[img3].title;

        }
    });
}

async function trenGifs(){
    let gifsReq = await fetch(trendGifs);
    let gifsJson = await gifsReq.json();
    let lista = gifsJson.data;
    if(window.innerWidth<850){
        crearImg(lista);
    }
    else{
        crearImgDesk(lista);
    }
    
}
trenGifs();





