import NavBar from "./components/NavBar";
import Shop from "./components/Shop";
import Recipe from "./components/Recipe";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import css
import "./App.css";
import styles from "./CSS/Shop.modules.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="recipe" element={<Recipe />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
