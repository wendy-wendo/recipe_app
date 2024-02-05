import React from 'react'

const Image = ({label, image, source}) => {
  return (
    <div className="image">
        <img src={image} alt="" />
        <div>
        <p>{label}</p>
        <p className="source">{source.toUpperCase()}</p>
        </div>
    </div>
  )
}

export default Image
