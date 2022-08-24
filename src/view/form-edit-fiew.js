import { createElement } from '../render.js';
import { OFFERS_TYPE } from '../mock/const.js';
import { getDescrText } from '../mock/const.js';
import { getDateTimeSlash } from '../utils.js';
import { DESTINATIONS_NAME } from '../mock/const.js';

const createFormEditTemplate = (point, offers, destination) => {

  const {basePrice, dateFrom, dateTo, type} = point;

  const createTypeListTemplate = () => (OFFERS_TYPE.map((offerType) => {
    const checked = type === offerType ? 'checked' : '';
    return `<div class="event__type-item">
      <input id="event-type-${offerType}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${offerType}" ${checked}>
      <label class="event__type-label  event__type-label--${offerType}" for="event-type-${offerType}-1">${offerType.charAt(0).toUpperCase() + offerType.slice(1)}</label>
    </div>`;
  }
  ).join(''));

  const createOffersTemplate = (offersList) => `
    ${offersList.map((offer) => `
    <div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked>
      <label class="event__offer-label" for="event-offer-luggage-1">
        <span class="event__offer-title">${offer.title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${offer.price}</span>
      </label>
    </div>
    `)}
  `;

  const createDestinationTemplate = () => (DESTINATIONS_NAME.map((dest) => (
    `<option value="${dest}"></option>`
  )).join(''));

  return (`<li class="trip-events__item">
  <form class="event event--edit" action="#" method="post">
    <header class="event__header">
      <div class="event__type-wrapper">
        <label class="event__type  event__type-btn" for="event-type-toggle-1">
          <span class="visually-hidden">Choose event type</span>
          <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
        </label>
        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

        <div class="event__type-list">
          <fieldset class="event__type-group">
            <legend class="visually-hidden">Event type</legend>
            ${createTypeListTemplate()}
          </fieldset>
        </div>
      </div>

      <div class="event__field-group  event__field-group--destination">
        <label class="event__label  event__type-output" for="event-destination-1">
        ${type}
        </label>
        <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destination.name}" list="destination-list-1">
        <datalist id="destination-list-1">
        ${createDestinationTemplate(DESTINATIONS_NAME)}
        </datalist>
      </div>

      <div class="event__field-group  event__field-group--time">
        <label class="visually-hidden" for="event-start-time-1">From</label>
        <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${getDateTimeSlash(dateFrom)}">
        &mdash;
        <label class="visually-hidden" for="event-end-time-1">To</label>
        <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${getDateTimeSlash(dateTo)}">
      </div>

      <div class="event__field-group  event__field-group--price">
        <label class="event__label" for="event-price-1">
          <span class="visually-hidden">Price</span>
          &euro;
        </label>
        <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
      </div>

      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
      <button class="event__reset-btn" type="reset">Delete</button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </header>
    <section class="event__details">
      <section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>

        <div class="event__available-offers">
          ${createOffersTemplate(offers)}
        </div>
      </section>

      <section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
        <p class="event__destination-description">${destination.name}. ${getDescrText()}</p>
      </section>
    </section>
  </form>
</li>`);
};

export default class FormEditView {
  constructor(point, offers, destination) {
    this.point = point;
    this.offers = offers;
    this.destination = destination;
  }

  getTemplate() {
    return createFormEditTemplate(this.point, this.offers, this.destination);
  }

  getElement() {
    if(!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
