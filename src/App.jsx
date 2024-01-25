import Header from "./components/Header";
import ListOverview from "./components/ListOverview";
import restaurants from "../data";
import { useState } from "react";

// Sort by location function
function sortByLocation(a, b) {
  return a.gps - b.gps;
}

// Render app
function App() {
  const [list, setList] = useState(restaurants);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Sort by location before (re)render
  list.sort(sortByLocation);

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
