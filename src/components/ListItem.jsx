import { IoCall, IoBookmark } from "react-icons/io5";

const ListItem = ({ list }) => {
  return (
    <article className="list-item-wrapper">
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

export default ListItem;
