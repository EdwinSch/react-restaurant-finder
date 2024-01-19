import { IoStar } from "react-icons/io5";
import Labels from "./Labels";

const RestaurantInfo = ({ item }) => {
  return (
    <div className="restaurant-info">
      {/* name */}
      <p className="name">{item.name}</p>

      {/* rating */}
      <div className="rating-wrapper">
        <IoStar />
        <IoStar />
        <IoStar />
      </div>

      {/* labels */}
      <Labels {...item} />
    </div>
  );
};
export default RestaurantInfo;
