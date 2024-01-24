import { FaLocationArrow } from "react-icons/fa6";

const ListItemDrawer = ({ item }) => {
  return (
    <div className="listitem-drawer-wrapper">
      <img src={item.image} alt={item.name} />
      <div className="location-wrapper">
        <FaLocationArrow className="gps-symbol" />
        <p>{item.gps} km</p>
      </div>
    </div>
  );
};

export default ListItemDrawer;
