const Hangman = function (word, remainingGuess) {
    this.word = word.toLowerCase().split('')
    this.remainingGuess = remainingGuess
    this.guessedLetters = []
    this.status = "playing"
}
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

Hangman.prototype.reCalculate = function () {

    if (this.remainingGuess === 0) {
        this.status = 'failed'
    } else if (this.getPuzzle().includes('*') && this.remainingGuess !== 0) {
        this.status = 'playing'
    } else {
        this.status = 'finished'
    }
}

Hangman.prototype.makeGuess = function (guess) {
    
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)

    if (isUnique) {
        this.guessedLetters.push(guess)
    }
    if (isUnique && isBadGuess) {
        this.remainingGuess--
    }
    this.reCalculate()
}

Hangman.prototype.message = function () {
    let mess = `Playing -> Guesses Left: ${this.remainingGuess}`

    if(this.status === 'playing'){
        mess = `Playing -> Guesses Left: ${this.remainingGuess}`
    }
    if(this.status === 'failed'){
        mess = `Failed -> Nice try! The word was "${this.word.join('')}"`
    }
    if(this.status === 'finished'){
        mess = `Finished -> Great work! You guessed the word`
    }
    return mess
}