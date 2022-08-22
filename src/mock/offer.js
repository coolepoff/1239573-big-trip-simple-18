import {getRandomNumber} from '../util.js';

export const generateOffer = (id) => {
  return {
    id: id,
    title: 'Upgrade to a business class',
    price: getRandomNumber(10, 150)
  }
};
