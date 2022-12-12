import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results.js";
import Photos from "./Photos.js";

export default function DictionarySearch(props) {
  let [input, setInput] = useState(props.defaultInput);
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`;
    axios.get(apiUrl).then(handleResponse);

    let apiKey = "563492ad6f91700001000001578a7564e9a54c4fb7bc0ef1f4b4f065";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${input}&per_page=9`;
    axios
      .get(pexelsApiUrl, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      })
      .then(handlePexelsResponse);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
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
          <Photos photos={photos} />
        </div>
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
