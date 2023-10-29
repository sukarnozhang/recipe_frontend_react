import { Link } from "react-router-dom";
import styles from "../CSS/Button.modules.css";
import { useContext } from "react";


function Product(props) {
  const {id, item, price, itemIMG } = props.data;
  return (
    <div>
        <img src={itemIMG} />
        <p>{item}</p>
        
    </div>
  );
}

export default Product;