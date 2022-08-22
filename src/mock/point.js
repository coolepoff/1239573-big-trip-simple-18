import {getRandomNumber} from '../util.js';
import {OFFERS_TYPE} from '../mock/const.js';

export const generatePoint = () => ({
  'basePrice': getRandomNumber(1000, 5000),
  'dateFrom': new Date().toISOString(),
  'dateTo': new Date().toISOString(),
  'destination': getRandomNumber(1, 3),
  'id': getRandomNumber(1, 3),
  'offers': new Set [getRandomNumber(1, 3), getRandomNumber(1, 3), getRandomNumber(1, 3)],
  'type': OFFERS_TYPE[getRandomNumber(0, OFFERS_TYPE.length - 1)]
});
