import FiltersView from './view/filters-view.js';
import {render} from './render.js';
import TripEventsPresenter from './presenter/trip-events-presenter.js';

const tripPageHeaderElement = document.querySelector('.page-header');
const trip–°ontrolsElement = tripPageHeaderElement.querySelector('.trip-controls');
const filtersElement = trip–°ontrolsElement.querySelector('.trip-controls__filters');
const tripPageMainElement = document.querySelector('.page-main');
const tripEventsElement = tripPageMainElement.querySelector('.trip-events');

const pagePresenter = new TripEventsPresenter();
render(new FiltersView(), filtersElement);

pagePresenter.init(tripEventsElement);
