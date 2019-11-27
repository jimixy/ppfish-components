"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.cutStrByFullLength = exports.getStrFullLength = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _index = _interopRequireDefault(require("../Tooltip/index.js"));

var _resizeObserverPolyfill = _interopRequireDefault(require("resize-observer-polyfill"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint react/no-did-mount-set-state: 0 */

/* eslint no-param-reassign: 0 */
var isSupportLineClamp = document.body.style.webkitLineClamp !== undefined;
var TooltipOverlayStyle = {
  overflowWrap: 'break-word',
  wordWrap: 'break-word'
};

var getStrFullLength = function getStrFullLength() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return str.split('').reduce(function (pre, cur) {
    var charCode = cur.charCodeAt(0);

    if (charCode >= 0 && charCode <= 128) {
      return pre + 1;
    }

    return pre + 2;
  }, 0);
};

exports.getStrFullLength = getStrFullLength;

var cutStrByFullLength = function cutStrByFullLength() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var maxLength = arguments.length > 1 ? arguments[1] : undefined;
  var showLength = 0;
  return str.split('').reduce(function (pre, cur) {
    var charCode = cur.charCodeAt(0);

    if (charCode >= 0 && charCode <= 128) {
      showLength += 1;
    } else {
      showLength += 2;
    }

    if (showLength <= maxLength) {
      return pre + cur;
    }

    return pre;
  }, '');
};

exports.cutStrByFullLength = cutStrByFullLength;

var EllipsisText = function EllipsisText(_ref) {
  var text = _ref.text,
      length = _ref.length,
      tooltip = _ref.tooltip,
      fullWidthRecognition = _ref.fullWidthRecognition,
      tooltipProps = _ref.tooltipProps,
      other = _objectWithoutProperties(_ref, ["text", "length", "tooltip", "fullWidthRecognition", "tooltipProps"]);

  if (typeof text !== 'string') {
    throw new Error('Ellipsis children must be string.');
  }

  var textLength = fullWidthRecognition ? getStrFullLength(text) : text.length;

  if (textLength <= length || length < 0) {
    return _react["default"].createElement("span", other, text);
  }

  var tail = '...';
  var displayText;

  if (length - tail.length <= 0) {
    displayText = '';
  } else {
    displayText = fullWidthRecognition ? cutStrByFullLength(text, length) : text.slice(0, length);
  }

  if (tooltip) {
    return _react["default"].createElement(_index["default"], _extends({}, tooltipProps, {
      overlayStyle: TooltipOverlayStyle,
      title: text
    }), _react["default"].createElement("span", null, displayText, tail));
  }

  return _react["default"].createElement("span", other, displayText, tail);
};

EllipsisText.propTypes = {
  text: _propTypes["default"].string,
  length: _propTypes["default"].number,
  tooltip: _propTypes["default"].bool,
  fullWidthRecognition: _propTypes["default"].bool,
  tooltipProps: _propTypes["default"].object
};

