import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <strong className="PhoneticsAudio">
        <a
          href={props.phonetics.audio}
          target="_blank"
          rel="noreferrer"
          alt="phonetic audio"
        >
          Listen
        </a>
      </strong>
      <span className="PhoneticsText">{props.phonetics.text}</span>
    </div>
  );
}
