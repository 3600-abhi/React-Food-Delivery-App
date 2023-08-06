import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ServerConfig } from "../config";
import { fetchRestaurantDetails } from "../api";
import { Shimmer } from "../components";

function RestrauntDetails() {

    const params = useParams();
    const [restaurantDetails, setRestaurantDetails] = useState(null);

    useEffect(() => {
        fetchRestaurantDetails(params.id).then(data => setRestaurantDetails(data));
    }, []);

   
    return !restaurantDetails ? <Shimmer /> : (
        <div className="menu" >
            <h3>name : {restaurantDetails.name}</h3>
            <h3>city : {restaurantDetails.city}</h3>

            <img src={ServerConfig.IMAGE_URL + restaurantDetails.cloudinaryImageId} alt="" />

            <h3>Rating : {restaurantDetails.avgRating}</h3>

            <h3>costForTwoMessage : {restaurantDetails.costForTwoMessage}</h3>

            <h3>areaName : {restaurantDetails.areaName}</h3>

            <div>
                <h1>Menu</h1>

                <ul>
                    {
                        restaurantDetails?.menuList?.map((menu, index) => (
                            <li key={index} >{menu.name}</li>
                        ))
                    }
                </ul>

            </div>
        </div>
    )
}

export default RestrauntDetails;



