import React from 'react';

const Logo = ({image, imageName}) => {
  return (
    <img src={image} alt={imageName}/>
  )
};

export default Logo;
