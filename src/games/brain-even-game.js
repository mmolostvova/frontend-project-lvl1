import game from '../gameEngine.js';
import getRandomNumber from '../utils.js';

export default () => {
  const isEven = (number) => number % 2 === 0;

  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  const getQuestion = () => getRandomNumber(45, 101);

  const getRightAnswer = (question) => (isEven(question) ? 'yes' : 'no');

  game(rules, getQuestion, getRightAnswer);
};
