import React from 'react'
import { Link } from 'react-router-dom'
import Product from '../components/Product'

import AudioC from "../images/Digitization/AudioC.jpg";
import D8 from "../images/Digitization/Digital8.jpg";
import MiniDV from "../images/Digitization/miniDV.jpeg";
import VHS from "../images/Digitization/vhs.jpg";
import VHSC from "../images/Digitization/vhsC.jpg";

import "../styles/digi.css"

const products = [
  {title: 'Audio Cassette', src: AudioC, price: "$10"},
  {title: '8mm | Hi8 | Digital 8 ', src: D8, price: "$6"},
  {title: 'Mini DV ', src: MiniDV, price: "$6"},
  {title: 'VHS', src: VHS, price: "$6"},
  {title: 'VHSC', src: VHSC, price: "$6"}
]

function digitization() {
  return (
    <>
    <center className='hero'>
      <h1>Save Your Memories</h1>
      <p><strong>Helmsdale Media, LLC</strong> can convert a wide variety of video and audio formats and deliver them to you to enjoy on your computer, phone or Smart TV.  Easily share with family and friends around the block or around the world.</p>

      <button className='contactBtn'><CustomLink to='/faq'>How Does It Work?</CustomLink></button>
    </center>

    <div className='products'>
      {products.map((productProp, index) => (
        <Product
        key={index}
        title={productProp.title}
        src={productProp.src}
        price={productProp.price}
        />
      ))}
    </div>
    </>
  );
}

export default digitization

function CustomLink({ to, children, ...props }) {
  return (
      <li>
      <Link to = {to} {...props}>
      { children }
      </Link>
      </li>
  )
}
