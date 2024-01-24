import { IoStar } from "react-icons/io5";

const RestaurantInfo = ({ name, score, labels }) => {
  // Render stars
  let stars = [];

  function renderScore() {
    for (let i = 0; i < score; i++) {
      stars.push("s");
    }
  }

  // Component
  return (
    <div className="restaurant-info-container">
      {/* name */}
      <h2 className="name">{name}</h2>

      {/* score */}
      <div className="score-wrapper">
        {renderScore()}
        {stars.map((star, index) => {
          return (
            <IoStar key={index} style={{ color: "#feba27", fontSize: 12 }} />
          );
        })}
      </div>

      {/* labels */}
      <div className="labels-wrapper">
        {labels.map((label, index) => {
          return (
            <div className="label" key={index}>
              {label}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantInfo;
