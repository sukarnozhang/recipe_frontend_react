//import react library
import { useState, useEffect } from "react";

//import components
import sourceAPI from "../api/sourceapi";
import NavBar from "./NavBar";
import logo from "../assets/logo/LemonCellar.png";
import Search from "./Search";
import Button from "./Button";
import Product from "./Product";

//import css
import "../App.css";
import styles from "../CSS/Shop.modules.css";

function Shop() {
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

  const handleCategoryFruit = () => {
    if (products.length >= 1) {
      console.log(products);
      const fruits = products.filter((item) => item.category==='fruit');
      setFilteredItems(fruits);
    } else {
      console.log("empty products");
    }
  };

  const handleSearchItem = (value) => {
    console.log("test", products);
    console.log("My Value is", value);
    const searchResult = products.filter((item) => item.item === value);
    setFilteredItems(searchResult);
    console.log("my search results is", searchResult);
  };

  return (
    <div className="App">

      <img src={logo} alt="logo" />
      <Search onChange={(value) => handleSearchItem (value) } />
      <br />
      <Button label="All Items" onClick={() => handleCategoryAll()} />
      <Button label="Fruits" onClick={() => handleCategoryFruit()} />

      <div className="products">
        {filteredItems.map((filteredItem) => (
          <Product data={filteredItem} key={filteredItem.id} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
