import React, { useState } from 'react';
import { Item } from '../index';

const DropdownItem = ({ children, values, bgColor, classes }) => {
  const [isOpen, toggleOpen] = useState(false)

  const items = values ? values.map((item, index) => <Item bgColor={bgColor} key={index}>{item}</Item>) : '';

  return (
    <div className={`dropdown-item ${classes}`}>
      <Item
        bgColor={bgColor}
        onClick={() => toggleOpen(!isOpen)}>
        {children}
        <i className='mx-1 fas fa-chevron-circle-down' />
      </Item>
      <div>
        {
          isOpen && items
        }
      </div>
    </div>
  )
}

export default DropdownItem
