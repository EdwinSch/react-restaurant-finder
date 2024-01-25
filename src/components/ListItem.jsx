import ListItemDrawer from "./ListItemDrawer";
import { IoCall, IoBookmark } from "react-icons/io5";

const ListItem = ({ item }) => {
  return (
    <article className="list-item-wrapper">
      <ListItemDrawer item={item} />
      {/* Phone button */}
      <a href={`tel:${item.tel}`}>
        <button className="btn action-btn" type="button">
          <IoCall />
          <p>call</p>
        </button>
      </a>
      {/* Bookmark button */}
      <button className="btn action-btn" type="button">
        <IoBookmark />
        <p>bookmark</p>
      </button>
    </article>
  );
};

export default ListItem;
