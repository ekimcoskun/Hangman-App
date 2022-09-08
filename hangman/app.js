const puzzleEl = document.querySelector('#word')
const guessesEl = document.querySelector('#guesses')
const statusMessage = document.querySelector('#status')
const game1 = new Hangman('Ekim Bilik', 2)

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage
//statusMessage.textContent = game1.message()
console.log(game1.status)

window.addEventListener('keypress', function (e) {
    if (game1.status === 'playing') {
        const guess = String.fromCharCode(e.charCode)
        game1.makeGuess(guess)
        puzzleEl.textContent = game1.puzzle
        guessesEl.textContent = game1.remainingGuess
        statusMessage.textContent = game1.statusMessage
        console.log(game1.status)
    }
})

//Making an HTTP request 
const request = new XMLHttpRequest()

request.addEventListener('readystatechange',(e) => {
    if(e.target.readyState === 4){
        const data = JSON.parse(e.target.responseText)
        console.log(data)
    }
})

request.open('GET', 'https://puzzle.mead.io/puzzle')
request.send()

