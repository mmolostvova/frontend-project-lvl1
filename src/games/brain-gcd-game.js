import game from '../gameEngine.js';
import getRandomNumber from '../utils.js';

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';

  const getQuestion = () => {
    const number1 = getRandomNumber(1, 15);
    const number2 = getRandomNumber(1, 15);
    return `${number1} ${number2}`;
  };

  const getRightAnswer = (question) => {
    const numbers = question.split(' ');
    const getGCD = (a, b) => (b === 0 ? a : getGCD(b, a % b));
    return getGCD(numbers[0], numbers[1]).toString();
  };

  game(rules, getQuestion, getRightAnswer);
};
