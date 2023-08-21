import { useParams } from "react-router-dom";
import { ServerConfig } from "../config";
import { Shimmer, MenuCard } from "../components";
import { useFetchRestaurantDetails } from "../hooks";

function RestrauntDetails() {

    const params = useParams();

    const restaurantDetails = useFetchRestaurantDetails(params.id);

    return !restaurantDetails
        ? <Shimmer />
        : (
            <div className="m-3">
                <h3>name : {restaurantDetails.name}</h3>
                <h3>city : {restaurantDetails.city}</h3>

                <img
                    className="h-80"
                    src={ServerConfig.IMAGE_URL + restaurantDetails.cloudinaryImageId}
                    alt="Restaurant-Logo"
                />

                <h3>Rating : {restaurantDetails.avgRating}</h3>

                <h3>costForTwoMessage : {restaurantDetails.costForTwoMessage}</h3>

                <h3>areaName : {restaurantDetails.areaName}</h3>

                <div>
                    <h1 className="font-bold text-4xl p-3">Menu</h1>

                    {
                        restaurantDetails?.menuList?.map((menu, index) => (
                            <MenuCard {...menu} key={index} />
                        ))
                    }

                </div>
            </div>
        )
}

export default RestrauntDetails;



