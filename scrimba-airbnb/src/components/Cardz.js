import React from "react";

export default function Card() {
  return (
    <div className="card">
      <img src="images/hero1-katia.png" className="hero--card" />
      <div className="card--stats">
        <img src="images/star.png" className="card--star" />
        <span className="grey">V.0 </span>
        <span className="grey">Revs </span>
        <span className="grey">Location </span>
      </div>
      <p>Descrizione </p>
      <p>
        <span className="bold"> Prezzo </span> / persona
      </p>
    </div>
  );
}
