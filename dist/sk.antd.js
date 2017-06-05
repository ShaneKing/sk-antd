(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("sk-js"), require("antd"), require("lodash"), require("jquery"), require("sk-l10n"), require("moment"), require("classNames"), require("react-router"), require("countup.js"), require("echarts"), require("element-resize-event"), require("jdenticon"), require("js-md5"), require("nprogress"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "sk-js", "antd", "lodash", "jquery", "sk-l10n", "moment", "classNames", "react-router", "countup.js", "echarts", "element-resize-event", "jdenticon", "js-md5", "nprogress"], factory);
	else if(typeof exports === 'object')
		exports["AntD"] = factory(require("react"), require("sk-js"), require("antd"), require("lodash"), require("jquery"), require("sk-l10n"), require("moment"), require("classNames"), require("react-router"), require("countup.js"), require("echarts"), require("element-resize-event"), require("jdenticon"), require("js-md5"), require("nprogress"));
	else
		root["AntD"] = factory(root["React"], root["SK"], root["antd"], root["_"], root["$"], root["L10N"], root["moment"], root["classNames"], root["ReactRouter"], root["CountUp"], root["echarts"], root["elementResizeEvent"], root["Jdenticon"], root["md5"], root["NProgress"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_22__, __WEBPACK_EXTERNAL_MODULE_36__, __WEBPACK_EXTERNAL_MODULE_38__, __WEBPACK_EXTERNAL_MODULE_67__, __WEBPACK_EXTERNAL_MODULE_69__, __WEBPACK_EXTERNAL_MODULE_70__, __WEBPACK_EXTERNAL_MODULE_72__, __WEBPACK_EXTERNAL_MODULE_73__, __WEBPACK_EXTERNAL_MODULE_76__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _comps = __webpack_require__(1);

	Object.keys(_comps).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _comps[key];
	    }
	  });
	});

	var _utils = __webpack_require__(74);

	Object.keys(_utils).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _utils[key];
	    }
	  });
	});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _antd = __webpack_require__(2);

	Object.keys(_antd).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _antd[key];
	    }
	  });
	});

	var _html = __webpack_require__(48);

	Object.keys(_html).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _html[key];
	    }
	  });
	});

	var _react = __webpack_require__(62);

	Object.keys(_react).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _react[key];
	    }
	  });
	});

	var _sk = __webpack_require__(65);

	Object.keys(_sk).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _sk[key];
	    }
	  });
	});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SKTable = exports.SKSwitch = exports.SKSubMenu = exports.SKSpin = exports.SKSider = exports.SKSearch = exports.SKRow = exports.SKPopover = exports.SKMenuItem = exports.SKMenu = exports.SKLayout = exports.SKInput = exports.SKIcon = exports.SKHeader = exports.SKFormItem = exports.SKForm = exports.SKFooter = exports.SKDatePicker = exports.SKContent = exports.SKCol = exports.SKCheckbox = exports.SKCard = exports.SKButton = exports.SKBreadcrumb = exports.SKBadge = exports.FormInput = exports.FormDatePicker = exports.FormComp = undefined;

	var _FormComp2 = __webpack_require__(3);

	var _FormComp3 = _interopRequireDefault(_FormComp2);

	var _FormDatePicker2 = __webpack_require__(20);

	var _FormDatePicker3 = _interopRequireDefault(_FormDatePicker2);

	var _FormInput2 = __webpack_require__(23);

	var _FormInput3 = _interopRequireDefault(_FormInput2);

	var _SKBadge2 = __webpack_require__(25);

	var _SKBadge3 = _interopRequireDefault(_SKBadge2);

	var _SKBreadcrumb2 = __webpack_require__(26);

	var _SKBreadcrumb3 = _interopRequireDefault(_SKBreadcrumb2);

	var _SKButton2 = __webpack_require__(27);

	var _SKButton3 = _interopRequireDefault(_SKButton2);

	var _SKCard2 = __webpack_require__(28);

	var _SKCard3 = _interopRequireDefault(_SKCard2);

	var _SKCheckbox2 = __webpack_require__(29);

	var _SKCheckbox3 = _interopRequireDefault(_SKCheckbox2);

	var _SKCol2 = __webpack_require__(6);

	var _SKCol3 = _interopRequireDefault(_SKCol2);

	var _SKContent2 = __webpack_require__(30);

	var _SKContent3 = _interopRequireDefault(_SKContent2);

	var _SKDatePicker2 = __webpack_require__(21);

	var _SKDatePicker3 = _interopRequireDefault(_SKDatePicker2);

	var _SKFooter2 = __webpack_require__(31);

	var _SKFooter3 = _interopRequireDefault(_SKFooter2);

	var _SKForm2 = __webpack_require__(32);

	var _SKForm3 = _interopRequireDefault(_SKForm2);

	var _SKFormItem2 = __webpack_require__(19);

	var _SKFormItem3 = _interopRequireDefault(_SKFormItem2);

	var _SKHeader2 = __webpack_require__(33);

	var _SKHeader3 = _interopRequireDefault(_SKHeader2);

	var _SKIcon2 = __webpack_require__(34);

	var _SKIcon3 = _interopRequireDefault(_SKIcon2);

	var _SKInput2 = __webpack_require__(24);

	var _SKInput3 = _interopRequireDefault(_SKInput2);

	var _SKLayout2 = __webpack_require__(35);

	var _SKLayout3 = _interopRequireDefault(_SKLayout2);

	var _SKMenu2 = __webpack_require__(37);

	var _SKMenu3 = _interopRequireDefault(_SKMenu2);

	var _SKMenuItem2 = __webpack_require__(39);

	var _SKMenuItem3 = _interopRequireDefault(_SKMenuItem2);

	var _SKPopover2 = __webpack_require__(41);

	var _SKPopover3 = _interopRequireDefault(_SKPopover2);

	var _SKRow2 = __webpack_require__(42);

	var _SKRow3 = _interopRequireDefault(_SKRow2);

	var _SKSearch2 = __webpack_require__(43);

	var _SKSearch3 = _interopRequireDefault(_SKSearch2);

	var _SKSider2 = __webpack_require__(44);

	var _SKSider3 = _interopRequireDefault(_SKSider2);

	var _SKSpin2 = __webpack_require__(45);

	var _SKSpin3 = _interopRequireDefault(_SKSpin2);

	var _SKSubMenu2 = __webpack_require__(40);

	var _SKSubMenu3 = _interopRequireDefault(_SKSubMenu2);

	var _SKSwitch2 = __webpack_require__(46);

	var _SKSwitch3 = _interopRequireDefault(_SKSwitch2);

	var _SKTable2 = __webpack_require__(47);

	var _SKTable3 = _interopRequireDefault(_SKTable2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.FormComp = _FormComp3.default;
	exports.FormDatePicker = _FormDatePicker3.default;
	exports.FormInput = _FormInput3.default;
	exports.SKBadge = _SKBadge3.default;
	exports.SKBreadcrumb = _SKBreadcrumb3.default;
	exports.SKButton = _SKButton3.default;
	exports.SKCard = _SKCard3.default;
	exports.SKCheckbox = _SKCheckbox3.default;
	exports.SKCol = _SKCol3.default;
	exports.SKContent = _SKContent3.default;
	exports.SKDatePicker = _SKDatePicker3.default;
	exports.SKFooter = _SKFooter3.default;
	exports.SKForm = _SKForm3.default;
	exports.SKFormItem = _SKFormItem3.default;
	exports.SKHeader = _SKHeader3.default;
	exports.SKIcon = _SKIcon3.default;
	exports.SKInput = _SKInput3.default;
	exports.SKLayout = _SKLayout3.default;
	exports.SKMenu = _SKMenu3.default;
	exports.SKMenuItem = _SKMenuItem3.default;
	exports.SKPopover = _SKPopover3.default;
	exports.SKRow = _SKRow3.default;
	exports.SKSearch = _SKSearch3.default;
	exports.SKSider = _SKSider3.default;
	exports.SKSpin = _SKSpin3.default;
	exports.SKSubMenu = _SKSubMenu3.default;
	exports.SKSwitch = _SKSwitch3.default;
	exports.SKTable = _SKTable3.default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _skJs = __webpack_require__(5);

	var _skJs2 = _interopRequireDefault(_skJs);

	var _SKCol = __webpack_require__(6);

	var _SKCol2 = _interopRequireDefault(_SKCol);

	var _SKFormItem = __webpack_require__(19);

	var _SKFormItem2 = _interopRequireDefault(_SKFormItem);

	var _Comp2 = __webpack_require__(8);

	var _Comp3 = _interopRequireDefault(_Comp2);

	var _Model = __webpack_require__(13);

	var _Model2 = _interopRequireDefault(_Model);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FormComp = function (_Comp) {
	  _inherits(FormComp, _Comp);

	  function FormComp() {
	    var _ref;

	    _classCallCheck(this, FormComp);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _possibleConstructorReturn(this, (_ref = FormComp.__proto__ || Object.getPrototypeOf(FormComp)).call.apply(_ref, [this].concat(args)));
	  }

	  _createClass(FormComp, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _get(FormComp.prototype.__proto__ || Object.getPrototypeOf(FormComp.prototype), 'componentDidMount', this).call(this);
	      this.addAllErroredMonitor();
	      this.addExtendErroredMonitor();
	    }
	  }, {
	    key: 'componentWillUpdate',
	    value: function componentWillUpdate() {
	      _get(FormComp.prototype.__proto__ || Object.getPrototypeOf(FormComp.prototype), 'componentWillUpdate', this).call(this);
	      this.rmvAllErroredMonitor();
	      this.rmvExtendErroredMonitor();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      _get(FormComp.prototype.__proto__ || Object.getPrototypeOf(FormComp.prototype), 'componentDidUpdate', this).call(this);
	      this.addAllErroredMonitor();
	      this.addExtendErroredMonitor();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      _get(FormComp.prototype.__proto__ || Object.getPrototypeOf(FormComp.prototype), 'componentWillUnmount', this).call(this);
	      this.rmvAllErroredMonitor();
	      this.rmvExtendErroredMonitor();
	    }
	  }, {
	    key: 'addExtendErroredMonitor',
	    value: function addExtendErroredMonitor() {}
	  }, {
	    key: 'rmvExtendErroredMonitor',
	    value: function rmvExtendErroredMonitor() {}

	    //monitor begin

	  }, {
	    key: 'addAllErroredMonitor',
	    value: function addAllErroredMonitor() {
	      var _this2 = this;

	      _Model2.default.parseSao(this.props.monitor).forEach(function ($i) {
	        _this2.addErroredMonitor($i);
	      });
	      //Self value monitor
	      if (this.iModelId()) {
	        this.addErroredMonitor(this.iModelId());
	      }
	    }
	  }, {
	    key: 'addErroredMonitor',
	    value: function addErroredMonitor(idOrReg) {
	      if (this.monitors.indexOf(idOrReg) < 0) {
	        this.monitors.push(idOrReg);
	      }
	      if (_.isRegExp(idOrReg)) {
	        this.iModel().addRegErroredListener(idOrReg, this._updateUI);
	      } else {
	        this.iModel().addIdErroredListener(idOrReg, this._updateUI);
	      }
	    }
	  }, {
	    key: 'rmvAllErroredMonitor',
	    value: function rmvAllErroredMonitor() {
	      var _this3 = this;

	      this.monitors.forEach(function ($i) {
	        _this3.rmvErroredMonitor($i);
	      });
	    }
	  }, {
	    key: 'rmvErroredMonitor',
	    value: function rmvErroredMonitor(idOrReg) {
	      if (_.isRegExp(idOrReg)) {
	        this.iModel().rmvRegErroredListener(idOrReg, this._updateUI);
	      } else {
	        this.iModel().rmvIdErroredListener(idOrReg, this._updateUI);
	      }
	      this.monitors.skRmv(idOrReg);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var inFormItem = this.skProp(_Comp3.default.SK_PROPS.IN_FROM_ITEM);
	      var inFormRow = this.skProp(_Comp3.default.SK_PROPS.IN_FROM_ROW);

	      var errorObj = this.getErrors();
	      var help = _.isEmpty(errorObj) ? '' : _.join(errorObj.skVals(), _skJs2.default.CHAR_VERTICAL);
	      var validateStatus = _.isEmpty(errorObj) ? '' : 'error';

	      if (inFormRow && inFormItem) {
	        return _react2.default.createElement(
	          _SKCol2.default,
	          this.compValidProps(_SKCol2.default),
	          _react2.default.createElement(
	            _SKFormItem2.default,
	            _extends({}, this.compValidProps(_SKFormItem2.default), { validateStatus: validateStatus, help: help }),
	            this.renderFormComp()
	          )
	        );
	      } else if (inFormRow && !inFormItem) {
	        return _react2.default.createElement(
	          _SKCol2.default,
	          this.compValidProps(_SKCol2.default),
	          this.renderFormComp()
	        );
	      } else if (!inFormRow && inFormItem) {
	        return _react2.default.createElement(
	          _SKFormItem2.default,
	          _extends({}, this.compValidProps(_SKFormItem2.default), { validateStatus: validateStatus, help: help }),
	          this.renderFormComp()
	        );
	      } else {
	        return this.renderFormComp();
	      }
	    }
	  }, {
	    key: 'renderFormComp',
	    value: function renderFormComp() {
	      var _props = this.props,
	          CompTag = _props.compTag,
	          modelId = _props.modelId;


	      return _react2.default.createElement(
	        CompTag,
	        _extends({}, this.compValidProps(CompTag), { modelId: modelId }),
	        this.skPropsTrans()
	      );
	    }
	  }]);

	  return FormComp;
	}(_Comp3.default);

	FormComp.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _SKCol2.default.propTypes, _SKFormItem2.default.propTypes, {});
	exports.default = FormComp;
	module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _antd = __webpack_require__(7);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _skJs = __webpack_require__(5);

	var _skJs2 = _interopRequireDefault(_skJs);

	var _Comp2 = __webpack_require__(8);

	var _Comp3 = _interopRequireDefault(_Comp2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SKCol = function (_Comp) {
	  _inherits(SKCol, _Comp);

	  function SKCol() {
	    var _ref;

	    _classCallCheck(this, SKCol);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _possibleConstructorReturn(this, (_ref = SKCol.__proto__ || Object.getPrototypeOf(SKCol)).call.apply(_ref, [this].concat(args)));
	  }

	  _createClass(SKCol, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          CompTag = _props.compTag,
	          span = _props.span,
	          gutter = _props.gutter,
	          style = _props.style;

	      span = span || this.skProp(_Comp3.default.SK_PROPS.COL_SPAN);

	      style = style || {};
	      gutter = gutter || this.skProp(_Comp3.default.SK_PROPS.GRID_GUTTER);
	      if (gutter > 0) {
	        style.paddingLeft = gutter / 2;
	        style.paddingRight = gutter / 2;
	      }

	      return _react2.default.createElement(
	        CompTag,
	        _extends({}, this.compValidProps(CompTag), {
	          span: span }),
	        this.skPropsTrans()
	      );
	    }
	  }, {
	    key: 'childPropsTrans',
	    value: function childPropsTrans(child) {
	      return { style: {} };
	    }
	  }]);

	  return SKCol;
	}(_Comp3.default);

	SKCol.defaultProps = {
	  compTag: _antd.Col
	};
	SKCol.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _antd.Col.propTypes, {});
	exports.default = SKCol;
	module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _lodash = __webpack_require__(9);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _skJs = __webpack_require__(5);

	var _skJs2 = _interopRequireDefault(_skJs);

	var _Cfg = __webpack_require__(10);

	var _Cfg2 = _interopRequireDefault(_Cfg);

	var _Const = __webpack_require__(11);

	var _HTML = __webpack_require__(12);

	var _HTML2 = _interopRequireDefault(_HTML);

	var _Model = __webpack_require__(13);

	var _Model2 = _interopRequireDefault(_Model);

	var _REACT = __webpack_require__(17);

	var _REACT2 = _interopRequireDefault(_REACT);

	var _ReactUtils = __webpack_require__(18);

	var _ReactUtils2 = _interopRequireDefault(_ReactUtils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * props:compTag,model(skModel),modelId,labelDir(skLabelDir),labelWidth(skLabelWidth)
	 * bfo  ,active(skActive),disabled(skDisabled)
	 * func ,m2eConvertor,e2mConvertor,m2vConvertor,v2mConvertor
	 * html ,className,role,style
	 */
	var Comp = function (_React$Component) {
	  _inherits(Comp, _React$Component);

	  _createClass(Comp, null, [{
	    key: 'IS_PROP_TYPES_MODEL',


	    /**
	     * Assert Model
	     *
	     * @param props
	     * @param propName
	     * @param componentName
	     * @returns {Error}
	     */
	    value: function IS_PROP_TYPES_MODEL(props, propName, componentName) {
	      if (props[propName] && !(props[propName] instanceof _Model2.default)) {
	        return new Error('The [' + componentName + ']\'s [' + propName + '] is not a model!');
	      }
	    }
	  }, {
	    key: 'skPropsFilter',


	    /**
	     * Filter sk props
	     *
	     * @param {string} k key/index
	     * @returns {boolean}
	     */
	    value: function skPropsFilter(k) {
	      return _lodash2.default.startsWith(_skJs2.default.s4s(k), Comp.SK_PROPS_PREFIX);
	    }
	  }]);

	  function Comp() {
	    var _ref;

	    _classCallCheck(this, Comp);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    var _this = _possibleConstructorReturn(this, (_ref = Comp.__proto__ || Object.getPrototypeOf(Comp)).call.apply(_ref, [this].concat(args)));

	    _this._updateUI = _this.updateUI.bind(_this);
	    _this.monitors = [];
	    return _this;
	  }

	  _createClass(Comp, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.addAllChangedMonitor();
	      this.addExtendChangedMonitor();
	    }
	  }, {
	    key: 'componentWillUpdate',
	    value: function componentWillUpdate() {
	      this.rmvAllChangedMonitor();
	      this.rmvExtendChangedMonitor();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.addAllChangedMonitor();
	      this.addExtendChangedMonitor();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.rmvAllChangedMonitor();
	      this.rmvExtendChangedMonitor();
	    }
	  }, {
	    key: 'addExtendChangedMonitor',
	    value: function addExtendChangedMonitor() {}
	  }, {
	    key: 'rmvExtendChangedMonitor',
	    value: function rmvExtendChangedMonitor() {}

	    //monitor begin

	  }, {
	    key: 'addAllChangedMonitor',
	    value: function addAllChangedMonitor() {
	      var _this2 = this;

	      _Model2.default.parseSao(this.props.monitor).forEach(function ($i) {
	        _this2.addChangedMonitor($i);
	      });
	      //Self value monitor
	      if (this.iModelId()) {
	        this.addChangedMonitor(this.iModelId());
	      }
	    }
	  }, {
	    key: 'addChangedMonitor',
	    value: function addChangedMonitor(idOrReg) {
	      if (!_lodash2.default.isNil(idOrReg)) {
	        if (this.monitors.indexOf(idOrReg) < 0) {
	          this.monitors.push(idOrReg);
	        }
	        if (_lodash2.default.isRegExp(idOrReg)) {
	          this.iModel().addRegChangedListener(idOrReg, this._updateUI);
	        } else {
	          this.iModel().addIdChangedListener(idOrReg, this._updateUI);
	        }
	      }
	    }
	  }, {
	    key: 'rmvAllChangedMonitor',
	    value: function rmvAllChangedMonitor() {
	      var _this3 = this;

	      this.monitors.forEach(function ($i) {
	        _this3.rmvChangedMonitor($i);
	      });
	    }
	  }, {
	    key: 'rmvChangedMonitor',
	    value: function rmvChangedMonitor(idOrReg) {
	      if (_lodash2.default.isRegExp(idOrReg)) {
	        this.iModel().rmvRegChangedListener(idOrReg, this._updateUI);
	      } else {
	        this.iModel().rmvIdChangedListener(idOrReg, this._updateUI);
	      }
	      this.monitors.skRmv(idOrReg);
	    }
	  }, {
	    key: 'updateUI',
	    value: function updateUI(evt) {
	      this.setState({ stateUid: _lodash2.default.uniqueId('compStateUid') });
	    }

	    //monitor end

	  }, {
	    key: 'getErrors',
	    value: function getErrors() {
	      return this.iModel().getErrors(this.iModelId());
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var CompTag = this.props.compTag;


	      return _react2.default.createElement(
	        CompTag,
	        this.compValidProps(CompTag),
	        this.skPropsTrans()
	      );
	    }

	    //Properties
	    /**
	     * Get model if exist, else skModel
	     *
	     * @returns {Model}
	     */

	  }, {
	    key: 'iModel',
	    value: function iModel() {
	      return this.skProp(Comp.SK_PROPS.MODEL);
	    }

	    /**
	     * Get modelId: x.xx.xxx.xxxx
	     *
	     * @returns {string}
	     */

	  }, {
	    key: 'iModelId',
	    value: function iModelId() {
	      return this.props.modelId;
	    }

	    /**
	     * Get skModel
	     *
	     * @returns {Model}
	     */

	  }, {
	    key: 'skModel',
	    value: function skModel() {
	      return this.props.skModel;
	    }
	  }, {
	    key: 'sysModel',
	    value: function sysModel() {
	      return this.props.skSysModel;
	    }

	    /**
	     * Get prop value: prop -> skProp -> DEFAULT_PROP
	     *
	     * @param {string}prop
	     * @param {*} defaultValue
	     * @returns {*} Maybe undefined
	     */

	  }, {
	    key: 'skProp',
	    value: function skProp(prop) {
	      var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

	      var rtn = this.props[prop];
	      if (rtn === undefined) {
	        rtn = this.props[Comp.SK_PROPS_PREFIX + _skJs2.default.upperWordFirstChar(prop)];
	      }
	      if (rtn === undefined) {
	        rtn = this.props[Comp.SK_PROPS_PREFIX + 'Sys' + _skJs2.default.upperWordFirstChar(prop)];
	      }
	      if (rtn === undefined) {
	        rtn = _Cfg2.default['DEFAULT' + _skJs2.default.upperWordFirstChar(prop).replace(/[A-Z]/g, function ($1) {
	          return _skJs2.default.CHAR_UNDERLINE + $1;
	        }).toUpperCase()];
	      }
	      return rtn === undefined ? defaultValue : rtn;
	    }

	    /**
	     * set/get value for modelId
	     *
	     * @param {*} val
	     * @returns {*}
	     */

	  }, {
	    key: 'skVal',
	    value: function skVal(val) {
	      if (arguments.length > 0) {
	        this.iModel().skVal(this.iModelId(), val);
	        return this;
	      } else {
	        return this.iModel().skVal(this.iModelId());
	      }
	    }

	    //Functions
	    /**
	     * Returns valid props for this comp
	     *
	     * @param {Comp|string} comp
	     * @param {PlainObject} prop
	     * @returns {PlainObject}
	     */

	  }, {
	    key: 'compValidProps',
	    value: function compValidProps(comp, prop) {
	      comp = comp || this.props.compTag;
	      prop = prop || this.props;

	      var tmpProps = _REACT2.default.P.skVals();
	      tmpProps = comp.propTypes ? tmpProps.concat(Object.keys(comp.propTypes)) : tmpProps;
	      tmpProps = comp.type && comp.type.propTypes ? tmpProps.concat(Object.keys(comp.type.propTypes)) : tmpProps;

	      return _lodash2.default.omit(_lodash2.default.pick(prop, tmpProps), [Comp.SK_PROPS.COMP_TAG, Comp.SK_PROPS.MODEL_ID]);
	    }

	    /**
	     * Returns boolean value of boolean, function or object with skWhen properties
	     *
	     * @param {string} prop
	     * @param {boolean} defaultValue
	     * @returns {boolean}
	     */

	  }, {
	    key: 'skBfo',
	    value: function skBfo(prop) {
	      var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	      return this.execBfo(this.skProp(prop, defaultValue));
	    }

	    /**
	     * Returns boolean value of boolean, function or object with skWhen properties
	     *
	     * @param {boolean|Function|Object} bfo
	     * @param {boolean} defaultValue
	     * @returns {boolean}
	     */

	  }, {
	    key: 'execBfo',
	    value: function execBfo(bfo) {
	      var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	      if (_lodash2.default.isBoolean(bfo)) {
	        return bfo;
	      } else if (_lodash2.default.isFunction(bfo)) {
	        return bfo.call(this);
	      } else if (_lodash2.default.isObject(bfo) && _lodash2.default.isFunction(bfo.func)) {
	        return bfo.skWhen.call(this);
	      } else {
	        return defaultValue;
	      }
	    }

	    /**
	     * Transferring props to children
	     *
	     * child + skChildPropsTrans(child) + this.props.skFilter(false, Comp.skPropsFilter) + child.props.skFilter(false, Comp.skPropsFilter)
	     *
	     * @param {React.Children} children
	     * @returns {React.Children}
	     */

	  }, {
	    key: 'skPropsTrans',
	    value: function skPropsTrans() {
	      var _this4 = this;

	      var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

	      var skProps = this.props.skFilter(false, Comp.skPropsFilter);
	      return _react2.default.Children.map(children ? children : this.props.children, function (child) {
	        if (_react2.default.isValidElement(child)) {
	          var tmpProps = _REACT2.default.TAG[child.type] && _HTML2.default.PROP[child.type] ? {} : skProps;
	          return _react2.default.cloneElement(child, _lodash2.default.assign(_this4.childPropsTrans(child), tmpProps, child.props.skFilter(false, Comp.skPropsFilter)));
	        }
	        return child;
	      });
	    }

	    /**
	     * Gen props trans to children
	     *
	     * @param {React.Component} child
	     * @returns {PlainObject}
	     */

	  }, {
	    key: 'childPropsTrans',
	    value: function childPropsTrans(child) {
	      return {};
	    }
	  }, {
	    key: 'hasSpecialChild',
	    value: function hasSpecialChild(specialChildName) {
	      return _ReactUtils2.default.some(this.props.children, function (child, idx) {
	        return child.type && child.type.name == specialChildName;
	      }, this);
	    }
	  }]);

	  return Comp;
	}(_react2.default.Component);

	Comp.SK_PROPS = {
	  //sk
	  COMP_TAG: 'compTag',
	  MODEL: 'model',
	  MODEL_ID: 'modelId',
	  //AntD
	  COL_SPAN: 'colSpan',
	  COL_XS: 'colXs',
	  COL_SM: 'colSm',
	  COL_MD: 'colMd',
	  COL_LG: 'colLg',
	  COL_XL: 'colXl',
	  FORM_LABEL_COL: 'formLabelCol',
	  FORM_LAYOUT: 'formLayout',
	  FORM_WRAPPER_COL: 'formWrapperCol',
	  GRID_GUTTER: 'gridGutter',
	  IN_FROM_ITEM: 'inFormItem',
	  IN_FROM_ROW: 'inFormRow',
	  //ui state, are bfo (boolean, function, object{deps:,func:})
	  //deps to monitor
	  ACTIVE: 'active',
	  DISABLED: 'disabled',
	  HIDDEN: 'hidden',
	  PREVIEW: 'preview',
	  READONLY: 'readOnly',
	  REQUIRED: 'required', //just paint required icon
	  //component monitor list, can be string[reg], string array or object
	  MONITOR: 'monitor'
	};
	Comp.SK_PROPS_PREFIX = 'sk';
	Comp.propTypes = {
	  compTag: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.func, _react2.default.PropTypes.string]), //React component or Brad Component
	  model: Comp.IS_PROP_TYPES_MODEL, //Business Model(part of page), PlainObject or Brad.Model
	  skModel: Comp.IS_PROP_TYPES_MODEL, //Business Model(page), PlainObject or Brad.Model
	  skSysModel: _react2.default.PropTypes.instanceOf(_Model2.default), //System Model(whole of page), PlainObject or Brad.Model
	  modelId: _react2.default.PropTypes.string,
	  colSpan: _react2.default.PropTypes.number,
	  skColSpan: _react2.default.PropTypes.number,
	  colXs: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.object]),
	  skColXs: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.object]),
	  colSm: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.object]),
	  skColSm: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.object]),
	  colMd: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.object]),
	  skColMd: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.object]),
	  colLg: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.object]),
	  skColLg: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.object]),
	  colXl: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.object]),
	  skColXl: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.object]),
	  formLayout: _react2.default.PropTypes.oneOf([_Const.Dir.Horizontal, _Const.Dir.Vertical, _Const.Dir.Inline]),
	  skFormLayout: _react2.default.PropTypes.oneOf([_Const.Dir.Horizontal, _Const.Dir.Vertical, _Const.Dir.Inline]), //Const.Dir
	  formLabelCol: _react2.default.PropTypes.object,
	  skFormLabelCol: _react2.default.PropTypes.object,
	  formWrapperCol: _react2.default.PropTypes.object,
	  skFormWrapperCol: _react2.default.PropTypes.object,
	  gridGutter: _react2.default.PropTypes.number,
	  skGridGutter: _react2.default.PropTypes.number,
	  inFormItem: _react2.default.PropTypes.bool,
	  skInFormItem: _react2.default.PropTypes.bool,
	  inFormRow: _react2.default.PropTypes.bool,
	  skInFormRow: _react2.default.PropTypes.bool,

	  active: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.bool, _react2.default.PropTypes.func, _react2.default.PropTypes.object]),
	  skActive: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.bool, _react2.default.PropTypes.func, _react2.default.PropTypes.object]),
	  disabled: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.bool, _react2.default.PropTypes.func, _react2.default.PropTypes.object]),
	  skDisabled: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.bool, _react2.default.PropTypes.func, _react2.default.PropTypes.object]),
	  hidden: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.bool, _react2.default.PropTypes.func, _react2.default.PropTypes.object]),
	  skHidden: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.bool, _react2.default.PropTypes.func, _react2.default.PropTypes.object]),
	  preview: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.bool, _react2.default.PropTypes.func, _react2.default.PropTypes.object]),
	  skPreview: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.bool, _react2.default.PropTypes.func, _react2.default.PropTypes.object]),
	  readOnly: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.bool, _react2.default.PropTypes.func, _react2.default.PropTypes.object]),
	  skReadOnly: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.bool, _react2.default.PropTypes.func, _react2.default.PropTypes.object]),
	  required: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.bool, _react2.default.PropTypes.func, _react2.default.PropTypes.object]),
	  skRequired: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.bool, _react2.default.PropTypes.func, _react2.default.PropTypes.object]),
	  monitor: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.array, _react2.default.PropTypes.object]),

	  m2eConvertor: _react2.default.PropTypes.func, //Model 2 Editing
	  e2mConvertor: _react2.default.PropTypes.func, //Editing 2 Model
	  m2vConvertor: _react2.default.PropTypes.func, //Model 2 View, like Date Comp, moment format to view: YYYY-MM-DDTHH:mm:ss.SSSZ -> YYYY-MM-DD
	  v2mConvertor: _react2.default.PropTypes.func //View 2 Model, like Check Comp, true is checked: true -> 1, false -> 0
	};
	Comp.propTypes = _skJs2.default.assign({}, Comp.propTypes);
	exports.default = Comp;
	module.exports = exports['default'];

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Const = __webpack_require__(11);

	var Cfg = {
	  //AntD Default
	  DEFAULT_COL_SPAN: 8,
	  DEFAULT_FORM_LABEL_COL: { span: 8 },
	  DEFAULT_FORM_LAYOUT: _Const.Dir.Horizontal,
	  DEFAULT_FORM_WRAPPER_COL: { span: 16 },
	  DEFAULT_GRID_GUTTER: 0,

	  //Properties
	  PROP_DEPS: 'deps',
	  PROP_FUNC: 'func',
	  PROP_SCENARIO: 'scenario'
	};

	exports.default = Cfg;
	module.exports = exports['default'];

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Color = exports.Color = {
	  Blue: '#8fc9fb',
	  BorderBase: '#e5e5e5',
	  BorderSplit: '#f4f4f4',
	  Grass: '#d6fbb5',
	  Green: '#64ea91',
	  Peach: '#f797d6',
	  Purple: '#d897eb',
	  Red: '#f69899',
	  Sky: '#c1e0fc',
	  Yellow: '#f8c82e'
	};
	var Dir = exports.Dir = {
	  Horizontal: 'horizontal',
	  Inline: 'inline',
	  Vertical: 'vertical'
	};
	var EvtType = exports.EvtType = {
	  Changed: 'Changed',
	  Errored: 'Errored'
	};
	var Theme = exports.Theme = {
	  Dark: 'dark',
	  Light: 'light'
	};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _lodash = __webpack_require__(9);

	var _lodash2 = _interopRequireDefault(_lodash);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HTML = {
	  EVENT: {
	    any: {
	      /*Window*/
	      'onAfterPrint': 'onAfterPrint', //H5
	      'onBeforePrint': 'onBeforePrint', //H5
	      'onBeforeUnload': 'onBeforeUnload', //H5
	      'onError': 'onError', //H5
	      'onHasChange': 'onHasChange', //H5
	      'onLoad': 'onLoad',
	      'onMessage': 'onMessage', //H5
	      'onOffline': 'onOffline', //H5
	      'onOnline': 'onOnline', //H5
	      'onPageHide': 'onPageHide', //H5
	      'onPageShow': 'onPageShow', //H5
	      'onPopState': 'onPopState', //H5
	      'onRedo': 'onRedo', //H5
	      'onResize': 'onResize', //H5
	      'onStorage': 'onStorage', //H5
	      'onUndo': 'onUndo', //H5
	      'onUnload': 'onUnload',
	      /*Form*/
	      'onBlur': 'onBlur',
	      'onChange': 'onChange',
	      'onContextMenu': 'onContextMenu', //H5
	      'onFocus': 'onFocus',
	      'onFormChange': 'onFormChange', //H5
	      'onFormInput': 'onFormInput', //H5
	      'onInput': 'onInput', //H5
	      'onInvalid': 'onInvalid', //H5
	      'onReset': 'onReset',
	      'onSelect': 'onSelect',
	      'onSubmit': 'onSubmit',
	      /*Keyboard*/
	      'onKeyDown': 'onKeyDown',
	      'onKeyPress': 'onKeyPress',
	      'onKeyUp': 'onKeyUp',
	      /*Mouse*/
	      'onClick': 'onClick',
	      // 'onDbClick':'onDbClick',
	      'onDoubleClick': 'onDoubleClick',
	      'onDrag': 'onDrag', //H5
	      'onDragEnd': 'onDragEnd', //H5
	      'onDragEnter': 'onDragEnter', //H5
	      'onDragLeave': 'onDragLeave', //H5
	      'onDragOver': 'onDragOver', //H5
	      'onDragStart': 'onDragStart', //H5
	      'onDrop': 'onDrop', //H5
	      'onMouseDown': 'onMouseDown',
	      'onMouseMove': 'onMouseMove',
	      'onMouseOut': 'onMouseOut',
	      'onMouseOver': 'onMouseOver',
	      'onMouseUp': 'onMouseUp',
	      'onMouseWheel': 'onMouseWheel', //H5
	      'onScroll': 'onScroll', //H5
	      /*Media*/
	      'onAbort': 'onAbort',
	      'onCanPlay': 'onCanPlay', //H5
	      'onCanPlayThrough': 'onCanPlayThrough', //H5
	      'onDurationChange': 'onDurationChange', //H5
	      'onEmptied': 'onEmptied', //H5
	      'onEnded': 'onEnded', //H5
	      // 'onError': 'onError',//H5
	      'onLoadedData': 'onLoadedData', //H5
	      'onLoadedMetadata': 'onLoadedMetadata', //H5
	      'onLoadStart': 'onLoadStart', //H5
	      'onPause': 'onPause', //H5
	      'onPlay': 'onPlay', //H5
	      'onPlaying': 'onPlaying', //H5
	      'onProgress': 'onProgress', //H5
	      'onRateChange': 'onRateChange', //H5
	      'onReadyStateChange': 'onReadyStateChange', //H5
	      'onSeeked': 'onSeeked', //H5
	      'onSeeking': 'onSeeking', //H5
	      'onStalled': 'onStalled', //H5
	      'onSuspend': 'onSuspend', //H5
	      'onTimeUpdate': 'onTimeUpdate', //H5
	      'onVolumeChange': 'onVolumeChange', //H5
	      'onWaiting': 'onWaiting'
	    }
	  },
	  PROP: {
	    any: {
	      'accessKey': 'accessKey',
	      // 'class':'class',
	      'className': 'className',
	      'contentEditable': 'contentEditable', //H5
	      'contextMenu': 'contextMenu', //H5
	      // 'data-*':'data-*',//H5
	      'dataToggle': 'data-toggle', //H5
	      'dir': 'dir',
	      'draggable': 'draggable', //H5
	      'dropzone': 'dropzone', //H5
	      'hidden': 'hidden', //H5
	      'id': 'id',
	      'lang': 'lang',
	      'spellCheck': 'spellCheck', //H5
	      'style': 'style',
	      'tabIndex': 'tabIndex',
	      'title': 'title',
	      'translate': 'translate' //H5
	    },
	    a: {
	      'charSet': 'charSet', //H5!
	      'coords': 'coords', //H5!
	      'download': 'download', //H5
	      'href': 'href',
	      'hrefLang': 'hrefLang',
	      'media': 'media', //H5
	      'name': 'name', //H5!
	      'rel': 'rel',
	      'rev': 'rev', //H5!
	      'shape': 'shape', //H5!
	      'target': 'target',
	      'type': 'type' //H5
	    },
	    aside: {},
	    br: {},
	    button: {
	      'autoFocus': 'autoFocus', //H5
	      'disabled': 'disabled',
	      'form': 'form', //H5
	      'formAction': 'formAction', //H5
	      'formEncType': 'formEncType', //H5
	      'formMethod': 'formMethod', //H5
	      'formNoValidate': 'formNoValidate', //H5
	      'formTarget': 'formTarget', //H5
	      'name': 'name',
	      'type': 'type',
	      'value': 'value'
	    },
	    canvas: {},
	    div: {
	      'align': 'align', //!
	      'style': 'style' //!
	    },
	    h1: {
	      'align': 'align'
	    },
	    h2: {
	      'align': 'align'
	    },
	    h3: {
	      'align': 'align'
	    },
	    h4: {
	      'align': 'align'
	    },
	    h5: {
	      'align': 'align'
	    },
	    h6: {
	      'align': 'align'
	    },
	    i: {},
	    img: {
	      'src': 'src',
	      'alt': 'alt'
	    },
	    input: {
	      'placeholder': 'placeholder',
	      'readOnly': 'readOnly',
	      'type': 'type',
	      'value': 'value'
	    },
	    li: {
	      'type': 'type', //!
	      'value': 'value' //!
	    },
	    nav: {},
	    ul: {
	      'compact': 'compact', //!
	      'type': 'type'
	    },
	    ol: {
	      'compact': 'compact', //!
	      'type': 'type'
	    },
	    p: {
	      'align': 'align'
	    },
	    span: {}
	  }
	};

	//HTML all properties
	//http://www.w3school.com.cn/tags/html_ref_standardattributes.asp
	HTML.anyP = _lodash2.default.assign({}, HTML.EVENT.any, HTML.PROP.any);

	//HTML all data-*
	HTML.dataP = function (props) {
	  return Object.keys(props).filter(function ($prop) {
	    return _lodash2.default.startsWith($prop, 'data-');
	  });
	};

	exports.default = HTML;
	module.exports = exports['default'];

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _lodash = __webpack_require__(9);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _skJs = __webpack_require__(5);

	var _skJs2 = _interopRequireDefault(_skJs);

	var _Cfg = __webpack_require__(10);

	var _Cfg2 = _interopRequireDefault(_Cfg);

	var _Const = __webpack_require__(11);

	var _Validator = __webpack_require__(14);

	var _Validator2 = _interopRequireDefault(_Validator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Model = function () {
	  _createClass(Model, null, [{
	    key: 'object2Paths',
	    value: function object2Paths(prefix) {
	      var paths = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	      var object = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	      Object.keys(object).forEach(function ($k) {
	        var tmpKey = prefix + (String(prefix).skBlank() ? '' : _skJs2.default.CHAR_DOT) + $k;
	        var tmpVal = object[$k];
	        if (_lodash2.default.isPlainObject(tmpVal)) {
	          Model.object2Paths(tmpKey, paths, tmpVal);
	        } else if (_skJs2.default.s4b(tmpVal) && tmpVal) {
	          paths.push(tmpKey);
	        }
	      });
	    }
	  }, {
	    key: 'parseSao',


	    /**
	     * @param sao string[reg], string array or object
	     * @returns {Array}
	     */
	    value: function parseSao(sao) {
	      var rtn = [];
	      if (sao) {
	        if (_lodash2.default.isPlainObject(sao)) {
	          Model.object2Paths('', rtn, sao);
	        } else if (_lodash2.default.isArray(sao)) {
	          rtn = rtn.concat(sao);
	        } else if (_lodash2.default.isString(sao)) {
	          rtn.push(sao);
	        }
	      }
	      return rtn;
	    }
	  }]);

	  function Model() {
	    var model = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var validator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _Validator2.default();

	    _classCallCheck(this, Model);

	    this.errors = {};
	    this.idListeners = {};
	    this.monitors = {};
	    this.regListeners = {};

	    this.model = model;
	    this.validator = validator;

	    this.addAllValidatorMonitor();
	  }

	  //validator begin


	  _createClass(Model, [{
	    key: 'addAllValidatorMonitor',
	    value: function addAllValidatorMonitor() {
	      var _this = this;

	      var tmpConfigs = this.getValidator().getConfigs();
	      Object.keys(tmpConfigs).forEach(function ($key) {
	        _this.addValidatorMonitor($key, tmpConfigs[$key]);
	      });
	    }
	  }, {
	    key: 'addValidatorMonitor',
	    value: function addValidatorMonitor(id, config) {
	      var _this2 = this;

	      Object.keys(config).forEach(function ($key) {
	        _this2.addValidatorRuleMonitor(id, $key, config[$key]);
	      });
	    }
	  }, {
	    key: 'addValidatorRuleMonitor',
	    value: function addValidatorRuleMonitor(id, rule, setting) {
	      var _this3 = this;

	      if (!this.monitors[id]) {
	        this.errors[id] = {};
	        this.monitors[id] = this.validate.bind(id);
	        this.addIdChangedListener(id, this.monitors[id]);
	      }
	      if (rule == _Cfg2.default.PROP_DEPS) {
	        Model.parseSao(setting).forEach(function ($i) {
	          if (_lodash2.default.isRegExp($i)) {
	            _this3.addRegChangedListener($i, _this3.monitors[id]);
	          } else {
	            _this3.addIdChangedListener($i, _this3.monitors[id]);
	          }
	        });
	      } else {
	        var tmpSettingDeps = setting[_Cfg2.default.PROP_DEPS];
	        if (tmpSettingDeps) {
	          Model.parseSao(tmpSettingDeps).forEach(function ($i) {
	            if (_lodash2.default.isRegExp($i)) {
	              _this3.addRegChangedListener($i, _this3.monitors[id]);
	            } else {
	              _this3.addIdChangedListener($i, _this3.monitors[id]);
	            }
	          });
	        }
	      }
	    }
	  }, {
	    key: 'rmvValidatorMonitor',
	    value: function rmvValidatorMonitor(id, config) {
	      var _this4 = this;

	      Object.keys(config).forEach(function ($key) {
	        if ($key == _Cfg2.default.PROP_DEPS) {
	          Model.parseSao(config[$key]).forEach(function ($i) {
	            if (_lodash2.default.isRegExp($i)) {
	              _this4.rmvRegChangedListener($i, _this4.monitors[id]);
	            } else {
	              _this4.rmvIdChangedListener($i, _this4.monitors[id]);
	            }
	          });
	        } else {
	          _this4.rmvValidatorRuleMonitor(id, $key, config[$key]);
	        }
	      });
	    }
	  }, {
	    key: 'rmvValidatorRuleMonitor',
	    value: function rmvValidatorRuleMonitor(id, rule, setting) {
	      var _this5 = this;

	      var tmpSettingDeps = setting[_Cfg2.default.PROP_DEPS];
	      if (tmpSettingDeps) {
	        Model.parseSao(tmpSettingDeps).forEach(function ($i) {
	          if (_lodash2.default.isRegExp($i)) {
	            _this5.rmvRegChangedListener($i, _this5.monitors[id]);
	          } else {
	            _this5.rmvIdChangedListener($i, _this5.monitors[id]);
	          }
	        });
	      }
	    }
	  }, {
	    key: 'validateByScenario',
	    value: function validateByScenario(scenario) {
	      var _this6 = this;

	      var configs = this.getValidator().getConfigs();
	      Object.keys(configs).forEach(function ($modelId) {
	        if (!scenario || scenario == configs[$modelId][_Cfg2.default.PROP_SCENARIO]) {
	          _this6.validate.call($modelId, { model: _this6 });
	        }
	      });
	    }
	  }, {
	    key: 'validate',
	    value: function validate(evt) {
	      var tmpId = this;
	      var tmpModel = evt.model;
	      var tmpConfig = evt.model.getValidator().getConfigs()[tmpId];
	      if (tmpConfig && _lodash2.default.isObject(tmpConfig)) {
	        Object.keys(tmpConfig).forEach(function ($key) {
	          if ($key == _Cfg2.default.PROP_SCENARIO) {
	            //ignore
	          } else if ($key == _Cfg2.default.PROP_FUNC) {
	            tmpModel.execValidate($key, tmpId, tmpConfig[$key], tmpModel, undefined);
	          } else {
	            var tmpRule = tmpModel.getValidator().getRules()[$key];
	            if (_lodash2.default.isFunction(tmpRule)) {
	              tmpModel.execValidate($key, tmpId, tmpRule, tmpModel, tmpConfig[$key]);
	            } else if (_lodash2.default.isObject(tmpRule) && _lodash2.default.isFunction(tmpRule[_Cfg2.default.PROP_FUNC])) {
	              tmpModel.execValidate($key, tmpId, tmpRule[_Cfg2.default.PROP_FUNC], tmpModel, undefined);
	            }
	          }
	        });
	      }
	    }
	  }, {
	    key: 'execValidate',
	    value: function execValidate(rule, id, func, model, setting) {
	      var tmpRtn = func(model, model.skVal(id), setting);
	      if (!_lodash2.default.isBoolean(tmpRtn)) {
	        //true or message
	        this.errors.skVal(id + _skJs2.default.CHAR_DOT + rule, tmpRtn);
	      } else {
	        delete this.errors[id][rule];
	      }
	      this.fireErroredEvent(id, model.skVal(id), model.skVal(id));
	    }

	    //validator end

	  }, {
	    key: 'hasErrors',
	    value: function hasErrors() {
	      var _this7 = this;

	      var rtn = false;
	      Object.keys(this.errors).forEach(function ($modelId) {
	        rtn = rtn || !_lodash2.default.isEmpty(_this7.errors[$modelId]);
	      });
	      return rtn;
	    }
	  }, {
	    key: 'getAllErrors',
	    value: function getAllErrors() {
	      return this.errors;
	    }
	  }, {
	    key: 'getErrors',
	    value: function getErrors(id) {
	      return _skJs2.default.s4o(this.errors[id]);
	    }

	    /**
	     *
	     * @param id
	     * @param listener please bind context
	     */

	  }, {
	    key: 'addIdChangedListener',
	    value: function addIdChangedListener(id, listener) {
	      this.addIdListener(id, _Const.EvtType.Changed, listener);
	    }

	    /**
	     *
	     * @param id
	     * @param listener please bind context
	     */

	  }, {
	    key: 'addIdErroredListener',
	    value: function addIdErroredListener(id, listener) {
	      this.addIdListener(id, _Const.EvtType.Errored, listener);
	    }

	    /**
	     *
	     * @param id
	     * @param type
	     * @param listener please bind context
	     */

	  }, {
	    key: 'addIdListener',
	    value: function addIdListener(id, type, listener) {
	      if (!this.idListeners[type]) {
	        this.idListeners[type] = {};
	      }
	      if (!this.idListeners[type][id]) {
	        this.idListeners[type][id] = [];
	      }
	      if (this.idListeners[type][id].indexOf(listener) < 0) {
	        this.idListeners[type][id].push(listener);
	      }
	    }

	    /**
	     *
	     * @param reg
	     * @param listener please bind context
	     */

	  }, {
	    key: 'addRegChangedListener',
	    value: function addRegChangedListener(reg, listener) {
	      this.addRegListener(reg, _Const.EvtType.Changed, listener);
	    }

	    /**
	     *
	     * @param reg
	     * @param listener please bind context
	     */

	  }, {
	    key: 'addRegErroredListener',
	    value: function addRegErroredListener(reg, listener) {
	      this.addRegListener(reg, _Const.EvtType.Errored, listener);
	    }

	    /**
	     *
	     * @param reg
	     * @param type
	     * @param listener please bind context
	     */

	  }, {
	    key: 'addRegListener',
	    value: function addRegListener(reg, type, listener) {
	      if (!this.regListeners[type]) {
	        this.regListeners[type] = {};
	      }
	      if (!this.regListeners[type][reg]) {
	        this.regListeners[type][reg] = [];
	      }
	      if (this.regListeners[type][reg].indexOf(listener) < 0) {
	        this.regListeners[type][reg].push(listener);
	      }
	    }
	  }, {
	    key: 'fireChangedEvent',
	    value: function fireChangedEvent(id, old, current) {
	      this.fireEvent({ model: this, id: id, old: old, current: current, type: _Const.EvtType.Changed });
	    }
	  }, {
	    key: 'fireErroredEvent',
	    value: function fireErroredEvent(id, old, current) {
	      this.fireEvent({ model: this, id: id, old: old, current: current, type: _Const.EvtType.Errored });
	    }
	  }, {
	    key: 'fireEvent',
	    value: function fireEvent(evt) {
	      var matchedListeners = [];
	      var idListeners = this.idListeners[evt.type] ? this.idListeners[evt.type] : {};
	      matchedListeners.push.apply(matchedListeners, idListeners[evt.id] ? idListeners[evt.id] : []);
	      var regListeners = this.regListeners[evt.type] ? this.regListeners[evt.type] : {};
	      Object.keys(regListeners).forEach(function (reg) {
	        matchedListeners.push.apply(matchedListeners, evt.id.match(reg) ? listeners[reg] : []);
	      });

	      matchedListeners.forEach(function (listener) {
	        listener(evt);
	      });
	      return this;
	    }
	  }, {
	    key: 'rmvIdChangedListener',
	    value: function rmvIdChangedListener(id, listener) {
	      this.rmvIdListener(id, _Const.EvtType.Changed, listener);
	    }
	  }, {
	    key: 'rmvIdErroredListener',
	    value: function rmvIdErroredListener(id, listener) {
	      this.rmvIdListener(id, _Const.EvtType.Errored, listener);
	    }
	  }, {
	    key: 'rmvIdListener',
	    value: function rmvIdListener(id, type, listener) {
	      if (!this.idListeners[type]) {
	        this.idListeners[type] = {};
	      }
	      if (!this.idListeners[type][id]) {
	        this.idListeners[type][id] = [];
	      }
	      if (this.idListeners[type][id].indexOf(listener) >= 0) {
	        this.idListeners[type][id].skRmv(listener);
	      }
	    }
	  }, {
	    key: 'rmvRegChangedListener',
	    value: function rmvRegChangedListener(reg, listener) {
	      this.rmvRegListener(reg, _Const.EvtType.Changed, listener);
	    }
	  }, {
	    key: 'rmvRegErroredListener',
	    value: function rmvRegErroredListener(reg, listener) {
	      this.rmvRegListener(reg, _Const.EvtType.Errored, listener);
	    }
	  }, {
	    key: 'rmvRegListener',
	    value: function rmvRegListener(reg, type, listener) {
	      if (!this.regListeners[type]) {
	        this.regListeners[type] = {};
	      }
	      if (!this.regListeners[type][reg]) {
	        this.regListeners[type][reg] = [];
	      }
	      if (this.regListeners[type][reg].indexOf(listener) >= 0) {
	        this.regListeners[type][reg].skRmv(listener);
	      }
	    }
	  }, {
	    key: 'skVal',
	    value: function skVal(id, value) {
	      var oldValue = this.model.skVal(id);
	      if (arguments.length > 1) {
	        if (oldValue != value) {
	          this.model.skVal(id, value);
	          this.fireChangedEvent(id, oldValue, value);
	        }
	        return this;
	      } else {
	        return oldValue;
	      }
	    }
	  }, {
	    key: 'getValidator',
	    value: function getValidator() {
	      return this.validator;
	    }
	  }]);

	  return Model;
	}();

	Model.PROP_SK = 'skModel';
	Model.PROP_SYS = 'skSysModel';
	exports.default = Model;
	module.exports = exports['default'];

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _jquery = __webpack_require__(15);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _skJs = __webpack_require__(5);

	var _skJs2 = _interopRequireDefault(_skJs);

	var _skL10n = __webpack_require__(16);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Validator = function () {

	  /**
	   *
	   * @param configs
	   * {
	   *   "id1": {
	   *     "deps": "option, can be string[reg], string array or object",
	   *     "rule": "..."
	   *   },
	   *   "id2": {
	   *     "deps": "option, can be string[reg], string array or object",
	   *     "required": "..."
	   *   }
	   * }
	   * @param rules
	   */
	  function Validator() {
	    var configs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var rules = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    _classCallCheck(this, Validator);

	    if (Array.isArray(configs)) {
	      this.configs = {};
	      _jquery2.default.extend.apply(_jquery2.default, [true, this.configs].concat(configs));
	    } else {
	      this.configs = configs;
	    }

	    if (arguments.length > 1) {
	      this.rules = _jquery2.default.extend(true, Validator.RULES, rules);
	    } else {
	      this.rules = Validator.RULES;
	    }
	  }

	  _createClass(Validator, [{
	    key: 'getConfigs',
	    value: function getConfigs() {
	      return this.configs;
	    }
	  }, {
	    key: 'getRules',
	    value: function getRules() {
	      return this.rules;
	    }
	  }]);

	  return Validator;
	}();

	Validator.RULES = {
	  required: function required(model, value, settings) {
	    if (settings === false) {
	      // close the required check
	      return true;
	    }
	    if (_skJs2.default.s4s(value) == '') {
	      return _skL10n.I18N.get('${field}_is_required').skFmt(settings);
	    } else {
	      return true;
	    }
	  }
	};
	exports.default = Validator;
	module.exports = exports['default'];

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _lodash = __webpack_require__(9);

	var _lodash2 = _interopRequireDefault(_lodash);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var REACT = {
	  EVENT: {
	    /*Clipboard*/
	    'onCopy': 'onCopy',
	    'onCut': 'onCut',
	    'onPaste': 'onPaste',
	    /*Composition*/
	    'onCompositionEnd': 'onCompositionEnd',
	    'onCompositionStart': 'onCompositionStart',
	    'onCompositionUpdate': 'onCompositionUpdate',
	    /*Keyboard*/
	    'onKeyDown': 'onKeyDown',
	    'onKeyPress': 'onKeyPress',
	    'onKeyUp': 'onKeyUp',
	    /*Focus*/
	    'onFocus': 'onFocus',
	    'onBlur': 'onBlur',
	    /*Form*/
	    'onChange': 'onChange',
	    'onInput': 'onInput',
	    'onSubmit': 'onSubmit',
	    /*Mouse*/
	    'onClick': 'onClick',
	    'onContextMenu': 'onContextMenu',
	    'onDoubleClick': 'onDoubleClick',
	    'onDrag': 'onDrag',
	    'onDragEnd': 'onDragEnd',
	    'onDragEnter': 'onDragEnter',
	    'onDragExit': 'onDragExit',
	    'onDragLeave': 'onDragLeave',
	    'onDragOver': 'onDragOver',
	    'onDragStart': 'onDragStart',
	    'onDrop': 'onDrop',
	    'onMouseDown': 'onMouseDown',
	    'onMouseEnter': 'onMouseEnter',
	    'onMouseLeave': 'onMouseLeave',
	    'onMouseMove': 'onMouseMove',
	    'onMouseOut': 'onMouseOut',
	    'onMouseOver': 'onMouseOver',
	    'onMouseUp': 'onMouseUp',
	    /*Selection*/
	    'onSelect': 'onSelect',
	    /*Touch*/
	    'onTouchCancel': 'onTouchCancel',
	    'onTouchEnd': 'onTouchEnd',
	    'onTouchMove': 'onTouchMove',
	    'onTouchStart': 'onTouchStart',
	    /*UI*/
	    'onScroll': 'onScroll',
	    /*Wheel*/
	    'onWheel': 'onWheel',
	    /*Media*/
	    'onAbort': 'onAbort',
	    'onCanPlay': 'onCanPlay',
	    'onCanPlayThrough': 'onCanPlayThrough',
	    'onDurationChange': 'onDurationChange',
	    'onEmptied': 'onEmptied',
	    'onEncrypted': 'onEncrypted',
	    'onEnded': 'onEnded',
	    'onError': 'onError',
	    'onLoadedData': 'onLoadedData',
	    'onLoadedMetadata': 'onLoadedMetadata',
	    'onLoadStart': 'onLoadStart',
	    'onPause': 'onPause',
	    'onPlay': 'onPlay',
	    'onPlaying': 'onPlaying',
	    'onProgress': 'onProgress',
	    'onRateChange': 'onRateChange',
	    'onSeeked': 'onSeeked',
	    'onSeeking': 'onSeeking',
	    'onStalled': 'onStalled',
	    'onSuspend': 'onSuspend',
	    'onTimeUpdate': 'onTimeUpdate',
	    'onVolumeChange': 'onVolumeChange',
	    'onWaiting': 'onWaiting',
	    /*Image*/
	    'onLoad': 'onLoad',
	    // 'onError': 'onError',
	    /*Animation*/
	    'onAnimationStart': 'onAnimationStart',
	    'onAnimationEnd': 'onAnimationEnd',
	    'onAnimationIteration': 'onAnimationIteration',
	    /*Transition*/
	    'onTransitionEnd': 'onTransitionEnd'
	  },
	  PROP: {
	    'key': 'key',
	    /*HTML*/
	    'accept': 'accept',
	    'acceptCharset': 'acceptCharset',
	    'accessKey': 'accessKey',
	    'action': 'action',
	    'allowFullScreen': 'allowFullScreen',
	    'allowTransparency': 'allowTransparency',
	    'alt': 'alt',
	    'async': 'async',
	    'autoComplete': 'autoComplete',
	    'autoFocus': 'autoFocus',
	    'autoPlay': 'autoPlay',
	    'capture': 'capture',
	    'cellPadding': 'cellPadding',
	    'cellSpacing': 'cellSpacing',
	    'challenge': 'challenge',
	    'charSet': 'charSet',
	    'checked': 'checked',
	    'cite': 'cite',
	    'classID': 'classID',
	    'className': 'className',
	    'cols': 'cols',
	    'colSpan': 'colSpan',
	    'content': 'content',
	    'contentEditable': 'contentEditable',
	    'contextMenu': 'contextMenu',
	    'controls': 'controls',
	    'coords': 'coords',
	    'crossOrigin': 'crossOrigin',
	    'data': 'data',
	    'dateTime': 'dateTime',
	    'default': 'default',
	    'defer': 'defer',
	    'dir': 'dir',
	    'disabled': 'disabled',
	    'download': 'download',
	    'draggable': 'draggable',
	    'encType': 'encType',
	    'form': 'form',
	    'formAction': 'formAction',
	    'formEncType': 'formEncType',
	    'formMethod': 'formMethod',
	    'formNoValidate': 'formNoValidate',
	    'formTarget': 'formTarget',
	    'frameBorder': 'frameBorder',
	    'headers': 'headers',
	    'height': 'height',
	    'hidden': 'hidden',
	    'high': 'high',
	    'href': 'href',
	    'hrefLang': 'hrefLang',
	    'htmlFor': 'htmlFor',
	    'httpEquiv': 'httpEquiv',
	    'icon': 'icon',
	    'id': 'id',
	    'inputMode': 'inputMode',
	    'integrity': 'integrity',
	    'is': 'is',
	    'keyParams': 'keyParams',
	    'keyType': 'keyType',
	    'kind': 'kind',
	    'label': 'label',
	    'lang': 'lang',
	    'list': 'list',
	    'loop': 'loop',
	    'low': 'low',
	    'manifest': 'manifest',
	    'marginHeight': 'marginHeight',
	    'marginWidth': 'marginWidth',
	    'max': 'max',
	    'maxLength': 'maxLength',
	    'media': 'media',
	    'mediaGroup': 'mediaGroup',
	    'method': 'method',
	    'min': 'min',
	    'minLength': 'minLength',
	    'multiple': 'multiple',
	    'muted': 'muted',
	    'name': 'name',
	    'noValidate': 'noValidate',
	    'nonce': 'nonce',
	    'open': 'open',
	    'optimum': 'optimum',
	    'pattern': 'pattern',
	    'placeholder': 'placeholder',
	    'poster': 'poster',
	    'preload': 'preload',
	    'profile': 'profile',
	    'radioGroup': 'radioGroup',
	    'readOnly': 'readOnly',
	    'rel': 'rel',
	    'required': 'required',
	    'reversed': 'reversed',
	    'role': 'role',
	    'rows': 'rows',
	    'rowSpan': 'rowSpan',
	    'sandbox': 'sandbox',
	    'scope': 'scope',
	    'scoped': 'scoped',
	    'scrolling': 'scrolling',
	    'seamless': 'seamless',
	    'selected': 'selected',
	    'shape': 'shape',
	    'size': 'size',
	    'sizes': 'sizes',
	    'span': 'span',
	    'spellCheck': 'spellCheck',
	    'src': 'src',
	    'srcDoc': 'srcDoc',
	    'srcLang': 'srcLang',
	    'srcSet': 'srcSet',
	    'start': 'start',
	    'step': 'step',
	    'style': 'style',
	    'summary': 'summary',
	    'tabIndex': 'tabIndex',
	    'target': 'target',
	    'title': 'title',
	    'type': 'type',
	    'useMap': 'useMap',
	    'value': 'value',
	    'width': 'width',
	    'wmode': 'wmode',
	    'wrap': 'wrap',
	    /*SVG*/
	    'accentHeight': 'accentHeight',
	    'accumulate': 'accumulate',
	    'additive': 'additive',
	    'alignmentBaseline': 'alignmentBaseline',
	    'allowReorder': 'allowReorder',
	    'alphabetic': 'alphabetic',
	    'amplitude': 'amplitude',
	    'arabicForm': 'arabicForm',
	    'ascent': 'ascent',
	    'attributeName': 'attributeName',
	    'attributeType': 'attributeType',
	    'autoReverse': 'autoReverse',
	    'azimuth': 'azimuth',
	    'baseFrequency': 'baseFrequency',
	    'baseProfile': 'baseProfile',
	    'baselineShift': 'baselineShift',
	    'bbox': 'bbox',
	    'begin': 'begin',
	    'bias': 'bias',
	    'by': 'by',
	    'calcMode': 'calcMode',
	    'capHeight': 'capHeight',
	    'clip': 'clip',
	    'clipPath': 'clipPath',
	    'clipPathUnits': 'clipPathUnits',
	    'clipRule': 'clipRule',
	    'colorInterpolation': 'colorInterpolation',
	    'colorInterpolationFilters': 'colorInterpolationFilters',
	    'colorProfile': 'colorProfile',
	    'colorRendering': 'colorRendering',
	    'contentScriptType': 'contentScriptType',
	    'contentStyleType': 'contentStyleType',
	    'cursor': 'cursor',
	    'cx': 'cx',
	    'cy': 'cy',
	    'd': 'd',
	    'decelerate': 'decelerate',
	    'descent': 'descent',
	    'diffuseConstant': 'diffuseConstant',
	    'direction': 'direction',
	    'display': 'display',
	    'divisor': 'divisor',
	    'dominantBaseline': 'dominantBaseline',
	    'dur': 'dur',
	    'dx': 'dx',
	    'dy': 'dy',
	    'edgeMode': 'edgeMode',
	    'elevation': 'elevation',
	    'enableBackground': 'enableBackground',
	    'end': 'end',
	    'exponent': 'exponent',
	    'externalResourcesRequired': 'externalResourcesRequired',
	    'fill': 'fill',
	    'fillOpacity': 'fillOpacity',
	    'fillRule': 'fillRule',
	    'filter': 'filter',
	    'filterRes': 'filterRes',
	    'filterUnits': 'filterUnits',
	    'floodColor': 'floodColor',
	    'floodOpacity': 'floodOpacity',
	    'focusable': 'focusable',
	    'fontFamily': 'fontFamily',
	    'fontSize': 'fontSize',
	    'fontSizeAdjust': 'fontSizeAdjust',
	    'fontStretch': 'fontStretch',
	    'fontStyle': 'fontStyle',
	    'fontVariant': 'fontVariant',
	    'fontWeight': 'fontWeight',
	    'format': 'format',
	    'from': 'from',
	    'fx': 'fx',
	    'fy': 'fy',
	    'g1': 'g1',
	    'g2': 'g2',
	    'glyphName': 'glyphName',
	    'glyphOrientationHorizontal': 'glyphOrientationHorizontal',
	    'glyphOrientationVertical': 'glyphOrientationVertical',
	    'glyphRef': 'glyphRef',
	    'gradientTransform': 'gradientTransform',
	    'gradientUnits': 'gradientUnits',
	    'hanging': 'hanging',
	    'horizAdvX': 'horizAdvX',
	    'horizOriginX': 'horizOriginX',
	    'ideographic': 'ideographic',
	    'imageRendering': 'imageRendering',
	    'in': 'in',
	    'in2': 'in2',
	    'intercept': 'intercept',
	    'k': 'k',
	    'k1': 'k1',
	    'k2': 'k2',
	    'k3': 'k3',
	    'k4': 'k4',
	    'kernelMatrix': 'kernelMatrix',
	    'kernelUnitLength': 'kernelUnitLength',
	    'kerning': 'kerning',
	    'keyPoints': 'keyPoints',
	    'keySplines': 'keySplines',
	    'keyTimes': 'keyTimes',
	    'lengthAdjust': 'lengthAdjust',
	    'letterSpacing': 'letterSpacing',
	    'lightingColor': 'lightingColor',
	    'limitingConeAngle': 'limitingConeAngle',
	    'local': 'local',
	    'markerEnd': 'markerEnd',
	    'markerHeight': 'markerHeight',
	    'markerMid': 'markerMid',
	    'markerStart': 'markerStart',
	    'markerUnits': 'markerUnits',
	    'markerWidth': 'markerWidth',
	    'mask': 'mask',
	    'maskContentUnits': 'maskContentUnits',
	    'maskUnits': 'maskUnits',
	    'mathematical': 'mathematical',
	    'mode': 'mode',
	    'numOctaves': 'numOctaves',
	    'offset': 'offset',
	    'opacity': 'opacity',
	    'operator': 'operator',
	    'order': 'order',
	    'orient': 'orient',
	    'orientation': 'orientation',
	    'origin': 'origin',
	    'overflow': 'overflow',
	    'overlinePosition': 'overlinePosition',
	    'overlineThickness': 'overlineThickness',
	    'paintOrder': 'paintOrder',
	    'panose1': 'panose1',
	    'pathLength': 'pathLength',
	    'patternContentUnits': 'patternContentUnits',
	    'patternTransform': 'patternTransform',
	    'patternUnits': 'patternUnits',
	    'pointerEvents': 'pointerEvents',
	    'points': 'points',
	    'pointsAtX': 'pointsAtX',
	    'pointsAtY': 'pointsAtY',
	    'pointsAtZ': 'pointsAtZ',
	    'preserveAlpha': 'preserveAlpha',
	    'preserveAspectRatio': 'preserveAspectRatio',
	    'primitiveUnits': 'primitiveUnits',
	    'r': 'r',
	    'radius': 'radius',
	    'refX': 'refX',
	    'refY': 'refY',
	    'renderingIntent': 'renderingIntent',
	    'repeatCount': 'repeatCount',
	    'repeatDur': 'repeatDur',
	    'requiredExtensions': 'requiredExtensions',
	    'requiredFeatures': 'requiredFeatures',
	    'restart': 'restart',
	    'result': 'result',
	    'rotate': 'rotate',
	    'rx': 'rx',
	    'ry': 'ry',
	    'scale': 'scale',
	    'seed': 'seed',
	    'shapeRendering': 'shapeRendering',
	    'slope': 'slope',
	    'spacing': 'spacing',
	    'specularConstant': 'specularConstant',
	    'specularExponent': 'specularExponent',
	    'speed': 'speed',
	    'spreadMethod': 'spreadMethod',
	    'startOffset': 'startOffset',
	    'stdDeviation': 'stdDeviation',
	    'stemh': 'stemh',
	    'stemv': 'stemv',
	    'stitchTiles': 'stitchTiles',
	    'stopColor': 'stopColor',
	    'stopOpacity': 'stopOpacity',
	    'strikethroughPosition': 'strikethroughPosition',
	    'strikethroughThickness': 'strikethroughThickness',
	    'string': 'string',
	    'stroke': 'stroke',
	    'strokeDasharray': 'strokeDasharray',
	    'strokeDashoffset': 'strokeDashoffset',
	    'strokeLinecap': 'strokeLinecap',
	    'strokeLinejoin': 'strokeLinejoin',
	    'strokeMiterlimit': 'strokeMiterlimit',
	    'strokeOpacity': 'strokeOpacity',
	    'strokeWidth': 'strokeWidth',
	    'surfaceScale': 'surfaceScale',
	    'systemLanguage': 'systemLanguage',
	    'tableValues': 'tableValues',
	    'targetX': 'targetX',
	    'targetY': 'targetY',
	    'textAnchor': 'textAnchor',
	    'textDecoration': 'textDecoration',
	    'textLength': 'textLength',
	    'textRendering': 'textRendering',
	    'to': 'to',
	    'transform': 'transform',
	    'u1': 'u1',
	    'u2': 'u2',
	    'underlinePosition': 'underlinePosition',
	    'underlineThickness': 'underlineThickness',
	    'unicode': 'unicode',
	    'unicodeBidi': 'unicodeBidi',
	    'unicodeRange': 'unicodeRange',
	    'unitsPerEm': 'unitsPerEm',
	    'vAlphabetic': 'vAlphabetic',
	    'vHanging': 'vHanging',
	    'vIdeographic': 'vIdeographic',
	    'vMathematical': 'vMathematical',
	    'values': 'values',
	    'vectorEffect': 'vectorEffect',
	    'version': 'version',
	    'vertAdvY': 'vertAdvY',
	    'vertOriginX': 'vertOriginX',
	    'vertOriginY': 'vertOriginY',
	    'viewBox': 'viewBox',
	    'viewTarget': 'viewTarget',
	    'visibility': 'visibility',
	    'widths': 'widths',
	    'wordSpacing': 'wordSpacing',
	    'writingMode': 'writingMode',
	    'x': 'x',
	    'x1': 'x1',
	    'x2': 'x2',
	    'xChannelSelector': 'xChannelSelector',
	    'xHeight': 'xHeight',
	    'xlinkActuate': 'xlinkActuate',
	    'xlinkArcrole': 'xlinkArcrole',
	    'xlinkHref': 'xlinkHref',
	    'xlinkRole': 'xlinkRole',
	    'xlinkShow': 'xlinkShow',
	    'xlinkTitle': 'xlinkTitle',
	    'xlinkType': 'xlinkType',
	    'xmlBase': 'xmlBase',
	    'xmlLang': 'xmlLang',
	    'xmlSpace': 'xmlSpace',
	    'y': 'y',
	    'y1': 'y1',
	    'y2': 'y2',
	    'yChannelSelector': 'yChannelSelector',
	    'z': 'z',
	    'zoomAndPan': 'zoomAndPan'
	  },
	  TAG: {
	    /*HTML*/
	    'a': 'a',
	    'abbr': 'abbr',
	    'address': 'address',
	    'area': 'area',
	    'article': 'article',
	    'aside': 'aside',
	    'audio': 'audio',
	    'b': 'b',
	    'base': 'base',
	    'bdi': 'bdi',
	    'bdo': 'bdo',
	    'big': 'big',
	    'blockquote': 'blockquote',
	    'body': 'body',
	    'br': 'br',
	    'button': 'button',
	    'canvas': 'canvas',
	    'caption': 'caption',
	    'cite': 'cite',
	    'code': 'code',
	    'col': 'col',
	    'colgroup': 'colgroup',
	    'data': 'data',
	    'datalist': 'datalist',
	    'dd': 'dd',
	    'del': 'del',
	    'details': 'details',
	    'dfn': 'dfn',
	    'dialog': 'dialog',
	    'div': 'div',
	    'dl': 'dl',
	    'dt': 'dt',
	    'em': 'em',
	    'embed': 'embed',
	    'fieldset': 'fieldset',
	    'figcaption': 'figcaption',
	    'figure': 'figure',
	    'footer': 'footer',
	    'form': 'form',
	    'h1': 'h1',
	    'h2': 'h2',
	    'h3': 'h3',
	    'h4': 'h4',
	    'h5': 'h5',
	    'h6': 'h6',
	    'head': 'head',
	    'header': 'header',
	    'hgroup': 'hgroup',
	    'hr': 'hr',
	    'html': 'html',
	    'i': 'i',
	    'iframe': 'iframe',
	    'img': 'img',
	    'input': 'input',
	    'ins': 'ins',
	    'kbd': 'kbd',
	    'keygen': 'keygen',
	    'label': 'label',
	    'legend': 'legend',
	    'li': 'li',
	    'link': 'link',
	    'main': 'main',
	    'map': 'map',
	    'mark': 'mark',
	    'menu': 'menu',
	    'menuitem': 'menuitem',
	    'meta': 'meta',
	    'meter': 'meter',
	    'nav': 'nav',
	    'noscript': 'noscript',
	    'object': 'object',
	    'ol': 'ol',
	    'optgroup': 'optgroup',
	    'option': 'option',
	    'output': 'output',
	    'p': 'p',
	    'param': 'param',
	    'picture': 'picture',
	    'pre': 'pre',
	    'progress': 'progress',
	    'q': 'q',
	    'rp': 'rp',
	    'rt': 'rt',
	    'ruby': 'ruby',
	    's': 's',
	    'samp': 'samp',
	    'script': 'script',
	    'section': 'section',
	    'select': 'select',
	    'small': 'small',
	    'source': 'source',
	    'span': 'span',
	    'strong': 'strong',
	    'style': 'style',
	    'sub': 'sub',
	    'summary': 'summary',
	    'sup': 'sup',
	    'table': 'table',
	    'tbody': 'tbody',
	    'td': 'td',
	    'textarea': 'textarea',
	    'tfoot': 'tfoot',
	    'th': 'th',
	    'thead': 'thead',
	    'time': 'time',
	    'title': 'title',
	    'tr': 'tr',
	    'track': 'track',
	    'u': 'u',
	    'ul': 'ul',
	    'var': 'var',
	    'video': 'video',
	    'wbr': 'wbr',
	    /*SVG*/
	    'circle': 'circle',
	    'clipPath': 'clipPath',
	    'defs': 'defs',
	    'ellipse': 'ellipse',
	    'g': 'g',
	    'image': 'image',
	    'line': 'line',
	    'linearGradient': 'linearGradient',
	    'mask': 'mask',
	    'path': 'path',
	    'pattern': 'pattern',
	    'polygon': 'polygon',
	    'polyline': 'polyline',
	    'radialGradient': 'radialGradient',
	    'rect': 'rect',
	    'stop': 'stop',
	    'svg': 'svg',
	    'text': 'text',
	    'tspan': 'tspan'
	  }
	};

	REACT.P = _lodash2.default.assign({}, REACT.EVENT, REACT.PROP);

	exports.default = REACT;
	module.exports = exports['default'];

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ReactUtils = function () {
	  function ReactUtils() {
	    _classCallCheck(this, ReactUtils);
	  }

	  _createClass(ReactUtils, null, [{
	    key: 'map',


	    /**
	     * Iterates through children that are typically specified as `props.children`,
	     * but only maps over children that are "valid components".
	     *
	     * The mapFunction provided index will be normalised to the components mapped,
	     * so an invalid component would not increase the index.
	     *
	     * @param {?*} children Children tree container.
	     * @param {function(*, int)} func.
	     * @param {*} context Context for func.
	     * @return {object} Object containing the ordered map of results.
	     */
	    value: function map(children, func, context) {
	      var index = 0;

	      return _react2.default.Children.map(children, function (child) {
	        if (!_react2.default.isValidElement(child)) {
	          return child;
	        }

	        return func.call(context, child, index++);
	      });
	    }

	    /**
	     * Iterates through children that are "valid components".
	     *
	     * The provided forEachFunc(child, index) will be called for each
	     * leaf child with the index reflecting the position relative to "valid components".
	     *
	     * @param {?*} children Children tree container.
	     * @param {function(*, int)} func.
	     * @param {*} context Context for context.
	     */

	  }, {
	    key: 'forEach',
	    value: function forEach(children, func, context) {
	      var index = 0;

	      _react2.default.Children.forEach(children, function (child) {
	        if (!_react2.default.isValidElement(child)) {
	          return;
	        }

	        func.call(context, child, index++);
	      });
	    }

	    /**
	     * Count the number of "valid components" in the Children container.
	     *
	     * @param {?*} children Children tree container.
	     * @returns {number}
	     */

	  }, {
	    key: 'count',
	    value: function count(children) {
	      var result = 0;

	      _react2.default.Children.forEach(children, function (child) {
	        if (!_react2.default.isValidElement(child)) {
	          return;
	        }

	        ++result;
	      });

	      return result;
	    }

	    /**
	     * Finds children that are typically specified as `props.children`,
	     * but only iterates over children that are "valid components".
	     *
	     * The provided forEachFunc(child, index) will be called for each
	     * leaf child with the index reflecting the position relative to "valid components".
	     *
	     * @param {?*} children Children tree container.
	     * @param {function(*, int)} func.
	     * @param {*} context Context for func.
	     * @returns {array} of children that meet the func return statement
	     */

	  }, {
	    key: 'filter',
	    value: function filter(children, func, context) {
	      var index = 0;
	      var result = [];

	      _react2.default.Children.forEach(children, function (child) {
	        if (!_react2.default.isValidElement(child)) {
	          return;
	        }

	        if (func.call(context, child, index++)) {
	          result.push(child);
	        }
	      });

	      return result;
	    }
	  }, {
	    key: 'find',
	    value: function find(children, func, context) {
	      var index = 0;
	      var result = undefined;

	      _react2.default.Children.forEach(children, function (child) {
	        if (result) {
	          return;
	        }
	        if (!_react2.default.isValidElement(child)) {
	          return;
	        }

	        if (func.call(context, child, index++)) {
	          result = child;
	        }
	      });

	      return result;
	    }
	  }, {
	    key: 'every',
	    value: function every(children, func, context) {
	      var index = 0;
	      var result = true;

	      _react2.default.Children.forEach(children, function (child) {
	        if (!result) {
	          return;
	        }
	        if (!_react2.default.isValidElement(child)) {
	          return;
	        }

	        if (!func.call(context, child, index++)) {
	          result = false;
	        }
	      });

	      return result;
	    }
	  }, {
	    key: 'some',
	    value: function some(children, func, context) {
	      var index = 0;
	      var result = false;

	      _react2.default.Children.forEach(children, function (child) {
	        if (result) {
	          return;
	        }
	        if (!_react2.default.isValidElement(child)) {
	          return;
	        }

	        if (func.call(context, child, index++)) {
	          result = true;
	        }
	      });

	      return result;
	    }
	  }, {
	    key: 'toArray',
	    value: function toArray(children) {
	      var result = [];

	      _react2.default.Children.forEach(children, function (child) {
	        if (!_react2.default.isValidElement(child)) {
	          return;
	        }

	        result.push(child);
	      });

	      return result;
	    }
	  }]);

	  return ReactUtils;
	}();

	exports.default = ReactUtils;
	module.exports = exports['default'];

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _antd = __webpack_require__(7);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _skJs = __webpack_require__(5);

	var _skJs2 = _interopRequireDefault(_skJs);

	var _Comp2 = __webpack_require__(8);

	var _Comp3 = _interopRequireDefault(_Comp2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SKFormItem = function (_Comp) {
	  _inherits(SKFormItem, _Comp);

	  function SKFormItem() {
	    var _ref;

	    _classCallCheck(this, SKFormItem);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _possibleConstructorReturn(this, (_ref = SKFormItem.__proto__ || Object.getPrototypeOf(SKFormItem)).call.apply(_ref, [this].concat(args)));
	  }

	  _createClass(SKFormItem, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          CompTag = _props.compTag,
	          labelCol = _props.labelCol,
	          wrapperCol = _props.wrapperCol;

	      labelCol = labelCol || this.skProp(_Comp3.default.SK_PROPS.FORM_LABEL_COL);
	      wrapperCol = wrapperCol || this.skProp(_Comp3.default.SK_PROPS.FORM_WRAPPER_COL);

	      return _react2.default.createElement(
	        CompTag,
	        _extends({}, this.compValidProps(CompTag), {
	          labelCol: labelCol,
	          wrapperCol: wrapperCol }),
	        this.skPropsTrans()
	      );
	    }
	  }]);

	  return SKFormItem;
	}(_Comp3.default);

	SKFormItem.defaultProps = {
	  compTag: _antd.Form.Item
	};
	SKFormItem.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _antd.Form.Item.propTypes, {});
	exports.default = SKFormItem;
	module.exports = exports['default'];

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _skJs = __webpack_require__(5);

	var _skJs2 = _interopRequireDefault(_skJs);

	var _FormComp2 = __webpack_require__(3);

	var _FormComp3 = _interopRequireDefault(_FormComp2);

	var _SKDatePicker = __webpack_require__(21);

	var _SKDatePicker2 = _interopRequireDefault(_SKDatePicker);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FormDatePicker = function (_FormComp) {
	  _inherits(FormDatePicker, _FormComp);

	  function FormDatePicker() {
	    var _ref;

	    _classCallCheck(this, FormDatePicker);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _possibleConstructorReturn(this, (_ref = FormDatePicker.__proto__ || Object.getPrototypeOf(FormDatePicker)).call.apply(_ref, [this].concat(args)));
	  }

	  return FormDatePicker;
	}(_FormComp3.default);

	FormDatePicker.defaultProps = {
	  compTag: _SKDatePicker2.default
	};
	FormDatePicker.propTypes = _skJs2.default.assign({}, _FormComp3.default.propTypes, _SKDatePicker2.default.propTypes, {});
	exports.default = FormDatePicker;
	module.exports = exports['default'];

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _antd = __webpack_require__(7);

	var _moment = __webpack_require__(22);

	var _moment2 = _interopRequireDefault(_moment);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _skJs = __webpack_require__(5);

	var _skJs2 = _interopRequireDefault(_skJs);

	var _skL10n = __webpack_require__(16);

	var _Comp2 = __webpack_require__(8);

	var _Comp3 = _interopRequireDefault(_Comp2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SKDatePicker = function (_Comp) {
	  _inherits(SKDatePicker, _Comp);

	  function SKDatePicker() {
	    var _ref;

	    _classCallCheck(this, SKDatePicker);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _possibleConstructorReturn(this, (_ref = SKDatePicker.__proto__ || Object.getPrototypeOf(SKDatePicker)).call.apply(_ref, [this].concat(args)));
	  }

	  _createClass(SKDatePicker, [{
	    key: 'handleChange',
	    value: function handleChange(e) {
	      if (e) {
	        this.skVal(e.format(_skJs2.default.DEFAULT_MOMENT_DATE));
	      } else {
	        this.skVal(undefined);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var CompTag = this.props.compTag;


	      return _react2.default.createElement(
	        CompTag,
	        _extends({}, this.compValidProps(CompTag), {
	          onChange: this.handleChange.bind(this),
	          placeholder: _skL10n.I18N.get('Please_select_date'),
	          value: this.skVal() ? (0, _moment2.default)(this.skVal(), _skJs2.default.DEFAULT_MOMENT_DATE) : undefined }),
	        this.skPropsTrans()
	      );
	    }
	  }]);

	  return SKDatePicker;
	}(_Comp3.default);

	SKDatePicker.defaultProps = {
	  compTag: _antd.DatePicker
	};
	SKDatePicker.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _antd.DatePicker.propTypes, {});
	exports.default = SKDatePicker;
	module.exports = exports['default'];

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_22__;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _skJs = __webpack_require__(5);

	var _skJs2 = _interopRequireDefault(_skJs);

	var _FormComp2 = __webpack_require__(3);

	var _FormComp3 = _interopRequireDefault(_FormComp2);

	var _SKInput = __webpack_require__(24);

	var _SKInput2 = _interopRequireDefault(_SKInput);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FormInput = function (_FormComp) {
	  _inherits(FormInput, _FormComp);

	  function FormInput() {
	    var _ref;

	    _classCallCheck(this, FormInput);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _possibleConstructorReturn(this, (_ref = FormInput.__proto__ || Object.getPrototypeOf(FormInput)).call.apply(_ref, [this].concat(args)));
	  }

	  return FormInput;
	}(_FormComp3.default);

	FormInput.defaultProps = {
	  compTag: _SKInput2.default
	};
	FormInput.propTypes = _skJs2.default.assign({}, _FormComp3.default.propTypes, _SKInput2.default.propTypes, {});
	exports.default = FormInput;
	module.exports = exports['default'];

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _antd = __webpack_require__(7);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _skJs = __webpack_require__(5);

	var _skJs2 = _interopRequireDefault(_skJs);

	var _Comp2 = __webpack_require__(8);

	var _Comp3 = _interopRequireDefault(_Comp2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SKInput = function (_Comp) {
	  _inherits(SKInput, _Comp);

	  function SKInput() {
	    var _ref;

	    _classCallCheck(this, SKInput);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _possibleConstructorReturn(this, (_ref = SKInput.__proto__ || Object.getPrototypeOf(SKInput)).call.apply(_ref, [this].concat(args)));
	  }

	  _createClass(SKInput, [{
	    key: 'handleChange',
	    value: function handleChange(e) {
	      this.skVal(e.target.value);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var CompTag = this.props.compTag;


	      return _react2.default.createElement(
	        CompTag,
	        _extends({}, this.compValidProps(CompTag), {
	          onChange: this.handleChange.bind(this),
	          value: this.skVal() }),
	        this.skPropsTrans()
	      );
	    }
	  }]);

	  return SKInput;
	}(_Comp3.default);

	SKInput.defaultProps = {
	  compTag: _antd.Input
	};
	SKInput.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _antd.Input.propTypes, {});
	exports.default = SKInput;
	module.exports = exports['default'];

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _antd = __webpack_require__(7);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _skJs = __webpack_require__(5);

	var _skJs2 = _interopRequireDefault(_skJs);

	var _Comp2 = __webpack_require__(8);

	var _Comp3 = _interopRequireDefault(_Comp2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SKBadge = function (_Comp) {
	  _inherits(SKBadge, _Comp);

	  function SKBadge() {
	    var _ref;

	    _classCallCheck(this, SKBadge);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _possibleConstructorReturn(this, (_ref = SKBadge.__proto__ || Object.getPrototypeOf(SKBadge)).call.apply(_ref, [this].concat(args)));
	  }

	  _createClass(SKBadge, [{
	    key: 'render',
	    value: function render() {
	      var CompTag = this.props.compTag;


	      return _react2.default.createElement(
	        CompTag,
	        _extends({}, this.compValidProps(CompTag), { count: this.skVal() }),
	        this.skPropsTrans()
	      );
	    }
	  }]);

	  return SKBadge;
	}(_Comp3.default);

	SKBadge.defaultProps = {
	  compTag: _antd.Badge
	};
	SKBadge.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _antd.Badge.propTypes, {});
	exports.default = SKBadge;
	module.exports = exports['default'];

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _antd = __webpack_require__(7);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _skJs = __webpack_require__(5);

	var _skJs2 = _interopRequireDefault(_skJs);

	var _Comp2 = __webpack_require__(8);

	var _Comp3 = _interopRequireDefault(_Comp2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SKCol = function (_Comp) {
	  _inherits(SKCol, _Comp);

	  function SKCol() {
	    var _ref;

	    _classCallCheck(this, SKCol);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _possibleConstructorReturn(this, (_ref = SKCol.__proto__ || Object.getPrototypeOf(SKCol)).call.apply(_ref, [this].concat(args)));
	  }

	  _createClass(SKCol, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          CompTag = _props.compTag,
	          routes = _props.routes,
	          params = _props.params;


	      return _react2.default.createElement(
	        CompTag,
	        _extends({}, this.compValidProps(CompTag), {
	          params: params,
	          routes: routes }),
	        this.skPropsTrans()
	      );
	    }
	  }]);

	  return SKCol;
	}(_Comp3.default);

	SKCol.defaultProps = {
	  compTag: _antd.Breadcrumb
	};
	SKCol.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _antd.Breadcrumb.propTypes, {});
	exports.default = SKCol;
	module.exports = exports['default'];

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _antd = __webpack_require__(7);

	var _skJs = __webpack_require__(5);

	var _skJs2 = _interopRequireDefault(_skJs);

	var _Comp2 = __webpack_require__(8);

	var _Comp3 = _interopRequireDefault(_Comp2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SKButton = function (_Comp) {
	  _inherits(SKButton, _Comp);

	  function SKButton() {
	    var _ref;

	    _classCallCheck(this, SKButton);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _possibleConstructorReturn(this, (_ref = SKButton.__proto__ || Object.getPrototypeOf(SKButton)).call.apply(_ref, [this].concat(args)));
	  }

	  return SKButton;
	}(_Comp3.default);

	SKButton.defaultProps = {
	  compTag: _antd.Button
	};
	SKButton.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _antd.Button.propTypes, {});
	exports.default = SKButton;
	module.exports = exports['default'];

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _antd = __webpack_require__(7);

	var _skJs = __webpack_require__(5);

	var _skJs2 = _interopRequireDefault(_skJs);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _Comp2 = __webpack_require__(8);

	var _Comp3 = _interopRequireDefault(_Comp2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	_antd.Card.propTypes = _skJs2.default.assign({}, _antd.Card.propTypes, {
	  bodyStyle: _react2.default.PropTypes.object
	}, {});

	var SKCard = function (_Comp) {
	  _inherits(SKCard, _Comp);

	  function SKCard() {
	    var _ref;

	    _classCallCheck(this, SKCard);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _possibleConstructorReturn(this, (_ref = SKCard.__proto__ || Object.getPrototypeOf(SKCard)).call.apply(_ref, [this].concat(args)));
	  }

	  return SKCard;
	}(_Comp3.default);

	SKCard.defaultProps = {
	  compTag: _antd.Card
	};
	SKCard.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _antd.Card.propTypes, {});
	exports.default = SKCard;
	module.exports = exports['default'];

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _antd = __webpack_require__(7);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _skJs = __webpack_require__(5);

	var _skJs2 = _interopRequireDefault(_skJs);

	var _Comp2 = __webpack_require__(8);

	var _Comp3 = _interopRequireDefault(_Comp2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SKCheckbox = function (_Comp) {
	  _inherits(SKCheckbox, _Comp);

	  function SKCheckbox() {
	    var _ref;

	    _classCallCheck(this, SKCheckbox);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _possibleConstructorReturn(this, (_ref = SKCheckbox.__proto__ || Object.getPrototypeOf(SKCheckbox)).call.apply(_ref, [this].concat(args)));
	  }

	  _createClass(SKCheckbox, [{
	    key: 'handleChange',
	    value: function handleChange(e) {
	      this.skVal(e.target.checked);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var CompTag = this.props.compTag;


	      return _react2.default.createElement(
	        CompTag,
	        _extends({}, this.compValidProps(CompTag), {
	          checked: this.skVal(),
	          onChange: this.handleChange.bind(this) }),
	        this.skPropsTrans()
	      );
	    }
	  }]);

	  return SKCheckbox;
	}(_Comp3.default);

	SKCheckbox.defaultProps = {
	  compTag: _antd.Checkbox
	};
	SKCheckbox.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _antd.Checkbox.propTypes, {});
	exports.default = SKCheckbox;
	module.exports = exports['default'];

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _antd = __webpack_require__(7);

	var _skJs = __webpack_require__(5);

	var _skJs2 = _interopRequireDefault(_skJs);

	var _Comp2 = __webpack_require__(8);

	var _Comp3 = _interopRequireDefault(_Comp2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SKContent = function (_Comp) {
	  _inherits(SKContent, _Comp);

	  function SKContent() {
	    var _ref;

	    _classCallCheck(this, SKContent);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _possibleConstructorReturn(this, (_ref = SKContent.__proto__ || Object.getPrototypeOf(SKContent)).call.apply(_ref, [this].concat(args)));
	  }

	  return SKContent;
	}(_Comp3.default);

	SKContent.defaultProps = {
	  compTag: _antd.Layout.Content
	};
	SKContent.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _antd.Layout.Content.propTypes, {});
	exports.default = SKContent;
	module.exports = exports['default'];

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _antd = __webpack_require__(7);

	var _skJs = __webpack_require__(5);

	var _skJs2 = _interopRequireDefault(_skJs);

	var _Comp2 = __webpack_require__(8);

	var _Comp3 = _interopRequireDefault(_Comp2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SKHeader = function (_Comp) {
	  _inherits(SKHeader, _Comp);

	  function SKHeader() {
	    var _ref;

	    _classCallCheck(this, SKHeader);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _possibleConstructorReturn(this, (_ref = SKHeader.__proto__ || Object.getPrototypeOf(SKHeader)).call.apply(_ref, [this].concat(args)));
	  }

	  return SKHeader;
	}(_Comp3.default);

	SKHeader.defaultProps = {
	  compTag: _antd.Layout.Footer
	};
	SKHeader.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _antd.Layout.Footer.propTypes, {});
	exports.default = SKHeader;
	module.exports = exports['default'];

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _antd = __webpack_require__(7);

	var _skJs = __webpack_require__(5);

	var _skJs2 = _interopRequireDefault(_skJs);

	var _Comp2 = __webpack_require__(8);

	var _Comp3 = _interopRequireDefault(_Comp2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SKForm = function (_Comp) {
	  _inherits(SKForm, _Comp);

	  function SKForm() {
	    var _ref;

	    _classCallCheck(this, SKForm);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _possibleConstructorReturn(this, (_ref = SKForm.__proto__ || Object.getPrototypeOf(SKForm)).call.apply(_ref, [this].concat(args)));
	  }

	  return SKForm;
	}(_Comp3.default);

	SKForm.defaultProps = {
	  compTag: _antd.Form
	};
	SKForm.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _antd.Form.propTypes, {});
	exports.default = SKForm;
	module.exports = exports['default'];

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _antd = __webpack_require__(7);

	var _skJs = __webpack_require__(5);

	var _skJs2 = _interopRequireDefault(_skJs);

	var _Comp2 = __webpack_require__(8);

	var _Comp3 = _interopRequireDefault(_Comp2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SKHeader = function (_Comp) {
	  _inherits(SKHeader, _Comp);

	  function SKHeader() {
	    var _ref;

	    _classCallCheck(this, SKHeader);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _possibleConstructorReturn(this, (_ref = SKHeader.__proto__ || Object.getPrototypeOf(SKHeader)).call.apply(_ref, [this].concat(args)));
	  }

	  return SKHeader;
	}(_Comp3.default);

	SKHeader.defaultProps = {
	  compTag: _antd.Layout.Header
	};
	SKHeader.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _antd.Layout.Header.propTypes, {});
	exports.default = SKHeader;
	module.exports = exports['default'];

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _antd = __webpack_require__(7);

	var _skJs = __webpack_require__(5);

	var _skJs2 = _interopRequireDefault(_skJs);

	var _Comp2 = __webpack_require__(8);

	var _Comp3 = _interopRequireDefault(_Comp2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SKIcon = function (_Comp) {
	  _inherits(SKIcon, _Comp);

	  function SKIcon() {
	    var _ref;

	    _classCallCheck(this, SKIcon);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _possibleConstructorReturn(this, (_ref = SKIcon.__proto__ || Object.getPrototypeOf(SKIcon)).call.apply(_ref, [this].concat(args)));
	  }

	  return SKIcon;
	}(_Comp3.default);

	SKIcon.defaultProps = {
	  compTag: _antd.Icon
	};
	SKIcon.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _antd.Icon.propTypes, {});
	exports.default = SKIcon;
	module.exports = exports['default'];

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dedupe = __webpack_require__(36);

	var _dedupe2 = _interopRequireDefault(_dedupe);

	var _antd = __webpack_require__(7);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _skJs = __webpack_require__(5);

	var _skJs2 = _interopRequireDefault(_skJs);

	var _Comp2 = __webpack_require__(8);

	var _Comp3 = _interopRequireDefault(_Comp2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SKLayout = function (_Comp) {
	  _inherits(SKLayout, _Comp);

	  function SKLayout() {
	    var _ref;

	    _classCallCheck(this, SKLayout);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _possibleConstructorReturn(this, (_ref = SKLayout.__proto__ || Object.getPrototypeOf(SKLayout)).call.apply(_ref, [this].concat(args)));
	  }

	  _createClass(SKLayout, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          CompTag = _props.compTag,
	          className = _props.className;


	      var classes = {};
	      classes['ant-layout-has-sider'] = this.hasSpecialChild('SKSider');

	      return _react2.default.createElement(
	        CompTag,
	        _extends({}, this.compValidProps(CompTag), { className: (0, _dedupe2.default)(classes, className) }),
	        this.skPropsTrans()
	      );
	    }
	  }]);

	  return SKLayout;
	}(_Comp3.default);

	SKLayout.defaultProps = {
	  compTag: _antd.Layout
	};
	SKLayout.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _antd.Layout.propTypes, {});
	exports.default = SKLayout;
	module.exports = exports['default'];

