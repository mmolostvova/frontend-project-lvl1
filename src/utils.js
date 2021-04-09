const getRandomNumber = (min, max) => {
  const randomNumber = min + (Math.random() * max + 1);
  return Math.floor(randomNumber);
};

export default getRandomNumber;
