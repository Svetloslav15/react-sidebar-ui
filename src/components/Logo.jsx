import React from 'react'

const Logo = ({ image, imageName, classes }) => {
  return (
    <img
      src={image}
      alt={imageName}
      className={`logo-image ${classes}`}
    />
  )
}

export default Logo
