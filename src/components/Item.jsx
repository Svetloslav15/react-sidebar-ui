import React from 'react';
import colors from '../enums/colors';
import colorsHovered from '../enums/colors-hovered';

const Item = ({bgColor, children, onClick}) => {
  const color = `${colorsHovered[bgColor]} ${colors[bgColor]}`;
  return (
    <div onClick={onClick} className={'_styles-module__item__VrCvP ' + color}>{children}</div>
  )
};

export default Item;
