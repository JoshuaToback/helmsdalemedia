import React from "react";

import "../styles/drop.css";

function Locations(props) {
  return (
    <div
      className="location"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7) ,rgba(0, 0, 0, 0.7)), url(${props.image})`
      }}
    >
      <h2>{props.location}</h2>
      <div className="locationInfo">
        <p>{props.info}</p>
        <p>{props.address}</p>
      </div>
      <div className="hours">
        <h3>Hours</h3>
        <p>{props.hours}</p>
      </div>

      <div className="phone">
        <h3>Phone</h3>
        <p>{props.phone}</p>
      </div>
    </div>
  );
}

export default Locations;
