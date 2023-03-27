import React from 'react'

function Marketplaces(props) {
  return (
    <div className='markets'>
      <a href={props.link}>
        <img
          alt={props.title}
          src={props.src}
        />
      </a>
    </div>
  )
}


export default Marketplaces
