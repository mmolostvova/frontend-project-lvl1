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

export function isAnswerRight(userAnswer, rightAnswer) {
  return userAnswer === rightAnswer;
}
