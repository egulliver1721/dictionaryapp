import React from "react";
import Meaning from "./Meaning.js";
import Phonetics from "./Phonetics.js";
import "./Results.css";

export default function Results(props) {
  if (props.result) {
    return (
      <div className="result">
        <section>
          <h2>{props.result.word}</h2>

          {props.result.phonetics.map(function (phonetics, index) {
            return (
              <div className="Phonetics" key="index">
                <Phonetics phonetics={phonetics} />
              </div>
            );
          })}
        </section>
        {props.result.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
