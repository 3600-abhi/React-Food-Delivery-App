import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RestaurantCard, Shimmer } from "./index";
import { fetchAllRestaurant } from "../api";
import { filterRestaurant } from "../utils/helpers";



function Body() {

    const [searchText, setSearchText] = useState("");
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);


    useEffect(() => {
        fetchAllRestaurant().then(data => {
            setFilteredRestaurant(data);
            setRestaurantList(data);
        })
    }, []);


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
                    onClick={_ => setFilteredRestaurant(filterRestaurant(searchText, restaurantList))} >
                    Search
                </button>

            </div>

            <div className="restaurant-list">
                {
                    filteredRestaurant?.map(restaurant => (
                        <Link className="remove-underline" to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id} >
                            <RestaurantCard {...restaurant.info} />
                        </Link>
                    ))
                }
            </div>

        </>
    )
}

export default Body;