import {
  welcomeMessage, showRules, askQgetA, isAnswerRight, getRandomNumber,
} from '../index.js';

export default () => {
  const userName = welcomeMessage();
  showRules('What number is missing in the progression?');
  let winsCounter = 0;
  do {
    const firstEl = getRandomNumber(20);
    const progression = new Array(10);
    progression[0] = firstEl;
    const step = getRandomNumber(19);
    const randomIndex = getRandomNumber(10);
    for (let i = 1; i < 10; i += 1) {
      progression[i] = progression[i - 1] + step;
    }
    const cut = progression.splice(randomIndex, 1, '..');
    const rightAnswer = cut[0];
    const userAnswer = parseInt(askQgetA(progression), 10);
    winsCounter = isAnswerRight(userAnswer, rightAnswer, userName, winsCounter);
  } while (winsCounter < 3);
  console.log(`Congratulations, ${userName}!`);
};
