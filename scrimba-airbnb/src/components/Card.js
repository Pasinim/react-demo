import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.img} className="hero--card" />
      <div className="card--stats">
        <img src="images/star.png" className="card--star" />
        <span className="grey">{props.rating} </span>
        <span className="grey">({props.revs}) </span>
        <span className="grey">{props.location} </span>
      </div>
      <p>{props.title} </p>
      <p>
        <span className="bold"> {props.price}$ </span> / persona
      </p>
    </div>
  );
}
