function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var colors = {
  black: '_styles-module__bg-black__2Ll57',
  blue: '_styles-module__bg-blue__26ojv',
  light: '_styles-module__bg-light__36YqV',
  peach: '_styles-module__bg-peach__1vjRi',
  purple: '_styles-module__bg-purple__1tllo',
  aqua: '_styles-module__bg-aqua__2maJj'
};

var Toggler = function Toggler(_ref) {
  var isCollapsed = _ref.isCollapsed,
      toggleIsOpen = _ref.toggleIsOpen,
      classes = _ref.classes;
  return /*#__PURE__*/React__default.createElement("span", {
    onClick: function onClick() {
      return toggleIsOpen(!isCollapsed);
    },
    className: classes
  }, !isCollapsed ? /*#__PURE__*/React__default.createElement("i", {
    className: "fas fa-times _styles-module__toggler__2_oI1"
  }) : /*#__PURE__*/React__default.createElement("i", {
    className: "fas fa-bars _styles-module__toggler__2_oI1"
  }));
};

var Sidebar = function Sidebar(_ref) {
  var bgColor = _ref.bgColor,
      children = _ref.children,
      isCollapsed = _ref.isCollapsed,
      classes = _ref.classes;

  var _useState = React.useState(isCollapsed),
      isOpen = _useState[0],
      toggleIsOpen = _useState[1];

  var color = colors[bgColor] || colors['white'];

  var _useState2 = React.useState(''),
      classCollapsed = _useState2[0],
      setCollapsed = _useState2[1];

  React.useEffect(function () {
    var c = isOpen ? " _styles-module__collapsed__2Q5t5 " : '';
    setCollapsed(c);
  }, [isOpen]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: "_styles-module__container-wrapper__13dNw " + color + " " + classCollapsed + " " + classes
  }, /*#__PURE__*/React__default.createElement(Toggler, {
    isCollapsed: isOpen,
    toggleIsOpen: toggleIsOpen
  }), isOpen ? '' : children);
};

var Logo = function Logo(_ref) {
  var image = _ref.image,
      imageName = _ref.imageName,
      classes = _ref.classes;
  return /*#__PURE__*/React__default.createElement("img", {
    src: image,
    alt: imageName,
    className: "_styles-module__logo-image__3qnVN " + classes
  });
};

var LogoText = function LogoText(_ref) {
  var children = _ref.children,
      classes = _ref.classes;
  return /*#__PURE__*/React__default.createElement("h2", {
    className: classes
  }, children);
};

var DropdownItem = function DropdownItem(_ref) {
  var children = _ref.children,
      values = _ref.values,
      bgColor = _ref.bgColor,
      classes = _ref.classes;

  var _useState = React.useState(false),
      isOpen = _useState[0],
      toggleOpen = _useState[1];

  var items = values ? values.map(function (item, index) {
    return /*#__PURE__*/React__default.createElement(Item$1, {
      bgColor: bgColor,
      key: index
    }, item);
  }) : '';
  return /*#__PURE__*/React__default.createElement("div", {
    className: '_styles-module__item__VrCv _styles-module__dropdown-item__GubVm ' + classes
  }, /*#__PURE__*/React__default.createElement(Item$1, {
    bgColor: bgColor,
    onClick: function onClick() {
      return toggleOpen(!isOpen);
    }
  }, children, /*#__PURE__*/React__default.createElement("i", {
    className: "_styles-module__mx-1__3ow2- fas fa-chevron-circle-down"
  })), /*#__PURE__*/React__default.createElement("div", null, isOpen ? items : ''));
};

var InputItem = function InputItem(_ref) {
  var type = _ref.type,
      placeholder = _ref.placeholder,
      classes = _ref.classes;
  return /*#__PURE__*/React__default.createElement("input", {
    type: type,
    placeholder: placeholder,
    className: classes
  });
};

var colorsHovered = {
  black: '_styles-module__black-hover__3HbC6',
  blue: '_styles-module__blue-hover__2nNpb',
  light: '_styles-module__light-hover__8tJF8',
  peach: '_styles-module__bg-peach-hover__2PHvo',
  purple: '_styles-module__bg-purple-hover__lbp0_',
  aqua: '_styles-module__bg-aqua-hover__1NfpZ'
};

var Item = function Item(_ref) {
  var bgColor = _ref.bgColor,
      children = _ref.children,
      onClick = _ref.onClick,
      classes = _ref.classes;
  var color = colorsHovered[bgColor] + " " + colors[bgColor];
  return /*#__PURE__*/React__default.createElement("div", {
    onClick: onClick,
    className: "_styles-module__item__VrCvP " + color + " " + classes
  }, children);
};

var Icon = function Icon(_ref) {
  var children = _ref.children,
      styles = _ref.styles,
      classes = _ref.classes;
  return /*#__PURE__*/React__default.createElement("div", {
    className: '_styles-module__icon__2Vept ' + classes,
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

exports.DropdownItem = DropdownItem$1;
exports.Icon = Icon$1;
exports.InputItem = InputItem$1;
exports.Item = Item$1;
exports.Logo = Logo$1;
exports.LogoText = LogoText$1;
exports.Sidebar = Sidebar$1;
exports.Toggler = Toggler$1;
//# sourceMappingURL=index.js.map
