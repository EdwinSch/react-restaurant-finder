import Header from "./components/Header";
import restaurants from "../data";
import { useState } from "react";

function App() {
  const [list, setList] = useState(restaurants);

  return (
    <main>
      <Header />
    </main>
  );
}

export default App;
