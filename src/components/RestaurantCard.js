import { ServerConfig } from "../config";


function RestrauntCard(props) {
  const { name, cuisines, cloudinaryImageId, areaName } = props;

  return (
    <div className="h-80 w-56 p-2 m-2 border shadow-lg bg-yellow-50">
      <img src={ServerConfig.IMAGE_URL + cloudinaryImageId} alt="Restraunt" />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{areaName}</h4>
    </div>
  );
}


export default RestrauntCard;