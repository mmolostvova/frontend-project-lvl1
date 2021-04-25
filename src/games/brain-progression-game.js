import play from '../index.js';
import getRandomNumber from '../utils.js';

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

export default () => {
  const description = 'What number is missing in the progression?';

  const generateRound = () => {
    const numbers = createProgression(10);
    const indexOfEmptyElement = getRandomNumber(0, 9);
    const cutNumber = numbers.splice(indexOfEmptyElement, 1, '..');

    return {
      question: numbers.join(' '),
      rightAnswer: cutNumber.toString(),
    };
  };

  play(description, generateRound);
};
