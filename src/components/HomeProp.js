import React from 'react'

import "../styles/home.css"

function HomeProp(props) {
  return (
    <div className='homeProp'>
      <img alt={props.title}
      className="homeImage"
      src={props.src}
      />

      <h3>{props.title}</h3>
      <p>{props.desc}</p>
      <button className='contactBtn'>{props.link}</button>
    </div>
  )
}

export default HomeProp
