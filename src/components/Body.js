import { useState, useEffect } from "react";
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
            <div className="p-5 my-2 bg-yellow-50">
                <input
                    className="p-2 border-2"
                    type="text"
                    placeholder="search"
                    value={searchText}
                    onChange={e => setSearchText(e.target.value)}
                />

                <button
                    className="p-2 m-2 bg-yellow-400 text-white rounded-sm hover:bg-yellow-500"
                    onClick={_ => setFilteredRestaurant(filterRestaurant(searchText, restaurantList))} >
                    Search
                </button>

            </div>

            <div className="flex flex-wrap justify-center">
                {
                    filteredRestaurant?.map(restaurant => (
                        <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id} >
                            <RestaurantCard {...restaurant.info} />
                        </Link>
                    ))
                }
            </div>

        </>
    )
}

export default Body;