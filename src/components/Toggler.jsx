import React from 'react';

const Toggler = ({isCollapsed, toggleIsOpen}) => {
  return (
    <span onClick={() => toggleIsOpen(!isCollapsed)}>
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
