import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function DictionarySearch() {
  let [input, setInput] = useState("null");
  let [loaded, setLoaded] = useState(false);

  function search(event) {
    event.preventDefault();
  }

  function handleInput(event) {
    setInput(event.target.value);
  }

  function handleResponse(response) {
    console.log(response.data[0].meanings[0].definitions[0].definition);
  }

  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleInput} />
        <input type="submit" />
      </form>
      <div className="Results"></div>
    </div>
  );
}
