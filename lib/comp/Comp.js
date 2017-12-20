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

var _DEFAULT = require('../util/DEFAULT');

var _DEFAULT2 = _interopRequireDefault(_DEFAULT);

var _Model = require('../util/Model');

var _Model2 = _interopRequireDefault(_Model);

var _REACT = require('../util/REACT');

var _REACT2 = _interopRequireDefault(_REACT);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * props:compTag,model(skModel),modelId
 * bfo  ,active(skActive),disabled(skDisabled)
 * func ,m2eConvertor,e2mConvertor,m2vConvertor,v2mConvertor
 * html ,className,role,style
 */
var Comp = function (_Component) {
  _inherits(Comp, _Component);

  function Comp() {
    var _ref;

    _classCallCheck(this, Comp);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Comp.__proto__ || Object.getPrototypeOf(Comp)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'Comp';
    _this.monitors = [];
    _this.updateUI = function (evt) {
      _this.setState({ stateUid: _lodash2.default.uniqueId(Comp.SK_COMP_STATE_ID_PREFIX) });
    };
    return _this;
  }

  /**
   * Assert Model
   *
   * @param props
   * @param propName
   * @param componentName
   * @returns {Error}
   */


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

    //monitor end

    /**
     * @param {React.Component} child
     * @returns {Function}
     */

  }, {
    key: 'allowTransProps2Child',
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
          var tmpProps = _REACT2.default.TAG[child.type] ? {} : skProps;
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
      if (comp.name && _lodash2.default.startsWith(_skJs.SK.s4s(comp.name), Comp.SK_PROPS_PREFIX.toUpperCase())) {
        //SK COMP
        tmpProps = Object.keys(prop);
      } else if (comp.propTypes) {
        //AntD or rc-*
        tmpProps = tmpProps.concat(Object.keys(comp.propTypes));
      }
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
  }], [{
    key: 'IS_PROP_TYPES_MODEL',
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
  READ_ONLY: 'readOnly',
  REQUIRED: 'required', //just paint required icon
  //component monitor list, can be string[reg], string array or object
  MONITOR: 'monitor'
};
Comp.defaultProps = {};
Comp.propTypes = {
  compTag: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func, _propTypes2.default.string]),
  skModel: Comp.IS_PROP_TYPES_MODEL, //Business Model(page), PlainObject
  skSysModel: Comp.IS_PROP_TYPES_MODEL, //System Model(whole of page), PlainObject
  model: Comp.IS_PROP_TYPES_MODEL, //Business Model(part of page), PlainObject
  modelId: _propTypes2.default.string,
  monitor: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array, _propTypes2.default.object]), //monitor is string[reg], array[string] or object of modelId

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvQ29tcC5qcyJdLCJuYW1lcyI6WyJDb21wIiwiYXJncyIsImNvbXBOYW1lIiwibW9uaXRvcnMiLCJ1cGRhdGVVSSIsImV2dCIsInNldFN0YXRlIiwic3RhdGVVaWQiLCJ1bmlxdWVJZCIsIlNLX0NPTVBfU1RBVEVfSURfUFJFRklYIiwiYWRkQWxsQ2hhbmdlZE1vbml0b3IiLCJhZGRFeHRlbmRDaGFuZ2VkTW9uaXRvciIsInJtdkFsbENoYW5nZWRNb25pdG9yIiwicm12RXh0ZW5kQ2hhbmdlZE1vbml0b3IiLCJwYXJzZVNhbyIsInByb3BzIiwibW9uaXRvciIsImZvckVhY2giLCIkaSIsImFkZENoYW5nZWRNb25pdG9yIiwiZ2V0TW9kZWxJZCIsImlkT3JSZWciLCJpc05pbCIsImluZGV4T2YiLCJwdXNoIiwiaXNSZWdFeHAiLCJza01vZGVsIiwiYWRkUmVnQ2hhbmdlZExpc3RlbmVyIiwiYWRkSWRDaGFuZ2VkTGlzdGVuZXIiLCJybXZDaGFuZ2VkTW9uaXRvciIsInJtdlJlZ0NoYW5nZWRMaXN0ZW5lciIsInJtdklkQ2hhbmdlZExpc3RlbmVyIiwic2tSbXYiLCJjaGlsZCIsImJmbyIsImRlZmF1bHRWYWx1ZSIsImlzQm9vbGVhbiIsImlzRnVuY3Rpb24iLCJjYWxsIiwiaXNPYmplY3QiLCJmdW5jIiwiZ2V0RXJyb3JzIiwibW9kZWxJZCIsInNrU3lzTW9kZWwiLCJDb21wVGFnIiwiY29tcFRhZyIsInNrVHJhbnNQcm9wczJTZWxmIiwic2tUcmFuc1Byb3BzMkNoaWxkIiwicHJvcCIsImV4ZWNCZm8iLCJza1Byb3AiLCJTS19QUk9QUyIsIk1PREVMIiwidW5kZWZpbmVkIiwicnRuIiwiU0tfUFJPUFNfUFJFRklYIiwidXBwZXJXb3Jkc0ZpcnN0Q2hhciIsIlNLX1BST1BTX1NZUyIsInJlcGxhY2UiLCIkMSIsIkNIQVJfVU5ERVJMSU5FIiwidG9VcHBlckNhc2UiLCJzbGljZSIsImNoaWxkcmVuIiwic2tQcm9wcyIsInNrRmlsdGVyIiwic2tQcm9wc0ZpbHRlciIsIkNoaWxkcmVuIiwibWFwIiwiaXNWYWxpZEVsZW1lbnQiLCJ0bXBQcm9wcyIsIlRBRyIsInR5cGUiLCJjbG9uZUVsZW1lbnQiLCJhc3NpZ24iLCJhbGxvd1RyYW5zUHJvcHMyQ2hpbGQiLCJjb21wIiwiUCIsInNrVmFscyIsIm5hbWUiLCJzdGFydHNXaXRoIiwiczRzIiwiT2JqZWN0Iiwia2V5cyIsInByb3BUeXBlcyIsImNvbmNhdCIsIm9taXQiLCJwaWNrIiwiYWxsb3dUcmFuc1Byb3BzMlNlbGYiLCJDT01QX1RBRyIsIk1PREVMX0lEIiwiZGVueVRyYW5zUHJvcHMyU2VsZiIsInZhbCIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNrVmFsIiwicHJvcE5hbWUiLCJjb21wb25lbnROYW1lIiwiRXJyb3IiLCJrIiwiQUNUSVZFIiwiRElTQUJMRUQiLCJISURERU4iLCJQUkVWSUVXIiwiUkVBRF9PTkxZIiwiUkVRVUlSRUQiLCJNT05JVE9SIiwiZGVmYXVsdFByb3BzIiwib25lT2ZUeXBlIiwiZWxlbWVudCIsInN0cmluZyIsIklTX1BST1BfVFlQRVNfTU9ERUwiLCJtb2RlbCIsImFycmF5Iiwib2JqZWN0IiwiYWN0aXZlIiwiYm9vbCIsInNrQWN0aXZlIiwiZGlzYWJsZWQiLCJza0Rpc2FibGVkIiwiaGlkZGVuIiwic2tIaWRkZW4iLCJwcmV2aWV3Iiwic2tQcmV2aWV3IiwicmVhZE9ubHkiLCJza1JlYWRPbmx5IiwicmVxdWlyZWQiLCJza1JlcXVpcmVkIiwibTJlQ29udmVydG9yIiwiZTJtQ29udmVydG9yIiwibTJ2Q29udmVydG9yIiwidjJtQ29udmVydG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7OztJQU1xQkEsSTs7O0FBeUduQixrQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsdUlBQ1ZBLElBRFU7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RTNCLG9CQUFVNUUsSUFGaUIsRUFHM0Isb0JBQVUwRSxNQUhpQixDQUFwQixDQTlDUTtBQW1EakJTLGFBQVcsb0JBQVVmLFNBQVYsQ0FBb0IsQ0FDN0Isb0JBQVVRLElBRG1CLEVBRTdCLG9CQUFVNUUsSUFGbUIsRUFHN0Isb0JBQVUwRSxNQUhtQixDQUFwQixDQW5ETTtBQXdEakJVLFlBQVUsb0JBQVVoQixTQUFWLENBQW9CLENBQzVCLG9CQUFVUSxJQURrQixFQUU1QixvQkFBVTVFLElBRmtCLEVBRzVCLG9CQUFVMEUsTUFIa0IsQ0FBcEIsQ0F4RE87QUE2RGpCVyxjQUFZLG9CQUFVakIsU0FBVixDQUFvQixDQUM5QixvQkFBVVEsSUFEb0IsRUFFOUIsb0JBQVU1RSxJQUZvQixFQUc5QixvQkFBVTBFLE1BSG9CLENBQXBCLENBN0RLO0FBa0VqQlksWUFBVSxvQkFBVWxCLFNBQVYsQ0FBb0IsQ0FDNUIsb0JBQVVRLElBRGtCLEVBRTVCLG9CQUFVNUUsSUFGa0IsRUFHNUIsb0JBQVUwRSxNQUhrQixDQUFwQixDQWxFTztBQXVFakJhLGNBQVksb0JBQVVuQixTQUFWLENBQW9CLENBQzlCLG9CQUFVUSxJQURvQixFQUU5QixvQkFBVTVFLElBRm9CLEVBRzlCLG9CQUFVMEUsTUFIb0IsQ0FBcEIsQ0F2RUs7O0FBNkVqQmMsZ0JBQWMsb0JBQVV4RixJQTdFUCxFQTZFWTtBQUM3QnlGLGdCQUFjLG9CQUFVekYsSUE5RVAsRUE4RVk7QUFDN0IwRixnQkFBYyxvQkFBVTFGLElBL0VQLEVBK0VZO0FBQzdCMkYsZ0JBQWMsb0JBQVUzRixJQWhGUCxDQWdGVztBQWhGWCxDO2tCQXJCQXhDLEkiLCJmaWxlIjoiY29tcC9Db21wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U0t9IGZyb20gJ3NrLWpzJztcbmltcG9ydCBERUZBVUxUIGZyb20gJy4uL3V0aWwvREVGQVVMVCc7XG5pbXBvcnQgTW9kZWwgZnJvbSAnLi4vdXRpbC9Nb2RlbCc7XG5pbXBvcnQgUkVBQ1QgZnJvbSAnLi4vdXRpbC9SRUFDVCc7XG5cbi8qKlxuICogcHJvcHM6Y29tcFRhZyxtb2RlbChza01vZGVsKSxtb2RlbElkXG4gKiBiZm8gICxhY3RpdmUoc2tBY3RpdmUpLGRpc2FibGVkKHNrRGlzYWJsZWQpXG4gKiBmdW5jICxtMmVDb252ZXJ0b3IsZTJtQ29udmVydG9yLG0ydkNvbnZlcnRvcix2Mm1Db252ZXJ0b3JcbiAqIGh0bWwgLGNsYXNzTmFtZSxyb2xlLHN0eWxlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgU0tfQ09NUF9TVEFURV9JRF9QUkVGSVggPSAnc2tDb21wU3RhdGVVaWQnO1xuICBzdGF0aWMgU0tfUFJPUFNfUFJFRklYID0gJ3NrJztcbiAgc3RhdGljIFNLX1BST1BTX1NZUyA9ICdzeXMnO1xuICBzdGF0aWMgU0tfUFJPUFMgPSB7XG4gICAgLy9za1xuICAgIENPTVBfVEFHOiAnY29tcFRhZycsXG4gICAgTU9ERUw6ICdtb2RlbCcsXG4gICAgTU9ERUxfSUQ6ICdtb2RlbElkJyxcbiAgICAvL3VpIHN0YXRlLCBhcmUgYmZvIChib29sZWFuLCBmdW5jdGlvbiwgb2JqZWN0e2RlcHM6LGZ1bmM6fSlcbiAgICAvL2RlcHMgdG8gbW9uaXRvclxuICAgIEFDVElWRTogJ2FjdGl2ZScsXG4gICAgRElTQUJMRUQ6ICdkaXNhYmxlZCcsXG4gICAgSElEREVOOiAnaGlkZGVuJyxcbiAgICBQUkVWSUVXOiAncHJldmlldycsXG4gICAgUkVBRF9PTkxZOiAncmVhZE9ubHknLFxuICAgIFJFUVVJUkVEOiAncmVxdWlyZWQnLC8vanVzdCBwYWludCByZXF1aXJlZCBpY29uXG4gICAgLy9jb21wb25lbnQgbW9uaXRvciBsaXN0LCBjYW4gYmUgc3RyaW5nW3JlZ10sIHN0cmluZyBhcnJheSBvciBvYmplY3RcbiAgICBNT05JVE9SOiAnbW9uaXRvcidcbiAgfTtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHt9O1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNvbXBUYWc6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIFByb3BUeXBlcy5zdHJpbmdcbiAgICBdKSxcbiAgICBza01vZGVsOiBDb21wLklTX1BST1BfVFlQRVNfTU9ERUwsLy9CdXNpbmVzcyBNb2RlbChwYWdlKSwgUGxhaW5PYmplY3RcbiAgICBza1N5c01vZGVsOiBDb21wLklTX1BST1BfVFlQRVNfTU9ERUwsLy9TeXN0ZW0gTW9kZWwod2hvbGUgb2YgcGFnZSksIFBsYWluT2JqZWN0XG4gICAgbW9kZWw6IENvbXAuSVNfUFJPUF9UWVBFU19NT0RFTCwvL0J1c2luZXNzIE1vZGVsKHBhcnQgb2YgcGFnZSksIFBsYWluT2JqZWN0XG4gICAgbW9kZWxJZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBtb25pdG9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBQcm9wVHlwZXMuYXJyYXksXG4gICAgICBQcm9wVHlwZXMub2JqZWN0XG4gICAgXSksLy9tb25pdG9yIGlzIHN0cmluZ1tyZWddLCBhcnJheVtzdHJpbmddIG9yIG9iamVjdCBvZiBtb2RlbElkXG5cbiAgICBhY3RpdmU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmJvb2wsXG4gICAgICBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIFByb3BUeXBlcy5vYmplY3RcbiAgICBdKSxcbiAgICBza0FjdGl2ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIFByb3BUeXBlcy5mdW5jLFxuICAgICAgUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5ib29sLFxuICAgICAgUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBQcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgc2tEaXNhYmxlZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIFByb3BUeXBlcy5mdW5jLFxuICAgICAgUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIGhpZGRlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIFByb3BUeXBlcy5mdW5jLFxuICAgICAgUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIHNrSGlkZGVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5ib29sLFxuICAgICAgUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBQcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgcHJldmlldzogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIFByb3BUeXBlcy5mdW5jLFxuICAgICAgUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIHNrUHJldmlldzogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIFByb3BUeXBlcy5mdW5jLFxuICAgICAgUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIHJlYWRPbmx5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5ib29sLFxuICAgICAgUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBQcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgc2tSZWFkT25seTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIFByb3BUeXBlcy5mdW5jLFxuICAgICAgUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIHJlcXVpcmVkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5ib29sLFxuICAgICAgUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBQcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgc2tSZXF1aXJlZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIFByb3BUeXBlcy5mdW5jLFxuICAgICAgUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuXG4gICAgbTJlQ29udmVydG9yOiBQcm9wVHlwZXMuZnVuYywvL01vZGVsIDIgRWRpdGluZ1xuICAgIGUybUNvbnZlcnRvcjogUHJvcFR5cGVzLmZ1bmMsLy9FZGl0aW5nIDIgTW9kZWxcbiAgICBtMnZDb252ZXJ0b3I6IFByb3BUeXBlcy5mdW5jLC8vTW9kZWwgMiBWaWV3LCBsaWtlIERhdGUgQ29tcCwgbW9tZW50IGZvcm1hdCB0byB2aWV3OiBZWVlZLU1NLUREVEhIOm1tOnNzLlNTU1ogLT4gWVlZWS1NTS1ERFxuICAgIHYybUNvbnZlcnRvcjogUHJvcFR5cGVzLmZ1bmMvL1ZpZXcgMiBNb2RlbCwgbGlrZSBDaGVjayBDb21wLCB0cnVlIGlzIGNoZWNrZWQ6IHRydWUgLT4gMSwgZmFsc2UgLT4gMFxuICB9O1xuXG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnQ29tcCc7XG4gICAgdGhpcy5tb25pdG9ycyA9IFtdO1xuICAgIHRoaXMudXBkYXRlVUkgPSAoZXZ0KSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtzdGF0ZVVpZDogXy51bmlxdWVJZChDb21wLlNLX0NPTVBfU1RBVEVfSURfUFJFRklYKX0pO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQXNzZXJ0IE1vZGVsXG4gICAqXG4gICAqIEBwYXJhbSBwcm9wc1xuICAgKiBAcGFyYW0gcHJvcE5hbWVcbiAgICogQHBhcmFtIGNvbXBvbmVudE5hbWVcbiAgICogQHJldHVybnMge0Vycm9yfVxuICAgKi9cbiAgc3RhdGljIElTX1BST1BfVFlQRVNfTU9ERUwocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAgaWYgKHByb3BzW3Byb3BOYW1lXSAmJiAhKHByb3BzW3Byb3BOYW1lXSBpbnN0YW5jZW9mIE1vZGVsKSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignVGhlIFsnICsgY29tcG9uZW50TmFtZSArICddXFwncyBbJyArIHByb3BOYW1lICsgJ10gaXMgbm90IGEgbW9kZWwhJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpbHRlciBzayBwcm9wc1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gayBrZXkvaW5kZXhcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgc2tQcm9wc0ZpbHRlcihrKSB7XG4gICAgcmV0dXJuIF8uc3RhcnRzV2l0aChTSy5zNHMoayksIENvbXAuU0tfUFJPUFNfUFJFRklYKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vc3VwZXIuY29tcG9uZW50RGlkTW91bnQoKTtcbiAgICB0aGlzLmFkZEFsbENoYW5nZWRNb25pdG9yKCk7XG4gICAgdGhpcy5hZGRFeHRlbmRDaGFuZ2VkTW9uaXRvcigpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVwZGF0ZSgpIHtcbiAgICB0aGlzLnJtdkFsbENoYW5nZWRNb25pdG9yKCk7XG4gICAgdGhpcy5ybXZFeHRlbmRDaGFuZ2VkTW9uaXRvcigpO1xuICAgIC8vc3VwZXIuY29tcG9uZW50V2lsbFVwZGF0ZSgpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIC8vc3VwZXIuY29tcG9uZW50RGlkVXBkYXRlKCk7XG4gICAgdGhpcy5hZGRBbGxDaGFuZ2VkTW9uaXRvcigpO1xuICAgIHRoaXMuYWRkRXh0ZW5kQ2hhbmdlZE1vbml0b3IoKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucm12QWxsQ2hhbmdlZE1vbml0b3IoKTtcbiAgICB0aGlzLnJtdkV4dGVuZENoYW5nZWRNb25pdG9yKCk7XG4gICAgLy9zdXBlci5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuICB9XG5cbiAgYWRkRXh0ZW5kQ2hhbmdlZE1vbml0b3IoKSB7XG5cbiAgfVxuXG4gIHJtdkV4dGVuZENoYW5nZWRNb25pdG9yKCkge1xuXG4gIH1cblxuICAvL21vbml0b3IgYmVnaW5cbiAgYWRkQWxsQ2hhbmdlZE1vbml0b3IoKSB7XG4gICAgTW9kZWwucGFyc2VTYW8odGhpcy5wcm9wcy5tb25pdG9yKS5mb3JFYWNoKCgkaSkgPT4ge1xuICAgICAgdGhpcy5hZGRDaGFuZ2VkTW9uaXRvcigkaSk7XG4gICAgfSk7XG4gICAgLy9TZWxmIHZhbHVlIG1vbml0b3JcbiAgICBpZiAodGhpcy5nZXRNb2RlbElkKCkpIHtcbiAgICAgIHRoaXMuYWRkQ2hhbmdlZE1vbml0b3IodGhpcy5nZXRNb2RlbElkKCkpO1xuICAgIH1cbiAgfVxuXG4gIGFkZENoYW5nZWRNb25pdG9yKGlkT3JSZWcpIHtcbiAgICBpZiAoIV8uaXNOaWwoaWRPclJlZykpIHtcbiAgICAgIGlmICh0aGlzLm1vbml0b3JzLmluZGV4T2YoaWRPclJlZykgPCAwKSB7XG4gICAgICAgIHRoaXMubW9uaXRvcnMucHVzaChpZE9yUmVnKTtcbiAgICAgIH1cbiAgICAgIGlmIChfLmlzUmVnRXhwKGlkT3JSZWcpKSB7XG4gICAgICAgIHRoaXMuc2tNb2RlbCgpLmFkZFJlZ0NoYW5nZWRMaXN0ZW5lcihpZE9yUmVnLCB0aGlzLnVwZGF0ZVVJKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2tNb2RlbCgpLmFkZElkQ2hhbmdlZExpc3RlbmVyKGlkT3JSZWcsIHRoaXMudXBkYXRlVUkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJtdkFsbENoYW5nZWRNb25pdG9yKCkge1xuICAgIHRoaXMubW9uaXRvcnMuZm9yRWFjaCgoJGkpID0+IHtcbiAgICAgIHRoaXMucm12Q2hhbmdlZE1vbml0b3IoJGkpO1xuICAgIH0pO1xuICB9XG5cbiAgcm12Q2hhbmdlZE1vbml0b3IoaWRPclJlZykge1xuICAgIGlmIChfLmlzUmVnRXhwKGlkT3JSZWcpKSB7XG4gICAgICB0aGlzLnNrTW9kZWwoKS5ybXZSZWdDaGFuZ2VkTGlzdGVuZXIoaWRPclJlZywgdGhpcy51cGRhdGVVSSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2tNb2RlbCgpLnJtdklkQ2hhbmdlZExpc3RlbmVyKGlkT3JSZWcsIHRoaXMudXBkYXRlVUkpXG4gICAgfVxuICAgIHRoaXMubW9uaXRvcnMuc2tSbXYoaWRPclJlZyk7XG4gIH1cblxuICAvL21vbml0b3IgZW5kXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7UmVhY3QuQ29tcG9uZW50fSBjaGlsZFxuICAgKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gICAqL1xuICBhbGxvd1RyYW5zUHJvcHMyQ2hpbGQoY2hpbGQpIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICBhbGxvd1RyYW5zUHJvcHMyU2VsZigpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBkZW55VHJhbnNQcm9wczJTZWxmKCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGJvb2xlYW4gdmFsdWUgb2YgYm9vbGVhbiwgZnVuY3Rpb24gb3Igb2JqZWN0IHdpdGggc2tXaGVuIHByb3BlcnRpZXNcbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufGZ1bmN0aW9ufG9iamVjdH0gYmZvXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZGVmYXVsdFZhbHVlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZXhlY0JmbyhiZm8sIGRlZmF1bHRWYWx1ZSA9IGZhbHNlKSB7XG4gICAgaWYgKF8uaXNCb29sZWFuKGJmbykpIHtcbiAgICAgIHJldHVybiBiZm87XG4gICAgfSBlbHNlIGlmIChfLmlzRnVuY3Rpb24oYmZvKSkge1xuICAgICAgcmV0dXJuIGJmby5jYWxsKHRoaXMpO1xuICAgIH0gZWxzZSBpZiAoXy5pc09iamVjdChiZm8pICYmIF8uaXNGdW5jdGlvbihiZm8uZnVuYykpIHtcbiAgICAgIHJldHVybiBiZm8uZnVuYy5jYWxsKHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGdldEVycm9ycygpIHtcbiAgICByZXR1cm4gdGhpcy5za01vZGVsKCkuZ2V0RXJyb3JzKHRoaXMuZ2V0TW9kZWxJZCgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbW9kZWxJZDogeC54eC54eHhcbiAgICpcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGdldE1vZGVsSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMubW9kZWxJZDtcbiAgfVxuXG4gIGdldFN5c01vZGVsKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnNrU3lzTW9kZWw7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtjb21wVGFnOiBDb21wVGFnfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBUYWcgey4uLnRoaXMuc2tUcmFuc1Byb3BzMlNlbGYoQ29tcFRhZyl9PlxuICAgICAgICB7dGhpcy5za1RyYW5zUHJvcHMyQ2hpbGQoKX1cbiAgICAgIDwvQ29tcFRhZz5cbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEBzZWUgQ29tcC5leGVjQmZvXG4gICAqL1xuICBza0Jmbyhwcm9wLCBkZWZhdWx0VmFsdWUgPSBmYWxzZSkge1xuICAgIHJldHVybiB0aGlzLmV4ZWNCZm8odGhpcy5za1Byb3AocHJvcCwgZGVmYXVsdFZhbHVlKSlcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbW9kZWwgaWYgZXhpc3QsIGVsc2Ugc2tNb2RlbFxuICAgKlxuICAgKiBAcmV0dXJucyB7TW9kZWx9XG4gICAqL1xuICBza01vZGVsKCkge1xuICAgIHJldHVybiB0aGlzLnNrUHJvcChDb21wLlNLX1BST1BTLk1PREVMKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcHJvcCB2YWx1ZTogcHJvcCAtPiBza1Byb3AgLT4gREVGQVVMVC5QUk9QXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfXByb3BcbiAgICogQHBhcmFtIHsqfSBkZWZhdWx0VmFsdWVcbiAgICogQHJldHVybnMgeyp9IE1heWJlIHVuZGVmaW5lZFxuICAgKi9cbiAgc2tQcm9wKHByb3AsIGRlZmF1bHRWYWx1ZSA9IHVuZGVmaW5lZCkge1xuICAgIGxldCBydG4gPSB0aGlzLnByb3BzW3Byb3BdO1xuICAgIGlmIChydG4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcnRuID0gdGhpcy5wcm9wc1tDb21wLlNLX1BST1BTX1BSRUZJWCArIFNLLnVwcGVyV29yZHNGaXJzdENoYXIocHJvcCldXG4gICAgfVxuICAgIGlmIChydG4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcnRuID0gdGhpcy5wcm9wc1tDb21wLlNLX1BST1BTX1BSRUZJWCArIFNLLnVwcGVyV29yZHNGaXJzdENoYXIoQ29tcC5TS19QUk9QU19TWVMpICsgU0sudXBwZXJXb3Jkc0ZpcnN0Q2hhcihwcm9wKV1cbiAgICB9XG4gICAgaWYgKHJ0biA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBydG4gPSBERUZBVUxUW1NLLnVwcGVyV29yZHNGaXJzdENoYXIocHJvcCkucmVwbGFjZSgvW0EtWl0vZywgKCQxKSA9PiB7XG4gICAgICAgIHJldHVybiBTSy5DSEFSX1VOREVSTElORSArICQxO1xuICAgICAgfSkudG9VcHBlckNhc2UoKS5zbGljZSgxKV1cbiAgICB9XG4gICAgcmV0dXJuIHJ0biA9PT0gdW5kZWZpbmVkID8gZGVmYXVsdFZhbHVlIDogcnRuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZmVycmluZyBwcm9wcyB0byBjaGlsZHJlblxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0LkNoaWxkcmVufSBjaGlsZHJlblxuICAgKiBAcmV0dXJucyB7UmVhY3QuQ2hpbGRyZW59XG4gICAqL1xuICBza1RyYW5zUHJvcHMyQ2hpbGQoY2hpbGRyZW4gPSB1bmRlZmluZWQpIHtcbiAgICBsZXQgc2tQcm9wcyA9IHRoaXMucHJvcHMuc2tGaWx0ZXIoZmFsc2UsIENvbXAuc2tQcm9wc0ZpbHRlcik7XG4gICAgcmV0dXJuIFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiA/IGNoaWxkcmVuIDogdGhpcy5wcm9wcy5jaGlsZHJlbiwgY2hpbGQgPT4ge1xuICAgICAgaWYgKFJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICBsZXQgdG1wUHJvcHMgPSBSRUFDVC5UQUdbY2hpbGQudHlwZV0gPyB7fSA6IHNrUHJvcHM7XG4gICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIF8uYXNzaWduKHt9LCB0aGlzLmFsbG93VHJhbnNQcm9wczJDaGlsZChjaGlsZCksIHRtcFByb3BzLCBjaGlsZC5wcm9wcy5za0ZpbHRlcihmYWxzZSwgQ29tcC5za1Byb3BzRmlsdGVyKSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogVmFsaWQgcHJvcHMgZm9yIHRoaXMgY29tcFxuICAgKlxuICAgKiBAcGFyYW0ge0NvbXB8c3RyaW5nfSBjb21wXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqL1xuICBza1RyYW5zUHJvcHMyU2VsZihjb21wID0gdGhpcy5wcm9wcy5jb21wVGFnLCBwcm9wID0gdGhpcy5wcm9wcykge1xuICAgIGxldCB0bXBQcm9wcyA9IFJFQUNULlAuc2tWYWxzKCk7XG4gICAgaWYgKGNvbXAubmFtZSAmJiBfLnN0YXJ0c1dpdGgoU0suczRzKGNvbXAubmFtZSksIENvbXAuU0tfUFJPUFNfUFJFRklYLnRvVXBwZXJDYXNlKCkpKSB7XG4gICAgICAvL1NLIENPTVBcbiAgICAgIHRtcFByb3BzID0gT2JqZWN0LmtleXMocHJvcCk7XG4gICAgfSBlbHNlIGlmIChjb21wLnByb3BUeXBlcykge1xuICAgICAgLy9BbnREIG9yIHJjLSpcbiAgICAgIHRtcFByb3BzID0gdG1wUHJvcHMuY29uY2F0KE9iamVjdC5rZXlzKGNvbXAucHJvcFR5cGVzKSk7XG4gICAgfVxuICAgIHJldHVybiBfLm9taXQoXy5waWNrKHByb3AsIHRtcFByb3BzLmNvbmNhdCh0aGlzLmFsbG93VHJhbnNQcm9wczJTZWxmKCkpKSwgW0NvbXAuU0tfUFJPUFMuQ09NUF9UQUcsIENvbXAuU0tfUFJPUFMuTU9ERUxfSURdLmNvbmNhdCh0aGlzLmRlbnlUcmFuc1Byb3BzMlNlbGYoKSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldC9nZXQgdmFsdWUgZm9yIG1vZGVsSWRcbiAgICpcbiAgICogQHBhcmFtIHsqfSB2YWxcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBza1ZhbCh2YWwpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuc2tNb2RlbCgpLnNrVmFsKHRoaXMuZ2V0TW9kZWxJZCgpLCB2YWwpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnNrTW9kZWwoKS5za1ZhbCh0aGlzLmdldE1vZGVsSWQoKSk7XG4gICAgfVxuICB9XG59XG4iXX0=