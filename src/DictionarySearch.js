import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results.js";

export default function DictionarySearch() {
  let [input, setInput] = useState("");
  let [result, setResult] = useState(null);

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleInput(event) {
    setInput(event.target.value);
  }

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleInput} />
        <input type="submit" />
      </form>
      <div className="Results">
        <Results result={result} />
      </div>
    </div>
  );
}
