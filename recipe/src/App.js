//import react library
import { useState, useEffect } from "react";

//import components
import sourceAPI from "./api/sourceapi";
import NavBar from "./components/NavBar";
import logo from "./assets/logo/LemonCellar.png";
import Search from "./components/Search";
import Button from "./components/Button";
import Product from "./components/Product";

//import css
import "./App.css";
import styles from "./CSS/Shop.modules.css";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  function apiGet() {
    console.log("a");
    sourceAPI
      .get("/products")
      .then((response) => {
        console.log("GET status:", response.status);
        //console.log("GET data:", response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  useEffect(() => {
    apiGet();
  }, []);

  const handleCategoryAll = () => {
    if (products.length >= 1) {
      console.log(products);
      setFilteredItems(products);
    } else {
      console.log("empty products");
    }
  };

  const handleSearchItem = (value) => {
    console.log("test", filteredItems);
    console.log("My Value is", value);
    const searchResult = filteredItems.filter((item) => item.item === value);
    setFilteredItems(searchResult);
    console.log("my search results is", searchResult);
  };

  return (
    <div className="App">
      <NavBar />
      <img src={logo} alt="logo" />
      <Search onChange={(value) => handleSearchItem (value) } />
      <br />
      <Button label="All Items" onClick={() => handleCategoryAll()} />

      <div className="products">
        {filteredItems.map((filteredItem) => (
          <Product data={filteredItem} key={filteredItem.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
