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
      return ReactUtils.some(this.props.children, function (child, idx) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL0NvbXAuanMiXSwibmFtZXMiOlsiQ29tcCIsInByb3BzIiwicHJvcE5hbWUiLCJjb21wb25lbnROYW1lIiwiRXJyb3IiLCJrIiwic3RhcnRzV2l0aCIsInM0cyIsIlNLX1BST1BTX1BSRUZJWCIsImFyZ3MiLCJfdXBkYXRlVUkiLCJ1cGRhdGVVSSIsImJpbmQiLCJtb25pdG9ycyIsImFkZEFsbENoYW5nZWRNb25pdG9yIiwiYWRkRXh0ZW5kQ2hhbmdlZE1vbml0b3IiLCJybXZBbGxDaGFuZ2VkTW9uaXRvciIsInJtdkV4dGVuZENoYW5nZWRNb25pdG9yIiwicGFyc2VTYW8iLCJtb25pdG9yIiwiZm9yRWFjaCIsIiRpIiwiYWRkQ2hhbmdlZE1vbml0b3IiLCJpTW9kZWxJZCIsImlkT3JSZWciLCJpc05pbCIsImluZGV4T2YiLCJwdXNoIiwiaXNSZWdFeHAiLCJpTW9kZWwiLCJhZGRSZWdDaGFuZ2VkTGlzdGVuZXIiLCJhZGRJZENoYW5nZWRMaXN0ZW5lciIsInJtdkNoYW5nZWRNb25pdG9yIiwicm12UmVnQ2hhbmdlZExpc3RlbmVyIiwicm12SWRDaGFuZ2VkTGlzdGVuZXIiLCJza1JtdiIsImV2dCIsInNldFN0YXRlIiwic3RhdGVVaWQiLCJ1bmlxdWVJZCIsImdldEVycm9ycyIsIkNvbXBUYWciLCJjb21wVGFnIiwiY29tcFZhbGlkUHJvcHMiLCJza1Byb3BzVHJhbnMiLCJza1Byb3AiLCJTS19QUk9QUyIsIk1PREVMIiwibW9kZWxJZCIsInNrTW9kZWwiLCJza1N5c01vZGVsIiwicHJvcCIsImRlZmF1bHRWYWx1ZSIsInVuZGVmaW5lZCIsInJ0biIsInVwcGVyV29yZEZpcnN0Q2hhciIsInJlcGxhY2UiLCIkMSIsIkNIQVJfVU5ERVJMSU5FIiwidG9VcHBlckNhc2UiLCJ2YWwiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJza1ZhbCIsImNvbXAiLCJ0bXBQcm9wcyIsIlAiLCJza1ZhbHMiLCJwcm9wVHlwZXMiLCJjb25jYXQiLCJPYmplY3QiLCJrZXlzIiwidHlwZSIsIm9taXQiLCJwaWNrIiwiQ09NUF9UQUciLCJNT0RFTF9JRCIsImV4ZWNCZm8iLCJiZm8iLCJpc0Jvb2xlYW4iLCJpc0Z1bmN0aW9uIiwiY2FsbCIsImlzT2JqZWN0IiwiZnVuYyIsInNrV2hlbiIsImNoaWxkcmVuIiwic2tQcm9wcyIsInNrRmlsdGVyIiwic2tQcm9wc0ZpbHRlciIsIkNoaWxkcmVuIiwibWFwIiwiaXNWYWxpZEVsZW1lbnQiLCJjaGlsZCIsIlRBRyIsIlBST1AiLCJjbG9uZUVsZW1lbnQiLCJhc3NpZ24iLCJjaGlsZFByb3BzVHJhbnMiLCJzcGVjaWFsQ2hpbGROYW1lIiwiUmVhY3RVdGlscyIsInNvbWUiLCJpZHgiLCJuYW1lIiwiQ29tcG9uZW50IiwiQ09MX1NQQU4iLCJDT0xfWFMiLCJDT0xfU00iLCJDT0xfTUQiLCJDT0xfTEciLCJDT0xfWEwiLCJGT1JNX0xBQkVMX0NPTCIsIkZPUk1fTEFZT1VUIiwiRk9STV9XUkFQUEVSX0NPTCIsIkdSSURfR1VUVEVSIiwiSU5fRlJPTV9JVEVNIiwiSU5fRlJPTV9ST1ciLCJBQ1RJVkUiLCJESVNBQkxFRCIsIkhJRERFTiIsIlBSRVZJRVciLCJSRUFET05MWSIsIlJFUVVJUkVEIiwiTU9OSVRPUiIsIlByb3BUeXBlcyIsIm9uZU9mVHlwZSIsImVsZW1lbnQiLCJzdHJpbmciLCJtb2RlbCIsIklTX1BST1BfVFlQRVNfTU9ERUwiLCJpbnN0YW5jZU9mIiwiY29sU3BhbiIsIm51bWJlciIsInNrQ29sU3BhbiIsImNvbFhzIiwib2JqZWN0Iiwic2tDb2xYcyIsImNvbFNtIiwic2tDb2xTbSIsImNvbE1kIiwic2tDb2xNZCIsImNvbExnIiwic2tDb2xMZyIsImNvbFhsIiwic2tDb2xYbCIsImZvcm1MYXlvdXQiLCJvbmVPZiIsIkhvcml6b250YWwiLCJWZXJ0aWNhbCIsIklubGluZSIsInNrRm9ybUxheW91dCIsImZvcm1MYWJlbENvbCIsInNrRm9ybUxhYmVsQ29sIiwiZm9ybVdyYXBwZXJDb2wiLCJza0Zvcm1XcmFwcGVyQ29sIiwiZ3JpZEd1dHRlciIsInNrR3JpZEd1dHRlciIsImluRm9ybUl0ZW0iLCJib29sIiwic2tJbkZvcm1JdGVtIiwiaW5Gb3JtUm93Iiwic2tJbkZvcm1Sb3ciLCJhY3RpdmUiLCJza0FjdGl2ZSIsImRpc2FibGVkIiwic2tEaXNhYmxlZCIsImhpZGRlbiIsInNrSGlkZGVuIiwicHJldmlldyIsInNrUHJldmlldyIsInJlYWRPbmx5Iiwic2tSZWFkT25seSIsInJlcXVpcmVkIiwic2tSZXF1aXJlZCIsImFycmF5IiwibTJlQ29udmVydG9yIiwiZTJtQ29udmVydG9yIiwibTJ2Q29udmVydG9yIiwidjJtQ29udmVydG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7O0lBTXFCQSxJOzs7Ozs7O0FBd0tuQjs7Ozs7Ozs7d0NBUTJCQyxLLEVBQU9DLFEsRUFBVUMsYSxFQUFlO0FBQ3pELFVBQUlGLE1BQU1DLFFBQU4sS0FBbUIsRUFBRUQsTUFBTUMsUUFBTiw0QkFBRixDQUF2QixFQUE0RDtBQUMxRCxlQUFPLElBQUlFLEtBQUosQ0FBVSxVQUFVRCxhQUFWLEdBQTBCLFFBQTFCLEdBQXFDRCxRQUFyQyxHQUFnRCxtQkFBMUQsQ0FBUDtBQUNEO0FBQ0Y7Ozs7O0FBSUQ7Ozs7OztrQ0FNcUJHLEMsRUFBRztBQUN0QixhQUFPLGlCQUFFQyxVQUFGLENBQWEsZUFBR0MsR0FBSCxDQUFPRixDQUFQLENBQWIsRUFBd0JMLEtBQUtRLGVBQTdCLENBQVA7QUFDRDs7O0FBS0Qsa0JBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLHVJQUNWQSxJQURVOztBQUFBLFVBSHJCQyxTQUdxQixHQUhULE1BQUtDLFFBQUwsQ0FBY0MsSUFBZCxPQUdTO0FBQUEsVUFGckJDLFFBRXFCLEdBRlYsRUFFVTtBQUFBO0FBRXBCOzs7O3dDQUVt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akJzQyxjQUFZLGdCQUFNakQsU0FBTixDQUFnQkMsU0FBaEIsQ0FBMEIsQ0FDcEMsZ0JBQU1ELFNBQU4sQ0FBZ0JrQyxJQURvQixFQUVwQyxnQkFBTWxDLFNBQU4sQ0FBZ0J4QyxJQUZvQixFQUdwQyxnQkFBTXdDLFNBQU4sQ0FBZ0JXLE1BSG9CLENBQTFCLENBeEhLO0FBNkhqQm5ILFdBQVMsZ0JBQU13RyxTQUFOLENBQWdCQyxTQUFoQixDQUEwQixDQUNqQyxnQkFBTUQsU0FBTixDQUFnQkcsTUFEaUIsRUFFakMsZ0JBQU1ILFNBQU4sQ0FBZ0JrRCxLQUZpQixFQUdqQyxnQkFBTWxELFNBQU4sQ0FBZ0JXLE1BSGlCLENBQTFCLENBN0hROztBQW1JakJ3QyxnQkFBYyxnQkFBTW5ELFNBQU4sQ0FBZ0J4QyxJQW5JYixFQW1Ja0I7QUFDbkM0RixnQkFBYyxnQkFBTXBELFNBQU4sQ0FBZ0J4QyxJQXBJYixFQW9Ja0I7QUFDbkM2RixnQkFBYyxnQkFBTXJELFNBQU4sQ0FBZ0J4QyxJQXJJYixFQXFJa0I7QUFDbkM4RixnQkFBYyxnQkFBTXRELFNBQU4sQ0FBZ0J4QyxJQXRJYixDQXNJaUI7QUF0SWpCLEM7QUEvQkFuRixJLENBc0xab0UsUyxHQUFZLGVBQUc0QixNQUFILENBQVUsRUFBVixFQUFjaEcsS0FBS29FLFNBQW5CLEM7a0JBdExBcEUsSSIsImZpbGUiOiJ1dGlscy9Db21wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgU0sgZnJvbSAnc2stanMnO1xuaW1wb3J0IENmZyBmcm9tICcuL0NmZyc7XG5pbXBvcnQge0Rpcn0gZnJvbSAnLi9Db25zdCc7XG5pbXBvcnQgSFRNTCBmcm9tICcuL0hUTUwnO1xuaW1wb3J0IE1vZGVsIGZyb20gJy4vTW9kZWwnO1xuaW1wb3J0IFJFQUNUIGZyb20gJy4vUkVBQ1QnO1xuXG4vKipcbiAqIHByb3BzOmNvbXBUYWcsbW9kZWwoc2tNb2RlbCksbW9kZWxJZCxsYWJlbERpcihza0xhYmVsRGlyKSxsYWJlbFdpZHRoKHNrTGFiZWxXaWR0aClcbiAqIGJmbyAgLGFjdGl2ZShza0FjdGl2ZSksZGlzYWJsZWQoc2tEaXNhYmxlZClcbiAqIGZ1bmMgLG0yZUNvbnZlcnRvcixlMm1Db252ZXJ0b3IsbTJ2Q29udmVydG9yLHYybUNvbnZlcnRvclxuICogaHRtbCAsY2xhc3NOYW1lLHJvbGUsc3R5bGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBTS19QUk9QUyA9IHtcbiAgICAvL3NrXG4gICAgQ09NUF9UQUc6ICdjb21wVGFnJyxcbiAgICBNT0RFTDogJ21vZGVsJyxcbiAgICBNT0RFTF9JRDogJ21vZGVsSWQnLFxuICAgIC8vQW50RFxuICAgIENPTF9TUEFOOiAnY29sU3BhbicsXG4gICAgQ09MX1hTOiAnY29sWHMnLFxuICAgIENPTF9TTTogJ2NvbFNtJyxcbiAgICBDT0xfTUQ6ICdjb2xNZCcsXG4gICAgQ09MX0xHOiAnY29sTGcnLFxuICAgIENPTF9YTDogJ2NvbFhsJyxcbiAgICBGT1JNX0xBQkVMX0NPTDogJ2Zvcm1MYWJlbENvbCcsXG4gICAgRk9STV9MQVlPVVQ6ICdmb3JtTGF5b3V0JyxcbiAgICBGT1JNX1dSQVBQRVJfQ09MOiAnZm9ybVdyYXBwZXJDb2wnLFxuICAgIEdSSURfR1VUVEVSOiAnZ3JpZEd1dHRlcicsXG4gICAgSU5fRlJPTV9JVEVNOiAnaW5Gb3JtSXRlbScsXG4gICAgSU5fRlJPTV9ST1c6ICdpbkZvcm1Sb3cnLFxuICAgIC8vdWkgc3RhdGUsIGFyZSBiZm8gKGJvb2xlYW4sIGZ1bmN0aW9uLCBvYmplY3R7ZGVwczosZnVuYzp9KVxuICAgIC8vZGVwcyB0byBtb25pdG9yXG4gICAgQUNUSVZFOiAnYWN0aXZlJyxcbiAgICBESVNBQkxFRDogJ2Rpc2FibGVkJyxcbiAgICBISURERU46ICdoaWRkZW4nLFxuICAgIFBSRVZJRVc6ICdwcmV2aWV3JyxcbiAgICBSRUFET05MWTogJ3JlYWRPbmx5JyxcbiAgICBSRVFVSVJFRDogJ3JlcXVpcmVkJywvL2p1c3QgcGFpbnQgcmVxdWlyZWQgaWNvblxuICAgIC8vY29tcG9uZW50IG1vbml0b3IgbGlzdCwgY2FuIGJlIHN0cmluZ1tyZWddLCBzdHJpbmcgYXJyYXkgb3Igb2JqZWN0XG4gICAgTU9OSVRPUjogJ21vbml0b3InXG4gIH07XG4gIHN0YXRpYyBTS19QUk9QU19QUkVGSVggPSAnc2snO1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNvbXBUYWc6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUmVhY3QuUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcbiAgICBdKSwvL1JlYWN0IGNvbXBvbmVudCBvciBCcmFkIENvbXBvbmVudFxuICAgIG1vZGVsOiBDb21wLklTX1BST1BfVFlQRVNfTU9ERUwsLy9CdXNpbmVzcyBNb2RlbChwYXJ0IG9mIHBhZ2UpLCBQbGFpbk9iamVjdCBvciBCcmFkLk1vZGVsXG4gICAgc2tNb2RlbDogQ29tcC5JU19QUk9QX1RZUEVTX01PREVMLC8vQnVzaW5lc3MgTW9kZWwocGFnZSksIFBsYWluT2JqZWN0IG9yIEJyYWQuTW9kZWxcbiAgICBza1N5c01vZGVsOiBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihNb2RlbCksLy9TeXN0ZW0gTW9kZWwod2hvbGUgb2YgcGFnZSksIFBsYWluT2JqZWN0IG9yIEJyYWQuTW9kZWxcbiAgICBtb2RlbElkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNvbFNwYW46IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgc2tDb2xTcGFuOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIGNvbFhzOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgc2tDb2xYczogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIGNvbFNtOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgc2tDb2xTbTogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIGNvbE1kOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgc2tDb2xNZDogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIGNvbExnOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgc2tDb2xMZzogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIGNvbFhsOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgc2tDb2xYbDogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIGZvcm1MYXlvdXQ6IFJlYWN0LlByb3BUeXBlcy5vbmVPZihbRGlyLkhvcml6b250YWwsIERpci5WZXJ0aWNhbCwgRGlyLklubGluZV0pLFxuICAgIHNrRm9ybUxheW91dDogUmVhY3QuUHJvcFR5cGVzLm9uZU9mKFtEaXIuSG9yaXpvbnRhbCwgRGlyLlZlcnRpY2FsLCBEaXIuSW5saW5lXSksLy9Db25zdC5EaXJcbiAgICBmb3JtTGFiZWxDb2w6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgc2tGb3JtTGFiZWxDb2w6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgZm9ybVdyYXBwZXJDb2w6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgc2tGb3JtV3JhcHBlckNvbDogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBncmlkR3V0dGVyOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIHNrR3JpZEd1dHRlcjogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBpbkZvcm1JdGVtOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBza0luRm9ybUl0ZW06IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIGluRm9ybVJvdzogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgc2tJbkZvcm1Sb3c6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuXG4gICAgYWN0aXZlOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgc2tBY3RpdmU6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5vYmplY3RcbiAgICBdKSxcbiAgICBkaXNhYmxlZDogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIHNrRGlzYWJsZWQ6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5vYmplY3RcbiAgICBdKSxcbiAgICBoaWRkZW46IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5vYmplY3RcbiAgICBdKSxcbiAgICBza0hpZGRlbjogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIHByZXZpZXc6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5vYmplY3RcbiAgICBdKSxcbiAgICBza1ByZXZpZXc6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5vYmplY3RcbiAgICBdKSxcbiAgICByZWFkT25seTogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIHNrUmVhZE9ubHk6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5vYmplY3RcbiAgICBdKSxcbiAgICByZXF1aXJlZDogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIHNrUmVxdWlyZWQ6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5vYmplY3RcbiAgICBdKSxcbiAgICBtb25pdG9yOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuYXJyYXksXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG5cbiAgICBtMmVDb252ZXJ0b3I6IFJlYWN0LlByb3BUeXBlcy5mdW5jLC8vTW9kZWwgMiBFZGl0aW5nXG4gICAgZTJtQ29udmVydG9yOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYywvL0VkaXRpbmcgMiBNb2RlbFxuICAgIG0ydkNvbnZlcnRvcjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsLy9Nb2RlbCAyIFZpZXcsIGxpa2UgRGF0ZSBDb21wLCBtb21lbnQgZm9ybWF0IHRvIHZpZXc6IFlZWVktTU0tRERUSEg6bW06c3MuU1NTWiAtPiBZWVlZLU1NLUREXG4gICAgdjJtQ29udmVydG9yOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy8vVmlldyAyIE1vZGVsLCBsaWtlIENoZWNrIENvbXAsIHRydWUgaXMgY2hlY2tlZDogdHJ1ZSAtPiAxLCBmYWxzZSAtPiAwXG4gIH07XG5cbiAgLyoqXG4gICAqIEFzc2VydCBNb2RlbFxuICAgKlxuICAgKiBAcGFyYW0gcHJvcHNcbiAgICogQHBhcmFtIHByb3BOYW1lXG4gICAqIEBwYXJhbSBjb21wb25lbnROYW1lXG4gICAqIEByZXR1cm5zIHtFcnJvcn1cbiAgICovXG4gIHN0YXRpYyBJU19QUk9QX1RZUEVTX01PREVMKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgIGlmIChwcm9wc1twcm9wTmFtZV0gJiYgIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBNb2RlbCkpIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1RoZSBbJyArIGNvbXBvbmVudE5hbWUgKyAnXVxcJ3MgWycgKyBwcm9wTmFtZSArICddIGlzIG5vdCBhIG1vZGVsIScpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIENvbXAucHJvcFR5cGVzKTtcblxuICAvKipcbiAgICogRmlsdGVyIHNrIHByb3BzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrIGtleS9pbmRleFxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBza1Byb3BzRmlsdGVyKGspIHtcbiAgICByZXR1cm4gXy5zdGFydHNXaXRoKFNLLnM0cyhrKSwgQ29tcC5TS19QUk9QU19QUkVGSVgpO1xuICB9XG5cbiAgX3VwZGF0ZVVJID0gdGhpcy51cGRhdGVVSS5iaW5kKHRoaXMpO1xuICBtb25pdG9ycyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuYWRkQWxsQ2hhbmdlZE1vbml0b3IoKTtcbiAgICB0aGlzLmFkZEV4dGVuZENoYW5nZWRNb25pdG9yKCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVXBkYXRlKCkge1xuICAgIHRoaXMucm12QWxsQ2hhbmdlZE1vbml0b3IoKTtcbiAgICB0aGlzLnJtdkV4dGVuZENoYW5nZWRNb25pdG9yKCk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy5hZGRBbGxDaGFuZ2VkTW9uaXRvcigpO1xuICAgIHRoaXMuYWRkRXh0ZW5kQ2hhbmdlZE1vbml0b3IoKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucm12QWxsQ2hhbmdlZE1vbml0b3IoKTtcbiAgICB0aGlzLnJtdkV4dGVuZENoYW5nZWRNb25pdG9yKCk7XG4gIH1cblxuICBhZGRFeHRlbmRDaGFuZ2VkTW9uaXRvcigpIHtcblxuICB9XG5cbiAgcm12RXh0ZW5kQ2hhbmdlZE1vbml0b3IoKSB7XG5cbiAgfVxuXG4gIC8vbW9uaXRvciBiZWdpblxuICBhZGRBbGxDaGFuZ2VkTW9uaXRvcigpIHtcbiAgICBNb2RlbC5wYXJzZVNhbyh0aGlzLnByb3BzLm1vbml0b3IpLmZvckVhY2goKCRpKSA9PiB7XG4gICAgICB0aGlzLmFkZENoYW5nZWRNb25pdG9yKCRpKTtcbiAgICB9KTtcbiAgICAvL1NlbGYgdmFsdWUgbW9uaXRvclxuICAgIGlmICh0aGlzLmlNb2RlbElkKCkpIHtcbiAgICAgIHRoaXMuYWRkQ2hhbmdlZE1vbml0b3IodGhpcy5pTW9kZWxJZCgpKTtcbiAgICB9XG4gIH1cblxuICBhZGRDaGFuZ2VkTW9uaXRvcihpZE9yUmVnKSB7XG4gICAgaWYgKCFfLmlzTmlsKGlkT3JSZWcpKSB7XG4gICAgICBpZiAodGhpcy5tb25pdG9ycy5pbmRleE9mKGlkT3JSZWcpIDwgMCkge1xuICAgICAgICB0aGlzLm1vbml0b3JzLnB1c2goaWRPclJlZyk7XG4gICAgICB9XG4gICAgICBpZiAoXy5pc1JlZ0V4cChpZE9yUmVnKSkge1xuICAgICAgICB0aGlzLmlNb2RlbCgpLmFkZFJlZ0NoYW5nZWRMaXN0ZW5lcihpZE9yUmVnLCB0aGlzLl91cGRhdGVVSSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmlNb2RlbCgpLmFkZElkQ2hhbmdlZExpc3RlbmVyKGlkT3JSZWcsIHRoaXMuX3VwZGF0ZVVJKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBybXZBbGxDaGFuZ2VkTW9uaXRvcigpIHtcbiAgICB0aGlzLm1vbml0b3JzLmZvckVhY2goKCRpKSA9PiB7XG4gICAgICB0aGlzLnJtdkNoYW5nZWRNb25pdG9yKCRpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJtdkNoYW5nZWRNb25pdG9yKGlkT3JSZWcpIHtcbiAgICBpZiAoXy5pc1JlZ0V4cChpZE9yUmVnKSkge1xuICAgICAgdGhpcy5pTW9kZWwoKS5ybXZSZWdDaGFuZ2VkTGlzdGVuZXIoaWRPclJlZywgdGhpcy5fdXBkYXRlVUkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlNb2RlbCgpLnJtdklkQ2hhbmdlZExpc3RlbmVyKGlkT3JSZWcsIHRoaXMuX3VwZGF0ZVVJKVxuICAgIH1cbiAgICB0aGlzLm1vbml0b3JzLnNrUm12KGlkT3JSZWcpO1xuICB9XG5cbiAgdXBkYXRlVUkoZXZ0KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c3RhdGVVaWQ6IF8udW5pcXVlSWQoJ2NvbXBTdGF0ZVVpZCcpfSk7XG4gIH1cblxuICAvL21vbml0b3IgZW5kXG5cbiAgZ2V0RXJyb3JzKCkge1xuICAgIHJldHVybiB0aGlzLmlNb2RlbCgpLmdldEVycm9ycyh0aGlzLmlNb2RlbElkKCkpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7Y29tcFRhZzogQ29tcFRhZ30gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wVGFnIHsuLi50aGlzLmNvbXBWYWxpZFByb3BzKENvbXBUYWcpfT5cbiAgICAgICAge3RoaXMuc2tQcm9wc1RyYW5zKCl9XG4gICAgICA8L0NvbXBUYWc+XG4gICAgKTtcbiAgfVxuXG4gIC8vUHJvcGVydGllc1xuICAvKipcbiAgICogR2V0IG1vZGVsIGlmIGV4aXN0LCBlbHNlIHNrTW9kZWxcbiAgICpcbiAgICogQHJldHVybnMge01vZGVsfVxuICAgKi9cbiAgaU1vZGVsKCkge1xuICAgIHJldHVybiB0aGlzLnNrUHJvcChDb21wLlNLX1BST1BTLk1PREVMKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbW9kZWxJZDogeC54eC54eHgueHh4eFxuICAgKlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgaU1vZGVsSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMubW9kZWxJZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc2tNb2RlbFxuICAgKlxuICAgKiBAcmV0dXJucyB7TW9kZWx9XG4gICAqL1xuICBza01vZGVsKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnNrTW9kZWw7XG4gIH1cblxuICBzeXNNb2RlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5za1N5c01vZGVsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBwcm9wIHZhbHVlOiBwcm9wIC0+IHNrUHJvcCAtPiBERUZBVUxUX1BST1BcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9cHJvcFxuICAgKiBAcGFyYW0geyp9IGRlZmF1bHRWYWx1ZVxuICAgKiBAcmV0dXJucyB7Kn0gTWF5YmUgdW5kZWZpbmVkXG4gICAqL1xuICBza1Byb3AocHJvcCwgZGVmYXVsdFZhbHVlID0gdW5kZWZpbmVkKSB7XG4gICAgbGV0IHJ0biA9IHRoaXMucHJvcHNbcHJvcF07XG4gICAgaWYgKHJ0biA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBydG4gPSB0aGlzLnByb3BzW0NvbXAuU0tfUFJPUFNfUFJFRklYICsgU0sudXBwZXJXb3JkRmlyc3RDaGFyKHByb3ApXVxuICAgIH1cbiAgICBpZiAocnRuID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJ0biA9IHRoaXMucHJvcHNbQ29tcC5TS19QUk9QU19QUkVGSVggKyAnU3lzJyArIFNLLnVwcGVyV29yZEZpcnN0Q2hhcihwcm9wKV1cbiAgICB9XG4gICAgaWYgKHJ0biA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBydG4gPSBDZmdbJ0RFRkFVTFQnICsgU0sudXBwZXJXb3JkRmlyc3RDaGFyKHByb3ApLnJlcGxhY2UoL1tBLVpdL2csICgkMSkgPT4ge1xuICAgICAgICByZXR1cm4gU0suQ0hBUl9VTkRFUkxJTkUgKyAkMTtcbiAgICAgIH0pLnRvVXBwZXJDYXNlKCldXG4gICAgfVxuICAgIHJldHVybiBydG4gPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRWYWx1ZSA6IHJ0bjtcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXQvZ2V0IHZhbHVlIGZvciBtb2RlbElkXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gdmFsXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgc2tWYWwodmFsKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmlNb2RlbCgpLnNrVmFsKHRoaXMuaU1vZGVsSWQoKSwgdmFsKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5pTW9kZWwoKS5za1ZhbCh0aGlzLmlNb2RlbElkKCkpO1xuICAgIH1cbiAgfVxuXG4gIC8vRnVuY3Rpb25zXG4gIC8qKlxuICAgKiBSZXR1cm5zIHZhbGlkIHByb3BzIGZvciB0aGlzIGNvbXBcbiAgICpcbiAgICogQHBhcmFtIHtDb21wfHN0cmluZ30gY29tcFxuICAgKiBAcGFyYW0ge1BsYWluT2JqZWN0fSBwcm9wXG4gICAqIEByZXR1cm5zIHtQbGFpbk9iamVjdH1cbiAgICovXG4gIGNvbXBWYWxpZFByb3BzKGNvbXAsIHByb3ApIHtcbiAgICBjb21wID0gY29tcCB8fCB0aGlzLnByb3BzLmNvbXBUYWc7XG4gICAgcHJvcCA9IHByb3AgfHwgdGhpcy5wcm9wcztcblxuICAgIGxldCB0bXBQcm9wcyA9IFJFQUNULlAuc2tWYWxzKCk7XG4gICAgdG1wUHJvcHMgPSBjb21wLnByb3BUeXBlcyA/IHRtcFByb3BzLmNvbmNhdChPYmplY3Qua2V5cyhjb21wLnByb3BUeXBlcykpIDogdG1wUHJvcHM7XG4gICAgdG1wUHJvcHMgPSAoY29tcC50eXBlICYmIGNvbXAudHlwZS5wcm9wVHlwZXMpID8gdG1wUHJvcHMuY29uY2F0KE9iamVjdC5rZXlzKGNvbXAudHlwZS5wcm9wVHlwZXMpKSA6IHRtcFByb3BzO1xuXG4gICAgcmV0dXJuIF8ub21pdChfLnBpY2socHJvcCwgdG1wUHJvcHMpLCBbQ29tcC5TS19QUk9QUy5DT01QX1RBRywgQ29tcC5TS19QUk9QUy5NT0RFTF9JRF0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYm9vbGVhbiB2YWx1ZSBvZiBib29sZWFuLCBmdW5jdGlvbiBvciBvYmplY3Qgd2l0aCBza1doZW4gcHJvcGVydGllc1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGRlZmF1bHRWYWx1ZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIHNrQmZvKHByb3AsIGRlZmF1bHRWYWx1ZSA9IGZhbHNlKSB7XG4gICAgcmV0dXJuIHRoaXMuZXhlY0Jmbyh0aGlzLnNrUHJvcChwcm9wLCBkZWZhdWx0VmFsdWUpKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYm9vbGVhbiB2YWx1ZSBvZiBib29sZWFuLCBmdW5jdGlvbiBvciBvYmplY3Qgd2l0aCBza1doZW4gcHJvcGVydGllc1xuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW58RnVuY3Rpb258T2JqZWN0fSBiZm9cbiAgICogQHBhcmFtIHtib29sZWFufSBkZWZhdWx0VmFsdWVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBleGVjQmZvKGJmbywgZGVmYXVsdFZhbHVlID0gZmFsc2UpIHtcbiAgICBpZiAoXy5pc0Jvb2xlYW4oYmZvKSkge1xuICAgICAgcmV0dXJuIGJmbztcbiAgICB9IGVsc2UgaWYgKF8uaXNGdW5jdGlvbihiZm8pKSB7XG4gICAgICByZXR1cm4gYmZvLmNhbGwodGhpcyk7XG4gICAgfSBlbHNlIGlmIChfLmlzT2JqZWN0KGJmbykgJiYgXy5pc0Z1bmN0aW9uKGJmby5mdW5jKSkge1xuICAgICAgcmV0dXJuIGJmby5za1doZW4uY2FsbCh0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmZXJyaW5nIHByb3BzIHRvIGNoaWxkcmVuXG4gICAqXG4gICAqIGNoaWxkICsgc2tDaGlsZFByb3BzVHJhbnMoY2hpbGQpICsgdGhpcy5wcm9wcy5za0ZpbHRlcihmYWxzZSwgQ29tcC5za1Byb3BzRmlsdGVyKSArIGNoaWxkLnByb3BzLnNrRmlsdGVyKGZhbHNlLCBDb21wLnNrUHJvcHNGaWx0ZXIpXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3QuQ2hpbGRyZW59IGNoaWxkcmVuXG4gICAqIEByZXR1cm5zIHtSZWFjdC5DaGlsZHJlbn1cbiAgICovXG4gIHNrUHJvcHNUcmFucyhjaGlsZHJlbiA9IHVuZGVmaW5lZCkge1xuICAgIGxldCBza1Byb3BzID0gdGhpcy5wcm9wcy5za0ZpbHRlcihmYWxzZSwgQ29tcC5za1Byb3BzRmlsdGVyKTtcbiAgICByZXR1cm4gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuID8gY2hpbGRyZW4gOiB0aGlzLnByb3BzLmNoaWxkcmVuLCBjaGlsZCA9PiB7XG4gICAgICBpZiAoUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIGxldCB0bXBQcm9wcyA9IChSRUFDVC5UQUdbY2hpbGQudHlwZV0gJiYgSFRNTC5QUk9QW2NoaWxkLnR5cGVdKSA/IHt9IDogc2tQcm9wcztcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgXy5hc3NpZ24odGhpcy5jaGlsZFByb3BzVHJhbnMoY2hpbGQpLCB0bXBQcm9wcywgY2hpbGQucHJvcHMuc2tGaWx0ZXIoZmFsc2UsIENvbXAuc2tQcm9wc0ZpbHRlcikpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEdlbiBwcm9wcyB0cmFucyB0byBjaGlsZHJlblxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0LkNvbXBvbmVudH0gY2hpbGRcbiAgICogQHJldHVybnMge1BsYWluT2JqZWN0fVxuICAgKi9cbiAgY2hpbGRQcm9wc1RyYW5zKGNoaWxkKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgaGFzU3BlY2lhbENoaWxkKHNwZWNpYWxDaGlsZE5hbWUpIHtcbiAgICByZXR1cm4gUmVhY3RVdGlscy5zb21lKHRoaXMucHJvcHMuY2hpbGRyZW4sIChjaGlsZCwgaWR4KSA9PiB7XG4gICAgICByZXR1cm4gY2hpbGQudHlwZSAmJiBjaGlsZC50eXBlLm5hbWUgPT0gc3BlY2lhbENoaWxkTmFtZVxuICAgIH0sIHRoaXMpO1xuICB9XG59XG4iXX0=