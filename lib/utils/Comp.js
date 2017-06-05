'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _skJs = require('sk-js');

var _skJs2 = _interopRequireDefault(_skJs);

var _Cfg = require('./Cfg');

var _Cfg2 = _interopRequireDefault(_Cfg);

var _Const = require('./Const');

var _HTML = require('./HTML');

var _HTML2 = _interopRequireDefault(_HTML);

var _Model = require('./Model');

var _Model2 = _interopRequireDefault(_Model);

var _REACT = require('./REACT');

var _REACT2 = _interopRequireDefault(_REACT);

var _ReactUtils = require('./ReactUtils');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL0NvbXAuanMiXSwibmFtZXMiOlsiQ29tcCIsInByb3BzIiwicHJvcE5hbWUiLCJjb21wb25lbnROYW1lIiwiRXJyb3IiLCJrIiwic3RhcnRzV2l0aCIsInM0cyIsIlNLX1BST1BTX1BSRUZJWCIsImFyZ3MiLCJfdXBkYXRlVUkiLCJ1cGRhdGVVSSIsImJpbmQiLCJtb25pdG9ycyIsImFkZEFsbENoYW5nZWRNb25pdG9yIiwiYWRkRXh0ZW5kQ2hhbmdlZE1vbml0b3IiLCJybXZBbGxDaGFuZ2VkTW9uaXRvciIsInJtdkV4dGVuZENoYW5nZWRNb25pdG9yIiwicGFyc2VTYW8iLCJtb25pdG9yIiwiZm9yRWFjaCIsIiRpIiwiYWRkQ2hhbmdlZE1vbml0b3IiLCJpTW9kZWxJZCIsImlkT3JSZWciLCJpc05pbCIsImluZGV4T2YiLCJwdXNoIiwiaXNSZWdFeHAiLCJpTW9kZWwiLCJhZGRSZWdDaGFuZ2VkTGlzdGVuZXIiLCJhZGRJZENoYW5nZWRMaXN0ZW5lciIsInJtdkNoYW5nZWRNb25pdG9yIiwicm12UmVnQ2hhbmdlZExpc3RlbmVyIiwicm12SWRDaGFuZ2VkTGlzdGVuZXIiLCJza1JtdiIsImV2dCIsInNldFN0YXRlIiwic3RhdGVVaWQiLCJ1bmlxdWVJZCIsImdldEVycm9ycyIsIkNvbXBUYWciLCJjb21wVGFnIiwiY29tcFZhbGlkUHJvcHMiLCJza1Byb3BzVHJhbnMiLCJza1Byb3AiLCJTS19QUk9QUyIsIk1PREVMIiwibW9kZWxJZCIsInNrTW9kZWwiLCJza1N5c01vZGVsIiwicHJvcCIsImRlZmF1bHRWYWx1ZSIsInVuZGVmaW5lZCIsInJ0biIsInVwcGVyV29yZEZpcnN0Q2hhciIsInJlcGxhY2UiLCIkMSIsIkNIQVJfVU5ERVJMSU5FIiwidG9VcHBlckNhc2UiLCJ2YWwiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJza1ZhbCIsImNvbXAiLCJ0bXBQcm9wcyIsIlAiLCJza1ZhbHMiLCJwcm9wVHlwZXMiLCJjb25jYXQiLCJPYmplY3QiLCJrZXlzIiwidHlwZSIsIm9taXQiLCJwaWNrIiwiQ09NUF9UQUciLCJNT0RFTF9JRCIsImV4ZWNCZm8iLCJiZm8iLCJpc0Jvb2xlYW4iLCJpc0Z1bmN0aW9uIiwiY2FsbCIsImlzT2JqZWN0IiwiZnVuYyIsInNrV2hlbiIsImNoaWxkcmVuIiwic2tQcm9wcyIsInNrRmlsdGVyIiwic2tQcm9wc0ZpbHRlciIsIkNoaWxkcmVuIiwibWFwIiwiaXNWYWxpZEVsZW1lbnQiLCJjaGlsZCIsIlRBRyIsIlBST1AiLCJjbG9uZUVsZW1lbnQiLCJhc3NpZ24iLCJjaGlsZFByb3BzVHJhbnMiLCJzcGVjaWFsQ2hpbGROYW1lIiwic29tZSIsImlkeCIsIm5hbWUiLCJDb21wb25lbnQiLCJDT0xfU1BBTiIsIkNPTF9YUyIsIkNPTF9TTSIsIkNPTF9NRCIsIkNPTF9MRyIsIkNPTF9YTCIsIkZPUk1fTEFCRUxfQ09MIiwiRk9STV9MQVlPVVQiLCJGT1JNX1dSQVBQRVJfQ09MIiwiR1JJRF9HVVRURVIiLCJJTl9GUk9NX0lURU0iLCJJTl9GUk9NX1JPVyIsIkFDVElWRSIsIkRJU0FCTEVEIiwiSElEREVOIiwiUFJFVklFVyIsIlJFQURPTkxZIiwiUkVRVUlSRUQiLCJNT05JVE9SIiwiUHJvcFR5cGVzIiwib25lT2ZUeXBlIiwiZWxlbWVudCIsInN0cmluZyIsIm1vZGVsIiwiSVNfUFJPUF9UWVBFU19NT0RFTCIsImluc3RhbmNlT2YiLCJjb2xTcGFuIiwibnVtYmVyIiwic2tDb2xTcGFuIiwiY29sWHMiLCJvYmplY3QiLCJza0NvbFhzIiwiY29sU20iLCJza0NvbFNtIiwiY29sTWQiLCJza0NvbE1kIiwiY29sTGciLCJza0NvbExnIiwiY29sWGwiLCJza0NvbFhsIiwiZm9ybUxheW91dCIsIm9uZU9mIiwiSG9yaXpvbnRhbCIsIlZlcnRpY2FsIiwiSW5saW5lIiwic2tGb3JtTGF5b3V0IiwiZm9ybUxhYmVsQ29sIiwic2tGb3JtTGFiZWxDb2wiLCJmb3JtV3JhcHBlckNvbCIsInNrRm9ybVdyYXBwZXJDb2wiLCJncmlkR3V0dGVyIiwic2tHcmlkR3V0dGVyIiwiaW5Gb3JtSXRlbSIsImJvb2wiLCJza0luRm9ybUl0ZW0iLCJpbkZvcm1Sb3ciLCJza0luRm9ybVJvdyIsImFjdGl2ZSIsInNrQWN0aXZlIiwiZGlzYWJsZWQiLCJza0Rpc2FibGVkIiwiaGlkZGVuIiwic2tIaWRkZW4iLCJwcmV2aWV3Iiwic2tQcmV2aWV3IiwicmVhZE9ubHkiLCJza1JlYWRPbmx5IiwicmVxdWlyZWQiLCJza1JlcXVpcmVkIiwiYXJyYXkiLCJtMmVDb252ZXJ0b3IiLCJlMm1Db252ZXJ0b3IiLCJtMnZDb252ZXJ0b3IiLCJ2Mm1Db252ZXJ0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7OztJQU1xQkEsSTs7Ozs7OztBQXdLbkI7Ozs7Ozs7O3dDQVEyQkMsSyxFQUFPQyxRLEVBQVVDLGEsRUFBZTtBQUN6RCxVQUFJRixNQUFNQyxRQUFOLEtBQW1CLEVBQUVELE1BQU1DLFFBQU4sNEJBQUYsQ0FBdkIsRUFBNEQ7QUFDMUQsZUFBTyxJQUFJRSxLQUFKLENBQVUsVUFBVUQsYUFBVixHQUEwQixRQUExQixHQUFxQ0QsUUFBckMsR0FBZ0QsbUJBQTFELENBQVA7QUFDRDtBQUNGOzs7OztBQUlEOzs7Ozs7a0NBTXFCRyxDLEVBQUc7QUFDdEIsYUFBTyxpQkFBRUMsVUFBRixDQUFhLGVBQUdDLEdBQUgsQ0FBT0YsQ0FBUCxDQUFiLEVBQXdCTCxLQUFLUSxlQUE3QixDQUFQO0FBQ0Q7OztBQUtELGtCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSx1SUFDVkEsSUFEVTs7QUFBQSxVQUhyQkMsU0FHcUIsR0FIVCxNQUFLQyxRQUFMLENBQWNDLElBQWQsT0FHUztBQUFBLFVBRnJCQyxRQUVxQixHQUZWLEVBRVU7QUFBQTtBQUVwQjs7Ozt3Q0FFbUI7QUFD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Y0FBWSxnQkFBTWpELFNBQU4sQ0FBZ0JDLFNBQWhCLENBQTBCLENBQ3BDLGdCQUFNRCxTQUFOLENBQWdCa0MsSUFEb0IsRUFFcEMsZ0JBQU1sQyxTQUFOLENBQWdCdkMsSUFGb0IsRUFHcEMsZ0JBQU11QyxTQUFOLENBQWdCVyxNQUhvQixDQUExQixDQXhISztBQTZIakJsSCxXQUFTLGdCQUFNdUcsU0FBTixDQUFnQkMsU0FBaEIsQ0FBMEIsQ0FDakMsZ0JBQU1ELFNBQU4sQ0FBZ0JHLE1BRGlCLEVBRWpDLGdCQUFNSCxTQUFOLENBQWdCa0QsS0FGaUIsRUFHakMsZ0JBQU1sRCxTQUFOLENBQWdCVyxNQUhpQixDQUExQixDQTdIUTs7QUFtSWpCd0MsZ0JBQWMsZ0JBQU1uRCxTQUFOLENBQWdCdkMsSUFuSWIsRUFtSWtCO0FBQ25DMkYsZ0JBQWMsZ0JBQU1wRCxTQUFOLENBQWdCdkMsSUFwSWIsRUFvSWtCO0FBQ25DNEYsZ0JBQWMsZ0JBQU1yRCxTQUFOLENBQWdCdkMsSUFySWIsRUFxSWtCO0FBQ25DNkYsZ0JBQWMsZ0JBQU10RCxTQUFOLENBQWdCdkMsSUF0SWIsQ0FzSWlCO0FBdElqQixDO0FBL0JBbkYsSSxDQXNMWm9FLFMsR0FBWSxlQUFHNEIsTUFBSCxDQUFVLEVBQVYsRUFBY2hHLEtBQUtvRSxTQUFuQixDO2tCQXRMQXBFLEkiLCJmaWxlIjoidXRpbHMvQ29tcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFNLIGZyb20gJ3NrLWpzJztcbmltcG9ydCBDZmcgZnJvbSAnLi9DZmcnO1xuaW1wb3J0IHtEaXJ9IGZyb20gJy4vQ29uc3QnO1xuaW1wb3J0IEhUTUwgZnJvbSAnLi9IVE1MJztcbmltcG9ydCBNb2RlbCBmcm9tICcuL01vZGVsJztcbmltcG9ydCBSRUFDVCBmcm9tICcuL1JFQUNUJztcbmltcG9ydCBSZWFjdFV0aWxzIGZyb20gJy4vUmVhY3RVdGlscyc7XG5cbi8qKlxuICogcHJvcHM6Y29tcFRhZyxtb2RlbChza01vZGVsKSxtb2RlbElkLGxhYmVsRGlyKHNrTGFiZWxEaXIpLGxhYmVsV2lkdGgoc2tMYWJlbFdpZHRoKVxuICogYmZvICAsYWN0aXZlKHNrQWN0aXZlKSxkaXNhYmxlZChza0Rpc2FibGVkKVxuICogZnVuYyAsbTJlQ29udmVydG9yLGUybUNvbnZlcnRvcixtMnZDb252ZXJ0b3IsdjJtQ29udmVydG9yXG4gKiBodG1sICxjbGFzc05hbWUscm9sZSxzdHlsZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIFNLX1BST1BTID0ge1xuICAgIC8vc2tcbiAgICBDT01QX1RBRzogJ2NvbXBUYWcnLFxuICAgIE1PREVMOiAnbW9kZWwnLFxuICAgIE1PREVMX0lEOiAnbW9kZWxJZCcsXG4gICAgLy9BbnREXG4gICAgQ09MX1NQQU46ICdjb2xTcGFuJyxcbiAgICBDT0xfWFM6ICdjb2xYcycsXG4gICAgQ09MX1NNOiAnY29sU20nLFxuICAgIENPTF9NRDogJ2NvbE1kJyxcbiAgICBDT0xfTEc6ICdjb2xMZycsXG4gICAgQ09MX1hMOiAnY29sWGwnLFxuICAgIEZPUk1fTEFCRUxfQ09MOiAnZm9ybUxhYmVsQ29sJyxcbiAgICBGT1JNX0xBWU9VVDogJ2Zvcm1MYXlvdXQnLFxuICAgIEZPUk1fV1JBUFBFUl9DT0w6ICdmb3JtV3JhcHBlckNvbCcsXG4gICAgR1JJRF9HVVRURVI6ICdncmlkR3V0dGVyJyxcbiAgICBJTl9GUk9NX0lURU06ICdpbkZvcm1JdGVtJyxcbiAgICBJTl9GUk9NX1JPVzogJ2luRm9ybVJvdycsXG4gICAgLy91aSBzdGF0ZSwgYXJlIGJmbyAoYm9vbGVhbiwgZnVuY3Rpb24sIG9iamVjdHtkZXBzOixmdW5jOn0pXG4gICAgLy9kZXBzIHRvIG1vbml0b3JcbiAgICBBQ1RJVkU6ICdhY3RpdmUnLFxuICAgIERJU0FCTEVEOiAnZGlzYWJsZWQnLFxuICAgIEhJRERFTjogJ2hpZGRlbicsXG4gICAgUFJFVklFVzogJ3ByZXZpZXcnLFxuICAgIFJFQURPTkxZOiAncmVhZE9ubHknLFxuICAgIFJFUVVJUkVEOiAncmVxdWlyZWQnLC8vanVzdCBwYWludCByZXF1aXJlZCBpY29uXG4gICAgLy9jb21wb25lbnQgbW9uaXRvciBsaXN0LCBjYW4gYmUgc3RyaW5nW3JlZ10sIHN0cmluZyBhcnJheSBvciBvYmplY3RcbiAgICBNT05JVE9SOiAnbW9uaXRvcidcbiAgfTtcbiAgc3RhdGljIFNLX1BST1BTX1BSRUZJWCA9ICdzayc7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY29tcFRhZzogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLnN0cmluZ1xuICAgIF0pLC8vUmVhY3QgY29tcG9uZW50IG9yIEJyYWQgQ29tcG9uZW50XG4gICAgbW9kZWw6IENvbXAuSVNfUFJPUF9UWVBFU19NT0RFTCwvL0J1c2luZXNzIE1vZGVsKHBhcnQgb2YgcGFnZSksIFBsYWluT2JqZWN0IG9yIEJyYWQuTW9kZWxcbiAgICBza01vZGVsOiBDb21wLklTX1BST1BfVFlQRVNfTU9ERUwsLy9CdXNpbmVzcyBNb2RlbChwYWdlKSwgUGxhaW5PYmplY3Qgb3IgQnJhZC5Nb2RlbFxuICAgIHNrU3lzTW9kZWw6IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKE1vZGVsKSwvL1N5c3RlbSBNb2RlbCh3aG9sZSBvZiBwYWdlKSwgUGxhaW5PYmplY3Qgb3IgQnJhZC5Nb2RlbFxuICAgIG1vZGVsSWQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgY29sU3BhbjogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBza0NvbFNwYW46IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgY29sWHM6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5vYmplY3RcbiAgICBdKSxcbiAgICBza0NvbFhzOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgY29sU206IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5vYmplY3RcbiAgICBdKSxcbiAgICBza0NvbFNtOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgY29sTWQ6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5vYmplY3RcbiAgICBdKSxcbiAgICBza0NvbE1kOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgY29sTGc6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5vYmplY3RcbiAgICBdKSxcbiAgICBza0NvbExnOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgY29sWGw6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5vYmplY3RcbiAgICBdKSxcbiAgICBza0NvbFhsOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgZm9ybUxheW91dDogUmVhY3QuUHJvcFR5cGVzLm9uZU9mKFtEaXIuSG9yaXpvbnRhbCwgRGlyLlZlcnRpY2FsLCBEaXIuSW5saW5lXSksXG4gICAgc2tGb3JtTGF5b3V0OiBSZWFjdC5Qcm9wVHlwZXMub25lT2YoW0Rpci5Ib3Jpem9udGFsLCBEaXIuVmVydGljYWwsIERpci5JbmxpbmVdKSwvL0NvbnN0LkRpclxuICAgIGZvcm1MYWJlbENvbDogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBza0Zvcm1MYWJlbENvbDogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBmb3JtV3JhcHBlckNvbDogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBza0Zvcm1XcmFwcGVyQ29sOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIGdyaWRHdXR0ZXI6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgc2tHcmlkR3V0dGVyOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIGluRm9ybUl0ZW06IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIHNrSW5Gb3JtSXRlbTogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgaW5Gb3JtUm93OiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBza0luRm9ybVJvdzogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG5cbiAgICBhY3RpdmU6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5vYmplY3RcbiAgICBdKSxcbiAgICBza0FjdGl2ZTogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIGRpc2FibGVkOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgc2tEaXNhYmxlZDogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIGhpZGRlbjogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIHNrSGlkZGVuOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgcHJldmlldzogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIHNrUHJldmlldzogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIHJlYWRPbmx5OiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgc2tSZWFkT25seTogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIHJlcXVpcmVkOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgc2tSZXF1aXJlZDogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIG1vbml0b3I6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5hcnJheSxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5vYmplY3RcbiAgICBdKSxcblxuICAgIG0yZUNvbnZlcnRvcjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsLy9Nb2RlbCAyIEVkaXRpbmdcbiAgICBlMm1Db252ZXJ0b3I6IFJlYWN0LlByb3BUeXBlcy5mdW5jLC8vRWRpdGluZyAyIE1vZGVsXG4gICAgbTJ2Q29udmVydG9yOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYywvL01vZGVsIDIgVmlldywgbGlrZSBEYXRlIENvbXAsIG1vbWVudCBmb3JtYXQgdG8gdmlldzogWVlZWS1NTS1ERFRISDptbTpzcy5TU1NaIC0+IFlZWVktTU0tRERcbiAgICB2Mm1Db252ZXJ0b3I6IFJlYWN0LlByb3BUeXBlcy5mdW5jLy9WaWV3IDIgTW9kZWwsIGxpa2UgQ2hlY2sgQ29tcCwgdHJ1ZSBpcyBjaGVja2VkOiB0cnVlIC0+IDEsIGZhbHNlIC0+IDBcbiAgfTtcblxuICAvKipcbiAgICogQXNzZXJ0IE1vZGVsXG4gICAqXG4gICAqIEBwYXJhbSBwcm9wc1xuICAgKiBAcGFyYW0gcHJvcE5hbWVcbiAgICogQHBhcmFtIGNvbXBvbmVudE5hbWVcbiAgICogQHJldHVybnMge0Vycm9yfVxuICAgKi9cbiAgc3RhdGljIElTX1BST1BfVFlQRVNfTU9ERUwocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAgaWYgKHByb3BzW3Byb3BOYW1lXSAmJiAhKHByb3BzW3Byb3BOYW1lXSBpbnN0YW5jZW9mIE1vZGVsKSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignVGhlIFsnICsgY29tcG9uZW50TmFtZSArICddXFwncyBbJyArIHByb3BOYW1lICsgJ10gaXMgbm90IGEgbW9kZWwhJyk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQ29tcC5wcm9wVHlwZXMpO1xuXG4gIC8qKlxuICAgKiBGaWx0ZXIgc2sgcHJvcHNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGsga2V5L2luZGV4XG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIHNrUHJvcHNGaWx0ZXIoaykge1xuICAgIHJldHVybiBfLnN0YXJ0c1dpdGgoU0suczRzKGspLCBDb21wLlNLX1BST1BTX1BSRUZJWCk7XG4gIH1cblxuICBfdXBkYXRlVUkgPSB0aGlzLnVwZGF0ZVVJLmJpbmQodGhpcyk7XG4gIG1vbml0b3JzID0gW107XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5hZGRBbGxDaGFuZ2VkTW9uaXRvcigpO1xuICAgIHRoaXMuYWRkRXh0ZW5kQ2hhbmdlZE1vbml0b3IoKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVcGRhdGUoKSB7XG4gICAgdGhpcy5ybXZBbGxDaGFuZ2VkTW9uaXRvcigpO1xuICAgIHRoaXMucm12RXh0ZW5kQ2hhbmdlZE1vbml0b3IoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB0aGlzLmFkZEFsbENoYW5nZWRNb25pdG9yKCk7XG4gICAgdGhpcy5hZGRFeHRlbmRDaGFuZ2VkTW9uaXRvcigpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5ybXZBbGxDaGFuZ2VkTW9uaXRvcigpO1xuICAgIHRoaXMucm12RXh0ZW5kQ2hhbmdlZE1vbml0b3IoKTtcbiAgfVxuXG4gIGFkZEV4dGVuZENoYW5nZWRNb25pdG9yKCkge1xuXG4gIH1cblxuICBybXZFeHRlbmRDaGFuZ2VkTW9uaXRvcigpIHtcblxuICB9XG5cbiAgLy9tb25pdG9yIGJlZ2luXG4gIGFkZEFsbENoYW5nZWRNb25pdG9yKCkge1xuICAgIE1vZGVsLnBhcnNlU2FvKHRoaXMucHJvcHMubW9uaXRvcikuZm9yRWFjaCgoJGkpID0+IHtcbiAgICAgIHRoaXMuYWRkQ2hhbmdlZE1vbml0b3IoJGkpO1xuICAgIH0pO1xuICAgIC8vU2VsZiB2YWx1ZSBtb25pdG9yXG4gICAgaWYgKHRoaXMuaU1vZGVsSWQoKSkge1xuICAgICAgdGhpcy5hZGRDaGFuZ2VkTW9uaXRvcih0aGlzLmlNb2RlbElkKCkpO1xuICAgIH1cbiAgfVxuXG4gIGFkZENoYW5nZWRNb25pdG9yKGlkT3JSZWcpIHtcbiAgICBpZiAoIV8uaXNOaWwoaWRPclJlZykpIHtcbiAgICAgIGlmICh0aGlzLm1vbml0b3JzLmluZGV4T2YoaWRPclJlZykgPCAwKSB7XG4gICAgICAgIHRoaXMubW9uaXRvcnMucHVzaChpZE9yUmVnKTtcbiAgICAgIH1cbiAgICAgIGlmIChfLmlzUmVnRXhwKGlkT3JSZWcpKSB7XG4gICAgICAgIHRoaXMuaU1vZGVsKCkuYWRkUmVnQ2hhbmdlZExpc3RlbmVyKGlkT3JSZWcsIHRoaXMuX3VwZGF0ZVVJKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaU1vZGVsKCkuYWRkSWRDaGFuZ2VkTGlzdGVuZXIoaWRPclJlZywgdGhpcy5fdXBkYXRlVUkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJtdkFsbENoYW5nZWRNb25pdG9yKCkge1xuICAgIHRoaXMubW9uaXRvcnMuZm9yRWFjaCgoJGkpID0+IHtcbiAgICAgIHRoaXMucm12Q2hhbmdlZE1vbml0b3IoJGkpO1xuICAgIH0pO1xuICB9XG5cbiAgcm12Q2hhbmdlZE1vbml0b3IoaWRPclJlZykge1xuICAgIGlmIChfLmlzUmVnRXhwKGlkT3JSZWcpKSB7XG4gICAgICB0aGlzLmlNb2RlbCgpLnJtdlJlZ0NoYW5nZWRMaXN0ZW5lcihpZE9yUmVnLCB0aGlzLl91cGRhdGVVSSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaU1vZGVsKCkucm12SWRDaGFuZ2VkTGlzdGVuZXIoaWRPclJlZywgdGhpcy5fdXBkYXRlVUkpXG4gICAgfVxuICAgIHRoaXMubW9uaXRvcnMuc2tSbXYoaWRPclJlZyk7XG4gIH1cblxuICB1cGRhdGVVSShldnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtzdGF0ZVVpZDogXy51bmlxdWVJZCgnY29tcFN0YXRlVWlkJyl9KTtcbiAgfVxuXG4gIC8vbW9uaXRvciBlbmRcblxuICBnZXRFcnJvcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaU1vZGVsKCkuZ2V0RXJyb3JzKHRoaXMuaU1vZGVsSWQoKSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtjb21wVGFnOiBDb21wVGFnfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBUYWcgey4uLnRoaXMuY29tcFZhbGlkUHJvcHMoQ29tcFRhZyl9PlxuICAgICAgICB7dGhpcy5za1Byb3BzVHJhbnMoKX1cbiAgICAgIDwvQ29tcFRhZz5cbiAgICApO1xuICB9XG5cbiAgLy9Qcm9wZXJ0aWVzXG4gIC8qKlxuICAgKiBHZXQgbW9kZWwgaWYgZXhpc3QsIGVsc2Ugc2tNb2RlbFxuICAgKlxuICAgKiBAcmV0dXJucyB7TW9kZWx9XG4gICAqL1xuICBpTW9kZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2tQcm9wKENvbXAuU0tfUFJPUFMuTU9ERUwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBtb2RlbElkOiB4Lnh4Lnh4eC54eHh4XG4gICAqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBpTW9kZWxJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5tb2RlbElkO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBza01vZGVsXG4gICAqXG4gICAqIEByZXR1cm5zIHtNb2RlbH1cbiAgICovXG4gIHNrTW9kZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuc2tNb2RlbDtcbiAgfVxuXG4gIHN5c01vZGVsKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnNrU3lzTW9kZWw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHByb3AgdmFsdWU6IHByb3AgLT4gc2tQcm9wIC0+IERFRkFVTFRfUFJPUFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ31wcm9wXG4gICAqIEBwYXJhbSB7Kn0gZGVmYXVsdFZhbHVlXG4gICAqIEByZXR1cm5zIHsqfSBNYXliZSB1bmRlZmluZWRcbiAgICovXG4gIHNrUHJvcChwcm9wLCBkZWZhdWx0VmFsdWUgPSB1bmRlZmluZWQpIHtcbiAgICBsZXQgcnRuID0gdGhpcy5wcm9wc1twcm9wXTtcbiAgICBpZiAocnRuID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJ0biA9IHRoaXMucHJvcHNbQ29tcC5TS19QUk9QU19QUkVGSVggKyBTSy51cHBlcldvcmRGaXJzdENoYXIocHJvcCldXG4gICAgfVxuICAgIGlmIChydG4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcnRuID0gdGhpcy5wcm9wc1tDb21wLlNLX1BST1BTX1BSRUZJWCArICdTeXMnICsgU0sudXBwZXJXb3JkRmlyc3RDaGFyKHByb3ApXVxuICAgIH1cbiAgICBpZiAocnRuID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJ0biA9IENmZ1snREVGQVVMVCcgKyBTSy51cHBlcldvcmRGaXJzdENoYXIocHJvcCkucmVwbGFjZSgvW0EtWl0vZywgKCQxKSA9PiB7XG4gICAgICAgIHJldHVybiBTSy5DSEFSX1VOREVSTElORSArICQxO1xuICAgICAgfSkudG9VcHBlckNhc2UoKV1cbiAgICB9XG4gICAgcmV0dXJuIHJ0biA9PT0gdW5kZWZpbmVkID8gZGVmYXVsdFZhbHVlIDogcnRuO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldC9nZXQgdmFsdWUgZm9yIG1vZGVsSWRcbiAgICpcbiAgICogQHBhcmFtIHsqfSB2YWxcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBza1ZhbCh2YWwpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuaU1vZGVsKCkuc2tWYWwodGhpcy5pTW9kZWxJZCgpLCB2YWwpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmlNb2RlbCgpLnNrVmFsKHRoaXMuaU1vZGVsSWQoKSk7XG4gICAgfVxuICB9XG5cbiAgLy9GdW5jdGlvbnNcbiAgLyoqXG4gICAqIFJldHVybnMgdmFsaWQgcHJvcHMgZm9yIHRoaXMgY29tcFxuICAgKlxuICAgKiBAcGFyYW0ge0NvbXB8c3RyaW5nfSBjb21wXG4gICAqIEBwYXJhbSB7UGxhaW5PYmplY3R9IHByb3BcbiAgICogQHJldHVybnMge1BsYWluT2JqZWN0fVxuICAgKi9cbiAgY29tcFZhbGlkUHJvcHMoY29tcCwgcHJvcCkge1xuICAgIGNvbXAgPSBjb21wIHx8IHRoaXMucHJvcHMuY29tcFRhZztcbiAgICBwcm9wID0gcHJvcCB8fCB0aGlzLnByb3BzO1xuXG4gICAgbGV0IHRtcFByb3BzID0gUkVBQ1QuUC5za1ZhbHMoKTtcbiAgICB0bXBQcm9wcyA9IGNvbXAucHJvcFR5cGVzID8gdG1wUHJvcHMuY29uY2F0KE9iamVjdC5rZXlzKGNvbXAucHJvcFR5cGVzKSkgOiB0bXBQcm9wcztcbiAgICB0bXBQcm9wcyA9IChjb21wLnR5cGUgJiYgY29tcC50eXBlLnByb3BUeXBlcykgPyB0bXBQcm9wcy5jb25jYXQoT2JqZWN0LmtleXMoY29tcC50eXBlLnByb3BUeXBlcykpIDogdG1wUHJvcHM7XG5cbiAgICByZXR1cm4gXy5vbWl0KF8ucGljayhwcm9wLCB0bXBQcm9wcyksIFtDb21wLlNLX1BST1BTLkNPTVBfVEFHLCBDb21wLlNLX1BST1BTLk1PREVMX0lEXSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBib29sZWFuIHZhbHVlIG9mIGJvb2xlYW4sIGZ1bmN0aW9uIG9yIG9iamVjdCB3aXRoIHNrV2hlbiBwcm9wZXJ0aWVzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZGVmYXVsdFZhbHVlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgc2tCZm8ocHJvcCwgZGVmYXVsdFZhbHVlID0gZmFsc2UpIHtcbiAgICByZXR1cm4gdGhpcy5leGVjQmZvKHRoaXMuc2tQcm9wKHByb3AsIGRlZmF1bHRWYWx1ZSkpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBib29sZWFuIHZhbHVlIG9mIGJvb2xlYW4sIGZ1bmN0aW9uIG9yIG9iamVjdCB3aXRoIHNrV2hlbiBwcm9wZXJ0aWVzXG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbnxGdW5jdGlvbnxPYmplY3R9IGJmb1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGRlZmF1bHRWYWx1ZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGV4ZWNCZm8oYmZvLCBkZWZhdWx0VmFsdWUgPSBmYWxzZSkge1xuICAgIGlmIChfLmlzQm9vbGVhbihiZm8pKSB7XG4gICAgICByZXR1cm4gYmZvO1xuICAgIH0gZWxzZSBpZiAoXy5pc0Z1bmN0aW9uKGJmbykpIHtcbiAgICAgIHJldHVybiBiZm8uY2FsbCh0aGlzKTtcbiAgICB9IGVsc2UgaWYgKF8uaXNPYmplY3QoYmZvKSAmJiBfLmlzRnVuY3Rpb24oYmZvLmZ1bmMpKSB7XG4gICAgICByZXR1cm4gYmZvLnNrV2hlbi5jYWxsKHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2ZlcnJpbmcgcHJvcHMgdG8gY2hpbGRyZW5cbiAgICpcbiAgICogY2hpbGQgKyBza0NoaWxkUHJvcHNUcmFucyhjaGlsZCkgKyB0aGlzLnByb3BzLnNrRmlsdGVyKGZhbHNlLCBDb21wLnNrUHJvcHNGaWx0ZXIpICsgY2hpbGQucHJvcHMuc2tGaWx0ZXIoZmFsc2UsIENvbXAuc2tQcm9wc0ZpbHRlcilcbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdC5DaGlsZHJlbn0gY2hpbGRyZW5cbiAgICogQHJldHVybnMge1JlYWN0LkNoaWxkcmVufVxuICAgKi9cbiAgc2tQcm9wc1RyYW5zKGNoaWxkcmVuID0gdW5kZWZpbmVkKSB7XG4gICAgbGV0IHNrUHJvcHMgPSB0aGlzLnByb3BzLnNrRmlsdGVyKGZhbHNlLCBDb21wLnNrUHJvcHNGaWx0ZXIpO1xuICAgIHJldHVybiBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4gPyBjaGlsZHJlbiA6IHRoaXMucHJvcHMuY2hpbGRyZW4sIGNoaWxkID0+IHtcbiAgICAgIGlmIChSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgbGV0IHRtcFByb3BzID0gKFJFQUNULlRBR1tjaGlsZC50eXBlXSAmJiBIVE1MLlBST1BbY2hpbGQudHlwZV0pID8ge30gOiBza1Byb3BzO1xuICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBfLmFzc2lnbih0aGlzLmNoaWxkUHJvcHNUcmFucyhjaGlsZCksIHRtcFByb3BzLCBjaGlsZC5wcm9wcy5za0ZpbHRlcihmYWxzZSwgQ29tcC5za1Byb3BzRmlsdGVyKSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogR2VuIHByb3BzIHRyYW5zIHRvIGNoaWxkcmVuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3QuQ29tcG9uZW50fSBjaGlsZFxuICAgKiBAcmV0dXJucyB7UGxhaW5PYmplY3R9XG4gICAqL1xuICBjaGlsZFByb3BzVHJhbnMoY2hpbGQpIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICBoYXNTcGVjaWFsQ2hpbGQoc3BlY2lhbENoaWxkTmFtZSkge1xuICAgIHJldHVybiBSZWFjdFV0aWxzLnNvbWUodGhpcy5wcm9wcy5jaGlsZHJlbiwgKGNoaWxkLCBpZHgpID0+IHtcbiAgICAgIHJldHVybiBjaGlsZC50eXBlICYmIGNoaWxkLnR5cGUubmFtZSA9PSBzcGVjaWFsQ2hpbGROYW1lXG4gICAgfSwgdGhpcyk7XG4gIH1cbn1cbiJdfQ==