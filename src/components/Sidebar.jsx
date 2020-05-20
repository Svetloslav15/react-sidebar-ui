import React from 'react';
import '../styles.module.css';

const Sidebar = ({bgColor, children}) => {
  const colors = {
    red: '_styles-module__bg-red__2a97v',
  };
  return (
    <div className={colors[bgColor] + ' _styles-module__container-wrapper__13dNw'}>
      {children}
    </div>
  )
};

export default Sidebar;
