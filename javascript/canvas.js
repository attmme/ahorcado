class HangmanCanvas {
  constructor(secretWord) {
    this.canvas = document.getElementById('hangman')
    this.ctx = this.canvas.getContext('2d');
    this.secretWord = secretWord;
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  createBoard() {
    this.clearBoard();
    this.drawLines();

    //this.drawHangman(this.errorsLeft);

  }

  clearBoard() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.beginPath();
  }

  drawLines() {
    let separacio = 100;
    for (let i = 0; i < this.secretWord.length; i++) {
      this.ctx.moveTo(95 + separacio * i, 750);
      this.ctx.lineTo(45 + separacio * i, 750);
    }
    this.ctx.stroke();
  }

  writeCorrectLetter(index) {
    console.log("Pintar: ", index)
    // ... your code goes here
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
  }

  drawHangman(errorsLeft) {
    let offX = 350;
    let offY = 150;

    switch (errorsLeft) {
      case 9: // Base
        this.ctx.moveTo(-250 + offX, 500 + offY);
        this.ctx.lineTo(-90 + offX, 500 + offY);

        this.ctx.moveTo(-250 + offX, 500 + offY);
        this.ctx.lineTo(-180 + offX, 430 + offY);

        this.ctx.moveTo(-90 + offX, 500 + offY);
        this.ctx.lineTo(-150 + offX, 430 + offY);

        this.ctx.moveTo(-180 + offX, 430 + offY);
        this.ctx.lineTo(-150 + offX, 430 + offY);

        break;

      case 8: // Columna
        this.ctx.moveTo(-150 + offX, 55 + offY);
        this.ctx.lineTo(-180 + offX, 35 + offY);

        this.ctx.moveTo(-150 + offX, 55 + offY);
        this.ctx.lineTo(-150 + offX, 430 + offY);

        this.ctx.moveTo(-180 + offX, 35 + offY);
        this.ctx.lineTo(-180 + offX, 430 + offY);

        break;

      case 7: // Estructura
        this.ctx.moveTo(-150 + offX, 55 + offY);
        this.ctx.lineTo(95 + offX, 55 + offY);

        this.ctx.moveTo(-180 + offX, 35 + offY);
        this.ctx.lineTo(95 + offX, 35 + offY);

        this.ctx.moveTo(95 + offX, 35 + offY);
        this.ctx.lineTo(95 + offX, 55 + offY);
        break;

      case 6: // Horca
        this.ctx.moveTo(95 + offX, 55 + offY);
        this.ctx.lineTo(95 + offX, 110 + offY);
        break;

      case 5: // Cap
        this.ctx.beginPath();
        this.ctx.arc(95 + offX, 150 + offY, 40, 0, 2 * Math.PI);
        break;

      case 4: // Cos
        this.ctx.moveTo(95 + offX, 190 + offY);
        this.ctx.lineTo(95 + offX, 300 + offY);
        break;

      case 3: // Braç esquerra
        this.ctx.moveTo(95 + offX, 220 + offY);
        this.ctx.lineTo(45 + offX, 240 + offY);
        break;

      case 2: // Braç dret
        this.ctx.moveTo(95 + offX, 220 + offY);
        this.ctx.lineTo(145 + offX, 240 + offY);
        break;

      case 1: // Cama esquerra
        this.ctx.moveTo(95 + offX, 300 + offY);
        this.ctx.lineTo(45 + offX, 340 + offY);
        break;

      case 0: // Cama dreta
        this.ctx.moveTo(95 + offX, 300 + offY);
        this.ctx.lineTo(145 + offX, 340 + offY);
        break;
    }

    this.ctx.stroke();
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
