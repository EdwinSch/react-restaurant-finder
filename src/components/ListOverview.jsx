import ListItem from "./ListItem";

const ListOverview = ({ list, activeDrawer, toggleDrawer }) => {
  return (
    <section className="list-overview-container">
      {list.map((item) => {
        return (
          <ListItem
            key={item.id}
            item={item}
            activeDrawer={activeDrawer}
            toggleDrawer={toggleDrawer}
          />
        );
      })}
    </section>
  );
};

export default ListOverview;
