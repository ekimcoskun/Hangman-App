const Hangman = function (word, remainingGuess) {
    this.word = word.toLowerCase().split('')
    this.remainingGuess = remainingGuess
    this.guessedLetters = []

    Hangman.prototype.getPuzzle = function () {
        let puzzle = ''

        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle = puzzle + letter
            } else {
                puzzle = puzzle + '*'
            }
        })

        return puzzle 
    }
}

Hangman.prototype.makeGuess = function(guess){
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)

    if(isUnique){
        this.guessedLetters.push(guess) 
    }
    if(isUnique && isBadGuess){
        this.remainingGuess--
    }
}

const game1 = new Hangman('Cat', 2)
console.log(game1.getPuzzle())
console.log(game1.remainingGuess)

window.addEventListener('keypress', function(e){
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    console.log(game1.getPuzzle())
    console.log(game1.remainingGuess)
})