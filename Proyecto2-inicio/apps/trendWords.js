

//TRAER LAS PALABRAS TRENDING

const trendWords = `https://api.giphy.com/v1/trending/searches?api_key=${apyKey}&limit=5`;

let trenWords = document.getElementById('trenWords');


function ponerPalabras(lista) {
    trenWords.innerHTML = `${lista[0]}`;
    for (let index = 1; index < 5; index++) {
        const element = lista[index];
        trenWords.innerHTML += `, ${element}`;
        
    }
     
}
async function traerTrenWords() {
    let wordsReq = await fetch(trendWords);
    let wordsJson = await wordsReq.json();
    let palabras = wordsJson.data;
    ponerPalabras(palabras);
}
traerTrenWords();
