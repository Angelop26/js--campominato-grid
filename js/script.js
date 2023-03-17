// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// INPUT
const gridInput = document.querySelector('.grid')
const btn = document.querySelector('.play-button')
const option = document.getElementById('difficult')
console.log(option.value);
// LOGICA
//creare la griglia al click del bottone 'play'
if(option.value === 'easy'){
    btn.addEventListener('click', generateGrid49)
} else if (option.value === 'medium'){
    btn.addEventListener('click', generateGrid81)
} else if (option.value === 'hard'){
    btn.addEventListener('click', generateGrid100)
}

// functions
/**
 * Description creazione di tanti item quanti richiesti
 * @returns item
*/
function createGridItems(innerText){
    const Item = document.createElement('div')
    Item.classList.add('grid-item')
    Item.addEventListener('click', handleClick)
    Item.innerText = innerText
    return Item
}

/**
 * Description genera una griglia di 100 blocchi
 */
function generateGrid100(){
    for (let i = 1; i <= 100; i++){
        const grid = createGridItems(i)
        gridInput.append(grid)
    }
}

/**
 * Description genera una griglia di 49 blocchi
 */
function generateGrid49(){
    for (let i = 1; i <= 49; i++){
        const grid = createGridItems(i)
        gridInput.append(grid)
    }
}

/**
 * Description genera una griglia di 81 blocchi
 */
function generateGrid81(){
    for (let i = 1; i <= 81; i++){
        const grid = createGridItems(i)
        gridInput.append(grid)
    }
}

function handleClick(){
    this.classList.add('bg-change')
    console.log(this.innerTextgrid);
}




///////////////////////////////////////////////////////////////////////////
//per il bonus eliminare width e height da css .grid-item e creare una classe apposita per 100 blocchi, 81 e 49 con le width e height adatte
// creare altre due function generategrid e fare un if con la difficolta