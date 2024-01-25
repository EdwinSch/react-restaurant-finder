import { CgMenuLeft } from "react-icons/cg";
import { LuSearch } from "react-icons/lu";
import Searchbar from "./Searchbar";

const Header = ({ isSearchOpen, setIsSearchOpen, setList }) => {
  return (
    <header>
      {/* Searchbar */}
      {isSearchOpen && (
        <Searchbar
          isSearchOpen={isSearchOpen}
          setIsSearchOpen={setIsSearchOpen}
          setList={setList}
        />
      )}

      {/* Bookmarks button */}
      {isSearchOpen || (
        <button className="btn header-btn" type="button">
          <CgMenuLeft />
        </button>
      )}

      {/* Heading */}
      {isSearchOpen || <h1>Restaurant finder</h1>}

      {/* Search button */}
      {isSearchOpen || (
        <button
          className="btn header-btn"
          type="button"
          onClick={() => {
            setIsSearchOpen(!isSearchOpen);
          }}
        >
          <LuSearch />
        </button>
      )}
    </header>
  );
};

export default Header;
