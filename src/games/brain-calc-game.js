import {
  welcomeMessage, showRules, askQgetA, isAnswerRight, getRandomNumber,
} from '../index.js';

export default () => {
  const userName = welcomeMessage();
  showRules('What is the result of the expression?');
  let winsCounter = 0;
  const operations = ['+', '-', '*'];
  do {
    const n1 = getRandomNumber(101);
    const n2 = getRandomNumber(101);
    const op = operations[getRandomNumber(3)];
    const question = `${n1} ${op} ${n2}`;
    const userAnswer = parseInt(askQgetA(question), 10);
    let rightAnswer;
    switch (op) {
      case '+': rightAnswer = n1 + n2;
        break;
      case '-': rightAnswer = n1 - n2;
        break;
      case '*': rightAnswer = n1 * n2;
        break;
      default:
    }
    winsCounter = isAnswerRight(userAnswer, rightAnswer, userName, winsCounter);
  } while (winsCounter < 3);
  console.log(`Congratulations, ${userName}!`);
};
