import React from 'react'

const Logo = ({ image, imageName, classes }) => {
  return (
    <img
      src={image}
      alt={imageName}
      className={`_3qnVN ${classes}`} />
  )
}

export default Logo
