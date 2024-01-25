import Header from "./components/Header";
import ListOverview from "./components/ListOverview";
import restaurants from "../data";
import { useState } from "react";

// Sort by location before render
// restaurants.sort((a, b) => (a.gps > b.gps ? 1 : b.gps > a.gps ? -1 : 0));

function compareByLocation(a, b) {
  return a.gps - b.gps;
}

restaurants.sort(compareByLocation);

// Render app
function App() {
  const [list, setList] = useState(restaurants);

  return (
    <main>
      <Header />
      <ListOverview list={list} />
    </main>
  );
}

export default App;
