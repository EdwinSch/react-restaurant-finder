import { FaLocationArrow } from "react-icons/fa6";
import RestaurantInfo from "./RestaurantInfo";

const ListItemDrawer = ({ item, activeSelected, toggleRestaurant }) => {
  // Slider/selected
  const isActive = item.id === activeSelected;

  return (
    <div
      onClick={() => toggleRestaurant(item.id)}
      className={
        isActive
          ? "listitem-drawer-wrapper slide-left"
          : "listitem-drawer-wrapper"
      }
    >
      <img src={item.image} alt={item.name} />
      <RestaurantInfo {...item} />
      <div className="location-wrapper">
        <FaLocationArrow className="gps-symbol" />
        <p>{item.gps} km</p>
      </div>
    </div>
  );
};

export default ListItemDrawer;
