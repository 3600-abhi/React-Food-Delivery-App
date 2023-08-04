import axios from "axios";
import { useEffect, useState } from "react";
import { RestaurantCard, Shimmer } from "./index";
import { ServerConfig } from "../config";



function Body() {

    const [searchText, setSearchText] = useState("");
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);


    useEffect(() => {
        getRestaurant();
    }, []);


    async function getRestaurant() {
        const response = await axios.get(ServerConfig.RESTAURANT_URL);
        const data = response?.data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setFilteredRestaurant(data);
        setRestaurantList(data);
    }

    function getFilteredRestaurant(searchText) {
        return restaurantList.filter(restaurant => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
    }

    return restaurantList?.length === 0 ? (<Shimmer />) : (
        <>
            <div className="search-container">
                <input
                    className="search-input"
                    type="text" placeholder="search"
                    value={searchText}
                    onChange={e => setSearchText(e.target.value)}
                />

                <button
                    className="search-btn"
                    onClick={() => {
                        const filteredData = getFilteredRestaurant(searchText);
                        setFilteredRestaurant(filteredData);
                    }} >
                    Search
                </button>

            </div>

            <div className="restaurant-list">
                {
                    filteredRestaurant?.map(restraunt => (
                        <RestaurantCard {...restraunt.info} key={restraunt.info.id} />
                    ))
                }
            </div>

        </>
    )
}

export default Body;