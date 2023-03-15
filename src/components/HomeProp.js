import React from 'react'

function HomeProp(props) {
  return (
    <div>
      <img alt={props.title}
      className="homeImage"
      src={props.src}
      style={{margin: '0 auto'}}
      />

      <h3>{props.title}</h3>
      <p>{props.desc}</p>
      <button className='contactBtn'>{props.link}</button>
    </div>
  )
}

export default HomeProp
