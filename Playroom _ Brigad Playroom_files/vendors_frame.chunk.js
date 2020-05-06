(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~frame"],{

/***/ "../../node_modules/invariant/browser.js":
/*!****************************************************!*\
  !*** /drone/src/node_modules/invariant/browser.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "../../node_modules/normalize.css/normalize.css":
/*!***********************************************************!*\
  !*** /drone/src/node_modules/normalize.css/normalize.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../../node_modules/playroom/node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/playroom/node_modules/less-loader/dist/cjs.js!../../node_modules/playroom/src/Playroom/CatchErrors/CatchErrors.less":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /drone/src/node_modules/playroom/node_modules/css-loader/dist/cjs.js??ref--6-1!/drone/src/node_modules/postcss-loader/src??ref--6-2!/drone/src/node_modules/playroom/node_modules/less-loader/dist/cjs.js!/drone/src/node_modules/playroom/src/Playroom/CatchErrors/CatchErrors.less ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/playroom/node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".CatchErrors__root--3x8L4 {\n  font: normal 16px Helvetica, arial, sans-serif;\n  color: red;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow: auto;\n  padding: 20px;\n}\n.CatchErrors__strong--1jA9Q {\n  font-weight: 700;\n}\n", ""]);
// Exports
exports.locals = {
	"root": "CatchErrors__root--3x8L4",
	"strong": "CatchErrors__strong--1jA9Q"
};
module.exports = exports;


/***/ }),

/***/ "../../node_modules/playroom/src/Playroom/CatchErrors/CatchErrors.js":
/*!********************************************************************************!*\
  !*** /drone/src/node_modules/playroom/src/Playroom/CatchErrors/CatchErrors.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CatchErrors; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CatchErrors_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CatchErrors.less */ "../../node_modules/playroom/src/Playroom/CatchErrors/CatchErrors.less");
/* harmony import */ var _CatchErrors_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CatchErrors_less__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var CatchErrors = /*#__PURE__*/function (_Component) {
  _inherits(CatchErrors, _Component);

  var _super = _createSuper(CatchErrors);

  function CatchErrors() {
    var _this;

    _classCallCheck(this, CatchErrors);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      error: null,
      invalidCode: null,
      info: null
    });

    return _this;
  }

  _createClass(CatchErrors, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      var code = this.props.code;
      this.setState({
        invalidCode: code,
        error: error,
        info: info
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          invalidCode = _this$state.invalidCode,
          error = _this$state.error,
          info = _this$state.info;
      var _this$props = this.props,
          code = _this$props.code,
          children = _this$props.children;

      if (code !== invalidCode) {
        return children;
      } // Ensure the stack only contains user-provided components


      var componentStack = info.componentStack.split('\n').filter(function (line) {
        return /RenderCode/.test(line);
      }).map(function (line) {
        return line.replace(/ \(created by .*/g, '');
      }); // Ignore the RenderCode container component

      var lines = componentStack.slice(0, componentStack.length - 1);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _CatchErrors_less__WEBPACK_IMPORTED_MODULE_2___default.a.root
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        className: _CatchErrors_less__WEBPACK_IMPORTED_MODULE_2___default.a.strong
      }, error.message), lines.map(function (line, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: i
        }, line);
      }));
    }
  }]);

  return CatchErrors;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(CatchErrors, "propTypes", {
  code: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
});



/***/ }),

/***/ "../../node_modules/playroom/src/Playroom/CatchErrors/CatchErrors.less":
/*!**********************************************************************************!*\
  !*** /drone/src/node_modules/playroom/src/Playroom/CatchErrors/CatchErrors.less ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/playroom/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../postcss-loader/src??ref--6-2!../../../node_modules/less-loader/dist/cjs.js!./CatchErrors.less */ "../../node_modules/playroom/node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/playroom/node_modules/less-loader/dist/cjs.js!../../node_modules/playroom/src/Playroom/CatchErrors/CatchErrors.less");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "../../node_modules/playroom/src/Playroom/Frame.js":
/*!**************************************************************!*\
  !*** /drone/src/node_modules/playroom/src/Playroom/Frame.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Frame; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_getParamsFromQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getParamsFromQuery */ "../../node_modules/playroom/src/utils/getParamsFromQuery.ts");
