import { IoCall, IoBookmark } from "react-icons/io5";

const Item = ({ item }) => {
  return (
    <article className="restaurant-wrapper">
      <button className="btn action-btn" type="button">
        <IoCall />
        <p>call</p>
      </button>
      <button className="btn action-btn" type="button">
        <IoBookmark />
        <p>bookmark</p>
      </button>
    </article>
  );
};

export default Item;
