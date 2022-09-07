const puzzleEl = document.querySelector('#word')
const guessesEl = document.querySelector('#guesses')
const statusMessage = document.querySelector('#status')
const game1 = new Hangman('Cat', 2)

puzzleEl.textContent = game1.getPuzzle()
guessesEl.textContent = game1.remainingGuess
//statusMessage.textContent = game1.message()
console.log(game1.status)

window.addEventListener('keypress', function (e) {
    if(game1.status === 'playing'){
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.getPuzzle()
    guessesEl.textContent = game1.remainingGuess
    statusMessage.textContent = game1.message()
    console.log(game1.status)
    }
})