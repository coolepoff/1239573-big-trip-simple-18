import FiltersView from './view/filters-view.js';
import SortView from './view/sort-view.js';
import FormCreateView from './view/form-create-view.js';
import FormEditView from './view/form-edit-fiew.js';
import WaypointView from './view/waypoint.js';
import {render} from './render.js';

const tripСontrolsElement = document.querySelector('.trip-controls');
const filtersElement = tripСontrolsElement.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');

render(new FiltersView(), filtersElement);
render(new SortView(), tripEventsElement);

render(new FormCreateView(), tripEventsElement);
render(new FormEditView(), tripEventsElement);
render(new WaypointView(), tripEventsElement);
