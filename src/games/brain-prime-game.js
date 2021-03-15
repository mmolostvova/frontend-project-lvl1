import {
  welcomeMessage, showRules, askQgetA, isAnswerRight,
} from '../index.js';

export default () => {
  const userName = welcomeMessage();
  showRules('Answer "yes" if given number is prime. Otherwise answer "no".');
  let winsCounter = 0;
  const getRandomNumber = (n) => {
    const randomNumber = Math.floor(Math.random() * n);
    return randomNumber;
  };
  const isPrime = (n) => {
    for (let i = 2; i < n; i += 1) {
      if (n % i === 0) return false;
    }
    return n > 1;
  };
  do {
    const number = getRandomNumber(571);
    const userAnswer = askQgetA(number);
    const rightAnswer = isPrime(number) ? 'yes' : 'no';
    if (isAnswerRight(userAnswer, rightAnswer)) {
      console.log('Correct!');
      winsCounter += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}. Let's try again, ${userName}!`);
      winsCounter = 0;
    }
  } while (winsCounter < 3);
  console.log(`Congratulations, ${userName}!`);
};
