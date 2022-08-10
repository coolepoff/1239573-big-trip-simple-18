import FiltersView from './view/filters-view.js';
import SortView from './view/sort-view.js';
import {render} from './render.js';

const tripСontrolsElement = document.querySelector('.trip-controls');
const filtersElement = tripСontrolsElement.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');

render(new FiltersView(), filtersElement);
render(new SortView(), tripEventsElement);
