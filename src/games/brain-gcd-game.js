import readline from 'readline-sync';

import { getRandomNumber, getGCD } from '../cli.js';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readline.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 3; i += 1) {
    const number1 = getRandomNumber(10);
    const number2 = getRandomNumber(10);
    console.log(`Question: ${number1} ${number2}`);
    const userAnswer = readline.question('Your answer: ');
    const rightAnswer = getGCD(number1, number2).toString();

    if (userAnswer !== rightAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}. Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
