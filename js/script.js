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
btn.addEventListener('click', function(){
    let difficult = option.value
    if (difficult === 'easy'){
        generateGrid(49, 'easy')
        addFunctionToClick('div.grid-item', handleClick)

    } else if(difficult === 'medium'){
        generateGrid(81, 'medium')
        addFunctionToClick('div.grid-item', handleClick)
    } else if(difficult === 'hard'){
        generateGrid(100, 'hard')
        addFunctionToClick('div.grid-item', handleClick)
    }
})

// functions
/**
 * Description creazione di tanti item quanti richiesti
 * @returns item
*/
function createGridItems(innerText, lvl){
    const Item = document.createElement('div')
    Item.classList.add('grid-item', lvl)
    Item.innerText = innerText
    return Item
}

/**
 * Description genera una griglia di 100 blocchi
*/
function generateGrid(number, lvlmode){
    gridInput.innerHTML = ''
    for (let i = 1; i <= number; i++){
        const grid = createGridItems(i, lvlmode)
        gridInput.append(grid)
        
    }
}

function handleClick(){
    this.classList.add('bg-change')
    console.log(this.innerText);
}

function addFunctionToClick(element, functionToInsert){
    const arrayItems = document.querySelectorAll(element)
    for(i = 0; i < arrayItems.length; i++){
        const currentItem = arrayItems[i]
        currentItem.addEventListener('click', functionToInsert)
    }
}