import "./App.css";
import sourceAPI from "./api/sourceapi";
import NavBar from "./components/NavBar";

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
      <img src='' alt='logo' />
      <br />
      <button onClick={apiGet}> Load Product </button>
      
      <p>Search Items</p>
      <p>buttons</p>
    </div>
  );
}

export default App;
