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
  const [activeSelected, setActiveSelected] = useState(null);

  // Sort by location before (re)render
  list.sort(sortByLocation);

  // Toggle one slider at a time function
  const toggleRestaurant = (id) => {
    const newActiveId = id === activeSelected ? null : id;
    setActiveSelected(newActiveId);
  };

  return (
    <main>
      <Header
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
        setList={setList}
      />
      <ListOverview
        list={list}
        activeSelected={activeSelected}
        toggleRestaurant={toggleRestaurant}
      />
    </main>
  );
}

export default App;
