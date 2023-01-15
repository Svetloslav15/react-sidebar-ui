import React, { useState, useEffect } from 'react';

var colors = {
  black: 'bg-black',
  blue: 'bg-blue',
  light: 'bg-light',
  peach: 'bg-peach',
  purple: 'bg-purple',
  aqua: 'bg-aqua'
};

const Toggler = ({
  isCollapsed,
  toggleIsOpen,
  classes
}) => {
  return /*#__PURE__*/React.createElement("span", {
    onClick: () => toggleIsOpen(!isCollapsed),
    className: classes
  }, !isCollapsed ? /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times toggler"
  }) : /*#__PURE__*/React.createElement("i", {
    className: "fas fa-bars toggler"
  }));
};

const Sidebar = ({
  bgColor,
  children,
  isCollapsed,
  position: _position = 'left',
  classes
}) => {
  const [isOpen, toggleIsOpen] = useState(isCollapsed);
  const [prevIsCollapseFromParent, setParentCollapse] = useState(!isCollapsed);
  const color = colors[bgColor] || colors['white'];
  const [classCollapsed, setCollapsed] = useState('');
  useEffect(() => {
    const c = isOpen ? ` collapsed ` : '';
    setCollapsed(c);
    if (isCollapsed === prevIsCollapseFromParent) {
      toggleIsOpen(isCollapsed);
      setParentCollapse(!isCollapsed);
    }
  }, [isOpen, isCollapsed]);
  return /*#__PURE__*/React.createElement("div", {
    className: `container-wrapper ${color} ${classCollapsed} ${classes} pos-${_position}`
  }, /*#__PURE__*/React.createElement(Toggler, {
    isCollapsed: isOpen,
    toggleIsOpen: toggleIsOpen
  }), isOpen ? '' : children);
};

const Logo = ({
  image,
  imageName,
  classes
}) => {
  return /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageName,
    className: `logo-image ${classes}`
  });
};

const LogoText = ({
  children,
  classes
}) => {
  return /*#__PURE__*/React.createElement("h2", {
    className: classes
  }, children);
};

const DropdownItem = ({
  children,
  values,
  bgColor,
  classes
}) => {
  const [isOpen, toggleOpen] = useState(false);
  const items = values ? values.map((item, index) => /*#__PURE__*/React.createElement(Item$1, {
    bgColor: bgColor,
    key: index
  }, item)) : '';
  return /*#__PURE__*/React.createElement("div", {
    className: `dropdown-item ${classes}`
  }, /*#__PURE__*/React.createElement(Item$1, {
    bgColor: bgColor,
    onClick: () => toggleOpen(!isOpen)
  }, children, /*#__PURE__*/React.createElement("i", {
    className: "mx-1 fas fa-chevron-circle-down"
  })), /*#__PURE__*/React.createElement("div", null, isOpen && items));
};

const InputItem = ({
  type,
  placeholder,
  classes
}) => {
  return /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    className: classes
  });
};

var colorsHovered = {
  black: 'black-hover',
  blue: 'blue-hover',
  light: 'light-hover',
  peach: 'peach-hover',
  purple: 'purple-hover',
  aqua: 'aqua-hover'
};

const Item = ({
  bgColor,
  children,
  onClick,
  classes
}) => {
  const color = `${colorsHovered[bgColor]} ${colors[bgColor]}`;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    className: `item ${color} ${classes && classes}`
  }, children);
};

const Icon = ({
  children,
  styles,
  className
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: `icon ${className}`,
    style: {
      styles
    }
  }, children);
};

const Sidebar$1 = Sidebar;
const Logo$1 = Logo;
const LogoText$1 = LogoText;
const Item$1 = Item;
const Icon$1 = Icon;
const InputItem$1 = InputItem;
const DropdownItem$1 = DropdownItem;
const Toggler$1 = Toggler;

export { DropdownItem$1 as DropdownItem, Icon$1 as Icon, InputItem$1 as InputItem, Item$1 as Item, Logo$1 as Logo, LogoText$1 as LogoText, Sidebar$1 as Sidebar, Toggler$1 as Toggler };
//# sourceMappingURL=index.modern.js.map
