import readline from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');

  const userName = readline.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const getRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 101);
    return randomNumber;
  };

  const operations = ['+', '-', '*'];
  const getRandomOperation = () => {
    const randomIndex = Math.floor(Math.random() * 3);
    return operations[randomIndex];
  };

  let winsCounter = 0;
  console.log('What is the result of the expression?');

  do {
    const n1 = getRandomNumber();
    const n2 = getRandomNumber();
    const op = getRandomOperation();
    const q = `Question: ${n1} ${op} ${n2}`;
    const rightAnswer = n1 op n2; // здесь не понимаю как произвести операцию
    const userAnswer = readline.question(q);
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
