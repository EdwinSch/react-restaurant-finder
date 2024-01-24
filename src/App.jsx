import Header from "./components/Header";
import ListOverview from "./components/ListOverview";
import restaurants from "../data";
import { useState } from "react";

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
