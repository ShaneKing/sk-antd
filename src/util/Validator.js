import $ from 'jquery';
import SK from 'sk-js';
import {I18N} from 'sk-l10n';

export default class Validator {
  static RULES = {
    required: (model, value, settings) => {
      if (settings === false) {
        // close the required check
        return true;
      }
      if (SK.s4s(value) == SK.EMPTY) {
        return I18N.get('${field}_is_required').skFmt(settings);
      } else {
        return true;
      }
    }
  };

  /**
   *
   * @param configs
   * {
   *   "id1": {
   *     "deps": "option, can be string[reg], string array or object",
   *     "rule": "..."
   *   },
   *   "id2": {
   *     "deps": "option, can be string[reg], string array or object",
   *     "required": "..."
   *   }
   * }
   * @param rules
   */
  constructor(configs = {}, rules = {}) {
    if (Array.isArray(configs)) {
      this.configs = {};
      $.extend.apply($, [true, this.configs].concat(configs));
    } else {
      this.configs = configs;
    }

    if (arguments.length > 1) {
      this.rules = $.extend(true, Validator.RULES, rules);
    } else {
      this.rules = Validator.RULES;
    }
  }

  getConfigs() {
    return this.configs;
  }

  getRules() {
    return this.rules;
  }
}
