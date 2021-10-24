import React from "react";
import "./Scholar.css";
import { useStateValue } from "./StateProvider";

function Scholar({ name, image }) {
  useStateValue();
  return (
    <div className="scholar">
      <div className="scholar__info">
        <p className="scholar__name">{name}</p>
      </div>
      <img src={image} alt="" />
    </div>
  );
}

export default Scholar;
