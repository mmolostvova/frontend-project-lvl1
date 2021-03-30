const getRandomNumber = (maxNumber) => {
  const randomNumber = Math.floor(Math.random() * maxNumber);
  return randomNumber;
};

export const createProgression = () => {
  const firstEl = getRandomNumber(20);
  const progression = new Array(10);
  progression[0] = firstEl;
  const step = getRandomNumber(9);
  for (let i = 1; i < 10; i += 1) {
    progression[i] = progression[i - 1] + step;
  }
  return progression;
};

export const getExampleSolution = (firstNumber, secondNumber, operation) => {
  let solution;

  switch (operation) {
    case '+': solution = firstNumber + secondNumber;
      break;
    case '-': solution = firstNumber - secondNumber;
      break;
    case '*': solution = firstNumber * secondNumber;
      break;
    default:
  }

  return solution;
};

export const isPrime = (n) => {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) return false;
  }
  return n > 1;
};

export const getGCD = (n1, n2) => {
  let x = n1;
  let y = n2;
  while (y !== 0) {
    y = x % (x = y);
  }
  return x;
};

export default getRandomNumber;
