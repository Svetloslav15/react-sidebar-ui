import React from 'react';
import colors from '../enums/colors';
import colorsHovered from '../enums/colors-hovered';

const Item = ({bgColor, children}) => {
  const color = `${colorsHovered[bgColor]} ${colors[bgColor]}`;
  return (
    <div className={'_styles-module__item__VrCvP ' + color}>{children}</div>
  )
};

export default Item;
