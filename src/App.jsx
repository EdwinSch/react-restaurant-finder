import Header from "./components/Header";
import ListOverview from "./components/ListOverview";
import restaurants from "../data";
import { useState } from "react";

// Sort by location function
function sortByLocation(a, b) {
  return a.gps - b.gps;
}
// Sort by rating functions
function sortByRating(a, b) {
  return b.score - a.score;
}

// Render app
function App() {
  const [list, setList] = useState(restaurants);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeDrawer, setActiveDrawer] = useState(null);
  // DEFAULT: Sort by location before initial render
  const [sortingType, setSortingType] = useState(true);

  // Sorting type switch
  {
    sortingType ? list.sort(sortByLocation) : list.sort(sortByRating);
  }

  // Toggle one slider at a time function
  const toggleDrawer = (id) => {
    const newActiveId = id === activeDrawer ? null : id;
    setActiveDrawer(newActiveId);
  };

  return (
    <main>
      <Header
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
        setList={setList}
        sortingType={sortingType}
        setSortingType={setSortingType}
      />

      <ListOverview
        list={list}
        activeDrawer={activeDrawer}
        toggleDrawer={toggleDrawer}
      />
    </main>
  );
}

export default App;
