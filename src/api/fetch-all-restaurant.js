import axios from "axios";
import { ServerConfig } from "../config";


async function fetchAllRestaurant() {
    const response = await axios.get(ServerConfig.RESTAURANT_URL);
    const data = response?.data?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    return data;
}

export default fetchAllRestaurant;