import {getRandomInteger} from '../utils.js';
import { OFFERS_OPTIONS } from './const.js';

export const generateOffer = (id) => ({
  id,
  title: OFFERS_OPTIONS[getRandomInteger(0, OFFERS_OPTIONS.length - 1)],
  price: getRandomInteger(1, 20) * 10
});
