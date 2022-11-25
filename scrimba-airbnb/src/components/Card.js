import React from "react";

export default function Card({
  image,
  rating,
  revs,
  country,
  description,
  price,
}) {
  return (
    <div className="card">
      <img src={image} className="hero--card" />
      <div className="card--stats">
        <img src="images/star.png" className="card--star" />
        <span className="grey">{rating} </span>
        <span className="grey">{revs}</span>
        <span className="grey">{country}</span>
      </div>
      <p>{description} </p>
      <p>
        <span className="bold"> {price}$ </span> / persona
      </p>
    </div>
  );
}
