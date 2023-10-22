import './App.css';
import sourceAPI from './api/sourceapi'

function App() {
  function apiGet(){
    console.log('a');
    sourceAPI.get('/products')
      .then((response) => {
        console.log('GET status:', response.status);
        console.log('GET data:', response.data);
      })
      .catch((error)=> {
        console.log(error.message);
      })
  }


  return (
    <div className="App">
      <header className="App-header">
        <p>Nav bar</p>
        <p>Lemon Cellar</p>
        <button onClick={apiGet}> Loead Product </button>
        <p>Search Items</p>
        <p>buttons</p>
      </header>
    </div>
  );
}

export default App;
