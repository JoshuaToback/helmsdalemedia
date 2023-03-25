import React from 'react'

function Marketplaces(props) {
  return (
    <div className='markets'>
      <img alt={props.title}
      src={props.src}
      link={props.link}
       />
    </div>
  )
}

export default Marketplaces
