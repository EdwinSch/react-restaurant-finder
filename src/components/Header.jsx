import { CgMenuLeft } from "react-icons/cg";
import { LuSearch } from "react-icons/lu";

const Header = () => {
  return (
    <header>
      <button className="btn header-btn" type="button">
        <CgMenuLeft />
      </button>

      <h1>Restaurants</h1>

      <button className="btn header-btn" type="button">
        <LuSearch />
      </button>
    </header>
  );
};

export default Header;
