import play from '../index.js';
import getRandomNumber from '../utils.js';

const operations = ['+', '-', '*'];

const calculate = (firstNumber, secondNumber, operation) => {
  switch (operation) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error(`Unknown operation: '${operation}'.`);
  }
};

export default () => {
  const description = 'What is the result of the expression?';

  const generateRound = () => {
    const firstNumber = getRandomNumber(11, 35);
    const secondNumber = getRandomNumber(11, 35);
    const operation = operations[getRandomNumber(0, 2)];
    const answer = calculate(firstNumber, secondNumber, operation);

    return {
      question: `${firstNumber} ${operation} ${secondNumber}`,
      rightAnswer: answer.toString(),
    };
  };

  play(description, generateRound);
};
