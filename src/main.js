import FiltersView from './view/filters-view.js';
import {render} from './render.js';
import WaypointPresenter from './presenter/waypoint-presenter.js';

const filtersElement = document.querySelector('.trip-controls__filters');
const eventsElement = document.querySelector('.trip-events');

const waypointPresenter = new WaypointPresenter();

render(new FiltersView(), filtersElement);
waypointPresenter.init(eventsElement);