/* harmony import */ var _CatchErrors_CatchErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CatchErrors/CatchErrors */ "../../node_modules/playroom/src/Playroom/CatchErrors/CatchErrors.js");
/* harmony import */ var _RenderCode_RenderCode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RenderCode/RenderCode */ "../../node_modules/playroom/src/Playroom/RenderCode/RenderCode.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var Frame = /*#__PURE__*/function (_Component) {
  _inherits(Frame, _Component);

  var _super = _createSuper(Frame);

  function Frame(props) {
    var _this;

    _classCallCheck(this, Frame);

    _this = _super.call(this, props);

    var _getParamsFromQuery = Object(_utils_getParamsFromQuery__WEBPACK_IMPORTED_MODULE_1__["default"])(),
        themeName = _getParamsFromQuery.themeName,
        _getParamsFromQuery$c = _getParamsFromQuery.code,
        code = _getParamsFromQuery$c === void 0 ? '' : _getParamsFromQuery$c;

    _this.state = {
      themeName: themeName,
      code: code
    };
    return _this;
  }

  _createClass(Frame, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      window.addEventListener('hashchange', function () {
        var _getParamsFromQuery2 = Object(_utils_getParamsFromQuery__WEBPACK_IMPORTED_MODULE_1__["default"])(),
            themeName = _getParamsFromQuery2.themeName,
            code = _getParamsFromQuery2.code;

        if (themeName && code) {
          _this2.setState({
            themeName: themeName,
            code: code
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          themeName = _this$state.themeName,
          code = _this$state.code;
      var _this$props = this.props,
          themes = _this$props.themes,
          components = _this$props.components,
          FrameComponent = _this$props.FrameComponent;
      var resolvedThemeName = themeName === '__PLAYROOM__NO_THEME__' ? null : themeName;
      var resolvedTheme = resolvedThemeName ? themes[resolvedThemeName] : null;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CatchErrors_CatchErrors__WEBPACK_IMPORTED_MODULE_2__["default"], {
        code: code
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FrameComponent, {
        themeName: resolvedThemeName,
        theme: resolvedTheme
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RenderCode_RenderCode__WEBPACK_IMPORTED_MODULE_3__["default"], {
        code: code,
        scope: components
      })));
    }
  }]);

  return Frame;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "../../node_modules/playroom/src/Playroom/RenderCode/RenderCode.js":
/*!******************************************************************************!*\
  !*** /drone/src/node_modules/playroom/src/Playroom/RenderCode/RenderCode.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RenderCode; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var scope_eval__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! scope-eval */ "../../node_modules/scope-eval/scope_eval.js");
/* harmony import */ var scope_eval__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(scope_eval__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var RenderCode = /*#__PURE__*/function (_Component) {
  _inherits(RenderCode, _Component);

  var _super = _createSuper(RenderCode);

  function RenderCode(props) {
    var _this;

    _classCallCheck(this, RenderCode);

    _this = _super.call(this, props);
    _this.state = _this.props.initialState;
    return _this;
  }

  _createClass(RenderCode, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          code = _this$props.code,
          scope = _this$props.scope;
      var el = scope_eval__WEBPACK_IMPORTED_MODULE_2___default()(code, _objectSpread({}, scope, {
        React: react__WEBPACK_IMPORTED_MODULE_0___default.a,
        this: this
      }));
      return el;
    }
  }]);

  return RenderCode;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(RenderCode, "displayName", 'RenderCode');

_defineProperty(RenderCode, "propTypes", {
  code: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  scope: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  initialState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
});

_defineProperty(RenderCode, "defaultProps", {
  scope: {},
  initialState: {}
});



/***/ }),

/***/ "../../node_modules/playroom/src/frame.js":
/*!*****************************************************!*\
  !*** /drone/src/node_modules/playroom/src/frame.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Playroom_Frame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Playroom/Frame */ "../../node_modules/playroom/src/Playroom/Frame.js");



var outlet = document.createElement('div');
document.body.appendChild(outlet);

