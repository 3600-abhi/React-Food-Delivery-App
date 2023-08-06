import axios from "axios";
import { ServerConfig } from "../config";


async function fetchRestaurantDetails(restaurantId) {
    const response = await axios.get(ServerConfig.RESTAURANT_MENU_URL + restaurantId);

    console.log("response = ", response);

    const data = response.data.data.cards[0].card.card.info;

    const menuList = response.data.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards;

    data.menuList = [];

    // fetching the menu details
    menuList.forEach(menu => {
        const items = menu?.card?.card?.itemCards;

        if (items) {
            items.forEach(item => {
                const info = item?.card?.info;
                if (info) data.menuList.push(info);
            });
        }
    });

    console.log("menuList = ", data.menuList);

    return data;
}

export default fetchRestaurantDetails;