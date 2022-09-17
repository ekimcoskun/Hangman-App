class Hangman {
    constructor(word, remainingGuess) {
        this.word = word.toLowerCase().split('')
        this.remainingGuess = remainingGuess
        this.guessedLetters = []
        this.status = "playing"
    }
    get puzzle() {
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
    reCalculate() {
        if (this.remainingGuess === 0) {
            this.status = 'failed'
        } else if (this.puzzle.includes('*') && this.remainingGuess !== 0) {
            this.status = 'playing'
        } else {
            this.status = 'finished'
        }
    }
    makeGuess(guess) {
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
    get statusMessage() {
        if (this.status === 'playing') {
            return `Guesses Left: ${this.remainingGuess}`
        }
        if (this.status === 'failed') {
            return `Failed -> Nice try! The word was "${this.word.join('')}"`
        }
        if (this.status === 'finished') {
            return `Finished -> Great work! You guessed the word`
        }
    }
}

export { Hangman as default}