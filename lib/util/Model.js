'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _skJs = require('sk-js');

var _Const = require('./Const');

var _Validator = require('./Validator');

var _Validator2 = _interopRequireDefault(_Validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Model = function () {
  _createClass(Model, null, [{
    key: 'object2ModelIds',


    /**
     * {a:{b:true,c:false}} => a.b
     * @param prefix
     * @param modelIds
     * @param object
     */
    value: function object2ModelIds(prefix) {
      var modelIds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var object = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      Object.keys(object).forEach(function ($k) {
        var tmpKey = prefix + (String(prefix).skBlank() ? _skJs.SK.EMPTY : _skJs.SK.CHAR_DOT) + $k;
        var tmpVal = object[$k];
        if (_lodash2.default.isPlainObject(tmpVal)) {
          Model.object2ModelIds(tmpKey, modelIds, tmpVal);
        } else if (_skJs.SK.s4b(tmpVal) && tmpVal) {
          modelIds.push(tmpKey);
        }
      });
    }
  }, {
    key: 'parseSao',


    /**
     * @param sao is string[reg], array[string] or object
     * @returns {Array}
     */
    value: function parseSao(sao) {
      var rtn = [];
      if (sao) {
        if (_lodash2.default.isPlainObject(sao)) {
          Model.object2ModelIds(_skJs.SK.EMPTY, rtn, sao);
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
   * @param freeObject plain object
   * @param validator
   */
  function Model() {
    var freeObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var validator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _Validator2.default();

    _classCallCheck(this, Model);

    this.errors = {};
    this.idListeners = {};
    this.monitors = {};
    this.regListeners = {};

    this.freeObject = freeObject;
    this.validator = validator;

    this.addAllValidatorMonitor();
  }

  /**
   *
   * @param id
   * @param listener please bind context
   */


  _createClass(Model, [{
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
    key: 'getAllErrors',
    value: function getAllErrors() {
      return this.errors;
    }
  }, {
    key: 'getErrors',
    value: function getErrors(id) {
      return _skJs.SK.s4o(this.errors[id]);
    }
  }, {
    key: 'getValidator',
    value: function getValidator() {
      return this.validator;
    }
  }, {
    key: 'hasErrors',
    value: function hasErrors() {
      var _this = this;

      var rtn = false;
      Object.keys(this.errors).forEach(function ($modelId) {
        rtn = rtn || !_lodash2.default.isEmpty(_this.errors[$modelId]);
      });
      return rtn;
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
      var oldValue = this.freeObject.skVal(id);
      if (arguments.length > 1) {
        if (oldValue !== value) {
          this.freeObject.skVal(id, value);
          this.fireChangedEvent(id, oldValue, value);
        }
        return this;
      } else {
        return oldValue;
      }
    }

    //validator begin

  }, {
    key: 'addAllValidatorMonitor',
    value: function addAllValidatorMonitor() {
      var _this2 = this;

      var tmpModelIds = this.getValidator().getModelIds();
      Object.keys(tmpModelIds).forEach(function ($key) {
        _this2.addValidatorMonitor($key, tmpModelIds[$key]);
      });
    }
  }, {
    key: 'addValidatorMonitor',
    value: function addValidatorMonitor(modelId, config) {
      var _this3 = this;

      Object.keys(config).forEach(function ($key) {
        _this3.addValidatorRuleMonitor(modelId, $key, config[$key]);
      });
    }
  }, {
    key: 'addValidatorRuleMonitor',
    value: function addValidatorRuleMonitor(modelId, rule, setting) {
      var _this4 = this;

      if (!this.monitors[modelId]) {
        this.errors[modelId] = {};
        this.monitors[modelId] = this.validate.bind(modelId);
        this.addIdChangedListener(modelId, this.monitors[modelId]);
      }
      if (rule === _Validator2.default.PROP_DEPS) {
        //when dependencies changed, need validate too
        Model.parseSao(setting).forEach(function ($i) {
          if (_lodash2.default.isRegExp($i)) {
            _this4.addRegChangedListener($i, _this4.monitors[modelId]);
          } else {
            _this4.addIdChangedListener($i, _this4.monitors[modelId]);
          }
        });
      } else {
        var tmpSettingDeps = setting[_Validator2.default.PROP_DEPS];
        if (tmpSettingDeps) {
          //see Validator.constructor comments
          Model.parseSao(tmpSettingDeps).forEach(function ($i) {
            if (_lodash2.default.isRegExp($i)) {
              _this4.addRegChangedListener($i, _this4.monitors[modelId]);
            } else {
              _this4.addIdChangedListener($i, _this4.monitors[modelId]);
            }
          });
        }
      }
    }
  }, {
    key: 'execValidate',
    value: function execValidate(rule, id, func, model, setting) {
      var tmpRtn = func(model, model.skVal(id), setting);
      if (!_lodash2.default.isBoolean(tmpRtn)) {
        //true or message
        this.errors.skVal(id + _skJs.SK.CHAR_DOT + rule, tmpRtn);
      } else {
        delete this.errors[id][rule];
      }
      this.fireErroredEvent(id, model.skVal(id), model.skVal(id));
    }
  }, {
    key: 'rmvValidatorMonitor',
    value: function rmvValidatorMonitor(id, config) {
      var _this5 = this;

      Object.keys(config).forEach(function ($key) {
        if ($key === _Validator2.default.PROP_DEPS) {
          Model.parseSao(config[$key]).forEach(function ($i) {
            if (_lodash2.default.isRegExp($i)) {
              _this5.rmvRegChangedListener($i, _this5.monitors[id]);
            } else {
              _this5.rmvIdChangedListener($i, _this5.monitors[id]);
            }
          });
        } else {
          _this5.rmvValidatorRuleMonitor(id, $key, config[$key]);
        }
      });
    }
  }, {
    key: 'rmvValidatorRuleMonitor',
    value: function rmvValidatorRuleMonitor(id, rule, setting) {
      var _this6 = this;

      var tmpSettingDeps = setting[_Validator2.default.PROP_DEPS];
      if (tmpSettingDeps) {
        Model.parseSao(tmpSettingDeps).forEach(function ($i) {
          if (_lodash2.default.isRegExp($i)) {
            _this6.rmvRegChangedListener($i, _this6.monitors[id]);
          } else {
            _this6.rmvIdChangedListener($i, _this6.monitors[id]);
          }
        });
      }
    }
  }, {
    key: 'validate',
    value: function validate(evt) {
      var tmpModelId = this;
      var tmpModel = evt.model;
      var tmpConfig = evt.model.getValidator().getModelIds()[tmpModelId];
      if (tmpConfig && _lodash2.default.isObject(tmpConfig)) {
        Object.keys(tmpConfig).forEach(function ($key) {
          if ($key === _Validator2.default.PROP_SCENARIO) {
            //ignore
          } else if ($key === _Validator2.default.PROP_FUNC) {
            tmpModel.execValidate($key, tmpModelId, tmpConfig[$key], tmpModel, undefined);
          } else {
            var tmpRule = tmpModel.getValidator().getRules()[$key];
            if (_lodash2.default.isFunction(tmpRule)) {
              tmpModel.execValidate($key, tmpModelId, tmpRule, tmpModel, tmpConfig[$key]);
            } else if (_lodash2.default.isObject(tmpRule) && _lodash2.default.isFunction(tmpRule[_Validator2.default.PROP_FUNC])) {
              tmpModel.execValidate($key, tmpModelId, tmpRule[_Validator2.default.PROP_FUNC], tmpModel, undefined);
            }
          }
        });
      }
    }
  }, {
    key: 'validateByScenario',
    value: function validateByScenario(scenario) {
      var _this7 = this;

      var configs = this.getValidator().getModelIds();
      Object.keys(configs).forEach(function ($modelId) {
        if (!scenario || scenario === configs[$modelId][_Validator2.default.PROP_SCENARIO]) {
          _this7.validate.call($modelId, { model: _this7 });
        }
      });
    }

    //validator end

  }]);

  return Model;
}();

Model.PROP_SK = 'skModel';
Model.PROP_SYS = 'skSysModel';
exports.default = Model;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwvTW9kZWwuanMiXSwibmFtZXMiOlsiTW9kZWwiLCJwcmVmaXgiLCJtb2RlbElkcyIsIm9iamVjdCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiJGsiLCJ0bXBLZXkiLCJTdHJpbmciLCJza0JsYW5rIiwiRU1QVFkiLCJDSEFSX0RPVCIsInRtcFZhbCIsImlzUGxhaW5PYmplY3QiLCJvYmplY3QyTW9kZWxJZHMiLCJzNGIiLCJwdXNoIiwic2FvIiwicnRuIiwiaXNBcnJheSIsImNvbmNhdCIsImlzU3RyaW5nIiwiZnJlZU9iamVjdCIsInZhbGlkYXRvciIsImVycm9ycyIsImlkTGlzdGVuZXJzIiwibW9uaXRvcnMiLCJyZWdMaXN0ZW5lcnMiLCJhZGRBbGxWYWxpZGF0b3JNb25pdG9yIiwiaWQiLCJsaXN0ZW5lciIsImFkZElkTGlzdGVuZXIiLCJDaGFuZ2VkIiwiRXJyb3JlZCIsInR5cGUiLCJpbmRleE9mIiwicmVnIiwiYWRkUmVnTGlzdGVuZXIiLCJvbGQiLCJjdXJyZW50IiwiZmlyZUV2ZW50IiwibW9kZWwiLCJldnQiLCJtYXRjaGVkTGlzdGVuZXJzIiwiYXBwbHkiLCJtYXRjaCIsImxpc3RlbmVycyIsInM0byIsIiRtb2RlbElkIiwiaXNFbXB0eSIsInJtdklkTGlzdGVuZXIiLCJza1JtdiIsInJtdlJlZ0xpc3RlbmVyIiwidmFsdWUiLCJvbGRWYWx1ZSIsInNrVmFsIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiZmlyZUNoYW5nZWRFdmVudCIsInRtcE1vZGVsSWRzIiwiZ2V0VmFsaWRhdG9yIiwiZ2V0TW9kZWxJZHMiLCIka2V5IiwiYWRkVmFsaWRhdG9yTW9uaXRvciIsIm1vZGVsSWQiLCJjb25maWciLCJhZGRWYWxpZGF0b3JSdWxlTW9uaXRvciIsInJ1bGUiLCJzZXR0aW5nIiwidmFsaWRhdGUiLCJiaW5kIiwiYWRkSWRDaGFuZ2VkTGlzdGVuZXIiLCJQUk9QX0RFUFMiLCJwYXJzZVNhbyIsIiRpIiwiaXNSZWdFeHAiLCJhZGRSZWdDaGFuZ2VkTGlzdGVuZXIiLCJ0bXBTZXR0aW5nRGVwcyIsImZ1bmMiLCJ0bXBSdG4iLCJpc0Jvb2xlYW4iLCJmaXJlRXJyb3JlZEV2ZW50Iiwicm12UmVnQ2hhbmdlZExpc3RlbmVyIiwicm12SWRDaGFuZ2VkTGlzdGVuZXIiLCJybXZWYWxpZGF0b3JSdWxlTW9uaXRvciIsInRtcE1vZGVsSWQiLCJ0bXBNb2RlbCIsInRtcENvbmZpZyIsImlzT2JqZWN0IiwiUFJPUF9TQ0VOQVJJTyIsIlBST1BfRlVOQyIsImV4ZWNWYWxpZGF0ZSIsInVuZGVmaW5lZCIsInRtcFJ1bGUiLCJnZXRSdWxlcyIsImlzRnVuY3Rpb24iLCJzY2VuYXJpbyIsImNvbmZpZ3MiLCJjYWxsIiwiUFJPUF9TSyIsIlBST1BfU1lTIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0lBRXFCQSxLOzs7OztBQUtuQjs7Ozs7O29DQU11QkMsTSxFQUFvQztBQUFBLFVBQTVCQyxRQUE0Qix1RUFBakIsRUFBaUI7QUFBQSxVQUFiQyxNQUFhLHVFQUFKLEVBQUk7O0FBQ3pEQyxhQUFPQyxJQUFQLENBQVlGLE1BQVosRUFBb0JHLE9BQXBCLENBQTRCLFVBQUNDLEVBQUQsRUFBUTtBQUNsQyxZQUFJQyxTQUFTUCxVQUFVUSxPQUFPUixNQUFQLEVBQWVTLE9BQWYsS0FBMkIsU0FBR0MsS0FBOUIsR0FBc0MsU0FBR0MsUUFBbkQsSUFBK0RMLEVBQTVFO0FBQ0EsWUFBSU0sU0FBU1YsT0FBT0ksRUFBUCxDQUFiO0FBQ0EsWUFBSSxpQkFBRU8sYUFBRixDQUFnQkQsTUFBaEIsQ0FBSixFQUE2QjtBQUMzQmIsZ0JBQU1lLGVBQU4sQ0FBc0JQLE1BQXRCLEVBQThCTixRQUE5QixFQUF3Q1csTUFBeEM7QUFDRCxTQUZELE1BRU8sSUFBSSxTQUFHRyxHQUFILENBQU9ILE1BQVAsS0FBa0JBLE1BQXRCLEVBQThCO0FBQ25DWCxtQkFBU2UsSUFBVCxDQUFjVCxNQUFkO0FBQ0Q7QUFDRixPQVJEO0FBU0Q7Ozs7O0FBRUQ7Ozs7NkJBSWdCVSxHLEVBQUs7QUFDbkIsVUFBSUMsTUFBTSxFQUFWO0FBQ0EsVUFBSUQsR0FBSixFQUFTO0FBQ1AsWUFBSSxpQkFBRUosYUFBRixDQUFnQkksR0FBaEIsQ0FBSixFQUEwQjtBQUN4QmxCLGdCQUFNZSxlQUFOLENBQXNCLFNBQUdKLEtBQXpCLEVBQWdDUSxHQUFoQyxFQUFxQ0QsR0FBckM7QUFDRCxTQUZELE1BRU8sSUFBSSxpQkFBRUUsT0FBRixDQUFVRixHQUFWLENBQUosRUFBb0I7QUFDekJDLGdCQUFNQSxJQUFJRSxNQUFKLENBQVdILEdBQVgsQ0FBTjtBQUNELFNBRk0sTUFFQSxJQUFJLGlCQUFFSSxRQUFGLENBQVdKLEdBQVgsQ0FBSixFQUFxQjtBQUMxQkMsY0FBSUYsSUFBSixDQUFTQyxHQUFUO0FBQ0Q7QUFDRjtBQUNELGFBQU9DLEdBQVA7QUFDRDs7O0FBT0Q7Ozs7O0FBS0EsbUJBQTBEO0FBQUEsUUFBOUNJLFVBQThDLHVFQUFqQyxFQUFpQztBQUFBLFFBQTdCQyxTQUE2Qix1RUFBakIseUJBQWlCOztBQUFBOztBQUFBLFNBVjFEQyxNQVUwRCxHQVZqRCxFQVVpRDtBQUFBLFNBVDFEQyxXQVMwRCxHQVQ1QyxFQVM0QztBQUFBLFNBUjFEQyxRQVEwRCxHQVIvQyxFQVErQztBQUFBLFNBUDFEQyxZQU8wRCxHQVAzQyxFQU8yQzs7QUFDeEQsU0FBS0wsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjs7QUFFQSxTQUFLSyxzQkFBTDtBQUNEOztBQUVEOzs7Ozs7Ozs7eUNBS3FCQyxFLEVBQUlDLFEsRUFBVTtBQUNqQyxXQUFLQyxhQUFMLENBQW1CRixFQUFuQixFQUF1QixlQUFRRyxPQUEvQixFQUF3Q0YsUUFBeEM7QUFDRDs7QUFFRDs7Ozs7Ozs7eUNBS3FCRCxFLEVBQUlDLFEsRUFBVTtBQUNqQyxXQUFLQyxhQUFMLENBQW1CRixFQUFuQixFQUF1QixlQUFRSSxPQUEvQixFQUF3Q0gsUUFBeEM7QUFDRDs7QUFFRDs7Ozs7Ozs7O2tDQU1jRCxFLEVBQUlLLEksRUFBTUosUSxFQUFVO0FBQ2hDLFVBQUksQ0FBQyxLQUFLTCxXQUFMLENBQWlCUyxJQUFqQixDQUFMLEVBQTZCO0FBQzNCLGFBQUtULFdBQUwsQ0FBaUJTLElBQWpCLElBQXlCLEVBQXpCO0FBQ0Q7QUFDRCxVQUFJLENBQUMsS0FBS1QsV0FBTCxDQUFpQlMsSUFBakIsRUFBdUJMLEVBQXZCLENBQUwsRUFBaUM7QUFDL0IsYUFBS0osV0FBTCxDQUFpQlMsSUFBakIsRUFBdUJMLEVBQXZCLElBQTZCLEVBQTdCO0FBQ0Q7QUFDRCxVQUFJLEtBQUtKLFdBQUwsQ0FBaUJTLElBQWpCLEVBQXVCTCxFQUF2QixFQUEyQk0sT0FBM0IsQ0FBbUNMLFFBQW5DLElBQStDLENBQW5ELEVBQXNEO0FBQ3BELGFBQUtMLFdBQUwsQ0FBaUJTLElBQWpCLEVBQXVCTCxFQUF2QixFQUEyQmIsSUFBM0IsQ0FBZ0NjLFFBQWhDO0FBQ0Q7QUFDRjs7QUFFRDs7Ozs7Ozs7MENBS3NCTSxHLEVBQUtOLFEsRUFBVTtBQUNuQyxXQUFLTyxjQUFMLENBQW9CRCxHQUFwQixFQUF5QixlQUFRSixPQUFqQyxFQUEwQ0YsUUFBMUM7QUFDRDs7QUFFRDs7Ozs7Ozs7MENBS3NCTSxHLEVBQUtOLFEsRUFBVTtBQUNuQyxXQUFLTyxjQUFMLENBQW9CRCxHQUFwQixFQUF5QixlQUFRSCxPQUFqQyxFQUEwQ0gsUUFBMUM7QUFDRDs7QUFFRDs7Ozs7Ozs7O21DQU1lTSxHLEVBQUtGLEksRUFBTUosUSxFQUFVO0FBQ2xDLFVBQUksQ0FBQyxLQUFLSCxZQUFMLENBQWtCTyxJQUFsQixDQUFMLEVBQThCO0FBQzVCLGFBQUtQLFlBQUwsQ0FBa0JPLElBQWxCLElBQTBCLEVBQTFCO0FBQ0Q7QUFDRCxVQUFJLENBQUMsS0FBS1AsWUFBTCxDQUFrQk8sSUFBbEIsRUFBd0JFLEdBQXhCLENBQUwsRUFBbUM7QUFDakMsYUFBS1QsWUFBTCxDQUFrQk8sSUFBbEIsRUFBd0JFLEdBQXhCLElBQStCLEVBQS9CO0FBQ0Q7QUFDRCxVQUFJLEtBQUtULFlBQUwsQ0FBa0JPLElBQWxCLEVBQXdCRSxHQUF4QixFQUE2QkQsT0FBN0IsQ0FBcUNMLFFBQXJDLElBQWlELENBQXJELEVBQXdEO0FBQ3RELGFBQUtILFlBQUwsQ0FBa0JPLElBQWxCLEVBQXdCRSxHQUF4QixFQUE2QnBCLElBQTdCLENBQWtDYyxRQUFsQztBQUNEO0FBQ0Y7OztxQ0FFZ0JELEUsRUFBSVMsRyxFQUFLQyxPLEVBQVM7QUFDakMsV0FBS0MsU0FBTCxDQUFlLEVBQUNDLE9BQU8sSUFBUixFQUFjWixJQUFJQSxFQUFsQixFQUFzQlMsS0FBS0EsR0FBM0IsRUFBZ0NDLFNBQVNBLE9BQXpDLEVBQWtETCxNQUFNLGVBQVFGLE9BQWhFLEVBQWY7QUFDRDs7O3FDQUVnQkgsRSxFQUFJUyxHLEVBQUtDLE8sRUFBUztBQUNqQyxXQUFLQyxTQUFMLENBQWUsRUFBQ0MsT0FBTyxJQUFSLEVBQWNaLElBQUlBLEVBQWxCLEVBQXNCUyxLQUFLQSxHQUEzQixFQUFnQ0MsU0FBU0EsT0FBekMsRUFBa0RMLE1BQU0sZUFBUUQsT0FBaEUsRUFBZjtBQUNEOzs7OEJBRVNTLEcsRUFBSztBQUNiLFVBQUlDLG1CQUFtQixFQUF2QjtBQUNBLFVBQUlsQixjQUFjLEtBQUtBLFdBQUwsQ0FBaUJpQixJQUFJUixJQUFyQixJQUE2QixLQUFLVCxXQUFMLENBQWlCaUIsSUFBSVIsSUFBckIsQ0FBN0IsR0FBMEQsRUFBNUU7QUFDQVMsdUJBQWlCM0IsSUFBakIsQ0FBc0I0QixLQUF0QixDQUE0QkQsZ0JBQTVCLEVBQThDbEIsWUFBWWlCLElBQUliLEVBQWhCLElBQXNCSixZQUFZaUIsSUFBSWIsRUFBaEIsQ0FBdEIsR0FBNEMsRUFBMUY7QUFDQSxVQUFJRixlQUFlLEtBQUtBLFlBQUwsQ0FBa0JlLElBQUlSLElBQXRCLElBQThCLEtBQUtQLFlBQUwsQ0FBa0JlLElBQUlSLElBQXRCLENBQTlCLEdBQTRELEVBQS9FO0FBQ0EvQixhQUFPQyxJQUFQLENBQVl1QixZQUFaLEVBQTBCdEIsT0FBMUIsQ0FBa0MsZUFBTztBQUN2Q3NDLHlCQUFpQjNCLElBQWpCLENBQXNCNEIsS0FBdEIsQ0FBNEJELGdCQUE1QixFQUE4Q0QsSUFBSWIsRUFBSixDQUFPZ0IsS0FBUCxDQUFhVCxHQUFiLElBQW9CVSxVQUFVVixHQUFWLENBQXBCLEdBQXFDLEVBQW5GO0FBQ0QsT0FGRDs7QUFJQU8sdUJBQWlCdEMsT0FBakIsQ0FBeUIsb0JBQVk7QUFDbkN5QixpQkFBU1ksR0FBVDtBQUNELE9BRkQ7QUFHQSxhQUFPLElBQVA7QUFDRDs7O21DQUVjO0FBQ2IsYUFBTyxLQUFLbEIsTUFBWjtBQUNEOzs7OEJBRVNLLEUsRUFBSTtBQUNaLGFBQU8sU0FBR2tCLEdBQUgsQ0FBTyxLQUFLdkIsTUFBTCxDQUFZSyxFQUFaLENBQVAsQ0FBUDtBQUNEOzs7bUNBRWM7QUFDYixhQUFPLEtBQUtOLFNBQVo7QUFDRDs7O2dDQUVXO0FBQUE7O0FBQ1YsVUFBSUwsTUFBTSxLQUFWO0FBQ0FmLGFBQU9DLElBQVAsQ0FBWSxLQUFLb0IsTUFBakIsRUFBeUJuQixPQUF6QixDQUFpQyxVQUFDMkMsUUFBRCxFQUFjO0FBQzdDOUIsY0FBTUEsT0FBTyxDQUFDLGlCQUFFK0IsT0FBRixDQUFVLE1BQUt6QixNQUFMLENBQVl3QixRQUFaLENBQVYsQ0FBZDtBQUNELE9BRkQ7QUFHQSxhQUFPOUIsR0FBUDtBQUNEOzs7eUNBRW9CVyxFLEVBQUlDLFEsRUFBVTtBQUNqQyxXQUFLb0IsYUFBTCxDQUFtQnJCLEVBQW5CLEVBQXVCLGVBQVFHLE9BQS9CLEVBQXdDRixRQUF4QztBQUNEOzs7eUNBRW9CRCxFLEVBQUlDLFEsRUFBVTtBQUNqQyxXQUFLb0IsYUFBTCxDQUFtQnJCLEVBQW5CLEVBQXVCLGVBQVFJLE9BQS9CLEVBQXdDSCxRQUF4QztBQUNEOzs7a0NBRWFELEUsRUFBSUssSSxFQUFNSixRLEVBQVU7QUFDaEMsVUFBSSxDQUFDLEtBQUtMLFdBQUwsQ0FBaUJTLElBQWpCLENBQUwsRUFBNkI7QUFDM0IsYUFBS1QsV0FBTCxDQUFpQlMsSUFBakIsSUFBeUIsRUFBekI7QUFDRDtBQUNELFVBQUksQ0FBQyxLQUFLVCxXQUFMLENBQWlCUyxJQUFqQixFQUF1QkwsRUFBdkIsQ0FBTCxFQUFpQztBQUMvQixhQUFLSixXQUFMLENBQWlCUyxJQUFqQixFQUF1QkwsRUFBdkIsSUFBNkIsRUFBN0I7QUFDRDtBQUNELFVBQUksS0FBS0osV0FBTCxDQUFpQlMsSUFBakIsRUFBdUJMLEVBQXZCLEVBQTJCTSxPQUEzQixDQUFtQ0wsUUFBbkMsS0FBZ0QsQ0FBcEQsRUFBdUQ7QUFDckQsYUFBS0wsV0FBTCxDQUFpQlMsSUFBakIsRUFBdUJMLEVBQXZCLEVBQTJCc0IsS0FBM0IsQ0FBaUNyQixRQUFqQztBQUNEO0FBQ0Y7OzswQ0FFcUJNLEcsRUFBS04sUSxFQUFVO0FBQ25DLFdBQUtzQixjQUFMLENBQW9CaEIsR0FBcEIsRUFBeUIsZUFBUUosT0FBakMsRUFBMENGLFFBQTFDO0FBQ0Q7OzswQ0FFcUJNLEcsRUFBS04sUSxFQUFVO0FBQ25DLFdBQUtzQixjQUFMLENBQW9CaEIsR0FBcEIsRUFBeUIsZUFBUUgsT0FBakMsRUFBMENILFFBQTFDO0FBQ0Q7OzttQ0FFY00sRyxFQUFLRixJLEVBQU1KLFEsRUFBVTtBQUNsQyxVQUFJLENBQUMsS0FBS0gsWUFBTCxDQUFrQk8sSUFBbEIsQ0FBTCxFQUE4QjtBQUM1QixhQUFLUCxZQUFMLENBQWtCTyxJQUFsQixJQUEwQixFQUExQjtBQUNEO0FBQ0QsVUFBSSxDQUFDLEtBQUtQLFlBQUwsQ0FBa0JPLElBQWxCLEVBQXdCRSxHQUF4QixDQUFMLEVBQW1DO0FBQ2pDLGFBQUtULFlBQUwsQ0FBa0JPLElBQWxCLEVBQXdCRSxHQUF4QixJQUErQixFQUEvQjtBQUNEO0FBQ0QsVUFBSSxLQUFLVCxZQUFMLENBQWtCTyxJQUFsQixFQUF3QkUsR0FBeEIsRUFBNkJELE9BQTdCLENBQXFDTCxRQUFyQyxLQUFrRCxDQUF0RCxFQUF5RDtBQUN2RCxhQUFLSCxZQUFMLENBQWtCTyxJQUFsQixFQUF3QkUsR0FBeEIsRUFBNkJlLEtBQTdCLENBQW1DckIsUUFBbkM7QUFDRDtBQUNGOzs7MEJBRUtELEUsRUFBSXdCLEssRUFBTztBQUNmLFVBQUlDLFdBQVcsS0FBS2hDLFVBQUwsQ0FBZ0JpQyxLQUFoQixDQUFzQjFCLEVBQXRCLENBQWY7QUFDQSxVQUFJMkIsVUFBVUMsTUFBVixHQUFtQixDQUF2QixFQUEwQjtBQUN4QixZQUFJSCxhQUFhRCxLQUFqQixFQUF3QjtBQUN0QixlQUFLL0IsVUFBTCxDQUFnQmlDLEtBQWhCLENBQXNCMUIsRUFBdEIsRUFBMEJ3QixLQUExQjtBQUNBLGVBQUtLLGdCQUFMLENBQXNCN0IsRUFBdEIsRUFBMEJ5QixRQUExQixFQUFvQ0QsS0FBcEM7QUFDRDtBQUNELGVBQU8sSUFBUDtBQUNELE9BTkQsTUFNTztBQUNMLGVBQU9DLFFBQVA7QUFDRDtBQUNGOztBQUVEOzs7OzZDQUN5QjtBQUFBOztBQUN2QixVQUFJSyxjQUFjLEtBQUtDLFlBQUwsR0FBb0JDLFdBQXBCLEVBQWxCO0FBQ0ExRCxhQUFPQyxJQUFQLENBQVl1RCxXQUFaLEVBQXlCdEQsT0FBekIsQ0FBaUMsVUFBQ3lELElBQUQsRUFBVTtBQUN6QyxlQUFLQyxtQkFBTCxDQUF5QkQsSUFBekIsRUFBK0JILFlBQVlHLElBQVosQ0FBL0I7QUFDRCxPQUZEO0FBR0Q7Ozt3Q0FFbUJFLE8sRUFBU0MsTSxFQUFRO0FBQUE7O0FBQ25DOUQsYUFBT0MsSUFBUCxDQUFZNkQsTUFBWixFQUFvQjVELE9BQXBCLENBQTRCLFVBQUN5RCxJQUFELEVBQVU7QUFDcEMsZUFBS0ksdUJBQUwsQ0FBNkJGLE9BQTdCLEVBQXNDRixJQUF0QyxFQUE0Q0csT0FBT0gsSUFBUCxDQUE1QztBQUNELE9BRkQ7QUFHRDs7OzRDQUV1QkUsTyxFQUFTRyxJLEVBQU1DLE8sRUFBUztBQUFBOztBQUM5QyxVQUFJLENBQUMsS0FBSzFDLFFBQUwsQ0FBY3NDLE9BQWQsQ0FBTCxFQUE2QjtBQUMzQixhQUFLeEMsTUFBTCxDQUFZd0MsT0FBWixJQUF1QixFQUF2QjtBQUNBLGFBQUt0QyxRQUFMLENBQWNzQyxPQUFkLElBQXlCLEtBQUtLLFFBQUwsQ0FBY0MsSUFBZCxDQUFtQk4sT0FBbkIsQ0FBekI7QUFDQSxhQUFLTyxvQkFBTCxDQUEwQlAsT0FBMUIsRUFBbUMsS0FBS3RDLFFBQUwsQ0FBY3NDLE9BQWQsQ0FBbkM7QUFDRDtBQUNELFVBQUlHLFNBQVMsb0JBQVVLLFNBQXZCLEVBQWtDO0FBQ2hDO0FBQ0F6RSxjQUFNMEUsUUFBTixDQUFlTCxPQUFmLEVBQXdCL0QsT0FBeEIsQ0FBZ0MsVUFBQ3FFLEVBQUQsRUFBUTtBQUN0QyxjQUFJLGlCQUFFQyxRQUFGLENBQVdELEVBQVgsQ0FBSixFQUFvQjtBQUNsQixtQkFBS0UscUJBQUwsQ0FBMkJGLEVBQTNCLEVBQStCLE9BQUtoRCxRQUFMLENBQWNzQyxPQUFkLENBQS9CO0FBQ0QsV0FGRCxNQUVPO0FBQ0wsbUJBQUtPLG9CQUFMLENBQTBCRyxFQUExQixFQUE4QixPQUFLaEQsUUFBTCxDQUFjc0MsT0FBZCxDQUE5QjtBQUNEO0FBQ0YsU0FORDtBQU9ELE9BVEQsTUFTTztBQUNMLFlBQUlhLGlCQUFpQlQsUUFBUSxvQkFBVUksU0FBbEIsQ0FBckI7QUFDQSxZQUFJSyxjQUFKLEVBQW9CO0FBQ2xCO0FBQ0E5RSxnQkFBTTBFLFFBQU4sQ0FBZUksY0FBZixFQUErQnhFLE9BQS9CLENBQXVDLFVBQUNxRSxFQUFELEVBQVE7QUFDN0MsZ0JBQUksaUJBQUVDLFFBQUYsQ0FBV0QsRUFBWCxDQUFKLEVBQW9CO0FBQ2xCLHFCQUFLRSxxQkFBTCxDQUEyQkYsRUFBM0IsRUFBK0IsT0FBS2hELFFBQUwsQ0FBY3NDLE9BQWQsQ0FBL0I7QUFDRCxhQUZELE1BRU87QUFDTCxxQkFBS08sb0JBQUwsQ0FBMEJHLEVBQTFCLEVBQThCLE9BQUtoRCxRQUFMLENBQWNzQyxPQUFkLENBQTlCO0FBQ0Q7QUFDRixXQU5EO0FBT0Q7QUFDRjtBQUNGOzs7aUNBRVlHLEksRUFBTXRDLEUsRUFBSWlELEksRUFBTXJDLEssRUFBTzJCLE8sRUFBUztBQUMzQyxVQUFJVyxTQUFTRCxLQUFLckMsS0FBTCxFQUFZQSxNQUFNYyxLQUFOLENBQVkxQixFQUFaLENBQVosRUFBNkJ1QyxPQUE3QixDQUFiO0FBQ0EsVUFBSSxDQUFDLGlCQUFFWSxTQUFGLENBQVlELE1BQVosQ0FBTCxFQUEwQjtBQUFDO0FBQ3pCLGFBQUt2RCxNQUFMLENBQVkrQixLQUFaLENBQWtCMUIsS0FBSyxTQUFHbEIsUUFBUixHQUFtQndELElBQXJDLEVBQTJDWSxNQUEzQztBQUNELE9BRkQsTUFFTztBQUNMLGVBQU8sS0FBS3ZELE1BQUwsQ0FBWUssRUFBWixFQUFnQnNDLElBQWhCLENBQVA7QUFDRDtBQUNELFdBQUtjLGdCQUFMLENBQXNCcEQsRUFBdEIsRUFBMEJZLE1BQU1jLEtBQU4sQ0FBWTFCLEVBQVosQ0FBMUIsRUFBMkNZLE1BQU1jLEtBQU4sQ0FBWTFCLEVBQVosQ0FBM0M7QUFDRDs7O3dDQUVtQkEsRSxFQUFJb0MsTSxFQUFRO0FBQUE7O0FBQzlCOUQsYUFBT0MsSUFBUCxDQUFZNkQsTUFBWixFQUFvQjVELE9BQXBCLENBQTRCLFVBQUN5RCxJQUFELEVBQVU7QUFDcEMsWUFBSUEsU0FBUyxvQkFBVVUsU0FBdkIsRUFBa0M7QUFDaEN6RSxnQkFBTTBFLFFBQU4sQ0FBZVIsT0FBT0gsSUFBUCxDQUFmLEVBQTZCekQsT0FBN0IsQ0FBcUMsVUFBQ3FFLEVBQUQsRUFBUTtBQUMzQyxnQkFBSSxpQkFBRUMsUUFBRixDQUFXRCxFQUFYLENBQUosRUFBb0I7QUFDbEIscUJBQUtRLHFCQUFMLENBQTJCUixFQUEzQixFQUErQixPQUFLaEQsUUFBTCxDQUFjRyxFQUFkLENBQS9CO0FBQ0QsYUFGRCxNQUVPO0FBQ0wscUJBQUtzRCxvQkFBTCxDQUEwQlQsRUFBMUIsRUFBOEIsT0FBS2hELFFBQUwsQ0FBY0csRUFBZCxDQUE5QjtBQUNEO0FBQ0YsV0FORDtBQU9ELFNBUkQsTUFRTztBQUNMLGlCQUFLdUQsdUJBQUwsQ0FBNkJ2RCxFQUE3QixFQUFpQ2lDLElBQWpDLEVBQXVDRyxPQUFPSCxJQUFQLENBQXZDO0FBQ0Q7QUFDRixPQVpEO0FBYUQ7Ozs0Q0FFdUJqQyxFLEVBQUlzQyxJLEVBQU1DLE8sRUFBUztBQUFBOztBQUN6QyxVQUFJUyxpQkFBaUJULFFBQVEsb0JBQVVJLFNBQWxCLENBQXJCO0FBQ0EsVUFBSUssY0FBSixFQUFvQjtBQUNsQjlFLGNBQU0wRSxRQUFOLENBQWVJLGNBQWYsRUFBK0J4RSxPQUEvQixDQUF1QyxVQUFDcUUsRUFBRCxFQUFRO0FBQzdDLGNBQUksaUJBQUVDLFFBQUYsQ0FBV0QsRUFBWCxDQUFKLEVBQW9CO0FBQ2xCLG1CQUFLUSxxQkFBTCxDQUEyQlIsRUFBM0IsRUFBK0IsT0FBS2hELFFBQUwsQ0FBY0csRUFBZCxDQUEvQjtBQUNELFdBRkQsTUFFTztBQUNMLG1CQUFLc0Qsb0JBQUwsQ0FBMEJULEVBQTFCLEVBQThCLE9BQUtoRCxRQUFMLENBQWNHLEVBQWQsQ0FBOUI7QUFDRDtBQUNGLFNBTkQ7QUFPRDtBQUNGOzs7NkJBRVFhLEcsRUFBSztBQUNaLFVBQUkyQyxhQUFhLElBQWpCO0FBQ0EsVUFBSUMsV0FBVzVDLElBQUlELEtBQW5CO0FBQ0EsVUFBSThDLFlBQVk3QyxJQUFJRCxLQUFKLENBQVVtQixZQUFWLEdBQXlCQyxXQUF6QixHQUF1Q3dCLFVBQXZDLENBQWhCO0FBQ0EsVUFBSUUsYUFBYSxpQkFBRUMsUUFBRixDQUFXRCxTQUFYLENBQWpCLEVBQXdDO0FBQ3RDcEYsZUFBT0MsSUFBUCxDQUFZbUYsU0FBWixFQUF1QmxGLE9BQXZCLENBQStCLFVBQUN5RCxJQUFELEVBQVU7QUFDdkMsY0FBSUEsU0FBUyxvQkFBVTJCLGFBQXZCLEVBQXNDO0FBQ3BDO0FBQ0QsV0FGRCxNQUVPLElBQUkzQixTQUFTLG9CQUFVNEIsU0FBdkIsRUFBa0M7QUFDdkNKLHFCQUFTSyxZQUFULENBQXNCN0IsSUFBdEIsRUFBNEJ1QixVQUE1QixFQUF3Q0UsVUFBVXpCLElBQVYsQ0FBeEMsRUFBeUR3QixRQUF6RCxFQUFtRU0sU0FBbkU7QUFDRCxXQUZNLE1BRUE7QUFDTCxnQkFBSUMsVUFBVVAsU0FBUzFCLFlBQVQsR0FBd0JrQyxRQUF4QixHQUFtQ2hDLElBQW5DLENBQWQ7QUFDQSxnQkFBSSxpQkFBRWlDLFVBQUYsQ0FBYUYsT0FBYixDQUFKLEVBQTJCO0FBQ3pCUCx1QkFBU0ssWUFBVCxDQUFzQjdCLElBQXRCLEVBQTRCdUIsVUFBNUIsRUFBd0NRLE9BQXhDLEVBQWlEUCxRQUFqRCxFQUEyREMsVUFBVXpCLElBQVYsQ0FBM0Q7QUFDRCxhQUZELE1BRU8sSUFBSSxpQkFBRTBCLFFBQUYsQ0FBV0ssT0FBWCxLQUF1QixpQkFBRUUsVUFBRixDQUFhRixRQUFRLG9CQUFVSCxTQUFsQixDQUFiLENBQTNCLEVBQXVFO0FBQzVFSix1QkFBU0ssWUFBVCxDQUFzQjdCLElBQXRCLEVBQTRCdUIsVUFBNUIsRUFBd0NRLFFBQVEsb0JBQVVILFNBQWxCLENBQXhDLEVBQXNFSixRQUF0RSxFQUFnRk0sU0FBaEY7QUFDRDtBQUNGO0FBQ0YsU0FiRDtBQWNEO0FBQ0Y7Ozt1Q0FFa0JJLFEsRUFBVTtBQUFBOztBQUMzQixVQUFJQyxVQUFVLEtBQUtyQyxZQUFMLEdBQW9CQyxXQUFwQixFQUFkO0FBQ0ExRCxhQUFPQyxJQUFQLENBQVk2RixPQUFaLEVBQXFCNUYsT0FBckIsQ0FBNkIsVUFBQzJDLFFBQUQsRUFBYztBQUN6QyxZQUFJLENBQUNnRCxRQUFELElBQWFBLGFBQWFDLFFBQVFqRCxRQUFSLEVBQWtCLG9CQUFVeUMsYUFBNUIsQ0FBOUIsRUFBMEU7QUFDeEUsaUJBQUtwQixRQUFMLENBQWM2QixJQUFkLENBQW1CbEQsUUFBbkIsRUFBNkIsRUFBQ1AsYUFBRCxFQUE3QjtBQUNEO0FBQ0YsT0FKRDtBQUtEOztBQUVEOzs7Ozs7O0FBcFZtQjFDLEssQ0FFWm9HLE8sR0FBVSxTO0FBRkVwRyxLLENBR1pxRyxRLEdBQVcsWTtrQkFIQ3JHLEsiLCJmaWxlIjoidXRpbC9Nb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQge1NLfSBmcm9tICdzay1qcyc7XG5pbXBvcnQge0V2dFR5cGV9IGZyb20gJy4vQ29uc3QnO1xuaW1wb3J0IFZhbGlkYXRvciBmcm9tICcuL1ZhbGlkYXRvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGVsIHtcblxuICBzdGF0aWMgUFJPUF9TSyA9ICdza01vZGVsJztcbiAgc3RhdGljIFBST1BfU1lTID0gJ3NrU3lzTW9kZWwnO1xuXG4gIC8qKlxuICAgKiB7YTp7Yjp0cnVlLGM6ZmFsc2V9fSA9PiBhLmJcbiAgICogQHBhcmFtIHByZWZpeFxuICAgKiBAcGFyYW0gbW9kZWxJZHNcbiAgICogQHBhcmFtIG9iamVjdFxuICAgKi9cbiAgc3RhdGljIG9iamVjdDJNb2RlbElkcyhwcmVmaXgsIG1vZGVsSWRzID0gW10sIG9iamVjdCA9IHt9KSB7XG4gICAgT2JqZWN0LmtleXMob2JqZWN0KS5mb3JFYWNoKCgkaykgPT4ge1xuICAgICAgbGV0IHRtcEtleSA9IHByZWZpeCArIChTdHJpbmcocHJlZml4KS5za0JsYW5rKCkgPyBTSy5FTVBUWSA6IFNLLkNIQVJfRE9UKSArICRrO1xuICAgICAgbGV0IHRtcFZhbCA9IG9iamVjdFska107XG4gICAgICBpZiAoXy5pc1BsYWluT2JqZWN0KHRtcFZhbCkpIHtcbiAgICAgICAgTW9kZWwub2JqZWN0Mk1vZGVsSWRzKHRtcEtleSwgbW9kZWxJZHMsIHRtcFZhbClcbiAgICAgIH0gZWxzZSBpZiAoU0suczRiKHRtcFZhbCkgJiYgdG1wVmFsKSB7XG4gICAgICAgIG1vZGVsSWRzLnB1c2godG1wS2V5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHNhbyBpcyBzdHJpbmdbcmVnXSwgYXJyYXlbc3RyaW5nXSBvciBvYmplY3RcbiAgICogQHJldHVybnMge0FycmF5fVxuICAgKi9cbiAgc3RhdGljIHBhcnNlU2FvKHNhbykge1xuICAgIGxldCBydG4gPSBbXTtcbiAgICBpZiAoc2FvKSB7XG4gICAgICBpZiAoXy5pc1BsYWluT2JqZWN0KHNhbykpIHtcbiAgICAgICAgTW9kZWwub2JqZWN0Mk1vZGVsSWRzKFNLLkVNUFRZLCBydG4sIHNhbyk7XG4gICAgICB9IGVsc2UgaWYgKF8uaXNBcnJheShzYW8pKSB7XG4gICAgICAgIHJ0biA9IHJ0bi5jb25jYXQoc2FvKTtcbiAgICAgIH0gZWxzZSBpZiAoXy5pc1N0cmluZyhzYW8pKSB7XG4gICAgICAgIHJ0bi5wdXNoKHNhbyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBydG47XG4gIH1cblxuICBlcnJvcnMgPSB7fTtcbiAgaWRMaXN0ZW5lcnMgPSB7fTtcbiAgbW9uaXRvcnMgPSB7fTtcbiAgcmVnTGlzdGVuZXJzID0ge307XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBmcmVlT2JqZWN0IHBsYWluIG9iamVjdFxuICAgKiBAcGFyYW0gdmFsaWRhdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcihmcmVlT2JqZWN0ID0ge30sIHZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoKSkge1xuICAgIHRoaXMuZnJlZU9iamVjdCA9IGZyZWVPYmplY3Q7XG4gICAgdGhpcy52YWxpZGF0b3IgPSB2YWxpZGF0b3I7XG5cbiAgICB0aGlzLmFkZEFsbFZhbGlkYXRvck1vbml0b3IoKTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gaWRcbiAgICogQHBhcmFtIGxpc3RlbmVyIHBsZWFzZSBiaW5kIGNvbnRleHRcbiAgICovXG4gIGFkZElkQ2hhbmdlZExpc3RlbmVyKGlkLCBsaXN0ZW5lcikge1xuICAgIHRoaXMuYWRkSWRMaXN0ZW5lcihpZCwgRXZ0VHlwZS5DaGFuZ2VkLCBsaXN0ZW5lcik7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGlkXG4gICAqIEBwYXJhbSBsaXN0ZW5lciBwbGVhc2UgYmluZCBjb250ZXh0XG4gICAqL1xuICBhZGRJZEVycm9yZWRMaXN0ZW5lcihpZCwgbGlzdGVuZXIpIHtcbiAgICB0aGlzLmFkZElkTGlzdGVuZXIoaWQsIEV2dFR5cGUuRXJyb3JlZCwgbGlzdGVuZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBpZFxuICAgKiBAcGFyYW0gdHlwZVxuICAgKiBAcGFyYW0gbGlzdGVuZXIgcGxlYXNlIGJpbmQgY29udGV4dFxuICAgKi9cbiAgYWRkSWRMaXN0ZW5lcihpZCwgdHlwZSwgbGlzdGVuZXIpIHtcbiAgICBpZiAoIXRoaXMuaWRMaXN0ZW5lcnNbdHlwZV0pIHtcbiAgICAgIHRoaXMuaWRMaXN0ZW5lcnNbdHlwZV0gPSB7fTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmlkTGlzdGVuZXJzW3R5cGVdW2lkXSkge1xuICAgICAgdGhpcy5pZExpc3RlbmVyc1t0eXBlXVtpZF0gPSBbXTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaWRMaXN0ZW5lcnNbdHlwZV1baWRdLmluZGV4T2YobGlzdGVuZXIpIDwgMCkge1xuICAgICAgdGhpcy5pZExpc3RlbmVyc1t0eXBlXVtpZF0ucHVzaChsaXN0ZW5lcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSByZWdcbiAgICogQHBhcmFtIGxpc3RlbmVyIHBsZWFzZSBiaW5kIGNvbnRleHRcbiAgICovXG4gIGFkZFJlZ0NoYW5nZWRMaXN0ZW5lcihyZWcsIGxpc3RlbmVyKSB7XG4gICAgdGhpcy5hZGRSZWdMaXN0ZW5lcihyZWcsIEV2dFR5cGUuQ2hhbmdlZCwgbGlzdGVuZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSByZWdcbiAgICogQHBhcmFtIGxpc3RlbmVyIHBsZWFzZSBiaW5kIGNvbnRleHRcbiAgICovXG4gIGFkZFJlZ0Vycm9yZWRMaXN0ZW5lcihyZWcsIGxpc3RlbmVyKSB7XG4gICAgdGhpcy5hZGRSZWdMaXN0ZW5lcihyZWcsIEV2dFR5cGUuRXJyb3JlZCwgbGlzdGVuZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSByZWdcbiAgICogQHBhcmFtIHR5cGVcbiAgICogQHBhcmFtIGxpc3RlbmVyIHBsZWFzZSBiaW5kIGNvbnRleHRcbiAgICovXG4gIGFkZFJlZ0xpc3RlbmVyKHJlZywgdHlwZSwgbGlzdGVuZXIpIHtcbiAgICBpZiAoIXRoaXMucmVnTGlzdGVuZXJzW3R5cGVdKSB7XG4gICAgICB0aGlzLnJlZ0xpc3RlbmVyc1t0eXBlXSA9IHt9O1xuICAgIH1cbiAgICBpZiAoIXRoaXMucmVnTGlzdGVuZXJzW3R5cGVdW3JlZ10pIHtcbiAgICAgIHRoaXMucmVnTGlzdGVuZXJzW3R5cGVdW3JlZ10gPSBbXTtcbiAgICB9XG4gICAgaWYgKHRoaXMucmVnTGlzdGVuZXJzW3R5cGVdW3JlZ10uaW5kZXhPZihsaXN0ZW5lcikgPCAwKSB7XG4gICAgICB0aGlzLnJlZ0xpc3RlbmVyc1t0eXBlXVtyZWddLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cbiAgfVxuXG4gIGZpcmVDaGFuZ2VkRXZlbnQoaWQsIG9sZCwgY3VycmVudCkge1xuICAgIHRoaXMuZmlyZUV2ZW50KHttb2RlbDogdGhpcywgaWQ6IGlkLCBvbGQ6IG9sZCwgY3VycmVudDogY3VycmVudCwgdHlwZTogRXZ0VHlwZS5DaGFuZ2VkfSk7XG4gIH1cblxuICBmaXJlRXJyb3JlZEV2ZW50KGlkLCBvbGQsIGN1cnJlbnQpIHtcbiAgICB0aGlzLmZpcmVFdmVudCh7bW9kZWw6IHRoaXMsIGlkOiBpZCwgb2xkOiBvbGQsIGN1cnJlbnQ6IGN1cnJlbnQsIHR5cGU6IEV2dFR5cGUuRXJyb3JlZH0pO1xuICB9XG5cbiAgZmlyZUV2ZW50KGV2dCkge1xuICAgIGxldCBtYXRjaGVkTGlzdGVuZXJzID0gW107XG4gICAgbGV0IGlkTGlzdGVuZXJzID0gdGhpcy5pZExpc3RlbmVyc1tldnQudHlwZV0gPyB0aGlzLmlkTGlzdGVuZXJzW2V2dC50eXBlXSA6IHt9O1xuICAgIG1hdGNoZWRMaXN0ZW5lcnMucHVzaC5hcHBseShtYXRjaGVkTGlzdGVuZXJzLCBpZExpc3RlbmVyc1tldnQuaWRdID8gaWRMaXN0ZW5lcnNbZXZ0LmlkXSA6IFtdKTtcbiAgICBsZXQgcmVnTGlzdGVuZXJzID0gdGhpcy5yZWdMaXN0ZW5lcnNbZXZ0LnR5cGVdID8gdGhpcy5yZWdMaXN0ZW5lcnNbZXZ0LnR5cGVdIDoge307XG4gICAgT2JqZWN0LmtleXMocmVnTGlzdGVuZXJzKS5mb3JFYWNoKHJlZyA9PiB7XG4gICAgICBtYXRjaGVkTGlzdGVuZXJzLnB1c2guYXBwbHkobWF0Y2hlZExpc3RlbmVycywgZXZ0LmlkLm1hdGNoKHJlZykgPyBsaXN0ZW5lcnNbcmVnXSA6IFtdKTtcbiAgICB9KTtcblxuICAgIG1hdGNoZWRMaXN0ZW5lcnMuZm9yRWFjaChsaXN0ZW5lciA9PiB7XG4gICAgICBsaXN0ZW5lcihldnQpO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0QWxsRXJyb3JzKCkge1xuICAgIHJldHVybiB0aGlzLmVycm9ycztcbiAgfVxuXG4gIGdldEVycm9ycyhpZCkge1xuICAgIHJldHVybiBTSy5zNG8odGhpcy5lcnJvcnNbaWRdKTtcbiAgfVxuXG4gIGdldFZhbGlkYXRvcigpIHtcbiAgICByZXR1cm4gdGhpcy52YWxpZGF0b3I7XG4gIH1cblxuICBoYXNFcnJvcnMoKSB7XG4gICAgbGV0IHJ0biA9IGZhbHNlO1xuICAgIE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKS5mb3JFYWNoKCgkbW9kZWxJZCkgPT4ge1xuICAgICAgcnRuID0gcnRuIHx8ICFfLmlzRW1wdHkodGhpcy5lcnJvcnNbJG1vZGVsSWRdKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcnRuO1xuICB9XG5cbiAgcm12SWRDaGFuZ2VkTGlzdGVuZXIoaWQsIGxpc3RlbmVyKSB7XG4gICAgdGhpcy5ybXZJZExpc3RlbmVyKGlkLCBFdnRUeXBlLkNoYW5nZWQsIGxpc3RlbmVyKTtcbiAgfVxuXG4gIHJtdklkRXJyb3JlZExpc3RlbmVyKGlkLCBsaXN0ZW5lcikge1xuICAgIHRoaXMucm12SWRMaXN0ZW5lcihpZCwgRXZ0VHlwZS5FcnJvcmVkLCBsaXN0ZW5lcik7XG4gIH1cblxuICBybXZJZExpc3RlbmVyKGlkLCB0eXBlLCBsaXN0ZW5lcikge1xuICAgIGlmICghdGhpcy5pZExpc3RlbmVyc1t0eXBlXSkge1xuICAgICAgdGhpcy5pZExpc3RlbmVyc1t0eXBlXSA9IHt9O1xuICAgIH1cbiAgICBpZiAoIXRoaXMuaWRMaXN0ZW5lcnNbdHlwZV1baWRdKSB7XG4gICAgICB0aGlzLmlkTGlzdGVuZXJzW3R5cGVdW2lkXSA9IFtdO1xuICAgIH1cbiAgICBpZiAodGhpcy5pZExpc3RlbmVyc1t0eXBlXVtpZF0uaW5kZXhPZihsaXN0ZW5lcikgPj0gMCkge1xuICAgICAgdGhpcy5pZExpc3RlbmVyc1t0eXBlXVtpZF0uc2tSbXYobGlzdGVuZXIpO1xuICAgIH1cbiAgfVxuXG4gIHJtdlJlZ0NoYW5nZWRMaXN0ZW5lcihyZWcsIGxpc3RlbmVyKSB7XG4gICAgdGhpcy5ybXZSZWdMaXN0ZW5lcihyZWcsIEV2dFR5cGUuQ2hhbmdlZCwgbGlzdGVuZXIpO1xuICB9XG5cbiAgcm12UmVnRXJyb3JlZExpc3RlbmVyKHJlZywgbGlzdGVuZXIpIHtcbiAgICB0aGlzLnJtdlJlZ0xpc3RlbmVyKHJlZywgRXZ0VHlwZS5FcnJvcmVkLCBsaXN0ZW5lcik7XG4gIH1cblxuICBybXZSZWdMaXN0ZW5lcihyZWcsIHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgaWYgKCF0aGlzLnJlZ0xpc3RlbmVyc1t0eXBlXSkge1xuICAgICAgdGhpcy5yZWdMaXN0ZW5lcnNbdHlwZV0gPSB7fTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnJlZ0xpc3RlbmVyc1t0eXBlXVtyZWddKSB7XG4gICAgICB0aGlzLnJlZ0xpc3RlbmVyc1t0eXBlXVtyZWddID0gW107XG4gICAgfVxuICAgIGlmICh0aGlzLnJlZ0xpc3RlbmVyc1t0eXBlXVtyZWddLmluZGV4T2YobGlzdGVuZXIpID49IDApIHtcbiAgICAgIHRoaXMucmVnTGlzdGVuZXJzW3R5cGVdW3JlZ10uc2tSbXYobGlzdGVuZXIpO1xuICAgIH1cbiAgfVxuXG4gIHNrVmFsKGlkLCB2YWx1ZSkge1xuICAgIGxldCBvbGRWYWx1ZSA9IHRoaXMuZnJlZU9iamVjdC5za1ZhbChpZCk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICBpZiAob2xkVmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZnJlZU9iamVjdC5za1ZhbChpZCwgdmFsdWUpO1xuICAgICAgICB0aGlzLmZpcmVDaGFuZ2VkRXZlbnQoaWQsIG9sZFZhbHVlLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG9sZFZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIC8vdmFsaWRhdG9yIGJlZ2luXG4gIGFkZEFsbFZhbGlkYXRvck1vbml0b3IoKSB7XG4gICAgbGV0IHRtcE1vZGVsSWRzID0gdGhpcy5nZXRWYWxpZGF0b3IoKS5nZXRNb2RlbElkcygpO1xuICAgIE9iamVjdC5rZXlzKHRtcE1vZGVsSWRzKS5mb3JFYWNoKCgka2V5KSA9PiB7XG4gICAgICB0aGlzLmFkZFZhbGlkYXRvck1vbml0b3IoJGtleSwgdG1wTW9kZWxJZHNbJGtleV0pO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkVmFsaWRhdG9yTW9uaXRvcihtb2RlbElkLCBjb25maWcpIHtcbiAgICBPYmplY3Qua2V5cyhjb25maWcpLmZvckVhY2goKCRrZXkpID0+IHtcbiAgICAgIHRoaXMuYWRkVmFsaWRhdG9yUnVsZU1vbml0b3IobW9kZWxJZCwgJGtleSwgY29uZmlnWyRrZXldKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZFZhbGlkYXRvclJ1bGVNb25pdG9yKG1vZGVsSWQsIHJ1bGUsIHNldHRpbmcpIHtcbiAgICBpZiAoIXRoaXMubW9uaXRvcnNbbW9kZWxJZF0pIHtcbiAgICAgIHRoaXMuZXJyb3JzW21vZGVsSWRdID0ge307XG4gICAgICB0aGlzLm1vbml0b3JzW21vZGVsSWRdID0gdGhpcy52YWxpZGF0ZS5iaW5kKG1vZGVsSWQpO1xuICAgICAgdGhpcy5hZGRJZENoYW5nZWRMaXN0ZW5lcihtb2RlbElkLCB0aGlzLm1vbml0b3JzW21vZGVsSWRdKVxuICAgIH1cbiAgICBpZiAocnVsZSA9PT0gVmFsaWRhdG9yLlBST1BfREVQUykge1xuICAgICAgLy93aGVuIGRlcGVuZGVuY2llcyBjaGFuZ2VkLCBuZWVkIHZhbGlkYXRlIHRvb1xuICAgICAgTW9kZWwucGFyc2VTYW8oc2V0dGluZykuZm9yRWFjaCgoJGkpID0+IHtcbiAgICAgICAgaWYgKF8uaXNSZWdFeHAoJGkpKSB7XG4gICAgICAgICAgdGhpcy5hZGRSZWdDaGFuZ2VkTGlzdGVuZXIoJGksIHRoaXMubW9uaXRvcnNbbW9kZWxJZF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuYWRkSWRDaGFuZ2VkTGlzdGVuZXIoJGksIHRoaXMubW9uaXRvcnNbbW9kZWxJZF0pXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdG1wU2V0dGluZ0RlcHMgPSBzZXR0aW5nW1ZhbGlkYXRvci5QUk9QX0RFUFNdO1xuICAgICAgaWYgKHRtcFNldHRpbmdEZXBzKSB7XG4gICAgICAgIC8vc2VlIFZhbGlkYXRvci5jb25zdHJ1Y3RvciBjb21tZW50c1xuICAgICAgICBNb2RlbC5wYXJzZVNhbyh0bXBTZXR0aW5nRGVwcykuZm9yRWFjaCgoJGkpID0+IHtcbiAgICAgICAgICBpZiAoXy5pc1JlZ0V4cCgkaSkpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkUmVnQ2hhbmdlZExpc3RlbmVyKCRpLCB0aGlzLm1vbml0b3JzW21vZGVsSWRdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGRJZENoYW5nZWRMaXN0ZW5lcigkaSwgdGhpcy5tb25pdG9yc1ttb2RlbElkXSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGV4ZWNWYWxpZGF0ZShydWxlLCBpZCwgZnVuYywgbW9kZWwsIHNldHRpbmcpIHtcbiAgICBsZXQgdG1wUnRuID0gZnVuYyhtb2RlbCwgbW9kZWwuc2tWYWwoaWQpLCBzZXR0aW5nKTtcbiAgICBpZiAoIV8uaXNCb29sZWFuKHRtcFJ0bikpIHsvL3RydWUgb3IgbWVzc2FnZVxuICAgICAgdGhpcy5lcnJvcnMuc2tWYWwoaWQgKyBTSy5DSEFSX0RPVCArIHJ1bGUsIHRtcFJ0bik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmVycm9yc1tpZF1bcnVsZV07XG4gICAgfVxuICAgIHRoaXMuZmlyZUVycm9yZWRFdmVudChpZCwgbW9kZWwuc2tWYWwoaWQpLCBtb2RlbC5za1ZhbChpZCkpO1xuICB9XG5cbiAgcm12VmFsaWRhdG9yTW9uaXRvcihpZCwgY29uZmlnKSB7XG4gICAgT2JqZWN0LmtleXMoY29uZmlnKS5mb3JFYWNoKCgka2V5KSA9PiB7XG4gICAgICBpZiAoJGtleSA9PT0gVmFsaWRhdG9yLlBST1BfREVQUykge1xuICAgICAgICBNb2RlbC5wYXJzZVNhbyhjb25maWdbJGtleV0pLmZvckVhY2goKCRpKSA9PiB7XG4gICAgICAgICAgaWYgKF8uaXNSZWdFeHAoJGkpKSB7XG4gICAgICAgICAgICB0aGlzLnJtdlJlZ0NoYW5nZWRMaXN0ZW5lcigkaSwgdGhpcy5tb25pdG9yc1tpZF0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJtdklkQ2hhbmdlZExpc3RlbmVyKCRpLCB0aGlzLm1vbml0b3JzW2lkXSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5ybXZWYWxpZGF0b3JSdWxlTW9uaXRvcihpZCwgJGtleSwgY29uZmlnWyRrZXldKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJtdlZhbGlkYXRvclJ1bGVNb25pdG9yKGlkLCBydWxlLCBzZXR0aW5nKSB7XG4gICAgbGV0IHRtcFNldHRpbmdEZXBzID0gc2V0dGluZ1tWYWxpZGF0b3IuUFJPUF9ERVBTXTtcbiAgICBpZiAodG1wU2V0dGluZ0RlcHMpIHtcbiAgICAgIE1vZGVsLnBhcnNlU2FvKHRtcFNldHRpbmdEZXBzKS5mb3JFYWNoKCgkaSkgPT4ge1xuICAgICAgICBpZiAoXy5pc1JlZ0V4cCgkaSkpIHtcbiAgICAgICAgICB0aGlzLnJtdlJlZ0NoYW5nZWRMaXN0ZW5lcigkaSwgdGhpcy5tb25pdG9yc1tpZF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucm12SWRDaGFuZ2VkTGlzdGVuZXIoJGksIHRoaXMubW9uaXRvcnNbaWRdKVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZShldnQpIHtcbiAgICBsZXQgdG1wTW9kZWxJZCA9IHRoaXM7XG4gICAgbGV0IHRtcE1vZGVsID0gZXZ0Lm1vZGVsO1xuICAgIGxldCB0bXBDb25maWcgPSBldnQubW9kZWwuZ2V0VmFsaWRhdG9yKCkuZ2V0TW9kZWxJZHMoKVt0bXBNb2RlbElkXTtcbiAgICBpZiAodG1wQ29uZmlnICYmIF8uaXNPYmplY3QodG1wQ29uZmlnKSkge1xuICAgICAgT2JqZWN0LmtleXModG1wQ29uZmlnKS5mb3JFYWNoKCgka2V5KSA9PiB7XG4gICAgICAgIGlmICgka2V5ID09PSBWYWxpZGF0b3IuUFJPUF9TQ0VOQVJJTykge1xuICAgICAgICAgIC8vaWdub3JlXG4gICAgICAgIH0gZWxzZSBpZiAoJGtleSA9PT0gVmFsaWRhdG9yLlBST1BfRlVOQykge1xuICAgICAgICAgIHRtcE1vZGVsLmV4ZWNWYWxpZGF0ZSgka2V5LCB0bXBNb2RlbElkLCB0bXBDb25maWdbJGtleV0sIHRtcE1vZGVsLCB1bmRlZmluZWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCB0bXBSdWxlID0gdG1wTW9kZWwuZ2V0VmFsaWRhdG9yKCkuZ2V0UnVsZXMoKVska2V5XTtcbiAgICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKHRtcFJ1bGUpKSB7XG4gICAgICAgICAgICB0bXBNb2RlbC5leGVjVmFsaWRhdGUoJGtleSwgdG1wTW9kZWxJZCwgdG1wUnVsZSwgdG1wTW9kZWwsIHRtcENvbmZpZ1ska2V5XSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChfLmlzT2JqZWN0KHRtcFJ1bGUpICYmIF8uaXNGdW5jdGlvbih0bXBSdWxlW1ZhbGlkYXRvci5QUk9QX0ZVTkNdKSkge1xuICAgICAgICAgICAgdG1wTW9kZWwuZXhlY1ZhbGlkYXRlKCRrZXksIHRtcE1vZGVsSWQsIHRtcFJ1bGVbVmFsaWRhdG9yLlBST1BfRlVOQ10sIHRtcE1vZGVsLCB1bmRlZmluZWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGVCeVNjZW5hcmlvKHNjZW5hcmlvKSB7XG4gICAgbGV0IGNvbmZpZ3MgPSB0aGlzLmdldFZhbGlkYXRvcigpLmdldE1vZGVsSWRzKCk7XG4gICAgT2JqZWN0LmtleXMoY29uZmlncykuZm9yRWFjaCgoJG1vZGVsSWQpID0+IHtcbiAgICAgIGlmICghc2NlbmFyaW8gfHwgc2NlbmFyaW8gPT09IGNvbmZpZ3NbJG1vZGVsSWRdW1ZhbGlkYXRvci5QUk9QX1NDRU5BUklPXSkge1xuICAgICAgICB0aGlzLnZhbGlkYXRlLmNhbGwoJG1vZGVsSWQsIHttb2RlbDogdGhpc30pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy92YWxpZGF0b3IgZW5kXG59XG4iXX0=