import play from '../index.js';
import getRandomNumber from '../utils.js';

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

export default () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const generateRound = () => {
    const num = getRandomNumber(1, 99);

    return {
      question: num,
      rightAnswer: isPrime(num) ? 'yes' : 'no',
    };
  };

  play(description, generateRound);
};
