import React from "react";
import "./Photos.css";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photos, index) {
            return (
              <div className="col-4 PhotoColumn" key={index}>
                <img src={photos.src.landscape} alt="" className="img-fluid" />
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
