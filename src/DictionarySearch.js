import React, { useState } from "react";
import "./Dictionary.css";

export default function DictionarySearch() {
  let [input, setInput] = useState("null");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${input}`);
  }

  function handleInput(event) {
    setInput(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleInput} />
        <input type="submit" />
      </form>
    </div>
  );
}
