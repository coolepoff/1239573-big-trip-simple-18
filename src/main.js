import FiltersView from './view/filters-view.js';
import {render} from './render.js';
import WaypointPresenter from './presenter/waypoint-presenter.js';

const filtersElement = document.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');

const pagePresenter = new WaypointPresenter();

render(new FiltersView(), filtersElement);
pagePresenter.init(tripEventsElement);
