import axios from "axios";
import { ServerConfig } from "../config";


async function fetchRestaurantDetails(restaurantId) {
    try {
        const response = await axios.get(ServerConfig.RESTAURANT_MENU_URL + restaurantId);

        // to fetch the data which you send from backend do -> (response.data)
        const data = response.data.data;

        return data;


        /** 

            const data = response?.data?.data?.cards?.[0]?.card?.card?.info;

            const menuList = response?.data?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

            if (data) {
                data.menuList = [];
            }

            // fetching the menu details
            menuList?.forEach(menu => {
                const items = menu?.card?.card?.itemCards;

                if (items) {
                    items.forEach(item => {
                        const info = item?.card?.info;
                        if (info) data.menuList.push(info);
                    });
                }
            });

       */


    } catch (error) {
        console.log(error);
    }
}

export default fetchRestaurantDetails;