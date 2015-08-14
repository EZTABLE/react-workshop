import alt from "../alt";
import makeHot from "alt/utils/makeHot";
import restaurantAction from '../action/restaurantAction';

class RestaurantStore {
    constructor(){
        this.bindActions(restaurantAction);

        Object.assign(this, {summary: []});
    }

    showAllProductsSuccess({summary, transactions, total_income}){
        this.setState({summary, transactions, total_income});
    }
}

export default makeHot(alt, RestaurantStore, "RestaurantStore");
