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
   * {a:{b:true,c:false}} => a.b
   * @param prefix
   * @param modelIds
   * @param object
   */


  _createClass(Model, [{
    key: 'addIdChangedListener',


    /**
     *
     * @param id
     * @param listener please bind context
     */
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

  }], [{
    key: 'object2ModelIds',
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

  return Model;
}();

Model.PROP_SK = 'skModel';
Model.PROP_SYS = 'skSysModel';
exports.default = Model;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwvTW9kZWwuanMiXSwibmFtZXMiOlsiTW9kZWwiLCJmcmVlT2JqZWN0IiwidmFsaWRhdG9yIiwiZXJyb3JzIiwiaWRMaXN0ZW5lcnMiLCJtb25pdG9ycyIsInJlZ0xpc3RlbmVycyIsImFkZEFsbFZhbGlkYXRvck1vbml0b3IiLCJpZCIsImxpc3RlbmVyIiwiYWRkSWRMaXN0ZW5lciIsIkNoYW5nZWQiLCJFcnJvcmVkIiwidHlwZSIsImluZGV4T2YiLCJwdXNoIiwicmVnIiwiYWRkUmVnTGlzdGVuZXIiLCJvbGQiLCJjdXJyZW50IiwiZmlyZUV2ZW50IiwibW9kZWwiLCJldnQiLCJtYXRjaGVkTGlzdGVuZXJzIiwiYXBwbHkiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsIm1hdGNoIiwibGlzdGVuZXJzIiwiczRvIiwicnRuIiwiJG1vZGVsSWQiLCJpc0VtcHR5Iiwicm12SWRMaXN0ZW5lciIsInNrUm12Iiwicm12UmVnTGlzdGVuZXIiLCJ2YWx1ZSIsIm9sZFZhbHVlIiwic2tWYWwiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJmaXJlQ2hhbmdlZEV2ZW50IiwidG1wTW9kZWxJZHMiLCJnZXRWYWxpZGF0b3IiLCJnZXRNb2RlbElkcyIsIiRrZXkiLCJhZGRWYWxpZGF0b3JNb25pdG9yIiwibW9kZWxJZCIsImNvbmZpZyIsImFkZFZhbGlkYXRvclJ1bGVNb25pdG9yIiwicnVsZSIsInNldHRpbmciLCJ2YWxpZGF0ZSIsImJpbmQiLCJhZGRJZENoYW5nZWRMaXN0ZW5lciIsIlBST1BfREVQUyIsInBhcnNlU2FvIiwiJGkiLCJpc1JlZ0V4cCIsImFkZFJlZ0NoYW5nZWRMaXN0ZW5lciIsInRtcFNldHRpbmdEZXBzIiwiZnVuYyIsInRtcFJ0biIsImlzQm9vbGVhbiIsIkNIQVJfRE9UIiwiZmlyZUVycm9yZWRFdmVudCIsInJtdlJlZ0NoYW5nZWRMaXN0ZW5lciIsInJtdklkQ2hhbmdlZExpc3RlbmVyIiwicm12VmFsaWRhdG9yUnVsZU1vbml0b3IiLCJ0bXBNb2RlbElkIiwidG1wTW9kZWwiLCJ0bXBDb25maWciLCJpc09iamVjdCIsIlBST1BfU0NFTkFSSU8iLCJQUk9QX0ZVTkMiLCJleGVjVmFsaWRhdGUiLCJ1bmRlZmluZWQiLCJ0bXBSdWxlIiwiZ2V0UnVsZXMiLCJpc0Z1bmN0aW9uIiwic2NlbmFyaW8iLCJjb25maWdzIiwiY2FsbCIsInByZWZpeCIsIm1vZGVsSWRzIiwib2JqZWN0IiwiJGsiLCJ0bXBLZXkiLCJTdHJpbmciLCJza0JsYW5rIiwiRU1QVFkiLCJ0bXBWYWwiLCJpc1BsYWluT2JqZWN0Iiwib2JqZWN0Mk1vZGVsSWRzIiwiczRiIiwic2FvIiwiaXNBcnJheSIsImNvbmNhdCIsImlzU3RyaW5nIiwiUFJPUF9TSyIsIlBST1BfU1lTIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0lBRXFCQSxLOztBQUtuQjs7Ozs7QUFLQSxtQkFBMEQ7QUFBQSxRQUE5Q0MsVUFBOEMsdUVBQWpDLEVBQWlDO0FBQUEsUUFBN0JDLFNBQTZCLHVFQUFqQix5QkFBaUI7O0FBQUE7O0FBRXhELFNBQUtDLE1BQUwsR0FBYyxFQUFkO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQixFQUFuQjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxTQUFLQyxZQUFMLEdBQW9CLEVBQXBCO0FBQ0EsU0FBS0wsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjs7QUFFQSxTQUFLSyxzQkFBTDtBQUNEOztBQUVEOzs7Ozs7Ozs7Ozs7QUFvQ0E7Ozs7O3lDQUtxQkMsRSxFQUFJQyxRLEVBQVU7QUFDakMsV0FBS0MsYUFBTCxDQUFtQkYsRUFBbkIsRUFBdUIsZUFBUUcsT0FBL0IsRUFBd0NGLFFBQXhDO0FBQ0Q7O0FBRUQ7Ozs7Ozs7O3lDQUtxQkQsRSxFQUFJQyxRLEVBQVU7QUFDakMsV0FBS0MsYUFBTCxDQUFtQkYsRUFBbkIsRUFBdUIsZUFBUUksT0FBL0IsRUFBd0NILFFBQXhDO0FB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UCxFQUFlTSxPQUFmLEtBQTJCLFNBQUdDLEtBQTlCLEdBQXNDLFNBQUcxQixRQUFuRCxJQUErRHNCLEVBQTVFO0FBQ0EsWUFBSUssU0FBU04sT0FBT0MsRUFBUCxDQUFiO0FBQ0EsWUFBSSxpQkFBRU0sYUFBRixDQUFnQkQsTUFBaEIsQ0FBSixFQUE2QjtBQUMzQjVGLGdCQUFNOEYsZUFBTixDQUFzQk4sTUFBdEIsRUFBOEJILFFBQTlCLEVBQXdDTyxNQUF4QztBQUNELFNBRkQsTUFFTyxJQUFJLFNBQUdHLEdBQUgsQ0FBT0gsTUFBUCxLQUFrQkEsTUFBdEIsRUFBOEI7QUFDbkNQLG1CQUFTdEUsSUFBVCxDQUFjeUUsTUFBZDtBQUNEO0FBQ0YsT0FSRDtBQVNEOzs7OztBQUVEOzs7OzZCQUlnQlEsRyxFQUFLO0FBQ25CLFVBQUlqRSxNQUFNLEVBQVY7QUFDQSxVQUFJaUUsR0FBSixFQUFTO0FBQ1AsWUFBSSxpQkFBRUgsYUFBRixDQUFnQkcsR0FBaEIsQ0FBSixFQUEwQjtBQUN4QmhHLGdCQUFNOEYsZUFBTixDQUFzQixTQUFHSCxLQUF6QixFQUFnQzVELEdBQWhDLEVBQXFDaUUsR0FBckM7QUFDRCxTQUZELE1BRU8sSUFBSSxpQkFBRUMsT0FBRixDQUFVRCxHQUFWLENBQUosRUFBb0I7QUFDekJqRSxnQkFBTUEsSUFBSW1FLE1BQUosQ0FBV0YsR0FBWCxDQUFOO0FBQ0QsU0FGTSxNQUVBLElBQUksaUJBQUVHLFFBQUYsQ0FBV0gsR0FBWCxDQUFKLEVBQXFCO0FBQzFCakUsY0FBSWhCLElBQUosQ0FBU2lGLEdBQVQ7QUFDRDtBQUNGO0FBQ0QsYUFBT2pFLEdBQVA7QUFDRDs7Ozs7O0FBeERrQi9CLEssQ0FFWm9HLE8sR0FBVSxTO0FBRkVwRyxLLENBR1pxRyxRLEdBQVcsWTtrQkFIQ3JHLEsiLCJmaWxlIjoidXRpbC9Nb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQge1NLfSBmcm9tICdzay1qcyc7XG5pbXBvcnQge0V2dFR5cGV9IGZyb20gJy4vQ29uc3QnO1xuaW1wb3J0IFZhbGlkYXRvciBmcm9tICcuL1ZhbGlkYXRvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGVsIHtcblxuICBzdGF0aWMgUFJPUF9TSyA9ICdza01vZGVsJztcbiAgc3RhdGljIFBST1BfU1lTID0gJ3NrU3lzTW9kZWwnO1xuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gZnJlZU9iamVjdCBwbGFpbiBvYmplY3RcbiAgICogQHBhcmFtIHZhbGlkYXRvclxuICAgKi9cbiAgY29uc3RydWN0b3IoZnJlZU9iamVjdCA9IHt9LCB2YWxpZGF0b3IgPSBuZXcgVmFsaWRhdG9yKCkpIHtcblxuICAgIHRoaXMuZXJyb3JzID0ge307XG4gICAgdGhpcy5pZExpc3RlbmVycyA9IHt9O1xuICAgIHRoaXMubW9uaXRvcnMgPSB7fTtcbiAgICB0aGlzLnJlZ0xpc3RlbmVycyA9IHt9O1xuICAgIHRoaXMuZnJlZU9iamVjdCA9IGZyZWVPYmplY3Q7XG4gICAgdGhpcy52YWxpZGF0b3IgPSB2YWxpZGF0b3I7XG5cbiAgICB0aGlzLmFkZEFsbFZhbGlkYXRvck1vbml0b3IoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiB7YTp7Yjp0cnVlLGM6ZmFsc2V9fSA9PiBhLmJcbiAgICogQHBhcmFtIHByZWZpeFxuICAgKiBAcGFyYW0gbW9kZWxJZHNcbiAgICogQHBhcmFtIG9iamVjdFxuICAgKi9cbiAgc3RhdGljIG9iamVjdDJNb2RlbElkcyhwcmVmaXgsIG1vZGVsSWRzID0gW10sIG9iamVjdCA9IHt9KSB7XG4gICAgT2JqZWN0LmtleXMob2JqZWN0KS5mb3JFYWNoKCgkaykgPT4ge1xuICAgICAgbGV0IHRtcEtleSA9IHByZWZpeCArIChTdHJpbmcocHJlZml4KS5za0JsYW5rKCkgPyBTSy5FTVBUWSA6IFNLLkNIQVJfRE9UKSArICRrO1xuICAgICAgbGV0IHRtcFZhbCA9IG9iamVjdFska107XG4gICAgICBpZiAoXy5pc1BsYWluT2JqZWN0KHRtcFZhbCkpIHtcbiAgICAgICAgTW9kZWwub2JqZWN0Mk1vZGVsSWRzKHRtcEtleSwgbW9kZWxJZHMsIHRtcFZhbClcbiAgICAgIH0gZWxzZSBpZiAoU0suczRiKHRtcFZhbCkgJiYgdG1wVmFsKSB7XG4gICAgICAgIG1vZGVsSWRzLnB1c2godG1wS2V5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHNhbyBpcyBzdHJpbmdbcmVnXSwgYXJyYXlbc3RyaW5nXSBvciBvYmplY3RcbiAgICogQHJldHVybnMge0FycmF5fVxuICAgKi9cbiAgc3RhdGljIHBhcnNlU2FvKHNhbykge1xuICAgIGxldCBydG4gPSBbXTtcbiAgICBpZiAoc2FvKSB7XG4gICAgICBpZiAoXy5pc1BsYWluT2JqZWN0KHNhbykpIHtcbiAgICAgICAgTW9kZWwub2JqZWN0Mk1vZGVsSWRzKFNLLkVNUFRZLCBydG4sIHNhbyk7XG4gICAgICB9IGVsc2UgaWYgKF8uaXNBcnJheShzYW8pKSB7XG4gICAgICAgIHJ0biA9IHJ0bi5jb25jYXQoc2FvKTtcbiAgICAgIH0gZWxzZSBpZiAoXy5pc1N0cmluZyhzYW8pKSB7XG4gICAgICAgIHJ0bi5wdXNoKHNhbyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBydG47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGlkXG4gICAqIEBwYXJhbSBsaXN0ZW5lciBwbGVhc2UgYmluZCBjb250ZXh0XG4gICAqL1xuICBhZGRJZENoYW5nZWRMaXN0ZW5lcihpZCwgbGlzdGVuZXIpIHtcbiAgICB0aGlzLmFkZElkTGlzdGVuZXIoaWQsIEV2dFR5cGUuQ2hhbmdlZCwgbGlzdGVuZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBpZFxuICAgKiBAcGFyYW0gbGlzdGVuZXIgcGxlYXNlIGJpbmQgY29udGV4dFxuICAgKi9cbiAgYWRkSWRFcnJvcmVkTGlzdGVuZXIoaWQsIGxpc3RlbmVyKSB7XG4gICAgdGhpcy5hZGRJZExpc3RlbmVyKGlkLCBFdnRUeXBlLkVycm9yZWQsIGxpc3RlbmVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gaWRcbiAgICogQHBhcmFtIHR5cGVcbiAgICogQHBhcmFtIGxpc3RlbmVyIHBsZWFzZSBiaW5kIGNvbnRleHRcbiAgICovXG4gIGFkZElkTGlzdGVuZXIoaWQsIHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgaWYgKCF0aGlzLmlkTGlzdGVuZXJzW3R5cGVdKSB7XG4gICAgICB0aGlzLmlkTGlzdGVuZXJzW3R5cGVdID0ge307XG4gICAgfVxuICAgIGlmICghdGhpcy5pZExpc3RlbmVyc1t0eXBlXVtpZF0pIHtcbiAgICAgIHRoaXMuaWRMaXN0ZW5lcnNbdHlwZV1baWRdID0gW107XG4gICAgfVxuICAgIGlmICh0aGlzLmlkTGlzdGVuZXJzW3R5cGVdW2lkXS5pbmRleE9mKGxpc3RlbmVyKSA8IDApIHtcbiAgICAgIHRoaXMuaWRMaXN0ZW5lcnNbdHlwZV1baWRdLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gcmVnXG4gICAqIEBwYXJhbSBsaXN0ZW5lciBwbGVhc2UgYmluZCBjb250ZXh0XG4gICAqL1xuICBhZGRSZWdDaGFuZ2VkTGlzdGVuZXIocmVnLCBsaXN0ZW5lcikge1xuICAgIHRoaXMuYWRkUmVnTGlzdGVuZXIocmVnLCBFdnRUeXBlLkNoYW5nZWQsIGxpc3RlbmVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gcmVnXG4gICAqIEBwYXJhbSBsaXN0ZW5lciBwbGVhc2UgYmluZCBjb250ZXh0XG4gICAqL1xuICBhZGRSZWdFcnJvcmVkTGlzdGVuZXIocmVnLCBsaXN0ZW5lcikge1xuICAgIHRoaXMuYWRkUmVnTGlzdGVuZXIocmVnLCBFdnRUeXBlLkVycm9yZWQsIGxpc3RlbmVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gcmVnXG4gICAqIEBwYXJhbSB0eXBlXG4gICAqIEBwYXJhbSBsaXN0ZW5lciBwbGVhc2UgYmluZCBjb250ZXh0XG4gICAqL1xuICBhZGRSZWdMaXN0ZW5lcihyZWcsIHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgaWYgKCF0aGlzLnJlZ0xpc3RlbmVyc1t0eXBlXSkge1xuICAgICAgdGhpcy5yZWdMaXN0ZW5lcnNbdHlwZV0gPSB7fTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnJlZ0xpc3RlbmVyc1t0eXBlXVtyZWddKSB7XG4gICAgICB0aGlzLnJlZ0xpc3RlbmVyc1t0eXBlXVtyZWddID0gW107XG4gICAgfVxuICAgIGlmICh0aGlzLnJlZ0xpc3RlbmVyc1t0eXBlXVtyZWddLmluZGV4T2YobGlzdGVuZXIpIDwgMCkge1xuICAgICAgdGhpcy5yZWdMaXN0ZW5lcnNbdHlwZV1bcmVnXS5wdXNoKGxpc3RlbmVyKTtcbiAgICB9XG4gIH1cblxuICBmaXJlQ2hhbmdlZEV2ZW50KGlkLCBvbGQsIGN1cnJlbnQpIHtcbiAgICB0aGlzLmZpcmVFdmVudCh7bW9kZWw6IHRoaXMsIGlkOiBpZCwgb2xkOiBvbGQsIGN1cnJlbnQ6IGN1cnJlbnQsIHR5cGU6IEV2dFR5cGUuQ2hhbmdlZH0pO1xuICB9XG5cbiAgZmlyZUVycm9yZWRFdmVudChpZCwgb2xkLCBjdXJyZW50KSB7XG4gICAgdGhpcy5maXJlRXZlbnQoe21vZGVsOiB0aGlzLCBpZDogaWQsIG9sZDogb2xkLCBjdXJyZW50OiBjdXJyZW50LCB0eXBlOiBFdnRUeXBlLkVycm9yZWR9KTtcbiAgfVxuXG4gIGZpcmVFdmVudChldnQpIHtcbiAgICBsZXQgbWF0Y2hlZExpc3RlbmVycyA9IFtdO1xuICAgIGxldCBpZExpc3RlbmVycyA9IHRoaXMuaWRMaXN0ZW5lcnNbZXZ0LnR5cGVdID8gdGhpcy5pZExpc3RlbmVyc1tldnQudHlwZV0gOiB7fTtcbiAgICBtYXRjaGVkTGlzdGVuZXJzLnB1c2guYXBwbHkobWF0Y2hlZExpc3RlbmVycywgaWRMaXN0ZW5lcnNbZXZ0LmlkXSA/IGlkTGlzdGVuZXJzW2V2dC5pZF0gOiBbXSk7XG4gICAgbGV0IHJlZ0xpc3RlbmVycyA9IHRoaXMucmVnTGlzdGVuZXJzW2V2dC50eXBlXSA/IHRoaXMucmVnTGlzdGVuZXJzW2V2dC50eXBlXSA6IHt9O1xuICAgIE9iamVjdC5rZXlzKHJlZ0xpc3RlbmVycykuZm9yRWFjaChyZWcgPT4ge1xuICAgICAgbWF0Y2hlZExpc3RlbmVycy5wdXNoLmFwcGx5KG1hdGNoZWRMaXN0ZW5lcnMsIGV2dC5pZC5tYXRjaChyZWcpID8gbGlzdGVuZXJzW3JlZ10gOiBbXSk7XG4gICAgfSk7XG5cbiAgICBtYXRjaGVkTGlzdGVuZXJzLmZvckVhY2gobGlzdGVuZXIgPT4ge1xuICAgICAgbGlzdGVuZXIoZXZ0KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldEFsbEVycm9ycygpIHtcbiAgICByZXR1cm4gdGhpcy5lcnJvcnM7XG4gIH1cblxuICBnZXRFcnJvcnMoaWQpIHtcbiAgICByZXR1cm4gU0suczRvKHRoaXMuZXJyb3JzW2lkXSk7XG4gIH1cblxuICBnZXRWYWxpZGF0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsaWRhdG9yO1xuICB9XG5cbiAgaGFzRXJyb3JzKCkge1xuICAgIGxldCBydG4gPSBmYWxzZTtcbiAgICBPYmplY3Qua2V5cyh0aGlzLmVycm9ycykuZm9yRWFjaCgoJG1vZGVsSWQpID0+IHtcbiAgICAgIHJ0biA9IHJ0biB8fCAhXy5pc0VtcHR5KHRoaXMuZXJyb3JzWyRtb2RlbElkXSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJ0bjtcbiAgfVxuXG4gIHJtdklkQ2hhbmdlZExpc3RlbmVyKGlkLCBsaXN0ZW5lcikge1xuICAgIHRoaXMucm12SWRMaXN0ZW5lcihpZCwgRXZ0VHlwZS5DaGFuZ2VkLCBsaXN0ZW5lcik7XG4gIH1cblxuICBybXZJZEVycm9yZWRMaXN0ZW5lcihpZCwgbGlzdGVuZXIpIHtcbiAgICB0aGlzLnJtdklkTGlzdGVuZXIoaWQsIEV2dFR5cGUuRXJyb3JlZCwgbGlzdGVuZXIpO1xuICB9XG5cbiAgcm12SWRMaXN0ZW5lcihpZCwgdHlwZSwgbGlzdGVuZXIpIHtcbiAgICBpZiAoIXRoaXMuaWRMaXN0ZW5lcnNbdHlwZV0pIHtcbiAgICAgIHRoaXMuaWRMaXN0ZW5lcnNbdHlwZV0gPSB7fTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmlkTGlzdGVuZXJzW3R5cGVdW2lkXSkge1xuICAgICAgdGhpcy5pZExpc3RlbmVyc1t0eXBlXVtpZF0gPSBbXTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaWRMaXN0ZW5lcnNbdHlwZV1baWRdLmluZGV4T2YobGlzdGVuZXIpID49IDApIHtcbiAgICAgIHRoaXMuaWRMaXN0ZW5lcnNbdHlwZV1baWRdLnNrUm12KGxpc3RlbmVyKTtcbiAgICB9XG4gIH1cblxuICBybXZSZWdDaGFuZ2VkTGlzdGVuZXIocmVnLCBsaXN0ZW5lcikge1xuICAgIHRoaXMucm12UmVnTGlzdGVuZXIocmVnLCBFdnRUeXBlLkNoYW5nZWQsIGxpc3RlbmVyKTtcbiAgfVxuXG4gIHJtdlJlZ0Vycm9yZWRMaXN0ZW5lcihyZWcsIGxpc3RlbmVyKSB7XG4gICAgdGhpcy5ybXZSZWdMaXN0ZW5lcihyZWcsIEV2dFR5cGUuRXJyb3JlZCwgbGlzdGVuZXIpO1xuICB9XG5cbiAgcm12UmVnTGlzdGVuZXIocmVnLCB0eXBlLCBsaXN0ZW5lcikge1xuICAgIGlmICghdGhpcy5yZWdMaXN0ZW5lcnNbdHlwZV0pIHtcbiAgICAgIHRoaXMucmVnTGlzdGVuZXJzW3R5cGVdID0ge307XG4gICAgfVxuICAgIGlmICghdGhpcy5yZWdMaXN0ZW5lcnNbdHlwZV1bcmVnXSkge1xuICAgICAgdGhpcy5yZWdMaXN0ZW5lcnNbdHlwZV1bcmVnXSA9IFtdO1xuICAgIH1cbiAgICBpZiAodGhpcy5yZWdMaXN0ZW5lcnNbdHlwZV1bcmVnXS5pbmRleE9mKGxpc3RlbmVyKSA+PSAwKSB7XG4gICAgICB0aGlzLnJlZ0xpc3RlbmVyc1t0eXBlXVtyZWddLnNrUm12KGxpc3RlbmVyKTtcbiAgICB9XG4gIH1cblxuICBza1ZhbChpZCwgdmFsdWUpIHtcbiAgICBsZXQgb2xkVmFsdWUgPSB0aGlzLmZyZWVPYmplY3Quc2tWYWwoaWQpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgaWYgKG9sZFZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICB0aGlzLmZyZWVPYmplY3Quc2tWYWwoaWQsIHZhbHVlKTtcbiAgICAgICAgdGhpcy5maXJlQ2hhbmdlZEV2ZW50KGlkLCBvbGRWYWx1ZSwgdmFsdWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvbGRWYWx1ZTtcbiAgICB9XG4gIH1cblxuICAvL3ZhbGlkYXRvciBiZWdpblxuICBhZGRBbGxWYWxpZGF0b3JNb25pdG9yKCkge1xuICAgIGxldCB0bXBNb2RlbElkcyA9IHRoaXMuZ2V0VmFsaWRhdG9yKCkuZ2V0TW9kZWxJZHMoKTtcbiAgICBPYmplY3Qua2V5cyh0bXBNb2RlbElkcykuZm9yRWFjaCgoJGtleSkgPT4ge1xuICAgICAgdGhpcy5hZGRWYWxpZGF0b3JNb25pdG9yKCRrZXksIHRtcE1vZGVsSWRzWyRrZXldKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZFZhbGlkYXRvck1vbml0b3IobW9kZWxJZCwgY29uZmlnKSB7XG4gICAgT2JqZWN0LmtleXMoY29uZmlnKS5mb3JFYWNoKCgka2V5KSA9PiB7XG4gICAgICB0aGlzLmFkZFZhbGlkYXRvclJ1bGVNb25pdG9yKG1vZGVsSWQsICRrZXksIGNvbmZpZ1ska2V5XSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRWYWxpZGF0b3JSdWxlTW9uaXRvcihtb2RlbElkLCBydWxlLCBzZXR0aW5nKSB7XG4gICAgaWYgKCF0aGlzLm1vbml0b3JzW21vZGVsSWRdKSB7XG4gICAgICB0aGlzLmVycm9yc1ttb2RlbElkXSA9IHt9O1xuICAgICAgdGhpcy5tb25pdG9yc1ttb2RlbElkXSA9IHRoaXMudmFsaWRhdGUuYmluZChtb2RlbElkKTtcbiAgICAgIHRoaXMuYWRkSWRDaGFuZ2VkTGlzdGVuZXIobW9kZWxJZCwgdGhpcy5tb25pdG9yc1ttb2RlbElkXSlcbiAgICB9XG4gICAgaWYgKHJ1bGUgPT09IFZhbGlkYXRvci5QUk9QX0RFUFMpIHtcbiAgICAgIC8vd2hlbiBkZXBlbmRlbmNpZXMgY2hhbmdlZCwgbmVlZCB2YWxpZGF0ZSB0b29cbiAgICAgIE1vZGVsLnBhcnNlU2FvKHNldHRpbmcpLmZvckVhY2goKCRpKSA9PiB7XG4gICAgICAgIGlmIChfLmlzUmVnRXhwKCRpKSkge1xuICAgICAgICAgIHRoaXMuYWRkUmVnQ2hhbmdlZExpc3RlbmVyKCRpLCB0aGlzLm1vbml0b3JzW21vZGVsSWRdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmFkZElkQ2hhbmdlZExpc3RlbmVyKCRpLCB0aGlzLm1vbml0b3JzW21vZGVsSWRdKVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHRtcFNldHRpbmdEZXBzID0gc2V0dGluZ1tWYWxpZGF0b3IuUFJPUF9ERVBTXTtcbiAgICAgIGlmICh0bXBTZXR0aW5nRGVwcykge1xuICAgICAgICAvL3NlZSBWYWxpZGF0b3IuY29uc3RydWN0b3IgY29tbWVudHNcbiAgICAgICAgTW9kZWwucGFyc2VTYW8odG1wU2V0dGluZ0RlcHMpLmZvckVhY2goKCRpKSA9PiB7XG4gICAgICAgICAgaWYgKF8uaXNSZWdFeHAoJGkpKSB7XG4gICAgICAgICAgICB0aGlzLmFkZFJlZ0NoYW5nZWRMaXN0ZW5lcigkaSwgdGhpcy5tb25pdG9yc1ttb2RlbElkXSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRkSWRDaGFuZ2VkTGlzdGVuZXIoJGksIHRoaXMubW9uaXRvcnNbbW9kZWxJZF0pXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBleGVjVmFsaWRhdGUocnVsZSwgaWQsIGZ1bmMsIG1vZGVsLCBzZXR0aW5nKSB7XG4gICAgbGV0IHRtcFJ0biA9IGZ1bmMobW9kZWwsIG1vZGVsLnNrVmFsKGlkKSwgc2V0dGluZyk7XG4gICAgaWYgKCFfLmlzQm9vbGVhbih0bXBSdG4pKSB7Ly90cnVlIG9yIG1lc3NhZ2VcbiAgICAgIHRoaXMuZXJyb3JzLnNrVmFsKGlkICsgU0suQ0hBUl9ET1QgKyBydWxlLCB0bXBSdG4pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdGhpcy5lcnJvcnNbaWRdW3J1bGVdO1xuICAgIH1cbiAgICB0aGlzLmZpcmVFcnJvcmVkRXZlbnQoaWQsIG1vZGVsLnNrVmFsKGlkKSwgbW9kZWwuc2tWYWwoaWQpKTtcbiAgfVxuXG4gIHJtdlZhbGlkYXRvck1vbml0b3IoaWQsIGNvbmZpZykge1xuICAgIE9iamVjdC5rZXlzKGNvbmZpZykuZm9yRWFjaCgoJGtleSkgPT4ge1xuICAgICAgaWYgKCRrZXkgPT09IFZhbGlkYXRvci5QUk9QX0RFUFMpIHtcbiAgICAgICAgTW9kZWwucGFyc2VTYW8oY29uZmlnWyRrZXldKS5mb3JFYWNoKCgkaSkgPT4ge1xuICAgICAgICAgIGlmIChfLmlzUmVnRXhwKCRpKSkge1xuICAgICAgICAgICAgdGhpcy5ybXZSZWdDaGFuZ2VkTGlzdGVuZXIoJGksIHRoaXMubW9uaXRvcnNbaWRdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ybXZJZENoYW5nZWRMaXN0ZW5lcigkaSwgdGhpcy5tb25pdG9yc1tpZF0pXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucm12VmFsaWRhdG9yUnVsZU1vbml0b3IoaWQsICRrZXksIGNvbmZpZ1ska2V5XSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBybXZWYWxpZGF0b3JSdWxlTW9uaXRvcihpZCwgcnVsZSwgc2V0dGluZykge1xuICAgIGxldCB0bXBTZXR0aW5nRGVwcyA9IHNldHRpbmdbVmFsaWRhdG9yLlBST1BfREVQU107XG4gICAgaWYgKHRtcFNldHRpbmdEZXBzKSB7XG4gICAgICBNb2RlbC5wYXJzZVNhbyh0bXBTZXR0aW5nRGVwcykuZm9yRWFjaCgoJGkpID0+IHtcbiAgICAgICAgaWYgKF8uaXNSZWdFeHAoJGkpKSB7XG4gICAgICAgICAgdGhpcy5ybXZSZWdDaGFuZ2VkTGlzdGVuZXIoJGksIHRoaXMubW9uaXRvcnNbaWRdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJtdklkQ2hhbmdlZExpc3RlbmVyKCRpLCB0aGlzLm1vbml0b3JzW2lkXSlcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoZXZ0KSB7XG4gICAgbGV0IHRtcE1vZGVsSWQgPSB0aGlzO1xuICAgIGxldCB0bXBNb2RlbCA9IGV2dC5tb2RlbDtcbiAgICBsZXQgdG1wQ29uZmlnID0gZXZ0Lm1vZGVsLmdldFZhbGlkYXRvcigpLmdldE1vZGVsSWRzKClbdG1wTW9kZWxJZF07XG4gICAgaWYgKHRtcENvbmZpZyAmJiBfLmlzT2JqZWN0KHRtcENvbmZpZykpIHtcbiAgICAgIE9iamVjdC5rZXlzKHRtcENvbmZpZykuZm9yRWFjaCgoJGtleSkgPT4ge1xuICAgICAgICBpZiAoJGtleSA9PT0gVmFsaWRhdG9yLlBST1BfU0NFTkFSSU8pIHtcbiAgICAgICAgICAvL2lnbm9yZVxuICAgICAgICB9IGVsc2UgaWYgKCRrZXkgPT09IFZhbGlkYXRvci5QUk9QX0ZVTkMpIHtcbiAgICAgICAgICB0bXBNb2RlbC5leGVjVmFsaWRhdGUoJGtleSwgdG1wTW9kZWxJZCwgdG1wQ29uZmlnWyRrZXldLCB0bXBNb2RlbCwgdW5kZWZpbmVkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgdG1wUnVsZSA9IHRtcE1vZGVsLmdldFZhbGlkYXRvcigpLmdldFJ1bGVzKClbJGtleV07XG4gICAgICAgICAgaWYgKF8uaXNGdW5jdGlvbih0bXBSdWxlKSkge1xuICAgICAgICAgICAgdG1wTW9kZWwuZXhlY1ZhbGlkYXRlKCRrZXksIHRtcE1vZGVsSWQsIHRtcFJ1bGUsIHRtcE1vZGVsLCB0bXBDb25maWdbJGtleV0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAoXy5pc09iamVjdCh0bXBSdWxlKSAmJiBfLmlzRnVuY3Rpb24odG1wUnVsZVtWYWxpZGF0b3IuUFJPUF9GVU5DXSkpIHtcbiAgICAgICAgICAgIHRtcE1vZGVsLmV4ZWNWYWxpZGF0ZSgka2V5LCB0bXBNb2RlbElkLCB0bXBSdWxlW1ZhbGlkYXRvci5QUk9QX0ZVTkNdLCB0bXBNb2RlbCwgdW5kZWZpbmVkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlQnlTY2VuYXJpbyhzY2VuYXJpbykge1xuICAgIGxldCBjb25maWdzID0gdGhpcy5nZXRWYWxpZGF0b3IoKS5nZXRNb2RlbElkcygpO1xuICAgIE9iamVjdC5rZXlzKGNvbmZpZ3MpLmZvckVhY2goKCRtb2RlbElkKSA9PiB7XG4gICAgICBpZiAoIXNjZW5hcmlvIHx8IHNjZW5hcmlvID09PSBjb25maWdzWyRtb2RlbElkXVtWYWxpZGF0b3IuUFJPUF9TQ0VOQVJJT10pIHtcbiAgICAgICAgdGhpcy52YWxpZGF0ZS5jYWxsKCRtb2RlbElkLCB7bW9kZWw6IHRoaXN9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vdmFsaWRhdG9yIGVuZFxufVxuIl19