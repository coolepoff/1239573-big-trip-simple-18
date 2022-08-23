import dayjs from 'dayjs';

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

// Получение случайного элемента массива
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const getDate = (date) => dayjs(date).format('D MMMM');
const getShortDate = (date) => dayjs(date).format('MMM D');
const getDateTime = (date) => dayjs(date).format('YYYY-MM-DThh:mm');
const getTime = (date) => dayjs(date).format('hh:mm');

export {getRandomInteger, getDate, getTime, getShortDate, getDateTime, getRandomArrayElement};
