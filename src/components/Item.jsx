import { IoCall, IoBookmark } from "react-icons/io5";
import OverlayItem from "./OverlayItem";

const Item = ({ item }) => {
  return (
    <article className="restaurant-wrapper">
      {/* OVERLAY */}
      <OverlayItem item={item} />
      {/* UNDERLAY */}
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
