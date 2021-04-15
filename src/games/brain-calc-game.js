import game from '../gameEngine.js';
import getRandomNumber from '../utils.js';

export default () => {
  const rules = 'What is the result of the expression?';

  const getQuestion = () => {
    const operations = ['+', '-', '*'];
    const firstNumber = getRandomNumber(11, 35);
    const secondNumber = getRandomNumber(11, 35);
    const operation = operations[getRandomNumber(0, 2)];
    return `${firstNumber} ${operation} ${secondNumber}`;
  };

  const getRightAnswer = (question) => {
    const parts = question.split(' ');
    const firstNumber = parts[0];
    const secondNumber = parts[2];
    const operation = parts[1];
    let solution;
    switch (operation) {
      case '+':
        solution = firstNumber + secondNumber;
        break;
      case '-':
        solution = firstNumber - secondNumber;
        break;
      case '*':
        solution = firstNumber * secondNumber;
        break;
      default:
        throw new Error('Something went wrong with calculations!');
    }
    return solution.toString();
  };

  game(rules, getQuestion, getRightAnswer);
};