var Ellipsis =
/*#__PURE__*/
function (_Component) {
  _inherits(Ellipsis, _Component);

  function Ellipsis() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Ellipsis);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Ellipsis)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      text: '',
      targetCount: 0,
      isEllipsisActive: false
    });

    _defineProperty(_assertThisInitialized(_this), "detectEllipsisActive", function (node) {
      _this.setState({
        isEllipsisActive: node.offsetHeight < node.scrollHeight || node.offsetWidth < node.scrollWidth
      });
    });

    _defineProperty(_assertThisInitialized(_this), "computeLine", function () {
      var lines = _this.props.lines;

      if (lines && !isSupportLineClamp) {
        var text = _this.shadowChildren.innerText || _this.shadowChildren.textContent;
        var lineHeight = parseInt(getComputedStyle(_this.root).lineHeight, 10);
        var targetHeight = lines * lineHeight;
        _this.content.style.height = "".concat(targetHeight, "px");
        var totalHeight = _this.shadowChildren.offsetHeight;
        var shadowNode = _this.shadow.firstChild;

        if (totalHeight <= targetHeight) {
          _this.setState({
            text: text,
            targetCount: text.length
          });

          return;
        } // bisection


        var len = text.length;
        var mid = Math.ceil(len / 2);

        var count = _this.bisection(targetHeight, mid, 0, len, text, shadowNode);

        _this.setState({
          text: text,
          targetCount: count
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "bisection", function (th, m, b, e, text, shadowNode) {
      var suffix = '...';
      var mid = m;
      var end = e;
      var begin = b;
      shadowNode.innerHTML = text.substring(0, mid) + suffix;
      var sh = shadowNode.offsetHeight;

      if (sh <= th) {
        shadowNode.innerHTML = text.substring(0, mid + 1) + suffix;
        sh = shadowNode.offsetHeight;

        if (sh > th || mid === begin) {
          return mid;
        }

        begin = mid;

        if (end - begin === 1) {
          mid = 1 + begin;
        } else {
          mid = Math.floor((end - begin) / 2) + begin;
        }

        return _this.bisection(th, mid, begin, end, text, shadowNode);
      }

      if (mid - 1 < 0) {
        return mid;
      }

      shadowNode.innerHTML = text.substring(0, mid - 1) + suffix;
      sh = shadowNode.offsetHeight;

      if (sh <= th) {
        return mid - 1;
      }

      end = mid;
      mid = Math.floor((end - begin) / 2) + begin;
      return _this.bisection(th, mid, begin, end, text, shadowNode);
    });

    _defineProperty(_assertThisInitialized(_this), "handleRoot", function (n) {
      _this.root = n;
    });

    _defineProperty(_assertThisInitialized(_this), "handleContent", function (n) {
      _this.content = n;
    });

    _defineProperty(_assertThisInitialized(_this), "handleNode", function (n) {
      _this.node = n;
    });

    _defineProperty(_assertThisInitialized(_this), "handleShadow", function (n) {
      _this.shadow = n;
    });

    _defineProperty(_assertThisInitialized(_this), "handleShadowChildren", function (n) {
      _this.shadowChildren = n;
    });

    return _this;
  }

  _createClass(Ellipsis, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.node) {
        this.computeLine();
      } // detect ellipsis active in width/lines mode


      if (this.props.width || this.props.lines) {
        var target;

        if (this.props.width) {
          target = this.widthNode;
        } else if (this.props.lines && isSupportLineClamp) {
          target = this.lineClampNode;
        } else {
          return;
        }

        this.detectEllipsisActive(target);
        this.resizeObserver = new _resizeObserverPolyfill["default"](function (entries) {
          entries.forEach(function (entry) {
            if (entry.target === target) {
              _this2.detectEllipsisActive(target);
            }
          });
        });
        this.resizeObserver.observe(target);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(perProps) {
      var _this$props = this.props,
          lines = _this$props.lines,
          children = _this$props.children;

      if (lines !== perProps.lines || children !== perProps.children) {
        this.computeLine();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.resizeObserver && this.resizeObserver.disconnect();
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames,
          _this3 = this;

      var _this$state = this.state,
          text = _this$state.text,
          targetCount = _this$state.targetCount,
          isEllipsisActive = _this$state.isEllipsisActive;

      var _this$props2 = this.props,
          children = _this$props2.children,
          lines = _this$props2.lines,
          length = _this$props2.length,
          width = _this$props2.width,
          className = _this$props2.className,
          tooltip = _this$props2.tooltip,
          style = _this$props2.style,
          fullWidthRecognition = _this$props2.fullWidthRecognition,
          prefix = _this$props2.prefix,
          tooltipProps = _this$props2.tooltipProps,
          restProps = _objectWithoutProperties(_this$props2, ["children", "lines", "length", "width", "className", "tooltip", "style", "fullWidthRecognition", "prefix", "tooltipProps"]);

      var cls = (0, _classnames["default"])("".concat(prefix, "-ellipsis"), className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "-width-mode"), width), _defineProperty(_classNames, "".concat(prefix, "-line"), lines && !isSupportLineClamp), _defineProperty(_classNames, "".concat(prefix, "-lineClamp"), lines && isSupportLineClamp), _classNames)); // 一种限制都没有返回原值

      if (!lines && !length && !width) {
        return _react["default"].createElement("span", _extends({
          className: cls
        }, restProps), children);
      } // 宽度限制


      if (width) {
        var node = _react["default"].createElement("span", _extends({
          ref: function ref(node) {
            return _this3.widthNode = node;
          },
          className: cls
        }, restProps, {
          style: _objectSpread({}, style, {
            maxWidth: width
          })
        }), children);

        return tooltip ? _react["default"].createElement(_index["default"], _extends({}, tooltipProps, {
          overlayStyle: TooltipOverlayStyle,
          title: isEllipsisActive ? children : null
        }), node) : node;
      } // 字数限制


      if (length) {
        return _react["default"].createElement(EllipsisText, _extends({
          className: cls,
          tooltipProps: tooltipProps,
          length: length,
          text: children || '',
          tooltip: tooltip,
          fullWidthRecognition: fullWidthRecognition
        }, restProps));
      } //行数限制


      var id = "fishd-ellipsis-".concat("".concat(new Date().getTime()).concat(Math.floor(Math.random() * 100))); // support document.body.style.webkitLineClamp

      if (isSupportLineClamp) {
        var _style = "#".concat(id, "{-webkit-line-clamp:").concat(lines, ";-webkit-box-orient: vertical;}");

        var _node = _react["default"].createElement("div", _extends({
          ref: function ref(node) {
            return _this3.lineClampNode = node;
          },
          id: id,
          className: cls
        }, restProps), _react["default"].createElement("style", null, _style), children);

        return tooltip ? _react["default"].createElement(_index["default"], _extends({}, tooltipProps, {
          overlayStyle: TooltipOverlayStyle,
          title: isEllipsisActive ? children : null
        }), _node) : _node;
      }

      var childNode = _react["default"].createElement("span", {
        ref: this.handleNode
      }, targetCount > 0 && text.substring(0, targetCount), targetCount > 0 && targetCount < text.length && '...');

      return _react["default"].createElement("div", _extends({}, restProps, {
        ref: this.handleRoot,
        className: cls
      }), _react["default"].createElement("div", {
        ref: this.handleContent
      }, tooltip ? _react["default"].createElement(_index["default"], {
        overlayStyle: TooltipOverlayStyle,
        title: text
      }, childNode) : childNode, _react["default"].createElement("div", {
        className: "".concat(prefix, "-shadow"),
        ref: this.handleShadowChildren
      }, children), _react["default"].createElement("div", {
        className: "".concat(prefix, "-shadow"),
        ref: this.handleShadow
      }, _react["default"].createElement("span", null, text))));
    }
  }]);

  return Ellipsis;
}(_react.Component);

exports["default"] = Ellipsis;

_defineProperty(Ellipsis, "defaultProps", {
  prefix: 'fishd-ellipsis',
  fullWidthRecognition: false,
  tooltip: true,
  tooltipProps: {}
});

_defineProperty(Ellipsis, "propTypes", {
  prefix: _propTypes["default"].string,
  lines: _propTypes["default"].number,
  width: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  length: _propTypes["default"].number,
  tooltip: _propTypes["default"].bool,
  tooltipProps: _propTypes["default"].object,
  fullWidthRecognition: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  children: _propTypes["default"].node
});