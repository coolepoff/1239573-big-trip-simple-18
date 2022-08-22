import {WAYPOINT_COUNT} from '../mock/const.js';
import { generateDestination } from '../mock/destination.js';
import { generateOffer } from '../mock/offer.js';
import { generatePoint } from '../mock/point.js';

// формируем значения
export default class PointModel {
  points = Array.from({length: WAYPOINT_COUNT}, generatePoint);
  offers = Array.from({length: WAYPOINT_COUNT}, (_value, key) => generateOffer(key + 1));
  destination = Array.from({length: WAYPOINT_COUNT}, (_value, key) => generateDestination(key + 1));

  getPoints = () => this.points;

  getOffers = (point) => point.offers.map((offerId) =>
    this.offers.find((offer) => offer.id === offerId)
  );

  getDestination = (point) => {
    return this.destination.find((destination) => point.destination === destination.id)
  }
}
