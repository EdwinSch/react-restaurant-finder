import Header from "./components/Header";
import ListOverview from "./components/ListOverview";
import restaurants from "../data";
import { useState } from "react";

// Sort by location before render
function compareByLocation(a, b) {
  return a.gps - b.gps;
}
restaurants.sort(compareByLocation);

// Render app
function App() {
  const [list, setList] = useState(restaurants);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <main>
      <Header isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />
      <ListOverview list={list} />
    </main>
  );
}

export default App;
