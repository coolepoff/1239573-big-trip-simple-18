import WaypointListView from '../view/waypoint-list.js';
import WaypointItemView from '../view/waypoint-item.js';
import SortView from '../view/sort-view.js';
import FormEditView from '../view/form-edit-fiew.js';
import {render} from '../render.js';

export default class TripListPresenter {

  waypointListComponent = new WaypointListView();

  init = (pageContainer) => {
    this.pageContainer = pageContainer;

    render(new SortView(), this.pageContainer);
    render(this.waypointListComponent, this.pageContainer);
    render(new FormEditView(), this.waypointListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new WaypointItemView(), this.waypointListComponent.getElement());
    }

  };

}
