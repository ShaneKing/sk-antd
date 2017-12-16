'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _skJs = require('sk-js');

var _skL10n = require('sk-l10n');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Validator = function () {

  /**
   *
   * @param modelIds
   * {
   *   "id1": {
   *     "deps": "dependencies: option, can be string[reg], string array or object",
   *     "rule": "..."
   *   },
   *   "id2": {
   *     "deps": "dependencies: option, can be string[reg], string array or object",
   *     "rule21": {
   *       "deps": "dependencies: option, can be string[reg], string array or object"
   *     }
   *   },
   *   "id3": {
   *     "deps": "dependencies: option, can be string[reg], string array or object",
   *     "func": "..."
   *   },
   *   "id3": {
   *     "deps": "dependencies: option, can be string[reg], string array or object",
   *     "required": "..."
   *   }
   * }
   * @param rules
   */
  function Validator() {
    var modelIds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var rules = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Validator);

    this.modelIds = modelIds;
    this.rules = _jquery2.default.extend(true, {}, Validator.RULES, rules);
  } //unimplemented, can be use some modelId as state


  _createClass(Validator, [{
    key: 'getModelIds',
    value: function getModelIds() {
      return this.modelIds;
    }
  }, {
    key: 'getRules',
    value: function getRules() {
      return this.rules;
    }
  }]);

  return Validator;
}();

