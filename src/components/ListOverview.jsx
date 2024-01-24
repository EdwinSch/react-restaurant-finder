import ListItem from "./ListItem";

const ListOverview = ({ list }) => {
  return (
    <section className="list-overview-container">
      {list.map((item) => {
        return <ListItem key={item.id} item={item} />;
      })}
    </section>
  );
};

export default ListOverview;
