import React from 'react';

const Logo = ({image, imageName}) => {
  return (
    <img src={image} alt={imageName} style={{width: '100px'}}/>
  )
};

export default Logo;
