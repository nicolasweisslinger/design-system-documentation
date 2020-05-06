(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"],{

/***/ "./src/snippets/controls.ts":
/*!**********************************!*\
  !*** ./src/snippets/controls.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  group: 'Button',
  name: '',
  code: "\n    <Button\n      color=\"primary-normal\"\n    >\n      Hello\n    </Button>\n    "
}, {
  group: 'MiniButton',
  name: '',
  code: "\n    <MiniButton color=\"primary-normal\" icon=\"zap\">\n      I'm a minibutton\n    </MiniButton>\n    "
}, {
  group: 'RadioGroup',
  name: '',
  code: "\n    <RadioGroup>\n      <Radio label=\"Option 1\" subText=\"You should maybe choose this option\" />\n      <Radio label=\"Option 2\" subText=\"But you can also choose this one\" />\n      <Radio label=\"Option 3\" subText=\"Definitely not this one\" />\n    </RadioGroup>\n    "
}, {
  group: 'Checkbox',
  name: '',
  code: "\n    <Checkbox label=\"Click me please!\" subText=\"Unless you don't wanna\" />\n    "
}, {
  group: 'Switch',
  name: '',
  code: "\n    <Switch />\n    "
}]);

/***/ }),

/***/ "./src/snippets/displays.ts":
/*!**********************************!*\
  !*** ./src/snippets/displays.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  group: 'PolyMessage',
  name: '',
  code: "\n    <PolyMessage type=\"danger\">\n      I'm a PolyMessage. You can change my type.\n    </PolyMessage>\n\n    "
}, {
  group: 'Tag',
  name: '',
  code: "\n    <Tag color=\"typo-on-dark-high\" backgroundColor=\"background-b-1\">\n      I'm a Tag!\n    </Tag>\n    "
}, {
  group: 'MiniTag',
  name: '',
  code: "\n    <MiniTag\n      color=\"typo-on-dark-high\"\n      backgroundColor=\"background-b-1\"\n      icon=\"warning\"\n    >\n      I'm a MiniTag!\n    </MiniTag>\n    "
}, {
  group: 'Icon',
  name: '',
  code: "\n    <Icon color=\"primary-normal\" size=\"24\" name=\"zap\" />\n    "
}, {
  group: 'Table',
  name: '',
  code: "\n    <Table\n      columns={[\n        {\n          title: \"Name\",\n          render: users => <BodyNormal>{users.firstName}</BodyNormal>,\n          minWidth: 180\n        },\n        {\n          title: \"Creation Date\",\n          render: users => <BodyNormal>{users.creationDate}</BodyNormal>,\n          minWidth: 120\n        },\n        {\n          title: \"Status\",\n          render: users => (\n            <MiniTag color=\"typo-on-dark-high\" backgroundColor=\"poly-valid\">\n              {users.status}\n            </MiniTag>\n          ),\n          minWidth: 80\n        }\n      ]}\n      data={[\n        {\n          firstName: \"Ding Dong\",\n          creationDate: \"10/10/2020\",\n          status: \"validated\"\n        },\n        {\n          firstName: \"Geraldine Eglantine\",\n          creationDate: \"10/10/2020\",\n          status: \"validated\"\n        },\n        {\n          firstName: \"Pim Pam Poom\",\n          creationDate: \"10/10/2020\",\n          status: \"validated\"\n        }\n      ]}\n    />\n    "
}]);

/***/ }),

/***/ "./src/snippets/index.ts":
/*!*******************************!*\
  !*** ./src/snippets/index.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controls */ "./src/snippets/controls.ts");
/* harmony import */ var _displays__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displays */ "./src/snippets/displays.ts");
/* harmony import */ var _inputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inputs */ "./src/snippets/inputs.ts");
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts */ "./src/snippets/layouts.ts");
/* harmony import */ var _texts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./texts */ "./src/snippets/texts.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }






/* harmony default export */ __webpack_exports__["default"] = ([].concat(_toConsumableArray(_layouts__WEBPACK_IMPORTED_MODULE_3__["default"]), _toConsumableArray(_texts__WEBPACK_IMPORTED_MODULE_4__["default"]), _toConsumableArray(_controls__WEBPACK_IMPORTED_MODULE_0__["default"]), _toConsumableArray(_inputs__WEBPACK_IMPORTED_MODULE_2__["default"]), _toConsumableArray(_displays__WEBPACK_IMPORTED_MODULE_1__["default"])));

/***/ }),

