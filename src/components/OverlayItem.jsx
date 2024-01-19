import RestaurantInfo from "./RestaurantInfo";
import { IoNavigateCircle } from "react-icons/io5";

const OverlayItem = ({ item }) => {
  return (
    <div className="overlay-wrapper">
      <img src={item.image} alt="restaurant image" />
      <RestaurantInfo item={item} />

      {/* GPS */}
      <div className="gps-wrapper">
        <IoNavigateCircle className="gps-icon" />
        <p>{item.gps} km</p>
      </div>
    </div>
  );
};

export default OverlayItem;
