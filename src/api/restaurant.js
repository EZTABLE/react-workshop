import api from "./base";

export default {
    getRestaurantConfig({restaurantId}){
        return api.get({path: `/v2/manager_restaurant/get_configs/${restaurantId}`});
    },

    getRestaurant({restaurantId}){
        return api.get({path: `/v3/restaurants/${restaurantId}`});
    },

    showAllProducts({startDate, endDate, locale, restaurantId}){
        let [startDateFormated, endDateFormated] = [startDate, endDate].map(d => moment(d).format("YYYY-MM-DD"));
        return api.get({
            path: `/v3/restaurants/${restaurantId}/showAllProducts/${startDateFormated}/${endDateFormated}/`,
            query: {lang: locale}
        });
    }
};
