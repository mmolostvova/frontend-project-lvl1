import readline from 'readline-sync';

import getRandomNumber from '../utils.js';

const operations = ['+', '-', '*'];

const makeCalculations = (firstNumber, secondNumber, operation) => {
  let solution;
  switch (operation) {
    case '+': solution = firstNumber + secondNumber;
      break;
    case '-': solution = firstNumber - secondNumber;
      break;
    case '*': solution = firstNumber * secondNumber;
      break;
    default:
      throw new Error('Something went wrong with calculations!');
  }
  return solution;
};

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readline.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomNumber(11, 35);
    const secondNumber = getRandomNumber(11, 35);
    const operation = operations[getRandomNumber(0, 2)];
    const example = `${firstNumber} ${operation} ${secondNumber}`;

    console.log(`Question: ${example}`);
    const userAnswer = readline.question('Your answer: ');
    const rightAnswer = makeCalculations(firstNumber, secondNumber, operation).toString();

    if (userAnswer !== rightAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}. Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
