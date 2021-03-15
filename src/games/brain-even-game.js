// import readline from 'readline-sync';
import { welcomeMessage, showRules, askQgetA, isAnswerRight } from '../index.js';

export default () => {
  const userName = welcomeMessage();
  showRules('Answer "yes" if the number is even, otherwise answer "no".');
  let winsCounter = 0;
  do {
    const randomNumber = Math.floor(Math.random() * 101);
    const userAnswer = askQgetA(randomNumber);
    const rightAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    if (isAnswerRight(userAnswer, rightAnswer)) {
      console.log('Correct!');
      winsCounter += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}. Let's try again, ${userName}!`);
      winsCounter = 0;
    }
  } while (winsCounter < 3);
  console.log(`Congratulations, ${userName}!`);
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
//       winsCounter = 0;
//     }
//   } while (winsCounter < 3);

//   console.log(`Congratulations, ${userName}!`);
// };
