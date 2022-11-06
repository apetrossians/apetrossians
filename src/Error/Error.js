import React from "react";
import error from "./error.png";

export default function Error({ Color }) {
  return (
    <div className="Error">
      <div className="box1">
        <img src={error} className="img1" alt="2" />
      </div>
      <div
        className="box2"
        style={{ color: Color ? Color : "#000", transition: "0.4s" }}
      >
        Error 404:
        <br /> Page Not Found !!!
      </div>
    </div>
  );
}
