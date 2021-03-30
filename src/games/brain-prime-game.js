import readline from 'readline-sync';

import { getRandomNumber, isPrime } from '../cli.js';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readline.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber(99);
    console.log(`Question: ${number}`);
    const userAnswer = readline.question('Your answer: ');
    const rightAnswer = isPrime(number) ? 'yes' : 'no';

    if (userAnswer !== rightAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}. Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
