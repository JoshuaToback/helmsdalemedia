import React from 'react'

function Locations(props) {
  return (
    <div className='location'>
      <h2>{props.location}</h2>
      <div className='locationInfo'>
        <p>{props.info}</p>
        <p>{props.address}</p>
      </div>
      <div className='hours'>
        <h3>Hours</h3>
        <p>{props.hours}</p>
      </div>

      <div className='phone'>
        <h3>Phone</h3>
        <p>{props.phone}</p>
      </div>
    </div>
  )
}

export default Locations
