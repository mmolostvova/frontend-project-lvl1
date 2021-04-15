import game from '../gameEngine.js';
import getRandomNumber from '../utils.js';

export default () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const getQuestion = () => getRandomNumber(1, 99);

  const getRightAnswer = (question) => {
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

    return isPrime(question) ? 'yes' : 'no';
  };

  game(rules, getQuestion, getRightAnswer);
};
