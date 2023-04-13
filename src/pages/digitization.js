import React from "react";
import { Link } from "react-router-dom";
import Product from "../components/Product";

import AudioC from "../images/Digitization/AudioC.jpg";
import D8 from "../images/Digitization/Digital8.jpg";
import MiniDV from "../images/Digitization/miniDV.jpeg";
import Negative from "../images/Digitization/Negatives.jpg";
import Photographs from "../images/Digitization/Photographs.jpg";
import Slides from "../images/Digitization/Slides.jpg";
import Super8 from "../images/Digitization/Super8.jpg";
import VHS from "../images/Digitization/vhs.jpg";
import VHSC from "../images/Digitization/vhsC.jpg";

import "../styles/digi.css";

const products = [
  { title: "Audio Cassette", src: AudioC, price: "$10" },
  { title: "8mm | Hi8 | Digital 8 ", src: D8, price: "$6" },
  { title: "Mini DV", src: MiniDV, price: "$6" },
  { title: "Negatives", src: Negative, price: "30c" },
  { title: "Photographs", src: Photographs, price: "25c" },
  { title: "Slides", src: Slides, price: "25c" },
  { title: "Super8", src: Super8, price: "$10 (3in) - $15 (5in) - $25 (7in)" },
  { title: "VHS", src: VHS, price: "$6" },
  { title: "VHSC", src: VHSC, price: "$6" },
];

function digitization() {
  return (
    <>
      <div className="digiContainer">
        <center className="hero">
          <h1>Save Your Memories</h1>
          <p>
            <strong>Helmsdale Media, LLC</strong> can convert a wide variety of
            video and audio formats and deliver them to you to enjoy on your
            computer, phone or Smart TV. Easily share with family and friends
            around the block or around the world.
          </p>
          <CustomLink to="/faq">
          <button className="contactBtn">
            How Does It Work?
          </button>
          </CustomLink>

          <div className="dropOff">
            <CustomLink to="/dropoff" ><p>Convenient Drop-off Locations in Fuquay-Varina and Cary</p></CustomLink>
          </div>
        </center>
        <div className="productContainer">
          {products.map((productProp, index) => (
            <div className="productRow" key={index}>
              <Product
                title={productProp.title}
                src={productProp.src}
                price={productProp.price}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default digitization;

function CustomLink({ to, children, ...props }) {
  return (
    <li className="link">
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
