import alt from "../alt";
import api from "../api/restaurant";
import _ from "underscore";

class RestaurantAction {
    constructor(){
        this.generateActions("showAllProductsSuccess", "showAllProductsFail");
    }

    showAllProducts({startDate, endDate, restaurantId}){
        this.dispatch({restaurantId, startDate, endDate});
        return api.showAllProducts({startDate, endDate, restaurantId}).then(({status, data})=>{
            if (status === "OK" && data){
                let result = _.pick(data, "transactions", "summary", "total_income");
                result.totalIncome = result.total_income;
                this.actions.showAllProductsSuccess(result);
                return result;
            } else {
                throw new Error(status);
            }
        }).catch((err)=>{
            this.actions.showAllProductsFail({err});
        });
    }
}

export default alt.createActions(RestaurantAction);
