import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results.js";

export default function DictionarySearch(props) {
  let [input, setInput] = useState(props.defaultInput);
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleInput(event) {
    setInput(event.target.value);
  }

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <input type="search" placeholder="sunset" onChange={handleInput} />
          </form>
        </section>
        <div className="Results">
          <Results result={result} />
        </div>
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
