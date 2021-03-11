// import readline from 'readline-sync';
import { welcomeMessage, showRules, gameFlow } from '../index.js';

export default () => {
  welcomeMessage('Welcome to the Brain Games!', 'May I have your name? ');
  showRules('Answer "yes" if the number is even, otherwise answer "no".');
  gameFlow() // тут еще не дописала
};

// export default () => {
//   console.log('Welcome to the Brain Games!');

//   const userName = readline.question('May I have your name? ');
//   console.log(`Hello, ${userName}!`);

//   function getQnA() {
//     const randomNumber = Math.floor(Math.random() * 101);
//     const res = {
//       q: `Question: ${randomNumber}`,
//       a: randomNumber % 2 === 0,
//     };
//     return res;
//   }

//   let winsCounter = 0;
//   console.log('Answer "yes" if the number is even, otherwise answer "no".');

//   do {
//     const { q, a } = getQnA();
//     const userAnswer = readline.question(q, {
//       trueValue: 'yes',
//       falseValue: 'no',
//     });
//     console.log(`Your answer: ${userAnswer ? 'yes' : 'no'}`);
//     if (userAnswer === a) {
//       console.log('Correct!');
//       winsCounter += 1;
//     } else {
//       const stringAnswer = a ? "'yes'" : "'no'";
//       const stringUserAnswer = userAnswer ? "'yes'" : "'no'";
//       console.log(`${stringUserAnswer} is wrong answer ;(. Correct answer was ${stringAnswer}. Let's try again, ${userName}!`);
//     }
//   } while (winsCounter < 3);

//   console.log(`Congratulations, ${userName}!`);
// };
