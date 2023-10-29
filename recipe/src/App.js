import { useState, useEffect } from "react";

import "./App.css";
import sourceAPI from "./api/sourceapi";
import NavBar from "./components/NavBar";
import logo from "./assets/logo/LemonCellar.png";
import Search from "./components/Search";
import Button from "./components/Button";


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

    const handleCategoryAll = () => {
        if (products.length>=1){
          console.log(products);
        }
        else {
          console.log("empty products");
        }

    };



  return (
    <div className="App">
      <NavBar />
      <img src={logo} alt='logo' />
      <Search />
      <br/>
      <Button label="All Items" onClick={ () => handleCategoryAll()} /> 
      <button onClick={apiGet}> Load Product </button>
    </div>
  );
}

export default App;
