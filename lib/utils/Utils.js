'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouter = require('react-router');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//0 ref
var Utils = function () {
  function Utils() {
    _classCallCheck(this, Utils);
  }

  _createClass(Utils, null, [{
    key: 'createChainedFunction',


    /**
     * Safe chained function
     *
     * @param {function} functions to chain
     * @returns {function|null}
     */
    value: function createChainedFunction() {
      for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
        funcs[_key] = arguments[_key];
      }

      return funcs.filter(function (f) {
        return f != null;
      }).reduce(function (acc, f) {
        if (!_.isFunction(f)) {
          throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
        }

        if (acc === null) {
          return f;
        }

        return function chainedFunction() {
          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          acc.apply(this, args);
          f.apply(this, args);
        };
      }, null);
    }
  }, {
    key: 'forward',
    value: function forward(url) {
      _reactRouter.browserHistory.push(url);
    }
  }, {
    key: 'isTrivialHref',
    value: function isTrivialHref(href) {
      return !href || href.trim() === '#';
    }
  }]);

  return Utils;
}();

exports.default = Utils;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL1V0aWxzLmpzIl0sIm5hbWVzIjpbIlV0aWxzIiwiZnVuY3MiLCJmaWx0ZXIiLCJmIiwicmVkdWNlIiwiYWNjIiwiXyIsImlzRnVuY3Rpb24iLCJFcnJvciIsImNoYWluZWRGdW5jdGlvbiIsImFyZ3MiLCJhcHBseSIsInVybCIsInB1c2giLCJocmVmIiwidHJpbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUVBO0lBQ3FCQSxLOzs7Ozs7Ozs7QUFFbkI7Ozs7Ozs0Q0FNdUM7QUFBQSx3Q0FBUEMsS0FBTztBQUFQQSxhQUFPO0FBQUE7O0FBQ3JDLGFBQU9BLE1BQ0pDLE1BREksQ0FDRztBQUFBLGVBQUtDLEtBQUssSUFBVjtBQUFBLE9BREgsRUFFSkMsTUFGSSxDQUVHLFVBQUNDLEdBQUQsRUFBTUYsQ0FBTixFQUFZO0FBQ2xCLFlBQUksQ0FBQ0csRUFBRUMsVUFBRixDQUFhSixDQUFiLENBQUwsRUFBc0I7QUFDcEIsZ0JBQU0sSUFBSUssS0FBSixDQUFVLHlFQUFWLENBQU47QUFDRDs7QUFFRCxZQUFJSCxRQUFRLElBQVosRUFBa0I7QUFDaEIsaUJBQU9GLENBQVA7QUFDRDs7QUFFRCxlQUFPLFNBQVNNLGVBQVQsR0FBa0M7QUFBQSw2Q0FBTkMsSUFBTTtBQUFOQSxnQkFBTTtBQUFBOztBQUN2Q0wsY0FBSU0sS0FBSixDQUFVLElBQVYsRUFBZ0JELElBQWhCO0FBQ0FQLFlBQUVRLEtBQUYsQ0FBUSxJQUFSLEVBQWNELElBQWQ7QUFDRCxTQUhEO0FBSUQsT0FmSSxFQWVGLElBZkUsQ0FBUDtBQWdCRDs7OzRCQUVjRSxHLEVBQUs7QUFDbEIsa0NBQWVDLElBQWYsQ0FBb0JELEdBQXBCO0FBQ0Q7OztrQ0FFb0JFLEksRUFBTTtBQUN6QixhQUFPLENBQUNBLElBQUQsSUFBU0EsS0FBS0MsSUFBTCxPQUFnQixHQUFoQztBQUNEOzs7Ozs7a0JBakNrQmYsSyIsImZpbGUiOiJ1dGlscy9VdGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YnJvd3Nlckhpc3Rvcnl9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbi8vMCByZWZcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWxzIHtcblxuICAvKipcbiAgICogU2FmZSBjaGFpbmVkIGZ1bmN0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZ1bmN0aW9ucyB0byBjaGFpblxuICAgKiBAcmV0dXJucyB7ZnVuY3Rpb258bnVsbH1cbiAgICovXG4gIHN0YXRpYyBjcmVhdGVDaGFpbmVkRnVuY3Rpb24oLi4uZnVuY3MpIHtcbiAgICByZXR1cm4gZnVuY3NcbiAgICAgIC5maWx0ZXIoZiA9PiBmICE9IG51bGwpXG4gICAgICAucmVkdWNlKChhY2MsIGYpID0+IHtcbiAgICAgICAgaWYgKCFfLmlzRnVuY3Rpb24oZikpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgQXJndW1lbnQgVHlwZSwgbXVzdCBvbmx5IHByb3ZpZGUgZnVuY3Rpb25zLCB1bmRlZmluZWQsIG9yIG51bGwuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWNjID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gY2hhaW5lZEZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICAgICAgICBhY2MuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgZi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgfTtcbiAgICAgIH0sIG51bGwpO1xuICB9XG5cbiAgc3RhdGljIGZvcndhcmQodXJsKSB7XG4gICAgYnJvd3Nlckhpc3RvcnkucHVzaCh1cmwpO1xuICB9XG5cbiAgc3RhdGljIGlzVHJpdmlhbEhyZWYoaHJlZikge1xuICAgIHJldHVybiAhaHJlZiB8fCBocmVmLnRyaW0oKSA9PT0gJyMnO1xuICB9XG5cblxufVxuIl19