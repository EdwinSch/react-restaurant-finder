import RestaurantInfo from "./RestaurantInfo";

const OverlayItem = ({ item }) => {
  return (
    <div className="overlay-wrapper">
      <img src={item.image} alt="restaurant image" />
      <RestaurantInfo item={item} />
    </div>
  );
};

export default OverlayItem;
