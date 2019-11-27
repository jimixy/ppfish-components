function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { BAR_MAP, renderThumbStyle } from './util';
import { on, off } from '../libs/utils/dom';
export var Bar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Bar, _React$Component);

  function Bar(props) {
    var _this;

    _classCallCheck(this, Bar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Bar).call(this, props));
    _this.clickTrackHandler = _this.clickTrackHandler.bind(_assertThisInitialized(_this));
    _this.clickThumbHandler = _this.clickThumbHandler.bind(_assertThisInitialized(_this));
    _this.mouseMoveDocumentHandler = _this.mouseMoveDocumentHandler.bind(_assertThisInitialized(_this));
    _this.mouseUpDocumentHandler = _this.mouseUpDocumentHandler.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Bar, [{
    key: "clickThumbHandler",
    value: function clickThumbHandler(e) {
      this.startDrag(e);
      this[this.bar.axis] = e.currentTarget[this.bar.offset] - (e[this.bar.client] - e.currentTarget.getBoundingClientRect()[this.bar.direction]);
    }
  }, {
    key: "clickTrackHandler",
    value: function clickTrackHandler(e) {
      var offset = Math.abs(e.target.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]);
      var thumbHalf = this.thumbRef[this.bar.offset] / 2;
      var thumbPositionPercentage = (offset - thumbHalf) * 100 / this.rootRef[this.bar.offset];
      this.wrap[this.bar.scroll] = thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100;
    }
  }, {
    key: "startDrag",
    value: function startDrag(e) {
      e.nativeEvent.stopImmediatePropagation;
      this.cursorDown = true;
      on(document, 'mousemove', this.mouseMoveDocumentHandler);
      on(document, 'mouseup', this.mouseUpDocumentHandler);

      document.onselectstart = function () {
        return false;
      };
    }
  }, {
    key: "mouseMoveDocumentHandler",
    value: function mouseMoveDocumentHandler(e) {
      if (this.cursorDown === false) return;
      var prevPage = this[this.bar.axis];
      if (!prevPage) return;
      var offset = e[this.bar.client] - this.rootRef.getBoundingClientRect()[this.bar.direction];
      var thumbClickPosition = this.thumbRef[this.bar.offset] - prevPage;
      var thumbPositionPercentage = (offset - thumbClickPosition) * 100 / this.rootRef[this.bar.offset];
      this.wrap[this.bar.scroll] = thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100;
    }
  }, {
    key: "mouseUpDocumentHandler",
    value: function mouseUpDocumentHandler() {
      this.cursorDown = false;
      this[this.bar.axis] = 0;
      off(document, 'mousemove', this.mouseMoveDocumentHandler);
      document.onselectstart = null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          size = _this$props.size,
          move = _this$props.move,
          prefixCls = _this$props.prefixCls;
      return React.createElement("div", {
        ref: function ref(root) {
          return _this2.rootRef = root;
        },
        className: classNames("".concat(prefixCls, "-scrollbar__bar"), "is-".concat(this.bar.key)),
        onMouseDown: this.clickTrackHandler
      }, React.createElement("div", {
        ref: function ref(thumb) {
          return _this2.thumbRef = thumb;
        },
        className: "".concat(prefixCls, "-scrollbar__thumb"),
        onMouseDown: this.clickThumbHandler,
        style: renderThumbStyle({
          size: size,
          move: move,
          bar: this.bar
        })
      }));
    }
  }, {
    key: "bar",
    get: function get() {
      return BAR_MAP[this.props.vertical ? 'vertical' : 'horizontal'];
    }
  }, {
    key: "wrap",
    get: function get() {
      return this.props.getParentWrap();
    }
  }]);

  return Bar;
}(React.Component);
Bar.propTypes = {
  vertical: PropTypes.bool,
  size: PropTypes.string,
  move: PropTypes.number,
  getParentWrap: PropTypes.func.isRequired,
  prefixCls: PropTypes.string
};
Bar.defaultProps = {
  prefixCls: 'fishd'
};