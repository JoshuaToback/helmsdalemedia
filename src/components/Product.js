import React from 'react'

function Product(props) {
  return (
    <div>
      <img alt={props.title}
      className="productImage"
      src={props.src}
      style={{margin: '0 auto'}}
      />

      <p>{props.title} - {props.price}</p>
    </div>
  )
}

export default Product
