import { Link } from "react-router-dom";
import styles from "../CSS/Search.modules.css";
import { MagnifyingGlass } from "phosphor-react";

function Search({ value, onChange }) {
  return (
    <div>
      {/* <MagnifyingGlass /> */}
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search Items"
        className="search"
      />
    </div>
  );
}

export default Search;
