import game from '../gameEngine.js'
import getRandomNumber from '../utils.js';

const isEven = (number) => number % 2 === 0;

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestion = () => getRandomNumber(45, 101);

const getRightAnswer = (question) => (isEven(question) ? 'yes' : 'no');

export default game(rules, getQuestion, getRightAnswer);

// export default () => {
//   console.log('Welcome to the Brain Games!');
//   const userName = readline.question('May I have your name? ');
//   console.log(`Hello, ${userName}!`);
//   console.log('Answer "yes" if the number is even, otherwise answer "no".');

//   for (let i = 0; i < 3; i += 1) {
//     const randomNumber = getRandomNumber(45, 101);
//     console.log(`Question: ${randomNumber}`);
//     const userAnswer = readline.question('Your answer: ');
//     const rightAnswer = isEven(randomNumber) ? 'yes' : 'no';

//     if (userAnswer !== rightAnswer) {
//       console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}. Let's try again, ${userName}!`);
//       return;
//     }

//     console.log('Correct!');
//   }

//   console.log(`Congratulations, ${userName}!`);
// };
