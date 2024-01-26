import ListItemDrawer from "./ListItemDrawer";
import { IoCall } from "react-icons/io5";

const ListItem = ({ item, activeDrawer, toggleDrawer }) => {
  return (
    <article className="list-item-wrapper">
      <ListItemDrawer
        item={item}
        activeDrawer={activeDrawer}
        toggleDrawer={toggleDrawer}
      />
      {/* Phone button */}
      <a href={`tel:${item.tel}`}>
        <button className="btn action-btn" type="button">
          <IoCall />
          <p>call</p>
        </button>
      </a>
    </article>
  );
};

export default ListItem;
