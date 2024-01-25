import Header from "./components/Header";
import ListOverview from "./components/ListOverview";
import restaurants from "../data";
import { useState } from "react";

// Sort by location before initial render
function sortByLocation(a, b) {
  return a.gps - b.gps;
}
restaurants.sort(sortByLocation);

// Render app
function App() {
  const [list, setList] = useState(restaurants);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <main>
      <Header
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
        setList={setList}
      />
      <ListOverview list={list} />
    </main>
  );
}

export default App;
