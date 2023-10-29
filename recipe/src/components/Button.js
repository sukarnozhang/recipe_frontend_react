import { Link } from "react-router-dom";
import styles from "../CSS/Button.modules.css";


function Button({onClick, label}) {
  return (
    <>
        <button onClick={onClick}>
            {label}
        </button>
    </>
  );
}

export default Button;