import React from 'react';
import '../styles.module.css';
import colors from '../enums/colors';

const Sidebar = ({bgColor, children}) => {
  const color = colors[bgColor] || colors['white'];
  return (
    <div className={'_styles-module__container-wrapper__13dNw ' + color}>
      {children}
    </div>
  )
};

export default Sidebar;
