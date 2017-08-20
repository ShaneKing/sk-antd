import _ from 'lodash';
import SK from 'sk-js';
import Cfg from './Cfg';
import {EvtType} from './Const';
import Validator from './Validator';

export default class Model {

  static PROP_SK = 'skModel';
  static PROP_SYS = 'skSysModel';

  static object2Paths(prefix, paths = [], object = {}) {
    Object.keys(object).forEach(($k) => {
      let tmpKey = prefix + (String(prefix).skBlank() ? SK.EMPTY : SK.CHAR_DOT) + $k;
      let tmpVal = object[$k];
      if (_.isPlainObject(tmpVal)) {
        Model.object2Paths(tmpKey, paths, tmpVal)
      } else if (SK.s4b(tmpVal) && tmpVal) {
        paths.push(tmpKey);
      }
    });
  };

  /**
   * @param sao string[reg], string array or object
   * @returns {Array}
   */
  static parseSao(sao) {
    let rtn = [];
    if (sao) {
      if (_.isPlainObject(sao)) {
        Model.object2Paths(SK.EMPTY, rtn, sao);
      } else if (_.isArray(sao)) {
        rtn = rtn.concat(sao);
      } else if (_.isString(sao)) {
        rtn.push(sao);
      }
    }
    return rtn;
  }

  errors = {};
  idListeners = {};
  monitors = {};
  regListeners = {};

  /**
   * 
   * @param property plain object
   * @param validator
     */
  constructor(property = {}, validator = new Validator()) {
    this.property = property;
    this.validator = validator;

    this.addAllValidatorMonitor();
  }

  //validator begin
  addAllValidatorMonitor() {
    let tmpConfigs = this.getValidator().getConfigs();
    Object.keys(tmpConfigs).forEach(($key) => {
      this.addValidatorMonitor($key, tmpConfigs[$key]);
    });
  }

  addValidatorMonitor(id, config) {
    Object.keys(config).forEach(($key) => {
      this.addValidatorRuleMonitor(id, $key, config[$key]);
    });
  }

  addValidatorRuleMonitor(id, rule, setting) {
    if (!this.monitors[id]) {
      this.errors[id] = {};
      this.monitors[id] = this.validate.bind(id);
      this.addIdChangedListener(id, this.monitors[id])
    }
    if (rule == Cfg.PROP_DEPS) {
      Model.parseSao(setting).forEach(($i) => {
        if (_.isRegExp($i)) {
          this.addRegChangedListener($i, this.monitors[id]);
        } else {
          this.addIdChangedListener($i, this.monitors[id])
        }
      });
    } else {
      let tmpSettingDeps = setting[Cfg.PROP_DEPS];
      if (tmpSettingDeps) {
        Model.parseSao(tmpSettingDeps).forEach(($i) => {
          if (_.isRegExp($i)) {
            this.addRegChangedListener($i, this.monitors[id]);
          } else {
            this.addIdChangedListener($i, this.monitors[id])
          }
        });
      }
    }
  }

  rmvValidatorMonitor(id, config) {
    Object.keys(config).forEach(($key) => {
      if ($key == Cfg.PROP_DEPS) {
        Model.parseSao(config[$key]).forEach(($i) => {
          if (_.isRegExp($i)) {
            this.rmvRegChangedListener($i, this.monitors[id]);
          } else {
            this.rmvIdChangedListener($i, this.monitors[id])
          }
        });
      } else {
        this.rmvValidatorRuleMonitor(id, $key, config[$key]);
      }
    });
  }

  rmvValidatorRuleMonitor(id, rule, setting) {
    let tmpSettingDeps = setting[Cfg.PROP_DEPS];
    if (tmpSettingDeps) {
      Model.parseSao(tmpSettingDeps).forEach(($i) => {
        if (_.isRegExp($i)) {
          this.rmvRegChangedListener($i, this.monitors[id]);
        } else {
          this.rmvIdChangedListener($i, this.monitors[id])
        }
      });
    }
  }

  validateByScenario(scenario) {
    let configs = this.getValidator().getConfigs();
    Object.keys(configs).forEach(($modelId) => {
      if (!scenario || scenario == configs[$modelId][Cfg.PROP_SCENARIO]) {
        this.validate.call($modelId, {model: this});
      }
    });
  }

