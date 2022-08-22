const getRandomNumber = (min, max) => {
  if (min > max) {
    const iTemp = max;
    max = min;
    min = iTemp;
  }
  const result = Math.abs(min) + Math.random() * (Math.abs(max) + 1 - Math.abs(min));
  return Math.floor(result);
};

export {getRandomNumber};
