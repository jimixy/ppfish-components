"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var BreadcrumbItem =
/** @class */
function (_super) {
  __extends(BreadcrumbItem, _super);

  function BreadcrumbItem() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  BreadcrumbItem.prototype.render = function () {
    var _a = this.props,
        prefixCls = _a.prefixCls,
        separator = _a.separator,
        children = _a.children,
        maxWidth = _a.maxWidth,
        restProps = __rest(_a, ["prefixCls", "separator", "children", "maxWidth"]);

    var link = null;

    if ('href' in this.props) {
      link = React.createElement("a", __assign({
        className: prefixCls + "-link",
        style: maxWidth != undefined ? {
          'maxWidth': maxWidth
        } : null
      }, restProps), children);
    } else {
      link = React.createElement("span", __assign({
        className: prefixCls + "-link",
        style: maxWidth != undefined ? {
          'maxWidth': maxWidth
        } : null
      }, restProps), children);
    }

    if (children) {
      return React.createElement("span", null, link, React.createElement("span", {
        className: prefixCls + "-separator"
      }, separator));
    }

    return null;
  };

  BreadcrumbItem.__FISHD_BREADCRUMB_ITEM = true;
  BreadcrumbItem.defaultProps = {
    prefixCls: 'fishd-breadcrumb',
    separator: '/'
  };
  BreadcrumbItem.propTypes = {
    prefixCls: _propTypes["default"].string,
    separator: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]),
    href: _propTypes["default"].string,
    maxWidth: _propTypes["default"].number
  };
  return BreadcrumbItem;
}(React.Component);

var _default = BreadcrumbItem;
exports["default"] = _default;