import alt from "../alt";
import makeHot from "alt/utils/makeHot";
import restaurantAction from '../action/restaurantAction';

class RestaurantStore {
    constructor(){
        this.bindActions(restaurantAction);

        Object.assign(this, {summary: []});
    }
}

export default makeHot(alt, RestaurantStore, "RestaurantStore");
