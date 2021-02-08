class guessNumberView {
  _checkButton = document.querySelector('.btn.check');
  _againButton = document.querySelector('.btn.again');
  _numberGuessInput = document.querySelector('.guess');
  _score = document.querySelector('.score');
  _message = 'Start guessing...';
  _numberSpan = document.querySelector('.number');
  _highscoreSpan = document.querySelector('.highscore');

  clearInput() {
    this._numberGuessInput.value = '';
  }
  buttonCheckShouldWork(answer = true) {
    if (!answer) {
      this._checkButton.disabled = true;
    } else {
      this._checkButton.disabled = false;
    }
  }
  changeNumberSpan(num) {
    this._numberSpan.innerHTML = num;
  }
  changeHighScoreSpan(num) {
    if (num > this._highscoreSpan.textContent)
      this._highscoreSpan.innerHTML = num;
  }
  changeBackground(change = false) {
    if (change) {
      document.querySelector('body').style.backgroundColor = '#60b347';
    } else {
      document.querySelector('body').style.backgroundColor = '#222';
    }
  }
  showScore(score) {
    this._score.innerHTML = score;
  }
  showMessage(mg = this._message) {
    const el = document.querySelector('.message');
    el.innerHTML = mg;
  }
  handlerButtonCheck(handler) {
    this._checkButton.addEventListener('click', () => {
      const num = +this._numberGuessInput.value;
      handler(num);
    });
  }
  handlerButtonAgain(handler) {
    this._againButton.addEventListener('click', handler);
  }
}
export default new guessNumberView();
