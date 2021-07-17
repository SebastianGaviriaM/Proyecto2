const trendWords = `https://api.giphy.com/v1/trending/searches?api_key=1MIVgN8wYgbADMlEU8CBEuPZySis8Y3e&limit=5`;

let trenWords = document.getElementById('trenWords');

function busquedaPalabras(e) {
	palabra = e.target.innerHTML.slice(2, -1);
    if(e.target.innerHTML[0] === ','){
        palabra = e.target.innerHTML.slice(2, -1);
    }else{
        palabra = e.target.innerHTML;
    }
	funcionMostarBusqueda(palabra);
	mostrarBusqueda(palabra);
}


function ponerPalabras(lista) { 

    let primerSpan = document.createElement("span");
    primerSpan.innerHTML = `${lista[0]}`;
    primerSpan.addEventListener('click', busquedaPalabras);
    trenWords.appendChild(primerSpan);

    for (let index = 1; index < 5; index++) {
        const element = lista[index];
        const elementSpan = document.createElement("span");
        elementSpan.innerHTML = `, ${element}`;
        elementSpan.addEventListener('click', busquedaPalabras);
        trenWords.appendChild(elementSpan);
    }
    
}
async function traerTrenWords() {
    let wordsReq = await fetch(trendWords);
    let wordsJson = await wordsReq.json();
    let palabras = wordsJson.data;
    ponerPalabras(palabras);
}
traerTrenWords();