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
  SIZE: 'size',
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
  size: _react2.default.PropTypes.oneOf([_Const.SIZE.Large, _Const.SIZE.Default, _Const.SIZE.Small]),
  skSize: _react2.default.PropTypes.oneOf([_Const.SIZE.Large, _Const.SIZE.Default, _Const.SIZE.Small]),

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL0NvbXAuanMiXSwibmFtZXMiOlsiQ29tcCIsInByb3BzIiwicHJvcE5hbWUiLCJjb21wb25lbnROYW1lIiwiRXJyb3IiLCJrIiwic3RhcnRzV2l0aCIsInM0cyIsIlNLX1BST1BTX1BSRUZJWCIsImFyZ3MiLCJfdXBkYXRlVUkiLCJ1cGRhdGVVSSIsImJpbmQiLCJtb25pdG9ycyIsImFkZEFsbENoYW5nZWRNb25pdG9yIiwiYWRkRXh0ZW5kQ2hhbmdlZE1vbml0b3IiLCJybXZBbGxDaGFuZ2VkTW9uaXRvciIsInJtdkV4dGVuZENoYW5nZWRNb25pdG9yIiwicGFyc2VTYW8iLCJtb25pdG9yIiwiZm9yRWFjaCIsIiRpIiwiYWRkQ2hhbmdlZE1vbml0b3IiLCJpTW9kZWxJZCIsImlkT3JSZWciLCJpc05pbCIsImluZGV4T2YiLCJwdXNoIiwiaXNSZWdFeHAiLCJpTW9kZWwiLCJhZGRSZWdDaGFuZ2VkTGlzdGVuZXIiLCJhZGRJZENoYW5nZWRMaXN0ZW5lciIsInJtdkNoYW5nZWRNb25pdG9yIiwicm12UmVnQ2hhbmdlZExpc3RlbmVyIiwicm12SWRDaGFuZ2VkTGlzdGVuZXIiLCJza1JtdiIsImV2dCIsInNldFN0YXRlIiwic3RhdGVVaWQiLCJ1bmlxdWVJZCIsImdldEVycm9ycyIsIkNvbXBUYWciLCJjb21wVGFnIiwiY29tcFZhbGlkUHJvcHMiLCJza1Byb3BzVHJhbnMiLCJza1Byb3AiLCJTS19QUk9QUyIsIk1PREVMIiwibW9kZWxJZCIsInNrTW9kZWwiLCJza1N5c01vZGVsIiwicHJvcCIsImRlZmF1bHRWYWx1ZSIsInVuZGVmaW5lZCIsInJ0biIsInVwcGVyV29yZEZpcnN0Q2hhciIsInJlcGxhY2UiLCIkMSIsIkNIQVJfVU5ERVJMSU5FIiwidG9VcHBlckNhc2UiLCJ2YWwiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJza1ZhbCIsImNvbXAiLCJ0bXBQcm9wcyIsIlAiLCJza1ZhbHMiLCJwcm9wVHlwZXMiLCJjb25jYXQiLCJPYmplY3QiLCJrZXlzIiwidHlwZSIsIm9taXQiLCJwaWNrIiwiQ09NUF9UQUciLCJNT0RFTF9JRCIsImV4ZWNCZm8iLCJiZm8iLCJpc0Jvb2xlYW4iLCJpc0Z1bmN0aW9uIiwiY2FsbCIsImlzT2JqZWN0IiwiZnVuYyIsInNrV2hlbiIsImNoaWxkcmVuIiwic2tQcm9wcyIsInNrRmlsdGVyIiwic2tQcm9wc0ZpbHRlciIsIkNoaWxkcmVuIiwibWFwIiwiaXNWYWxpZEVsZW1lbnQiLCJjaGlsZCIsIlRBRyIsIlBST1AiLCJjbG9uZUVsZW1lbnQiLCJhc3NpZ24iLCJjaGlsZFByb3BzVHJhbnMiLCJzcGVjaWFsQ2hpbGROYW1lIiwic29tZSIsImlkeCIsIm5hbWUiLCJDb21wb25lbnQiLCJDT0xfU1BBTiIsIkNPTF9YUyIsIkNPTF9TTSIsIkNPTF9NRCIsIkNPTF9MRyIsIkNPTF9YTCIsIkZPUk1fTEFCRUxfQ09MIiwiRk9STV9MQVlPVVQiLCJGT1JNX1dSQVBQRVJfQ09MIiwiR1JJRF9HVVRURVIiLCJJTl9GUk9NX0lURU0iLCJJTl9GUk9NX1JPVyIsIlNJWkUiLCJBQ1RJVkUiLCJESVNBQkxFRCIsIkhJRERFTiIsIlBSRVZJRVciLCJSRUFET05MWSIsIlJFUVVJUkVEIiwiTU9OSVRPUiIsIlByb3BUeXBlcyIsIm9uZU9mVHlwZSIsImVsZW1lbnQiLCJzdHJpbmciLCJtb2RlbCIsIklTX1BST1BfVFlQRVNfTU9ERUwiLCJpbnN0YW5jZU9mIiwiY29sU3BhbiIsIm51bWJlciIsInNrQ29sU3BhbiIsImNvbFhzIiwib2JqZWN0Iiwic2tDb2xYcyIsImNvbFNtIiwic2tDb2xTbSIsImNvbE1kIiwic2tDb2xNZCIsImNvbExnIiwic2tDb2xMZyIsImNvbFhsIiwic2tDb2xYbCIsImZvcm1MYXlvdXQiLCJvbmVPZiIsIkhvcml6b250YWwiLCJWZXJ0aWNhbCIsIklubGluZSIsInNrRm9ybUxheW91dCIsImZvcm1MYWJlbENvbCIsInNrRm9ybUxhYmVsQ29sIiwiZm9ybVdyYXBwZXJDb2wiLCJza0Zvcm1XcmFwcGVyQ29sIiwiZ3JpZEd1dHRlciIsInNrR3JpZEd1dHRlciIsImluRm9ybUl0ZW0iLCJib29sIiwic2tJbkZvcm1JdGVtIiwiaW5Gb3JtUm93Iiwic2tJbkZvcm1Sb3ciLCJzaXplIiwiTGFyZ2UiLCJEZWZhdWx0IiwiU21hbGwiLCJza1NpemUiLCJhY3RpdmUiLCJza0FjdGl2ZSIsImRpc2FibGVkIiwic2tEaXNhYmxlZCIsImhpZGRlbiIsInNrSGlkZGVuIiwicHJldmlldyIsInNrUHJldmlldyIsInJlYWRPbmx5Iiwic2tSZWFkT25seSIsInJlcXVpcmVkIiwic2tSZXF1aXJlZCIsImFycmF5IiwibTJlQ29udmVydG9yIiwiZTJtQ29udmVydG9yIiwibTJ2Q29udmVydG9yIiwidjJtQ29udmVydG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7SUFNcUJBLEk7Ozs7Ozs7QUEyS25COzs7Ozs7Ozt3Q0FRMkJDLEssRUFBT0MsUSxFQUFVQyxhLEVBQWU7QUFDekQsVUFBSUYsTUFBTUMsUUFBTixLQUFtQixFQUFFRCxNQUFNQyxRQUFOLDRCQUFGLENBQXZCLEVBQTREO0FBQzFELGVBQU8sSUFBSUUsS0FBSixDQUFVLFVBQVVELGFBQVYsR0FBMEIsUUFBMUIsR0FBcUNELFFBQXJDLEdBQWdELG1CQUExRCxDQUFQO0FBQ0Q7QUFDRjs7QUFFRDs7Ozs7Ozs7O2tDQU1xQkcsQyxFQUFHO0FBQ3RCLGFBQU8saUJBQUVDLFVBQUYsQ0FBYSxlQUFHQyxHQUFILENBQU9GLENBQVAsQ0FBYixFQUF3QkwsS0FBS1EsZUFBN0IsQ0FBUDtBQUNEOzs7QUFLRCxrQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsdUlBQ1ZBLElBRFU7O0FBQUEsVUFIckJDLFNBR3FCLEdBSFQsTUFBS0MsUUFBTCxDQUFjQyxJQUFkLE9BR1M7QUFB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QyxTQUFoQixDQUEwQixDQUNwQyxnQkFBTUQsU0FBTixDQUFnQmtDLElBRG9CLEVBRXBDLGdCQUFNbEMsU0FBTixDQUFnQnhDLElBRm9CLEVBR3BDLGdCQUFNd0MsU0FBTixDQUFnQlcsTUFIb0IsQ0FBMUIsQ0FoSEs7QUFxSGpCMEMsWUFBVSxnQkFBTXJELFNBQU4sQ0FBZ0JDLFNBQWhCLENBQTBCLENBQ2xDLGdCQUFNRCxTQUFOLENBQWdCa0MsSUFEa0IsRUFFbEMsZ0JBQU1sQyxTQUFOLENBQWdCeEMsSUFGa0IsRUFHbEMsZ0JBQU13QyxTQUFOLENBQWdCVyxNQUhrQixDQUExQixDQXJITztBQTBIakIyQyxjQUFZLGdCQUFNdEQsU0FBTixDQUFnQkMsU0FBaEIsQ0FBMEIsQ0FDcEMsZ0JBQU1ELFNBQU4sQ0FBZ0JrQyxJQURvQixFQUVwQyxnQkFBTWxDLFNBQU4sQ0FBZ0J4QyxJQUZvQixFQUdwQyxnQkFBTXdDLFNBQU4sQ0FBZ0JXLE1BSG9CLENBQTFCLENBMUhLO0FBK0hqQm5ILFdBQVMsZ0JBQU13RyxTQUFOLENBQWdCQyxTQUFoQixDQUEwQixDQUNqQyxnQkFBTUQsU0FBTixDQUFnQkcsTUFEaUIsRUFFakMsZ0JBQU1ILFNBQU4sQ0FBZ0J1RCxLQUZpQixFQUdqQyxnQkFBTXZELFNBQU4sQ0FBZ0JXLE1BSGlCLENBQTFCLENBL0hROztBQXFJakI2QyxnQkFBYyxnQkFBTXhELFNBQU4sQ0FBZ0J4QyxJQXJJYixFQXFJa0I7QUFDbkNpRyxnQkFBYyxnQkFBTXpELFNBQU4sQ0FBZ0J4QyxJQXRJYixFQXNJa0I7QUFDbkNrRyxnQkFBYyxnQkFBTTFELFNBQU4sQ0FBZ0J4QyxJQXZJYixFQXVJa0I7QUFDbkNtRyxnQkFBYyxnQkFBTTNELFNBQU4sQ0FBZ0J4QyxJQXhJYixDQXdJaUI7QUF4SWpCLEM7a0JBaENBbkYsSSIsImZpbGUiOiJ1dGlscy9Db21wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgU0sgZnJvbSAnc2stanMnO1xuaW1wb3J0IENmZyBmcm9tICcuL0NmZyc7XG5pbXBvcnQge0RpciwgU0laRX0gZnJvbSAnLi9Db25zdCc7XG5pbXBvcnQgSFRNTCBmcm9tICcuL0hUTUwnO1xuaW1wb3J0IE1vZGVsIGZyb20gJy4vTW9kZWwnO1xuaW1wb3J0IFJFQUNUIGZyb20gJy4vUkVBQ1QnO1xuaW1wb3J0IFJlYWN0VXRpbCBmcm9tICcuL1JlYWN0VXRpbCc7XG5cbi8qKlxuICogcHJvcHM6Y29tcFRhZyxtb2RlbChza01vZGVsKSxtb2RlbElkLGxhYmVsRGlyKHNrTGFiZWxEaXIpLGxhYmVsV2lkdGgoc2tMYWJlbFdpZHRoKVxuICogYmZvICAsYWN0aXZlKHNrQWN0aXZlKSxkaXNhYmxlZChza0Rpc2FibGVkKVxuICogZnVuYyAsbTJlQ29udmVydG9yLGUybUNvbnZlcnRvcixtMnZDb252ZXJ0b3IsdjJtQ29udmVydG9yXG4gKiBodG1sICxjbGFzc05hbWUscm9sZSxzdHlsZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIFNLX1BST1BTID0ge1xuICAgIC8vc2tcbiAgICBDT01QX1RBRzogJ2NvbXBUYWcnLFxuICAgIE1PREVMOiAnbW9kZWwnLFxuICAgIE1PREVMX0lEOiAnbW9kZWxJZCcsXG4gICAgLy9BbnREXG4gICAgQ09MX1NQQU46ICdjb2xTcGFuJyxcbiAgICBDT0xfWFM6ICdjb2xYcycsXG4gICAgQ09MX1NNOiAnY29sU20nLFxuICAgIENPTF9NRDogJ2NvbE1kJyxcbiAgICBDT0xfTEc6ICdjb2xMZycsXG4gICAgQ09MX1hMOiAnY29sWGwnLFxuICAgIEZPUk1fTEFCRUxfQ09MOiAnZm9ybUxhYmVsQ29sJyxcbiAgICBGT1JNX0xBWU9VVDogJ2Zvcm1MYXlvdXQnLFxuICAgIEZPUk1fV1JBUFBFUl9DT0w6ICdmb3JtV3JhcHBlckNvbCcsXG4gICAgR1JJRF9HVVRURVI6ICdncmlkR3V0dGVyJyxcbiAgICBJTl9GUk9NX0lURU06ICdpbkZvcm1JdGVtJyxcbiAgICBJTl9GUk9NX1JPVzogJ2luRm9ybVJvdycsXG4gICAgU0laRTogJ3NpemUnLFxuICAgIC8vdWkgc3RhdGUsIGFyZSBiZm8gKGJvb2xlYW4sIGZ1bmN0aW9uLCBvYmplY3R7ZGVwczosZnVuYzp9KVxuICAgIC8vZGVwcyB0byBtb25pdG9yXG4gICAgQUNUSVZFOiAnYWN0aXZlJyxcbiAgICBESVNBQkxFRDogJ2Rpc2FibGVkJyxcbiAgICBISURERU46ICdoaWRkZW4nLFxuICAgIFBSRVZJRVc6ICdwcmV2aWV3JyxcbiAgICBSRUFET05MWTogJ3JlYWRPbmx5JyxcbiAgICBSRVFVSVJFRDogJ3JlcXVpcmVkJywvL2p1c3QgcGFpbnQgcmVxdWlyZWQgaWNvblxuICAgIC8vY29tcG9uZW50IG1vbml0b3IgbGlzdCwgY2FuIGJlIHN0cmluZ1tyZWddLCBzdHJpbmcgYXJyYXkgb3Igb2JqZWN0XG4gICAgTU9OSVRPUjogJ21vbml0b3InXG4gIH07XG4gIHN0YXRpYyBTS19QUk9QU19QUkVGSVggPSAnc2snO1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNvbXBUYWc6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUmVhY3QuUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcbiAgICBdKSwvL1JlYWN0IGNvbXBvbmVudCBvciBCcmFkIENvbXBvbmVudFxuICAgIG1vZGVsOiBDb21wLklTX1BST1BfVFlQRVNfTU9ERUwsLy9CdXNpbmVzcyBNb2RlbChwYXJ0IG9mIHBhZ2UpLCBQbGFpbk9iamVjdCBvciBCcmFkLk1vZGVsXG4gICAgc2tNb2RlbDogQ29tcC5JU19QUk9QX1RZUEVTX01PREVMLC8vQnVzaW5lc3MgTW9kZWwocGFnZSksIFBsYWluT2JqZWN0IG9yIEJyYWQuTW9kZWxcbiAgICBza1N5c01vZGVsOiBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihNb2RlbCksLy9TeXN0ZW0gTW9kZWwod2hvbGUgb2YgcGFnZSksIFBsYWluT2JqZWN0IG9yIEJyYWQuTW9kZWxcbiAgICBtb2RlbElkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNvbFNwYW46IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgc2tDb2xTcGFuOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIGNvbFhzOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgc2tDb2xYczogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIGNvbFNtOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgc2tDb2xTbTogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIGNvbE1kOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgc2tDb2xNZDogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIGNvbExnOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgc2tDb2xMZzogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIGNvbFhsOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgc2tDb2xYbDogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIGZvcm1MYXlvdXQ6IFJlYWN0LlByb3BUeXBlcy5vbmVPZihbRGlyLkhvcml6b250YWwsIERpci5WZXJ0aWNhbCwgRGlyLklubGluZV0pLFxuICAgIHNrRm9ybUxheW91dDogUmVhY3QuUHJvcFR5cGVzLm9uZU9mKFtEaXIuSG9yaXpvbnRhbCwgRGlyLlZlcnRpY2FsLCBEaXIuSW5saW5lXSksLy9Db25zdC5EaXJcbiAgICBmb3JtTGFiZWxDb2w6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgc2tGb3JtTGFiZWxDb2w6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgZm9ybVdyYXBwZXJDb2w6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgc2tGb3JtV3JhcHBlckNvbDogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBncmlkR3V0dGVyOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIHNrR3JpZEd1dHRlcjogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBpbkZvcm1JdGVtOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBza0luRm9ybUl0ZW06IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIGluRm9ybVJvdzogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgc2tJbkZvcm1Sb3c6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIHNpemU6IFJlYWN0LlByb3BUeXBlcy5vbmVPZihbU0laRS5MYXJnZSwgU0laRS5EZWZhdWx0LCBTSVpFLlNtYWxsXSksXG4gICAgc2tTaXplOiBSZWFjdC5Qcm9wVHlwZXMub25lT2YoW1NJWkUuTGFyZ2UsIFNJWkUuRGVmYXVsdCwgU0laRS5TbWFsbF0pLFxuXG4gICAgYWN0aXZlOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgc2tBY3RpdmU6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5vYmplY3RcbiAgICBdKSxcbiAgICBkaXNhYmxlZDogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIHNrRGlzYWJsZWQ6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5vYmplY3RcbiAgICBdKSxcbiAgICBoaWRkZW46IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5vYmplY3RcbiAgICBdKSxcbiAgICBza0hpZGRlbjogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIHByZXZpZXc6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5vYmplY3RcbiAgICBdKSxcbiAgICBza1ByZXZpZXc6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5vYmplY3RcbiAgICBdKSxcbiAgICByZWFkT25seTogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIHNrUmVhZE9ubHk6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5vYmplY3RcbiAgICBdKSxcbiAgICByZXF1aXJlZDogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIHNrUmVxdWlyZWQ6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5vYmplY3RcbiAgICBdKSxcbiAgICBtb25pdG9yOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuYXJyYXksXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG5cbiAgICBtMmVDb252ZXJ0b3I6IFJlYWN0LlByb3BUeXBlcy5mdW5jLC8vTW9kZWwgMiBFZGl0aW5nXG4gICAgZTJtQ29udmVydG9yOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYywvL0VkaXRpbmcgMiBNb2RlbFxuICAgIG0ydkNvbnZlcnRvcjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsLy9Nb2RlbCAyIFZpZXcsIGxpa2UgRGF0ZSBDb21wLCBtb21lbnQgZm9ybWF0IHRvIHZpZXc6IFlZWVktTU0tRERUSEg6bW06c3MuU1NTWiAtPiBZWVlZLU1NLUREXG4gICAgdjJtQ29udmVydG9yOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy8vVmlldyAyIE1vZGVsLCBsaWtlIENoZWNrIENvbXAsIHRydWUgaXMgY2hlY2tlZDogdHJ1ZSAtPiAxLCBmYWxzZSAtPiAwXG4gIH07XG5cbiAgLyoqXG4gICAqIEFzc2VydCBNb2RlbFxuICAgKlxuICAgKiBAcGFyYW0gcHJvcHNcbiAgICogQHBhcmFtIHByb3BOYW1lXG4gICAqIEBwYXJhbSBjb21wb25lbnROYW1lXG4gICAqIEByZXR1cm5zIHtFcnJvcn1cbiAgICovXG4gIHN0YXRpYyBJU19QUk9QX1RZUEVTX01PREVMKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgIGlmIChwcm9wc1twcm9wTmFtZV0gJiYgIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBNb2RlbCkpIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1RoZSBbJyArIGNvbXBvbmVudE5hbWUgKyAnXVxcJ3MgWycgKyBwcm9wTmFtZSArICddIGlzIG5vdCBhIG1vZGVsIScpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGaWx0ZXIgc2sgcHJvcHNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGsga2V5L2luZGV4XG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIHNrUHJvcHNGaWx0ZXIoaykge1xuICAgIHJldHVybiBfLnN0YXJ0c1dpdGgoU0suczRzKGspLCBDb21wLlNLX1BST1BTX1BSRUZJWCk7XG4gIH1cblxuICBfdXBkYXRlVUkgPSB0aGlzLnVwZGF0ZVVJLmJpbmQodGhpcyk7XG4gIG1vbml0b3JzID0gW107XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5hZGRBbGxDaGFuZ2VkTW9uaXRvcigpO1xuICAgIHRoaXMuYWRkRXh0ZW5kQ2hhbmdlZE1vbml0b3IoKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVcGRhdGUoKSB7XG4gICAgdGhpcy5ybXZBbGxDaGFuZ2VkTW9uaXRvcigpO1xuICAgIHRoaXMucm12RXh0ZW5kQ2hhbmdlZE1vbml0b3IoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB0aGlzLmFkZEFsbENoYW5nZWRNb25pdG9yKCk7XG4gICAgdGhpcy5hZGRFeHRlbmRDaGFuZ2VkTW9uaXRvcigpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5ybXZBbGxDaGFuZ2VkTW9uaXRvcigpO1xuICAgIHRoaXMucm12RXh0ZW5kQ2hhbmdlZE1vbml0b3IoKTtcbiAgfVxuXG4gIGFkZEV4dGVuZENoYW5nZWRNb25pdG9yKCkge1xuXG4gIH1cblxuICBybXZFeHRlbmRDaGFuZ2VkTW9uaXRvcigpIHtcblxuICB9XG5cbiAgLy9tb25pdG9yIGJlZ2luXG4gIGFkZEFsbENoYW5nZWRNb25pdG9yKCkge1xuICAgIE1vZGVsLnBhcnNlU2FvKHRoaXMucHJvcHMubW9uaXRvcikuZm9yRWFjaCgoJGkpID0+IHtcbiAgICAgIHRoaXMuYWRkQ2hhbmdlZE1vbml0b3IoJGkpO1xuICAgIH0pO1xuICAgIC8vU2VsZiB2YWx1ZSBtb25pdG9yXG4gICAgaWYgKHRoaXMuaU1vZGVsSWQoKSkge1xuICAgICAgdGhpcy5hZGRDaGFuZ2VkTW9uaXRvcih0aGlzLmlNb2RlbElkKCkpO1xuICAgIH1cbiAgfVxuXG4gIGFkZENoYW5nZWRNb25pdG9yKGlkT3JSZWcpIHtcbiAgICBpZiAoIV8uaXNOaWwoaWRPclJlZykpIHtcbiAgICAgIGlmICh0aGlzLm1vbml0b3JzLmluZGV4T2YoaWRPclJlZykgPCAwKSB7XG4gICAgICAgIHRoaXMubW9uaXRvcnMucHVzaChpZE9yUmVnKTtcbiAgICAgIH1cbiAgICAgIGlmIChfLmlzUmVnRXhwKGlkT3JSZWcpKSB7XG4gICAgICAgIHRoaXMuaU1vZGVsKCkuYWRkUmVnQ2hhbmdlZExpc3RlbmVyKGlkT3JSZWcsIHRoaXMuX3VwZGF0ZVVJKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaU1vZGVsKCkuYWRkSWRDaGFuZ2VkTGlzdGVuZXIoaWRPclJlZywgdGhpcy5fdXBkYXRlVUkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJtdkFsbENoYW5nZWRNb25pdG9yKCkge1xuICAgIHRoaXMubW9uaXRvcnMuZm9yRWFjaCgoJGkpID0+IHtcbiAgICAgIHRoaXMucm12Q2hhbmdlZE1vbml0b3IoJGkpO1xuICAgIH0pO1xuICB9XG5cbiAgcm12Q2hhbmdlZE1vbml0b3IoaWRPclJlZykge1xuICAgIGlmIChfLmlzUmVnRXhwKGlkT3JSZWcpKSB7XG4gICAgICB0aGlzLmlNb2RlbCgpLnJtdlJlZ0NoYW5nZWRMaXN0ZW5lcihpZE9yUmVnLCB0aGlzLl91cGRhdGVVSSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaU1vZGVsKCkucm12SWRDaGFuZ2VkTGlzdGVuZXIoaWRPclJlZywgdGhpcy5fdXBkYXRlVUkpXG4gICAgfVxuICAgIHRoaXMubW9uaXRvcnMuc2tSbXYoaWRPclJlZyk7XG4gIH1cblxuICB1cGRhdGVVSShldnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtzdGF0ZVVpZDogXy51bmlxdWVJZCgnY29tcFN0YXRlVWlkJyl9KTtcbiAgfVxuXG4gIC8vbW9uaXRvciBlbmRcblxuICBnZXRFcnJvcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaU1vZGVsKCkuZ2V0RXJyb3JzKHRoaXMuaU1vZGVsSWQoKSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtjb21wVGFnOiBDb21wVGFnfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBUYWcgey4uLnRoaXMuY29tcFZhbGlkUHJvcHMoQ29tcFRhZyl9PlxuICAgICAgICB7dGhpcy5za1Byb3BzVHJhbnMoKX1cbiAgICAgIDwvQ29tcFRhZz5cbiAgICApO1xuICB9XG5cbiAgLy9Qcm9wZXJ0aWVzXG4gIC8qKlxuICAgKiBHZXQgbW9kZWwgaWYgZXhpc3QsIGVsc2Ugc2tNb2RlbFxuICAgKlxuICAgKiBAcmV0dXJucyB7TW9kZWx9XG4gICAqL1xuICBpTW9kZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2tQcm9wKENvbXAuU0tfUFJPUFMuTU9ERUwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBtb2RlbElkOiB4Lnh4Lnh4eC54eHh4XG4gICAqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBpTW9kZWxJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5tb2RlbElkO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBza01vZGVsXG4gICAqXG4gICAqIEByZXR1cm5zIHtNb2RlbH1cbiAgICovXG4gIHNrTW9kZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuc2tNb2RlbDtcbiAgfVxuXG4gIHN5c01vZGVsKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnNrU3lzTW9kZWw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHByb3AgdmFsdWU6IHByb3AgLT4gc2tQcm9wIC0+IERFRkFVTFRfUFJPUFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ31wcm9wXG4gICAqIEBwYXJhbSB7Kn0gZGVmYXVsdFZhbHVlXG4gICAqIEByZXR1cm5zIHsqfSBNYXliZSB1bmRlZmluZWRcbiAgICovXG4gIHNrUHJvcChwcm9wLCBkZWZhdWx0VmFsdWUgPSB1bmRlZmluZWQpIHtcbiAgICBsZXQgcnRuID0gdGhpcy5wcm9wc1twcm9wXTtcbiAgICBpZiAocnRuID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJ0biA9IHRoaXMucHJvcHNbQ29tcC5TS19QUk9QU19QUkVGSVggKyBTSy51cHBlcldvcmRGaXJzdENoYXIocHJvcCldXG4gICAgfVxuICAgIGlmIChydG4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcnRuID0gdGhpcy5wcm9wc1tDb21wLlNLX1BST1BTX1BSRUZJWCArICdTeXMnICsgU0sudXBwZXJXb3JkRmlyc3RDaGFyKHByb3ApXVxuICAgIH1cbiAgICBpZiAocnRuID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJ0biA9IENmZ1snREVGQVVMVCcgKyBTSy51cHBlcldvcmRGaXJzdENoYXIocHJvcCkucmVwbGFjZSgvW0EtWl0vZywgKCQxKSA9PiB7XG4gICAgICAgIHJldHVybiBTSy5DSEFSX1VOREVSTElORSArICQxO1xuICAgICAgfSkudG9VcHBlckNhc2UoKV1cbiAgICB9XG4gICAgcmV0dXJuIHJ0biA9PT0gdW5kZWZpbmVkID8gZGVmYXVsdFZhbHVlIDogcnRuO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldC9nZXQgdmFsdWUgZm9yIG1vZGVsSWRcbiAgICpcbiAgICogQHBhcmFtIHsqfSB2YWxcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBza1ZhbCh2YWwpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuaU1vZGVsKCkuc2tWYWwodGhpcy5pTW9kZWxJZCgpLCB2YWwpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmlNb2RlbCgpLnNrVmFsKHRoaXMuaU1vZGVsSWQoKSk7XG4gICAgfVxuICB9XG5cbiAgLy9GdW5jdGlvbnNcbiAgLyoqXG4gICAqIFJldHVybnMgdmFsaWQgcHJvcHMgZm9yIHRoaXMgY29tcFxuICAgKlxuICAgKiBAcGFyYW0ge0NvbXB8c3RyaW5nfSBjb21wXG4gICAqIEBwYXJhbSB7UGxhaW5PYmplY3R9IHByb3BcbiAgICogQHJldHVybnMge1BsYWluT2JqZWN0fVxuICAgKi9cbiAgY29tcFZhbGlkUHJvcHMoY29tcCwgcHJvcCkge1xuICAgIGNvbXAgPSBjb21wIHx8IHRoaXMucHJvcHMuY29tcFRhZztcbiAgICBwcm9wID0gcHJvcCB8fCB0aGlzLnByb3BzO1xuXG4gICAgbGV0IHRtcFByb3BzID0gUkVBQ1QuUC5za1ZhbHMoKTtcbiAgICB0bXBQcm9wcyA9IGNvbXAucHJvcFR5cGVzID8gdG1wUHJvcHMuY29uY2F0KE9iamVjdC5rZXlzKGNvbXAucHJvcFR5cGVzKSkgOiB0bXBQcm9wcztcbiAgICB0bXBQcm9wcyA9IChjb21wLnR5cGUgJiYgY29tcC50eXBlLnByb3BUeXBlcykgPyB0bXBQcm9wcy5jb25jYXQoT2JqZWN0LmtleXMoY29tcC50eXBlLnByb3BUeXBlcykpIDogdG1wUHJvcHM7XG5cbiAgICByZXR1cm4gXy5vbWl0KF8ucGljayhwcm9wLCB0bXBQcm9wcyksIFtDb21wLlNLX1BST1BTLkNPTVBfVEFHLCBDb21wLlNLX1BST1BTLk1PREVMX0lEXSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBib29sZWFuIHZhbHVlIG9mIGJvb2xlYW4sIGZ1bmN0aW9uIG9yIG9iamVjdCB3aXRoIHNrV2hlbiBwcm9wZXJ0aWVzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZGVmYXVsdFZhbHVlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgc2tCZm8ocHJvcCwgZGVmYXVsdFZhbHVlID0gZmFsc2UpIHtcbiAgICByZXR1cm4gdGhpcy5leGVjQmZvKHRoaXMuc2tQcm9wKHByb3AsIGRlZmF1bHRWYWx1ZSkpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBib29sZWFuIHZhbHVlIG9mIGJvb2xlYW4sIGZ1bmN0aW9uIG9yIG9iamVjdCB3aXRoIHNrV2hlbiBwcm9wZXJ0aWVzXG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbnxGdW5jdGlvbnxPYmplY3R9IGJmb1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGRlZmF1bHRWYWx1ZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGV4ZWNCZm8oYmZvLCBkZWZhdWx0VmFsdWUgPSBmYWxzZSkge1xuICAgIGlmIChfLmlzQm9vbGVhbihiZm8pKSB7XG4gICAgICByZXR1cm4gYmZvO1xuICAgIH0gZWxzZSBpZiAoXy5pc0Z1bmN0aW9uKGJmbykpIHtcbiAgICAgIHJldHVybiBiZm8uY2FsbCh0aGlzKTtcbiAgICB9IGVsc2UgaWYgKF8uaXNPYmplY3QoYmZvKSAmJiBfLmlzRnVuY3Rpb24oYmZvLmZ1bmMpKSB7XG4gICAgICByZXR1cm4gYmZvLnNrV2hlbi5jYWxsKHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2ZlcnJpbmcgcHJvcHMgdG8gY2hpbGRyZW5cbiAgICpcbiAgICogY2hpbGQgKyBza0NoaWxkUHJvcHNUcmFucyhjaGlsZCkgKyB0aGlzLnByb3BzLnNrRmlsdGVyKGZhbHNlLCBDb21wLnNrUHJvcHNGaWx0ZXIpICsgY2hpbGQucHJvcHMuc2tGaWx0ZXIoZmFsc2UsIENvbXAuc2tQcm9wc0ZpbHRlcilcbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdC5DaGlsZHJlbn0gY2hpbGRyZW5cbiAgICogQHJldHVybnMge1JlYWN0LkNoaWxkcmVufVxuICAgKi9cbiAgc2tQcm9wc1RyYW5zKGNoaWxkcmVuID0gdW5kZWZpbmVkKSB7XG4gICAgbGV0IHNrUHJvcHMgPSB0aGlzLnByb3BzLnNrRmlsdGVyKGZhbHNlLCBDb21wLnNrUHJvcHNGaWx0ZXIpO1xuICAgIHJldHVybiBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4gPyBjaGlsZHJlbiA6IHRoaXMucHJvcHMuY2hpbGRyZW4sIGNoaWxkID0+IHtcbiAgICAgIGlmIChSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgbGV0IHRtcFByb3BzID0gKFJFQUNULlRBR1tjaGlsZC50eXBlXSAmJiBIVE1MLlBST1BbY2hpbGQudHlwZV0pID8ge30gOiBza1Byb3BzO1xuICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBfLmFzc2lnbih0aGlzLmNoaWxkUHJvcHNUcmFucyhjaGlsZCksIHRtcFByb3BzLCBjaGlsZC5wcm9wcy5za0ZpbHRlcihmYWxzZSwgQ29tcC5za1Byb3BzRmlsdGVyKSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogR2VuIHByb3BzIHRyYW5zIHRvIGNoaWxkcmVuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3QuQ29tcG9uZW50fSBjaGlsZFxuICAgKiBAcmV0dXJucyB7UGxhaW5PYmplY3R9XG4gICAqL1xuICBjaGlsZFByb3BzVHJhbnMoY2hpbGQpIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICBoYXNTcGVjaWFsQ2hpbGQoc3BlY2lhbENoaWxkTmFtZSkge1xuICAgIHJldHVybiBSZWFjdFV0aWwuc29tZSh0aGlzLnByb3BzLmNoaWxkcmVuLCAoY2hpbGQsIGlkeCkgPT4ge1xuICAgICAgcmV0dXJuIGNoaWxkLnR5cGUgJiYgY2hpbGQudHlwZS5uYW1lID09IHNwZWNpYWxDaGlsZE5hbWVcbiAgICB9LCB0aGlzKTtcbiAgfVxufVxuIl19