import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import DictionarySearch from "./DictionarySearch.js";

function App() {
  return (
    <div className="App">
      <div className="container DictionarySearch">
        <main>
          <h1 className="Centered mb-5">What word would you like to search?</h1>
          <DictionarySearch defaultInput="Sunset" />
        </main>
        <footer>Coded by E.Gulliver</footer>
      </div>
    </div>
  );
}

export default App;
