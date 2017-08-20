'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _skJs = require('sk-js');

var _skJs2 = _interopRequireDefault(_skJs);

var _Cfg = require('./Cfg');

var _Cfg2 = _interopRequireDefault(_Cfg);

var _Const = require('./Const');

var _Validator = require('./Validator');

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
        var tmpKey = prefix + (String(prefix).skBlank() ? _skJs2.default.EMPTY : _skJs2.default.CHAR_DOT) + $k;
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
          Model.object2Paths(_skJs2.default.EMPTY, rtn, sao);
        } else if (_lodash2.default.isArray(sao)) {
          rtn = rtn.concat(sao);
        } else if (_lodash2.default.isString(sao)) {
          rtn.push(sao);
        }
      }
      return rtn;
    }
  }]);

  /**
   * 
   * @param property plain object
   * @param validator
     */
  function Model() {
    var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var validator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _Validator2.default();

    _classCallCheck(this, Model);

    this.errors = {};
    this.idListeners = {};
    this.monitors = {};
    this.regListeners = {};

    this.property = property;
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
      var oldValue = this.property.skVal(id);
      if (arguments.length > 1) {
        if (oldValue != value) {
          this.property.skVal(id, value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwvTW9kZWwuanMiXSwibmFtZXMiOlsiTW9kZWwiLCJwcmVmaXgiLCJwYXRocyIsIm9iamVjdCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiJGsiLCJ0bXBLZXkiLCJTdHJpbmciLCJza0JsYW5rIiwiRU1QVFkiLCJDSEFSX0RPVCIsInRtcFZhbCIsImlzUGxhaW5PYmplY3QiLCJvYmplY3QyUGF0aHMiLCJzNGIiLCJwdXNoIiwic2FvIiwicnRuIiwiaXNBcnJheSIsImNvbmNhdCIsImlzU3RyaW5nIiwicHJvcGVydHkiLCJ2YWxpZGF0b3IiLCJlcnJvcnMiLCJpZExpc3RlbmVycyIsIm1vbml0b3JzIiwicmVnTGlzdGVuZXJzIiwiYWRkQWxsVmFsaWRhdG9yTW9uaXRvciIsInRtcENvbmZpZ3MiLCJnZXRWYWxpZGF0b3IiLCJnZXRDb25maWdzIiwiJGtleSIsImFkZFZhbGlkYXRvck1vbml0b3IiLCJpZCIsImNvbmZpZyIsImFkZFZhbGlkYXRvclJ1bGVNb25pdG9yIiwicnVsZSIsInNldHRpbmciLCJ2YWxpZGF0ZSIsImJpbmQiLCJhZGRJZENoYW5nZWRMaXN0ZW5lciIsIlBST1BfREVQUyIsInBhcnNlU2FvIiwiJGkiLCJpc1JlZ0V4cCIsImFkZFJlZ0NoYW5nZWRMaXN0ZW5lciIsInRtcFNldHRpbmdEZXBzIiwicm12UmVnQ2hhbmdlZExpc3RlbmVyIiwicm12SWRDaGFuZ2VkTGlzdGVuZXIiLCJybXZWYWxpZGF0b3JSdWxlTW9uaXRvciIsInNjZW5hcmlvIiwiY29uZmlncyIsIiRtb2RlbElkIiwiUFJPUF9TQ0VOQVJJTyIsImNhbGwiLCJtb2RlbCIsImV2dCIsInRtcElkIiwidG1wTW9kZWwiLCJ0bXBDb25maWciLCJpc09iamVjdCIsIlBST1BfRlVOQyIsImV4ZWNWYWxpZGF0ZSIsInVuZGVmaW5lZCIsInRtcFJ1bGUiLCJnZXRSdWxlcyIsImlzRnVuY3Rpb24iLCJmdW5jIiwidG1wUnRuIiwic2tWYWwiLCJpc0Jvb2xlYW4iLCJmaXJlRXJyb3JlZEV2ZW50IiwiaXNFbXB0eSIsInM0byIsImxpc3RlbmVyIiwiYWRkSWRMaXN0ZW5lciIsIkNoYW5nZWQiLCJFcnJvcmVkIiwidHlwZSIsImluZGV4T2YiLCJyZWciLCJhZGRSZWdMaXN0ZW5lciIsIm9sZCIsImN1cnJlbnQiLCJmaXJlRXZlbnQiLCJtYXRjaGVkTGlzdGVuZXJzIiwiYXBwbHkiLCJtYXRjaCIsImxpc3RlbmVycyIsInJtdklkTGlzdGVuZXIiLCJza1JtdiIsInJtdlJlZ0xpc3RlbmVyIiwidmFsdWUiLCJvbGRWYWx1ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsImZpcmVDaGFuZ2VkRXZlbnQiLCJQUk9QX1NLIiwiUFJPUF9TWVMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0lBRXFCQSxLOzs7aUNBS0NDLE0sRUFBaUM7QUFBQSxVQUF6QkMsS0FBeUIsdUVBQWpCLEVBQWlCO0FBQUEsVUFBYkMsTUFBYSx1RUFBSixFQUFJOztBQUNuREMsYUFBT0MsSUFBUCxDQUFZRixNQUFaLEVBQW9CRyxPQUFwQixDQUE0QixVQUFDQyxFQUFELEVBQVE7QUFDbEMsWUFBSUMsU0FBU1AsVUFBVVEsT0FBT1IsTUFBUCxFQUFlUyxPQUFmLEtBQTJCLGVBQUdDLEtBQTlCLEdBQXNDLGVBQUdDLFFBQW5ELElBQStETCxFQUE1RTtBQUNBLFlBQUlNLFNBQVNWLE9BQU9JLEVBQVAsQ0FBYjtBQUNBLFlBQUksaUJBQUVPLGFBQUYsQ0FBZ0JELE1BQWhCLENBQUosRUFBNkI7QUFDM0JiLGdCQUFNZSxZQUFOLENBQW1CUCxNQUFuQixFQUEyQk4sS0FBM0IsRUFBa0NXLE1BQWxDO0FBQ0QsU0FGRCxNQUVPLElBQUksZUFBR0csR0FBSCxDQUFPSCxNQUFQLEtBQWtCQSxNQUF0QixFQUE4QjtBQUNuQ1gsZ0JBQU1lLElBQU4sQ0FBV1QsTUFBWDtBQUNEO0FBQ0YsT0FSRDtBQVNEOzs7OztBQUVEOzs7OzZCQUlnQlUsRyxFQUFLO0FBQ25C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LEVBQThCO0FBQzVCLGFBQUtwRCxZQUFMLENBQWtCb0QsSUFBbEIsSUFBMEIsRUFBMUI7QUFDRDtBQUNELFVBQUksQ0FBQyxLQUFLcEQsWUFBTCxDQUFrQm9ELElBQWxCLEVBQXdCRSxHQUF4QixDQUFMLEVBQW1DO0FBQ2pDLGFBQUt0RCxZQUFMLENBQWtCb0QsSUFBbEIsRUFBd0JFLEdBQXhCLElBQStCLEVBQS9CO0FBQ0Q7QUFDRCxVQUFJLEtBQUt0RCxZQUFMLENBQWtCb0QsSUFBbEIsRUFBd0JFLEdBQXhCLEVBQTZCRCxPQUE3QixDQUFxQ0wsUUFBckMsS0FBa0QsQ0FBdEQsRUFBeUQ7QUFDdkQsYUFBS2hELFlBQUwsQ0FBa0JvRCxJQUFsQixFQUF3QkUsR0FBeEIsRUFBNkJVLEtBQTdCLENBQW1DaEIsUUFBbkM7QUFDRDtBQUNGOzs7MEJBRUt6QyxFLEVBQUkyRCxLLEVBQU87QUFDZixVQUFJQyxXQUFXLEtBQUt4RSxRQUFMLENBQWNnRCxLQUFkLENBQW9CcEMsRUFBcEIsQ0FBZjtBQUNBLFVBQUk2RCxVQUFVQyxNQUFWLEdBQW1CLENBQXZCLEVBQTBCO0FBQ3hCLFlBQUlGLFlBQVlELEtBQWhCLEVBQXVCO0FBQ3JCLGVBQUt2RSxRQUFMLENBQWNnRCxLQUFkLENBQW9CcEMsRUFBcEIsRUFBd0IyRCxLQUF4QjtBQUNBLGVBQUtJLGdCQUFMLENBQXNCL0QsRUFBdEIsRUFBMEI0RCxRQUExQixFQUFvQ0QsS0FBcEM7QUFDRDtBQUNELGVBQU8sSUFBUDtBQUNELE9BTkQsTUFNTztBQUNMLGVBQU9DLFFBQVA7QUFDRDtBQUNGOzs7bUNBRWM7QUFDYixhQUFPLEtBQUt2RSxTQUFaO0FBQ0Q7Ozs7OztBQTNVa0J4QixLLENBRVptRyxPLEdBQVUsUztBQUZFbkcsSyxDQUdab0csUSxHQUFXLFk7a0JBSENwRyxLIiwiZmlsZSI6InV0aWwvTW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFNLIGZyb20gJ3NrLWpzJztcbmltcG9ydCBDZmcgZnJvbSAnLi9DZmcnO1xuaW1wb3J0IHtFdnRUeXBlfSBmcm9tICcuL0NvbnN0JztcbmltcG9ydCBWYWxpZGF0b3IgZnJvbSAnLi9WYWxpZGF0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RlbCB7XG5cbiAgc3RhdGljIFBST1BfU0sgPSAnc2tNb2RlbCc7XG4gIHN0YXRpYyBQUk9QX1NZUyA9ICdza1N5c01vZGVsJztcblxuICBzdGF0aWMgb2JqZWN0MlBhdGhzKHByZWZpeCwgcGF0aHMgPSBbXSwgb2JqZWN0ID0ge30pIHtcbiAgICBPYmplY3Qua2V5cyhvYmplY3QpLmZvckVhY2goKCRrKSA9PiB7XG4gICAgICBsZXQgdG1wS2V5ID0gcHJlZml4ICsgKFN0cmluZyhwcmVmaXgpLnNrQmxhbmsoKSA/IFNLLkVNUFRZIDogU0suQ0hBUl9ET1QpICsgJGs7XG4gICAgICBsZXQgdG1wVmFsID0gb2JqZWN0WyRrXTtcbiAgICAgIGlmIChfLmlzUGxhaW5PYmplY3QodG1wVmFsKSkge1xuICAgICAgICBNb2RlbC5vYmplY3QyUGF0aHModG1wS2V5LCBwYXRocywgdG1wVmFsKVxuICAgICAgfSBlbHNlIGlmIChTSy5zNGIodG1wVmFsKSAmJiB0bXBWYWwpIHtcbiAgICAgICAgcGF0aHMucHVzaCh0bXBLZXkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0gc2FvIHN0cmluZ1tyZWddLCBzdHJpbmcgYXJyYXkgb3Igb2JqZWN0XG4gICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICovXG4gIHN0YXRpYyBwYXJzZVNhbyhzYW8pIHtcbiAgICBsZXQgcnRuID0gW107XG4gICAgaWYgKHNhbykge1xuICAgICAgaWYgKF8uaXNQbGFpbk9iamVjdChzYW8pKSB7XG4gICAgICAgIE1vZGVsLm9iamVjdDJQYXRocyhTSy5FTVBUWSwgcnRuLCBzYW8pO1xuICAgICAgfSBlbHNlIGlmIChfLmlzQXJyYXkoc2FvKSkge1xuICAgICAgICBydG4gPSBydG4uY29uY2F0KHNhbyk7XG4gICAgICB9IGVsc2UgaWYgKF8uaXNTdHJpbmcoc2FvKSkge1xuICAgICAgICBydG4ucHVzaChzYW8pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcnRuO1xuICB9XG5cbiAgZXJyb3JzID0ge307XG4gIGlkTGlzdGVuZXJzID0ge307XG4gIG1vbml0b3JzID0ge307XG4gIHJlZ0xpc3RlbmVycyA9IHt9O1xuXG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIHByb3BlcnR5IHBsYWluIG9iamVjdFxuICAgKiBAcGFyYW0gdmFsaWRhdG9yXG4gICAgICovXG4gIGNvbnN0cnVjdG9yKHByb3BlcnR5ID0ge30sIHZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoKSkge1xuICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgICB0aGlzLnZhbGlkYXRvciA9IHZhbGlkYXRvcjtcblxuICAgIHRoaXMuYWRkQWxsVmFsaWRhdG9yTW9uaXRvcigpO1xuICB9XG5cbiAgLy92YWxpZGF0b3IgYmVnaW5cbiAgYWRkQWxsVmFsaWRhdG9yTW9uaXRvcigpIHtcbiAgICBsZXQgdG1wQ29uZmlncyA9IHRoaXMuZ2V0VmFsaWRhdG9yKCkuZ2V0Q29uZmlncygpO1xuICAgIE9iamVjdC5rZXlzKHRtcENvbmZpZ3MpLmZvckVhY2goKCRrZXkpID0+IHtcbiAgICAgIHRoaXMuYWRkVmFsaWRhdG9yTW9uaXRvcigka2V5LCB0bXBDb25maWdzWyRrZXldKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZFZhbGlkYXRvck1vbml0b3IoaWQsIGNvbmZpZykge1xuICAgIE9iamVjdC5rZXlzKGNvbmZpZykuZm9yRWFjaCgoJGtleSkgPT4ge1xuICAgICAgdGhpcy5hZGRWYWxpZGF0b3JSdWxlTW9uaXRvcihpZCwgJGtleSwgY29uZmlnWyRrZXldKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZFZhbGlkYXRvclJ1bGVNb25pdG9yKGlkLCBydWxlLCBzZXR0aW5nKSB7XG4gICAgaWYgKCF0aGlzLm1vbml0b3JzW2lkXSkge1xuICAgICAgdGhpcy5lcnJvcnNbaWRdID0ge307XG4gICAgICB0aGlzLm1vbml0b3JzW2lkXSA9IHRoaXMudmFsaWRhdGUuYmluZChpZCk7XG4gICAgICB0aGlzLmFkZElkQ2hhbmdlZExpc3RlbmVyKGlkLCB0aGlzLm1vbml0b3JzW2lkXSlcbiAgICB9XG4gICAgaWYgKHJ1bGUgPT0gQ2ZnLlBST1BfREVQUykge1xuICAgICAgTW9kZWwucGFyc2VTYW8oc2V0dGluZykuZm9yRWFjaCgoJGkpID0+IHtcbiAgICAgICAgaWYgKF8uaXNSZWdFeHAoJGkpKSB7XG4gICAgICAgICAgdGhpcy5hZGRSZWdDaGFuZ2VkTGlzdGVuZXIoJGksIHRoaXMubW9uaXRvcnNbaWRdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmFkZElkQ2hhbmdlZExpc3RlbmVyKCRpLCB0aGlzLm1vbml0b3JzW2lkXSlcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0bXBTZXR0aW5nRGVwcyA9IHNldHRpbmdbQ2ZnLlBST1BfREVQU107XG4gICAgICBpZiAodG1wU2V0dGluZ0RlcHMpIHtcbiAgICAgICAgTW9kZWwucGFyc2VTYW8odG1wU2V0dGluZ0RlcHMpLmZvckVhY2goKCRpKSA9PiB7XG4gICAgICAgICAgaWYgKF8uaXNSZWdFeHAoJGkpKSB7XG4gICAgICAgICAgICB0aGlzLmFkZFJlZ0NoYW5nZWRMaXN0ZW5lcigkaSwgdGhpcy5tb25pdG9yc1tpZF0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkZElkQ2hhbmdlZExpc3RlbmVyKCRpLCB0aGlzLm1vbml0b3JzW2lkXSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJtdlZhbGlkYXRvck1vbml0b3IoaWQsIGNvbmZpZykge1xuICAgIE9iamVjdC5rZXlzKGNvbmZpZykuZm9yRWFjaCgoJGtleSkgPT4ge1xuICAgICAgaWYgKCRrZXkgPT0gQ2ZnLlBST1BfREVQUykge1xuICAgICAgICBNb2RlbC5wYXJzZVNhbyhjb25maWdbJGtleV0pLmZvckVhY2goKCRpKSA9PiB7XG4gICAgICAgICAgaWYgKF8uaXNSZWdFeHAoJGkpKSB7XG4gICAgICAgICAgICB0aGlzLnJtdlJlZ0NoYW5nZWRMaXN0ZW5lcigkaSwgdGhpcy5tb25pdG9yc1tpZF0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJtdklkQ2hhbmdlZExpc3RlbmVyKCRpLCB0aGlzLm1vbml0b3JzW2lkXSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5ybXZWYWxpZGF0b3JSdWxlTW9uaXRvcihpZCwgJGtleSwgY29uZmlnWyRrZXldKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJtdlZhbGlkYXRvclJ1bGVNb25pdG9yKGlkLCBydWxlLCBzZXR0aW5nKSB7XG4gICAgbGV0IHRtcFNldHRpbmdEZXBzID0gc2V0dGluZ1tDZmcuUFJPUF9ERVBTXTtcbiAgICBpZiAodG1wU2V0dGluZ0RlcHMpIHtcbiAgICAgIE1vZGVsLnBhcnNlU2FvKHRtcFNldHRpbmdEZXBzKS5mb3JFYWNoKCgkaSkgPT4ge1xuICAgICAgICBpZiAoXy5pc1JlZ0V4cCgkaSkpIHtcbiAgICAgICAgICB0aGlzLnJtdlJlZ0NoYW5nZWRMaXN0ZW5lcigkaSwgdGhpcy5tb25pdG9yc1tpZF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucm12SWRDaGFuZ2VkTGlzdGVuZXIoJGksIHRoaXMubW9uaXRvcnNbaWRdKVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZUJ5U2NlbmFyaW8oc2NlbmFyaW8pIHtcbiAgICBsZXQgY29uZmlncyA9IHRoaXMuZ2V0VmFsaWRhdG9yKCkuZ2V0Q29uZmlncygpO1xuICAgIE9iamVjdC5rZXlzKGNvbmZpZ3MpLmZvckVhY2goKCRtb2RlbElkKSA9PiB7XG4gICAgICBpZiAoIXNjZW5hcmlvIHx8IHNjZW5hcmlvID09IGNvbmZpZ3NbJG1vZGVsSWRdW0NmZy5QUk9QX1NDRU5BUklPXSkge1xuICAgICAgICB0aGlzLnZhbGlkYXRlLmNhbGwoJG1vZGVsSWQsIHttb2RlbDogdGhpc30pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdmFsaWRhdGUoZXZ0KSB7XG4gICAgbGV0IHRtcElkID0gdGhpcztcbiAgICBsZXQgdG1wTW9kZWwgPSBldnQubW9kZWw7XG4gICAgbGV0IHRtcENvbmZpZyA9IGV2dC5tb2RlbC5nZXRWYWxpZGF0b3IoKS5nZXRDb25maWdzKClbdG1wSWRdO1xuICAgIGlmICh0bXBDb25maWcgJiYgXy5pc09iamVjdCh0bXBDb25maWcpKSB7XG4gICAgICBPYmplY3Qua2V5cyh0bXBDb25maWcpLmZvckVhY2goKCRrZXkpID0+IHtcbiAgICAgICAgaWYgKCRrZXkgPT0gQ2ZnLlBST1BfU0NFTkFSSU8pIHtcbiAgICAgICAgICAvL2lnbm9yZVxuICAgICAgICB9IGVsc2UgaWYgKCRrZXkgPT0gQ2ZnLlBST1BfRlVOQykge1xuICAgICAgICAgIHRtcE1vZGVsLmV4ZWNWYWxpZGF0ZSgka2V5LCB0bXBJZCwgdG1wQ29uZmlnWyRrZXldLCB0bXBNb2RlbCwgdW5kZWZpbmVkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgdG1wUnVsZSA9IHRtcE1vZGVsLmdldFZhbGlkYXRvcigpLmdldFJ1bGVzKClbJGtleV07XG4gICAgICAgICAgaWYgKF8uaXNGdW5jdGlvbih0bXBSdWxlKSkge1xuICAgICAgICAgICAgdG1wTW9kZWwuZXhlY1ZhbGlkYXRlKCRrZXksIHRtcElkLCB0bXBSdWxlLCB0bXBNb2RlbCwgdG1wQ29uZmlnWyRrZXldKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKF8uaXNPYmplY3QodG1wUnVsZSkgJiYgXy5pc0Z1bmN0aW9uKHRtcFJ1bGVbQ2ZnLlBST1BfRlVOQ10pKSB7XG4gICAgICAgICAgICB0bXBNb2RlbC5leGVjVmFsaWRhdGUoJGtleSwgdG1wSWQsIHRtcFJ1bGVbQ2ZnLlBST1BfRlVOQ10sIHRtcE1vZGVsLCB1bmRlZmluZWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZXhlY1ZhbGlkYXRlKHJ1bGUsIGlkLCBmdW5jLCBtb2RlbCwgc2V0dGluZykge1xuICAgIGxldCB0bXBSdG4gPSBmdW5jKG1vZGVsLCBtb2RlbC5za1ZhbChpZCksIHNldHRpbmcpO1xuICAgIGlmICghXy5pc0Jvb2xlYW4odG1wUnRuKSkgey8vdHJ1ZSBvciBtZXNzYWdlXG4gICAgICB0aGlzLmVycm9ycy5za1ZhbChpZCArIFNLLkNIQVJfRE9UICsgcnVsZSwgdG1wUnRuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHRoaXMuZXJyb3JzW2lkXVtydWxlXTtcbiAgICB9XG4gICAgdGhpcy5maXJlRXJyb3JlZEV2ZW50KGlkLCBtb2RlbC5za1ZhbChpZCksIG1vZGVsLnNrVmFsKGlkKSk7XG4gIH1cblxuICAvL3ZhbGlkYXRvciBlbmRcbiAgaGFzRXJyb3JzKCkge1xuICAgIGxldCBydG4gPSBmYWxzZTtcbiAgICBPYmplY3Qua2V5cyh0aGlzLmVycm9ycykuZm9yRWFjaCgoJG1vZGVsSWQpPT4ge1xuICAgICAgcnRuID0gcnRuIHx8ICFfLmlzRW1wdHkodGhpcy5lcnJvcnNbJG1vZGVsSWRdKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcnRuO1xuICB9XG5cbiAgZ2V0QWxsRXJyb3JzKCkge1xuICAgIHJldHVybiB0aGlzLmVycm9ycztcbiAgfVxuXG4gIGdldEVycm9ycyhpZCkge1xuICAgIHJldHVybiBTSy5zNG8odGhpcy5lcnJvcnNbaWRdKTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gaWRcbiAgICogQHBhcmFtIGxpc3RlbmVyIHBsZWFzZSBiaW5kIGNvbnRleHRcbiAgICovXG4gIGFkZElkQ2hhbmdlZExpc3RlbmVyKGlkLCBsaXN0ZW5lcikge1xuICAgIHRoaXMuYWRkSWRMaXN0ZW5lcihpZCwgRXZ0VHlwZS5DaGFuZ2VkLCBsaXN0ZW5lcik7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGlkXG4gICAqIEBwYXJhbSBsaXN0ZW5lciBwbGVhc2UgYmluZCBjb250ZXh0XG4gICAqL1xuICBhZGRJZEVycm9yZWRMaXN0ZW5lcihpZCwgbGlzdGVuZXIpIHtcbiAgICB0aGlzLmFkZElkTGlzdGVuZXIoaWQsIEV2dFR5cGUuRXJyb3JlZCwgbGlzdGVuZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBpZFxuICAgKiBAcGFyYW0gdHlwZVxuICAgKiBAcGFyYW0gbGlzdGVuZXIgcGxlYXNlIGJpbmQgY29udGV4dFxuICAgKi9cbiAgYWRkSWRMaXN0ZW5lcihpZCwgdHlwZSwgbGlzdGVuZXIpIHtcbiAgICBpZiAoIXRoaXMuaWRMaXN0ZW5lcnNbdHlwZV0pIHtcbiAgICAgIHRoaXMuaWRMaXN0ZW5lcnNbdHlwZV0gPSB7fTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmlkTGlzdGVuZXJzW3R5cGVdW2lkXSkge1xuICAgICAgdGhpcy5pZExpc3RlbmVyc1t0eXBlXVtpZF0gPSBbXTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaWRMaXN0ZW5lcnNbdHlwZV1baWRdLmluZGV4T2YobGlzdGVuZXIpIDwgMCkge1xuICAgICAgdGhpcy5pZExpc3RlbmVyc1t0eXBlXVtpZF0ucHVzaChsaXN0ZW5lcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSByZWdcbiAgICogQHBhcmFtIGxpc3RlbmVyIHBsZWFzZSBiaW5kIGNvbnRleHRcbiAgICovXG4gIGFkZFJlZ0NoYW5nZWRMaXN0ZW5lcihyZWcsIGxpc3RlbmVyKSB7XG4gICAgdGhpcy5hZGRSZWdMaXN0ZW5lcihyZWcsIEV2dFR5cGUuQ2hhbmdlZCwgbGlzdGVuZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSByZWdcbiAgICogQHBhcmFtIGxpc3RlbmVyIHBsZWFzZSBiaW5kIGNvbnRleHRcbiAgICovXG4gIGFkZFJlZ0Vycm9yZWRMaXN0ZW5lcihyZWcsIGxpc3RlbmVyKSB7XG4gICAgdGhpcy5hZGRSZWdMaXN0ZW5lcihyZWcsIEV2dFR5cGUuRXJyb3JlZCwgbGlzdGVuZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSByZWdcbiAgICogQHBhcmFtIHR5cGVcbiAgICogQHBhcmFtIGxpc3RlbmVyIHBsZWFzZSBiaW5kIGNvbnRleHRcbiAgICovXG4gIGFkZFJlZ0xpc3RlbmVyKHJlZywgdHlwZSwgbGlzdGVuZXIpIHtcbiAgICBpZiAoIXRoaXMucmVnTGlzdGVuZXJzW3R5cGVdKSB7XG4gICAgICB0aGlzLnJlZ0xpc3RlbmVyc1t0eXBlXSA9IHt9O1xuICAgIH1cbiAgICBpZiAoIXRoaXMucmVnTGlzdGVuZXJzW3R5cGVdW3JlZ10pIHtcbiAgICAgIHRoaXMucmVnTGlzdGVuZXJzW3R5cGVdW3JlZ10gPSBbXTtcbiAgICB9XG4gICAgaWYgKHRoaXMucmVnTGlzdGVuZXJzW3R5cGVdW3JlZ10uaW5kZXhPZihsaXN0ZW5lcikgPCAwKSB7XG4gICAgICB0aGlzLnJlZ0xpc3RlbmVyc1t0eXBlXVtyZWddLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cbiAgfVxuXG4gIGZpcmVDaGFuZ2VkRXZlbnQoaWQsIG9sZCwgY3VycmVudCkge1xuICAgIHRoaXMuZmlyZUV2ZW50KHttb2RlbDogdGhpcywgaWQ6IGlkLCBvbGQ6IG9sZCwgY3VycmVudDogY3VycmVudCwgdHlwZTogRXZ0VHlwZS5DaGFuZ2VkfSk7XG4gIH1cblxuICBmaXJlRXJyb3JlZEV2ZW50KGlkLCBvbGQsIGN1cnJlbnQpIHtcbiAgICB0aGlzLmZpcmVFdmVudCh7bW9kZWw6IHRoaXMsIGlkOiBpZCwgb2xkOiBvbGQsIGN1cnJlbnQ6IGN1cnJlbnQsIHR5cGU6IEV2dFR5cGUuRXJyb3JlZH0pO1xuICB9XG5cbiAgZmlyZUV2ZW50KGV2dCkge1xuICAgIHZhciBtYXRjaGVkTGlzdGVuZXJzID0gW107XG4gICAgdmFyIGlkTGlzdGVuZXJzID0gdGhpcy5pZExpc3RlbmVyc1tldnQudHlwZV0gPyB0aGlzLmlkTGlzdGVuZXJzW2V2dC50eXBlXSA6IHt9O1xuICAgIG1hdGNoZWRMaXN0ZW5lcnMucHVzaC5hcHBseShtYXRjaGVkTGlzdGVuZXJzLCBpZExpc3RlbmVyc1tldnQuaWRdID8gaWRMaXN0ZW5lcnNbZXZ0LmlkXSA6IFtdKTtcbiAgICB2YXIgcmVnTGlzdGVuZXJzID0gdGhpcy5yZWdMaXN0ZW5lcnNbZXZ0LnR5cGVdID8gdGhpcy5yZWdMaXN0ZW5lcnNbZXZ0LnR5cGVdIDoge307XG4gICAgT2JqZWN0LmtleXMocmVnTGlzdGVuZXJzKS5mb3JFYWNoKHJlZyA9PiB7XG4gICAgICBtYXRjaGVkTGlzdGVuZXJzLnB1c2guYXBwbHkobWF0Y2hlZExpc3RlbmVycywgZXZ0LmlkLm1hdGNoKHJlZykgPyBsaXN0ZW5lcnNbcmVnXSA6IFtdKTtcbiAgICB9KTtcblxuICAgIG1hdGNoZWRMaXN0ZW5lcnMuZm9yRWFjaChsaXN0ZW5lciA9PiB7XG4gICAgICBsaXN0ZW5lcihldnQpO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcm12SWRDaGFuZ2VkTGlzdGVuZXIoaWQsIGxpc3RlbmVyKSB7XG4gICAgdGhpcy5ybXZJZExpc3RlbmVyKGlkLCBFdnRUeXBlLkNoYW5nZWQsIGxpc3RlbmVyKTtcbiAgfVxuXG4gIHJtdklkRXJyb3JlZExpc3RlbmVyKGlkLCBsaXN0ZW5lcikge1xuICAgIHRoaXMucm12SWRMaXN0ZW5lcihpZCwgRXZ0VHlwZS5FcnJvcmVkLCBsaXN0ZW5lcik7XG4gIH1cblxuICBybXZJZExpc3RlbmVyKGlkLCB0eXBlLCBsaXN0ZW5lcikge1xuICAgIGlmICghdGhpcy5pZExpc3RlbmVyc1t0eXBlXSkge1xuICAgICAgdGhpcy5pZExpc3RlbmVyc1t0eXBlXSA9IHt9O1xuICAgIH1cbiAgICBpZiAoIXRoaXMuaWRMaXN0ZW5lcnNbdHlwZV1baWRdKSB7XG4gICAgICB0aGlzLmlkTGlzdGVuZXJzW3R5cGVdW2lkXSA9IFtdO1xuICAgIH1cbiAgICBpZiAodGhpcy5pZExpc3RlbmVyc1t0eXBlXVtpZF0uaW5kZXhPZihsaXN0ZW5lcikgPj0gMCkge1xuICAgICAgdGhpcy5pZExpc3RlbmVyc1t0eXBlXVtpZF0uc2tSbXYobGlzdGVuZXIpO1xuICAgIH1cbiAgfVxuXG4gIHJtdlJlZ0NoYW5nZWRMaXN0ZW5lcihyZWcsIGxpc3RlbmVyKSB7XG4gICAgdGhpcy5ybXZSZWdMaXN0ZW5lcihyZWcsIEV2dFR5cGUuQ2hhbmdlZCwgbGlzdGVuZXIpO1xuICB9XG5cbiAgcm12UmVnRXJyb3JlZExpc3RlbmVyKHJlZywgbGlzdGVuZXIpIHtcbiAgICB0aGlzLnJtdlJlZ0xpc3RlbmVyKHJlZywgRXZ0VHlwZS5FcnJvcmVkLCBsaXN0ZW5lcik7XG4gIH1cblxuICBybXZSZWdMaXN0ZW5lcihyZWcsIHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgaWYgKCF0aGlzLnJlZ0xpc3RlbmVyc1t0eXBlXSkge1xuICAgICAgdGhpcy5yZWdMaXN0ZW5lcnNbdHlwZV0gPSB7fTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnJlZ0xpc3RlbmVyc1t0eXBlXVtyZWddKSB7XG4gICAgICB0aGlzLnJlZ0xpc3RlbmVyc1t0eXBlXVtyZWddID0gW107XG4gICAgfVxuICAgIGlmICh0aGlzLnJlZ0xpc3RlbmVyc1t0eXBlXVtyZWddLmluZGV4T2YobGlzdGVuZXIpID49IDApIHtcbiAgICAgIHRoaXMucmVnTGlzdGVuZXJzW3R5cGVdW3JlZ10uc2tSbXYobGlzdGVuZXIpO1xuICAgIH1cbiAgfVxuXG4gIHNrVmFsKGlkLCB2YWx1ZSkge1xuICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMucHJvcGVydHkuc2tWYWwoaWQpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgaWYgKG9sZFZhbHVlICE9IHZhbHVlKSB7XG4gICAgICAgIHRoaXMucHJvcGVydHkuc2tWYWwoaWQsIHZhbHVlKTtcbiAgICAgICAgdGhpcy5maXJlQ2hhbmdlZEV2ZW50KGlkLCBvbGRWYWx1ZSwgdmFsdWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvbGRWYWx1ZTtcbiAgICB9XG4gIH1cblxuICBnZXRWYWxpZGF0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsaWRhdG9yO1xuICB9XG59XG4iXX0=