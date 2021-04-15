import game from '../gameEngine.js';
import getRandomNumber from '../utils.js';

export default () => {
  const rules = 'What number is missing in the progression?';

  const getQuestion = () => {
    const createProgression = (progressionLength) => {
      const firstEl = getRandomNumber(20, 40);
      const progression = new Array(progressionLength);
      progression[0] = firstEl;
      const step = getRandomNumber(5, 14);
      for (let i = 1; i < progressionLength; i += 1) {
        progression[i] = progression[i - 1] + step;
      }
      return progression;
    };
    const numbers = createProgression(10);
    const indexOfEmptyElement = getRandomNumber(-1, 9);
    numbers.splice(indexOfEmptyElement, 1, '..');

    return numbers.join(' ');
  };

  const getRightAnswer = (question) => {
    const numbers = question.split(' ');
    const i = numbers.indexOf('..');
    const lastIndex = numbers.length - 1;
    let cutNumber;
    if (i === 0 || i === lastIndex) {
      const step = (numbers[2] - numbers[1]) / 2;
      if (i === 0) {
        cutNumber = Number(numbers[1]) - Number(step);
      } else {
        cutNumber = Number(numbers[lastIndex]) + Number(step);
      }
    } else {
      const step = (numbers[i + 1] - numbers[i - 1]) / 2;
      cutNumber = Number(numbers[i - 1]) + Number(step);
    }

    return cutNumber.toString();
  };

  game(rules, getQuestion, getRightAnswer);
};
