import React from "react";
import Locations from "../components/Locations"

import FuquayImage from "../images/downtownFuquay.jpg"
import NerdsToGo from "../images/NerdsToGo.jpg"

import "../styles/drop.css";

const info = [
  { location: "Fuquay-Varina", image: FuquayImage, info: "Call for Location Details", address: "(Near Kohls on Main Street)", hours: 'Monday-Friday 10am-6pm', phone: "(919) 473-9240"},
  { location: "Nerds To Go", image: NerdsToGo, info: "8565 Chapel Hill Road", address: "Cary, NC 27513", hours: 'Monday-Saturday 9am-6pm', phone: "(919) 473-9240"}

]

function dropoff() {
  return (
    <>
      <h1 className="dropTitle">Two Convenient Secure Drop Off Locations</h1>
      <div className="dropContainer">
        {info.map((dropProp, index) => (
          <Locations
          key={index}
          location={dropProp.location}
          image={dropProp.image}
          info={dropProp.info}     
          address={dropProp.address}
          hours={dropProp.hours}
          phone={dropProp.phone} />
        ))}
      </div>
    </>
  );
}

export default dropoff;
