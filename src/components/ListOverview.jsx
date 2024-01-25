import ListItem from "./ListItem";

const ListOverview = ({ list, activeSelected, toggleRestaurant }) => {
  return (
    <section className="list-overview-container">
      {list.map((item) => {
        return (
          <ListItem
            key={item.id}
            item={item}
            activeSelected={activeSelected}
            toggleRestaurant={toggleRestaurant}
          />
        );
      })}
    </section>
  );
};

export default ListOverview;
