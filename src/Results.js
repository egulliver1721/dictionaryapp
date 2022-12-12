import React from "react";
import Meaning from "./Meaning.js";

export default function Results(props) {
  if (props.result) {
    return (
      <div className="result">
        <h2>{props.result.word}</h2>
        {props.result.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
