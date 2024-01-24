import ListItem from "./ListItem";

const ListOverview = ({ list }) => {
  return (
    <section className="list-overview-container">
      {list.map((item) => {
        return <ListItem key={item.id} list={list} />;
      })}
    </section>
  );
};

export default ListOverview;
