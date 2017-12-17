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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwvQ29tcC5qcyJdLCJuYW1lcyI6WyJDb21wIiwiYXJncyIsInVwZGF0ZVVJIiwiZXZ0Iiwic2V0U3RhdGUiLCJzdGF0ZVVpZCIsInVuaXF1ZUlkIiwiU0tfQ09NUF9TVEFURV9JRF9QUkVGSVgiLCJjb21wTmFtZSIsIm1vbml0b3JzIiwiYWRkQWxsQ2hhbmdlZE1vbml0b3IiLCJhZGRFeHRlbmRDaGFuZ2VkTW9uaXRvciIsInJtdkFsbENoYW5nZWRNb25pdG9yIiwicm12RXh0ZW5kQ2hhbmdlZE1vbml0b3IiLCJwYXJzZVNhbyIsInByb3BzIiwibW9uaXRvciIsImZvckVhY2giLCIkaSIsImFkZENoYW5nZWRNb25pdG9yIiwiZ2V0TW9kZWxJZCIsImlkT3JSZWciLCJpc05pbCIsImluZGV4T2YiLCJwdXNoIiwiaXNSZWdFeHAiLCJza01vZGVsIiwiYWRkUmVnQ2hhbmdlZExpc3RlbmVyIiwiYWRkSWRDaGFuZ2VkTGlzdGVuZXIiLCJybXZDaGFuZ2VkTW9uaXRvciIsInJtdlJlZ0NoYW5nZWRMaXN0ZW5lciIsInJtdklkQ2hhbmdlZExpc3RlbmVyIiwic2tSbXYiLCJjaGlsZCIsImJmbyIsImRlZmF1bHRWYWx1ZSIsImlzQm9vbGVhbiIsImlzRnVuY3Rpb24iLCJjYWxsIiwiaXNPYmplY3QiLCJmdW5jIiwiZ2V0RXJyb3JzIiwibW9kZWxJZCIsInNrU3lzTW9kZWwiLCJDb21wVGFnIiwiY29tcFRhZyIsInNrVHJhbnNQcm9wczJTZWxmIiwic2tUcmFuc1Byb3BzMkNoaWxkIiwicHJvcCIsImV4ZWNCZm8iLCJza1Byb3AiLCJTS19QUk9QUyIsIk1PREVMIiwidW5kZWZpbmVkIiwicnRuIiwiU0tfUFJPUFNfUFJFRklYIiwidXBwZXJXb3Jkc0ZpcnN0Q2hhciIsIlNLX1BST1BTX1NZUyIsInJlcGxhY2UiLCIkMSIsIkNIQVJfVU5ERVJMSU5FIiwidG9VcHBlckNhc2UiLCJzbGljZSIsImNoaWxkcmVuIiwic2tQcm9wcyIsInNrRmlsdGVyIiwic2tQcm9wc0ZpbHRlciIsIkNoaWxkcmVuIiwibWFwIiwiaXNWYWxpZEVsZW1lbnQiLCJ0bXBQcm9wcyIsIlRBRyIsInR5cGUiLCJQUk9QIiwiY2xvbmVFbGVtZW50IiwiYXNzaWduIiwiYWxsb3dUcmFuc1Byb3BzMkNoaWxkIiwiY29tcCIsIlAiLCJza1ZhbHMiLCJwcm9wVHlwZXMiLCJjb25jYXQiLCJPYmplY3QiLCJrZXlzIiwib21pdCIsInBpY2siLCJhbGxvd1RyYW5zUHJvcHMyU2VsZiIsIkNPTVBfVEFHIiwiTU9ERUxfSUQiLCJkZW55VHJhbnNQcm9wczJTZWxmIiwidmFsIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwic2tWYWwiLCJwcm9wTmFtZSIsImNvbXBvbmVudE5hbWUiLCJFcnJvciIsImsiLCJzdGFydHNXaXRoIiwiczRzIiwiQUNUSVZFIiwiRElTQUJMRUQiLCJISURERU4iLCJQUkVWSUVXIiwiUkVBRE9OTFkiLCJSRVFVSVJFRCIsIk1PTklUT1IiLCJkZWZhdWx0UHJvcHMiLCJvbmVPZlR5cGUiLCJlbGVtZW50Iiwic3RyaW5nIiwibW9kZWwiLCJJU19QUk9QX1RZUEVTX01PREVMIiwiYXJyYXkiLCJvYmplY3QiLCJhY3RpdmUiLCJib29sIiwic2tBY3RpdmUiLCJkaXNhYmxlZCIsInNrRGlzYWJsZWQiLCJoaWRkZW4iLCJza0hpZGRlbiIsInByZXZpZXciLCJza1ByZXZpZXciLCJyZWFkT25seSIsInNrUmVhZE9ubHkiLCJyZXF1aXJlZCIsInNrUmVxdWlyZWQiLCJtMmVDb252ZXJ0b3IiLCJlMm1Db252ZXJ0b3IiLCJtMnZDb252ZXJ0b3IiLCJ2Mm1Db252ZXJ0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7SUFNcUJBLEk7OztBQTJHbkIsa0JBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLHVJQUNW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QixFQUUzQixvQkFBVTVFLElBRmlCLEVBRzNCLG9CQUFVMEUsTUFIaUIsQ0FBcEIsQ0E5Q1E7QUFtRGpCUyxhQUFXLG9CQUFVZixTQUFWLENBQW9CLENBQzdCLG9CQUFVUSxJQURtQixFQUU3QixvQkFBVTVFLElBRm1CLEVBRzdCLG9CQUFVMEUsTUFIbUIsQ0FBcEIsQ0FuRE07QUF3RGpCVSxZQUFVLG9CQUFVaEIsU0FBVixDQUFvQixDQUM1QixvQkFBVVEsSUFEa0IsRUFFNUIsb0JBQVU1RSxJQUZrQixFQUc1QixvQkFBVTBFLE1BSGtCLENBQXBCLENBeERPO0FBNkRqQlcsY0FBWSxvQkFBVWpCLFNBQVYsQ0FBb0IsQ0FDOUIsb0JBQVVRLElBRG9CLEVBRTlCLG9CQUFVNUUsSUFGb0IsRUFHOUIsb0JBQVUwRSxNQUhvQixDQUFwQixDQTdESztBQWtFakJZLFlBQVUsb0JBQVVsQixTQUFWLENBQW9CLENBQzVCLG9CQUFVUSxJQURrQixFQUU1QixvQkFBVTVFLElBRmtCLEVBRzVCLG9CQUFVMEUsTUFIa0IsQ0FBcEIsQ0FsRU87QUF1RWpCYSxjQUFZLG9CQUFVbkIsU0FBVixDQUFvQixDQUM5QixvQkFBVVEsSUFEb0IsRUFFOUIsb0JBQVU1RSxJQUZvQixFQUc5QixvQkFBVTBFLE1BSG9CLENBQXBCLENBdkVLOztBQTZFakJjLGdCQUFjLG9CQUFVeEYsSUE3RVAsRUE2RVk7QUFDN0J5RixnQkFBYyxvQkFBVXpGLElBOUVQLEVBOEVZO0FBQzdCMEYsZ0JBQWMsb0JBQVUxRixJQS9FUCxFQStFWTtBQUM3QjJGLGdCQUFjLG9CQUFVM0YsSUFoRlAsQ0FnRlc7QUFoRlgsQztrQkFyQkF4QyxJIiwiZmlsZSI6InV0aWwvQ29tcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1NLfSBmcm9tICdzay1qcyc7XG5pbXBvcnQgREVGQVVMVCBmcm9tICcuL0RFRkFVTFQnO1xuaW1wb3J0IEhUTUwgZnJvbSAnLi9IVE1MJztcbmltcG9ydCBNb2RlbCBmcm9tICcuL01vZGVsJztcbmltcG9ydCBSRUFDVCBmcm9tICcuL1JFQUNUJztcblxuLyoqXG4gKiBwcm9wczpjb21wVGFnLG1vZGVsKHNrTW9kZWwpLG1vZGVsSWQsbGFiZWxEaXIoc2tMYWJlbERpciksbGFiZWxXaWR0aChza0xhYmVsV2lkdGgpXG4gKiBiZm8gICxhY3RpdmUoc2tBY3RpdmUpLGRpc2FibGVkKHNrRGlzYWJsZWQpXG4gKiBmdW5jICxtMmVDb252ZXJ0b3IsZTJtQ29udmVydG9yLG0ydkNvbnZlcnRvcix2Mm1Db252ZXJ0b3JcbiAqIGh0bWwgLGNsYXNzTmFtZSxyb2xlLHN0eWxlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgU0tfQ09NUF9TVEFURV9JRF9QUkVGSVggPSAnc2tDb21wU3RhdGVVaWQnO1xuICBzdGF0aWMgU0tfUFJPUFNfUFJFRklYID0gJ3NrJztcbiAgc3RhdGljIFNLX1BST1BTX1NZUyA9ICdzeXMnO1xuICBzdGF0aWMgU0tfUFJPUFMgPSB7XG4gICAgLy9za1xuICAgIENPTVBfVEFHOiAnY29tcFRhZycsXG4gICAgTU9ERUw6ICdtb2RlbCcsXG4gICAgTU9ERUxfSUQ6ICdtb2RlbElkJyxcbiAgICAvL3VpIHN0YXRlLCBhcmUgYmZvIChib29sZWFuLCBmdW5jdGlvbiwgb2JqZWN0e2RlcHM6LGZ1bmM6fSlcbiAgICAvL2RlcHMgdG8gbW9uaXRvclxuICAgIEFDVElWRTogJ2FjdGl2ZScsXG4gICAgRElTQUJMRUQ6ICdkaXNhYmxlZCcsXG4gICAgSElEREVOOiAnaGlkZGVuJyxcbiAgICBQUkVWSUVXOiAncHJldmlldycsXG4gICAgUkVBRE9OTFk6ICdyZWFkT25seScsXG4gICAgUkVRVUlSRUQ6ICdyZXF1aXJlZCcsLy9qdXN0IHBhaW50IHJlcXVpcmVkIGljb25cbiAgICAvL2NvbXBvbmVudCBtb25pdG9yIGxpc3QsIGNhbiBiZSBzdHJpbmdbcmVnXSwgc3RyaW5nIGFycmF5IG9yIG9iamVjdFxuICAgIE1PTklUT1I6ICdtb25pdG9yJ1xuICB9O1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge307XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY29tcFRhZzogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgIFByb3BUeXBlcy5mdW5jLFxuICAgICAgUHJvcFR5cGVzLnN0cmluZ1xuICAgIF0pLC8vUmVhY3QgY29tcG9uZW50IG9yIEJyYWQgQ29tcG9uZW50XG4gICAgbW9kZWw6IENvbXAuSVNfUFJPUF9UWVBFU19NT0RFTCwvL0J1c2luZXNzIE1vZGVsKHBhcnQgb2YgcGFnZSksIFBsYWluT2JqZWN0IG9yIEJyYWQuTW9kZWxcbiAgICBza01vZGVsOiBDb21wLklTX1BST1BfVFlQRVNfTU9ERUwsLy9CdXNpbmVzcyBNb2RlbChwYWdlKSwgUGxhaW5PYmplY3Qgb3IgQnJhZC5Nb2RlbFxuICAgIHNrU3lzTW9kZWw6IENvbXAuSVNfUFJPUF9UWVBFU19NT0RFTCwvL1N5c3RlbSBNb2RlbCh3aG9sZSBvZiBwYWdlKSwgUGxhaW5PYmplY3Qgb3IgQnJhZC5Nb2RlbFxuICAgIG1vZGVsSWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbW9uaXRvcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgUHJvcFR5cGVzLmFycmF5LFxuICAgICAgUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLC8vbW9uaXRvciBpcyBzdHJpbmdbcmVnXSwgYXJyYXlbc3RyaW5nXSBvciBvYmplY3RcblxuICAgIGFjdGl2ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIFByb3BUeXBlcy5mdW5jLFxuICAgICAgUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIHNrQWN0aXZlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5ib29sLFxuICAgICAgUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBQcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmJvb2wsXG4gICAgICBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIFByb3BUeXBlcy5vYmplY3RcbiAgICBdKSxcbiAgICBza0Rpc2FibGVkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5ib29sLFxuICAgICAgUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBQcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgaGlkZGVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5ib29sLFxuICAgICAgUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBQcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgc2tIaWRkZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmJvb2wsXG4gICAgICBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIFByb3BUeXBlcy5vYmplY3RcbiAgICBdKSxcbiAgICBwcmV2aWV3OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5ib29sLFxuICAgICAgUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBQcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgc2tQcmV2aWV3OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5ib29sLFxuICAgICAgUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBQcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgcmVhZE9ubHk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmJvb2wsXG4gICAgICBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIFByb3BUeXBlcy5vYmplY3RcbiAgICBdKSxcbiAgICBza1JlYWRPbmx5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5ib29sLFxuICAgICAgUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBQcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgcmVxdWlyZWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmJvb2wsXG4gICAgICBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIFByb3BUeXBlcy5vYmplY3RcbiAgICBdKSxcbiAgICBza1JlcXVpcmVkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5ib29sLFxuICAgICAgUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBQcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG5cbiAgICBtMmVDb252ZXJ0b3I6IFByb3BUeXBlcy5mdW5jLC8vTW9kZWwgMiBFZGl0aW5nXG4gICAgZTJtQ29udmVydG9yOiBQcm9wVHlwZXMuZnVuYywvL0VkaXRpbmcgMiBNb2RlbFxuICAgIG0ydkNvbnZlcnRvcjogUHJvcFR5cGVzLmZ1bmMsLy9Nb2RlbCAyIFZpZXcsIGxpa2UgRGF0ZSBDb21wLCBtb21lbnQgZm9ybWF0IHRvIHZpZXc6IFlZWVktTU0tRERUSEg6bW06c3MuU1NTWiAtPiBZWVlZLU1NLUREXG4gICAgdjJtQ29udmVydG9yOiBQcm9wVHlwZXMuZnVuYy8vVmlldyAyIE1vZGVsLCBsaWtlIENoZWNrIENvbXAsIHRydWUgaXMgY2hlY2tlZDogdHJ1ZSAtPiAxLCBmYWxzZSAtPiAwXG4gIH07XG4gIHVwZGF0ZVVJID0gKGV2dCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe3N0YXRlVWlkOiBfLnVuaXF1ZUlkKENvbXAuU0tfQ09NUF9TVEFURV9JRF9QUkVGSVgpfSk7XG4gIH07XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnQ29tcCc7XG4gICAgdGhpcy5tb25pdG9ycyA9IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIEFzc2VydCBNb2RlbFxuICAgKlxuICAgKiBAcGFyYW0gcHJvcHNcbiAgICogQHBhcmFtIHByb3BOYW1lXG4gICAqIEBwYXJhbSBjb21wb25lbnROYW1lXG4gICAqIEByZXR1cm5zIHtFcnJvcn1cbiAgICovXG4gIHN0YXRpYyBJU19QUk9QX1RZUEVTX01PREVMKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgIGlmIChwcm9wc1twcm9wTmFtZV0gJiYgIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBNb2RlbCkpIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1RoZSBbJyArIGNvbXBvbmVudE5hbWUgKyAnXVxcJ3MgWycgKyBwcm9wTmFtZSArICddIGlzIG5vdCBhIG1vZGVsIScpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGaWx0ZXIgc2sgcHJvcHNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGsga2V5L2luZGV4XG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIHNrUHJvcHNGaWx0ZXIoaykge1xuICAgIHJldHVybiBfLnN0YXJ0c1dpdGgoU0suczRzKGspLCBDb21wLlNLX1BST1BTX1BSRUZJWCk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvL3N1cGVyLmNvbXBvbmVudERpZE1vdW50KCk7XG4gICAgdGhpcy5hZGRBbGxDaGFuZ2VkTW9uaXRvcigpO1xuICAgIHRoaXMuYWRkRXh0ZW5kQ2hhbmdlZE1vbml0b3IoKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVcGRhdGUoKSB7XG4gICAgdGhpcy5ybXZBbGxDaGFuZ2VkTW9uaXRvcigpO1xuICAgIHRoaXMucm12RXh0ZW5kQ2hhbmdlZE1vbml0b3IoKTtcbiAgICAvL3N1cGVyLmNvbXBvbmVudFdpbGxVcGRhdGUoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAvL3N1cGVyLmNvbXBvbmVudERpZFVwZGF0ZSgpO1xuICAgIHRoaXMuYWRkQWxsQ2hhbmdlZE1vbml0b3IoKTtcbiAgICB0aGlzLmFkZEV4dGVuZENoYW5nZWRNb25pdG9yKCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnJtdkFsbENoYW5nZWRNb25pdG9yKCk7XG4gICAgdGhpcy5ybXZFeHRlbmRDaGFuZ2VkTW9uaXRvcigpO1xuICAgIC8vc3VwZXIuY29tcG9uZW50V2lsbFVubW91bnQoKTtcbiAgfVxuXG4gIGFkZEV4dGVuZENoYW5nZWRNb25pdG9yKCkge1xuXG4gIH1cblxuICBybXZFeHRlbmRDaGFuZ2VkTW9uaXRvcigpIHtcblxuICB9XG5cbiAgLy9tb25pdG9yIGJlZ2luXG4gIGFkZEFsbENoYW5nZWRNb25pdG9yKCkge1xuICAgIE1vZGVsLnBhcnNlU2FvKHRoaXMucHJvcHMubW9uaXRvcikuZm9yRWFjaCgoJGkpID0+IHtcbiAgICAgIHRoaXMuYWRkQ2hhbmdlZE1vbml0b3IoJGkpO1xuICAgIH0pO1xuICAgIC8vU2VsZiB2YWx1ZSBtb25pdG9yXG4gICAgaWYgKHRoaXMuZ2V0TW9kZWxJZCgpKSB7XG4gICAgICB0aGlzLmFkZENoYW5nZWRNb25pdG9yKHRoaXMuZ2V0TW9kZWxJZCgpKTtcbiAgICB9XG4gIH1cblxuICBhZGRDaGFuZ2VkTW9uaXRvcihpZE9yUmVnKSB7XG4gICAgaWYgKCFfLmlzTmlsKGlkT3JSZWcpKSB7XG4gICAgICBpZiAodGhpcy5tb25pdG9ycy5pbmRleE9mKGlkT3JSZWcpIDwgMCkge1xuICAgICAgICB0aGlzLm1vbml0b3JzLnB1c2goaWRPclJlZyk7XG4gICAgICB9XG4gICAgICBpZiAoXy5pc1JlZ0V4cChpZE9yUmVnKSkge1xuICAgICAgICB0aGlzLnNrTW9kZWwoKS5hZGRSZWdDaGFuZ2VkTGlzdGVuZXIoaWRPclJlZywgdGhpcy51cGRhdGVVSSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNrTW9kZWwoKS5hZGRJZENoYW5nZWRMaXN0ZW5lcihpZE9yUmVnLCB0aGlzLnVwZGF0ZVVJKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBybXZBbGxDaGFuZ2VkTW9uaXRvcigpIHtcbiAgICB0aGlzLm1vbml0b3JzLmZvckVhY2goKCRpKSA9PiB7XG4gICAgICB0aGlzLnJtdkNoYW5nZWRNb25pdG9yKCRpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJtdkNoYW5nZWRNb25pdG9yKGlkT3JSZWcpIHtcbiAgICBpZiAoXy5pc1JlZ0V4cChpZE9yUmVnKSkge1xuICAgICAgdGhpcy5za01vZGVsKCkucm12UmVnQ2hhbmdlZExpc3RlbmVyKGlkT3JSZWcsIHRoaXMudXBkYXRlVUkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNrTW9kZWwoKS5ybXZJZENoYW5nZWRMaXN0ZW5lcihpZE9yUmVnLCB0aGlzLnVwZGF0ZVVJKVxuICAgIH1cbiAgICB0aGlzLm1vbml0b3JzLnNrUm12KGlkT3JSZWcpO1xuICB9XG5cbiAgLy9tb25pdG9yIGVuZFxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1JlYWN0LkNvbXBvbmVudH0gY2hpbGRcbiAgICogQHJldHVybnMge0Z1bmN0aW9ufVxuICAgKi9cbiAgYWxsb3dUcmFuc1Byb3BzMkNoaWxkKGNoaWxkKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgYWxsb3dUcmFuc1Byb3BzMlNlbGYoKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgZGVueVRyYW5zUHJvcHMyU2VsZigpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBib29sZWFuIHZhbHVlIG9mIGJvb2xlYW4sIGZ1bmN0aW9uIG9yIG9iamVjdCB3aXRoIHNrV2hlbiBwcm9wZXJ0aWVzXG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbnxmdW5jdGlvbnxvYmplY3R9IGJmb1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGRlZmF1bHRWYWx1ZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGV4ZWNCZm8oYmZvLCBkZWZhdWx0VmFsdWUgPSBmYWxzZSkge1xuICAgIGlmIChfLmlzQm9vbGVhbihiZm8pKSB7XG4gICAgICByZXR1cm4gYmZvO1xuICAgIH0gZWxzZSBpZiAoXy5pc0Z1bmN0aW9uKGJmbykpIHtcbiAgICAgIHJldHVybiBiZm8uY2FsbCh0aGlzKTtcbiAgICB9IGVsc2UgaWYgKF8uaXNPYmplY3QoYmZvKSAmJiBfLmlzRnVuY3Rpb24oYmZvLmZ1bmMpKSB7XG4gICAgICByZXR1cm4gYmZvLmZ1bmMuY2FsbCh0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gIH1cblxuICBnZXRFcnJvcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2tNb2RlbCgpLmdldEVycm9ycyh0aGlzLmdldE1vZGVsSWQoKSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IG1vZGVsSWQ6IHgueHgueHh4XG4gICAqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBnZXRNb2RlbElkKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLm1vZGVsSWQ7XG4gIH1cblxuICBnZXRTeXNNb2RlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5za1N5c01vZGVsO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7Y29tcFRhZzogQ29tcFRhZ30gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wVGFnIHsuLi50aGlzLnNrVHJhbnNQcm9wczJTZWxmKENvbXBUYWcpfT5cbiAgICAgICAge3RoaXMuc2tUcmFuc1Byb3BzMkNoaWxkKCl9XG4gICAgICA8L0NvbXBUYWc+XG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAc2VlIENvbXAuZXhlY0Jmb1xuICAgKi9cbiAgc2tCZm8ocHJvcCwgZGVmYXVsdFZhbHVlID0gZmFsc2UpIHtcbiAgICByZXR1cm4gdGhpcy5leGVjQmZvKHRoaXMuc2tQcm9wKHByb3AsIGRlZmF1bHRWYWx1ZSkpXG4gIH1cblxuICAvKipcbiAgICogR2V0IG1vZGVsIGlmIGV4aXN0LCBlbHNlIHNrTW9kZWxcbiAgICpcbiAgICogQHJldHVybnMge01vZGVsfVxuICAgKi9cbiAgc2tNb2RlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5za1Byb3AoQ29tcC5TS19QUk9QUy5NT0RFTCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHByb3AgdmFsdWU6IHByb3AgLT4gc2tQcm9wIC0+IERFRkFVTFQuUFJPUFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ31wcm9wXG4gICAqIEBwYXJhbSB7Kn0gZGVmYXVsdFZhbHVlXG4gICAqIEByZXR1cm5zIHsqfSBNYXliZSB1bmRlZmluZWRcbiAgICovXG4gIHNrUHJvcChwcm9wLCBkZWZhdWx0VmFsdWUgPSB1bmRlZmluZWQpIHtcbiAgICBsZXQgcnRuID0gdGhpcy5wcm9wc1twcm9wXTtcbiAgICBpZiAocnRuID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJ0biA9IHRoaXMucHJvcHNbQ29tcC5TS19QUk9QU19QUkVGSVggKyBTSy51cHBlcldvcmRzRmlyc3RDaGFyKHByb3ApXVxuICAgIH1cbiAgICBpZiAocnRuID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJ0biA9IHRoaXMucHJvcHNbQ29tcC5TS19QUk9QU19QUkVGSVggKyBTSy51cHBlcldvcmRzRmlyc3RDaGFyKENvbXAuU0tfUFJPUFNfU1lTKSArIFNLLnVwcGVyV29yZHNGaXJzdENoYXIocHJvcCldXG4gICAgfVxuICAgIGlmIChydG4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcnRuID0gREVGQVVMVFtTSy51cHBlcldvcmRzRmlyc3RDaGFyKHByb3ApLnJlcGxhY2UoL1tBLVpdL2csICgkMSkgPT4ge1xuICAgICAgICByZXR1cm4gU0suQ0hBUl9VTkRFUkxJTkUgKyAkMTtcbiAgICAgIH0pLnRvVXBwZXJDYXNlKCkuc2xpY2UoMSldXG4gICAgfVxuICAgIHJldHVybiBydG4gPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRWYWx1ZSA6IHJ0bjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2ZlcnJpbmcgcHJvcHMgdG8gY2hpbGRyZW5cbiAgICpcbiAgICogY2hpbGQgKyBza0NoaWxkUHJvcHNUcmFucyhjaGlsZCkgKyB0aGlzLnByb3BzLnNrRmlsdGVyKGZhbHNlLCBDb21wLnNrUHJvcHNGaWx0ZXIpICsgY2hpbGQucHJvcHMuc2tGaWx0ZXIoZmFsc2UsIENvbXAuc2tQcm9wc0ZpbHRlcilcbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdC5DaGlsZHJlbn0gY2hpbGRyZW5cbiAgICogQHJldHVybnMge1JlYWN0LkNoaWxkcmVufVxuICAgKi9cbiAgc2tUcmFuc1Byb3BzMkNoaWxkKGNoaWxkcmVuID0gdW5kZWZpbmVkKSB7XG4gICAgbGV0IHNrUHJvcHMgPSB0aGlzLnByb3BzLnNrRmlsdGVyKGZhbHNlLCBDb21wLnNrUHJvcHNGaWx0ZXIpO1xuICAgIHJldHVybiBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4gPyBjaGlsZHJlbiA6IHRoaXMucHJvcHMuY2hpbGRyZW4sIGNoaWxkID0+IHtcbiAgICAgIGlmIChSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgbGV0IHRtcFByb3BzID0gKFJFQUNULlRBR1tjaGlsZC50eXBlXSAmJiBIVE1MLlBST1BbY2hpbGQudHlwZV0pID8ge30gOiBza1Byb3BzO1xuICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBfLmFzc2lnbih7fSwgdGhpcy5hbGxvd1RyYW5zUHJvcHMyQ2hpbGQoY2hpbGQpLCB0bXBQcm9wcywgY2hpbGQucHJvcHMuc2tGaWx0ZXIoZmFsc2UsIENvbXAuc2tQcm9wc0ZpbHRlcikpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkIHByb3BzIGZvciB0aGlzIGNvbXBcbiAgICpcbiAgICogQHBhcmFtIHtDb21wfHN0cmluZ30gY29tcFxuICAgKiBAcGFyYW0ge29iamVjdH0gcHJvcFxuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKi9cbiAgc2tUcmFuc1Byb3BzMlNlbGYoY29tcCA9IHRoaXMucHJvcHMuY29tcFRhZywgcHJvcCA9IHRoaXMucHJvcHMpIHtcbiAgICBsZXQgdG1wUHJvcHMgPSBSRUFDVC5QLnNrVmFscygpO1xuICAgIHRtcFByb3BzID0gY29tcC5wcm9wVHlwZXMgPyB0bXBQcm9wcy5jb25jYXQoT2JqZWN0LmtleXMoY29tcC5wcm9wVHlwZXMpKSA6IHRtcFByb3BzO1xuICAgIHRtcFByb3BzID0gKGNvbXAudHlwZSAmJiBjb21wLnR5cGUucHJvcFR5cGVzKSA/IHRtcFByb3BzLmNvbmNhdChPYmplY3Qua2V5cyhjb21wLnR5cGUucHJvcFR5cGVzKSkgOiB0bXBQcm9wcztcblxuICAgIHJldHVybiBfLm9taXQoXy5waWNrKHByb3AsIHRtcFByb3BzLmNvbmNhdCh0aGlzLmFsbG93VHJhbnNQcm9wczJTZWxmKCkpKSwgW0NvbXAuU0tfUFJPUFMuQ09NUF9UQUcsIENvbXAuU0tfUFJPUFMuTU9ERUxfSURdLmNvbmNhdCh0aGlzLmRlbnlUcmFuc1Byb3BzMlNlbGYoKSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldC9nZXQgdmFsdWUgZm9yIG1vZGVsSWRcbiAgICpcbiAgICogQHBhcmFtIHsqfSB2YWxcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBza1ZhbCh2YWwpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuc2tNb2RlbCgpLnNrVmFsKHRoaXMuZ2V0TW9kZWxJZCgpLCB2YWwpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnNrTW9kZWwoKS5za1ZhbCh0aGlzLmdldE1vZGVsSWQoKSk7XG4gICAgfVxuICB9XG59XG4iXX0=