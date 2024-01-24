import { FaLocationArrow } from "react-icons/fa6";
import RestaurantInfo from "./RestaurantInfo";
import { useState } from "react";

const ListItemDrawer = ({ item }) => {
  const [DrawerIsOpen, setDrawerIsOpen] = useState(false);

  return (
    <div
      onClick={() => setDrawerIsOpen(!DrawerIsOpen)}
      className={
        DrawerIsOpen
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
