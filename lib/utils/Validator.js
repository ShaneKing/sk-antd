'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _skJs = require('sk-js');

var _skJs2 = _interopRequireDefault(_skJs);

var _skL10n = require('sk-l10n');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Validator = function () {

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
  function Validator() {
    var configs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var rules = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Validator);

    if (Array.isArray(configs)) {
      this.configs = {};
      _jquery2.default.extend.apply(_jquery2.default, [true, this.configs].concat(configs));
    } else {
      this.configs = configs;
    }

    if (arguments.length > 1) {
      this.rules = _jquery2.default.extend(true, Validator.RULES, rules);
    } else {
      this.rules = Validator.RULES;
    }
  }

  _createClass(Validator, [{
    key: 'getConfigs',
    value: function getConfigs() {
      return this.configs;
    }
  }, {
    key: 'getRules',
    value: function getRules() {
      return this.rules;
    }
  }]);

  return Validator;
}();

Validator.RULES = {
  required: function required(model, value, settings) {
    if (settings === false) {
      // close the required check
      return true;
    }
    if (_skJs2.default.s4s(value) == '') {
      return _skL10n.I18N.get('${field}_is_required').skFmt(settings);
    } else {
      return true;
    }
  }
};
exports.default = Validator;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL1ZhbGlkYXRvci5qcyJdLCJuYW1lcyI6WyJWYWxpZGF0b3IiLCJjb25maWdzIiwicnVsZXMiLCJBcnJheSIsImlzQXJyYXkiLCJleHRlbmQiLCJhcHBseSIsImNvbmNhdCIsImFyZ3VtZW50cyIsImxlbmd0aCIsIlJVTEVTIiwicmVxdWlyZWQiLCJtb2RlbCIsInZhbHVlIiwic2V0dGluZ3MiLCJzNHMiLCJnZXQiLCJza0ZtdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUVxQkEsUzs7QUFlbkI7Ozs7Ozs7Ozs7Ozs7OztBQWVBLHVCQUFzQztBQUFBLFFBQTFCQyxPQUEwQix1RUFBaEIsRUFBZ0I7QUFBQSxRQUFaQyxLQUFZLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ3BDLFFBQUlDLE1BQU1DLE9BQU4sQ0FBY0gsT0FBZCxDQUFKLEVBQTRCO0FBQzFCLFdBQUtBLE9BQUwsR0FBZSxFQUFmO0FBQ0EsdUJBQUVJLE1BQUYsQ0FBU0MsS0FBVCxtQkFBa0IsQ0FBQyxJQUFELEVBQU8sS0FBS0wsT0FBWixFQUFxQk0sTUFBckIsQ0FBNEJOLE9BQTVCLENBQWxCO0FBQ0QsS0FIRCxNQUdPO0FBQ0wsV0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0Q7O0FBRUQsUUFBSU8sVUFBVUMsTUFBVixHQUFtQixDQUF2QixFQUEwQjtBQUN4QixXQUFLUCxLQUFMLEdBQWEsaUJBQUVHLE1BQUYsQ0FBUyxJQUFULEVBQWVMLFVBQVVVLEtBQXpCLEVBQWdDUixLQUFoQyxDQUFiO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsV0FBS0EsS0FBTCxHQUFhRixVQUFVVSxLQUF2QjtBQUNEO0FBQ0Y7Ozs7aUNBRVk7QUFDWCxhQUFPLEtBQUtULE9BQVo7QUFDRDs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQyxLQUFaO0FBQ0Q7Ozs7OztBQW5Ea0JGLFMsQ0FDWlUsSyxHQUFRO0FBQ2JDLFlBQVUsa0JBQUNDLEtBQUQsRUFBUUMsS0FBUixFQUFlQyxRQUFmLEVBQTRCO0FBQ3BDLFFBQUlBLGFBQWEsS0FBakIsRUFBd0I7QUFDdEI7QUFDQSxhQUFPLElBQVA7QUFDRDtBQUNELFFBQUksZUFBR0MsR0FBSCxDQUFPRixLQUFQLEtBQWlCLEVBQXJCLEVBQXlCO0FBQ3ZCLGFBQU8sYUFBS0csR0FBTCxDQUFTLHNCQUFULEVBQWlDQyxLQUFqQyxDQUF1Q0gsUUFBdkMsQ0FBUDtBQUNELEtBRkQsTUFFTztBQUNMLGFBQU8sSUFBUDtBQUNEO0FBQ0Y7QUFYWSxDO2tCQURJZCxTIiwiZmlsZSI6InV0aWxzL1ZhbGlkYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgU0sgZnJvbSAnc2stanMnO1xuaW1wb3J0IHtJMThOfSBmcm9tICdzay1sMTBuJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFsaWRhdG9yIHtcbiAgc3RhdGljIFJVTEVTID0ge1xuICAgIHJlcXVpcmVkOiAobW9kZWwsIHZhbHVlLCBzZXR0aW5ncykgPT4ge1xuICAgICAgaWYgKHNldHRpbmdzID09PSBmYWxzZSkge1xuICAgICAgICAvLyBjbG9zZSB0aGUgcmVxdWlyZWQgY2hlY2tcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoU0suczRzKHZhbHVlKSA9PSAnJykge1xuICAgICAgICByZXR1cm4gSTE4Ti5nZXQoJyR7ZmllbGR9X2lzX3JlcXVpcmVkJykuc2tGbXQoc2V0dGluZ3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gY29uZmlnc1xuICAgKiB7XG4gICAqICAgXCJpZDFcIjoge1xuICAgKiAgICAgXCJkZXBzXCI6IFwib3B0aW9uLCBjYW4gYmUgc3RyaW5nW3JlZ10sIHN0cmluZyBhcnJheSBvciBvYmplY3RcIixcbiAgICogICAgIFwicnVsZVwiOiBcIi4uLlwiXG4gICAqICAgfSxcbiAgICogICBcImlkMlwiOiB7XG4gICAqICAgICBcImRlcHNcIjogXCJvcHRpb24sIGNhbiBiZSBzdHJpbmdbcmVnXSwgc3RyaW5nIGFycmF5IG9yIG9iamVjdFwiLFxuICAgKiAgICAgXCJyZXF1aXJlZFwiOiBcIi4uLlwiXG4gICAqICAgfVxuICAgKiB9XG4gICAqIEBwYXJhbSBydWxlc1xuICAgKi9cbiAgY29uc3RydWN0b3IoY29uZmlncyA9IHt9LCBydWxlcyA9IHt9KSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY29uZmlncykpIHtcbiAgICAgIHRoaXMuY29uZmlncyA9IHt9O1xuICAgICAgJC5leHRlbmQuYXBwbHkoJCwgW3RydWUsIHRoaXMuY29uZmlnc10uY29uY2F0KGNvbmZpZ3MpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb25maWdzID0gY29uZmlncztcbiAgICB9XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHRoaXMucnVsZXMgPSAkLmV4dGVuZCh0cnVlLCBWYWxpZGF0b3IuUlVMRVMsIHJ1bGVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ydWxlcyA9IFZhbGlkYXRvci5SVUxFUztcbiAgICB9XG4gIH1cblxuICBnZXRDb25maWdzKCkge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZ3M7XG4gIH1cblxuICBnZXRSdWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcztcbiAgfVxufVxuIl19