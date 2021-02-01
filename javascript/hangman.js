class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord; // Element array  = this.pickWord()
    this.errorsLeft = 10;
    this.guessedLetters = "";
    this.letters = [];
  }

  pickWord() {
    let random = Math.floor(Math.random() * (this.words.length));
    return this.words[random];
  }

  checkIfLetter(keyCode) {
    if (keyCode >= 'a' && keyCode <= 'z')
      return true
    return false;
  }

  checkClickedLetters(letter) {
    if (this.letters.includes(letter))
      return false;
    return true;
  }

  addCorrectLetter(letter) {
    //this.guessedLetters.splice(letter.i, 0, letter.char);
    this.letters += letter;
    //hangmanCanvas.writeCorrectLetter(letter)

    //checkWinner();
  }

  addWrongLetter(letter) {
    // Restar errors si no la lletra no está repetida REVISAR
    if (!this.checkClickedLetters(letter)) {
      this.errorsLeft--;
      this.letters += letter;
    }
    //checkGameOver();
  }

  checkGameOver() {
    if (this.errorsLeft == 0)
      return true;
    return false;
  }

  checkWinner() {
    if (this.secretWord.length == this.guessedLetters.length)
      return true;
    return false;
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // Iniciem el joc
    hangmanCanvas.createBoard();

    //hangman.addCorrectLetter("A");


  });
}

document.addEventListener('keydown', event => {
  if (hangman) {
    if (hangman.checkIfLetter(event.key)) {
      if (hangman.checkClickedLetters(event.key)) {



        hangman.addCorrectLetter(event.key);


      }/*  else {
        console.log("la lletra ja existeix")
      } */

    }/*  else {
      console.log("No es una lletra")
    } */

  } else {
    console.log("Inicia el joc primer")
  }

});
