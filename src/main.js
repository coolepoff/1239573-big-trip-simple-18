import FiltersView from './view/filters-view.js';
import {render} from './render.js';
import TripEventsPresenter from './presenter/trip-events-presenter.js';

// const tripPageHeaderElement = document.querySelector('.page-header');
const tripСontrolsElement = document.querySelector('.trip-controls');
const filtersElement = tripСontrolsElement.querySelector('.trip-controls__filters');
// const tripPageMainElement = document.querySelector('.page-main');
const tripEventsElement = document.querySelector('.trip-events');

const pagePresenter = new TripEventsPresenter();
render(new FiltersView(), filtersElement);

pagePresenter.init(tripEventsElement);