/***/ }),
/* 36 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_36__;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _antd = __webpack_require__(7);

	var _lodash = __webpack_require__(9);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(38);

	var _skJs = __webpack_require__(5);

	var _skJs2 = _interopRequireDefault(_skJs);

	var _Comp2 = __webpack_require__(8);

	var _Comp3 = _interopRequireDefault(_Comp2);

	var _SKIcon = __webpack_require__(34);

	var _SKIcon2 = _interopRequireDefault(_SKIcon);

	var _SKMenuItem = __webpack_require__(39);

	var _SKMenuItem2 = _interopRequireDefault(_SKMenuItem);

	var _SKSubMenu = __webpack_require__(40);

	var _SKSubMenu2 = _interopRequireDefault(_SKSubMenu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	_antd.Menu.propTypes = _skJs2.default.assign({}, _antd.Menu.propTypes, {
	  inlineIndent: _react2.default.PropTypes.number
	}, {
	  level: _react2.default.PropTypes.number
	});

	_antd.Menu.defaultProps = _skJs2.default.assign({}, _antd.Menu.defaultProps, {
	  inlineIndent: 24
	}, {});

	var SKMenu = function (_Comp) {
	  _inherits(SKMenu, _Comp);

	  function SKMenu() {
	    var _ref;

	    _classCallCheck(this, SKMenu);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _possibleConstructorReturn(this, (_ref = SKMenu.__proto__ || Object.getPrototypeOf(SKMenu)).call.apply(_ref, [this].concat(args)));
	  }

	  _createClass(SKMenu, [{
	    key: 'handleOpenChange',
	    value: function handleOpenChange(es) {
	      if (this.props.onOpenChange && _lodash2.default.isFunction(this.props.onOpenChange)) {
	        this.props.onOpenChange(es);
	      }
	      var newVal = _lodash2.default.clone(this.skVal());
	      newVal.openKeys = es.slice(0);
	      this.skVal(newVal);
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick(e) {
	      if (this.props.onClick && _lodash2.default.isFunction(this.props.onClick)) {
	        this.props.onClick(e);
	      }
	      var newVal = _lodash2.default.clone(this.skVal());
	      // newVal.openKeys = this.skVal().openKeys;
	      newVal.selectedKeys = [e.key];
	      this.skVal(newVal);
	    }
	  }, {
	    key: 'menuMap',
	    value: function menuMap(menuCfg) {
	      var _props = this.props,
	          displayItem = _props.displayItem,
	          menuCfgs = _props.menuCfgs,
	          mode = _props.mode;


	      var displayTitle = mode == 'inline' || menuCfgs.indexOf(menuCfg) == -1;
	      var rtnCfgs = [];

	      if (menuCfg.children && !_lodash2.default.isEmpty(menuCfg.children)) {
	        rtnCfgs.push(_react2.default.createElement(
	          _SKSubMenu2.default,
	          { key: menuCfg.router, title: _react2.default.createElement(
	              'span',
	              null,
	              _react2.default.createElement(_SKIcon2.default, { type: menuCfg.icon }),
	              _react2.default.createElement(
	                'span',
	                null,
	                displayTitle && menuCfg.title
	              )
	            ) },
	          menuCfg.children.map(this.menuMap.bind(this))
	        ));
	      } else {
	        if (displayItem && displayItem(menuCfg)) {
	          rtnCfgs.push(_react2.default.createElement(
	            _SKMenuItem2.default,
	            { key: menuCfg.router },
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { to: menuCfg.router },
	              menuCfg.icon && _react2.default.createElement(_SKIcon2.default, { type: menuCfg.icon }),
	              displayTitle && menuCfg.title
	            )
	          ));
	        }
	      }
	      return rtnCfgs;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props2 = this.props,
	          CompTag = _props2.compTag,
	          menuCfgs = _props2.menuCfgs,
	          mode = _props2.mode,
	          theme = _props2.theme;


	      return _react2.default.createElement(
	        CompTag,
	        _extends({}, this.compValidProps(CompTag), {
	          mode: mode,
	          onClick: this.handleClick.bind(this),
	          onOpenChange: this.handleOpenChange.bind(this),
	          openKeys: this.skVal().openKeys,
	          selectedKeys: this.skVal().selectedKeys,
	          theme: theme }),
	        menuCfgs.map(function (menuCfg) {
	          return _this2.menuMap(menuCfg);
	        })
	      );
	    }
	  }]);

	  return SKMenu;
	}(_Comp3.default);

	SKMenu.defaultProps = _skJs2.default.assign({}, _antd.Menu.defaultProps, {
	  compTag: _antd.Menu,
	  displayItem: function displayItem() {
	    return true;
	  },
	  displayTitle: true
	});
	SKMenu.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _SKMenuItem2.default.propTypes, _SKSubMenu2.default.propTypes, _antd.Menu.propTypes, {
	  displayItem: _react2.default.PropTypes.func,
	  displayTitle: _react2.default.PropTypes.bool
	});
	exports.default = SKMenu;
	module.exports = exports['default'];

/***/ }),
/* 38 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_38__;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _antd = __webpack_require__(7);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _skJs = __webpack_require__(5);

	var _skJs2 = _interopRequireDefault(_skJs);

	var _Comp2 = __webpack_require__(8);

	var _Comp3 = _interopRequireDefault(_Comp2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	_antd.Menu.Item.propTypes = _skJs2.default.assign({}, _antd.Menu.Item.propTypes, {}, {
	  inlineIndent: _react2.default.PropTypes.number,
	  level: _react2.default.PropTypes.number
	});

	// Menu.Item.defaultProps = SK.assign({}, Menu.Item.defaultProps, {
	//   inlineIndent: 24
	// });

	var SKMenuItem = function (_Comp) {
	  _inherits(SKMenuItem, _Comp);

	  function SKMenuItem() {
	    var _ref;

	    _classCallCheck(this, SKMenuItem);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _possibleConstructorReturn(this, (_ref = SKMenuItem.__proto__ || Object.getPrototypeOf(SKMenuItem)).call.apply(_ref, [this].concat(args)));
	  }

	  return SKMenuItem;
	}(_Comp3.default);

	SKMenuItem.defaultProps = _skJs2.default.assign({}, _antd.Menu.Item.defaultProps, {
	  compTag: _antd.Menu.Item
	});
	SKMenuItem.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _antd.Menu.Item.propTypes, {});
	exports.default = SKMenuItem;
	module.exports = exports['default'];

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _antd = __webpack_require__(7);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _skJs = __webpack_require__(5);

	var _skJs2 = _interopRequireDefault(_skJs);

	var _Comp2 = __webpack_require__(8);

	var _Comp3 = _interopRequireDefault(_Comp2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	_antd.Menu.SubMenu.propTypes = _skJs2.default.assign({}, _antd.Menu.SubMenu.propTypes, {}, {
	  inlineIndent: _react2.default.PropTypes.number,
	  level: _react2.default.PropTypes.number
	});

	// Menu.SubMenu.defaultProps = SK.assign({}, Menu.SubMenu.defaultProps, {
	//   inlineIndent: 24
	// });

	var SKSubMenu = function (_Comp) {
	  _inherits(SKSubMenu, _Comp);

	  function SKSubMenu() {
	    var _ref;

	    _classCallCheck(this, SKSubMenu);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _possibleConstructorReturn(this, (_ref = SKSubMenu.__proto__ || Object.getPrototypeOf(SKSubMenu)).call.apply(_ref, [this].concat(args)));
	  }

	  return SKSubMenu;
	}(_Comp3.default);

	SKSubMenu.defaultProps = _skJs2.default.assign({}, _antd.Menu.SubMenu.defaultProps, {
	  compTag: _antd.Menu.SubMenu
	});
	SKSubMenu.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _antd.Menu.SubMenu.propTypes, {});
	exports.default = SKSubMenu;
	module.exports = exports['default'];

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _antd = __webpack_require__(7);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _skJs = __webpack_require__(5);

	var _skJs2 = _interopRequireDefault(_skJs);

	var _Comp2 = __webpack_require__(8);

	var _Comp3 = _interopRequireDefault(_Comp2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	_antd.Popover.propTypes = _skJs2.default.assign({}, _antd.Popover.propTypes, {
	  onVisibleChange: _react2.default.PropTypes.func,
	  overlayClassName: _react2.default.PropTypes.string,
	  placement: _react2.default.PropTypes.string,
	  visible: _react2.default.PropTypes.bool,
	  trigger: _react2.default.PropTypes.string
	}, {});

	var SKPopover = function (_Comp) {
	  _inherits(SKPopover, _Comp);

	  function SKPopover() {
	    var _ref;

	    _classCallCheck(this, SKPopover);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _possibleConstructorReturn(this, (_ref = SKPopover.__proto__ || Object.getPrototypeOf(SKPopover)).call.apply(_ref, [this].concat(args)));
	  }

	  _createClass(SKPopover, [{
	    key: 'handleVisibleChange',
	    value: function handleVisibleChange(visible) {
	      this.skVal(visible);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var CompTag = this.props.compTag;


	      return _react2.default.createElement(
	        CompTag,
	        _extends({}, this.compValidProps(CompTag), {
	          onVisibleChange: this.handleVisibleChange.bind(this),
	          visible: this.skVal() }),
	        this.skPropsTrans()
	      );
	    }
	  }]);

	  return SKPopover;
	}(_Comp3.default);

	SKPopover.defaultProps = {
	  compTag: _antd.Popover
	};
	SKPopover.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _antd.Popover.propTypes, {});
	exports.default = SKPopover;
	module.exports = exports['default'];

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _antd = __webpack_require__(7);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _skJs = __webpack_require__(5);

	var _skJs2 = _interopRequireDefault(_skJs);

	var _Comp2 = __webpack_require__(8);

	var _Comp3 = _interopRequireDefault(_Comp2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SKRow = function (_Comp) {
	  _inherits(SKRow, _Comp);

	  function SKRow() {
	    var _ref;

	    _classCallCheck(this, SKRow);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _possibleConstructorReturn(this, (_ref = SKRow.__proto__ || Object.getPrototypeOf(SKRow)).call.apply(_ref, [this].concat(args)));
	  }

	  _createClass(SKRow, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          CompTag = _props.compTag,
	          gutter = _props.gutter;

	      gutter = gutter || this.skProp(_Comp3.default.SK_PROPS.GRID_GUTTER);

	      return _react2.default.createElement(
	        CompTag,
	        _extends({}, this.compValidProps(CompTag), {
	          gutter: gutter }),
	        this.skPropsTrans()
	      );
	    }
	  }]);

	  return SKRow;
	}(_Comp3.default);

	SKRow.defaultProps = {
	  compTag: _antd.Row
	};
	SKRow.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _antd.Row.propTypes, {});
	exports.default = SKRow;
	module.exports = exports['default'];

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _antd = __webpack_require__(7);

	var _lodash = __webpack_require__(9);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _skJs = __webpack_require__(5);

	var _skJs2 = _interopRequireDefault(_skJs);

	var _SKInput2 = __webpack_require__(24);

	var _SKInput3 = _interopRequireDefault(_SKInput2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SKSearch = function (_SKInput) {
	  _inherits(SKSearch, _SKInput);

	  function SKSearch() {
	    var _ref;

	    _classCallCheck(this, SKSearch);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _possibleConstructorReturn(this, (_ref = SKSearch.__proto__ || Object.getPrototypeOf(SKSearch)).call.apply(_ref, [this].concat(args)));
	  }

	  _createClass(SKSearch, [{
	    key: 'handleSearch',
	    value: function handleSearch(value) {
	      if (this.props.searchFuncId) {
	        var searchFunc = this.iModel().skVal(this.props.searchFuncId);
	        if (_lodash2.default.isFunction(searchFunc)) {
	          searchFunc(value);
	        }
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var CompTag = this.props.compTag;


	      return _react2.default.createElement(
	        CompTag,
	        _extends({}, this.compValidProps(CompTag), {
	          onChange: this.handleChange.bind(this),
	          onSearch: this.handleSearch.bind(this),
	          value: this.skVal() }),
	        this.skPropsTrans()
	      );
	    }
	  }]);

	  return SKSearch;
	}(_SKInput3.default);

	SKSearch.defaultProps = _skJs2.default.assign({}, _antd.Input.Search.defaultProps, {
	  compTag: _antd.Input.Search
	});
	SKSearch.propTypes = _skJs2.default.assign({}, _SKInput3.default.propTypes, _antd.Input.Search.propTypes, {
	  searchFuncId: _react2.default.PropTypes.string
	});
	exports.default = SKSearch;
	module.exports = exports['default'];

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _antd = __webpack_require__(7);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _skJs = __webpack_require__(5);

	var _skJs2 = _interopRequireDefault(_skJs);

	var _Comp2 = __webpack_require__(8);

	var _Comp3 = _interopRequireDefault(_Comp2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	_antd.Layout.Sider.propTypes = _skJs2.default.assign({}, _antd.Layout.Sider.propTypes, {
	  collapsed: _react2.default.PropTypes.bool,
	  collapsedWidth: _react2.default.PropTypes.number,
	  collapsible: _react2.default.PropTypes.bool,
	  onCollapse: _react2.default.PropTypes.func,
	  trigger: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.node]),
	  width: _react2.default.PropTypes.number
	}, {});

	var SKSider = function (_Comp) {
	  _inherits(SKSider, _Comp);

	  function SKSider() {
	    var _ref;

	    _classCallCheck(this, SKSider);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _possibleConstructorReturn(this, (_ref = SKSider.__proto__ || Object.getPrototypeOf(SKSider)).call.apply(_ref, [this].concat(args)));
	  }

	  return SKSider;
	}(_Comp3.default);

	SKSider.defaultProps = {
	  compTag: _antd.Layout.Sider
	};
	SKSider.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _antd.Layout.Sider.propTypes, {});
	exports.default = SKSider;
	module.exports = exports['default'];

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _antd = __webpack_require__(7);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _skJs = __webpack_require__(5);

	var _skJs2 = _interopRequireDefault(_skJs);

	var _Comp2 = __webpack_require__(8);

	var _Comp3 = _interopRequireDefault(_Comp2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	_antd.Spin.propTypes = _skJs2.default.assign({}, _antd.Spin.propTypes, {
	  tip: _react2.default.PropTypes.string
	}, {});

	var SKSpin = function (_Comp) {
	  _inherits(SKSpin, _Comp);

	  function SKSpin() {
	    var _ref;

	    _classCallCheck(this, SKSpin);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _possibleConstructorReturn(this, (_ref = SKSpin.__proto__ || Object.getPrototypeOf(SKSpin)).call.apply(_ref, [this].concat(args)));
	  }

	  _createClass(SKSpin, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          CompTag = _props.compTag,
	          className = _props.className;


	      return _react2.default.createElement(
	        CompTag,
	        _extends({}, this.compValidProps(CompTag), {
	          className: className,
	          spinning: this.skVal() }),
	        this.skPropsTrans()
	      );
	    }
	  }]);

	  return SKSpin;
	}(_Comp3.default);

	SKSpin.defaultProps = {
	  compTag: _antd.Spin
	};
	SKSpin.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _antd.Spin.propTypes, {});
	exports.default = SKSpin;
	module.exports = exports['default'];

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _antd = __webpack_require__(7);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _skJs = __webpack_require__(5);

	var _skJs2 = _interopRequireDefault(_skJs);

	var _Comp2 = __webpack_require__(8);

	var _Comp3 = _interopRequireDefault(_Comp2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SKSwitch = function (_Comp) {
	  _inherits(SKSwitch, _Comp);

	  function SKSwitch() {
	    var _ref;

	    _classCallCheck(this, SKSwitch);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _possibleConstructorReturn(this, (_ref = SKSwitch.__proto__ || Object.getPrototypeOf(SKSwitch)).call.apply(_ref, [this].concat(args)));
	  }

	  _createClass(SKSwitch, [{
	    key: 'handleChange',
	    value: function handleChange(e) {
	      this.skVal(e);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          CompTag = _props.compTag,
	          checkedChildren = _props.checkedChildren,
	          unCheckedChildren = _props.unCheckedChildren;


	      return _react2.default.createElement(CompTag, _extends({}, this.compValidProps(CompTag), {
	        checked: this.skVal(),
	        checkedChildren: checkedChildren,
	        onChange: this.handleChange.bind(this),
	        unCheckedChildren: unCheckedChildren }));
	    }
	  }]);

	  return SKSwitch;
	}(_Comp3.default);

	SKSwitch.defaultProps = {
	  compTag: _antd.Switch
	};
	SKSwitch.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _antd.Switch.propTypes, {});
	exports.default = SKSwitch;
	module.exports = exports['default'];

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _antd = __webpack_require__(7);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _skJs = __webpack_require__(5);

	var _skJs2 = _interopRequireDefault(_skJs);

	var _Comp2 = __webpack_require__(8);

	var _Comp3 = _interopRequireDefault(_Comp2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	_antd.Table.propTypes = _skJs2.default.assign({}, _antd.Table.propTypes, {
	  rowKey: _react2.default.PropTypes.func,
	  scroll: _react2.default.PropTypes.object,
	  size: _react2.default.PropTypes.string
	}, {});

	var SKTable = function (_Comp) {
	  _inherits(SKTable, _Comp);

	  function SKTable() {
	    var _ref;

	    _classCallCheck(this, SKTable);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _possibleConstructorReturn(this, (_ref = SKTable.__proto__ || Object.getPrototypeOf(SKTable)).call.apply(_ref, [this].concat(args)));
	  }

	  _createClass(SKTable, [{
	    key: 'addExtendChangedMonitor',
	    value: function addExtendChangedMonitor() {
	      if (!_.isEmpty(this.props.loadingId)) {
	        this.addChangedMonitor(this.props.loadingId);
	      }
	      if (!_.isEmpty(this.props.paginationId)) {
	        this.addChangedMonitor(this.props.paginationId);
	      }
	    }
	  }, {
	    key: 'rmvExtendChangedMonitor',
	    value: function rmvExtendChangedMonitor() {
	      if (!_.isEmpty(this.props.loadingId)) {
	        this.rmvChangedMonitor(this.props.loadingId);
	      }
	      if (!_.isEmpty(this.props.paginationId)) {
	        this.rmvChangedMonitor(this.props.paginationId);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          CompTag = _props.compTag,
	          columns = _props.columns,
	          scroll = _props.scroll;


	      var tmpScroll = { y: false };
	      tmpScroll.x = columns.reduce(function ($sum, $item) {
	        return $sum + $item.width;
	      }, 0);
	      tmpScroll = scroll || tmpScroll;

	      return _react2.default.createElement(CompTag, _extends({}, this.compValidProps(CompTag), {
	        dataSource: this.skVal(),
	        loading: this.iModel().skVal(this.props.loadingId),
	        pagination: this.iModel().skVal(this.props.paginationId),
	        scroll: tmpScroll }));
	    }
	  }]);

	  return SKTable;
	}(_Comp3.default);

	SKTable.defaultProps = {
	  compTag: _antd.Table,
	  bordered: true,
	  loadingId: undefined,
	  paginationId: undefined
	};
	SKTable.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _antd.Table.propTypes, {
	  loadingId: _react2.default.PropTypes.string,
	  paginationId: _react2.default.PropTypes.string
	});
	exports.default = SKTable;
	module.exports = exports['default'];

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SKSpan = exports.SKP = exports.SKH6 = exports.SKH5 = exports.SKH4 = exports.SKH3 = exports.SKH2 = exports.SKH1 = exports.SKDiv = exports.SKCanvas = exports.SKBr = exports.SKAside = exports.SKA = undefined;

	var _SKA2 = __webpack_require__(49);

	var _SKA3 = _interopRequireDefault(_SKA2);

	var _SKAside2 = __webpack_require__(50);

	var _SKAside3 = _interopRequireDefault(_SKAside2);

	var _SKBr2 = __webpack_require__(51);

	var _SKBr3 = _interopRequireDefault(_SKBr2);

	var _SKCanvas2 = __webpack_require__(52);

	var _SKCanvas3 = _interopRequireDefault(_SKCanvas2);

	var _SKDiv2 = __webpack_require__(53);

	var _SKDiv3 = _interopRequireDefault(_SKDiv2);

	var _SKH7 = __webpack_require__(54);

	var _SKH8 = _interopRequireDefault(_SKH7);

	var _SKH9 = __webpack_require__(55);

	var _SKH10 = _interopRequireDefault(_SKH9);

	var _SKH11 = __webpack_require__(56);

	var _SKH12 = _interopRequireDefault(_SKH11);

	var _SKH13 = __webpack_require__(57);

	var _SKH14 = _interopRequireDefault(_SKH13);

	var _SKH15 = __webpack_require__(58);

	var _SKH16 = _interopRequireDefault(_SKH15);

	var _SKH17 = __webpack_require__(59);

	var _SKH18 = _interopRequireDefault(_SKH17);

	var _SKP2 = __webpack_require__(60);

	var _SKP3 = _interopRequireDefault(_SKP2);

	var _SKSpan2 = __webpack_require__(61);

	var _SKSpan3 = _interopRequireDefault(_SKSpan2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.SKA = _SKA3.default;
	exports.SKAside = _SKAside3.default;
	exports.SKBr = _SKBr3.default;
	exports.SKCanvas = _SKCanvas3.default;
	exports.SKDiv = _SKDiv3.default;
	exports.SKH1 = _SKH8.default;
	exports.SKH2 = _SKH10.default;
	exports.SKH3 = _SKH12.default;
	exports.SKH4 = _SKH14.default;
	exports.SKH5 = _SKH16.default;
	exports.SKH6 = _SKH18.default;
	exports.SKP = _SKP3.default;
	exports.SKSpan = _SKSpan3.default;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _skJs = __webpack_require__(5);

	var _skJs2 = _interopRequireDefault(_skJs);

	var _Comp2 = __webpack_require__(8);

	var _Comp3 = _interopRequireDefault(_Comp2);

	var _REACT = __webpack_require__(17);

	var _REACT2 = _interopRequireDefault(_REACT);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SKA = function (_Comp) {
	  _inherits(SKA, _Comp);

	  function SKA() {
	    var _ref;

	    _classCallCheck(this, SKA);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _possibleConstructorReturn(this, (_ref = SKA.__proto__ || Object.getPrototypeOf(SKA)).call.apply(_ref, [this].concat(args)));
	  }

	  _createClass(SKA, [{
	    key: 'handleClick',
	    value: function handleClick(e) {
	      if (this.props.onClick && _.isFunction(this.props.onClick)) {
	        this.props.onClick(e);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var CompTag = this.props.compTag;

	      return _react2.default.createElement(
	        CompTag,
	        _extends({}, this.compValidProps(CompTag), {
	          href: 'javascript:void(0);',
	          onClick: this.handleClick.bind(this) }),
	        this.skPropsTrans()
	      );
	    }
	  }]);

	  return SKA;
	}(_Comp3.default);

	SKA.defaultProps = {
	  compTag: _REACT2.default.TAG.a
	};
	SKA.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, {});
	exports.default = SKA;
	module.exports = exports['default'];

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Comp2 = __webpack_require__(8);

	var _Comp3 = _interopRequireDefault(_Comp2);

	var _REACT = __webpack_require__(17);

	var _REACT2 = _interopRequireDefault(_REACT);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SKAside = function (_Comp) {
	  _inherits(SKAside, _Comp);

	  function SKAside() {
	    var _ref;

	    _classCallCheck(this, SKAside);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _possibleConstructorReturn(this, (_ref = SKAside.__proto__ || Object.getPrototypeOf(SKAside)).call.apply(_ref, [this].concat(args)));
	  }

	  return SKAside;
	}(_Comp3.default);

	SKAside.defaultProps = {
	  compTag: _REACT2.default.TAG.aside
	};
	exports.default = SKAside;
	module.exports = exports['default'];

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Comp2 = __webpack_require__(8);

	var _Comp3 = _interopRequireDefault(_Comp2);

	var _REACT = __webpack_require__(17);

	var _REACT2 = _interopRequireDefault(_REACT);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SKBr = function (_Comp) {
	  _inherits(SKBr, _Comp);

	  function SKBr() {
	    var _ref;

	    _classCallCheck(this, SKBr);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _possibleConstructorReturn(this, (_ref = SKBr.__proto__ || Object.getPrototypeOf(SKBr)).call.apply(_ref, [this].concat(args)));
	  }

	  return SKBr;
	}(_Comp3.default);

	SKBr.defaultProps = {
	  compTag: _REACT2.default.TAG.br
	};
	exports.default = SKBr;
	module.exports = exports['default'];

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Comp2 = __webpack_require__(8);

	var _Comp3 = _interopRequireDefault(_Comp2);

	var _REACT = __webpack_require__(17);

	var _REACT2 = _interopRequireDefault(_REACT);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SKCanvas = function (_Comp) {
	  _inherits(SKCanvas, _Comp);

	  function SKCanvas() {
	    var _ref;

	    _classCallCheck(this, SKCanvas);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _possibleConstructorReturn(this, (_ref = SKCanvas.__proto__ || Object.getPrototypeOf(SKCanvas)).call.apply(_ref, [this].concat(args)));
	  }

	  return SKCanvas;
	}(_Comp3.default);

	SKCanvas.defaultProps = {
	  compTag: _REACT2.default.TAG.canvas
	};
	exports.default = SKCanvas;
	module.exports = exports['default'];

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Comp2 = __webpack_require__(8);

	var _Comp3 = _interopRequireDefault(_Comp2);

	var _REACT = __webpack_require__(17);

	var _REACT2 = _interopRequireDefault(_REACT);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SKDiv = function (_Comp) {
	  _inherits(SKDiv, _Comp);

	  function SKDiv() {
	    var _ref;

	    _classCallCheck(this, SKDiv);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _possibleConstructorReturn(this, (_ref = SKDiv.__proto__ || Object.getPrototypeOf(SKDiv)).call.apply(_ref, [this].concat(args)));
	  }

	  return SKDiv;
	}(_Comp3.default);

	SKDiv.defaultProps = {
	  compTag: _REACT2.default.TAG.div
	};
	exports.default = SKDiv;
	module.exports = exports['default'];

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Comp2 = __webpack_require__(8);

	var _Comp3 = _interopRequireDefault(_Comp2);

	var _REACT = __webpack_require__(17);

	var _REACT2 = _interopRequireDefault(_REACT);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SKH1 = function (_Comp) {
	  _inherits(SKH1, _Comp);

	  function SKH1() {
	    var _ref;

	    _classCallCheck(this, SKH1);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _possibleConstructorReturn(this, (_ref = SKH1.__proto__ || Object.getPrototypeOf(SKH1)).call.apply(_ref, [this].concat(args)));
	  }

	  return SKH1;
	}(_Comp3.default);

	SKH1.defaultProps = {
	  compTag: _REACT2.default.TAG.h1
	};
	exports.default = SKH1;
	module.exports = exports['default'];

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Comp2 = __webpack_require__(8);

	var _Comp3 = _interopRequireDefault(_Comp2);

	var _REACT = __webpack_require__(17);

	var _REACT2 = _interopRequireDefault(_REACT);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SKH2 = function (_Comp) {
	  _inherits(SKH2, _Comp);

	  function SKH2() {
	    var _ref;

	    _classCallCheck(this, SKH2);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _possibleConstructorReturn(this, (_ref = SKH2.__proto__ || Object.getPrototypeOf(SKH2)).call.apply(_ref, [this].concat(args)));
	  }

	  return SKH2;
	}(_Comp3.default);

	SKH2.defaultProps = {
	  compTag: _REACT2.default.TAG.h2
	};
	exports.default = SKH2;
	module.exports = exports['default'];

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Comp2 = __webpack_require__(8);

	var _Comp3 = _interopRequireDefault(_Comp2);

	var _REACT = __webpack_require__(17);

	var _REACT2 = _interopRequireDefault(_REACT);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SKH3 = function (_Comp) {
	  _inherits(SKH3, _Comp);

	  function SKH3() {
	    var _ref;

	    _classCallCheck(this, SKH3);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _possibleConstructorReturn(this, (_ref = SKH3.__proto__ || Object.getPrototypeOf(SKH3)).call.apply(_ref, [this].concat(args)));
	  }

	  return SKH3;
	}(_Comp3.default);

	SKH3.defaultProps = {
	  compTag: _REACT2.default.TAG.h3
	};
	exports.default = SKH3;
	module.exports = exports['default'];

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Comp2 = __webpack_require__(8);

	var _Comp3 = _interopRequireDefault(_Comp2);

	var _REACT = __webpack_require__(17);

	var _REACT2 = _interopRequireDefault(_REACT);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SKH4 = function (_Comp) {
	  _inherits(SKH4, _Comp);

	  function SKH4() {
	    var _ref;

	    _classCallCheck(this, SKH4);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _possibleConstructorReturn(this, (_ref = SKH4.__proto__ || Object.getPrototypeOf(SKH4)).call.apply(_ref, [this].concat(args)));
	  }

	  return SKH4;
	}(_Comp3.default);

	SKH4.defaultProps = {
	  compTag: _REACT2.default.TAG.h4
	};
	exports.default = SKH4;
	module.exports = exports['default'];

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Comp2 = __webpack_require__(8);

	var _Comp3 = _interopRequireDefault(_Comp2);

	var _REACT = __webpack_require__(17);

	var _REACT2 = _interopRequireDefault(_REACT);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SKH5 = function (_Comp) {
	  _inherits(SKH5, _Comp);

	  function SKH5() {
	    var _ref;

	    _classCallCheck(this, SKH5);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _possibleConstructorReturn(this, (_ref = SKH5.__proto__ || Object.getPrototypeOf(SKH5)).call.apply(_ref, [this].concat(args)));
	  }

	  return SKH5;
	}(_Comp3.default);

	SKH5.defaultProps = {
	  compTag: _REACT2.default.TAG.h5
	};
	exports.default = SKH5;
	module.exports = exports['default'];

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Comp2 = __webpack_require__(8);

	var _Comp3 = _interopRequireDefault(_Comp2);

	var _REACT = __webpack_require__(17);

	var _REACT2 = _interopRequireDefault(_REACT);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SKH6 = function (_Comp) {
	  _inherits(SKH6, _Comp);

	  function SKH6() {
	    var _ref;

	    _classCallCheck(this, SKH6);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _possibleConstructorReturn(this, (_ref = SKH6.__proto__ || Object.getPrototypeOf(SKH6)).call.apply(_ref, [this].concat(args)));
	  }

	  return SKH6;
	}(_Comp3.default);

	SKH6.defaultProps = {
	  compTag: _REACT2.default.TAG.h6
	};
	exports.default = SKH6;
	module.exports = exports['default'];

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Comp2 = __webpack_require__(8);

	var _Comp3 = _interopRequireDefault(_Comp2);

	var _REACT = __webpack_require__(17);

	var _REACT2 = _interopRequireDefault(_REACT);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SKP = function (_Comp) {
	  _inherits(SKP, _Comp);

	  function SKP() {
	    var _ref;

	    _classCallCheck(this, SKP);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _possibleConstructorReturn(this, (_ref = SKP.__proto__ || Object.getPrototypeOf(SKP)).call.apply(_ref, [this].concat(args)));
	  }

	  return SKP;
	}(_Comp3.default);

	SKP.defaultProps = {
	  compTag: _REACT2.default.TAG.p
	};
	exports.default = SKP;
	module.exports = exports['default'];

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Comp2 = __webpack_require__(8);

	var _Comp3 = _interopRequireDefault(_Comp2);

	var _REACT = __webpack_require__(17);

	var _REACT2 = _interopRequireDefault(_REACT);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SKSpan = function (_Comp) {
	  _inherits(SKSpan, _Comp);

	  function SKSpan() {
	    var _ref;

	    _classCallCheck(this, SKSpan);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _possibleConstructorReturn(this, (_ref = SKSpan.__proto__ || Object.getPrototypeOf(SKSpan)).call.apply(_ref, [this].concat(args)));
	  }

	  return SKSpan;
	}(_Comp3.default);

	SKSpan.defaultProps = {
	  compTag: _REACT2.default.TAG.span
	};
	exports.default = SKSpan;
	module.exports = exports['default'];

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SKLink = undefined;

	var _SKLink2 = __webpack_require__(63);

	var _SKLink3 = _interopRequireDefault(_SKLink2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.SKLink = _SKLink3.default;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _skJs = __webpack_require__(5);

	var _skJs2 = _interopRequireDefault(_skJs);

	var _Comp2 = __webpack_require__(8);

	var _Comp3 = _interopRequireDefault(_Comp2);

	var _Path = __webpack_require__(64);

	var _Path2 = _interopRequireDefault(_Path);

	var _REACT = __webpack_require__(17);

	var _REACT2 = _interopRequireDefault(_REACT);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SKLink = function (_Comp) {
	  _inherits(SKLink, _Comp);

	  function SKLink() {
	    var _ref;

	    _classCallCheck(this, SKLink);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _possibleConstructorReturn(this, (_ref = SKLink.__proto__ || Object.getPrototypeOf(SKLink)).call.apply(_ref, [this].concat(args)));
	  }

	  _createClass(SKLink, [{
	    key: 'handleClick',
	    value: function handleClick() {
	      _Path2.default.forward(this.props.to);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var CompTag = this.props.compTag;

	      return _react2.default.createElement(
	        CompTag,
	        _extends({}, this.compValidProps(CompTag), {
	          href: 'javascript:void(0);',
	          onClick: this.handleClick.bind(this) }),
	        this.skPropsTrans()
	      );
	    }
	  }]);

	  return SKLink;
	}(_Comp3.default);

	SKLink.defaultProps = {
	  compTag: _REACT2.default.TAG.a,
	  to: '/'
	};
	SKLink.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, {
	  to: _react2.default.PropTypes.string
	});
	exports.default = SKLink;
	module.exports = exports['default'];

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactRouter = __webpack_require__(38);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Path = function () {
	  function Path() {
	    _classCallCheck(this, Path);
	  }

	  _createClass(Path, null, [{
	    key: 'forward',
	    value: function forward(url) {
	      _reactRouter.browserHistory.push(url);
	    }
	  }]);

	  return Path;
	}();

	exports.default = Path;
	module.exports = exports['default'];

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SKJdenticon = exports.SKECharts = exports.SKCountUp = undefined;

	var _SKCountUp2 = __webpack_require__(66);

	var _SKCountUp3 = _interopRequireDefault(_SKCountUp2);

	var _SKECharts2 = __webpack_require__(68);

	var _SKECharts3 = _interopRequireDefault(_SKECharts2);

	var _SKJdenticon2 = __webpack_require__(71);

	var _SKJdenticon3 = _interopRequireDefault(_SKJdenticon2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.SKCountUp = _SKCountUp3.default;
	exports.SKECharts = _SKECharts3.default;
	exports.SKJdenticon = _SKJdenticon3.default;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _countup = __webpack_require__(67);

	var _countup2 = _interopRequireDefault(_countup);

	var _skJs = __webpack_require__(5);

	var _skJs2 = _interopRequireDefault(_skJs);

	var _lodash = __webpack_require__(9);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _Comp2 = __webpack_require__(8);

	var _Comp3 = _interopRequireDefault(_Comp2);

	var _REACT = __webpack_require__(17);

	var _REACT2 = _interopRequireDefault(_REACT);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SKCountUp = function (_Comp) {
	  _inherits(SKCountUp, _Comp);

	  function SKCountUp() {
	    var _ref;

	    _classCallCheck(this, SKCountUp);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _possibleConstructorReturn(this, (_ref = SKCountUp.__proto__ || Object.getPrototypeOf(SKCountUp)).call.apply(_ref, [this].concat(args)));
	  }

	  _createClass(SKCountUp, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return this.props.duration !== nextProps.duration || this.props.end !== nextProps.end || this.props.start !== nextProps.start;
	    }
	  }, {
	    key: 'updateUI',
	    value: function updateUI(evt) {
	      _get(SKCountUp.prototype.__proto__ || Object.getPrototypeOf(SKCountUp.prototype), 'updateUI', this).call(this, evt);
	      this.startAnimation(this);
	    }
	  }, {
	    key: 'startAnimation',
	    value: function startAnimation(comp) {
	      if (comp && comp.refs.countupDomRef) {
	        var _comp$props = comp.props,
	            decimal = _comp$props.decimal,
	            decimals = _comp$props.decimals,
	            duration = _comp$props.duration,
	            easingFn = _comp$props.easingFn,
	            end = _comp$props.end,
	            formattingFn = _comp$props.formattingFn,
	            onComplete = _comp$props.onComplete,
	            onStart = _comp$props.onStart,
	            prefix = _comp$props.prefix,
	            separator = _comp$props.separator,
	            start = _comp$props.start,
	            suffix = _comp$props.suffix,
	            useEasing = _comp$props.useEasing,
	            useGrouping = _comp$props.useGrouping;


	        end = this.skVal();

	        var countupInstance = new _countup2.default(comp.refs.countupDomRef, start, end, decimals, duration, {
	          decimal: decimal,
	          easingFn: easingFn,
	          formattingFn: formattingFn,
	          separator: separator,
	          prefix: prefix,
	          suffix: suffix,
	          useEasing: useEasing,
	          useGrouping: useGrouping
	        });

	        if (_lodash2.default.isFunction(onStart)) {
	          onStart();
	        }

	        countupInstance.start(onComplete);
	      } else {
	        throw new Error('You need to pass the CountUp component as an argument!\neg. this.myCountUp.startAnimation(this.myCountUp);');
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          CompTag = _props.compTag,
	          start = _props.start;


	      return _react2.default.createElement(
	        CompTag,
	        _extends({}, this.compValidProps(CompTag), { ref: 'countupDomRef' }),
	        start
	      );
	    }
	  }]);

	  return SKCountUp;
	}(_Comp3.default);

	SKCountUp.defaultProps = {
	  compTag: _REACT2.default.TAG.span,
	  decimal: '.',
	  decimals: 0,
	  duration: 3,
	  easingFn: null,
	  end: 100,
	  formattingFn: null,
	  onComplete: undefined,
	  onStart: undefined,
	  prefix: '',
	  separator: ',',
	  start: 0,
	  suffix: '',
	  redraw: false,
	  style: undefined,
	  useEasing: true,
	  useGrouping: true
	};
	SKCountUp.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, {
	  decimal: _react2.default.PropTypes.string,
	  decimals: _react2.default.PropTypes.number,
	  duration: _react2.default.PropTypes.number,
	  easingFn: _react2.default.PropTypes.func,
	  end: _react2.default.PropTypes.number,
	  formattingFn: _react2.default.PropTypes.func,
	  onComplete: _react2.default.PropTypes.func,
	  onStart: _react2.default.PropTypes.func,
	  prefix: _react2.default.PropTypes.string,
	  separator: _react2.default.PropTypes.string,
	  start: _react2.default.PropTypes.number,
	  suffix: _react2.default.PropTypes.string,
	  useEasing: _react2.default.PropTypes.bool,
	  useGrouping: _react2.default.PropTypes.bool
	});
	exports.default = SKCountUp;
	module.exports = exports['default'];

/***/ }),
/* 67 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_67__;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _echarts = __webpack_require__(69);

	var _echarts2 = _interopRequireDefault(_echarts);

	var _elementResizeEvent = __webpack_require__(70);

	var _elementResizeEvent2 = _interopRequireDefault(_elementResizeEvent);

	var _skJs = __webpack_require__(5);

	var _skJs2 = _interopRequireDefault(_skJs);

	var _SKSpin = __webpack_require__(45);

	var _SKSpin2 = _interopRequireDefault(_SKSpin);

	var _Comp2 = __webpack_require__(8);

	var _Comp3 = _interopRequireDefault(_Comp2);

	var _REACT = __webpack_require__(17);

	var _REACT2 = _interopRequireDefault(_REACT);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //https://github.com/ecomfe/echarts


	var SKECharts = function (_Comp) {
	  _inherits(SKECharts, _Comp);

	  function SKECharts() {
	    var _ref;

	    _classCallCheck(this, SKECharts);

	    for (var _len = arguments.length, props = Array(_len), _key = 0; _key < _len; _key++) {
	      props[_key] = arguments[_key];
	    }

	    return _possibleConstructorReturn(this, (_ref = SKECharts.__proto__ || Object.getPrototypeOf(SKECharts)).call.apply(_ref, [this].concat(props)));
	  }

	  _createClass(SKECharts, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _get(SKECharts.prototype.__proto__ || Object.getPrototypeOf(SKECharts.prototype), 'componentDidMount', this).call(this);

	      var echartsIns = this.renderEChartDom();
	      this.bindEvents(echartsIns, this.props.onEvents);
	      // on chart ready
	      if (_.isFunction(this.props.onChartReady)) {
	        this.props.onChartReady(echartsIns);
	      }

	      // on resize
	      (0, _elementResizeEvent2.default)(this.refs.echartsDomRef, function () {
	        echartsIns.resize();
	      });
	    }

	    //!important
	    // componentWillUpdate(){
	    //   echarts.dispose(this.refs.echartsDomRef);
	    //   super.componentWillUpdate();
	    // }

	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      _get(SKECharts.prototype.__proto__ || Object.getPrototypeOf(SKECharts.prototype), 'componentDidUpdate', this).call(this);
	      var echartsIns = this.renderEChartDom();
	      this.bindEvents(echartsIns, this.props.onEvents);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (typeof _elementResizeEvent2.default.unbind === 'function') {
	        _elementResizeEvent2.default.unbind(this.refs.echartsDomRef);
	      }
	      _echarts2.default.dispose(this.refs.echartsDomRef);
	      _get(SKECharts.prototype.__proto__ || Object.getPrototypeOf(SKECharts.prototype), 'componentWillUnmount', this).call(this);
	    }
	  }, {
	    key: 'bindEvents',
	    value: function bindEvents(instance, events) {
	      var _loop = function _loop(eventName) {
	        // ignore the event config which not satisfy
	        if (_.isString(eventName) && _.isFunction(events[eventName])) {
	          // binding event
	          instance.off(eventName);
	          instance.on(eventName, function (param) {
	            events[eventName](param, instance);
	          });
	        }
	      };

	      for (var eventName in events) {
	        _loop(eventName);
	      }
	    }
	  }, {
	    key: 'getEChartsInstance',
	    value: function getEChartsInstance() {
	      // return the echarts object
	      return _echarts2.default.getInstanceByDom(this.refs.echartsDomRef) || _echarts2.default.init(this.refs.echartsDomRef, this.props.theme);
	    }
	  }, {
	    key: 'handleOptionUpdate',
	    value: function handleOptionUpdate(option) {
	      return this.props.optionUpdate ? this.props.optionUpdate.call(this, option) : option;
	    }
	  }, {
	    key: 'renderEChartDom',
	    value: function renderEChartDom() {
	      // init the echarts instance
	      var echartsIns = this.getEChartsInstance();
	      // set the echarts option
	      // echartsIns.setOption(this.handleOptionUpdate(this.props.option), this.props.notMerge, this.props.lazyUpdate);
	      echartsIns.setOption(this.handleOptionUpdate(this.skVal()), this.props.notMerge, this.props.lazyUpdate);
	      // set loading mask
	      if (this.props.showLoading) {
	        echartsIns.showLoading(this.props.loadingOption);
	      } else {
	        echartsIns.hideLoading();
	      }
	      return echartsIns;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          CompTag = _props.compTag,
	          loadingId = _props.loadingId,
	          style = _props.style;


	      return _react2.default.createElement(
	        _SKSpin2.default,
	        _extends({}, this.compValidProps(_SKSpin2.default), { modelId: loadingId, size: 'large' }),
	        _react2.default.createElement(CompTag, _extends({}, this.compValidProps(CompTag), {
	          style: _.isEmpty(style) ? { height: '300px', width: '100%' } : style,
	          ref: 'echartsDomRef' }))
	      );
	    }
	  }]);

	  return SKECharts;
	}(_Comp3.default);

	SKECharts.defaultProps = {
	  compTag: _REACT2.default.TAG.div,

	  lazyUpdate: true,
	  live: true,
	  locale: _skJs2.default.cookies(_skJs2.default.COOKIE_LANGUAGE),
	  notMerge: false,
	  onChartReady: function onChartReady(chart) {
	    chart.hideLoading();
	  },
	  onEvents: {}
	};
	SKECharts.propTypes = _skJs2.default.assign({}, _Comp3.default.SK_PROPS_TYPE, {
	  lazyUpdate: _react2.default.PropTypes.bool,
	  loadingId: _react2.default.PropTypes.string.isRequired,
	  notMerge: _react2.default.PropTypes.bool,
	  onChartReady: _react2.default.PropTypes.func,
	  onEvents: _react2.default.PropTypes.object,
	  // option: React.PropTypes.object,
	  optionUpdate: _react2.default.PropTypes.func,
	  style: _react2.default.PropTypes.object,
	  theme: _react2.default.PropTypes.string
	});
	exports.default = SKECharts;
	module.exports = exports['default'];

/***/ }),
/* 69 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_69__;

/***/ }),
/* 70 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_70__;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _jdenticon = __webpack_require__(72);

	var _jdenticon2 = _interopRequireDefault(_jdenticon);

	var _jsMd = __webpack_require__(73);

	var _jsMd2 = _interopRequireDefault(_jsMd);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _skJs = __webpack_require__(5);

	var _skJs2 = _interopRequireDefault(_skJs);

	var _Comp2 = __webpack_require__(8);

	var _Comp3 = _interopRequireDefault(_Comp2);

	var _REACT = __webpack_require__(17);

	var _REACT2 = _interopRequireDefault(_REACT);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //<SKJdenticon modelId='user.username' size={32}/>


	var SKJdenticon = function (_Comp) {
	  _inherits(SKJdenticon, _Comp);

	  function SKJdenticon() {
	    var _ref;

	    _classCallCheck(this, SKJdenticon);

	    for (var _len = arguments.length, props = Array(_len), _key = 0; _key < _len; _key++) {
	      props[_key] = arguments[_key];
	    }

	    return _possibleConstructorReturn(this, (_ref = SKJdenticon.__proto__ || Object.getPrototypeOf(SKJdenticon)).call.apply(_ref, [this].concat(props)));
	  }

	  _createClass(SKJdenticon, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _get(SKJdenticon.prototype.__proto__ || Object.getPrototypeOf(SKJdenticon.prototype), 'componentDidMount', this).call(this);
	      _jdenticon2.default.update(this.refs.jdenticonDomRef, (0, _jsMd2.default)(this.skVal()));
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      _get(SKJdenticon.prototype.__proto__ || Object.getPrototypeOf(SKJdenticon.prototype), 'componentDidUpdate', this).call(this);
	      _jdenticon2.default.update(this.refs.jdenticonDomRef, (0, _jsMd2.default)(this.skVal()));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          CompTag = _props.compTag,
	          size = _props.size;


	      return _react2.default.createElement(CompTag, _extends({}, this.compValidProps(CompTag), { height: size, width: size, ref: 'jdenticonDomRef' }));
	    }
	  }]);

	  return SKJdenticon;
	}(_Comp3.default);

	SKJdenticon.defaultProps = {
	  compTag: _REACT2.default.TAG.canvas

	};
	SKJdenticon.propTypes = _skJs2.default.assign({}, _Comp3.default.SK_PROPS_TYPE, {
	  size: _react2.default.PropTypes.number
	});
	exports.default = SKJdenticon;
	module.exports = exports['default'];

/***/ }),
/* 72 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_72__;

/***/ }),
/* 73 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_73__;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Validator = exports.Utils = exports.Resp = exports.Req = exports.ReactUtils = exports.REACT = exports.Path = exports.Model = exports.HTML = exports.Theme = exports.EvtType = exports.Dir = exports.Color = exports.Comp = exports.Cfg = exports.Ajax = undefined;

	var _Const = __webpack_require__(11);

	Object.defineProperty(exports, 'Color', {
	  enumerable: true,
	  get: function get() {
	    return _Const.Color;
	  }
	});
	Object.defineProperty(exports, 'Dir', {
	  enumerable: true,
	  get: function get() {
	    return _Const.Dir;
	  }
	});
	Object.defineProperty(exports, 'EvtType', {
	  enumerable: true,
	  get: function get() {
	    return _Const.EvtType;
	  }
	});
	Object.defineProperty(exports, 'Theme', {
	  enumerable: true,
	  get: function get() {
	    return _Const.Theme;
	  }
	});

	var _Ajax2 = __webpack_require__(75);

	var _Ajax3 = _interopRequireDefault(_Ajax2);

	var _Cfg2 = __webpack_require__(10);

	var _Cfg3 = _interopRequireDefault(_Cfg2);

	var _Comp2 = __webpack_require__(8);

	var _Comp3 = _interopRequireDefault(_Comp2);

	var _HTML2 = __webpack_require__(12);

	var _HTML3 = _interopRequireDefault(_HTML2);

	var _Model2 = __webpack_require__(13);

	var _Model3 = _interopRequireDefault(_Model2);

	var _Path2 = __webpack_require__(64);

	var _Path3 = _interopRequireDefault(_Path2);

	var _REACT2 = __webpack_require__(17);

	var _REACT3 = _interopRequireDefault(_REACT2);

	var _ReactUtils2 = __webpack_require__(18);

	var _ReactUtils3 = _interopRequireDefault(_ReactUtils2);

	var _Req2 = __webpack_require__(78);

	var _Req3 = _interopRequireDefault(_Req2);

	var _Resp2 = __webpack_require__(77);

	var _Resp3 = _interopRequireDefault(_Resp2);

	var _Utils2 = __webpack_require__(79);

	var _Utils3 = _interopRequireDefault(_Utils2);

	var _Validator2 = __webpack_require__(14);

	var _Validator3 = _interopRequireDefault(_Validator2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Ajax = _Ajax3.default;
	exports.Cfg = _Cfg3.default;
	exports.Comp = _Comp3.default;
	exports.HTML = _HTML3.default;
	exports.Model = _Model3.default;
	exports.Path = _Path3.default;
	exports.REACT = _REACT3.default;
	exports.ReactUtils = _ReactUtils3.default;
	exports.Req = _Req3.default;
	exports.Resp = _Resp3.default;
	exports.Utils = _Utils3.default;
	exports.Validator = _Validator3.default;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _jquery = __webpack_require__(15);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _skJs = __webpack_require__(5);

	var _skJs2 = _interopRequireDefault(_skJs);

	var _nprogress = __webpack_require__(76);

	var _nprogress2 = _interopRequireDefault(_nprogress);

	var _Model = __webpack_require__(13);

	var _Model2 = _interopRequireDefault(_Model);

	var _Resp = __webpack_require__(77);

	var _Resp2 = _interopRequireDefault(_Resp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Ajax = function () {
	  function Ajax() {
	    _classCallCheck(this, Ajax);
	  }

	  _createClass(Ajax, null, [{
	    key: 'getDefaultSettings',
	    value: function getDefaultSettings() {
	      return {
	        contentType: 'application/json; charset=UTF-8',
	        dataType: 'json',
	        // processData: false,
	        // traditional: true,
	        needStringify: true,
	        progress: true, //sk extend jquery
	        async: true //sk extend jquery
	      };
	    }
	  }, {
	    key: 'doAjax',
	    value: function doAjax(settings) {
	      if (settings.progress) {
	        if (Ajax.CURRENT_PROGRESS_COUNT == 0) {
	          _nprogress2.default.start();
	        }
	        Ajax.CURRENT_PROGRESS_COUNT++;
	      }
	      if (!settings.async) {
	        if (Ajax.CURRENT_SYNC_COUNT == 0) {
	          if (_skJs2.default.$(_Model2.default.PROP_SYS) instanceof _Model2.default) {
	            _skJs2.default.$(_Model2.default.PROP_SYS).skVal('ui.spinning', true);
	          }
	        }
	        Ajax.CURRENT_SYNC_COUNT++;
	      }
	      settings.data = settings.data && settings.needStringify ? JSON.stringify(settings.data) : settings.data;
	      try {
	        return _jquery2.default.ajax(settings).done(function (data, textStatus, jqXHR) {
	          var response = new _Resp2.default(data);
	          response.showResult();
	        }).fail(function (jqXHR, textStatus, errorThrown) {
	          console.error(jqXHR);
	          console.error(textStatus);
	          console.error(errorThrown);
	        }).always(function () {
	          if (settings.progress) {
	            Ajax.CURRENT_PROGRESS_COUNT--;
	            if (Ajax.CURRENT_PROGRESS_COUNT == 0) {
	              _nprogress2.default.done();
	            } else {
	              _nprogress2.default.inc();
	            }
	          }
	          if (!settings.async) {
	            Ajax.CURRENT_SYNC_COUNT--;
	            if (Ajax.CURRENT_SYNC_COUNT == 0) {
	              if (_skJs2.default.$(_Model2.default.PROP_SYS) instanceof _Model2.default) {
	                _skJs2.default.$(_Model2.default.PROP_SYS).skVal('ui.spinning', false);
	              }
	            }
	          }
	        });
	      } catch (e) {}
	    }
	  }, {
	    key: 'doDelete',
	    value: function doDelete(url) {
	      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	      return Ajax.doAjax(_skJs2.default.assign({}, Ajax.getDefaultSettings(), { url: url }, { data: data }, options, { method: Ajax.METHOD.DELETE }));
	    }
	  }, {
	    key: 'doGet',
	    value: function doGet(url) {
	      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	      return Ajax.doAjax(_skJs2.default.assign({}, Ajax.getDefaultSettings(), { url: url }, { data: data }, options, { method: Ajax.METHOD.GET }));
	    }
	  }, {
	    key: 'doPost',
	    value: function doPost(url) {
	      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	      return Ajax.doAjax(_skJs2.default.assign({}, Ajax.getDefaultSettings(), { url: url }, { data: data }, options, { method: Ajax.METHOD.POST }));
	    }
	  }, {
	    key: 'doPut',
	    value: function doPut(url) {
	      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	      return Ajax.doAjax(_skJs2.default.assign({}, Ajax.getDefaultSettings(), { url: url }, { data: data }, options, { method: Ajax.METHOD.PUT }));
	    }
	  }]);

	  return Ajax;
	}();

	Ajax.METHOD = {
	  DELETE: 'DELETE',
	  GET: 'GET',
	  POST: 'POST',
	  PUT: 'PUT'
	};
	Ajax.CURRENT_PROGRESS_COUNT = 0;
	Ajax.CURRENT_SYNC_COUNT = 0;
	exports.default = Ajax;
	module.exports = exports['default'];

/***/ }),
/* 76 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_76__;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.RespMsg = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _antd = __webpack_require__(7);

	var _lodash = __webpack_require__(9);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _skL10n = __webpack_require__(16);

	var _Path = __webpack_require__(64);

	var _Path2 = _interopRequireDefault(_Path);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var RespMsg = exports.RespMsg = function () {
	  function RespMsg(msg) {
	    _classCallCheck(this, RespMsg);

	    this.type = msg.type; //Message Type
	    this.code = msg.code; //Message Code or Message Content
	    this.args = msg.args; //Message Arguments, Array or Object, format by skFmtArr or skFmt
	  }

	  _createClass(RespMsg, [{
	    key: 'getType',
	    value: function getType() {
	      return this.type;
	    }
	  }, {
	    key: 'getMessage',
	    value: function getMessage() {
	      var key = 'Resp.' + this.code;
	      var i18nMsg = _skL10n.I18N.get(key);
	      var rtn = this.code;
	      if (Array.isArray(this.args)) {
	        rtn = i18nMsg.skFmtArr(this.args.map(function (arg) {
	          var tmpRtn = null;
	          if (_lodash2.default.isPlainObject(arg) && arg.code && arg.id) {
	            tmpRtn = _skL10n.Codes.get(arg.code).find(function (item) {
	              return item.id = arg.id;
	            });
	            tmpRtn = tmpRtn ? tmpRtn.text : arg;
	          } else {
	            tmpRtn = arg;
	          }
	          return tmpRtn;
	        }));
	      } else if (_lodash2.default.isPlainObject(this.args) && !_lodash2.default.isEmpty(this.args)) {
	        rtn = i18nMsg.skFmt(this.args);
	      } else if (i18nMsg != key) {
	        rtn = i18nMsg;
	      }
	      return rtn;
	    }
	  }]);

	  return RespMsg;
	}();

	RespMsg.TYPE = {
	  SUCCESS: 'Success', //Just prompt
	  INFO: 'Info', //Just prompt
	  WARNING: 'Warning', //Business continue, but must prompt
	  ERROR: 'Error' //Unknown Exception(done == false), UI will prompt details; Business Stop(done == true), process by component
	};

	var Resp = function () {
	  function Resp(respJsonData) {
	    _classCallCheck(this, Resp);

	    this.data = respJsonData.data; //Business Data
	    this.done = respJsonData.done; //true: No Unknown Exception,false: has Unknown Exception
	    if (_lodash2.default.isPlainObject(respJsonData.rslt) && !_lodash2.default.isEmpty(respJsonData.rslt)) {
	      //Result Message Object, Required if done is false
	      this.rslt = new RespMsg(respJsonData.rslt);
	    }
	    if (Array.isArray(respJsonData.ntfs) && !_lodash2.default.isEmpty(respJsonData.ntfs)) {
	      //Notifications Array
	      this.ntfs = respJsonData.ntfs.map(function (ntf) {
	        return new RespMsg(ntf);
	      });
	    }
	  }

	  _createClass(Resp, [{
	    key: 'showNotifications',
	    value: function showNotifications() {
	      if (this.ntfs) {
	        this.ntfs.forEach(function ($respMsg) {
	          if ($respMsg instanceof RespMsg) {
	            if ($respMsg.getType() && $respMsg.getMessage()) {
	              _antd.notification[_lodash2.default.lowerCase($respMsg.getType())]({ message: $respMsg.getType(), description: $respMsg.getMessage() });
	            }
	          }
	        });
	      }
	    }
	  }, {
	    key: 'showResult',
	    value: function showResult() {
	      if (this.rslt && this.rslt.getType() && this.rslt.getMessage()) {
	        if (!this.done && this.rslt.getType() == RespMsg.TYPE.ERROR) {
	          _antd.Modal.error({
	            title: this.rslt.getType(), content: this.rslt.getMessage(), okText: _skL10n.I18N.get('Return'), onOk: function onOk() {
	              _Path2.default.forward('/');
	            }
	          });
	        } else {
	          _antd.message[_lodash2.default.lowerCase(this.rslt.getType())](this.rslt.getMessage());
	        }
	      }
	    }
	  }]);

	  return Resp;
	}();

	exports.default = Resp;

/***/ }),
/* 78 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Req = function Req() {
	  _classCallCheck(this, Req);
	};

	Req.PARAM = {
	  fromHref: 'fromHref',
	  salt: 'salt',
	  token: 'token'
	};
	Req.PATH = {
	  auth: '/auth',
	  login: '/login',
	  admin: {
	    dashboard: '/admin/dashboard',
	    mail: '/admin/mail',
	    test: {
	      long: '/admin/test/long',
	      short: '/admin/test/short'
	    }
	  }
	};
	Req.SERVICE = {
	  dashboard: {
	    failedTimes: '/dashboard/failedTimes',
	    onlineUsers: '/dashboard/onlineUsers',
	    successTimes: '/dashboard/successTimes',
	    totalUsers: '/dashboard/totalUsers',
	    userCharts: '/dashboard/userCharts'
	  },
	  login: {
	    salt: '/login/salt',
	    token: '/login/token'
	  },
	  mail: {
	    lst: '/mail/lst',
	    num: '/mail/num'
	  },
	  user: {
	    one: '/user/one'
	  }
	};
	exports.default = Req;
	module.exports = exports['default'];

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactRouter = __webpack_require__(38);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	//0 ref
	var Utils = function () {
	  function Utils() {
	    _classCallCheck(this, Utils);
	  }

	  _createClass(Utils, null, [{
	    key: 'createChainedFunction',


	    /**
	     * Safe chained function
	     *
	     * @param {function} functions to chain
	     * @returns {function|null}
	     */
	    value: function createChainedFunction() {
	      for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	        funcs[_key] = arguments[_key];
	      }

	      return funcs.filter(function (f) {
	        return f != null;
	      }).reduce(function (acc, f) {
	        if (!_.isFunction(f)) {
	          throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
	        }

	        if (acc === null) {
	          return f;
	        }

	        return function chainedFunction() {
	          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	            args[_key2] = arguments[_key2];
	          }

	          acc.apply(this, args);
	          f.apply(this, args);
	        };
	      }, null);
	    }
	  }, {
	    key: 'forward',
	    value: function forward(url) {
	      _reactRouter.browserHistory.push(url);
	    }
	  }, {
	    key: 'isTrivialHref',
	    value: function isTrivialHref(href) {
	      return !href || href.trim() === '#';
	    }
	  }]);

	  return Utils;
	}();

	exports.default = Utils;
	module.exports = exports['default'];

/***/ })
/******/ ])
});
;