/***/ "./src/snippets/inputs.ts":
/*!********************************!*\
  !*** ./src/snippets/inputs.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  group: 'Input',
  name: 'Text',
  code: "\n    <Input\n      placeholder=\"I'm a placeholder!\"\n      subText=\"I can give a little more detail if needed :)\"\n      label=\"Label\"\n    />\n    "
}, {
  group: 'Input',
  name: 'TextBox',
  code: "\n    <Textarea\n      placeholder=\"I'm a placeholder!\"\n      label=\"Label\"\n      subText=\"I can give more info\"\n      numberOfLines=\"8\"\n    />\n    "
}, {
  group: 'Input',
  name: 'Select',
  code: "\n    <Select\n      onChange={() => {}}\n      value=\"2\"\n      label=\"Label\"\n      subText=\"I can give more info\"\n      searchable={true}\n      searchPlaceholder=\"Search...\"\n      searchNoResultsText=\"No results were found :(\"\n      multi\n      options={[\n        { value: \"1\", label: \"Apple\" },\n        { value: \"2\", label: \"Banana\" },\n        { value: \"3\", label: \"Pancakes\" }\n      ]}\n    />\n    "
}]);

/***/ }),

/***/ "./src/snippets/layouts.ts":
/*!*********************************!*\
  !*** ./src/snippets/layouts.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  group: 'Box',
  name: '',
  code: "\n    <Box\n      padding=\"large\"\n      borderRadius=\"large\"\n      shadow=\"shadow-high-elevation-down\"\n      margin=\"medium\"\n    >\n      <TitleHigh>I'm a box!</TitleHigh>\n    </Box>\n    "
}, {
  group: 'Inline',
  name: '',
  code: "\n    <Inline horizontalAlign=\"center\" verticalAlign=\"center\" space=\"small\">\n      <TitleNormal>We're both</TitleNormal>\n      <TitleHigh>Inlined</TitleHigh>\n    </Inline >\n    "
}, {
  group: 'Stack',
  name: '',
  code: "\n    <Stack space=\"medium\" horizontalAlign=\"center\">\n      <TitleNormal>We're both</TitleNormal>\n      <TitleHigh>Stacked</TitleHigh>\n    </Stack>\n    "
}, {
  group: 'Tiles',
  name: '',
  code: "\n    <Tiles space=\"small\" columns=\"3\">\n      <PolyMessage type=\"danger\">I'm a Tile</PolyMessage>\n      <PolyMessage type=\"danger\">I'm a Tile</PolyMessage>\n      <PolyMessage type=\"danger\">I'm a Tile</PolyMessage>\n      <PolyMessage type=\"danger\">I'm a Tile</PolyMessage>\n      <PolyMessage type=\"danger\">I'm a Tile</PolyMessage>\n    </Tiles>\n    "
}]);

/***/ }),

/***/ "./src/snippets/texts.ts":
/*!*******************************!*\
  !*** ./src/snippets/texts.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  group: 'Text',
  name: 'Title Normal',
  code: "\n    <TitleNormal color=\"typo-on-light-high\">Hello!</TitleNormal>\n    "
}, {
  group: 'Text',
  name: 'Title High',
  code: "\n    <TitleHigh color=\"typo-on-light-high\">Hello!</TitleHigh>\n    "
}, {
  group: 'Text',
  name: 'Body Normal',
  code: "\n    <BodyNormal color=\"typo-on-light-high\">Hello!</BodyNormal>\n    "
}, {
  group: 'Text',
  name: 'Body High',
  code: "\n    <BodyHigh color=\"typo-on-light-high\">Hello!</BodyHigh>\n    "
}, {
  group: 'Text',
  name: 'Caption Normal',
  code: "\n    <CaptionNormal color=\"typo-on-light-high\">Hello!</CaptionNormal>\n    "
}, {
  group: 'Text',
  name: 'Caption High',
  code: "\n    <CaptionHigh color=\"typo-on-light-high\">Hello!</CaptionHigh>\n    "
}, {
  group: 'Text',
  name: 'Overline',
  code: "\n    <Overline color=\"typo-on-light-high\">Hello!</Overline>\n    "
}]);

/***/ }),

/***/ 0:
/*!***********************************************************!*\
  !*** multi /drone/src/node_modules/playroom/src/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /drone/src/node_modules/playroom/src/index.js */"../../node_modules/playroom/src/index.js");


/***/ })

},[[0,"runtime","vendors~frame~index","vendors~index","frame~index"]]]);