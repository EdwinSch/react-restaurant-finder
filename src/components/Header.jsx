import { LuSearch } from "react-icons/lu";
import { LiaSortSolid } from "react-icons/lia";

import Searchbar from "./Searchbar";

const Header = ({
  isSearchOpen,
  setIsSearchOpen,
  setList,
  sortingType,
  setSortingType,
}) => {
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
        <button
          className="btn header-btn"
          type="button"
          onClick={() => setSortingType(!sortingType)}
        >
          <LiaSortSolid />
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
