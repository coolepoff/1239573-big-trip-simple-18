import {getRandomInteger, } from '../utils.js';
import {OFFERS_TYPE} from '../mock/const.js';

export const generatePoint = () => ({
  'basePrice': getRandomInteger(10, 50) * 10,
  'dateFrom': new Date().toISOString(),
  'dateTo': new Date().toISOString(),
  'destination': getRandomInteger(1, 3),
  'id': getRandomInteger(1, 3),
  // 'offers': new Set([getRandomInteger(1, 3), getRandomInteger(1, 3), getRandomInteger(1, 3)]),
  'offers': [1,2,3],
  'type': OFFERS_TYPE[getRandomInteger(0, OFFERS_TYPE.length - 1)]
});
