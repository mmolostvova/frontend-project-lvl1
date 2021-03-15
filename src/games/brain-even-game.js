import {
  welcomeMessage, showRules, askQgetA, isAnswerRight,
} from '../index.js';

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
