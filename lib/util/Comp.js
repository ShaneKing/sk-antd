'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _DEFAULT = require('./DEFAULT');

var _DEFAULT2 = _interopRequireDefault(_DEFAULT);

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
var Comp = function (_Component) {
  _inherits(Comp, _Component);

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
      return _lodash2.default.startsWith(_skJs.SK.s4s(k), Comp.SK_PROPS_PREFIX);
    }
  }]);

  function Comp() {
    var _ref;

    _classCallCheck(this, Comp);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Comp.__proto__ || Object.getPrototypeOf(Comp)).call.apply(_ref, [this].concat(args)));

    _this.updateUI = function (evt) {
      _this.setState({ stateUid: _lodash2.default.uniqueId(Comp.SK_COMP_STATE_ID_PREFIX) });
    };

    _this.compName = 'Comp';
    _this.monitors = [];
    return _this;
  }

  _createClass(Comp, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      //super.componentDidMount();
      this.addAllChangedMonitor();
      this.addExtendChangedMonitor();
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate() {
      this.rmvAllChangedMonitor();
      this.rmvExtendChangedMonitor();
      //super.componentWillUpdate();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      //super.componentDidUpdate();
      this.addAllChangedMonitor();
      this.addExtendChangedMonitor();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.rmvAllChangedMonitor();
      this.rmvExtendChangedMonitor();
      //super.componentWillUnmount();
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
      if (this.getModelId()) {
        this.addChangedMonitor(this.getModelId());
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
          this.skModel().addRegChangedListener(idOrReg, this.updateUI);
        } else {
          this.skModel().addIdChangedListener(idOrReg, this.updateUI);
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
        this.skModel().rmvRegChangedListener(idOrReg, this.updateUI);
      } else {
        this.skModel().rmvIdChangedListener(idOrReg, this.updateUI);
      }
      this.monitors.skRmv(idOrReg);
    }
  }, {
    key: 'allowTransProps2Child',


    //monitor end

    /**
     * @param {React.Component} child
     * @returns {Function}
     */
    value: function allowTransProps2Child(child) {
      return {};
    }
  }, {
    key: 'allowTransProps2Self',
    value: function allowTransProps2Self() {
      return [];
    }
  }, {
    key: 'denyTransProps2Self',
    value: function denyTransProps2Self() {
      return [];
    }

    /**
     * Returns boolean value of boolean, function or object with skWhen properties
     *
     * @param {boolean|function|object} bfo
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
        return bfo.func.call(this);
      } else {
        return defaultValue;
      }
    }
  }, {
    key: 'getErrors',
    value: function getErrors() {
      return this.skModel().getErrors(this.getModelId());
    }

    /**
     * Get modelId: x.xx.xxx
     *
     * @returns {string}
     */

  }, {
    key: 'getModelId',
    value: function getModelId() {
      return this.props.modelId;
    }
  }, {
    key: 'getSysModel',
    value: function getSysModel() {
      return this.props.skSysModel;
    }
  }, {
    key: 'render',
    value: function render() {
      var CompTag = this.props.compTag;


      return _react2.default.createElement(
        CompTag,
        this.skTransProps2Self(CompTag),
        this.skTransProps2Child()
      );
    }

    /**
     * @see Comp.execBfo
     */

  }, {
    key: 'skBfo',
    value: function skBfo(prop) {
      var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      return this.execBfo(this.skProp(prop, defaultValue));
    }

    /**
     * Get model if exist, else skModel
     *
     * @returns {Model}
     */

  }, {
    key: 'skModel',
    value: function skModel() {
      return this.skProp(Comp.SK_PROPS.MODEL);
    }

    /**
     * Get prop value: prop -> skProp -> DEFAULT.PROP
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
        rtn = this.props[Comp.SK_PROPS_PREFIX + _skJs.SK.upperWordsFirstChar(prop)];
      }
      if (rtn === undefined) {
        rtn = this.props[Comp.SK_PROPS_PREFIX + _skJs.SK.upperWordsFirstChar(Comp.SK_PROPS_SYS) + _skJs.SK.upperWordsFirstChar(prop)];
      }
      if (rtn === undefined) {
        rtn = _DEFAULT2.default[_skJs.SK.upperWordsFirstChar(prop).replace(/[A-Z]/g, function ($1) {
          return _skJs.SK.CHAR_UNDERLINE + $1;
        }).toUpperCase().slice(1)];
      }
      return rtn === undefined ? defaultValue : rtn;
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
    key: 'skTransProps2Child',
    value: function skTransProps2Child() {
      var _this4 = this;

      var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

      var skProps = this.props.skFilter(false, Comp.skPropsFilter);
      return _react2.default.Children.map(children ? children : this.props.children, function (child) {
        if (_react2.default.isValidElement(child)) {
          var tmpProps = _REACT2.default.TAG[child.type] && _HTML2.default.PROP[child.type] ? {} : skProps;
          return _react2.default.cloneElement(child, _lodash2.default.assign({}, _this4.allowTransProps2Child(child), tmpProps, child.props.skFilter(false, Comp.skPropsFilter)));
        }
        return child;
      });
    }

    /**
     * Valid props for this comp
     *
     * @param {Comp|string} comp
     * @param {object} prop
     * @returns {object}
     */

  }, {
    key: 'skTransProps2Self',
    value: function skTransProps2Self() {
      var comp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.compTag;
      var prop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props;

      var tmpProps = _REACT2.default.P.skVals();
      tmpProps = comp.propTypes ? tmpProps.concat(Object.keys(comp.propTypes)) : tmpProps;
      tmpProps = comp.type && comp.type.propTypes ? tmpProps.concat(Object.keys(comp.type.propTypes)) : tmpProps;

      return _lodash2.default.omit(_lodash2.default.pick(prop, tmpProps.concat(this.allowTransProps2Self())), [Comp.SK_PROPS.COMP_TAG, Comp.SK_PROPS.MODEL_ID].concat(this.denyTransProps2Self()));
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
        this.skModel().skVal(this.getModelId(), val);
        return this;
      } else {
        return this.skModel().skVal(this.getModelId());
      }
    }
  }]);

  return Comp;
}(_react.Component);

