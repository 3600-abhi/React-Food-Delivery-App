import axios from "axios";
import { ServerConfig } from "../config";



async function fetchAllRestaurant() {
    try {
        const response = await axios.get(ServerConfig.RESTAURANT_URL);

        // to fetch the data which you send from backend do -> (response.data)
        const data = response.data.data;

        return data;

        /** 
         
            * Old data fetching when using Swiggy API directly
        
            const data = response?.data?.data?.cards?.[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants
       */


    } catch (error) {
        console.log(error);
    }
}

export default fetchAllRestaurant;