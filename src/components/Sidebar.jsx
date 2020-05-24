import React, {useState, useEffect} from 'react';
import '../styles.module.css';
import colors from '../enums/colors';
import Toggler from './Toggler';

const Sidebar = ({bgColor, children, isCollapsed, classes}) => {
  const [isOpen, toggleIsOpen] = useState(isCollapsed);
  const color = colors[bgColor] || colors['white'];
  const [classCollapsed, setCollapsed] = useState('');

  useEffect(() => {
    const c = isOpen ? ` _2Q5t5 ` : '';
    setCollapsed(c);
  }, [isOpen]);
  return (
    <div className={`_13dNw ${color} ${classCollapsed} ${classes}`}>
      <Toggler isCollapsed={isOpen} toggleIsOpen={toggleIsOpen}/>
      {
        isOpen ? '' : children
      }
    </div>
  )
};

export default Sidebar;
