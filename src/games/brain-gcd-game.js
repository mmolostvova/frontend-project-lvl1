import play from '../index.js';
import getRandomNumber from '../utils.js';

const getGCD = (a, b) => (b === 0 ? a : getGCD(b, a % b));

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';

  const generateRound = () => {
    const number1 = getRandomNumber(1, 15);
    const number2 = getRandomNumber(1, 15);

    return {
      question: `${number1} ${number2}`,
      rightAnswer: getGCD(number1, number2).toString(),
    };
  };

  play(rules, generateRound);
};
