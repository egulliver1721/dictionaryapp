import React from "react";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <p>{props.phonetics.text}</p>
      <a href={props.phonetics.audio}>Listen</a>
    </div>
  );
}
