import "./App.css";
import sourceAPI from "./api/sourceapi";
import NavBar from "./components/NavBar";
import logo from "./assets/logo/LemonCellar.png";
import Search from "./components/Search"

function App() {
  function apiGet() {
    console.log("a");
    sourceAPI
      .get("/products")
      .then((response) => {
        console.log("GET status:", response.status);
        console.log("GET data:", response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  return (
    <div className="App">
      <NavBar />
      <img src={logo} alt='logo' />
      <Search />
      

      <p>buttons</p>
      <button onClick={apiGet}> Load Product </button>
    </div>
  );
}

export default App;
