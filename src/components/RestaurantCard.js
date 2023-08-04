import { ServerConfig } from "../config";


function RestrauntCard(props) {
  const { name, cuisines, cloudinaryImageId, areaName } = props;

  return (
    <div className="restaurant-card">
      <img src={ServerConfig.IMAGE_URL + cloudinaryImageId} alt="Restraunt" />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{areaName}</h4>
    </div>
  );
}


export default RestrauntCard;