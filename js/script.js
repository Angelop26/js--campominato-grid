// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// INPUT
const gridInput = document.querySelector('.grid')
const btn = document.querySelector('.play-button')
const gridBlock = document.getElementsByClassName('grid-item')

// LOGICA
// al click della cella cambia colore e in console vedere numero della cella
for(i = 0; i < gridBlock.length; i++){
    const currentBlock = gridBlock[i]
    console.log(currentBlock);
    currentBlock.addEventListener('click', handleClick)
}

// OUTPUT
//creare la griglia al click del bottone 'play'
btn.addEventListener('click', generateGrid100)

// functions

/**
 * Description creazione di tanti item quanti richiesti
 * @returns item
 */
function createGridItems(innerText){
    const Item = document.createElement('div')
    Item.classList.add('grid-item')
    Item.innerText = innerText
    return Item
}

/**
 * Description genera una griglia di 100 blocchi
 */
function generateGrid100(){
    for (i = 1; i <= 100; i++){
        const grid = createGridItems(i)
        gridInput.append(grid)
    }
}

function handleClick(){
    // const itemClicked = this.
    // itemClicked.classList.add('bg-change')
    console.log(this);
}




///////////////////////////////////////////////////////////////////////////
//per il bonus eliminare width e height da css .grid-item e creare una classe apposita per 100 blocchi, 81 e 49 con le width e height adatte
// creare altre due function generategrid e fare un if con la difficolta