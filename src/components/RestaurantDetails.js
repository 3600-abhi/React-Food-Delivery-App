import { useParams } from "react-router-dom";
import { ServerConfig } from "../config";
import { Shimmer } from "../components";
import { useFetchRestaurantDetails } from "../hooks";

function RestrauntDetails() {

    const params = useParams();
    const restaurantDetails = useFetchRestaurantDetails(params.id);


    return !restaurantDetails
        ? <Shimmer />
        : (
            <div className="menu" >
                <h3>name : {restaurantDetails.name}</h3>
                <h3>city : {restaurantDetails.city}</h3>

                <img src={ServerConfig.IMAGE_URL + restaurantDetails.cloudinaryImageId} alt="Restaurant-Logo" />

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



