if(localStorage.getItem('fav')==""){
    listaFavoritos = [];
}
else{
    listaFavoritos = localStorage.getItem('fav').split(',');
}

let contFavoritos = document.getElementById('contFavoritos');

let ids = localStorage.getItem('fav');


async function traerFavs() {
    const pathFavs = `https://api.giphy.com/v1/gifs?api_key=${apyKey}&ids=${ids}`;

    const busqFavs = await fetch(pathFavs);
    const favsJson = await busqFavs.json();
    console.log(favsJson.data);

    for (let index = favsJson.data.length-1; index >= 0; index--) {
        const element = favsJson.data[index];
        let gif = document.createElement('img');
        gif.src = element.images.downsized_medium.url;
        contFavoritos.appendChild(gif);
        gif.addEventListener('click', () =>{
            openGif.style.display = 'flex';
            gifSelect.src = element.images.downsized_large.url;
            if (element.title == '') {
                titGifSelect.innerHTML = 'No hay titulo';           
            }
            else{
                titGifSelect.innerHTML = element.title;
            }
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

traerFavs();
