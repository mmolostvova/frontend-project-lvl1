import {
  welcomeMessage, showRules, askQgetA, isAnswerRight,
} from '../index.js';

export default () => {
  const userName = welcomeMessage();
  showRules('Find the greatest common divisor of given numbers.');
  let winsCounter = 0;
  const getGCD = (x, y) => {
    while (y !== 0) y = x % (x = y);
    return x;
  };
  const getRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 101);
    return randomNumber;
  };
  do {
    const n1 = getRandomNumber();
    const n2 = getRandomNumber();
    const question = `${n1} ${n2}`;
    const userAnswer = askQgetA(question);
    const rightAnswer = getGCD(n1, n2);
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
