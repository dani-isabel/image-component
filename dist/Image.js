"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledImage = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    &.img {\n        max-height: 40%;\n        broder-radius: 10px;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Image = function Image(props) {
  var className = props.className,
      source = props.source;
  return /*#__PURE__*/_react.default.createElement("img", {
    className: className,
    src: source,
    alt: "profilePhoto"
  });
};

var StyledImage = (0, _styledComponents.default)(Image)(_templateObject());
exports.StyledImage = StyledImage;