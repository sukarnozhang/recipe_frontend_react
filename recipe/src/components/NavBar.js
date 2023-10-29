import { Link } from "react-router-dom";
import { BookBookmark, House, ShoppingCart } from "phosphor-react";
import styles from "../CSS/NavBar.modules.css";

function NavBar() {
  return (
    <>
      <div className="navbar">
        <button className="navbarButton">Home</button>
        <button className="navbarButton">Recipe</button>
        <button className="navbarButton">Shopping Cart</button>
      </div>
    </>
  );
}

export default NavBar;
