const RestaurantInfo = ({ name, score, labels }) => {
  return (
    <div className="restaurant-info-wrapper">
      <p className="name">{name}</p>
    </div>
  );
};

export default RestaurantInfo;
