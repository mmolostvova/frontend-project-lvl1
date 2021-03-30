import readline from 'readline-sync';

import { getRandomNumber, createProgression } from '../cli.js';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readline.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?');

  for (let i = 0; i < 3; i += 1) {
    const numbers = createProgression();
    const cutNumber = numbers.splice(getRandomNumber(10), 1, '..');
    console.log(`Question: ${numbers}`);
    const userAnswer = readline.question('Your answer: ');
    const rightAnswer = cutNumber.join();

    if (userAnswer !== rightAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}. Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
