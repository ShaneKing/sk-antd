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

var _ReactUtil = require('./ReactUtil');

var _ReactUtil2 = _interopRequireDefault(_ReactUtil);

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

    /**
     * Filter sk props
     *
     * @param {string} k key/index
     * @returns {boolean}
     */

  }, {
    key: 'skPropsFilter',
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
      return _ReactUtil2.default.some(this.props.children, function (child, idx) {
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
exports.default = Comp;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL0NvbXAuanMiXSwibmFtZXMiOlsiQ29tcCIsInByb3BzIiwicHJvcE5hbWUiLCJjb21wb25lbnROYW1lIiwiRXJyb3IiLCJrIiwic3RhcnRzV2l0aCIsInM0cyIsIlNLX1BST1BTX1BSRUZJWCIsImFyZ3MiLCJfdXBkYXRlVUkiLCJ1cGRhdGVVSSIsImJpbmQiLCJtb25pdG9ycyIsImFkZEFsbENoYW5nZWRNb25pdG9yIiwiYWRkRXh0ZW5kQ2hhbmdlZE1vbml0b3IiLCJybXZBbGxDaGFuZ2VkTW9uaXRvciIsInJtdkV4dGVuZENoYW5nZWRNb25pdG9yIiwicGFyc2VTYW8iLCJtb25pdG9yIiwiZm9yRWFjaCIsIiRpIiwiYWRkQ2hhbmdlZE1vbml0b3IiLCJpTW9kZWxJZCIsImlkT3JSZWciLCJpc05pbCIsImluZGV4T2YiLCJwdXNoIiwiaXNSZWdFeHAiLCJpTW9kZWwiLCJhZGRSZWdDaGFuZ2VkTGlzdGVuZXIiLCJhZGRJZENoYW5nZWRMaXN0ZW5lciIsInJtdkNoYW5nZWRNb25pdG9yIiwicm12UmVnQ2hhbmdlZExpc3RlbmVyIiwicm12SWRDaGFuZ2VkTGlzdGVuZXIiLCJza1JtdiIsImV2dCIsInNldFN0YXRlIiwic3RhdGVVaWQiLCJ1bmlxdWVJZCIsImdldEVycm9ycyIsIkNvbXBUYWciLCJjb21wVGFnIiwiY29tcFZhbGlkUHJvcHMiLCJza1Byb3BzVHJhbnMiLCJza1Byb3AiLCJTS19QUk9QUyIsIk1PREVMIiwibW9kZWxJZCIsInNrTW9kZWwiLCJza1N5c01vZGVsIiwicHJvcCIsImRlZmF1bHRWYWx1ZSIsInVuZGVmaW5lZCIsInJ0biIsInVwcGVyV29yZEZpcnN0Q2hhciIsInJlcGxhY2UiLCIkMSIsIkNIQVJfVU5ERVJMSU5FIiwidG9VcHBlckNhc2UiLCJ2YWwiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJza1ZhbCIsImNvbXAiLCJ0bXBQcm9wcyIsIlAiLCJza1ZhbHMiLCJwcm9wVHlwZXMiLCJjb25jYXQiLCJPYmplY3QiLCJrZXlzIiwidHlwZSIsIm9taXQiLCJwaWNrIiwiQ09NUF9UQUciLCJNT0RFTF9JRCIsImV4ZWNCZm8iLCJiZm8iLCJpc0Jvb2xlYW4iLCJpc0Z1bmN0aW9uIiwiY2FsbCIsImlzT2JqZWN0IiwiZnVuYyIsInNrV2hlbiIsImNoaWxkcmVuIiwic2tQcm9wcyIsInNrRmlsdGVyIiwic2tQcm9wc0ZpbHRlciIsIkNoaWxkcmVuIiwibWFwIiwiaXNWYWxpZEVsZW1lbnQiLCJjaGlsZCIsIlRBRyIsIlBST1AiLCJjbG9uZUVsZW1lbnQiLCJhc3NpZ24iLCJjaGlsZFByb3BzVHJhbnMiLCJzcGVjaWFsQ2hpbGROYW1lIiwic29tZSIsImlkeCIsIm5hbWUiLCJDb21wb25lbnQiLCJDT0xfU1BBTiIsIkNPTF9YUyIsIkNPTF9TTSIsIkNPTF9NRCIsIkNPTF9MRyIsIkNPTF9YTCIsIkZPUk1fTEFCRUxfQ09MIiwiRk9STV9MQVlPVVQiLCJGT1JNX1dSQVBQRVJfQ09MIiwiR1JJRF9HVVRURVIiLCJJTl9GUk9NX0lURU0iLCJJTl9GUk9NX1JPVyIsIkFDVElWRSIsIkRJU0FCTEVEIiwiSElEREVOIiwiUFJFVklFVyIsIlJFQURPTkxZIiwiUkVRVUlSRUQiLCJNT05JVE9SIiwiUHJvcFR5cGVzIiwib25lT2ZUeXBlIiwiZWxlbWVudCIsInN0cmluZyIsIm1vZGVsIiwiSVNfUFJPUF9UWVBFU19NT0RFTCIsImluc3RhbmNlT2YiLCJjb2xTcGFuIiwibnVtYmVyIiwic2tDb2xTcGFuIiwiY29sWHMiLCJvYmplY3QiLCJza0NvbFhzIiwiY29sU20iLCJza0NvbFNtIiwiY29sTWQiLCJza0NvbE1kIiwiY29sTGciLCJza0NvbExnIiwiY29sWGwiLCJza0NvbFhsIiwiZm9ybUxheW91dCIsIm9uZU9mIiwiSG9yaXpvbnRhbCIsIlZlcnRpY2FsIiwiSW5saW5lIiwic2tGb3JtTGF5b3V0IiwiZm9ybUxhYmVsQ29sIiwic2tGb3JtTGFiZWxDb2wiLCJmb3JtV3JhcHBlckNvbCIsInNrRm9ybVdyYXBwZXJDb2wiLCJncmlkR3V0dGVyIiwic2tHcmlkR3V0dGVyIiwiaW5Gb3JtSXRlbSIsImJvb2wiLCJza0luRm9ybUl0ZW0iLCJpbkZvcm1Sb3ciLCJza0luRm9ybVJvdyIsImFjdGl2ZSIsInNrQWN0aXZlIiwiZGlzYWJsZWQiLCJza0Rpc2FibGVkIiwiaGlkZGVuIiwic2tIaWRkZW4iLCJwcmV2aWV3Iiwic2tQcmV2aWV3IiwicmVhZE9ubHkiLCJza1JlYWRPbmx5IiwicmVxdWlyZWQiLCJza1JlcXVpcmVkIiwiYXJyYXkiLCJtMmVDb252ZXJ0b3IiLCJlMm1Db252ZXJ0b3IiLCJtMnZDb252ZXJ0b3IiLCJ2Mm1Db252ZXJ0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7OztJQU1xQkEsSTs7Ozs7OztBQXdLbkI7Ozs7Ozs7O3dDQVEyQkMsSyxFQUFPQyxRLEVBQVVDLGEsRUFBZTtBQUN6RCxVQUFJRixNQUFNQyxRQUFOLEtBQW1CLEVBQUVELE1BQU1DLFFBQU4sNEJBQUYsQ0FBdkIsRUFBNEQ7QUFDMUQsZUFBTyxJQUFJRSxLQUFKLENBQVUsVUFBVUQsYUFBVixHQUEwQixRQUExQixHQUFxQ0QsUUFBckMsR0FBZ0QsbUJBQTFELENBQVA7QUFDRDtBQUNGOztBQUVEOzs7Ozs7Ozs7a0NBTXFCRyxDLEVBQUc7QUFDdEIsYUFBTyxpQkFBRUMsVUFBRixDQUFhLGVBQUdDLEdBQUgsQ0FBT0YsQ0FBUCxDQUFiLEVBQXdCTCxLQUFLUSxlQUE3QixDQUFQO0FBQ0Q7OztBQUtELGtCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSx1SUFDVkEsSUFEVTs7QUFBQSxVQUhyQkMsU0FHcUIsR0FIVCxNQUFLQyxRQUFMLENBQWNDLElBQWQsT0FHUztBQUFBLFVBRnJCQyxRQUVxQixHQUZWLEVBRVU7QUFBQTtBQUVwQjs7Ozt3Q0FFbUI7QUFD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QUFZLGdCQUFNakQsU0FBTixDQUFnQkMsU0FBaEIsQ0FBMEIsQ0FDcEMsZ0JBQU1ELFNBQU4sQ0FBZ0JrQyxJQURvQixFQUVwQyxnQkFBTWxDLFNBQU4sQ0FBZ0J2QyxJQUZvQixFQUdwQyxnQkFBTXVDLFNBQU4sQ0FBZ0JXLE1BSG9CLENBQTFCLENBeEhLO0FBNkhqQmxILFdBQVMsZ0JBQU11RyxTQUFOLENBQWdCQyxTQUFoQixDQUEwQixDQUNqQyxnQkFBTUQsU0FBTixDQUFnQkcsTUFEaUIsRUFFakMsZ0JBQU1ILFNBQU4sQ0FBZ0JrRCxLQUZpQixFQUdqQyxnQkFBTWxELFNBQU4sQ0FBZ0JXLE1BSGlCLENBQTFCLENBN0hROztBQW1JakJ3QyxnQkFBYyxnQkFBTW5ELFNBQU4sQ0FBZ0J2QyxJQW5JYixFQW1Ja0I7QUFDbkMyRixnQkFBYyxnQkFBTXBELFNBQU4sQ0FBZ0J2QyxJQXBJYixFQW9Ja0I7QUFDbkM0RixnQkFBYyxnQkFBTXJELFNBQU4sQ0FBZ0J2QyxJQXJJYixFQXFJa0I7QUFDbkM2RixnQkFBYyxnQkFBTXRELFNBQU4sQ0FBZ0J2QyxJQXRJYixDQXNJaUI7QUF0SWpCLEM7a0JBL0JBbkYsSSIsImZpbGUiOiJ1dGlscy9Db21wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgU0sgZnJvbSAnc2stanMnO1xuaW1wb3J0IENmZyBmcm9tICcuL0NmZyc7XG5pbXBvcnQge0Rpcn0gZnJvbSAnLi9Db25zdCc7XG5pbXBvcnQgSFRNTCBmcm9tICcuL0hUTUwnO1xuaW1wb3J0IE1vZGVsIGZyb20gJy4vTW9kZWwnO1xuaW1wb3J0IFJFQUNUIGZyb20gJy4vUkVBQ1QnO1xuaW1wb3J0IFJlYWN0VXRpbCBmcm9tICcuL1JlYWN0VXRpbCc7XG5cbi8qKlxuICogcHJvcHM6Y29tcFRhZyxtb2RlbChza01vZGVsKSxtb2RlbElkLGxhYmVsRGlyKHNrTGFiZWxEaXIpLGxhYmVsV2lkdGgoc2tMYWJlbFdpZHRoKVxuICogYmZvICAsYWN0aXZlKHNrQWN0aXZlKSxkaXNhYmxlZChza0Rpc2FibGVkKVxuICogZnVuYyAsbTJlQ29udmVydG9yLGUybUNvbnZlcnRvcixtMnZDb252ZXJ0b3IsdjJtQ29udmVydG9yXG4gKiBodG1sICxjbGFzc05hbWUscm9sZSxzdHlsZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIFNLX1BST1BTID0ge1xuICAgIC8vc2tcbiAgICBDT01QX1RBRzogJ2NvbXBUYWcnLFxuICAgIE1PREVMOiAnbW9kZWwnLFxuICAgIE1PREVMX0lEOiAnbW9kZWxJZCcsXG4gICAgLy9BbnREXG4gICAgQ09MX1NQQU46ICdjb2xTcGFuJyxcbiAgICBDT0xfWFM6ICdjb2xYcycsXG4gICAgQ09MX1NNOiAnY29sU20nLFxuICAgIENPTF9NRDogJ2NvbE1kJyxcbiAgICBDT0xfTEc6ICdjb2xMZycsXG4gICAgQ09MX1hMOiAnY29sWGwnLFxuICAgIEZPUk1fTEFCRUxfQ09MOiAnZm9ybUxhYmVsQ29sJyxcbiAgICBGT1JNX0xBWU9VVDogJ2Zvcm1MYXlvdXQnLFxuICAgIEZPUk1fV1JBUFBFUl9DT0w6ICdmb3JtV3JhcHBlckNvbCcsXG4gICAgR1JJRF9HVVRURVI6ICdncmlkR3V0dGVyJyxcbiAgICBJTl9GUk9NX0lURU06ICdpbkZvcm1JdGVtJyxcbiAgICBJTl9GUk9NX1JPVzogJ2luRm9ybVJvdycsXG4gICAgLy91aSBzdGF0ZSwgYXJlIGJmbyAoYm9vbGVhbiwgZnVuY3Rpb24sIG9iamVjdHtkZXBzOixmdW5jOn0pXG4gICAgLy9kZXBzIHRvIG1vbml0b3JcbiAgICBBQ1RJVkU6ICdhY3RpdmUnLFxuICAgIERJU0FCTEVEOiAnZGlzYWJsZWQnLFxuICAgIEhJRERFTjogJ2hpZGRlbicsXG4gICAgUFJFVklFVzogJ3ByZXZpZXcnLFxuICAgIFJFQURPTkxZOiAncmVhZE9ubHknLFxuICAgIFJFUVVJUkVEOiAncmVxdWlyZWQnLC8vanVzdCBwYWludCByZXF1aXJlZCBpY29uXG4gICAgLy9jb21wb25lbnQgbW9uaXRvciBsaXN0LCBjYW4gYmUgc3RyaW5nW3JlZ10sIHN0cmluZyBhcnJheSBvciBvYmplY3RcbiAgICBNT05JVE9SOiAnbW9uaXRvcidcbiAgfTtcbiAgc3RhdGljIFNLX1BST1BTX1BSRUZJWCA9ICdzayc7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY29tcFRhZzogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLnN0cmluZ1xuICAgIF0pLC8vUmVhY3QgY29tcG9uZW50IG9yIEJyYWQgQ29tcG9uZW50XG4gICAgbW9kZWw6IENvbXAuSVNfUFJPUF9UWVBFU19NT0RFTCwvL0J1c2luZXNzIE1vZGVsKHBhcnQgb2YgcGFnZSksIFBsYWluT2JqZWN0IG9yIEJyYWQuTW9kZWxcbiAgICBza01vZGVsOiBDb21wLklTX1BST1BfVFlQRVNfTU9ERUwsLy9CdXNpbmVzcyBNb2RlbChwYWdlKSwgUGxhaW5PYmplY3Qgb3IgQnJhZC5Nb2RlbFxuICAgIHNrU3lzTW9kZWw6IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKE1vZGVsKSwvL1N5c3RlbSBNb2RlbCh3aG9sZSBvZiBwYWdlKSwgUGxhaW5PYmplY3Qgb3IgQnJhZC5Nb2RlbFxuICAgIG1vZGVsSWQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgY29sU3BhbjogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBza0NvbFNwYW46IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgY29sWHM6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5vYmplY3RcbiAgICBdKSxcbiAgICBza0NvbFhzOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgY29sU206IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5vYmplY3RcbiAgICBdKSxcbiAgICBza0NvbFNtOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgY29sTWQ6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5vYmplY3RcbiAgICBdKSxcbiAgICBza0NvbE1kOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgY29sTGc6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5vYmplY3RcbiAgICBdKSxcbiAgICBza0NvbExnOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgY29sWGw6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5vYmplY3RcbiAgICBdKSxcbiAgICBza0NvbFhsOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgZm9ybUxheW91dDogUmVhY3QuUHJvcFR5cGVzLm9uZU9mKFtEaXIuSG9yaXpvbnRhbCwgRGlyLlZlcnRpY2FsLCBEaXIuSW5saW5lXSksXG4gICAgc2tGb3JtTGF5b3V0OiBSZWFjdC5Qcm9wVHlwZXMub25lT2YoW0Rpci5Ib3Jpem9udGFsLCBEaXIuVmVydGljYWwsIERpci5JbmxpbmVdKSwvL0NvbnN0LkRpclxuICAgIGZvcm1MYWJlbENvbDogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBza0Zvcm1MYWJlbENvbDogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBmb3JtV3JhcHBlckNvbDogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBza0Zvcm1XcmFwcGVyQ29sOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIGdyaWRHdXR0ZXI6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgc2tHcmlkR3V0dGVyOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIGluRm9ybUl0ZW06IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIHNrSW5Gb3JtSXRlbTogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgaW5Gb3JtUm93OiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBza0luRm9ybVJvdzogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG5cbiAgICBhY3RpdmU6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5vYmplY3RcbiAgICBdKSxcbiAgICBza0FjdGl2ZTogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIGRpc2FibGVkOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgc2tEaXNhYmxlZDogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIGhpZGRlbjogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIHNrSGlkZGVuOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgcHJldmlldzogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIHNrUHJldmlldzogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIHJlYWRPbmx5OiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgc2tSZWFkT25seTogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIHJlcXVpcmVkOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgc2tSZXF1aXJlZDogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIG1vbml0b3I6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5hcnJheSxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5vYmplY3RcbiAgICBdKSxcblxuICAgIG0yZUNvbnZlcnRvcjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsLy9Nb2RlbCAyIEVkaXRpbmdcbiAgICBlMm1Db252ZXJ0b3I6IFJlYWN0LlByb3BUeXBlcy5mdW5jLC8vRWRpdGluZyAyIE1vZGVsXG4gICAgbTJ2Q29udmVydG9yOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYywvL01vZGVsIDIgVmlldywgbGlrZSBEYXRlIENvbXAsIG1vbWVudCBmb3JtYXQgdG8gdmlldzogWVlZWS1NTS1ERFRISDptbTpzcy5TU1NaIC0+IFlZWVktTU0tRERcbiAgICB2Mm1Db252ZXJ0b3I6IFJlYWN0LlByb3BUeXBlcy5mdW5jLy9WaWV3IDIgTW9kZWwsIGxpa2UgQ2hlY2sgQ29tcCwgdHJ1ZSBpcyBjaGVja2VkOiB0cnVlIC0+IDEsIGZhbHNlIC0+IDBcbiAgfTtcblxuICAvKipcbiAgICogQXNzZXJ0IE1vZGVsXG4gICAqXG4gICAqIEBwYXJhbSBwcm9wc1xuICAgKiBAcGFyYW0gcHJvcE5hbWVcbiAgICogQHBhcmFtIGNvbXBvbmVudE5hbWVcbiAgICogQHJldHVybnMge0Vycm9yfVxuICAgKi9cbiAgc3RhdGljIElTX1BST1BfVFlQRVNfTU9ERUwocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAgaWYgKHByb3BzW3Byb3BOYW1lXSAmJiAhKHByb3BzW3Byb3BOYW1lXSBpbnN0YW5jZW9mIE1vZGVsKSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignVGhlIFsnICsgY29tcG9uZW50TmFtZSArICddXFwncyBbJyArIHByb3BOYW1lICsgJ10gaXMgbm90IGEgbW9kZWwhJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpbHRlciBzayBwcm9wc1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gayBrZXkvaW5kZXhcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgc2tQcm9wc0ZpbHRlcihrKSB7XG4gICAgcmV0dXJuIF8uc3RhcnRzV2l0aChTSy5zNHMoayksIENvbXAuU0tfUFJPUFNfUFJFRklYKTtcbiAgfVxuXG4gIF91cGRhdGVVSSA9IHRoaXMudXBkYXRlVUkuYmluZCh0aGlzKTtcbiAgbW9uaXRvcnMgPSBbXTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmFkZEFsbENoYW5nZWRNb25pdG9yKCk7XG4gICAgdGhpcy5hZGRFeHRlbmRDaGFuZ2VkTW9uaXRvcigpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVwZGF0ZSgpIHtcbiAgICB0aGlzLnJtdkFsbENoYW5nZWRNb25pdG9yKCk7XG4gICAgdGhpcy5ybXZFeHRlbmRDaGFuZ2VkTW9uaXRvcigpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMuYWRkQWxsQ2hhbmdlZE1vbml0b3IoKTtcbiAgICB0aGlzLmFkZEV4dGVuZENoYW5nZWRNb25pdG9yKCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnJtdkFsbENoYW5nZWRNb25pdG9yKCk7XG4gICAgdGhpcy5ybXZFeHRlbmRDaGFuZ2VkTW9uaXRvcigpO1xuICB9XG5cbiAgYWRkRXh0ZW5kQ2hhbmdlZE1vbml0b3IoKSB7XG5cbiAgfVxuXG4gIHJtdkV4dGVuZENoYW5nZWRNb25pdG9yKCkge1xuXG4gIH1cblxuICAvL21vbml0b3IgYmVnaW5cbiAgYWRkQWxsQ2hhbmdlZE1vbml0b3IoKSB7XG4gICAgTW9kZWwucGFyc2VTYW8odGhpcy5wcm9wcy5tb25pdG9yKS5mb3JFYWNoKCgkaSkgPT4ge1xuICAgICAgdGhpcy5hZGRDaGFuZ2VkTW9uaXRvcigkaSk7XG4gICAgfSk7XG4gICAgLy9TZWxmIHZhbHVlIG1vbml0b3JcbiAgICBpZiAodGhpcy5pTW9kZWxJZCgpKSB7XG4gICAgICB0aGlzLmFkZENoYW5nZWRNb25pdG9yKHRoaXMuaU1vZGVsSWQoKSk7XG4gICAgfVxuICB9XG5cbiAgYWRkQ2hhbmdlZE1vbml0b3IoaWRPclJlZykge1xuICAgIGlmICghXy5pc05pbChpZE9yUmVnKSkge1xuICAgICAgaWYgKHRoaXMubW9uaXRvcnMuaW5kZXhPZihpZE9yUmVnKSA8IDApIHtcbiAgICAgICAgdGhpcy5tb25pdG9ycy5wdXNoKGlkT3JSZWcpO1xuICAgICAgfVxuICAgICAgaWYgKF8uaXNSZWdFeHAoaWRPclJlZykpIHtcbiAgICAgICAgdGhpcy5pTW9kZWwoKS5hZGRSZWdDaGFuZ2VkTGlzdGVuZXIoaWRPclJlZywgdGhpcy5fdXBkYXRlVUkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pTW9kZWwoKS5hZGRJZENoYW5nZWRMaXN0ZW5lcihpZE9yUmVnLCB0aGlzLl91cGRhdGVVSSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcm12QWxsQ2hhbmdlZE1vbml0b3IoKSB7XG4gICAgdGhpcy5tb25pdG9ycy5mb3JFYWNoKCgkaSkgPT4ge1xuICAgICAgdGhpcy5ybXZDaGFuZ2VkTW9uaXRvcigkaSk7XG4gICAgfSk7XG4gIH1cblxuICBybXZDaGFuZ2VkTW9uaXRvcihpZE9yUmVnKSB7XG4gICAgaWYgKF8uaXNSZWdFeHAoaWRPclJlZykpIHtcbiAgICAgIHRoaXMuaU1vZGVsKCkucm12UmVnQ2hhbmdlZExpc3RlbmVyKGlkT3JSZWcsIHRoaXMuX3VwZGF0ZVVJKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pTW9kZWwoKS5ybXZJZENoYW5nZWRMaXN0ZW5lcihpZE9yUmVnLCB0aGlzLl91cGRhdGVVSSlcbiAgICB9XG4gICAgdGhpcy5tb25pdG9ycy5za1JtdihpZE9yUmVnKTtcbiAgfVxuXG4gIHVwZGF0ZVVJKGV2dCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3N0YXRlVWlkOiBfLnVuaXF1ZUlkKCdjb21wU3RhdGVVaWQnKX0pO1xuICB9XG5cbiAgLy9tb25pdG9yIGVuZFxuXG4gIGdldEVycm9ycygpIHtcbiAgICByZXR1cm4gdGhpcy5pTW9kZWwoKS5nZXRFcnJvcnModGhpcy5pTW9kZWxJZCgpKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge2NvbXBUYWc6IENvbXBUYWd9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcFRhZyB7Li4udGhpcy5jb21wVmFsaWRQcm9wcyhDb21wVGFnKX0+XG4gICAgICAgIHt0aGlzLnNrUHJvcHNUcmFucygpfVxuICAgICAgPC9Db21wVGFnPlxuICAgICk7XG4gIH1cblxuICAvL1Byb3BlcnRpZXNcbiAgLyoqXG4gICAqIEdldCBtb2RlbCBpZiBleGlzdCwgZWxzZSBza01vZGVsXG4gICAqXG4gICAqIEByZXR1cm5zIHtNb2RlbH1cbiAgICovXG4gIGlNb2RlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5za1Byb3AoQ29tcC5TS19QUk9QUy5NT0RFTCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IG1vZGVsSWQ6IHgueHgueHh4Lnh4eHhcbiAgICpcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGlNb2RlbElkKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLm1vZGVsSWQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNrTW9kZWxcbiAgICpcbiAgICogQHJldHVybnMge01vZGVsfVxuICAgKi9cbiAgc2tNb2RlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5za01vZGVsO1xuICB9XG5cbiAgc3lzTW9kZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuc2tTeXNNb2RlbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcHJvcCB2YWx1ZTogcHJvcCAtPiBza1Byb3AgLT4gREVGQVVMVF9QUk9QXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfXByb3BcbiAgICogQHBhcmFtIHsqfSBkZWZhdWx0VmFsdWVcbiAgICogQHJldHVybnMgeyp9IE1heWJlIHVuZGVmaW5lZFxuICAgKi9cbiAgc2tQcm9wKHByb3AsIGRlZmF1bHRWYWx1ZSA9IHVuZGVmaW5lZCkge1xuICAgIGxldCBydG4gPSB0aGlzLnByb3BzW3Byb3BdO1xuICAgIGlmIChydG4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcnRuID0gdGhpcy5wcm9wc1tDb21wLlNLX1BST1BTX1BSRUZJWCArIFNLLnVwcGVyV29yZEZpcnN0Q2hhcihwcm9wKV1cbiAgICB9XG4gICAgaWYgKHJ0biA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBydG4gPSB0aGlzLnByb3BzW0NvbXAuU0tfUFJPUFNfUFJFRklYICsgJ1N5cycgKyBTSy51cHBlcldvcmRGaXJzdENoYXIocHJvcCldXG4gICAgfVxuICAgIGlmIChydG4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcnRuID0gQ2ZnWydERUZBVUxUJyArIFNLLnVwcGVyV29yZEZpcnN0Q2hhcihwcm9wKS5yZXBsYWNlKC9bQS1aXS9nLCAoJDEpID0+IHtcbiAgICAgICAgcmV0dXJuIFNLLkNIQVJfVU5ERVJMSU5FICsgJDE7XG4gICAgICB9KS50b1VwcGVyQ2FzZSgpXVxuICAgIH1cbiAgICByZXR1cm4gcnRuID09PSB1bmRlZmluZWQgPyBkZWZhdWx0VmFsdWUgOiBydG47XG4gIH1cblxuICAvKipcbiAgICogc2V0L2dldCB2YWx1ZSBmb3IgbW9kZWxJZFxuICAgKlxuICAgKiBAcGFyYW0geyp9IHZhbFxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIHNrVmFsKHZhbCkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5pTW9kZWwoKS5za1ZhbCh0aGlzLmlNb2RlbElkKCksIHZhbCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuaU1vZGVsKCkuc2tWYWwodGhpcy5pTW9kZWxJZCgpKTtcbiAgICB9XG4gIH1cblxuICAvL0Z1bmN0aW9uc1xuICAvKipcbiAgICogUmV0dXJucyB2YWxpZCBwcm9wcyBmb3IgdGhpcyBjb21wXG4gICAqXG4gICAqIEBwYXJhbSB7Q29tcHxzdHJpbmd9IGNvbXBcbiAgICogQHBhcmFtIHtQbGFpbk9iamVjdH0gcHJvcFxuICAgKiBAcmV0dXJucyB7UGxhaW5PYmplY3R9XG4gICAqL1xuICBjb21wVmFsaWRQcm9wcyhjb21wLCBwcm9wKSB7XG4gICAgY29tcCA9IGNvbXAgfHwgdGhpcy5wcm9wcy5jb21wVGFnO1xuICAgIHByb3AgPSBwcm9wIHx8IHRoaXMucHJvcHM7XG5cbiAgICBsZXQgdG1wUHJvcHMgPSBSRUFDVC5QLnNrVmFscygpO1xuICAgIHRtcFByb3BzID0gY29tcC5wcm9wVHlwZXMgPyB0bXBQcm9wcy5jb25jYXQoT2JqZWN0LmtleXMoY29tcC5wcm9wVHlwZXMpKSA6IHRtcFByb3BzO1xuICAgIHRtcFByb3BzID0gKGNvbXAudHlwZSAmJiBjb21wLnR5cGUucHJvcFR5cGVzKSA/IHRtcFByb3BzLmNvbmNhdChPYmplY3Qua2V5cyhjb21wLnR5cGUucHJvcFR5cGVzKSkgOiB0bXBQcm9wcztcblxuICAgIHJldHVybiBfLm9taXQoXy5waWNrKHByb3AsIHRtcFByb3BzKSwgW0NvbXAuU0tfUFJPUFMuQ09NUF9UQUcsIENvbXAuU0tfUFJPUFMuTU9ERUxfSURdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGJvb2xlYW4gdmFsdWUgb2YgYm9vbGVhbiwgZnVuY3Rpb24gb3Igb2JqZWN0IHdpdGggc2tXaGVuIHByb3BlcnRpZXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BcbiAgICogQHBhcmFtIHtib29sZWFufSBkZWZhdWx0VmFsdWVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBza0Jmbyhwcm9wLCBkZWZhdWx0VmFsdWUgPSBmYWxzZSkge1xuICAgIHJldHVybiB0aGlzLmV4ZWNCZm8odGhpcy5za1Byb3AocHJvcCwgZGVmYXVsdFZhbHVlKSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGJvb2xlYW4gdmFsdWUgb2YgYm9vbGVhbiwgZnVuY3Rpb24gb3Igb2JqZWN0IHdpdGggc2tXaGVuIHByb3BlcnRpZXNcbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufEZ1bmN0aW9ufE9iamVjdH0gYmZvXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZGVmYXVsdFZhbHVlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZXhlY0JmbyhiZm8sIGRlZmF1bHRWYWx1ZSA9IGZhbHNlKSB7XG4gICAgaWYgKF8uaXNCb29sZWFuKGJmbykpIHtcbiAgICAgIHJldHVybiBiZm87XG4gICAgfSBlbHNlIGlmIChfLmlzRnVuY3Rpb24oYmZvKSkge1xuICAgICAgcmV0dXJuIGJmby5jYWxsKHRoaXMpO1xuICAgIH0gZWxzZSBpZiAoXy5pc09iamVjdChiZm8pICYmIF8uaXNGdW5jdGlvbihiZm8uZnVuYykpIHtcbiAgICAgIHJldHVybiBiZm8uc2tXaGVuLmNhbGwodGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZmVycmluZyBwcm9wcyB0byBjaGlsZHJlblxuICAgKlxuICAgKiBjaGlsZCArIHNrQ2hpbGRQcm9wc1RyYW5zKGNoaWxkKSArIHRoaXMucHJvcHMuc2tGaWx0ZXIoZmFsc2UsIENvbXAuc2tQcm9wc0ZpbHRlcikgKyBjaGlsZC5wcm9wcy5za0ZpbHRlcihmYWxzZSwgQ29tcC5za1Byb3BzRmlsdGVyKVxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0LkNoaWxkcmVufSBjaGlsZHJlblxuICAgKiBAcmV0dXJucyB7UmVhY3QuQ2hpbGRyZW59XG4gICAqL1xuICBza1Byb3BzVHJhbnMoY2hpbGRyZW4gPSB1bmRlZmluZWQpIHtcbiAgICBsZXQgc2tQcm9wcyA9IHRoaXMucHJvcHMuc2tGaWx0ZXIoZmFsc2UsIENvbXAuc2tQcm9wc0ZpbHRlcik7XG4gICAgcmV0dXJuIFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiA/IGNoaWxkcmVuIDogdGhpcy5wcm9wcy5jaGlsZHJlbiwgY2hpbGQgPT4ge1xuICAgICAgaWYgKFJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICBsZXQgdG1wUHJvcHMgPSAoUkVBQ1QuVEFHW2NoaWxkLnR5cGVdICYmIEhUTUwuUFJPUFtjaGlsZC50eXBlXSkgPyB7fSA6IHNrUHJvcHM7XG4gICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIF8uYXNzaWduKHRoaXMuY2hpbGRQcm9wc1RyYW5zKGNoaWxkKSwgdG1wUHJvcHMsIGNoaWxkLnByb3BzLnNrRmlsdGVyKGZhbHNlLCBDb21wLnNrUHJvcHNGaWx0ZXIpKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW4gcHJvcHMgdHJhbnMgdG8gY2hpbGRyZW5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdC5Db21wb25lbnR9IGNoaWxkXG4gICAqIEByZXR1cm5zIHtQbGFpbk9iamVjdH1cbiAgICovXG4gIGNoaWxkUHJvcHNUcmFucyhjaGlsZCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIGhhc1NwZWNpYWxDaGlsZChzcGVjaWFsQ2hpbGROYW1lKSB7XG4gICAgcmV0dXJuIFJlYWN0VXRpbC5zb21lKHRoaXMucHJvcHMuY2hpbGRyZW4sIChjaGlsZCwgaWR4KSA9PiB7XG4gICAgICByZXR1cm4gY2hpbGQudHlwZSAmJiBjaGlsZC50eXBlLm5hbWUgPT0gc3BlY2lhbENoaWxkTmFtZVxuICAgIH0sIHRoaXMpO1xuICB9XG59XG4iXX0=