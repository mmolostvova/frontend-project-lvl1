import {
  welcomeMessage, showRules, gameRound, isAnswerRight,
} from '../index.js';
import getRandomNumber from '../cli'

export default () => {
  const userName = welcomeMessage();
  showRules('Answer "yes" if the number is even, otherwise answer "no".');
  const question1 = getRandomNumber(101);
  const rightAnswer = question1 % 2 === 0 ? 'yes' : 'no';
  const userAnswer = gameRound(question1);
  if (userAnswer === rightAnswer) {
    i = 0;
  }
  isAnswerRight(userAnswer, rightAnswer, userName);
};
console.log(`Congratulations, ${userName}!`);

// export default () => {
//   const userName = welcomeMessage();
//   showRules('Answer "yes" if the number is even, otherwise answer "no".');
//   for (let i = 0; i < 3; i += 1) {
//     const randomNumber = getRandomNumber(101);
//     const userAnswer = askQgetA(randomNumber);
//     const rightAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
//     if (userAnswer !== rightAnswer) {
//       i = 0;
//     }
//     isAnswerRight(userAnswer, rightAnswer, userName);
//   }
//   console.log(`Congratulations, ${userName}!`);
// };
