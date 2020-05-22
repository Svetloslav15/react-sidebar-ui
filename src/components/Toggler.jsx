import React from 'react';

const Toggler = ({isCollapsed, toggleIsOpen, classes}) => {
  return (
    <span onClick={() => toggleIsOpen(!isCollapsed)} className={classes}>
      {
        !isCollapsed ?
          <i className="fas fa-times _styles-module__toggler__2_oI1"/>
          :
          <i className="fas fa-bars _styles-module__toggler__2_oI1"/>
      }
    </span>
  )
};

export default Toggler;