Comp.SK_COMP_STATE_ID_PREFIX = 'skCompStateUid';
Comp.SK_PROPS_PREFIX = 'sk';
Comp.SK_PROPS_SYS = 'sys';
Comp.SK_PROPS = {
  //sk
  COMP_TAG: 'compTag',
  MODEL: 'model',
  MODEL_ID: 'modelId',
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
Comp.defaultProps = {};
Comp.propTypes = {
  compTag: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func, _propTypes2.default.string]), //React component or Brad Component
  model: Comp.IS_PROP_TYPES_MODEL, //Business Model(part of page), PlainObject or Brad.Model
  skModel: Comp.IS_PROP_TYPES_MODEL, //Business Model(page), PlainObject or Brad.Model
  skSysModel: Comp.IS_PROP_TYPES_MODEL, //System Model(whole of page), PlainObject or Brad.Model
  modelId: _propTypes2.default.string,
  monitor: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array, _propTypes2.default.object]), //monitor is string[reg], array[string] or object

  active: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.func, _propTypes2.default.object]),
  skActive: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.func, _propTypes2.default.object]),
  disabled: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.func, _propTypes2.default.object]),
  skDisabled: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.func, _propTypes2.default.object]),
  hidden: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.func, _propTypes2.default.object]),
  skHidden: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.func, _propTypes2.default.object]),
  preview: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.func, _propTypes2.default.object]),
  skPreview: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.func, _propTypes2.default.object]),
  readOnly: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.func, _propTypes2.default.object]),
  skReadOnly: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.func, _propTypes2.default.object]),
  required: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.func, _propTypes2.default.object]),
  skRequired: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.func, _propTypes2.default.object]),

  m2eConvertor: _propTypes2.default.func, //Model 2 Editing
  e2mConvertor: _propTypes2.default.func, //Editing 2 Model
  m2vConvertor: _propTypes2.default.func, //Model 2 View, like Date Comp, moment format to view: YYYY-MM-DDTHH:mm:ss.SSSZ -> YYYY-MM-DD
  v2mConvertor: _propTypes2.default.func //View 2 Model, like Check Comp, true is checked: true -> 1, false -> 0
};
exports.default = Comp;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwvQ29tcC5qcyJdLCJuYW1lcyI6WyJDb21wIiwicHJvcHMiLCJwcm9wTmFtZSIsImNvbXBvbmVudE5hbWUiLCJFcnJvciIsImsiLCJzdGFydHNXaXRoIiwiczRzIiwiU0tfUFJPUFNfUFJFRklYIiwiYXJncyIsInVwZGF0ZVVJIiwiZXZ0Iiwic2V0U3RhdGUiLCJzdGF0ZVVpZCIsInVuaXF1ZUlkIiwiU0tfQ09NUF9TVEFURV9JRF9QUkVGSVgiLCJjb21wTmFtZSIsIm1vbml0b3JzIiwiYWRkQWxsQ2hhbmdlZE1vbml0b3IiLCJhZGRFeHRlbmRDaGFuZ2VkTW9uaXRvciIsInJtdkFsbENoYW5nZWRNb25pdG9yIiwicm12RXh0ZW5kQ2hhbmdlZE1vbml0b3IiLCJwYXJzZVNhbyIsIm1vbml0b3IiLCJmb3JFYWNoIiwiJGkiLCJhZGRDaGFuZ2VkTW9uaXRvciIsImdldE1vZGVsSWQiLCJpZE9yUmVnIiwiaXNOaWwiLCJpbmRleE9mIiwicHVzaCIsImlzUmVnRXhwIiwic2tNb2RlbCIsImFkZFJlZ0NoYW5nZWRMaXN0ZW5lciIsImFkZElkQ2hhbmdlZExpc3RlbmVyIiwicm12Q2hhbmdlZE1vbml0b3IiLCJybXZSZWdDaGFuZ2VkTGlzdGVuZXIiLCJybXZJZENoYW5nZWRMaXN0ZW5lciIsInNrUm12IiwiY2hpbGQiLCJiZm8iLCJkZWZhdWx0VmFsdWUiLCJpc0Jvb2xlYW4iLCJpc0Z1bmN0aW9uIiwiY2FsbCIsImlzT2JqZWN0IiwiZnVuYyIsImdldEVycm9ycyIsIm1vZGVsSWQiLCJza1N5c01vZGVsIiwiQ29tcFRhZyIsImNvbXBUYWciLCJza1RyYW5zUHJvcHMyU2VsZiIsInNrVHJhbnNQcm9wczJDaGlsZCIsInByb3AiLCJleGVjQmZvIiwic2tQcm9wIiwiU0tfUFJPUFMiLCJNT0RFTCIsInVuZGVmaW5lZCIsInJ0biIsInVwcGVyV29yZHNGaXJzdENoYXIiLCJTS19QUk9QU19TWVMiLCJyZXBsYWNlIiwiJDEiLCJDSEFSX1VOREVSTElORSIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJjaGlsZHJlbiIsInNrUHJvcHMiLCJza0ZpbHRlciIsInNrUHJvcHNGaWx0ZXIiLCJDaGlsZHJlbiIsIm1hcCIsImlzVmFsaWRFbGVtZW50IiwidG1wUHJvcHMiLCJUQUciLCJ0eXBlIiwiUFJPUCIsImNsb25lRWxlbWVudCIsImFzc2lnbiIsImFsbG93VHJhbnNQcm9wczJDaGlsZCIsImNvbXAiLCJQIiwic2tWYWxzIiwicHJvcFR5cGVzIiwiY29uY2F0IiwiT2JqZWN0Iiwia2V5cyIsIm9taXQiLCJwaWNrIiwiYWxsb3dUcmFuc1Byb3BzMlNlbGYiLCJDT01QX1RBRyIsIk1PREVMX0lEIiwiZGVueVRyYW5zUHJvcHMyU2VsZiIsInZhbCIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNrVmFsIiwiQUNUSVZFIiwiRElTQUJMRUQiLCJISURERU4iLCJQUkVWSUVXIiwiUkVBRE9OTFkiLCJSRVFVSVJFRCIsIk1PTklUT1IiLCJkZWZhdWx0UHJvcHMiLCJvbmVPZlR5cGUiLCJlbGVtZW50Iiwic3RyaW5nIiwibW9kZWwiLCJJU19QUk9QX1RZUEVTX01PREVMIiwiYXJyYXkiLCJvYmplY3QiLCJhY3RpdmUiLCJib29sIiwic2tBY3RpdmUiLCJkaXNhYmxlZCIsInNrRGlzYWJsZWQiLCJoaWRkZW4iLCJza0hpZGRlbiIsInByZXZpZXciLCJza1ByZXZpZXciLCJyZWFkT25seSIsInNrUmVhZE9ubHkiLCJyZXF1aXJlZCIsInNrUmVxdWlyZWQiLCJtMmVDb252ZXJ0b3IiLCJlMm1Db252ZXJ0b3IiLCJtMnZDb252ZXJ0b3IiLCJ2Mm1Db252ZXJ0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7SUFNcUJBLEk7Ozs7Ozs7QUF3R25COzs7Ozs7Ozt3Q0FRMkJDLEssRUFBT0MsUSxFQUFVQyxhLEVBQWU7QUFDekQsVUFBSUYsTUFBTUMsUUFB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RUFFM0Isb0JBQVVyRSxJQUZpQixFQUczQixvQkFBVW1FLE1BSGlCLENBQXBCLENBOUNRO0FBbURqQlMsYUFBVyxvQkFBVWYsU0FBVixDQUFvQixDQUM3QixvQkFBVVEsSUFEbUIsRUFFN0Isb0JBQVVyRSxJQUZtQixFQUc3QixvQkFBVW1FLE1BSG1CLENBQXBCLENBbkRNO0FBd0RqQlUsWUFBVSxvQkFBVWhCLFNBQVYsQ0FBb0IsQ0FDNUIsb0JBQVVRLElBRGtCLEVBRTVCLG9CQUFVckUsSUFGa0IsRUFHNUIsb0JBQVVtRSxNQUhrQixDQUFwQixDQXhETztBQTZEakJXLGNBQVksb0JBQVVqQixTQUFWLENBQW9CLENBQzlCLG9CQUFVUSxJQURvQixFQUU5QixvQkFBVXJFLElBRm9CLEVBRzlCLG9CQUFVbUUsTUFIb0IsQ0FBcEIsQ0E3REs7QUFrRWpCWSxZQUFVLG9CQUFVbEIsU0FBVixDQUFvQixDQUM1QixvQkFBVVEsSUFEa0IsRUFFNUIsb0JBQVVyRSxJQUZrQixFQUc1QixvQkFBVW1FLE1BSGtCLENBQXBCLENBbEVPO0FBdUVqQmEsY0FBWSxvQkFBVW5CLFNBQVYsQ0FBb0IsQ0FDOUIsb0JBQVVRLElBRG9CLEVBRTlCLG9CQUFVckUsSUFGb0IsRUFHOUIsb0JBQVVtRSxNQUhvQixDQUFwQixDQXZFSzs7QUE2RWpCYyxnQkFBYyxvQkFBVWpGLElBN0VQLEVBNkVZO0FBQzdCa0YsZ0JBQWMsb0JBQVVsRixJQTlFUCxFQThFWTtBQUM3Qm1GLGdCQUFjLG9CQUFVbkYsSUEvRVAsRUErRVk7QUFDN0JvRixnQkFBYyxvQkFBVXBGLElBaEZQLENBZ0ZXO0FBaEZYLEM7a0JBckJBL0MsSSIsImZpbGUiOiJ1dGlsL0NvbXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTS30gZnJvbSAnc2stanMnO1xuaW1wb3J0IERFRkFVTFQgZnJvbSAnLi9ERUZBVUxUJztcbmltcG9ydCBIVE1MIGZyb20gJy4vSFRNTCc7XG5pbXBvcnQgTW9kZWwgZnJvbSAnLi9Nb2RlbCc7XG5pbXBvcnQgUkVBQ1QgZnJvbSAnLi9SRUFDVCc7XG5cbi8qKlxuICogcHJvcHM6Y29tcFRhZyxtb2RlbChza01vZGVsKSxtb2RlbElkLGxhYmVsRGlyKHNrTGFiZWxEaXIpLGxhYmVsV2lkdGgoc2tMYWJlbFdpZHRoKVxuICogYmZvICAsYWN0aXZlKHNrQWN0aXZlKSxkaXNhYmxlZChza0Rpc2FibGVkKVxuICogZnVuYyAsbTJlQ29udmVydG9yLGUybUNvbnZlcnRvcixtMnZDb252ZXJ0b3IsdjJtQ29udmVydG9yXG4gKiBodG1sICxjbGFzc05hbWUscm9sZSxzdHlsZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIFNLX0NPTVBfU1RBVEVfSURfUFJFRklYID0gJ3NrQ29tcFN0YXRlVWlkJztcbiAgc3RhdGljIFNLX1BST1BTX1BSRUZJWCA9ICdzayc7XG4gIHN0YXRpYyBTS19QUk9QU19TWVMgPSAnc3lzJztcbiAgc3RhdGljIFNLX1BST1BTID0ge1xuICAgIC8vc2tcbiAgICBDT01QX1RBRzogJ2NvbXBUYWcnLFxuICAgIE1PREVMOiAnbW9kZWwnLFxuICAgIE1PREVMX0lEOiAnbW9kZWxJZCcsXG4gICAgLy91aSBzdGF0ZSwgYXJlIGJmbyAoYm9vbGVhbiwgZnVuY3Rpb24sIG9iamVjdHtkZXBzOixmdW5jOn0pXG4gICAgLy9kZXBzIHRvIG1vbml0b3JcbiAgICBBQ1RJVkU6ICdhY3RpdmUnLFxuICAgIERJU0FCTEVEOiAnZGlzYWJsZWQnLFxuICAgIEhJRERFTjogJ2hpZGRlbicsXG4gICAgUFJFVklFVzogJ3ByZXZpZXcnLFxuICAgIFJFQURPTkxZOiAncmVhZE9ubHknLFxuICAgIFJFUVVJUkVEOiAncmVxdWlyZWQnLC8vanVzdCBwYWludCByZXF1aXJlZCBpY29uXG4gICAgLy9jb21wb25lbnQgbW9uaXRvciBsaXN0LCBjYW4gYmUgc3RyaW5nW3JlZ10sIHN0cmluZyBhcnJheSBvciBvYmplY3RcbiAgICBNT05JVE9SOiAnbW9uaXRvcidcbiAgfTtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHt9O1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNvbXBUYWc6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIFByb3BUeXBlcy5zdHJpbmdcbiAgICBdKSwvL1JlYWN0IGNvbXBvbmVudCBvciBCcmFkIENvbXBvbmVudFxuICAgIG1vZGVsOiBDb21wLklTX1BST1BfVFlQRVNfTU9ERUwsLy9CdXNpbmVzcyBNb2RlbChwYXJ0IG9mIHBhZ2UpLCBQbGFpbk9iamVjdCBvciBCcmFkLk1vZGVsXG4gICAgc2tNb2RlbDogQ29tcC5JU19QUk9QX1RZUEVTX01PREVMLC8vQnVzaW5lc3MgTW9kZWwocGFnZSksIFBsYWluT2JqZWN0IG9yIEJyYWQuTW9kZWxcbiAgICBza1N5c01vZGVsOiBDb21wLklTX1BST1BfVFlQRVNfTU9ERUwsLy9TeXN0ZW0gTW9kZWwod2hvbGUgb2YgcGFnZSksIFBsYWluT2JqZWN0IG9yIEJyYWQuTW9kZWxcbiAgICBtb2RlbElkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG1vbml0b3I6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIFByb3BUeXBlcy5hcnJheSxcbiAgICAgIFByb3BUeXBlcy5vYmplY3RcbiAgICBdKSwvL21vbml0b3IgaXMgc3RyaW5nW3JlZ10sIGFycmF5W3N0cmluZ10gb3Igb2JqZWN0XG5cbiAgICBhY3RpdmU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmJvb2wsXG4gICAgICBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIFByb3BUeXBlcy5vYmplY3RcbiAgICBdKSxcbiAgICBza0FjdGl2ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIFByb3BUeXBlcy5mdW5jLFxuICAgICAgUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5ib29sLFxuICAgICAgUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBQcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgc2tEaXNhYmxlZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIFByb3BUeXBlcy5mdW5jLFxuICAgICAgUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIGhpZGRlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIFByb3BUeXBlcy5mdW5jLFxuICAgICAgUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIHNrSGlkZGVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5ib29sLFxuICAgICAgUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBQcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgcHJldmlldzogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIFByb3BUeXBlcy5mdW5jLFxuICAgICAgUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIHNrUHJldmlldzogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIFByb3BUeXBlcy5mdW5jLFxuICAgICAgUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIHJlYWRPbmx5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5ib29sLFxuICAgICAgUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBQcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgc2tSZWFkT25seTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIFByb3BUeXBlcy5mdW5jLFxuICAgICAgUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIHJlcXVpcmVkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5ib29sLFxuICAgICAgUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBQcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgc2tSZXF1aXJlZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIFByb3BUeXBlcy5mdW5jLFxuICAgICAgUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuXG4gICAgbTJlQ29udmVydG9yOiBQcm9wVHlwZXMuZnVuYywvL01vZGVsIDIgRWRpdGluZ1xuICAgIGUybUNvbnZlcnRvcjogUHJvcFR5cGVzLmZ1bmMsLy9FZGl0aW5nIDIgTW9kZWxcbiAgICBtMnZDb252ZXJ0b3I6IFByb3BUeXBlcy5mdW5jLC8vTW9kZWwgMiBWaWV3LCBsaWtlIERhdGUgQ29tcCwgbW9tZW50IGZvcm1hdCB0byB2aWV3OiBZWVlZLU1NLUREVEhIOm1tOnNzLlNTU1ogLT4gWVlZWS1NTS1ERFxuICAgIHYybUNvbnZlcnRvcjogUHJvcFR5cGVzLmZ1bmMvL1ZpZXcgMiBNb2RlbCwgbGlrZSBDaGVjayBDb21wLCB0cnVlIGlzIGNoZWNrZWQ6IHRydWUgLT4gMSwgZmFsc2UgLT4gMFxuICB9O1xuXG4gIC8qKlxuICAgKiBBc3NlcnQgTW9kZWxcbiAgICpcbiAgICogQHBhcmFtIHByb3BzXG4gICAqIEBwYXJhbSBwcm9wTmFtZVxuICAgKiBAcGFyYW0gY29tcG9uZW50TmFtZVxuICAgKiBAcmV0dXJucyB7RXJyb3J9XG4gICAqL1xuICBzdGF0aWMgSVNfUFJPUF9UWVBFU19NT0RFTChwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICBpZiAocHJvcHNbcHJvcE5hbWVdICYmICEocHJvcHNbcHJvcE5hbWVdIGluc3RhbmNlb2YgTW9kZWwpKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKCdUaGUgWycgKyBjb21wb25lbnROYW1lICsgJ11cXCdzIFsnICsgcHJvcE5hbWUgKyAnXSBpcyBub3QgYSBtb2RlbCEnKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRmlsdGVyIHNrIHByb3BzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrIGtleS9pbmRleFxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBza1Byb3BzRmlsdGVyKGspIHtcbiAgICByZXR1cm4gXy5zdGFydHNXaXRoKFNLLnM0cyhrKSwgQ29tcC5TS19QUk9QU19QUkVGSVgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnQ29tcCc7XG4gICAgdGhpcy5tb25pdG9ycyA9IFtdO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy9zdXBlci5jb21wb25lbnREaWRNb3VudCgpO1xuICAgIHRoaXMuYWRkQWxsQ2hhbmdlZE1vbml0b3IoKTtcbiAgICB0aGlzLmFkZEV4dGVuZENoYW5nZWRNb25pdG9yKCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVXBkYXRlKCkge1xuICAgIHRoaXMucm12QWxsQ2hhbmdlZE1vbml0b3IoKTtcbiAgICB0aGlzLnJtdkV4dGVuZENoYW5nZWRNb25pdG9yKCk7XG4gICAgLy9zdXBlci5jb21wb25lbnRXaWxsVXBkYXRlKCk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgLy9zdXBlci5jb21wb25lbnREaWRVcGRhdGUoKTtcbiAgICB0aGlzLmFkZEFsbENoYW5nZWRNb25pdG9yKCk7XG4gICAgdGhpcy5hZGRFeHRlbmRDaGFuZ2VkTW9uaXRvcigpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5ybXZBbGxDaGFuZ2VkTW9uaXRvcigpO1xuICAgIHRoaXMucm12RXh0ZW5kQ2hhbmdlZE1vbml0b3IoKTtcbiAgICAvL3N1cGVyLmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XG4gIH1cblxuICBhZGRFeHRlbmRDaGFuZ2VkTW9uaXRvcigpIHtcblxuICB9XG5cbiAgcm12RXh0ZW5kQ2hhbmdlZE1vbml0b3IoKSB7XG5cbiAgfVxuXG4gIC8vbW9uaXRvciBiZWdpblxuICBhZGRBbGxDaGFuZ2VkTW9uaXRvcigpIHtcbiAgICBNb2RlbC5wYXJzZVNhbyh0aGlzLnByb3BzLm1vbml0b3IpLmZvckVhY2goKCRpKSA9PiB7XG4gICAgICB0aGlzLmFkZENoYW5nZWRNb25pdG9yKCRpKTtcbiAgICB9KTtcbiAgICAvL1NlbGYgdmFsdWUgbW9uaXRvclxuICAgIGlmICh0aGlzLmdldE1vZGVsSWQoKSkge1xuICAgICAgdGhpcy5hZGRDaGFuZ2VkTW9uaXRvcih0aGlzLmdldE1vZGVsSWQoKSk7XG4gICAgfVxuICB9XG5cbiAgYWRkQ2hhbmdlZE1vbml0b3IoaWRPclJlZykge1xuICAgIGlmICghXy5pc05pbChpZE9yUmVnKSkge1xuICAgICAgaWYgKHRoaXMubW9uaXRvcnMuaW5kZXhPZihpZE9yUmVnKSA8IDApIHtcbiAgICAgICAgdGhpcy5tb25pdG9ycy5wdXNoKGlkT3JSZWcpO1xuICAgICAgfVxuICAgICAgaWYgKF8uaXNSZWdFeHAoaWRPclJlZykpIHtcbiAgICAgICAgdGhpcy5za01vZGVsKCkuYWRkUmVnQ2hhbmdlZExpc3RlbmVyKGlkT3JSZWcsIHRoaXMudXBkYXRlVUkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5za01vZGVsKCkuYWRkSWRDaGFuZ2VkTGlzdGVuZXIoaWRPclJlZywgdGhpcy51cGRhdGVVSSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcm12QWxsQ2hhbmdlZE1vbml0b3IoKSB7XG4gICAgdGhpcy5tb25pdG9ycy5mb3JFYWNoKCgkaSkgPT4ge1xuICAgICAgdGhpcy5ybXZDaGFuZ2VkTW9uaXRvcigkaSk7XG4gICAgfSk7XG4gIH1cblxuICBybXZDaGFuZ2VkTW9uaXRvcihpZE9yUmVnKSB7XG4gICAgaWYgKF8uaXNSZWdFeHAoaWRPclJlZykpIHtcbiAgICAgIHRoaXMuc2tNb2RlbCgpLnJtdlJlZ0NoYW5nZWRMaXN0ZW5lcihpZE9yUmVnLCB0aGlzLnVwZGF0ZVVJKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5za01vZGVsKCkucm12SWRDaGFuZ2VkTGlzdGVuZXIoaWRPclJlZywgdGhpcy51cGRhdGVVSSlcbiAgICB9XG4gICAgdGhpcy5tb25pdG9ycy5za1JtdihpZE9yUmVnKTtcbiAgfVxuXG4gIHVwZGF0ZVVJID0gKGV2dCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe3N0YXRlVWlkOiBfLnVuaXF1ZUlkKENvbXAuU0tfQ09NUF9TVEFURV9JRF9QUkVGSVgpfSk7XG4gIH07XG5cbiAgLy9tb25pdG9yIGVuZFxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1JlYWN0LkNvbXBvbmVudH0gY2hpbGRcbiAgICogQHJldHVybnMge0Z1bmN0aW9ufVxuICAgKi9cbiAgYWxsb3dUcmFuc1Byb3BzMkNoaWxkKGNoaWxkKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgYWxsb3dUcmFuc1Byb3BzMlNlbGYoKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgZGVueVRyYW5zUHJvcHMyU2VsZigpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBib29sZWFuIHZhbHVlIG9mIGJvb2xlYW4sIGZ1bmN0aW9uIG9yIG9iamVjdCB3aXRoIHNrV2hlbiBwcm9wZXJ0aWVzXG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbnxmdW5jdGlvbnxvYmplY3R9IGJmb1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGRlZmF1bHRWYWx1ZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGV4ZWNCZm8oYmZvLCBkZWZhdWx0VmFsdWUgPSBmYWxzZSkge1xuICAgIGlmIChfLmlzQm9vbGVhbihiZm8pKSB7XG4gICAgICByZXR1cm4gYmZvO1xuICAgIH0gZWxzZSBpZiAoXy5pc0Z1bmN0aW9uKGJmbykpIHtcbiAgICAgIHJldHVybiBiZm8uY2FsbCh0aGlzKTtcbiAgICB9IGVsc2UgaWYgKF8uaXNPYmplY3QoYmZvKSAmJiBfLmlzRnVuY3Rpb24oYmZvLmZ1bmMpKSB7XG4gICAgICByZXR1cm4gYmZvLmZ1bmMuY2FsbCh0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gIH1cblxuICBnZXRFcnJvcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2tNb2RlbCgpLmdldEVycm9ycyh0aGlzLmdldE1vZGVsSWQoKSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IG1vZGVsSWQ6IHgueHgueHh4XG4gICAqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBnZXRNb2RlbElkKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLm1vZGVsSWQ7XG4gIH1cblxuICBnZXRTeXNNb2RlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5za1N5c01vZGVsO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7Y29tcFRhZzogQ29tcFRhZ30gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wVGFnIHsuLi50aGlzLnNrVHJhbnNQcm9wczJTZWxmKENvbXBUYWcpfT5cbiAgICAgICAge3RoaXMuc2tUcmFuc1Byb3BzMkNoaWxkKCl9XG4gICAgICA8L0NvbXBUYWc+XG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAc2VlIENvbXAuZXhlY0Jmb1xuICAgKi9cbiAgc2tCZm8ocHJvcCwgZGVmYXVsdFZhbHVlID0gZmFsc2UpIHtcbiAgICByZXR1cm4gdGhpcy5leGVjQmZvKHRoaXMuc2tQcm9wKHByb3AsIGRlZmF1bHRWYWx1ZSkpXG4gIH1cblxuICAvKipcbiAgICogR2V0IG1vZGVsIGlmIGV4aXN0LCBlbHNlIHNrTW9kZWxcbiAgICpcbiAgICogQHJldHVybnMge01vZGVsfVxuICAgKi9cbiAgc2tNb2RlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5za1Byb3AoQ29tcC5TS19QUk9QUy5NT0RFTCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHByb3AgdmFsdWU6IHByb3AgLT4gc2tQcm9wIC0+IERFRkFVTFQuUFJPUFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ31wcm9wXG4gICAqIEBwYXJhbSB7Kn0gZGVmYXVsdFZhbHVlXG4gICAqIEByZXR1cm5zIHsqfSBNYXliZSB1bmRlZmluZWRcbiAgICovXG4gIHNrUHJvcChwcm9wLCBkZWZhdWx0VmFsdWUgPSB1bmRlZmluZWQpIHtcbiAgICBsZXQgcnRuID0gdGhpcy5wcm9wc1twcm9wXTtcbiAgICBpZiAocnRuID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJ0biA9IHRoaXMucHJvcHNbQ29tcC5TS19QUk9QU19QUkVGSVggKyBTSy51cHBlcldvcmRzRmlyc3RDaGFyKHByb3ApXVxuICAgIH1cbiAgICBpZiAocnRuID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJ0biA9IHRoaXMucHJvcHNbQ29tcC5TS19QUk9QU19QUkVGSVggKyBTSy51cHBlcldvcmRzRmlyc3RDaGFyKENvbXAuU0tfUFJPUFNfU1lTKSArIFNLLnVwcGVyV29yZHNGaXJzdENoYXIocHJvcCldXG4gICAgfVxuICAgIGlmIChydG4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcnRuID0gREVGQVVMVFtTSy51cHBlcldvcmRzRmlyc3RDaGFyKHByb3ApLnJlcGxhY2UoL1tBLVpdL2csICgkMSkgPT4ge1xuICAgICAgICByZXR1cm4gU0suQ0hBUl9VTkRFUkxJTkUgKyAkMTtcbiAgICAgIH0pLnRvVXBwZXJDYXNlKCkuc2xpY2UoMSldXG4gICAgfVxuICAgIHJldHVybiBydG4gPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRWYWx1ZSA6IHJ0bjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2ZlcnJpbmcgcHJvcHMgdG8gY2hpbGRyZW5cbiAgICpcbiAgICogY2hpbGQgKyBza0NoaWxkUHJvcHNUcmFucyhjaGlsZCkgKyB0aGlzLnByb3BzLnNrRmlsdGVyKGZhbHNlLCBDb21wLnNrUHJvcHNGaWx0ZXIpICsgY2hpbGQucHJvcHMuc2tGaWx0ZXIoZmFsc2UsIENvbXAuc2tQcm9wc0ZpbHRlcilcbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdC5DaGlsZHJlbn0gY2hpbGRyZW5cbiAgICogQHJldHVybnMge1JlYWN0LkNoaWxkcmVufVxuICAgKi9cbiAgc2tUcmFuc1Byb3BzMkNoaWxkKGNoaWxkcmVuID0gdW5kZWZpbmVkKSB7XG4gICAgbGV0IHNrUHJvcHMgPSB0aGlzLnByb3BzLnNrRmlsdGVyKGZhbHNlLCBDb21wLnNrUHJvcHNGaWx0ZXIpO1xuICAgIHJldHVybiBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4gPyBjaGlsZHJlbiA6IHRoaXMucHJvcHMuY2hpbGRyZW4sIGNoaWxkID0+IHtcbiAgICAgIGlmIChSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgbGV0IHRtcFByb3BzID0gKFJFQUNULlRBR1tjaGlsZC50eXBlXSAmJiBIVE1MLlBST1BbY2hpbGQudHlwZV0pID8ge30gOiBza1Byb3BzO1xuICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBfLmFzc2lnbih7fSwgdGhpcy5hbGxvd1RyYW5zUHJvcHMyQ2hpbGQoY2hpbGQpLCB0bXBQcm9wcywgY2hpbGQucHJvcHMuc2tGaWx0ZXIoZmFsc2UsIENvbXAuc2tQcm9wc0ZpbHRlcikpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkIHByb3BzIGZvciB0aGlzIGNvbXBcbiAgICpcbiAgICogQHBhcmFtIHtDb21wfHN0cmluZ30gY29tcFxuICAgKiBAcGFyYW0ge29iamVjdH0gcHJvcFxuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKi9cbiAgc2tUcmFuc1Byb3BzMlNlbGYoY29tcCA9IHRoaXMucHJvcHMuY29tcFRhZywgcHJvcCA9IHRoaXMucHJvcHMpIHtcbiAgICBsZXQgdG1wUHJvcHMgPSBSRUFDVC5QLnNrVmFscygpO1xuICAgIHRtcFByb3BzID0gY29tcC5wcm9wVHlwZXMgPyB0bXBQcm9wcy5jb25jYXQoT2JqZWN0LmtleXMoY29tcC5wcm9wVHlwZXMpKSA6IHRtcFByb3BzO1xuICAgIHRtcFByb3BzID0gKGNvbXAudHlwZSAmJiBjb21wLnR5cGUucHJvcFR5cGVzKSA/IHRtcFByb3BzLmNvbmNhdChPYmplY3Qua2V5cyhjb21wLnR5cGUucHJvcFR5cGVzKSkgOiB0bXBQcm9wcztcblxuICAgIHJldHVybiBfLm9taXQoXy5waWNrKHByb3AsIHRtcFByb3BzLmNvbmNhdCh0aGlzLmFsbG93VHJhbnNQcm9wczJTZWxmKCkpKSwgW0NvbXAuU0tfUFJPUFMuQ09NUF9UQUcsIENvbXAuU0tfUFJPUFMuTU9ERUxfSURdLmNvbmNhdCh0aGlzLmRlbnlUcmFuc1Byb3BzMlNlbGYoKSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldC9nZXQgdmFsdWUgZm9yIG1vZGVsSWRcbiAgICpcbiAgICogQHBhcmFtIHsqfSB2YWxcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBza1ZhbCh2YWwpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuc2tNb2RlbCgpLnNrVmFsKHRoaXMuZ2V0TW9kZWxJZCgpLCB2YWwpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnNrTW9kZWwoKS5za1ZhbCh0aGlzLmdldE1vZGVsSWQoKSk7XG4gICAgfVxuICB9XG59XG4iXX0=