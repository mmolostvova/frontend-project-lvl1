import play from '../index.js';
import getRandomNumber from '../utils.js';

const isEven = (number) => number % 2 === 0;

export default () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';

  const generateRound = () => {
    const num = getRandomNumber(45, 101);

    return {
      question: num,
      rightAnswer: isEven(num) ? 'yes' : 'no',
    };
  };

  play(description, generateRound);
};