  validate(evt) {
    let tmpId = this;
    let tmpModel = evt.model;
    let tmpConfig = evt.model.getValidator().getConfigs()[tmpId];
    if (tmpConfig && _.isObject(tmpConfig)) {
      Object.keys(tmpConfig).forEach(($key) => {
        if ($key == Cfg.PROP_SCENARIO) {
          //ignore
        } else if ($key == Cfg.PROP_FUNC) {
          tmpModel.execValidate($key, tmpId, tmpConfig[$key], tmpModel, undefined);
        } else {
          let tmpRule = tmpModel.getValidator().getRules()[$key];
          if (_.isFunction(tmpRule)) {
            tmpModel.execValidate($key, tmpId, tmpRule, tmpModel, tmpConfig[$key]);
          } else if (_.isObject(tmpRule) && _.isFunction(tmpRule[Cfg.PROP_FUNC])) {
            tmpModel.execValidate($key, tmpId, tmpRule[Cfg.PROP_FUNC], tmpModel, undefined);
          }
        }
      });
    }
  }

  execValidate(rule, id, func, model, setting) {
    let tmpRtn = func(model, model.skVal(id), setting);
    if (!_.isBoolean(tmpRtn)) {//true or message
      this.errors.skVal(id + SK.CHAR_DOT + rule, tmpRtn);
    } else {
      delete this.errors[id][rule];
    }
    this.fireErroredEvent(id, model.skVal(id), model.skVal(id));
  }

  //validator end
  hasErrors() {
    let rtn = false;
    Object.keys(this.errors).forEach(($modelId)=> {
      rtn = rtn || !_.isEmpty(this.errors[$modelId]);
    });
    return rtn;
  }

  getAllErrors() {
    return this.errors;
  }

  getErrors(id) {
    return SK.s4o(this.errors[id]);
  }

  /**
   *
   * @param id
   * @param listener please bind context
   */
  addIdChangedListener(id, listener) {
    this.addIdListener(id, EvtType.Changed, listener);
  }

  /**
   *
   * @param id
   * @param listener please bind context
   */
  addIdErroredListener(id, listener) {
    this.addIdListener(id, EvtType.Errored, listener);
  }

  /**
   *
   * @param id
   * @param type
   * @param listener please bind context
   */
  addIdListener(id, type, listener) {
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
  addRegChangedListener(reg, listener) {
    this.addRegListener(reg, EvtType.Changed, listener);
  }

  /**
   *
   * @param reg
   * @param listener please bind context
   */
  addRegErroredListener(reg, listener) {
    this.addRegListener(reg, EvtType.Errored, listener);
  }

  /**
   *
   * @param reg
   * @param type
   * @param listener please bind context
   */
  addRegListener(reg, type, listener) {
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

  fireChangedEvent(id, old, current) {
    this.fireEvent({model: this, id: id, old: old, current: current, type: EvtType.Changed});
  }

  fireErroredEvent(id, old, current) {
    this.fireEvent({model: this, id: id, old: old, current: current, type: EvtType.Errored});
  }

  fireEvent(evt) {
    var matchedListeners = [];
    var idListeners = this.idListeners[evt.type] ? this.idListeners[evt.type] : {};
    matchedListeners.push.apply(matchedListeners, idListeners[evt.id] ? idListeners[evt.id] : []);
    var regListeners = this.regListeners[evt.type] ? this.regListeners[evt.type] : {};
    Object.keys(regListeners).forEach(reg => {
      matchedListeners.push.apply(matchedListeners, evt.id.match(reg) ? listeners[reg] : []);
    });

    matchedListeners.forEach(listener => {
      listener(evt);
    });
    return this;
  }

  rmvIdChangedListener(id, listener) {
    this.rmvIdListener(id, EvtType.Changed, listener);
  }

  rmvIdErroredListener(id, listener) {
    this.rmvIdListener(id, EvtType.Errored, listener);
  }

  rmvIdListener(id, type, listener) {
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

  rmvRegChangedListener(reg, listener) {
    this.rmvRegListener(reg, EvtType.Changed, listener);
  }

  rmvRegErroredListener(reg, listener) {
    this.rmvRegListener(reg, EvtType.Errored, listener);
  }

  rmvRegListener(reg, type, listener) {
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

  skVal(id, value) {
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

  getValidator() {
    return this.validator;
  }
}