var renderFrame = function renderFrame() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$themes = _ref.themes,
      themes = _ref$themes === void 0 ? __webpack_require__(/*! ./themes */ "../../node_modules/playroom/src/themes.js") : _ref$themes,
      _ref$components = _ref.components,
      components = _ref$components === void 0 ? __webpack_require__(/*! ./components */ "../../node_modules/playroom/src/components.js") : _ref$components,
      _ref$FrameComponent = _ref.FrameComponent,
      FrameComponent = _ref$FrameComponent === void 0 ? __webpack_require__(/*! ./frameComponent */ "../../node_modules/playroom/src/frameComponent.js") : _ref$FrameComponent;

  Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Playroom_Frame__WEBPACK_IMPORTED_MODULE_2__["default"], {
    components: components,
    themes: themes,
    FrameComponent: FrameComponent
  }), outlet);
};

renderFrame();

if (false) {}

/***/ }),

/***/ "../../node_modules/playroom/src/frameComponent.js":
/*!**************************************************************!*\
  !*** /drone/src/node_modules/playroom/src/frameComponent.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable-next-line import/no-unresolved */
var frameComponent = __webpack_require__(/*! __PLAYROOM_ALIAS__FRAME_COMPONENT__ */ "./src/FrameComponent.tsx");

module.exports = frameComponent.default || frameComponent;

/***/ }),

