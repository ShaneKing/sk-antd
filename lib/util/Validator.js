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
    if (_skJs2.default.s4s(value) == _skJs2.default.EMPTY) {
      return _skL10n.I18N.get('${field}_is_required').skFmt(settings);
    } else {
      return true;
    }
  }
};
exports.default = Validator;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwvVmFsaWRhdG9yLmpzIl0sIm5hbWVzIjpbIlZhbGlkYXRvciIsImNvbmZpZ3MiLCJydWxlcyIsIkFycmF5IiwiaXNBcnJheSIsImV4dGVuZCIsImFwcGx5IiwiY29uY2F0IiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiUlVMRVMiLCJyZXF1aXJlZCIsIm1vZGVsIiwidmFsdWUiLCJzZXR0aW5ncyIsInM0cyIsIkVNUFRZIiwiZ2V0Iiwic2tGbXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7SUFFcUJBLFM7O0FBZW5COzs7Ozs7Ozs7Ozs7Ozs7QUFlQSx1QkFBc0M7QUFBQSxRQUExQkMsT0FBMEIsdUVBQWhCLEVBQWdCO0FBQUEsUUFBWkMsS0FBWSx1RUFBSixFQUFJOztBQUFBOztBQUNwQyxRQUFJQyxNQUFNQyxPQUFOLENBQWNILE9BQWQsQ0FBSixFQUE0QjtBQUMxQixXQUFLQSxPQUFMLEdBQWUsRUFBZjtBQUNBLHVCQUFFSSxNQUFGLENBQVNDLEtBQVQsbUJBQWtCLENBQUMsSUFBRCxFQUFPLEtBQUtMLE9BQVosRUFBcUJNLE1BQXJCLENBQTRCTixPQUE1QixDQUFsQjtBQUNELEtBSEQsTUFHTztBQUNMLFdBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNEOztBQUVELFFBQUlPLFVBQVVDLE1BQVYsR0FBbUIsQ0FBdkIsRUFBMEI7QUFDeEIsV0FBS1AsS0FBTCxHQUFhLGlCQUFFRyxNQUFGLENBQVMsSUFBVCxFQUFlTCxVQUFVVSxLQUF6QixFQUFnQ1IsS0FBaEMsQ0FBYjtBQUNELEtBRkQsTUFFTztBQUNMLFdBQUtBLEtBQUwsR0FBYUYsVUFBVVUsS0FBdkI7QUFDRDtBQUNGOzs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLVCxPQUFaO0FBQ0Q7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0MsS0FBWjtBQUNEOzs7Ozs7QUFuRGtCRixTLENBQ1pVLEssR0FBUTtBQUNiQyxZQUFVLGtCQUFDQyxLQUFELEVBQVFDLEtBQVIsRUFBZUMsUUFBZixFQUE0QjtBQUNwQyxRQUFJQSxhQUFhLEtBQWpCLEVBQXdCO0FBQ3RCO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7QUFDRCxRQUFJLGVBQUdDLEdBQUgsQ0FBT0YsS0FBUCxLQUFpQixlQUFHRyxLQUF4QixFQUErQjtBQUM3QixhQUFPLGFBQUtDLEdBQUwsQ0FBUyxzQkFBVCxFQUFpQ0MsS0FBakMsQ0FBdUNKLFFBQXZDLENBQVA7QUFDRCxLQUZELE1BRU87QUFDTCxhQUFPLElBQVA7QUFDRDtBQUNGO0FBWFksQztrQkFESWQsUyIsImZpbGUiOiJ1dGlsL1ZhbGlkYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgU0sgZnJvbSAnc2stanMnO1xuaW1wb3J0IHtJMThOfSBmcm9tICdzay1sMTBuJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFsaWRhdG9yIHtcbiAgc3RhdGljIFJVTEVTID0ge1xuICAgIHJlcXVpcmVkOiAobW9kZWwsIHZhbHVlLCBzZXR0aW5ncykgPT4ge1xuICAgICAgaWYgKHNldHRpbmdzID09PSBmYWxzZSkge1xuICAgICAgICAvLyBjbG9zZSB0aGUgcmVxdWlyZWQgY2hlY2tcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoU0suczRzKHZhbHVlKSA9PSBTSy5FTVBUWSkge1xuICAgICAgICByZXR1cm4gSTE4Ti5nZXQoJyR7ZmllbGR9X2lzX3JlcXVpcmVkJykuc2tGbXQoc2V0dGluZ3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gY29uZmlnc1xuICAgKiB7XG4gICAqICAgXCJpZDFcIjoge1xuICAgKiAgICAgXCJkZXBzXCI6IFwib3B0aW9uLCBjYW4gYmUgc3RyaW5nW3JlZ10sIHN0cmluZyBhcnJheSBvciBvYmplY3RcIixcbiAgICogICAgIFwicnVsZVwiOiBcIi4uLlwiXG4gICAqICAgfSxcbiAgICogICBcImlkMlwiOiB7XG4gICAqICAgICBcImRlcHNcIjogXCJvcHRpb24sIGNhbiBiZSBzdHJpbmdbcmVnXSwgc3RyaW5nIGFycmF5IG9yIG9iamVjdFwiLFxuICAgKiAgICAgXCJyZXF1aXJlZFwiOiBcIi4uLlwiXG4gICAqICAgfVxuICAgKiB9XG4gICAqIEBwYXJhbSBydWxlc1xuICAgKi9cbiAgY29uc3RydWN0b3IoY29uZmlncyA9IHt9LCBydWxlcyA9IHt9KSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY29uZmlncykpIHtcbiAgICAgIHRoaXMuY29uZmlncyA9IHt9O1xuICAgICAgJC5leHRlbmQuYXBwbHkoJCwgW3RydWUsIHRoaXMuY29uZmlnc10uY29uY2F0KGNvbmZpZ3MpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb25maWdzID0gY29uZmlncztcbiAgICB9XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHRoaXMucnVsZXMgPSAkLmV4dGVuZCh0cnVlLCBWYWxpZGF0b3IuUlVMRVMsIHJ1bGVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ydWxlcyA9IFZhbGlkYXRvci5SVUxFUztcbiAgICB9XG4gIH1cblxuICBnZXRDb25maWdzKCkge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZ3M7XG4gIH1cblxuICBnZXRSdWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcztcbiAgfVxufVxuIl19