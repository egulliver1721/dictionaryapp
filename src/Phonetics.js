import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <strong className="PhoneticsAudio">
        <a href={props.phonetics.audio}>Listen</a>
      </strong>
      <span className="PhoneticsText">{props.phonetics.text}</span>
    </div>
  );
}
