import Item from "./Item";

const Overview = ({ list }) => {
  return (
    <section className="overview-container">
      {list.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
    </section>
  );
};

export default Overview;
