import React, {useEffect, useState} from 'react';
import {Item} from '../index';

const DropdownItem = ({children, values, bgColor}) => {
  const [isOpen, toggleOpen] = useState(false);

  const items = values ? values.map((item, index) => <Item bgColor={bgColor} key={index}>{item}</Item>) : '';
  return (
    <div className='_styles-module__item__VrCv _styles-module__dropdown-item__GubVm'>
      <Item bgColor={bgColor} onClick={() => toggleOpen(!isOpen)}>
        {children}
        <i className='_styles-module__mx-1__3ow2- fas fa-chevron-circle-down'/>
      </Item>
      <div>
        {
          isOpen ? items : ''
        }
      </div>
    </div>
  )
};

export default DropdownItem;
