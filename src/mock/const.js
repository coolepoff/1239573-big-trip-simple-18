import { getRandomInteger, getRandomArrayElement } from '../utils';
const WAYPOINT_COUNT = 5;
const COUNT_DESTINATIONS_DESCRIPTION = 5;
const OFFERS_TYPE = [
  'taxi',
  'bus',
  'train',
  'ship',
  'drive',
  'flight',
  'check-in',
  'sightseeing',
  'restaurant'
];

const OFFERS_OPTIONS = [
  'Order Uber',
  'Add luggage',
  'Switch to comfort',
  'Rent a car',
  'Add breakfast',
  'Book tickets',
  'Lunch in city',
];

const DESTINATIONS_NAME = [
  'Chamonix',
  'Geneva',
  'Amsterdam',
  'Prague',
  'Athens',
  'Valencia',
  'Lisbon',
  'London',
  'Hamburg',
  'Milan',
  'Milan',
];

const DESTINATIONS_DESCRIPTIONS = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.';

const DESCRIPTIONS = DESTINATIONS_DESCRIPTIONS.split('.');

const getDescrText = () => {
  const fullDescr = [];
  for (let i = 0; i <= getRandomInteger(1, COUNT_DESTINATIONS_DESCRIPTION); i++) {
    fullDescr.push(getRandomArrayElement(DESCRIPTIONS));
  }
  return fullDescr.join(' ');
};

export {WAYPOINT_COUNT, OFFERS_TYPE, DESTINATIONS_NAME, getDescrText, OFFERS_OPTIONS};
