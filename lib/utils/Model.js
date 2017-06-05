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
        var tmpKey = prefix + (String(prefix).skBlank() ? '' : _skJs2.default.CHAR_DOT) + $k;
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
          Model.object2Paths('', rtn, sao);
        } else if (_lodash2.default.isArray(sao)) {
          rtn = rtn.concat(sao);
        } else if (_lodash2.default.isString(sao)) {
          rtn.push(sao);
        }
      }
      return rtn;
    }
  }]);

  function Model() {
    var model = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var validator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _Validator2.default();

    _classCallCheck(this, Model);

    this.errors = {};
    this.idListeners = {};
    this.monitors = {};
    this.regListeners = {};

    this.model = model;
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
      var oldValue = this.model.skVal(id);
      if (arguments.length > 1) {
        if (oldValue != value) {
          this.model.skVal(id, value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL01vZGVsLmpzIl0sIm5hbWVzIjpbIk1vZGVsIiwicHJlZml4IiwicGF0aHMiLCJvYmplY3QiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsIiRrIiwidG1wS2V5IiwiU3RyaW5nIiwic2tCbGFuayIsIkNIQVJfRE9UIiwidG1wVmFsIiwiaXNQbGFpbk9iamVjdCIsIm9iamVjdDJQYXRocyIsInM0YiIsInB1c2giLCJzYW8iLCJydG4iLCJpc0FycmF5IiwiY29uY2F0IiwiaXNTdHJpbmciLCJtb2RlbCIsInZhbGlkYXRvciIsImVycm9ycyIsImlkTGlzdGVuZXJzIiwibW9uaXRvcnMiLCJyZWdMaXN0ZW5lcnMiLCJhZGRBbGxWYWxpZGF0b3JNb25pdG9yIiwidG1wQ29uZmlncyIsImdldFZhbGlkYXRvciIsImdldENvbmZpZ3MiLCIka2V5IiwiYWRkVmFsaWRhdG9yTW9uaXRvciIsImlkIiwiY29uZmlnIiwiYWRkVmFsaWRhdG9yUnVsZU1vbml0b3IiLCJydWxlIiwic2V0dGluZyIsInZhbGlkYXRlIiwiYmluZCIsImFkZElkQ2hhbmdlZExpc3RlbmVyIiwiUFJPUF9ERVBTIiwicGFyc2VTYW8iLCIkaSIsImlzUmVnRXhwIiwiYWRkUmVnQ2hhbmdlZExpc3RlbmVyIiwidG1wU2V0dGluZ0RlcHMiLCJybXZSZWdDaGFuZ2VkTGlzdGVuZXIiLCJybXZJZENoYW5nZWRMaXN0ZW5lciIsInJtdlZhbGlkYXRvclJ1bGVNb25pdG9yIiwic2NlbmFyaW8iLCJjb25maWdzIiwiJG1vZGVsSWQiLCJQUk9QX1NDRU5BUklPIiwiY2FsbCIsImV2dCIsInRtcElkIiwidG1wTW9kZWwiLCJ0bXBDb25maWciLCJpc09iamVjdCIsIlBST1BfRlVOQyIsImV4ZWNWYWxpZGF0ZSIsInVuZGVmaW5lZCIsInRtcFJ1bGUiLCJnZXRSdWxlcyIsImlzRnVuY3Rpb24iLCJmdW5jIiwidG1wUnRuIiwic2tWYWwiLCJpc0Jvb2xlYW4iLCJmaXJlRXJyb3JlZEV2ZW50IiwiaXNFbXB0eSIsInM0byIsImxpc3RlbmVyIiwiYWRkSWRMaXN0ZW5lciIsIkNoYW5nZWQiLCJFcnJvcmVkIiwidHlwZSIsImluZGV4T2YiLCJyZWciLCJhZGRSZWdMaXN0ZW5lciIsIm9sZCIsImN1cnJlbnQiLCJmaXJlRXZlbnQiLCJtYXRjaGVkTGlzdGVuZXJzIiwiYXBwbHkiLCJtYXRjaCIsImxpc3RlbmVycyIsInJtdklkTGlzdGVuZXIiLCJza1JtdiIsInJtdlJlZ0xpc3RlbmVyIiwidmFsdWUiLCJvbGRWYWx1ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsImZpcmVDaGFuZ2VkRXZlbnQiLCJQUk9QX1NLIiwiUFJPUF9TWVMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0lBRXFCQSxLOzs7aUNBS0NDLE0sRUFBaUM7QUFBQSxVQUF6QkMsS0FBeUIsdUVBQWpCLEVBQWlCO0FBQUEsVUFBYkMsTUFBYSx1RUFBSixFQUFJOztBQUNuREMsYUFBT0MsSUFBUCxDQUFZRixNQUFaLEVBQW9CRyxPQUFwQixDQUE0QixVQUFDQyxFQUFELEVBQVE7QUFDbEMsWUFBSUMsU0FBU1AsVUFBVVEsT0FBT1IsTUFBUCxFQUFlUyxPQUFmLEtBQTJCLEVBQTNCLEdBQWdDLGVBQUdDLFFBQTdDLElBQXlESixFQUF0RTtBQUNBLFlBQUlLLFNBQVNULE9BQU9JLEVBQVAsQ0FBYjtBQUNBLFlBQUksaUJBQUVNLGFBQUYsQ0FBZ0JELE1BQWhCLENBQUosRUFBNkI7QUFDM0JaLGdCQUFNYyxZQUFOLENBQW1CTixNQUFuQixFQUEyQk4sS0FBM0IsRUFBa0NVLE1BQWxDO0FBQ0QsU0FGRCxNQUVPLElBQUksZUFBR0csR0FBSCxDQUFPSCxNQUFQLEtBQWtCQSxNQUF0QixFQUE4QjtBQUNuQ1YsZ0JBQU1jLElBQU4sQ0FBV1IsTUFBWDtBQUNEO0FBQ0YsT0FSRDtBQVNEOzs7OztBQUVEOzs7OzZCQUlnQlMsRyxFQUFLO0FBQ25CLFVBQUlDLE1BQU0sRUFBVjtBQUNBLFVB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bEIsSUFBMEIsRUFBMUI7QUFDRDtBQUNELFVBQUksQ0FBQyxLQUFLbkQsWUFBTCxDQUFrQm1ELElBQWxCLEVBQXdCRSxHQUF4QixDQUFMLEVBQW1DO0FBQ2pDLGFBQUtyRCxZQUFMLENBQWtCbUQsSUFBbEIsRUFBd0JFLEdBQXhCLElBQStCLEVBQS9CO0FBQ0Q7QUFDRCxVQUFJLEtBQUtyRCxZQUFMLENBQWtCbUQsSUFBbEIsRUFBd0JFLEdBQXhCLEVBQTZCRCxPQUE3QixDQUFxQ0wsUUFBckMsS0FBa0QsQ0FBdEQsRUFBeUQ7QUFDdkQsYUFBSy9DLFlBQUwsQ0FBa0JtRCxJQUFsQixFQUF3QkUsR0FBeEIsRUFBNkJVLEtBQTdCLENBQW1DaEIsUUFBbkM7QUFDRDtBQUNGOzs7MEJBRUt4QyxFLEVBQUkwRCxLLEVBQU87QUFDZixVQUFJQyxXQUFXLEtBQUt2RSxLQUFMLENBQVcrQyxLQUFYLENBQWlCbkMsRUFBakIsQ0FBZjtBQUNBLFVBQUk0RCxVQUFVQyxNQUFWLEdBQW1CLENBQXZCLEVBQTBCO0FBQ3hCLFlBQUlGLFlBQVlELEtBQWhCLEVBQXVCO0FBQ3JCLGVBQUt0RSxLQUFMLENBQVcrQyxLQUFYLENBQWlCbkMsRUFBakIsRUFBcUIwRCxLQUFyQjtBQUNBLGVBQUtJLGdCQUFMLENBQXNCOUQsRUFBdEIsRUFBMEIyRCxRQUExQixFQUFvQ0QsS0FBcEM7QUFDRDtBQUNELGVBQU8sSUFBUDtBQUNELE9BTkQsTUFNTztBQUNMLGVBQU9DLFFBQVA7QUFDRDtBQUNGOzs7bUNBRWM7QUFDYixhQUFPLEtBQUt0RSxTQUFaO0FBQ0Q7Ozs7OztBQXRVa0J2QixLLENBRVppRyxPLEdBQVUsUztBQUZFakcsSyxDQUdaa0csUSxHQUFXLFk7a0JBSENsRyxLIiwiZmlsZSI6InV0aWxzL01vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBTSyBmcm9tICdzay1qcyc7XG5pbXBvcnQgQ2ZnIGZyb20gJy4vQ2ZnJztcbmltcG9ydCB7RXZ0VHlwZX0gZnJvbSAnLi9Db25zdCc7XG5pbXBvcnQgVmFsaWRhdG9yIGZyb20gJy4vVmFsaWRhdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kZWwge1xuXG4gIHN0YXRpYyBQUk9QX1NLID0gJ3NrTW9kZWwnO1xuICBzdGF0aWMgUFJPUF9TWVMgPSAnc2tTeXNNb2RlbCc7XG5cbiAgc3RhdGljIG9iamVjdDJQYXRocyhwcmVmaXgsIHBhdGhzID0gW10sIG9iamVjdCA9IHt9KSB7XG4gICAgT2JqZWN0LmtleXMob2JqZWN0KS5mb3JFYWNoKCgkaykgPT4ge1xuICAgICAgbGV0IHRtcEtleSA9IHByZWZpeCArIChTdHJpbmcocHJlZml4KS5za0JsYW5rKCkgPyAnJyA6IFNLLkNIQVJfRE9UKSArICRrO1xuICAgICAgbGV0IHRtcFZhbCA9IG9iamVjdFska107XG4gICAgICBpZiAoXy5pc1BsYWluT2JqZWN0KHRtcFZhbCkpIHtcbiAgICAgICAgTW9kZWwub2JqZWN0MlBhdGhzKHRtcEtleSwgcGF0aHMsIHRtcFZhbClcbiAgICAgIH0gZWxzZSBpZiAoU0suczRiKHRtcFZhbCkgJiYgdG1wVmFsKSB7XG4gICAgICAgIHBhdGhzLnB1c2godG1wS2V5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHNhbyBzdHJpbmdbcmVnXSwgc3RyaW5nIGFycmF5IG9yIG9iamVjdFxuICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAqL1xuICBzdGF0aWMgcGFyc2VTYW8oc2FvKSB7XG4gICAgbGV0IHJ0biA9IFtdO1xuICAgIGlmIChzYW8pIHtcbiAgICAgIGlmIChfLmlzUGxhaW5PYmplY3Qoc2FvKSkge1xuICAgICAgICBNb2RlbC5vYmplY3QyUGF0aHMoJycsIHJ0biwgc2FvKTtcbiAgICAgIH0gZWxzZSBpZiAoXy5pc0FycmF5KHNhbykpIHtcbiAgICAgICAgcnRuID0gcnRuLmNvbmNhdChzYW8pO1xuICAgICAgfSBlbHNlIGlmIChfLmlzU3RyaW5nKHNhbykpIHtcbiAgICAgICAgcnRuLnB1c2goc2FvKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJ0bjtcbiAgfVxuXG4gIGVycm9ycyA9IHt9O1xuICBpZExpc3RlbmVycyA9IHt9O1xuICBtb25pdG9ycyA9IHt9O1xuICByZWdMaXN0ZW5lcnMgPSB7fTtcblxuICBjb25zdHJ1Y3Rvcihtb2RlbCA9IHt9LCB2YWxpZGF0b3IgPSBuZXcgVmFsaWRhdG9yKCkpIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgdGhpcy52YWxpZGF0b3IgPSB2YWxpZGF0b3I7XG5cbiAgICB0aGlzLmFkZEFsbFZhbGlkYXRvck1vbml0b3IoKTtcbiAgfVxuXG4gIC8vdmFsaWRhdG9yIGJlZ2luXG4gIGFkZEFsbFZhbGlkYXRvck1vbml0b3IoKSB7XG4gICAgbGV0IHRtcENvbmZpZ3MgPSB0aGlzLmdldFZhbGlkYXRvcigpLmdldENvbmZpZ3MoKTtcbiAgICBPYmplY3Qua2V5cyh0bXBDb25maWdzKS5mb3JFYWNoKCgka2V5KSA9PiB7XG4gICAgICB0aGlzLmFkZFZhbGlkYXRvck1vbml0b3IoJGtleSwgdG1wQ29uZmlnc1ska2V5XSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRWYWxpZGF0b3JNb25pdG9yKGlkLCBjb25maWcpIHtcbiAgICBPYmplY3Qua2V5cyhjb25maWcpLmZvckVhY2goKCRrZXkpID0+IHtcbiAgICAgIHRoaXMuYWRkVmFsaWRhdG9yUnVsZU1vbml0b3IoaWQsICRrZXksIGNvbmZpZ1ska2V5XSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRWYWxpZGF0b3JSdWxlTW9uaXRvcihpZCwgcnVsZSwgc2V0dGluZykge1xuICAgIGlmICghdGhpcy5tb25pdG9yc1tpZF0pIHtcbiAgICAgIHRoaXMuZXJyb3JzW2lkXSA9IHt9O1xuICAgICAgdGhpcy5tb25pdG9yc1tpZF0gPSB0aGlzLnZhbGlkYXRlLmJpbmQoaWQpO1xuICAgICAgdGhpcy5hZGRJZENoYW5nZWRMaXN0ZW5lcihpZCwgdGhpcy5tb25pdG9yc1tpZF0pXG4gICAgfVxuICAgIGlmIChydWxlID09IENmZy5QUk9QX0RFUFMpIHtcbiAgICAgIE1vZGVsLnBhcnNlU2FvKHNldHRpbmcpLmZvckVhY2goKCRpKSA9PiB7XG4gICAgICAgIGlmIChfLmlzUmVnRXhwKCRpKSkge1xuICAgICAgICAgIHRoaXMuYWRkUmVnQ2hhbmdlZExpc3RlbmVyKCRpLCB0aGlzLm1vbml0b3JzW2lkXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5hZGRJZENoYW5nZWRMaXN0ZW5lcigkaSwgdGhpcy5tb25pdG9yc1tpZF0pXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdG1wU2V0dGluZ0RlcHMgPSBzZXR0aW5nW0NmZy5QUk9QX0RFUFNdO1xuICAgICAgaWYgKHRtcFNldHRpbmdEZXBzKSB7XG4gICAgICAgIE1vZGVsLnBhcnNlU2FvKHRtcFNldHRpbmdEZXBzKS5mb3JFYWNoKCgkaSkgPT4ge1xuICAgICAgICAgIGlmIChfLmlzUmVnRXhwKCRpKSkge1xuICAgICAgICAgICAgdGhpcy5hZGRSZWdDaGFuZ2VkTGlzdGVuZXIoJGksIHRoaXMubW9uaXRvcnNbaWRdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGRJZENoYW5nZWRMaXN0ZW5lcigkaSwgdGhpcy5tb25pdG9yc1tpZF0pXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBybXZWYWxpZGF0b3JNb25pdG9yKGlkLCBjb25maWcpIHtcbiAgICBPYmplY3Qua2V5cyhjb25maWcpLmZvckVhY2goKCRrZXkpID0+IHtcbiAgICAgIGlmICgka2V5ID09IENmZy5QUk9QX0RFUFMpIHtcbiAgICAgICAgTW9kZWwucGFyc2VTYW8oY29uZmlnWyRrZXldKS5mb3JFYWNoKCgkaSkgPT4ge1xuICAgICAgICAgIGlmIChfLmlzUmVnRXhwKCRpKSkge1xuICAgICAgICAgICAgdGhpcy5ybXZSZWdDaGFuZ2VkTGlzdGVuZXIoJGksIHRoaXMubW9uaXRvcnNbaWRdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ybXZJZENoYW5nZWRMaXN0ZW5lcigkaSwgdGhpcy5tb25pdG9yc1tpZF0pXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucm12VmFsaWRhdG9yUnVsZU1vbml0b3IoaWQsICRrZXksIGNvbmZpZ1ska2V5XSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBybXZWYWxpZGF0b3JSdWxlTW9uaXRvcihpZCwgcnVsZSwgc2V0dGluZykge1xuICAgIGxldCB0bXBTZXR0aW5nRGVwcyA9IHNldHRpbmdbQ2ZnLlBST1BfREVQU107XG4gICAgaWYgKHRtcFNldHRpbmdEZXBzKSB7XG4gICAgICBNb2RlbC5wYXJzZVNhbyh0bXBTZXR0aW5nRGVwcykuZm9yRWFjaCgoJGkpID0+IHtcbiAgICAgICAgaWYgKF8uaXNSZWdFeHAoJGkpKSB7XG4gICAgICAgICAgdGhpcy5ybXZSZWdDaGFuZ2VkTGlzdGVuZXIoJGksIHRoaXMubW9uaXRvcnNbaWRdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJtdklkQ2hhbmdlZExpc3RlbmVyKCRpLCB0aGlzLm1vbml0b3JzW2lkXSlcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGVCeVNjZW5hcmlvKHNjZW5hcmlvKSB7XG4gICAgbGV0IGNvbmZpZ3MgPSB0aGlzLmdldFZhbGlkYXRvcigpLmdldENvbmZpZ3MoKTtcbiAgICBPYmplY3Qua2V5cyhjb25maWdzKS5mb3JFYWNoKCgkbW9kZWxJZCkgPT4ge1xuICAgICAgaWYgKCFzY2VuYXJpbyB8fCBzY2VuYXJpbyA9PSBjb25maWdzWyRtb2RlbElkXVtDZmcuUFJPUF9TQ0VOQVJJT10pIHtcbiAgICAgICAgdGhpcy52YWxpZGF0ZS5jYWxsKCRtb2RlbElkLCB7bW9kZWw6IHRoaXN9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHZhbGlkYXRlKGV2dCkge1xuICAgIGxldCB0bXBJZCA9IHRoaXM7XG4gICAgbGV0IHRtcE1vZGVsID0gZXZ0Lm1vZGVsO1xuICAgIGxldCB0bXBDb25maWcgPSBldnQubW9kZWwuZ2V0VmFsaWRhdG9yKCkuZ2V0Q29uZmlncygpW3RtcElkXTtcbiAgICBpZiAodG1wQ29uZmlnICYmIF8uaXNPYmplY3QodG1wQ29uZmlnKSkge1xuICAgICAgT2JqZWN0LmtleXModG1wQ29uZmlnKS5mb3JFYWNoKCgka2V5KSA9PiB7XG4gICAgICAgIGlmICgka2V5ID09IENmZy5QUk9QX1NDRU5BUklPKSB7XG4gICAgICAgICAgLy9pZ25vcmVcbiAgICAgICAgfSBlbHNlIGlmICgka2V5ID09IENmZy5QUk9QX0ZVTkMpIHtcbiAgICAgICAgICB0bXBNb2RlbC5leGVjVmFsaWRhdGUoJGtleSwgdG1wSWQsIHRtcENvbmZpZ1ska2V5XSwgdG1wTW9kZWwsIHVuZGVmaW5lZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IHRtcFJ1bGUgPSB0bXBNb2RlbC5nZXRWYWxpZGF0b3IoKS5nZXRSdWxlcygpWyRrZXldO1xuICAgICAgICAgIGlmIChfLmlzRnVuY3Rpb24odG1wUnVsZSkpIHtcbiAgICAgICAgICAgIHRtcE1vZGVsLmV4ZWNWYWxpZGF0ZSgka2V5LCB0bXBJZCwgdG1wUnVsZSwgdG1wTW9kZWwsIHRtcENvbmZpZ1ska2V5XSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChfLmlzT2JqZWN0KHRtcFJ1bGUpICYmIF8uaXNGdW5jdGlvbih0bXBSdWxlW0NmZy5QUk9QX0ZVTkNdKSkge1xuICAgICAgICAgICAgdG1wTW9kZWwuZXhlY1ZhbGlkYXRlKCRrZXksIHRtcElkLCB0bXBSdWxlW0NmZy5QUk9QX0ZVTkNdLCB0bXBNb2RlbCwgdW5kZWZpbmVkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGV4ZWNWYWxpZGF0ZShydWxlLCBpZCwgZnVuYywgbW9kZWwsIHNldHRpbmcpIHtcbiAgICBsZXQgdG1wUnRuID0gZnVuYyhtb2RlbCwgbW9kZWwuc2tWYWwoaWQpLCBzZXR0aW5nKTtcbiAgICBpZiAoIV8uaXNCb29sZWFuKHRtcFJ0bikpIHsvL3RydWUgb3IgbWVzc2FnZVxuICAgICAgdGhpcy5lcnJvcnMuc2tWYWwoaWQgKyBTSy5DSEFSX0RPVCArIHJ1bGUsIHRtcFJ0bik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmVycm9yc1tpZF1bcnVsZV07XG4gICAgfVxuICAgIHRoaXMuZmlyZUVycm9yZWRFdmVudChpZCwgbW9kZWwuc2tWYWwoaWQpLCBtb2RlbC5za1ZhbChpZCkpO1xuICB9XG5cbiAgLy92YWxpZGF0b3IgZW5kXG4gIGhhc0Vycm9ycygpIHtcbiAgICBsZXQgcnRuID0gZmFsc2U7XG4gICAgT2JqZWN0LmtleXModGhpcy5lcnJvcnMpLmZvckVhY2goKCRtb2RlbElkKT0+IHtcbiAgICAgIHJ0biA9IHJ0biB8fCAhXy5pc0VtcHR5KHRoaXMuZXJyb3JzWyRtb2RlbElkXSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJ0bjtcbiAgfVxuXG4gIGdldEFsbEVycm9ycygpIHtcbiAgICByZXR1cm4gdGhpcy5lcnJvcnM7XG4gIH1cblxuICBnZXRFcnJvcnMoaWQpIHtcbiAgICByZXR1cm4gU0suczRvKHRoaXMuZXJyb3JzW2lkXSk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGlkXG4gICAqIEBwYXJhbSBsaXN0ZW5lciBwbGVhc2UgYmluZCBjb250ZXh0XG4gICAqL1xuICBhZGRJZENoYW5nZWRMaXN0ZW5lcihpZCwgbGlzdGVuZXIpIHtcbiAgICB0aGlzLmFkZElkTGlzdGVuZXIoaWQsIEV2dFR5cGUuQ2hhbmdlZCwgbGlzdGVuZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBpZFxuICAgKiBAcGFyYW0gbGlzdGVuZXIgcGxlYXNlIGJpbmQgY29udGV4dFxuICAgKi9cbiAgYWRkSWRFcnJvcmVkTGlzdGVuZXIoaWQsIGxpc3RlbmVyKSB7XG4gICAgdGhpcy5hZGRJZExpc3RlbmVyKGlkLCBFdnRUeXBlLkVycm9yZWQsIGxpc3RlbmVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gaWRcbiAgICogQHBhcmFtIHR5cGVcbiAgICogQHBhcmFtIGxpc3RlbmVyIHBsZWFzZSBiaW5kIGNvbnRleHRcbiAgICovXG4gIGFkZElkTGlzdGVuZXIoaWQsIHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgaWYgKCF0aGlzLmlkTGlzdGVuZXJzW3R5cGVdKSB7XG4gICAgICB0aGlzLmlkTGlzdGVuZXJzW3R5cGVdID0ge307XG4gICAgfVxuICAgIGlmICghdGhpcy5pZExpc3RlbmVyc1t0eXBlXVtpZF0pIHtcbiAgICAgIHRoaXMuaWRMaXN0ZW5lcnNbdHlwZV1baWRdID0gW107XG4gICAgfVxuICAgIGlmICh0aGlzLmlkTGlzdGVuZXJzW3R5cGVdW2lkXS5pbmRleE9mKGxpc3RlbmVyKSA8IDApIHtcbiAgICAgIHRoaXMuaWRMaXN0ZW5lcnNbdHlwZV1baWRdLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gcmVnXG4gICAqIEBwYXJhbSBsaXN0ZW5lciBwbGVhc2UgYmluZCBjb250ZXh0XG4gICAqL1xuICBhZGRSZWdDaGFuZ2VkTGlzdGVuZXIocmVnLCBsaXN0ZW5lcikge1xuICAgIHRoaXMuYWRkUmVnTGlzdGVuZXIocmVnLCBFdnRUeXBlLkNoYW5nZWQsIGxpc3RlbmVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gcmVnXG4gICAqIEBwYXJhbSBsaXN0ZW5lciBwbGVhc2UgYmluZCBjb250ZXh0XG4gICAqL1xuICBhZGRSZWdFcnJvcmVkTGlzdGVuZXIocmVnLCBsaXN0ZW5lcikge1xuICAgIHRoaXMuYWRkUmVnTGlzdGVuZXIocmVnLCBFdnRUeXBlLkVycm9yZWQsIGxpc3RlbmVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gcmVnXG4gICAqIEBwYXJhbSB0eXBlXG4gICAqIEBwYXJhbSBsaXN0ZW5lciBwbGVhc2UgYmluZCBjb250ZXh0XG4gICAqL1xuICBhZGRSZWdMaXN0ZW5lcihyZWcsIHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgaWYgKCF0aGlzLnJlZ0xpc3RlbmVyc1t0eXBlXSkge1xuICAgICAgdGhpcy5yZWdMaXN0ZW5lcnNbdHlwZV0gPSB7fTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnJlZ0xpc3RlbmVyc1t0eXBlXVtyZWddKSB7XG4gICAgICB0aGlzLnJlZ0xpc3RlbmVyc1t0eXBlXVtyZWddID0gW107XG4gICAgfVxuICAgIGlmICh0aGlzLnJlZ0xpc3RlbmVyc1t0eXBlXVtyZWddLmluZGV4T2YobGlzdGVuZXIpIDwgMCkge1xuICAgICAgdGhpcy5yZWdMaXN0ZW5lcnNbdHlwZV1bcmVnXS5wdXNoKGxpc3RlbmVyKTtcbiAgICB9XG4gIH1cblxuICBmaXJlQ2hhbmdlZEV2ZW50KGlkLCBvbGQsIGN1cnJlbnQpIHtcbiAgICB0aGlzLmZpcmVFdmVudCh7bW9kZWw6IHRoaXMsIGlkOiBpZCwgb2xkOiBvbGQsIGN1cnJlbnQ6IGN1cnJlbnQsIHR5cGU6IEV2dFR5cGUuQ2hhbmdlZH0pO1xuICB9XG5cbiAgZmlyZUVycm9yZWRFdmVudChpZCwgb2xkLCBjdXJyZW50KSB7XG4gICAgdGhpcy5maXJlRXZlbnQoe21vZGVsOiB0aGlzLCBpZDogaWQsIG9sZDogb2xkLCBjdXJyZW50OiBjdXJyZW50LCB0eXBlOiBFdnRUeXBlLkVycm9yZWR9KTtcbiAgfVxuXG4gIGZpcmVFdmVudChldnQpIHtcbiAgICB2YXIgbWF0Y2hlZExpc3RlbmVycyA9IFtdO1xuICAgIHZhciBpZExpc3RlbmVycyA9IHRoaXMuaWRMaXN0ZW5lcnNbZXZ0LnR5cGVdID8gdGhpcy5pZExpc3RlbmVyc1tldnQudHlwZV0gOiB7fTtcbiAgICBtYXRjaGVkTGlzdGVuZXJzLnB1c2guYXBwbHkobWF0Y2hlZExpc3RlbmVycywgaWRMaXN0ZW5lcnNbZXZ0LmlkXSA/IGlkTGlzdGVuZXJzW2V2dC5pZF0gOiBbXSk7XG4gICAgdmFyIHJlZ0xpc3RlbmVycyA9IHRoaXMucmVnTGlzdGVuZXJzW2V2dC50eXBlXSA/IHRoaXMucmVnTGlzdGVuZXJzW2V2dC50eXBlXSA6IHt9O1xuICAgIE9iamVjdC5rZXlzKHJlZ0xpc3RlbmVycykuZm9yRWFjaChyZWcgPT4ge1xuICAgICAgbWF0Y2hlZExpc3RlbmVycy5wdXNoLmFwcGx5KG1hdGNoZWRMaXN0ZW5lcnMsIGV2dC5pZC5tYXRjaChyZWcpID8gbGlzdGVuZXJzW3JlZ10gOiBbXSk7XG4gICAgfSk7XG5cbiAgICBtYXRjaGVkTGlzdGVuZXJzLmZvckVhY2gobGlzdGVuZXIgPT4ge1xuICAgICAgbGlzdGVuZXIoZXZ0KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJtdklkQ2hhbmdlZExpc3RlbmVyKGlkLCBsaXN0ZW5lcikge1xuICAgIHRoaXMucm12SWRMaXN0ZW5lcihpZCwgRXZ0VHlwZS5DaGFuZ2VkLCBsaXN0ZW5lcik7XG4gIH1cblxuICBybXZJZEVycm9yZWRMaXN0ZW5lcihpZCwgbGlzdGVuZXIpIHtcbiAgICB0aGlzLnJtdklkTGlzdGVuZXIoaWQsIEV2dFR5cGUuRXJyb3JlZCwgbGlzdGVuZXIpO1xuICB9XG5cbiAgcm12SWRMaXN0ZW5lcihpZCwgdHlwZSwgbGlzdGVuZXIpIHtcbiAgICBpZiAoIXRoaXMuaWRMaXN0ZW5lcnNbdHlwZV0pIHtcbiAgICAgIHRoaXMuaWRMaXN0ZW5lcnNbdHlwZV0gPSB7fTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmlkTGlzdGVuZXJzW3R5cGVdW2lkXSkge1xuICAgICAgdGhpcy5pZExpc3RlbmVyc1t0eXBlXVtpZF0gPSBbXTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaWRMaXN0ZW5lcnNbdHlwZV1baWRdLmluZGV4T2YobGlzdGVuZXIpID49IDApIHtcbiAgICAgIHRoaXMuaWRMaXN0ZW5lcnNbdHlwZV1baWRdLnNrUm12KGxpc3RlbmVyKTtcbiAgICB9XG4gIH1cblxuICBybXZSZWdDaGFuZ2VkTGlzdGVuZXIocmVnLCBsaXN0ZW5lcikge1xuICAgIHRoaXMucm12UmVnTGlzdGVuZXIocmVnLCBFdnRUeXBlLkNoYW5nZWQsIGxpc3RlbmVyKTtcbiAgfVxuXG4gIHJtdlJlZ0Vycm9yZWRMaXN0ZW5lcihyZWcsIGxpc3RlbmVyKSB7XG4gICAgdGhpcy5ybXZSZWdMaXN0ZW5lcihyZWcsIEV2dFR5cGUuRXJyb3JlZCwgbGlzdGVuZXIpO1xuICB9XG5cbiAgcm12UmVnTGlzdGVuZXIocmVnLCB0eXBlLCBsaXN0ZW5lcikge1xuICAgIGlmICghdGhpcy5yZWdMaXN0ZW5lcnNbdHlwZV0pIHtcbiAgICAgIHRoaXMucmVnTGlzdGVuZXJzW3R5cGVdID0ge307XG4gICAgfVxuICAgIGlmICghdGhpcy5yZWdMaXN0ZW5lcnNbdHlwZV1bcmVnXSkge1xuICAgICAgdGhpcy5yZWdMaXN0ZW5lcnNbdHlwZV1bcmVnXSA9IFtdO1xuICAgIH1cbiAgICBpZiAodGhpcy5yZWdMaXN0ZW5lcnNbdHlwZV1bcmVnXS5pbmRleE9mKGxpc3RlbmVyKSA+PSAwKSB7XG4gICAgICB0aGlzLnJlZ0xpc3RlbmVyc1t0eXBlXVtyZWddLnNrUm12KGxpc3RlbmVyKTtcbiAgICB9XG4gIH1cblxuICBza1ZhbChpZCwgdmFsdWUpIHtcbiAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLm1vZGVsLnNrVmFsKGlkKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGlmIChvbGRWYWx1ZSAhPSB2YWx1ZSkge1xuICAgICAgICB0aGlzLm1vZGVsLnNrVmFsKGlkLCB2YWx1ZSk7XG4gICAgICAgIHRoaXMuZmlyZUNoYW5nZWRFdmVudChpZCwgb2xkVmFsdWUsIHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb2xkVmFsdWU7XG4gICAgfVxuICB9XG5cbiAgZ2V0VmFsaWRhdG9yKCkge1xuICAgIHJldHVybiB0aGlzLnZhbGlkYXRvcjtcbiAgfVxufVxuIl19