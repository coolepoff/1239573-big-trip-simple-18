import WaypointListView from '../view/waypoint-list.js';
import WaypointItemView from '../view/waypoint-item.js';
import SortView from '../view/sort-view.js';
import FormEditView from '../view/form-edit-fiew.js';
import FormCreateView from '../view/form-create-view.js';
import {render} from '../render.js';
import PointModel from '../model/point.js';
// import { WAYPOINT_COUNT } from '../mock/const.js';

// const WAYPOINT_COUNT = 3;

export default class WaypointPresenter {

  waypointListComponent = new WaypointListView();

  init = (blockContainer) => {
    this.blockContainer = blockContainer;
    this.pointsModel = new PointModel();
    this.points = this.pointsModel.getPoints();

    render(new SortView(), this.blockContainer);
    render(this.waypointListComponent, this.blockContainer);
    render(new FormEditView(), this.waypointListComponent.getElement());
    render(new FormCreateView(), this.waypointListComponent.getElement());

    for (let i = 0; i < this.points.length; i++) {
      render (
        new WaypointItemView(
          this.points[i],
          this.pointsModel.getOffers(this.points[i]),
          this.pointsModel.getDestination(this.points[i])
        ), this.waypointListComponent.getElement()
      );
    }

  };

}
