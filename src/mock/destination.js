import { DESTINATIONS_NAME } from './const';
import { getRandomInteger } from '../utils';
export const generateDestination = (id) => ({
  id,
  description: 'Chamonix, is a beautiful city, a true asian pearl, with crowded streets.',
  name: DESTINATIONS_NAME[getRandomInteger(0, DESTINATIONS_NAME.length - 1)],
  pictures: [
    {
      src: 'http://picsum.photos/300/200?r=0.0762563005163317',
      description: 'Chamonix parliament building'
    }
  ]
});
