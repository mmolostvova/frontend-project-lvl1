import {
  welcomeMessage, showRules, askQgetA, isAnswerRight, getRandomNumber,
} from '../index.js';

export default () => {
  const userName = welcomeMessage();
  showRules('Answer "yes" if given number is prime. Otherwise answer "no".');
  let winsCounter = 0;
  const isPrime = (n) => {
    for (let i = 2; i < n; i += 1) {
      if (n % i === 0) return false;
    }
    return n > 1;
  };
  do {
    const number = getRandomNumber(99);
    const userAnswer = askQgetA(number);
    const rightAnswer = isPrime(number) ? 'yes' : 'no';
    winsCounter = isAnswerRight(userAnswer, rightAnswer, userName, winsCounter);
  } while (winsCounter < 3);
  console.log(`Congratulations, ${userName}!`);
};
