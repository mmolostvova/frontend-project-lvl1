import {
  welcomeMessage, showRules, askQgetA, isAnswerRight, getRandomNumber,
} from '../index.js';

export default () => {
  const userName = welcomeMessage();
  showRules('Answer "yes" if the number is even, otherwise answer "no".');
  let winsCounter = 0;
  do {
    const randomNumber = getRandomNumber(101);
    const userAnswer = askQgetA(randomNumber);
    const rightAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    winsCounter = isAnswerRight(userAnswer, rightAnswer, userName, winsCounter);
  } while (winsCounter < 3);
  console.log(`Congratulations, ${userName}!`);
};
