import { LuSearch } from "react-icons/lu";
import { MdOutlineCancel } from "react-icons/md";
import { useState } from "react";
import restaurants from "../../data";

const Searchbar = ({ isSearchOpen, setIsSearchOpen, setList }) => {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate input !empty
    if (input === "") {
      return;
    }

    // Filter searchterm
    const filteredList = restaurants.filter((item) => {
      return item.name.includes(input);
    });
    // Set state to filtered return
    setList(filteredList);

    // Clear Input
    setInput("");
  };

  const handleAbort = () => {
    // IF !input close search only, no list reload.
    if (input === "") {
      setIsSearchOpen(!isSearchOpen);
    }

    // Reset original list
    setList(restaurants);

    // Close Searchbar
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <form onSubmit={handleSubmit} className="searchbar-container">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        name="search"
        id="search"
        placeholder="Search restaurant name..."
      />
      <button className="btn header-btn" type="submit">
        <LuSearch />
      </button>
      <button
        onClick={handleAbort}
        className="btn header-btn"
        type="button"
        style={{ color: "red" }}
      >
        <MdOutlineCancel />
      </button>
    </form>
  );
};

export default Searchbar;
