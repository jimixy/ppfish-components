"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _request = _interopRequireDefault(require("./request"));

var _uid = _interopRequireDefault(require("./uid"));

var _attrAccept = _interopRequireDefault(require("./attr-accept"));

var _traverseFileTree = _interopRequireDefault(require("./traverseFileTree"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AjaxUploader =
/*#__PURE__*/
function (_Component) {
  _inherits(AjaxUploader, _Component);

  function AjaxUploader() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AjaxUploader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AjaxUploader)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      uid: (0, _uid["default"])()
    });

    _defineProperty(_assertThisInitialized(_this), "reqs", {});

    _defineProperty(_assertThisInitialized(_this), "onChange", function (e) {
      var files = e.target.files;

      _this.uploadFiles(files);

      _this.reset();
    });

    _defineProperty(_assertThisInitialized(_this), "onClick", function () {
      var el = _this.fileInput;

      if (!el) {
        return;
      }

      el.click();
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (e) {
      if (e.key === 'Enter') {
        _this.onClick();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onFileDrop", function (e) {
      e.preventDefault();

      if (e.type === 'dragover') {
        return;
      }

      if (_this.props.directory) {
        (0, _traverseFileTree["default"])(e.dataTransfer.items, _this.uploadFiles, function (_file) {
          return (0, _attrAccept["default"])(_file, _this.props.accept);
        });
      } else {
        var files = Array.prototype.slice.call(e.dataTransfer.files).filter(function (file) {
          return (0, _attrAccept["default"])(file, _this.props.accept);
        });

        _this.uploadFiles(files);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "uploadFiles", function (files) {
      var postFiles = Array.prototype.slice.call(files);
      postFiles.forEach(function (file) {
        file.uid = (0, _uid["default"])();

        _this.upload(file, postFiles);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "saveFileInput", function (node) {
      _this.fileInput = node;
    });

    return _this;
  }

  _createClass(AjaxUploader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
      this.abort();
    }
  }, {
    key: "upload",
    value: function upload(file, fileList) {
      var _this2 = this;

      var props = this.props;

      if (!props.beforeUpload) {
        // always async in case use react state to keep fileList
        return setTimeout(function () {
          return _this2.post(file);
        }, 0);
      }

      var before = props.beforeUpload(file, fileList);

      if (before && before.then) {
        before.then(function (processedFile) {
          var processedFileType = Object.prototype.toString.call(processedFile);

          if (processedFileType === '[object File]' || processedFileType === '[object Blob]') {
            return _this2.post(processedFile);
          }

          return _this2.post(file);
        })["catch"](function (e) {
          console && console.log(e); // eslint-disable-line
        });
      } else if (before !== false) {
        setTimeout(function () {
          return _this2.post(file);
        }, 0);
      }
    }
  }, {
    key: "post",
    value: function post(file) {
      var _this3 = this;

      if (!this._isMounted) {
        return;
      }

      var props = this.props;
      var data = props.data;
      var onStart = props.onStart,
          onProgress = props.onProgress;

      if (typeof data === 'function') {
        data = data(file);
      }

      new Promise(function (resolve) {
        var action = props.action;

        if (typeof action === 'function') {
          return resolve(action(file));
        }

        resolve(action);
      }).then(function (action) {
        var uid = file.uid;
        var request = props.customRequest || _request["default"];
        _this3.reqs[uid] = request({
          action: action,
          filename: props.name,
          file: file,
          data: data,
          headers: props.headers,
          withCredentials: props.withCredentials,
          onProgress: onProgress ? function (e) {
            onProgress(e, file);
          } : null,
          onSuccess: function onSuccess(ret, xhr) {
            delete _this3.reqs[uid];
            props.onSuccess(ret, file, xhr);
          },
          onError: function onError(err, ret) {
            delete _this3.reqs[uid];
            props.onError(err, ret, file);
          }
        });
        onStart(file);
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.setState({
        uid: (0, _uid["default"])()
      });
    }
  }, {
    key: "abort",
    value: function abort(file) {
      var reqs = this.reqs;

      if (file) {
        var uid = file;

        if (file && file.uid) {
          uid = file.uid;
        }

        if (reqs[uid]) {
          reqs[uid].abort();
          delete reqs[uid];
        }
      } else {
        Object.keys(reqs).forEach(function (uid) {
          if (reqs[uid]) {
            reqs[uid].abort();
          }

          delete reqs[uid];
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          Tag = _this$props.component,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          disabled = _this$props.disabled,
          style = _this$props.style,
          multiple = _this$props.multiple,
          accept = _this$props.accept,
          children = _this$props.children,
          directory = _this$props.directory;
      var cls = (0, _classnames["default"])((_classNames = {}, _defineProperty(_classNames, prefixCls, true), _defineProperty(_classNames, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_classNames, className, className), _classNames));
      var events = disabled ? {} : {
        onClick: this.onClick,
        onKeyDown: this.onKeyDown,
        onDrop: this.onFileDrop,
        onDragOver: this.onFileDrop,
        tabIndex: '0'
      };
      return _react["default"].createElement(Tag, _extends({}, events, {
        className: cls,
        role: "button",
        style: style
      }), _react["default"].createElement("input", {
        type: "file",
        ref: this.saveFileInput,
        key: this.state.uid,
        style: {
          display: 'none'
        },
        accept: accept,
        directory: directory ? 'directory' : null,
        webkitdirectory: directory ? 'webkitdirectory' : null,
        multiple: multiple,
        onChange: this.onChange
      }), children);
    }
  }]);

  return AjaxUploader;
}(_react.Component);

_defineProperty(AjaxUploader, "propTypes", {
  component: _propTypes["default"].string,
  style: _propTypes["default"].object,
  prefixCls: _propTypes["default"].string,
  className: _propTypes["default"].string,
  multiple: _propTypes["default"].bool,
  directory: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  accept: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].array]),
  children: _propTypes["default"].node,
  onStart: _propTypes["default"].func,
  data: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].func]),
  action: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  headers: _propTypes["default"].object,
  beforeUpload: _propTypes["default"].func,
  customRequest: _propTypes["default"].func,
  onProgress: _propTypes["default"].func,
  withCredentials: _propTypes["default"].bool
});

var _default = AjaxUploader;
exports["default"] = _default;