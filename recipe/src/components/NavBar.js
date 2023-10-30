import { Link } from "react-router-dom";
import { BookBookmark, House, ShoppingCart } from "phosphor-react";
import styles from "../CSS/NavBar.modules.css";

function NavBar() {
  return (
    <>
      <div className="navbar">
        <Link to="/"> Home </Link>
        <Link to="/recipe"> Recipe </Link>
        <Link to="/cart"> Shopping Cart </Link>
      </div>
    </>
  );
}

export default NavBar;
