import { CgMenuLeft } from "react-icons/cg";
import { LuSearch } from "react-icons/lu";
import Searchbar from "./Searchbar";

const Header = ({ isSearchOpen, setIsSearchOpen }) => {
  return (
    <header>
      {isSearchOpen && <Searchbar />}
      <button className="btn header-btn" type="button">
        <CgMenuLeft />
      </button>

      <h1>Restaurant finder</h1>

      <button
        className="btn header-btn"
        type="button"
        onClick={() => {
          setIsSearchOpen(!isSearchOpen);
        }}
      >
        <LuSearch />
      </button>
    </header>
  );
};

export default Header;
