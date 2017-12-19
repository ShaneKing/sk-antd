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

      var tmpProps = _REACT2.default.TAG[comp] ? _lodash2.default.pick(prop, _REACT2.default.P.skVals().concat(this.allowTransProps2Self())) : prop;
      return _lodash2.default.omit(tmpProps, [Comp.SK_PROPS.COMP_TAG, Comp.SK_PROPS.MODEL_ID].concat(this.denyTransProps2Self()));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvQ29tcC5qcyJdLCJuYW1lcyI6WyJDb21wIiwiYXJncyIsImNvbXBOYW1lIiwibW9uaXRvcnMiLCJ1cGRhdGVVSSIsImV2dCIsInNldFN0YXRlIiwic3RhdGVVaWQiLCJ1bmlxdWVJZCIsIlNLX0NPTVBfU1RBVEVfSURfUFJFRklYIiwiYWRkQWxsQ2hhbmdlZE1vbml0b3IiLCJhZGRFeHRlbmRDaGFuZ2VkTW9uaXRvciIsInJtdkFsbENoYW5nZWRNb25pdG9yIiwicm12RXh0ZW5kQ2hhbmdlZE1vbml0b3IiLCJwYXJzZVNhbyIsInByb3BzIiwibW9uaXRvciIsImZvckVhY2giLCIkaSIsImFkZENoYW5nZWRNb25pdG9yIiwiZ2V0TW9kZWxJZCIsImlkT3JSZWciLCJpc05pbCIsImluZGV4T2YiLCJwdXNoIiwiaXNSZWdFeHAiLCJza01vZGVsIiwiYWRkUmVnQ2hhbmdlZExpc3RlbmVyIiwiYWRkSWRDaGFuZ2VkTGlzdGVuZXIiLCJybXZDaGFuZ2VkTW9uaXRvciIsInJtdlJlZ0NoYW5nZWRMaXN0ZW5lciIsInJtdklkQ2hhbmdlZExpc3RlbmVyIiwic2tSbXYiLCJjaGlsZCIsImJmbyIsImRlZmF1bHRWYWx1ZSIsImlzQm9vbGVhbiIsImlzRnVuY3Rpb24iLCJjYWxsIiwiaXNPYmplY3QiLCJmdW5jIiwiZ2V0RXJyb3JzIiwibW9kZWxJZCIsInNrU3lzTW9kZWwiLCJDb21wVGFnIiwiY29tcFRhZyIsInNrVHJhbnNQcm9wczJTZWxmIiwic2tUcmFuc1Byb3BzMkNoaWxkIiwicHJvcCIsImV4ZWNCZm8iLCJza1Byb3AiLCJTS19QUk9QUyIsIk1PREVMIiwidW5kZWZpbmVkIiwicnRuIiwiU0tfUFJPUFNfUFJFRklYIiwidXBwZXJXb3Jkc0ZpcnN0Q2hhciIsIlNLX1BST1BTX1NZUyIsInJlcGxhY2UiLCIkMSIsIkNIQVJfVU5ERVJMSU5FIiwidG9VcHBlckNhc2UiLCJzbGljZSIsImNoaWxkcmVuIiwic2tQcm9wcyIsInNrRmlsdGVyIiwic2tQcm9wc0ZpbHRlciIsIkNoaWxkcmVuIiwibWFwIiwiaXNWYWxpZEVsZW1lbnQiLCJ0bXBQcm9wcyIsIlRBRyIsInR5cGUiLCJjbG9uZUVsZW1lbnQiLCJhc3NpZ24iLCJhbGxvd1RyYW5zUHJvcHMyQ2hpbGQiLCJjb21wIiwicGljayIsIlAiLCJza1ZhbHMiLCJjb25jYXQiLCJhbGxvd1RyYW5zUHJvcHMyU2VsZiIsIm9taXQiLCJDT01QX1RBRyIsIk1PREVMX0lEIiwiZGVueVRyYW5zUHJvcHMyU2VsZiIsInZhbCIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNrVmFsIiwicHJvcE5hbWUiLCJjb21wb25lbnROYW1lIiwiRXJyb3IiLCJrIiwic3RhcnRzV2l0aCIsInM0cyIsIkFDVElWRSIsIkRJU0FCTEVEIiwiSElEREVOIiwiUFJFVklFVyIsIlJFQURfT05MWSIsIlJFUVVJUkVEIiwiTU9OSVRPUiIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIm9uZU9mVHlwZSIsImVsZW1lbnQiLCJzdHJpbmciLCJJU19QUk9QX1RZUEVTX01PREVMIiwibW9kZWwiLCJhcnJheSIsIm9iamVjdCIsImFjdGl2ZSIsImJvb2wiLCJza0FjdGl2ZSIsImRpc2FibGVkIiwic2tEaXNhYmxlZCIsImhpZGRlbiIsInNrSGlkZGVuIiwicHJldmlldyIsInNrUHJldmlldyIsInJlYWRPbmx5Iiwic2tSZWFkT25seSIsInJlcXVpcmVkIiwic2tSZXF1aXJlZCIsIm0yZUNvbnZlcnRvciIsImUybUNvbnZlcnRvciIsIm0ydkNvbnZlcnRvciIsInYybUNvbnZlcnRvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7SUFNcUJBLEk7OztBQXlHbkIsa0JBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLHVJQUNWQSxJQURVOztBQUVuQixVQUFLQyxRQUFMLEdBQWdC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QixTQUFWLENBQW9CLENBQzlCLG9CQUFVUSxJQURvQixFQUU5QixvQkFBVXpFLElBRm9CLEVBRzlCLG9CQUFVdUUsTUFIb0IsQ0FBcEIsQ0E3REs7QUFrRWpCWSxZQUFVLG9CQUFVbEIsU0FBVixDQUFvQixDQUM1QixvQkFBVVEsSUFEa0IsRUFFNUIsb0JBQVV6RSxJQUZrQixFQUc1QixvQkFBVXVFLE1BSGtCLENBQXBCLENBbEVPO0FBdUVqQmEsY0FBWSxvQkFBVW5CLFNBQVYsQ0FBb0IsQ0FDOUIsb0JBQVVRLElBRG9CLEVBRTlCLG9CQUFVekUsSUFGb0IsRUFHOUIsb0JBQVV1RSxNQUhvQixDQUFwQixDQXZFSzs7QUE2RWpCYyxnQkFBYyxvQkFBVXJGLElBN0VQLEVBNkVZO0FBQzdCc0YsZ0JBQWMsb0JBQVV0RixJQTlFUCxFQThFWTtBQUM3QnVGLGdCQUFjLG9CQUFVdkYsSUEvRVAsRUErRVk7QUFDN0J3RixnQkFBYyxvQkFBVXhGLElBaEZQLENBZ0ZXO0FBaEZYLEM7a0JBckJBeEMsSSIsImZpbGUiOiJjb21wL0NvbXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTS30gZnJvbSAnc2stanMnO1xuaW1wb3J0IERFRkFVTFQgZnJvbSAnLi4vdXRpbC9ERUZBVUxUJztcbmltcG9ydCBNb2RlbCBmcm9tICcuLi91dGlsL01vZGVsJztcbmltcG9ydCBSRUFDVCBmcm9tICcuLi91dGlsL1JFQUNUJztcblxuLyoqXG4gKiBwcm9wczpjb21wVGFnLG1vZGVsKHNrTW9kZWwpLG1vZGVsSWRcbiAqIGJmbyAgLGFjdGl2ZShza0FjdGl2ZSksZGlzYWJsZWQoc2tEaXNhYmxlZClcbiAqIGZ1bmMgLG0yZUNvbnZlcnRvcixlMm1Db252ZXJ0b3IsbTJ2Q29udmVydG9yLHYybUNvbnZlcnRvclxuICogaHRtbCAsY2xhc3NOYW1lLHJvbGUsc3R5bGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBTS19DT01QX1NUQVRFX0lEX1BSRUZJWCA9ICdza0NvbXBTdGF0ZVVpZCc7XG4gIHN0YXRpYyBTS19QUk9QU19QUkVGSVggPSAnc2snO1xuICBzdGF0aWMgU0tfUFJPUFNfU1lTID0gJ3N5cyc7XG4gIHN0YXRpYyBTS19QUk9QUyA9IHtcbiAgICAvL3NrXG4gICAgQ09NUF9UQUc6ICdjb21wVGFnJyxcbiAgICBNT0RFTDogJ21vZGVsJyxcbiAgICBNT0RFTF9JRDogJ21vZGVsSWQnLFxuICAgIC8vdWkgc3RhdGUsIGFyZSBiZm8gKGJvb2xlYW4sIGZ1bmN0aW9uLCBvYmplY3R7ZGVwczosZnVuYzp9KVxuICAgIC8vZGVwcyB0byBtb25pdG9yXG4gICAgQUNUSVZFOiAnYWN0aXZlJyxcbiAgICBESVNBQkxFRDogJ2Rpc2FibGVkJyxcbiAgICBISURERU46ICdoaWRkZW4nLFxuICAgIFBSRVZJRVc6ICdwcmV2aWV3JyxcbiAgICBSRUFEX09OTFk6ICdyZWFkT25seScsXG4gICAgUkVRVUlSRUQ6ICdyZXF1aXJlZCcsLy9qdXN0IHBhaW50IHJlcXVpcmVkIGljb25cbiAgICAvL2NvbXBvbmVudCBtb25pdG9yIGxpc3QsIGNhbiBiZSBzdHJpbmdbcmVnXSwgc3RyaW5nIGFycmF5IG9yIG9iamVjdFxuICAgIE1PTklUT1I6ICdtb25pdG9yJ1xuICB9O1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge307XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY29tcFRhZzogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgIFByb3BUeXBlcy5mdW5jLFxuICAgICAgUHJvcFR5cGVzLnN0cmluZ1xuICAgIF0pLFxuICAgIHNrTW9kZWw6IENvbXAuSVNfUFJPUF9UWVBFU19NT0RFTCwvL0J1c2luZXNzIE1vZGVsKHBhZ2UpLCBQbGFpbk9iamVjdFxuICAgIHNrU3lzTW9kZWw6IENvbXAuSVNfUFJPUF9UWVBFU19NT0RFTCwvL1N5c3RlbSBNb2RlbCh3aG9sZSBvZiBwYWdlKSwgUGxhaW5PYmplY3RcbiAgICBtb2RlbDogQ29tcC5JU19QUk9QX1RZUEVTX01PREVMLC8vQnVzaW5lc3MgTW9kZWwocGFydCBvZiBwYWdlKSwgUGxhaW5PYmplY3RcbiAgICBtb2RlbElkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG1vbml0b3I6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIFByb3BUeXBlcy5hcnJheSxcbiAgICAgIFByb3BUeXBlcy5vYmplY3RcbiAgICBdKSwvL21vbml0b3IgaXMgc3RyaW5nW3JlZ10sIGFycmF5W3N0cmluZ10gb3Igb2JqZWN0IG9mIG1vZGVsSWRcblxuICAgIGFjdGl2ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIFByb3BUeXBlcy5mdW5jLFxuICAgICAgUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIHNrQWN0aXZlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5ib29sLFxuICAgICAgUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBQcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmJvb2wsXG4gICAgICBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIFByb3BUeXBlcy5vYmplY3RcbiAgICBdKSxcbiAgICBza0Rpc2FibGVkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5ib29sLFxuICAgICAgUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBQcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgaGlkZGVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5ib29sLFxuICAgICAgUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBQcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgc2tIaWRkZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmJvb2wsXG4gICAgICBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIFByb3BUeXBlcy5vYmplY3RcbiAgICBdKSxcbiAgICBwcmV2aWV3OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5ib29sLFxuICAgICAgUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBQcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgc2tQcmV2aWV3OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5ib29sLFxuICAgICAgUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBQcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgcmVhZE9ubHk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmJvb2wsXG4gICAgICBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIFByb3BUeXBlcy5vYmplY3RcbiAgICBdKSxcbiAgICBza1JlYWRPbmx5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5ib29sLFxuICAgICAgUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBQcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgcmVxdWlyZWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmJvb2wsXG4gICAgICBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIFByb3BUeXBlcy5vYmplY3RcbiAgICBdKSxcbiAgICBza1JlcXVpcmVkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5ib29sLFxuICAgICAgUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBQcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG5cbiAgICBtMmVDb252ZXJ0b3I6IFByb3BUeXBlcy5mdW5jLC8vTW9kZWwgMiBFZGl0aW5nXG4gICAgZTJtQ29udmVydG9yOiBQcm9wVHlwZXMuZnVuYywvL0VkaXRpbmcgMiBNb2RlbFxuICAgIG0ydkNvbnZlcnRvcjogUHJvcFR5cGVzLmZ1bmMsLy9Nb2RlbCAyIFZpZXcsIGxpa2UgRGF0ZSBDb21wLCBtb21lbnQgZm9ybWF0IHRvIHZpZXc6IFlZWVktTU0tRERUSEg6bW06c3MuU1NTWiAtPiBZWVlZLU1NLUREXG4gICAgdjJtQ29udmVydG9yOiBQcm9wVHlwZXMuZnVuYy8vVmlldyAyIE1vZGVsLCBsaWtlIENoZWNrIENvbXAsIHRydWUgaXMgY2hlY2tlZDogdHJ1ZSAtPiAxLCBmYWxzZSAtPiAwXG4gIH07XG5cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5jb21wTmFtZSA9ICdDb21wJztcbiAgICB0aGlzLm1vbml0b3JzID0gW107XG4gICAgdGhpcy51cGRhdGVVSSA9IChldnQpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3N0YXRlVWlkOiBfLnVuaXF1ZUlkKENvbXAuU0tfQ09NUF9TVEFURV9JRF9QUkVGSVgpfSk7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBc3NlcnQgTW9kZWxcbiAgICpcbiAgICogQHBhcmFtIHByb3BzXG4gICAqIEBwYXJhbSBwcm9wTmFtZVxuICAgKiBAcGFyYW0gY29tcG9uZW50TmFtZVxuICAgKiBAcmV0dXJucyB7RXJyb3J9XG4gICAqL1xuICBzdGF0aWMgSVNfUFJPUF9UWVBFU19NT0RFTChwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICBpZiAocHJvcHNbcHJvcE5hbWVdICYmICEocHJvcHNbcHJvcE5hbWVdIGluc3RhbmNlb2YgTW9kZWwpKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKCdUaGUgWycgKyBjb21wb25lbnROYW1lICsgJ11cXCdzIFsnICsgcHJvcE5hbWUgKyAnXSBpcyBub3QgYSBtb2RlbCEnKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRmlsdGVyIHNrIHByb3BzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrIGtleS9pbmRleFxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBza1Byb3BzRmlsdGVyKGspIHtcbiAgICByZXR1cm4gXy5zdGFydHNXaXRoKFNLLnM0cyhrKSwgQ29tcC5TS19QUk9QU19QUkVGSVgpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy9zdXBlci5jb21wb25lbnREaWRNb3VudCgpO1xuICAgIHRoaXMuYWRkQWxsQ2hhbmdlZE1vbml0b3IoKTtcbiAgICB0aGlzLmFkZEV4dGVuZENoYW5nZWRNb25pdG9yKCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVXBkYXRlKCkge1xuICAgIHRoaXMucm12QWxsQ2hhbmdlZE1vbml0b3IoKTtcbiAgICB0aGlzLnJtdkV4dGVuZENoYW5nZWRNb25pdG9yKCk7XG4gICAgLy9zdXBlci5jb21wb25lbnRXaWxsVXBkYXRlKCk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgLy9zdXBlci5jb21wb25lbnREaWRVcGRhdGUoKTtcbiAgICB0aGlzLmFkZEFsbENoYW5nZWRNb25pdG9yKCk7XG4gICAgdGhpcy5hZGRFeHRlbmRDaGFuZ2VkTW9uaXRvcigpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5ybXZBbGxDaGFuZ2VkTW9uaXRvcigpO1xuICAgIHRoaXMucm12RXh0ZW5kQ2hhbmdlZE1vbml0b3IoKTtcbiAgICAvL3N1cGVyLmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XG4gIH1cblxuICBhZGRFeHRlbmRDaGFuZ2VkTW9uaXRvcigpIHtcblxuICB9XG5cbiAgcm12RXh0ZW5kQ2hhbmdlZE1vbml0b3IoKSB7XG5cbiAgfVxuXG4gIC8vbW9uaXRvciBiZWdpblxuICBhZGRBbGxDaGFuZ2VkTW9uaXRvcigpIHtcbiAgICBNb2RlbC5wYXJzZVNhbyh0aGlzLnByb3BzLm1vbml0b3IpLmZvckVhY2goKCRpKSA9PiB7XG4gICAgICB0aGlzLmFkZENoYW5nZWRNb25pdG9yKCRpKTtcbiAgICB9KTtcbiAgICAvL1NlbGYgdmFsdWUgbW9uaXRvclxuICAgIGlmICh0aGlzLmdldE1vZGVsSWQoKSkge1xuICAgICAgdGhpcy5hZGRDaGFuZ2VkTW9uaXRvcih0aGlzLmdldE1vZGVsSWQoKSk7XG4gICAgfVxuICB9XG5cbiAgYWRkQ2hhbmdlZE1vbml0b3IoaWRPclJlZykge1xuICAgIGlmICghXy5pc05pbChpZE9yUmVnKSkge1xuICAgICAgaWYgKHRoaXMubW9uaXRvcnMuaW5kZXhPZihpZE9yUmVnKSA8IDApIHtcbiAgICAgICAgdGhpcy5tb25pdG9ycy5wdXNoKGlkT3JSZWcpO1xuICAgICAgfVxuICAgICAgaWYgKF8uaXNSZWdFeHAoaWRPclJlZykpIHtcbiAgICAgICAgdGhpcy5za01vZGVsKCkuYWRkUmVnQ2hhbmdlZExpc3RlbmVyKGlkT3JSZWcsIHRoaXMudXBkYXRlVUkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5za01vZGVsKCkuYWRkSWRDaGFuZ2VkTGlzdGVuZXIoaWRPclJlZywgdGhpcy51cGRhdGVVSSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcm12QWxsQ2hhbmdlZE1vbml0b3IoKSB7XG4gICAgdGhpcy5tb25pdG9ycy5mb3JFYWNoKCgkaSkgPT4ge1xuICAgICAgdGhpcy5ybXZDaGFuZ2VkTW9uaXRvcigkaSk7XG4gICAgfSk7XG4gIH1cblxuICBybXZDaGFuZ2VkTW9uaXRvcihpZE9yUmVnKSB7XG4gICAgaWYgKF8uaXNSZWdFeHAoaWRPclJlZykpIHtcbiAgICAgIHRoaXMuc2tNb2RlbCgpLnJtdlJlZ0NoYW5nZWRMaXN0ZW5lcihpZE9yUmVnLCB0aGlzLnVwZGF0ZVVJKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5za01vZGVsKCkucm12SWRDaGFuZ2VkTGlzdGVuZXIoaWRPclJlZywgdGhpcy51cGRhdGVVSSlcbiAgICB9XG4gICAgdGhpcy5tb25pdG9ycy5za1JtdihpZE9yUmVnKTtcbiAgfVxuXG4gIC8vbW9uaXRvciBlbmRcblxuICAvKipcbiAgICogQHBhcmFtIHtSZWFjdC5Db21wb25lbnR9IGNoaWxkXG4gICAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAgICovXG4gIGFsbG93VHJhbnNQcm9wczJDaGlsZChjaGlsZCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIGFsbG93VHJhbnNQcm9wczJTZWxmKCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGRlbnlUcmFuc1Byb3BzMlNlbGYoKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYm9vbGVhbiB2YWx1ZSBvZiBib29sZWFuLCBmdW5jdGlvbiBvciBvYmplY3Qgd2l0aCBza1doZW4gcHJvcGVydGllc1xuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW58ZnVuY3Rpb258b2JqZWN0fSBiZm9cbiAgICogQHBhcmFtIHtib29sZWFufSBkZWZhdWx0VmFsdWVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBleGVjQmZvKGJmbywgZGVmYXVsdFZhbHVlID0gZmFsc2UpIHtcbiAgICBpZiAoXy5pc0Jvb2xlYW4oYmZvKSkge1xuICAgICAgcmV0dXJuIGJmbztcbiAgICB9IGVsc2UgaWYgKF8uaXNGdW5jdGlvbihiZm8pKSB7XG4gICAgICByZXR1cm4gYmZvLmNhbGwodGhpcyk7XG4gICAgfSBlbHNlIGlmIChfLmlzT2JqZWN0KGJmbykgJiYgXy5pc0Z1bmN0aW9uKGJmby5mdW5jKSkge1xuICAgICAgcmV0dXJuIGJmby5mdW5jLmNhbGwodGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgfVxuICB9XG5cbiAgZ2V0RXJyb3JzKCkge1xuICAgIHJldHVybiB0aGlzLnNrTW9kZWwoKS5nZXRFcnJvcnModGhpcy5nZXRNb2RlbElkKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBtb2RlbElkOiB4Lnh4Lnh4eFxuICAgKlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0TW9kZWxJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5tb2RlbElkO1xuICB9XG5cbiAgZ2V0U3lzTW9kZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuc2tTeXNNb2RlbDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge2NvbXBUYWc6IENvbXBUYWd9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcFRhZyB7Li4udGhpcy5za1RyYW5zUHJvcHMyU2VsZihDb21wVGFnKX0+XG4gICAgICAgIHt0aGlzLnNrVHJhbnNQcm9wczJDaGlsZCgpfVxuICAgICAgPC9Db21wVGFnPlxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQHNlZSBDb21wLmV4ZWNCZm9cbiAgICovXG4gIHNrQmZvKHByb3AsIGRlZmF1bHRWYWx1ZSA9IGZhbHNlKSB7XG4gICAgcmV0dXJuIHRoaXMuZXhlY0Jmbyh0aGlzLnNrUHJvcChwcm9wLCBkZWZhdWx0VmFsdWUpKVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCBtb2RlbCBpZiBleGlzdCwgZWxzZSBza01vZGVsXG4gICAqXG4gICAqIEByZXR1cm5zIHtNb2RlbH1cbiAgICovXG4gIHNrTW9kZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2tQcm9wKENvbXAuU0tfUFJPUFMuTU9ERUwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBwcm9wIHZhbHVlOiBwcm9wIC0+IHNrUHJvcCAtPiBERUZBVUxULlBST1BcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9cHJvcFxuICAgKiBAcGFyYW0geyp9IGRlZmF1bHRWYWx1ZVxuICAgKiBAcmV0dXJucyB7Kn0gTWF5YmUgdW5kZWZpbmVkXG4gICAqL1xuICBza1Byb3AocHJvcCwgZGVmYXVsdFZhbHVlID0gdW5kZWZpbmVkKSB7XG4gICAgbGV0IHJ0biA9IHRoaXMucHJvcHNbcHJvcF07XG4gICAgaWYgKHJ0biA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBydG4gPSB0aGlzLnByb3BzW0NvbXAuU0tfUFJPUFNfUFJFRklYICsgU0sudXBwZXJXb3Jkc0ZpcnN0Q2hhcihwcm9wKV1cbiAgICB9XG4gICAgaWYgKHJ0biA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBydG4gPSB0aGlzLnByb3BzW0NvbXAuU0tfUFJPUFNfUFJFRklYICsgU0sudXBwZXJXb3Jkc0ZpcnN0Q2hhcihDb21wLlNLX1BST1BTX1NZUykgKyBTSy51cHBlcldvcmRzRmlyc3RDaGFyKHByb3ApXVxuICAgIH1cbiAgICBpZiAocnRuID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJ0biA9IERFRkFVTFRbU0sudXBwZXJXb3Jkc0ZpcnN0Q2hhcihwcm9wKS5yZXBsYWNlKC9bQS1aXS9nLCAoJDEpID0+IHtcbiAgICAgICAgcmV0dXJuIFNLLkNIQVJfVU5ERVJMSU5FICsgJDE7XG4gICAgICB9KS50b1VwcGVyQ2FzZSgpLnNsaWNlKDEpXVxuICAgIH1cbiAgICByZXR1cm4gcnRuID09PSB1bmRlZmluZWQgPyBkZWZhdWx0VmFsdWUgOiBydG47XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmZXJyaW5nIHByb3BzIHRvIGNoaWxkcmVuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3QuQ2hpbGRyZW59IGNoaWxkcmVuXG4gICAqIEByZXR1cm5zIHtSZWFjdC5DaGlsZHJlbn1cbiAgICovXG4gIHNrVHJhbnNQcm9wczJDaGlsZChjaGlsZHJlbiA9IHVuZGVmaW5lZCkge1xuICAgIGxldCBza1Byb3BzID0gdGhpcy5wcm9wcy5za0ZpbHRlcihmYWxzZSwgQ29tcC5za1Byb3BzRmlsdGVyKTtcbiAgICByZXR1cm4gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuID8gY2hpbGRyZW4gOiB0aGlzLnByb3BzLmNoaWxkcmVuLCBjaGlsZCA9PiB7XG4gICAgICBpZiAoUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIGxldCB0bXBQcm9wcyA9IFJFQUNULlRBR1tjaGlsZC50eXBlXSA/IHt9IDogc2tQcm9wcztcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgXy5hc3NpZ24oe30sIHRoaXMuYWxsb3dUcmFuc1Byb3BzMkNoaWxkKGNoaWxkKSwgdG1wUHJvcHMsIGNoaWxkLnByb3BzLnNrRmlsdGVyKGZhbHNlLCBDb21wLnNrUHJvcHNGaWx0ZXIpKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZCBwcm9wcyBmb3IgdGhpcyBjb21wXG4gICAqXG4gICAqIEBwYXJhbSB7Q29tcHxzdHJpbmd9IGNvbXBcbiAgICogQHBhcmFtIHtvYmplY3R9IHByb3BcbiAgICogQHJldHVybnMge29iamVjdH1cbiAgICovXG4gIHNrVHJhbnNQcm9wczJTZWxmKGNvbXAgPSB0aGlzLnByb3BzLmNvbXBUYWcsIHByb3AgPSB0aGlzLnByb3BzKSB7XG4gICAgbGV0IHRtcFByb3BzID0gUkVBQ1QuVEFHW2NvbXBdID8gXy5waWNrKHByb3AsIFJFQUNULlAuc2tWYWxzKCkuY29uY2F0KHRoaXMuYWxsb3dUcmFuc1Byb3BzMlNlbGYoKSkpIDogcHJvcDtcbiAgICByZXR1cm4gXy5vbWl0KHRtcFByb3BzLCBbQ29tcC5TS19QUk9QUy5DT01QX1RBRywgQ29tcC5TS19QUk9QUy5NT0RFTF9JRF0uY29uY2F0KHRoaXMuZGVueVRyYW5zUHJvcHMyU2VsZigpKSk7XG4gIH1cblxuICAvKipcbiAgICogc2V0L2dldCB2YWx1ZSBmb3IgbW9kZWxJZFxuICAgKlxuICAgKiBAcGFyYW0geyp9IHZhbFxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIHNrVmFsKHZhbCkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5za01vZGVsKCkuc2tWYWwodGhpcy5nZXRNb2RlbElkKCksIHZhbCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuc2tNb2RlbCgpLnNrVmFsKHRoaXMuZ2V0TW9kZWxJZCgpKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==