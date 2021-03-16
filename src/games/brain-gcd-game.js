import {
  welcomeMessage, showRules, askQgetA, isAnswerRight, getRandomNumber,
} from '../index.js';

export default () => {
  const userName = welcomeMessage();
  showRules('Find the greatest common divisor of given numbers.');
  let winsCounter = 0;
  const getGCD = (n1, n2) => {
    let x = n1;
    let y = n2;
    while (y !== 0) y = x % (x = y);
    return x;
  };
  do {
    const n1 = getRandomNumber(10);
    const n2 = getRandomNumber(10);
    const question = `${n1} ${n2}`;
    const userAnswer = parseInt(askQgetA(question), 10);
    const rightAnswer = getGCD(n1, n2);
    winsCounter = isAnswerRight(userAnswer, rightAnswer, userName, winsCounter);
  } while (winsCounter < 3);
  console.log(`Congratulations, ${userName}!`);
};
