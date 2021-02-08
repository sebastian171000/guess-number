import * as model from './model.js';
import guessNumberView from './view/guessNumberView.js';
const controllerButtonCheck = function (num) {
  if (!num) {
    guessNumberView.showMessage('⛔️ No number!');
    return;
  }
  if (num < model.state.player.answer) {
    guessNumberView.showMessage('Too low!');
    model.decreaseScore();
  }
  if (num > model.state.player.answer) {
    guessNumberView.showMessage('Too high!');
    model.decreaseScore();
  }
  if (num === model.state.player.answer) {
    guessNumberView.showMessage('🎉 Correct Number!');
    guessNumberView.changeBackground(true);
    guessNumberView.changeNumberSpan(num);
    model.state.player.Highscore = model.state.player.score;
    guessNumberView.changeHighScoreSpan(model.state.player.Highscore);
    guessNumberView.buttonCheckShouldWork(false);
    return;
  }
  guessNumberView.showScore(model.state.player.score);
  if (model.state.player.score === 0) {
    guessNumberView.showMessage('💥 You lost the game!');
    guessNumberView.buttonCheckShouldWork(false);
    return;
  }
};
const controllerButtonAgain = function () {
  guessNumberView.changeBackground();
  guessNumberView.buttonCheckShouldWork(true);
  guessNumberView.changeNumberSpan('?');
  model.generateRandomNumber();
  model.resetScore();
  guessNumberView.showScore(model.state.player.score);
  guessNumberView.showMessage();
  guessNumberView.clearInput();
  console.log(model.state.player.answer);
};
const init = function () {
  guessNumberView.showScore(model.state.player.score);
  model.generateRandomNumber();
  guessNumberView.showMessage();
  guessNumberView.handlerButtonCheck(controllerButtonCheck);
  guessNumberView.handlerButtonAgain(controllerButtonAgain);
};
init();
console.log(model.state.player.answer);
//
