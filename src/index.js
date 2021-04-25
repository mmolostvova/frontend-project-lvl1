import readline from 'readline-sync';

export default (description, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readline.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  const maxRoundCount = 3;

  for (let i = 0; i < maxRoundCount; i += 1) {
    const { question, rightAnswer } = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readline.question('Your answer: ');

    if (userAnswer !== rightAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}. Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
