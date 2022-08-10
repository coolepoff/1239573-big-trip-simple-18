import FilterView from './view/filter-view.js';
import {render} from './render.js';

const siteMainElement = document.querySelector('.trip-controls');
const siteHeaderElement = siteMainElement.querySelector('.trip-controls__filters');

render(new FilterView(), siteHeaderElement);
