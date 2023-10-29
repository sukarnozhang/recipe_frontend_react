import { Link } from "react-router-dom";
import styles from "../CSS/Search.modules.css";
import { MagnifyingGlass } from "phosphor-react";

function Search() {
  return (
    <>
      <div>
        {/* <MagnifyingGlass /> */}
        <input placeholder="Search Items" className="search"/>
      </div>
    </>
  );
}

export default Search;