Validator.PROP_DEPS = 'deps';
Validator.PROP_FUNC = 'func';
Validator.PROP_SCENARIO = 'scenario';
Validator.RULES = {
  required: function required(model, value, settings) {
    if (settings === false) {
      // disable the required check
      return true;
    }
    if (_skJs.SK.s4s(value) === _skJs.SK.EMPTY) {
      return _skL10n.I18N.get('${field}_is_required').skFmt(settings);
    } else {
      return true;
    }
  }
};
exports.default = Validator;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwvVmFsaWRhdG9yLmpzIl0sIm5hbWVzIjpbIlZhbGlkYXRvciIsIm1vZGVsSWRzIiwicnVsZXMiLCJleHRlbmQiLCJSVUxFUyIsIlBST1BfREVQUyIsIlBST1BfRlVOQyIsIlBST1BfU0NFTkFSSU8iLCJyZXF1aXJlZCIsIm1vZGVsIiwidmFsdWUiLCJzZXR0aW5ncyIsInM0cyIsIkVNUFRZIiwiZ2V0Iiwic2tGbXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7Ozs7O0lBRXFCQSxTOztBQWtCbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkEsdUJBQXVDO0FBQUEsUUFBM0JDLFFBQTJCLHVFQUFoQixFQUFnQjtBQUFBLFFBQVpDLEtBQVksdUVBQUosRUFBSTs7QUFBQTs7QUFDckMsU0FBS0QsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLQyxLQUFMLEdBQWEsaUJBQUVDLE1BQUYsQ0FBUyxJQUFULEVBQWUsRUFBZixFQUFtQkgsVUFBVUksS0FBN0IsRUFBb0NGLEtBQXBDLENBQWI7QUFDRCxHLENBM0NpQzs7Ozs7a0NBNkNwQjtBQUNaLGFBQU8sS0FBS0QsUUFBWjtBQUNEOzs7K0JBRVU7QUFDVCxhQUFPLEtBQUtDLEtBQVo7QUFDRDs7Ozs7O0FBdERrQkYsUyxDQUNaSyxTLEdBQVksTTtBQURBTCxTLENBRVpNLFMsR0FBWSxNO0FBRkFOLFMsQ0FHWk8sYSxHQUFnQixVO0FBSEpQLFMsQ0FJWkksSyxHQUFRO0FBQ2JJLFlBQVUsa0JBQUNDLEtBQUQsRUFBUUMsS0FBUixFQUFlQyxRQUFmLEVBQTRCO0FBQ3BDLFFBQUlBLGFBQWEsS0FBakIsRUFBd0I7QUFDdEI7QUFDQSxhQUFPLElBQVA7QUFDRDtBQUNELFFBQUksU0FBR0MsR0FBSCxDQUFPRixLQUFQLE1BQWtCLFNBQUdHLEtBQXpCLEVBQWdDO0FBQzlCLGFBQU8sYUFBS0MsR0FBTCxDQUFTLHNCQUFULEVBQWlDQyxLQUFqQyxDQUF1Q0osUUFBdkMsQ0FBUDtBQUNELEtBRkQsTUFFTztBQUNMLGFBQU8sSUFBUDtBQUNEO0FBQ0Y7QUFYWSxDO2tCQUpJWCxTIiwiZmlsZSI6InV0aWwvVmFsaWRhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7U0t9IGZyb20gJ3NrLWpzJztcbmltcG9ydCB7STE4Tn0gZnJvbSAnc2stbDEwbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZhbGlkYXRvciB7XG4gIHN0YXRpYyBQUk9QX0RFUFMgPSAnZGVwcyc7XG4gIHN0YXRpYyBQUk9QX0ZVTkMgPSAnZnVuYyc7XG4gIHN0YXRpYyBQUk9QX1NDRU5BUklPID0gJ3NjZW5hcmlvJzsvL3VuaW1wbGVtZW50ZWQsIGNhbiBiZSB1c2Ugc29tZSBtb2RlbElkIGFzIHN0YXRlXG4gIHN0YXRpYyBSVUxFUyA9IHtcbiAgICByZXF1aXJlZDogKG1vZGVsLCB2YWx1ZSwgc2V0dGluZ3MpID0+IHtcbiAgICAgIGlmIChzZXR0aW5ncyA9PT0gZmFsc2UpIHtcbiAgICAgICAgLy8gZGlzYWJsZSB0aGUgcmVxdWlyZWQgY2hlY2tcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoU0suczRzKHZhbHVlKSA9PT0gU0suRU1QVFkpIHtcbiAgICAgICAgcmV0dXJuIEkxOE4uZ2V0KCcke2ZpZWxkfV9pc19yZXF1aXJlZCcpLnNrRm10KHNldHRpbmdzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIG1vZGVsSWRzXG4gICAqIHtcbiAgICogICBcImlkMVwiOiB7XG4gICAqICAgICBcImRlcHNcIjogXCJkZXBlbmRlbmNpZXM6IG9wdGlvbiwgY2FuIGJlIHN0cmluZ1tyZWddLCBzdHJpbmcgYXJyYXkgb3Igb2JqZWN0XCIsXG4gICAqICAgICBcInJ1bGVcIjogXCIuLi5cIlxuICAgKiAgIH0sXG4gICAqICAgXCJpZDJcIjoge1xuICAgKiAgICAgXCJkZXBzXCI6IFwiZGVwZW5kZW5jaWVzOiBvcHRpb24sIGNhbiBiZSBzdHJpbmdbcmVnXSwgc3RyaW5nIGFycmF5IG9yIG9iamVjdFwiLFxuICAgKiAgICAgXCJydWxlMjFcIjoge1xuICAgKiAgICAgICBcImRlcHNcIjogXCJkZXBlbmRlbmNpZXM6IG9wdGlvbiwgY2FuIGJlIHN0cmluZ1tyZWddLCBzdHJpbmcgYXJyYXkgb3Igb2JqZWN0XCJcbiAgICogICAgIH1cbiAgICogICB9LFxuICAgKiAgIFwiaWQzXCI6IHtcbiAgICogICAgIFwiZGVwc1wiOiBcImRlcGVuZGVuY2llczogb3B0aW9uLCBjYW4gYmUgc3RyaW5nW3JlZ10sIHN0cmluZyBhcnJheSBvciBvYmplY3RcIixcbiAgICogICAgIFwiZnVuY1wiOiBcIi4uLlwiXG4gICAqICAgfSxcbiAgICogICBcImlkM1wiOiB7XG4gICAqICAgICBcImRlcHNcIjogXCJkZXBlbmRlbmNpZXM6IG9wdGlvbiwgY2FuIGJlIHN0cmluZ1tyZWddLCBzdHJpbmcgYXJyYXkgb3Igb2JqZWN0XCIsXG4gICAqICAgICBcInJlcXVpcmVkXCI6IFwiLi4uXCJcbiAgICogICB9XG4gICAqIH1cbiAgICogQHBhcmFtIHJ1bGVzXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihtb2RlbElkcyA9IHt9LCBydWxlcyA9IHt9KSB7XG4gICAgdGhpcy5tb2RlbElkcyA9IG1vZGVsSWRzO1xuICAgIHRoaXMucnVsZXMgPSAkLmV4dGVuZCh0cnVlLCB7fSwgVmFsaWRhdG9yLlJVTEVTLCBydWxlcyk7XG4gIH1cblxuICBnZXRNb2RlbElkcygpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbElkcztcbiAgfVxuXG4gIGdldFJ1bGVzKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVzO1xuICB9XG59XG4iXX0=