/***/ "../../node_modules/react-helmet-async/lib/index.js":
/*!***************************************************************!*\
  !*** /drone/src/node_modules/react-helmet-async/lib/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var t=e(__webpack_require__(/*! react-fast-compare */ "../../node_modules/react-helmet-async/node_modules/react-fast-compare/index.js")),r=e(__webpack_require__(/*! invariant */ "../../node_modules/invariant/browser.js")),n=e(__webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js")),o=__webpack_require__(/*! react */ "../../node_modules/react/index.js"),i=e(o),a=e(__webpack_require__(/*! shallowequal */ "../../node_modules/shallowequal/index.js")),s={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title",FRAGMENT:"Symbol(react.fragment)"},c=Object.keys(s).map(function(e){return s[e]}),u={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},l=Object.keys(u).reduce(function(e,t){return e[u[t]]=t,e},{}),p=function(e,t){for(var r=e.length-1;r>=0;r-=1){var n=e[r];if(Object.prototype.hasOwnProperty.call(n,t))return n[t]}return null},d=function(e){var t=p(e,s.TITLE),r=p(e,"titleTemplate");if(Array.isArray(t)&&(t=t.join("")),r&&t)return r.replace(/%s/g,function(){return t});var n=p(e,"defaultTitle");return t||n||void 0},f=function(e){return p(e,"onChangeClientState")||function(){}},h=function(e,t){return t.filter(function(t){return void 0!==t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return Object.assign({},e,t)},{})},y=function(e,t){return t.filter(function(e){return void 0!==e[s.BASE]}).map(function(e){return e[s.BASE]}).reverse().reduce(function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o+=1){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t},[])},m=function(e,t,r){var n={};return r.filter(function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&console&&"function"==typeof console.warn&&console.warn("Helmet: "+e+' should be of type "Array". Instead found type "'+typeof t[e]+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,r){var o={};r.filter(function(e){for(var r,i=Object.keys(e),a=0;a<i.length;a+=1){var s=i[a],c=s.toLowerCase();-1===t.indexOf(c)||"rel"===r&&"canonical"===e[r].toLowerCase()||"rel"===c&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(s)||"innerHTML"!==s&&"cssText"!==s&&"itemprop"!==s||(r=s)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][u]&&(o[r][u]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var i=Object.keys(o),a=0;a<i.length;a+=1){var s=i[a],c=Object.assign({},n[s],o[s]);n[s]=c}return e},[]).reverse()},T=function(e){return Array.isArray(e)?e.join(""):e},b=[s.NOSCRIPT,s.SCRIPT,s.STYLE],g=function(e,t){return void 0===t&&(t=!0),!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},v=function(e){return Object.keys(e).reduce(function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n},"")},A=function(e,t){return void 0===t&&(t={}),Object.keys(e).reduce(function(t,r){return t[u[r]||r]=e[r],t},t)},C=function(e,t,r){switch(e){case s.TITLE:return{toComponent:function(){return r=A(t.titleAttributes,{key:e=t.title,"data-rh":!0}),[i.createElement(s.TITLE,r,e)];var e,r},toString:function(){return function(e,r,n,o){var i=v(t.titleAttributes),a=T(r);return i?"<"+e+' data-rh="true" '+i+">"+g(a,o)+"</"+e+">":"<"+e+' data-rh="true">'+g(a,o)+"</"+e+">"}(e,t.title,0,r)}};case"bodyAttributes":case"htmlAttributes":return{toComponent:function(){return A(t)},toString:function(){return v(t)}};default:return{toComponent:function(){return function(e,t){return t.map(function(t,r){var n={key:r,"data-rh":!0};return Object.keys(t).forEach(function(e){var r=u[e]||e;"innerHTML"===r||"cssText"===r?n.dangerouslySetInnerHTML={__html:t.innerHTML||t.cssText}:n[r]=t[e]}),i.createElement(e,n)})}(e,t)},toString:function(){return function(e,t,r){return t.reduce(function(t,n){var o=Object.keys(n).filter(function(e){return!("innerHTML"===e||"cssText"===e)}).reduce(function(e,t){var o=void 0===n[t]?t:t+'="'+g(n[t],r)+'"';return e?e+" "+o:o},""),i=n.innerHTML||n.cssText||"",a=-1===b.indexOf(e);return t+"<"+e+' data-rh="true" '+o+(a?"/>":">"+i+"</"+e+">")},"")}(e,t,r)}}}},O=function(e){var t=e.bodyAttributes,r=e.encode,n=e.htmlAttributes,o=e.linkTags,i=e.metaTags,a=e.noscriptTags,c=e.scriptTags,u=e.styleTags,l=e.title;void 0===l&&(l="");var p=e.titleAttributes;return{base:C(s.BASE,e.baseTag,r),bodyAttributes:C("bodyAttributes",t,r),htmlAttributes:C("htmlAttributes",n,r),link:C(s.LINK,o,r),meta:C(s.META,i,r),noscript:C(s.NOSCRIPT,a,r),script:C(s.SCRIPT,c,r),style:C(s.STYLE,u,r),title:C(s.TITLE,{title:l,titleAttributes:p},r)}},j=i.createContext({}),E=n.shape({setHelmet:n.func,helmetInstances:n.shape({get:n.func,add:n.func,remove:n.func})}),S="undefined"!=typeof document,I=function(e){function t(r){var n=this;e.call(this,r),this.instances=[],this.value={setHelmet:function(e){n.props.context.helmet=e},helmetInstances:{get:function(){return n.instances},add:function(e){n.instances.push(e)},remove:function(e){var t=n.instances.indexOf(e);n.instances.splice(t,1)}}},t.canUseDOM||(r.context.helmet=O({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.render=function(){return i.createElement(j.Provider,{value:this.value},this.props.children)},t}(o.Component);I.canUseDOM=S,I.propTypes={context:n.shape({helmet:n.shape()}),children:n.node.isRequired},I.defaultProps={context:{}},I.displayName="HelmetProvider";var P=function(e,t){var r,n=document.head||document.querySelector(s.HEAD),o=n.querySelectorAll(e+"[data-rh]"),i=[].slice.call(o),a=[];return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&("innerHTML"===o?n.innerHTML=t.innerHTML:"cssText"===o?n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText)):n.setAttribute(o,void 0===t[o]?"":t[o]));n.setAttribute("data-rh","true"),i.some(function(e,t){return r=t,n.isEqualNode(e)})?i.splice(r,1):a.push(n)}),i.forEach(function(e){return e.parentNode.removeChild(e)}),a.forEach(function(e){return n.appendChild(e)}),{oldTags:i,newTags:a}},x=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute("data-rh"),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),s=0;s<a.length;s+=1){var c=a[s],u=t[c]||"";r.getAttribute(c)!==u&&r.setAttribute(c,u),-1===o.indexOf(c)&&o.push(c);var l=i.indexOf(c);-1!==l&&i.splice(l,1)}for(var p=i.length-1;p>=0;p-=1)r.removeAttribute(i[p]);o.length===i.length?r.removeAttribute("data-rh"):r.getAttribute("data-rh")!==a.join(",")&&r.setAttribute("data-rh",a.join(","))}},L=function(e,t){var r=e.baseTag,n=e.htmlAttributes,o=e.linkTags,i=e.metaTags,a=e.noscriptTags,c=e.onChangeClientState,u=e.scriptTags,l=e.styleTags,p=e.title,d=e.titleAttributes;x(s.BODY,e.bodyAttributes),x(s.HTML,n),function(e,t){void 0!==e&&document.title!==e&&(document.title=T(e)),x(s.TITLE,t)}(p,d);var f={baseTag:P(s.BASE,r),linkTags:P(s.LINK,o),metaTags:P(s.META,i),noscriptTags:P(s.NOSCRIPT,a),scriptTags:P(s.SCRIPT,u),styleTags:P(s.STYLE,l)},h={},y={};Object.keys(f).forEach(function(e){var t=f[e],r=t.newTags,n=t.oldTags;r.length&&(h[e]=r),n.length&&(y[e]=f[e].oldTags)}),t&&t(),c(e,h,y)},w=null,H=function(e){function t(){for(var t=[],r=arguments.length;r--;)t[r]=arguments[r];e.apply(this,t),this.rendered=!1}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.shouldComponentUpdate=function(e){return!a(e,this.props)},t.prototype.componentDidUpdate=function(){this.emitChange()},t.prototype.componentWillUnmount=function(){this.props.context.helmetInstances.remove(this),this.emitChange()},t.prototype.emitChange=function(){var e,t,r=this.props.context,n=r.setHelmet,o=null,i=(e=r.helmetInstances.get().map(function(e){var t=Object.assign({},e.props);return delete t.context,t}),{baseTag:y(["href"],e),bodyAttributes:h("bodyAttributes",e),defer:p(e,"defer"),encode:p(e,"encodeSpecialCharacters"),htmlAttributes:h("htmlAttributes",e),linkTags:m(s.LINK,["rel","href"],e),metaTags:m(s.META,["name","charset","http-equiv","property","itemprop"],e),noscriptTags:m(s.NOSCRIPT,["innerHTML"],e),onChangeClientState:f(e),scriptTags:m(s.SCRIPT,["src","innerHTML"],e),styleTags:m(s.STYLE,["cssText"],e),title:d(e),titleAttributes:h("titleAttributes",e)});I.canUseDOM?(t=i,w&&cancelAnimationFrame(w),t.defer?w=requestAnimationFrame(function(){L(t,function(){w=null})}):(L(t),w=null)):O&&(o=O(i)),n(o)},t.prototype.init=function(){this.rendered||(this.rendered=!0,this.props.context.helmetInstances.add(this),this.emitChange())},t.prototype.render=function(){return this.init(),null},t}(o.Component);function k(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}H.propTypes={context:E.isRequired},H.displayName="HelmetDispatcher";var M=function(e){function n(){e.apply(this,arguments)}return e&&(n.__proto__=e),(n.prototype=Object.create(e&&e.prototype)).constructor=n,n.prototype.shouldComponentUpdate=function(e){return!t(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case s.SCRIPT:case s.NOSCRIPT:return{innerHTML:t};case s.STYLE:return{cssText:t};default:throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")}},n.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren;return Object.assign({},n,((t={})[r.type]=(n[r.type]||[]).concat([Object.assign({},e.newChildProps,this.mapNestedChildrenToProps(r,e.nestedChildren))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case s.TITLE:return Object.assign({},o,((t={})[n.type]=a,t),{titleAttributes:Object.assign({},i)});case s.BODY:return Object.assign({},o,{bodyAttributes:Object.assign({},i)});case s.HTML:return Object.assign({},o,{htmlAttributes:Object.assign({},i)});default:return Object.assign({},o,((r={})[n.type]=Object.assign({},i),r))}},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=Object.assign({},t);return Object.keys(e).forEach(function(t){var n;r=Object.assign({},r,((n={})[t]=e[t],n))}),r},n.prototype.warnOnInvalidChildren=function(e,t){return r(c.some(function(t){return e.type===t}),"function"==typeof e.type?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":"Only elements types "+c.join(", ")+" are allowed. Helmet does not support rendering <"+e.type+"> elements. Refer to our API for more information."),r(!t||"string"==typeof t||Array.isArray(t)&&!t.some(function(e){return"string"!=typeof e}),"Helmet expects a string as a child of <"+e.type+">. Did you forget to wrap your children in braces? ( <"+e.type+">{``}</"+e.type+"> ) Refer to our API for more information."),!0},n.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return i.Children.forEach(e,function(e){if(e&&e.props){var o=e.props,i=o.children,a=k(o,["children"]),c=Object.keys(a).reduce(function(e,t){return e[l[t]||t]=a[t],e},{}),u=e.type;switch("symbol"==typeof u?u=u.toString():r.warnOnInvalidChildren(e,i),u){case s.FRAGMENT:t=r.mapChildrenToProps(i,t);break;case s.LINK:case s.META:case s.NOSCRIPT:case s.SCRIPT:case s.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:c,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:i})}}}),this.mapArrayTypeChildrenToProps(n,t)},n.prototype.render=function(){var e=this.props,t=e.children,r=k(e,["children"]),n=Object.assign({},r);return t&&(n=this.mapChildrenToProps(t,n)),i.createElement(j.Consumer,null,function(e){return i.createElement(H,Object.assign({},n,{context:e}))})},n}(o.Component);M.propTypes={base:n.object,bodyAttributes:n.object,children:n.oneOfType([n.arrayOf(n.node),n.node]),defaultTitle:n.string,defer:n.bool,encodeSpecialCharacters:n.bool,htmlAttributes:n.object,link:n.arrayOf(n.object),meta:n.arrayOf(n.object),noscript:n.arrayOf(n.object),onChangeClientState:n.func,script:n.arrayOf(n.object),style:n.arrayOf(n.object),title:n.string,titleAttributes:n.object,titleTemplate:n.string},M.defaultProps={defer:!0,encodeSpecialCharacters:!0},M.displayName="Helmet",exports.Helmet=M,exports.HelmetProvider=I;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "../../node_modules/react-helmet-async/node_modules/react-fast-compare/index.js":
