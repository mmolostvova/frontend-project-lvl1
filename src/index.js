import readline from 'readline-sync';

export default () => {
  const welcomeMessage = (welcomeText, askingNameText) => {
    console.log(welcomeText);
    const userName = readline.question(askingNameText);
    console.log(`Hello, ${userName}!`);
    return userName;
  };

  const showRules = (rules) => {
    console.log(rules);
  };

  const gameFlow = (question, rightAnswer, userName) => {
    let winsCounter = 0;
    do {
      const userAnswer = readline.question(question);
      console.log(`Your answer: ${userAnswer}`);
      if (userAnswer === rightAnswer) {
        console.log('Correct!');
        winsCounter += 1;
      } else {
        console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}. Let's try again, ${userName}!`);
      }
    } while (winsCounter < 3);
    console.log(`Congratulations, ${userName}!`);
  };
};
