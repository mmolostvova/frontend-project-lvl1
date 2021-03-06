import readline from 'readline-sync';

export const welcomeMessage = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readline.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const showRules = (rules) => {
  console.log(rules);
};

export const askQgetA = (question) => {
  const userAnswer = readline.question(`Question: ${question}`);
  console.log(`Your answer: ${userAnswer}`);
  return userAnswer;
};

export function isAnswerRight(userAnswer, rightAnswer, userName, n = 0) {
  let winsCounter = n;
  if (userAnswer === rightAnswer) {
    console.log('Correct!');
    winsCounter += 1;
  } else {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}. Let's try again, ${userName}!`);
    winsCounter = 0;
  }
  return winsCounter;
}

export const getRandomNumber = (n) => {
  const randomNumber = Math.floor(Math.random() * n);
  return randomNumber;
};
