import React, { useState, useEffect } from 'react';

var colors = {
  black: 'bg-black',
  blue: 'bg-blue',
  light: 'bg-light',
  peach: 'bg-peach',
  purple: 'bg-purple',
  aqua: 'bg-aqua'
};

var Toggler = function Toggler(_ref) {
  var isCollapsed = _ref.isCollapsed,
    toggleIsOpen = _ref.toggleIsOpen,
    classes = _ref.classes;
  return /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return toggleIsOpen(!isCollapsed);
    },
    className: classes
  }, !isCollapsed ? /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times toggler"
  }) : /*#__PURE__*/React.createElement("i", {
    className: "fas fa-bars toggler"
  }));
};

var Sidebar = function Sidebar(_ref) {
  var bgColor = _ref.bgColor,
    children = _ref.children,
    isCollapsed = _ref.isCollapsed,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? 'left' : _ref$position,
    classes = _ref.classes;
  var _useState = useState(isCollapsed),
    isOpen = _useState[0],
    toggleIsOpen = _useState[1];
  var _useState2 = useState(!isCollapsed),
    prevIsCollapseFromParent = _useState2[0],
    setParentCollapse = _useState2[1];
  var color = colors[bgColor] || colors['white'];
  var _useState3 = useState(''),
    classCollapsed = _useState3[0],
    setCollapsed = _useState3[1];
  useEffect(function () {
    var c = isOpen ? " collapsed " : '';
    setCollapsed(c);
    if (isCollapsed === prevIsCollapseFromParent) {
      toggleIsOpen(isCollapsed);
      setParentCollapse(!isCollapsed);
    }
  }, [isOpen, isCollapsed]);
  return /*#__PURE__*/React.createElement("div", {
    className: "container-wrapper " + color + " " + classCollapsed + " " + classes + " pos-" + position
  }, /*#__PURE__*/React.createElement(Toggler, {
    isCollapsed: isOpen,
    toggleIsOpen: toggleIsOpen
  }), isOpen ? '' : children);
};

var Logo = function Logo(_ref) {
  var image = _ref.image,
    imageName = _ref.imageName,
    classes = _ref.classes;
  return /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageName,
    className: "logo-image " + classes
  });
};

var LogoText = function LogoText(_ref) {
  var children = _ref.children,
    classes = _ref.classes;
  return /*#__PURE__*/React.createElement("h2", {
    className: classes
  }, children);
};

var DropdownItem = function DropdownItem(_ref) {
  var children = _ref.children,
    values = _ref.values,
    bgColor = _ref.bgColor,
    classes = _ref.classes;
  var _useState = useState(false),
    isOpen = _useState[0],
    toggleOpen = _useState[1];
  var items = values ? values.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Item$1, {
      bgColor: bgColor,
      key: index
    }, item);
  }) : '';
  return /*#__PURE__*/React.createElement("div", {
    className: "dropdown-item " + classes
  }, /*#__PURE__*/React.createElement(Item$1, {
    bgColor: bgColor,
    onClick: function onClick() {
      return toggleOpen(!isOpen);
    }
  }, children, /*#__PURE__*/React.createElement("i", {
    className: "mx-1 fas fa-chevron-circle-down"
  })), /*#__PURE__*/React.createElement("div", null, isOpen && items));
};

var InputItem = function InputItem(_ref) {
  var type = _ref.type,
    placeholder = _ref.placeholder,
    classes = _ref.classes;
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

var Item = function Item(_ref) {
  var bgColor = _ref.bgColor,
    children = _ref.children,
    onClick = _ref.onClick,
    classes = _ref.classes;
  var color = colorsHovered[bgColor] + " " + colors[bgColor];
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    className: "item " + color + " " + (classes && classes)
  }, children);
};

var Icon = function Icon(_ref) {
  var children = _ref.children,
    styles = _ref.styles,
    className = _ref.className;
  return /*#__PURE__*/React.createElement("div", {
    className: "icon " + className,
    style: {
      styles: styles
    }
  }, children);
};

var Sidebar$1 = Sidebar;
var Logo$1 = Logo;
var LogoText$1 = LogoText;
var Item$1 = Item;
var Icon$1 = Icon;
var InputItem$1 = InputItem;
var DropdownItem$1 = DropdownItem;
var Toggler$1 = Toggler;

export { DropdownItem$1 as DropdownItem, Icon$1 as Icon, InputItem$1 as InputItem, Item$1 as Item, Logo$1 as Logo, LogoText$1 as LogoText, Sidebar$1 as Sidebar, Toggler$1 as Toggler };
//# sourceMappingURL=index.modern.js.map
