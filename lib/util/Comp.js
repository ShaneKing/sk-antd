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

    _this.monitors = [];

    _this.updateUI = function (evt) {
      _this.setState({ stateUid: _lodash2.default.uniqueId(Comp.SK_COMP_STATE_ID_PREFIX) });
    };

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
          this.iModel().addRegChangedListener(idOrReg, this.updateUI);
        } else {
          this.iModel().addIdChangedListener(idOrReg, this.updateUI);
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
        this.iModel().rmvRegChangedListener(idOrReg, this.updateUI);
      } else {
        this.iModel().rmvIdChangedListener(idOrReg, this.updateUI);
      }
      this.monitors.skRmv(idOrReg);
    }
  }, {
    key: 'getErrors',


    //monitor end

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
        rtn = this.props[Comp.SK_PROPS_PREFIX + _skJs2.default.upperWordsFirstChar(prop)];
      }
      if (rtn === undefined) {
        rtn = this.props[Comp.SK_PROPS_PREFIX + _skJs2.default.upperWordsFirstChar(Comp.SK_PROPS_SYS) + _skJs2.default.upperWordsFirstChar(prop)];
      }
      if (rtn === undefined) {
        rtn = _Cfg2.default[_skJs2.default.STR_DEFAULT.toUpperCase() + _skJs2.default.upperWordsFirstChar(prop).replace(/[A-Z]/g, function ($1) {
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

Comp.SK_COMP_STATE_ID_PREFIX = 'skCompStateUid';
Comp.SK_PROPS_PREFIX = 'sk';
Comp.SK_PROPS_SYS = 'sys';
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
Comp.propTypes = {
  compTag: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.func, _react2.default.PropTypes.string]), //React component or Brad Component
  model: Comp.IS_PROP_TYPES_MODEL, //Business Model(part of page), PlainObject or Brad.Model
  skModel: Comp.IS_PROP_TYPES_MODEL, //Business Model(page), PlainObject or Brad.Model
  skSysModel: Comp.IS_PROP_TYPES_MODEL, //System Model(whole of page), PlainObject or Brad.Model
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwvQ29tcC5qcyJdLCJuYW1lcyI6WyJDb21wIiwicHJvcHMiLCJwcm9wTmFtZSIsImNvbXBvbmVudE5hbWUiLCJFcnJvciIsImsiLCJzdGFydHNXaXRoIiwiczRzIiwiU0tfUFJPUFNfUFJFRklYIiwiYXJncyIsIm1vbml0b3JzIiwidXBkYXRlVUkiLCJldnQiLCJzZXRTdGF0ZSIsInN0YXRlVWlkIiwidW5pcXVlSWQiLCJTS19DT01QX1NUQVRFX0lEX1BSRUZJWCIsImFkZEFsbENoYW5nZWRNb25pdG9yIiwiYWRkRXh0ZW5kQ2hhbmdlZE1vbml0b3IiLCJybXZBbGxDaGFuZ2VkTW9uaXRvciIsInJtdkV4dGVuZENoYW5nZWRNb25pdG9yIiwicGFyc2VTYW8iLCJtb25pdG9yIiwiZm9yRWFjaCIsIiRpIiwiYWRkQ2hhbmdlZE1vbml0b3IiLCJpTW9kZWxJZCIsImlkT3JSZWciLCJpc05pbCIsImluZGV4T2YiLCJwdXNoIiwiaXNSZWdFeHAiLCJpTW9kZWwiLCJhZGRSZWdDaGFuZ2VkTGlzdGVuZXIiLCJhZGRJZENoYW5nZWRMaXN0ZW5lciIsInJtdkNoYW5nZWRNb25pdG9yIiwicm12UmVnQ2hhbmdlZExpc3RlbmVyIiwicm12SWRDaGFuZ2VkTGlzdGVuZXIiLCJza1JtdiIsImdldEVycm9ycyIsIkNvbXBUYWciLCJjb21wVGFnIiwiY29tcFZhbGlkUHJvcHMiLCJza1Byb3BzVHJhbnMiLCJza1Byb3AiLCJTS19QUk9QUyIsIk1PREVMIiwibW9kZWxJZCIsInNrTW9kZWwiLCJza1N5c01vZGVsIiwicHJvcCIsImRlZmF1bHRWYWx1ZSIsInVuZGVmaW5lZCIsInJ0biIsInVwcGVyV29yZHNGaXJzdENoYXIiLCJTS19QUk9QU19TWVMiLCJTVFJfREVGQVVMVCIsInRvVXBwZXJDYXNlIiwicmVwbGFjZSIsIiQxIiwiQ0hBUl9VTkRFUkxJTkUiLCJ2YWwiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJza1ZhbCIsImNvbXAiLCJ0bXBQcm9wcyIsIlAiLCJza1ZhbHMiLCJwcm9wVHlwZXMiLCJjb25jYXQiLCJPYmplY3QiLCJrZXlzIiwidHlwZSIsIm9taXQiLCJwaWNrIiwiQ09NUF9UQUciLCJNT0RFTF9JRCIsImV4ZWNCZm8iLCJiZm8iLCJpc0Jvb2xlYW4iLCJpc0Z1bmN0aW9uIiwiY2FsbCIsImlzT2JqZWN0IiwiZnVuYyIsInNrV2hlbiIsImNoaWxkcmVuIiwic2tQcm9wcyIsInNrRmlsdGVyIiwic2tQcm9wc0ZpbHRlciIsIkNoaWxkcmVuIiwibWFwIiwiaXNWYWxpZEVsZW1lbnQiLCJjaGlsZCIsIlRBRyIsIlBST1AiLCJjbG9uZUVsZW1lbnQiLCJhc3NpZ24iLCJjaGlsZFByb3BzVHJhbnMiLCJzcGVjaWFsQ2hpbGROYW1lIiwic29tZSIsImlkeCIsIm5hbWUiLCJDb21wb25lbnQiLCJDT0xfU1BBTiIsIkNPTF9YUyIsIkNPTF9TTSIsIkNPTF9NRCIsIkNPTF9MRyIsIkNPTF9YTCIsIkZPUk1fTEFCRUxfQ09MIiwiRk9STV9MQVlPVVQiLCJGT1JNX1dSQVBQRVJfQ09MIiwiR1JJRF9HVVRURVIiLCJJTl9GUk9NX0lURU0iLCJJTl9GUk9NX1JPVyIsIlNJWkUiLCJBQ1RJVkUiLCJESVNBQkxFRCIsIkhJRERFTiIsIlBSRVZJRVciLCJSRUFET05MWSIsIlJFUVVJUkVEIiwiTU9OSVRPUiIsIlByb3BUeXBlcyIsIm9uZU9mVHlwZSIsImVsZW1lbnQiLCJzdHJpbmciLCJtb2RlbCIsIklTX1BST1BfVFlQRVNfTU9ERUwiLCJjb2xTcGFuIiwibnVtYmVyIiwic2tDb2xTcGFuIiwiY29sWHMiLCJvYmplY3QiLCJza0NvbFhzIiwiY29sU20iLCJza0NvbFNtIiwiY29sTWQiLCJza0NvbE1kIiwiY29sTGciLCJza0NvbExnIiwiY29sWGwiLCJza0NvbFhsIiwiZm9ybUxheW91dCIsIm9uZU9mIiwiSG9yaXpvbnRhbCIsIlZlcnRpY2FsIiwiSW5saW5lIiwic2tGb3JtTGF5b3V0IiwiZm9ybUxhYmVsQ29sIiwic2tGb3JtTGFiZWxDb2wiLCJmb3JtV3JhcHBlckNvbCIsInNrRm9ybVdyYXBwZXJDb2wiLCJncmlkR3V0dGVyIiwic2tHcmlkR3V0dGVyIiwiaW5Gb3JtSXRlbSIsImJvb2wiLCJza0luRm9ybUl0ZW0iLCJpbkZvcm1Sb3ciLCJza0luRm9ybVJvdyIsInNpemUiLCJMYXJnZSIsIkRlZmF1bHQiLCJTbWFsbCIsInNrU2l6ZSIsImFjdGl2ZSIsInNrQWN0aXZlIiwiZGlzYWJsZWQiLCJza0Rpc2FibGVkIiwiaGlkZGVuIiwic2tIaWRkZW4iLCJwcmV2aWV3Iiwic2tQcmV2aWV3IiwicmVhZE9ubHkiLCJza1JlYWRPbmx5IiwicmVxdWlyZWQiLCJza1JlcXVpcmVkIiwiYXJyYXkiLCJtMmVDb252ZXJ0b3IiLCJlMm1Db252ZXJ0b3IiLCJtMnZDb252ZXJ0b3IiLCJ2Mm1Db252ZXJ0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7OztJQU1xQkEsSTs7Ozs7OztBQTZLbkI7Ozs7Ozs7O3dDQVEyQkMsSyxFQUFPQyxRLEVBQVVDLGEsRUFBZTtBQUN6RCxVQUFJRixNQUFNQyxRQUFOLEtBQW1CLEVBQUVELE1BQU1DLFFBQU4sNEJBQUYsQ0FBdkIsRUFBNEQ7QUFDMUQsZUFBTyxJQUFJRSxLQUFKLENBQVUsVUFBVUQsYUFBVixHQUEwQixRQUExQixHQUFxQ0QsUUFBckMsR0FBZ0QsbUJBQTFELENBQVA7QUFDRDtBQUNGOztBQUVEOzs7Ozs7Ozs7a0NBTXFCRyxDLEVBQUc7QUFDdEIsYUFBTyxpQkFBRUMsVUFBRixDQUFhLGVBQUdDLEdBQUgsQ0FBT0YsQ0FBUCxDQUFiLEVBQXdCTCxLQUFLUSxlQUE3QixDQUFQO0FBQ0Q7OztBQUlELGtCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSx1SUFDVkEsSUFEVTs7QUFBQSxVQUZyQkMsUUFFcUIsR0FGVixFQUVVOztB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akIsQztrQkFsQ0FwRixJIiwiZmlsZSI6InV0aWwvQ29tcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFNLIGZyb20gJ3NrLWpzJztcbmltcG9ydCBDZmcgZnJvbSAnLi9DZmcnO1xuaW1wb3J0IHtEaXIsIFNJWkV9IGZyb20gJy4vQ29uc3QnO1xuaW1wb3J0IEhUTUwgZnJvbSAnLi9IVE1MJztcbmltcG9ydCBNb2RlbCBmcm9tICcuL01vZGVsJztcbmltcG9ydCBSRUFDVCBmcm9tICcuL1JFQUNUJztcbmltcG9ydCBSZWFjdFV0aWwgZnJvbSAnLi9SZWFjdFV0aWwnO1xuXG4vKipcbiAqIHByb3BzOmNvbXBUYWcsbW9kZWwoc2tNb2RlbCksbW9kZWxJZCxsYWJlbERpcihza0xhYmVsRGlyKSxsYWJlbFdpZHRoKHNrTGFiZWxXaWR0aClcbiAqIGJmbyAgLGFjdGl2ZShza0FjdGl2ZSksZGlzYWJsZWQoc2tEaXNhYmxlZClcbiAqIGZ1bmMgLG0yZUNvbnZlcnRvcixlMm1Db252ZXJ0b3IsbTJ2Q29udmVydG9yLHYybUNvbnZlcnRvclxuICogaHRtbCAsY2xhc3NOYW1lLHJvbGUsc3R5bGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBTS19DT01QX1NUQVRFX0lEX1BSRUZJWCA9ICdza0NvbXBTdGF0ZVVpZCc7XG4gIHN0YXRpYyBTS19QUk9QU19QUkVGSVggPSAnc2snO1xuICBzdGF0aWMgU0tfUFJPUFNfU1lTID0gJ3N5cyc7XG4gIHN0YXRpYyBTS19QUk9QUyA9IHtcbiAgICAvL3NrXG4gICAgQ09NUF9UQUc6ICdjb21wVGFnJyxcbiAgICBNT0RFTDogJ21vZGVsJyxcbiAgICBNT0RFTF9JRDogJ21vZGVsSWQnLFxuICAgIC8vQW50RFxuICAgIENPTF9TUEFOOiAnY29sU3BhbicsXG4gICAgQ09MX1hTOiAnY29sWHMnLFxuICAgIENPTF9TTTogJ2NvbFNtJyxcbiAgICBDT0xfTUQ6ICdjb2xNZCcsXG4gICAgQ09MX0xHOiAnY29sTGcnLFxuICAgIENPTF9YTDogJ2NvbFhsJyxcbiAgICBGT1JNX0xBQkVMX0NPTDogJ2Zvcm1MYWJlbENvbCcsXG4gICAgRk9STV9MQVlPVVQ6ICdmb3JtTGF5b3V0JyxcbiAgICBGT1JNX1dSQVBQRVJfQ09MOiAnZm9ybVdyYXBwZXJDb2wnLFxuICAgIEdSSURfR1VUVEVSOiAnZ3JpZEd1dHRlcicsXG4gICAgSU5fRlJPTV9JVEVNOiAnaW5Gb3JtSXRlbScsXG4gICAgSU5fRlJPTV9ST1c6ICdpbkZvcm1Sb3cnLFxuICAgIFNJWkU6ICdzaXplJyxcbiAgICAvL3VpIHN0YXRlLCBhcmUgYmZvIChib29sZWFuLCBmdW5jdGlvbiwgb2JqZWN0e2RlcHM6LGZ1bmM6fSlcbiAgICAvL2RlcHMgdG8gbW9uaXRvclxuICAgIEFDVElWRTogJ2FjdGl2ZScsXG4gICAgRElTQUJMRUQ6ICdkaXNhYmxlZCcsXG4gICAgSElEREVOOiAnaGlkZGVuJyxcbiAgICBQUkVWSUVXOiAncHJldmlldycsXG4gICAgUkVBRE9OTFk6ICdyZWFkT25seScsXG4gICAgUkVRVUlSRUQ6ICdyZXF1aXJlZCcsLy9qdXN0IHBhaW50IHJlcXVpcmVkIGljb25cbiAgICAvL2NvbXBvbmVudCBtb25pdG9yIGxpc3QsIGNhbiBiZSBzdHJpbmdbcmVnXSwgc3RyaW5nIGFycmF5IG9yIG9iamVjdFxuICAgIE1PTklUT1I6ICdtb25pdG9yJ1xuICB9O1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNvbXBUYWc6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUmVhY3QuUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcbiAgICBdKSwvL1JlYWN0IGNvbXBvbmVudCBvciBCcmFkIENvbXBvbmVudFxuICAgIG1vZGVsOiBDb21wLklTX1BST1BfVFlQRVNfTU9ERUwsLy9CdXNpbmVzcyBNb2RlbChwYXJ0IG9mIHBhZ2UpLCBQbGFpbk9iamVjdCBvciBCcmFkLk1vZGVsXG4gICAgc2tNb2RlbDogQ29tcC5JU19QUk9QX1RZUEVTX01PREVMLC8vQnVzaW5lc3MgTW9kZWwocGFnZSksIFBsYWluT2JqZWN0IG9yIEJyYWQuTW9kZWxcbiAgICBza1N5c01vZGVsOiBDb21wLklTX1BST1BfVFlQRVNfTU9ERUwsLy9TeXN0ZW0gTW9kZWwod2hvbGUgb2YgcGFnZSksIFBsYWluT2JqZWN0IG9yIEJyYWQuTW9kZWxcbiAgICBtb2RlbElkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNvbFNwYW46IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgc2tDb2xTcGFuOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIGNvbFhzOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgc2tDb2xYczogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIGNvbFNtOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgc2tDb2xTbTogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIGNvbE1kOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgc2tDb2xNZDogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIGNvbExnOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgc2tDb2xMZzogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIGNvbFhsOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgc2tDb2xYbDogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIGZvcm1MYXlvdXQ6IFJlYWN0LlByb3BUeXBlcy5vbmVPZihbRGlyLkhvcml6b250YWwsIERpci5WZXJ0aWNhbCwgRGlyLklubGluZV0pLFxuICAgIHNrRm9ybUxheW91dDogUmVhY3QuUHJvcFR5cGVzLm9uZU9mKFtEaXIuSG9yaXpvbnRhbCwgRGlyLlZlcnRpY2FsLCBEaXIuSW5saW5lXSksLy9Db25zdC5EaXJcbiAgICBmb3JtTGFiZWxDb2w6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgc2tGb3JtTGFiZWxDb2w6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgZm9ybVdyYXBwZXJDb2w6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgc2tGb3JtV3JhcHBlckNvbDogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBncmlkR3V0dGVyOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIHNrR3JpZEd1dHRlcjogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBpbkZvcm1JdGVtOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBza0luRm9ybUl0ZW06IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIGluRm9ybVJvdzogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgc2tJbkZvcm1Sb3c6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIHNpemU6IFJlYWN0LlByb3BUeXBlcy5vbmVPZihbU0laRS5MYXJnZSwgU0laRS5EZWZhdWx0LCBTSVpFLlNtYWxsXSksXG4gICAgc2tTaXplOiBSZWFjdC5Qcm9wVHlwZXMub25lT2YoW1NJWkUuTGFyZ2UsIFNJWkUuRGVmYXVsdCwgU0laRS5TbWFsbF0pLFxuXG4gICAgYWN0aXZlOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgc2tBY3RpdmU6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5vYmplY3RcbiAgICBdKSxcbiAgICBkaXNhYmxlZDogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIHNrRGlzYWJsZWQ6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5vYmplY3RcbiAgICBdKSxcbiAgICBoaWRkZW46IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5vYmplY3RcbiAgICBdKSxcbiAgICBza0hpZGRlbjogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIHByZXZpZXc6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5vYmplY3RcbiAgICBdKSxcbiAgICBza1ByZXZpZXc6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5vYmplY3RcbiAgICBdKSxcbiAgICByZWFkT25seTogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIHNrUmVhZE9ubHk6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5vYmplY3RcbiAgICBdKSxcbiAgICByZXF1aXJlZDogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIHNrUmVxdWlyZWQ6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5vYmplY3RcbiAgICBdKSxcbiAgICBtb25pdG9yOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuYXJyYXksXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG5cbiAgICBtMmVDb252ZXJ0b3I6IFJlYWN0LlByb3BUeXBlcy5mdW5jLC8vTW9kZWwgMiBFZGl0aW5nXG4gICAgZTJtQ29udmVydG9yOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYywvL0VkaXRpbmcgMiBNb2RlbFxuICAgIG0ydkNvbnZlcnRvcjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsLy9Nb2RlbCAyIFZpZXcsIGxpa2UgRGF0ZSBDb21wLCBtb21lbnQgZm9ybWF0IHRvIHZpZXc6IFlZWVktTU0tRERUSEg6bW06c3MuU1NTWiAtPiBZWVlZLU1NLUREXG4gICAgdjJtQ29udmVydG9yOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy8vVmlldyAyIE1vZGVsLCBsaWtlIENoZWNrIENvbXAsIHRydWUgaXMgY2hlY2tlZDogdHJ1ZSAtPiAxLCBmYWxzZSAtPiAwXG4gIH07XG5cbiAgLyoqXG4gICAqIEFzc2VydCBNb2RlbFxuICAgKlxuICAgKiBAcGFyYW0gcHJvcHNcbiAgICogQHBhcmFtIHByb3BOYW1lXG4gICAqIEBwYXJhbSBjb21wb25lbnROYW1lXG4gICAqIEByZXR1cm5zIHtFcnJvcn1cbiAgICovXG4gIHN0YXRpYyBJU19QUk9QX1RZUEVTX01PREVMKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgIGlmIChwcm9wc1twcm9wTmFtZV0gJiYgIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBNb2RlbCkpIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1RoZSBbJyArIGNvbXBvbmVudE5hbWUgKyAnXVxcJ3MgWycgKyBwcm9wTmFtZSArICddIGlzIG5vdCBhIG1vZGVsIScpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGaWx0ZXIgc2sgcHJvcHNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGsga2V5L2luZGV4XG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIHNrUHJvcHNGaWx0ZXIoaykge1xuICAgIHJldHVybiBfLnN0YXJ0c1dpdGgoU0suczRzKGspLCBDb21wLlNLX1BST1BTX1BSRUZJWCk7XG4gIH1cblxuICBtb25pdG9ycyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuYWRkQWxsQ2hhbmdlZE1vbml0b3IoKTtcbiAgICB0aGlzLmFkZEV4dGVuZENoYW5nZWRNb25pdG9yKCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVXBkYXRlKCkge1xuICAgIHRoaXMucm12QWxsQ2hhbmdlZE1vbml0b3IoKTtcbiAgICB0aGlzLnJtdkV4dGVuZENoYW5nZWRNb25pdG9yKCk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy5hZGRBbGxDaGFuZ2VkTW9uaXRvcigpO1xuICAgIHRoaXMuYWRkRXh0ZW5kQ2hhbmdlZE1vbml0b3IoKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucm12QWxsQ2hhbmdlZE1vbml0b3IoKTtcbiAgICB0aGlzLnJtdkV4dGVuZENoYW5nZWRNb25pdG9yKCk7XG4gIH1cblxuICBhZGRFeHRlbmRDaGFuZ2VkTW9uaXRvcigpIHtcblxuICB9XG5cbiAgcm12RXh0ZW5kQ2hhbmdlZE1vbml0b3IoKSB7XG5cbiAgfVxuXG4gIC8vbW9uaXRvciBiZWdpblxuICBhZGRBbGxDaGFuZ2VkTW9uaXRvcigpIHtcbiAgICBNb2RlbC5wYXJzZVNhbyh0aGlzLnByb3BzLm1vbml0b3IpLmZvckVhY2goKCRpKSA9PiB7XG4gICAgICB0aGlzLmFkZENoYW5nZWRNb25pdG9yKCRpKTtcbiAgICB9KTtcbiAgICAvL1NlbGYgdmFsdWUgbW9uaXRvclxuICAgIGlmICh0aGlzLmlNb2RlbElkKCkpIHtcbiAgICAgIHRoaXMuYWRkQ2hhbmdlZE1vbml0b3IodGhpcy5pTW9kZWxJZCgpKTtcbiAgICB9XG4gIH1cblxuICBhZGRDaGFuZ2VkTW9uaXRvcihpZE9yUmVnKSB7XG4gICAgaWYgKCFfLmlzTmlsKGlkT3JSZWcpKSB7XG4gICAgICBpZiAodGhpcy5tb25pdG9ycy5pbmRleE9mKGlkT3JSZWcpIDwgMCkge1xuICAgICAgICB0aGlzLm1vbml0b3JzLnB1c2goaWRPclJlZyk7XG4gICAgICB9XG4gICAgICBpZiAoXy5pc1JlZ0V4cChpZE9yUmVnKSkge1xuICAgICAgICB0aGlzLmlNb2RlbCgpLmFkZFJlZ0NoYW5nZWRMaXN0ZW5lcihpZE9yUmVnLCB0aGlzLnVwZGF0ZVVJKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaU1vZGVsKCkuYWRkSWRDaGFuZ2VkTGlzdGVuZXIoaWRPclJlZywgdGhpcy51cGRhdGVVSSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcm12QWxsQ2hhbmdlZE1vbml0b3IoKSB7XG4gICAgdGhpcy5tb25pdG9ycy5mb3JFYWNoKCgkaSkgPT4ge1xuICAgICAgdGhpcy5ybXZDaGFuZ2VkTW9uaXRvcigkaSk7XG4gICAgfSk7XG4gIH1cblxuICBybXZDaGFuZ2VkTW9uaXRvcihpZE9yUmVnKSB7XG4gICAgaWYgKF8uaXNSZWdFeHAoaWRPclJlZykpIHtcbiAgICAgIHRoaXMuaU1vZGVsKCkucm12UmVnQ2hhbmdlZExpc3RlbmVyKGlkT3JSZWcsIHRoaXMudXBkYXRlVUkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlNb2RlbCgpLnJtdklkQ2hhbmdlZExpc3RlbmVyKGlkT3JSZWcsIHRoaXMudXBkYXRlVUkpXG4gICAgfVxuICAgIHRoaXMubW9uaXRvcnMuc2tSbXYoaWRPclJlZyk7XG4gIH1cblxuICB1cGRhdGVVSSA9IChldnQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtzdGF0ZVVpZDogXy51bmlxdWVJZChDb21wLlNLX0NPTVBfU1RBVEVfSURfUFJFRklYKX0pO1xuICB9O1xuXG4gIC8vbW9uaXRvciBlbmRcblxuICBnZXRFcnJvcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaU1vZGVsKCkuZ2V0RXJyb3JzKHRoaXMuaU1vZGVsSWQoKSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtjb21wVGFnOiBDb21wVGFnfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBUYWcgey4uLnRoaXMuY29tcFZhbGlkUHJvcHMoQ29tcFRhZyl9PlxuICAgICAgICB7dGhpcy5za1Byb3BzVHJhbnMoKX1cbiAgICAgIDwvQ29tcFRhZz5cbiAgICApO1xuICB9XG5cbiAgLy9Qcm9wZXJ0aWVzXG4gIC8qKlxuICAgKiBHZXQgbW9kZWwgaWYgZXhpc3QsIGVsc2Ugc2tNb2RlbFxuICAgKlxuICAgKiBAcmV0dXJucyB7TW9kZWx9XG4gICAqL1xuICBpTW9kZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2tQcm9wKENvbXAuU0tfUFJPUFMuTU9ERUwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBtb2RlbElkOiB4Lnh4Lnh4eC54eHh4XG4gICAqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBpTW9kZWxJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5tb2RlbElkO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBza01vZGVsXG4gICAqXG4gICAqIEByZXR1cm5zIHtNb2RlbH1cbiAgICovXG4gIHNrTW9kZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuc2tNb2RlbDtcbiAgfVxuXG4gIHN5c01vZGVsKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnNrU3lzTW9kZWw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHByb3AgdmFsdWU6IHByb3AgLT4gc2tQcm9wIC0+IERFRkFVTFRfUFJPUFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ31wcm9wXG4gICAqIEBwYXJhbSB7Kn0gZGVmYXVsdFZhbHVlXG4gICAqIEByZXR1cm5zIHsqfSBNYXliZSB1bmRlZmluZWRcbiAgICovXG4gIHNrUHJvcChwcm9wLCBkZWZhdWx0VmFsdWUgPSB1bmRlZmluZWQpIHtcbiAgICBsZXQgcnRuID0gdGhpcy5wcm9wc1twcm9wXTtcbiAgICBpZiAocnRuID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJ0biA9IHRoaXMucHJvcHNbQ29tcC5TS19QUk9QU19QUkVGSVggKyBTSy51cHBlcldvcmRzRmlyc3RDaGFyKHByb3ApXVxuICAgIH1cbiAgICBpZiAocnRuID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJ0biA9IHRoaXMucHJvcHNbQ29tcC5TS19QUk9QU19QUkVGSVggKyBTSy51cHBlcldvcmRzRmlyc3RDaGFyKENvbXAuU0tfUFJPUFNfU1lTKSArIFNLLnVwcGVyV29yZHNGaXJzdENoYXIocHJvcCldXG4gICAgfVxuICAgIGlmIChydG4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcnRuID0gQ2ZnW1NLLlNUUl9ERUZBVUxULnRvVXBwZXJDYXNlKCkgKyBTSy51cHBlcldvcmRzRmlyc3RDaGFyKHByb3ApLnJlcGxhY2UoL1tBLVpdL2csICgkMSkgPT4ge1xuICAgICAgICByZXR1cm4gU0suQ0hBUl9VTkRFUkxJTkUgKyAkMTtcbiAgICAgIH0pLnRvVXBwZXJDYXNlKCldXG4gICAgfVxuICAgIHJldHVybiBydG4gPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRWYWx1ZSA6IHJ0bjtcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXQvZ2V0IHZhbHVlIGZvciBtb2RlbElkXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gdmFsXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgc2tWYWwodmFsKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmlNb2RlbCgpLnNrVmFsKHRoaXMuaU1vZGVsSWQoKSwgdmFsKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5pTW9kZWwoKS5za1ZhbCh0aGlzLmlNb2RlbElkKCkpO1xuICAgIH1cbiAgfVxuXG4gIC8vRnVuY3Rpb25zXG4gIC8qKlxuICAgKiBSZXR1cm5zIHZhbGlkIHByb3BzIGZvciB0aGlzIGNvbXBcbiAgICpcbiAgICogQHBhcmFtIHtDb21wfHN0cmluZ30gY29tcFxuICAgKiBAcGFyYW0ge1BsYWluT2JqZWN0fSBwcm9wXG4gICAqIEByZXR1cm5zIHtQbGFpbk9iamVjdH1cbiAgICovXG4gIGNvbXBWYWxpZFByb3BzKGNvbXAsIHByb3ApIHtcbiAgICBjb21wID0gY29tcCB8fCB0aGlzLnByb3BzLmNvbXBUYWc7XG4gICAgcHJvcCA9IHByb3AgfHwgdGhpcy5wcm9wcztcblxuICAgIGxldCB0bXBQcm9wcyA9IFJFQUNULlAuc2tWYWxzKCk7XG4gICAgdG1wUHJvcHMgPSBjb21wLnByb3BUeXBlcyA/IHRtcFByb3BzLmNvbmNhdChPYmplY3Qua2V5cyhjb21wLnByb3BUeXBlcykpIDogdG1wUHJvcHM7XG4gICAgdG1wUHJvcHMgPSAoY29tcC50eXBlICYmIGNvbXAudHlwZS5wcm9wVHlwZXMpID8gdG1wUHJvcHMuY29uY2F0KE9iamVjdC5rZXlzKGNvbXAudHlwZS5wcm9wVHlwZXMpKSA6IHRtcFByb3BzO1xuXG4gICAgcmV0dXJuIF8ub21pdChfLnBpY2socHJvcCwgdG1wUHJvcHMpLCBbQ29tcC5TS19QUk9QUy5DT01QX1RBRywgQ29tcC5TS19QUk9QUy5NT0RFTF9JRF0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYm9vbGVhbiB2YWx1ZSBvZiBib29sZWFuLCBmdW5jdGlvbiBvciBvYmplY3Qgd2l0aCBza1doZW4gcHJvcGVydGllc1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGRlZmF1bHRWYWx1ZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIHNrQmZvKHByb3AsIGRlZmF1bHRWYWx1ZSA9IGZhbHNlKSB7XG4gICAgcmV0dXJuIHRoaXMuZXhlY0Jmbyh0aGlzLnNrUHJvcChwcm9wLCBkZWZhdWx0VmFsdWUpKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYm9vbGVhbiB2YWx1ZSBvZiBib29sZWFuLCBmdW5jdGlvbiBvciBvYmplY3Qgd2l0aCBza1doZW4gcHJvcGVydGllc1xuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW58RnVuY3Rpb258T2JqZWN0fSBiZm9cbiAgICogQHBhcmFtIHtib29sZWFufSBkZWZhdWx0VmFsdWVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBleGVjQmZvKGJmbywgZGVmYXVsdFZhbHVlID0gZmFsc2UpIHtcbiAgICBpZiAoXy5pc0Jvb2xlYW4oYmZvKSkge1xuICAgICAgcmV0dXJuIGJmbztcbiAgICB9IGVsc2UgaWYgKF8uaXNGdW5jdGlvbihiZm8pKSB7XG4gICAgICByZXR1cm4gYmZvLmNhbGwodGhpcyk7XG4gICAgfSBlbHNlIGlmIChfLmlzT2JqZWN0KGJmbykgJiYgXy5pc0Z1bmN0aW9uKGJmby5mdW5jKSkge1xuICAgICAgcmV0dXJuIGJmby5za1doZW4uY2FsbCh0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmZXJyaW5nIHByb3BzIHRvIGNoaWxkcmVuXG4gICAqXG4gICAqIGNoaWxkICsgc2tDaGlsZFByb3BzVHJhbnMoY2hpbGQpICsgdGhpcy5wcm9wcy5za0ZpbHRlcihmYWxzZSwgQ29tcC5za1Byb3BzRmlsdGVyKSArIGNoaWxkLnByb3BzLnNrRmlsdGVyKGZhbHNlLCBDb21wLnNrUHJvcHNGaWx0ZXIpXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3QuQ2hpbGRyZW59IGNoaWxkcmVuXG4gICAqIEByZXR1cm5zIHtSZWFjdC5DaGlsZHJlbn1cbiAgICovXG4gIHNrUHJvcHNUcmFucyhjaGlsZHJlbiA9IHVuZGVmaW5lZCkge1xuICAgIGxldCBza1Byb3BzID0gdGhpcy5wcm9wcy5za0ZpbHRlcihmYWxzZSwgQ29tcC5za1Byb3BzRmlsdGVyKTtcbiAgICByZXR1cm4gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuID8gY2hpbGRyZW4gOiB0aGlzLnByb3BzLmNoaWxkcmVuLCBjaGlsZCA9PiB7XG4gICAgICBpZiAoUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIGxldCB0bXBQcm9wcyA9IChSRUFDVC5UQUdbY2hpbGQudHlwZV0gJiYgSFRNTC5QUk9QW2NoaWxkLnR5cGVdKSA/IHt9IDogc2tQcm9wcztcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgXy5hc3NpZ24odGhpcy5jaGlsZFByb3BzVHJhbnMoY2hpbGQpLCB0bXBQcm9wcywgY2hpbGQucHJvcHMuc2tGaWx0ZXIoZmFsc2UsIENvbXAuc2tQcm9wc0ZpbHRlcikpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEdlbiBwcm9wcyB0cmFucyB0byBjaGlsZHJlblxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0LkNvbXBvbmVudH0gY2hpbGRcbiAgICogQHJldHVybnMge1BsYWluT2JqZWN0fVxuICAgKi9cbiAgY2hpbGRQcm9wc1RyYW5zKGNoaWxkKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgaGFzU3BlY2lhbENoaWxkKHNwZWNpYWxDaGlsZE5hbWUpIHtcbiAgICByZXR1cm4gUmVhY3RVdGlsLnNvbWUodGhpcy5wcm9wcy5jaGlsZHJlbiwgKGNoaWxkLCBpZHgpID0+IHtcbiAgICAgIHJldHVybiBjaGlsZC50eXBlICYmIGNoaWxkLnR5cGUubmFtZSA9PSBzcGVjaWFsQ2hpbGROYW1lXG4gICAgfSwgdGhpcyk7XG4gIH1cbn1cbiJdfQ==