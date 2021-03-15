import {
  welcomeMessage, showRules, askQgetA, isAnswerRight,
} from '../index.js';

export default () => {
  const userName = welcomeMessage();
  showRules('What is the result of the expression?');
  let winsCounter = 0;
  const operations = ['+', '-', '*'];
  const getRandomOperation = () => {
    const randomIndex = Math.floor(Math.random() * 3);
    return operations[randomIndex];
  };
  const getRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 101);
    return randomNumber;
  };
  do {
    const n1 = getRandomNumber();
    const n2 = getRandomNumber();
    const op = getRandomOperation();
    const question = `${n1} ${op} ${n2}`;
    const userAnswer = askQgetA(question);
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
    if (isAnswerRight(parseInt(userAnswer, 10), rightAnswer)) {
      console.log('Correct!');
      winsCounter += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}. Let's try again, ${userName}!`);
      winsCounter = 0;
    }
  } while (winsCounter < 3);
  console.log(`Congratulations, ${userName}!`);
};
