import React from 'react';

const Icon = ({children, styles, classes}) => {
  return (
    <i className={'_2Vept ' + classes} style={{styles}}>{children}</i>
  )
};

export default Icon;
