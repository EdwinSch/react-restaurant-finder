import Header from "./components/Header";
import Overview from "./components/Overview";
import restaurants from "../data";
import { useState } from "react";

function App() {
  const [list, setList] = useState(restaurants);

  return (
    <main>
      <Header />
      <Overview list={list} />
    </main>
  );
}

export default App;
