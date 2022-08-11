import FiltersView from './view/filters-view.js';
import SortView from './view/sort-view.js';
// import FormCreateView from './view/form-create-view.js';
import FormEditView from './view/form-edit-fiew.js';
import WaypointListView from './view/waypoint-list.js';
import WaypointItemView from './view/waypoint-item.js';
import {render} from './render.js';


const tripPageHeaderElement = document.querySelector('.page-header');
const tripСontrolsElement = tripPageHeaderElement.querySelector('.trip-controls');
const filtersElement = tripСontrolsElement.querySelector('.trip-controls__filters');

const tripPageMainElement = document.querySelector('.page-main');
const tripEventsElement = tripPageMainElement.querySelector('.trip-events');

render(new FiltersView(), filtersElement);
render(new SortView(), tripEventsElement);

// render(new FormCreateView(), tripEventsElement);

render(new WaypointListView(), tripEventsElement);

const tripEventsListElement = tripPageMainElement.querySelector('.trip-events__list');

render(new FormEditView(), tripEventsListElement);

render(new WaypointItemView(), tripEventsListElement);
render(new WaypointItemView(), tripEventsListElement);
render(new WaypointItemView(), tripEventsListElement);
