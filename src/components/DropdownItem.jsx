import React, {useState} from 'react';
import {Item} from '../index';
import colors from '../enums/colors';
import colorsHovered from '../enums/colors-hovered';

const DropdownItem = ({children, values, bgColor}) => {
  const [isOpen, setToggleOpen] = useState(false);

  const items = values ? values.map(item => <Item bgColor={bgColor}>{item}</Item>) : '';
  return (
    <div className='_styles-module__item__VrCv _styles-module__dropdown-item__GubVm'>
      <Item bgColor={bgColor} onClick={() => setToggleOpen(!isOpen)}>
        {children}
        <i className="_styles-module__mx-1__3ow2- fas fa-chevron-circle-down"/>
      </Item>
      <div
        className={!isOpen ? '_styles-module__d-none__2fnX0' : '_styles-module__d-block__-s3Rh _styles-module__slide-animation__25s7k'}>
        {items}
      </div>
    </div>
  )
};

export default DropdownItem;