/*!*******************************************************************************************!*\
  !*** /drone/src/node_modules/react-helmet-async/node_modules/react-fast-compare/index.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */

var hasElementType = typeof Element !== 'undefined';
var hasMap = typeof Map === 'function';
var hasSet = typeof Set === 'function';
var hasArrayBuffer = typeof ArrayBuffer === 'function';

// Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js

function equal(a, b) {
  // START: fast-deep-equal es6/index.js 3.1.1
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    // START: Modifications:
    // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
    //    to co-exist with es5.
    // 2. Replace `for of` with es5 compliant iteration using `for`.
    //    Basically, take:
    //
    //    ```js
    //    for (i of a.entries())
    //      if (!b.has(i[0])) return false;
    //    ```
    //
    //    ... and convert to:
    //
    //    ```js
    //    it = a.entries();
    //    while (!(i = it.next()).done)
    //      if (!b.has(i.value[0])) return false;
    //    ```
    //
    //    **Note**: `i` access switches to `i.value`.
    var it;
    if (hasMap && (a instanceof Map) && (b instanceof Map)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!equal(i.value[1], b.get(i.value[0]))) return false;
      return true;
    }

    if (hasSet && (a instanceof Set) && (b instanceof Set)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      return true;
    }
    // END: Modifications

    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (a[i] !== b[i]) return false;
      return true;
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    // END: fast-deep-equal

    // START: react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element) return false;

    // custom handling for React
    for (i = length; i-- !== 0;) {
      if (keys[i] === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of a react element
        continue;
      }

      // all other properties should be traversed as usual
      if (!equal(a[keys[i]], b[keys[i]])) return false;
    }
    // END: react-fast-compare

    // START: fast-deep-equal
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

module.exports = function isEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if (((error.message || '').match(/stack|recursion/i))) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('react-fast-compare cannot handle circular refs');
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};


/***/ }),

/***/ "../../node_modules/scope-eval/scope_eval.js":
/*!********************************************************!*\
  !*** /drone/src/node_modules/scope-eval/scope_eval.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Generated by CoffeeScript 1.10.0
(function() {
  var hasProp = {}.hasOwnProperty,
    slice = [].slice;

  module.exports = function(source, scope) {
    var key, keys, value, values;
    keys = [];
    values = [];
    for (key in scope) {
      if (!hasProp.call(scope, key)) continue;
      value = scope[key];
      if (key === 'this') {
        continue;
      }
      keys.push(key);
      values.push(value);
    }
    return Function.apply(null, slice.call(keys).concat(["return eval(" + (JSON.stringify(source)) + ")"])).apply(scope["this"], values);
  };

}).call(this);


/***/ }),

/***/ "../../node_modules/shallowequal/index.js":
/*!*****************************************************!*\
  !*** /drone/src/node_modules/shallowequal/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ })

}]);