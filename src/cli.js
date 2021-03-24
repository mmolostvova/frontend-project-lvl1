// import readlineSync from 'readline-sync';

// export default () => {
//   const userName = readlineSync.question('May I have your name? ');
//   console.log(`Hello, ${userName}!`);
// };

export default (maxNumber) => {
  const randomNumber = Math.floor(Math.random() * maxNumber);
  return randomNumber;
};
