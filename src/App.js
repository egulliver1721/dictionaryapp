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
        <footer>
          Coded by Emily Gulliver, open-sourced on{" "}
          <a
            href="https://github.com/egulliver1721/dictionaryapp"
            target="_blank"
            rel="noreferrer"
            alt="github opensourced code"
          >
            GitHub
          </a>
          and hosted on{" "}
          <a
            href="https://inspiring-truffle-f23712.netlify.app/"
            target="_blank"
            rel="noreferrer"
            alt="hosting link"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
