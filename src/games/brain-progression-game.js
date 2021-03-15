import {
  welcomeMessage, showRules, askQgetA, isAnswerRight,
} from '../index.js';

export default () => {
  const userName = welcomeMessage();
  showRules('What number is missing in the progression?');
  let winsCounter = 0;
  const getRandomNumber = (n) => {
    const randomNumber = Math.floor(Math.random() * n);
    return randomNumber;
  };
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
    const userAnswer = askQgetA(progression);
    if (isAnswerRight(parseInt(userAnswer, 10), rightAnswer)) {
      console.log('Correct!');
      winsCounter += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}. Let's try again, ${userName}!`);
      winsCounter = 0;
    }
  } while (winsCounter < 3);
  console.log(`Congratulations, ${userName}!`);
};
