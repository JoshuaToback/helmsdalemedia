import React from 'react'

import myCityPoster from "../images/myCityPoster.jpeg";

import "../styles/auto.css"

function autograph() {
  return (
    <center className='autoContainer'>
      <h1>Imagination. Personalized.</h1>
      <p>If you’d like to order a personalized copy, send $23 ($16 + Tax + Shipping) via Venmo <a href="https://account.venmo.com/pay">@helmsdalemedia</a>. Be sure to include to whom you wish the book to be autographed. Message us at <a href="mailto:info@helmsdalemedia.com">info@helmsdalemedia.com</a> for check or other payment methods.  </p>
      <img src={myCityPoster} alt="My City View" />
    </center>
  )
}

export default autograph
