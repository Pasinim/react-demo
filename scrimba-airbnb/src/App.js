import React from "react";
import Navbar from "./components/Navbar";
import Heroes from "./components/Heroes";
import Card from "./components/Card";

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {
  return (
    <div>
      <Navbar />
      <Heroes />
      <div className="cards">
        <Card
          image="images/hero1-katia.png"
          rating="Rating"
          revs="revs"
          country="ISO"
          price="100"
        />
        <Card
          image="images/hero1-katia.png"
          rating="Rating"
          revs="revs"
          country="ISO"
          price="100"
        />
      </div>
    </div>
  );
}
