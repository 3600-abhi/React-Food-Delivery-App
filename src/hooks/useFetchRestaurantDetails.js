import { useState, useEffect } from "react";
import { fetchRestaurantDetails } from "../api";

function useFetchRestaurantDetails(restaurantId) {
    const [restaurantDetails, setRestaurantDetails] = useState(null);


    useEffect(() => {
        fetchRestaurantDetails(restaurantId).then(data => setRestaurantDetails(data));
    }, []);


    return restaurantDetails;
}

export default useFetchRestaurantDetails;