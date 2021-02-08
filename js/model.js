import { INITIAL_SCORE, RANDOM_NUM_LIMIT } from './config.js';
export const state = {
  player: {
    score: INITIAL_SCORE,
    Highscore: 0,
  },
};
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
export const generateRandomNumber = function () {
  state.player.answer = getRandomInt(RANDOM_NUM_LIMIT) + 1;
};
export const resetScore = function () {
  state.player.score = INITIAL_SCORE;
};

export const decreaseScore = function () {
  --state.player.score;
};
