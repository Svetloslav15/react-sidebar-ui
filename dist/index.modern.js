import React, { useState, useEffect } from 'react';

var colors = {
  black: '_2Ll57',
  blue: '_26ojv',
  light: '_36YqV',
  peach: '_1vjRi',
  purple: '_1tllo',
  aqua: '_2maJj'
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
    className: "fas fa-times _2_oI1"
  }) : /*#__PURE__*/React.createElement("i", {
    className: "fas fa-bars _2_oI1"
  }));
};

const Sidebar = ({
  bgColor,
  children,
  isCollapsed,
  classes
}) => {
  const [isOpen, toggleIsOpen] = useState(isCollapsed);
  const color = colors[bgColor] || colors['white'];
  const [classCollapsed, setCollapsed] = useState('');
  useEffect(() => {
    const c = isOpen ? ` _2Q5t5 ` : '';
    setCollapsed(c);
  }, [isOpen]);
  return /*#__PURE__*/React.createElement("div", {
    className: `_13dNw ${color} ${classCollapsed} ${classes}`
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
    className: `_3qnVN ${classes}`
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
    className: '_VrCv _GubVm ' + classes
  }, /*#__PURE__*/React.createElement(Item$1, {
    bgColor: bgColor,
    onClick: () => toggleOpen(!isOpen)
  }, children, /*#__PURE__*/React.createElement("i", {
    className: "_3ow2- fas fa-chevron-circle-down"
  })), /*#__PURE__*/React.createElement("div", null, isOpen ? items : ''));
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
  black: '_3HbC6',
  blue: '_2nNpb',
  light: '_8tJF8',
  peach: '_2PHvo',
  purple: '_lbp0_',
  aqua: '_1NfpZ'
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
    className: `_VrCvP ${color} ${classes}`
  }, children);
};

const Icon = ({
  children,
  styles,
  classes
}) => {
  return /*#__PURE__*/React.createElement("i", {
    className: '_2Vept ' + classes,
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
