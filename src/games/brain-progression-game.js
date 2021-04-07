import readline from 'readline-sync';

import getRandomNumber from '../calculations.js';

const createProgression = (progressionLength) => {
  const firstEl = getRandomNumber(20);
  const progression = new Array(progressionLength);
  progression[0] = firstEl;
  const step = getRandomNumber(9) + 1;
  for (let i = 1; i < progressionLength; i += 1) {
    progression[i] = progression[i - 1] + step;
  }
  return progression;
};

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readline.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?');

  for (let i = 0; i < 3; i += 1) {
    const numbers = createProgression(10);
    const indexOfEmptyElement = getRandomNumber(10);
    const cutNumber = numbers[indexOfEmptyElement];
    numbers.splice(indexOfEmptyElement, 1, '..');
    console.log(`Question: ${numbers.join(' ')}`);
    const userAnswer = readline.question('Your answer: ');
    const rightAnswer = cutNumber.toString();

    if (userAnswer !== rightAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}. Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
