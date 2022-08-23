import {createElement} from '../render.js';
import { getDateTime, getTime, getShortDate} from '../utils.js';

const createWaypointItemTemplate = (point, offers, destination) => {

  const { type, dateFrom, dateTo } = point;

  const generateOffersTemplate = (offersList) => `
    ${offersList.map((offer) => `
      <li class="event__offer">
        <span class="event--offer-title">${offer.title}</span>
        &plus;&euro;
        <span class="event--offer-price">${offer.price}</span>
      </li>
    `).join('')}
  `;

  return `<li class="trip-events__item">
  <div class="event">
    <time class="event__date" datetime="${dateFrom}">${getShortDate(dateFrom)}</time>
    <div class="event__type">

    <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon"></img>
    </div>
    <h3 class="event__title">${type} ${destination.name}</h3>
    <div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time" datetime="${getDateTime(dateFrom)}">${getTime(dateFrom)}</time>
        &mdash;
        <time class="event__end-time" datetime="${getDateTime(dateTo)}">${getTime((dateTo))}</time>
      </p>
    </div>
    <p class="event__price">
      &euro;&nbsp;<span class="event__price-value">${point.basePrice}</span>
    </p>
    <h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">
      <li class="event__offer">
        ${generateOffersTemplate(offers)}
      </li>
    </ul>
    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </div>
</li>`;
};

export default class WaypointItemView {
  constructor(point, offers, destination) {
    this.point = point;
    this.offers = offers;
    this.destination = destination;
  }

  getTemplate() {
    return createWaypointItemTemplate(this.point, this.offers, this.destination);
  }

  getElement() {
    if(!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  // removeElement() {
  //   this.element = null;
  // }
}
