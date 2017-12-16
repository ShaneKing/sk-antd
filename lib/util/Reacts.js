'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createBrowserHistory = require('history/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Reacts = function () {
  function Reacts() {
    _classCallCheck(this, Reacts);
  }

  _createClass(Reacts, null, [{
    key: 'count',


    /**
     * Count the number of "valid components" in the Children container.
     *
     * @param {?*} children Children tree container.
     * @returns {number}
     */
    value: function count(children) {
      var result = 0;

      _react2.default.Children.forEach(children, function (child) {
        if (!_react2.default.isValidElement(child)) {
          return;
        }

        ++result;
      });

      return result;
    }

    /**
     * Safe chained function
     *
     * @param {function} funcs to chain
     * @returns {function|null}
     */

  }, {
    key: 'createChainedFunction',
    value: function createChainedFunction() {
      for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
        funcs[_key] = arguments[_key];
      }

      return funcs.filter(function (f) {
        return f != null;
      }).reduce(function (acc, f) {
        if (!_lodash2.default.isFunction(f)) {
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
    key: 'every',
    value: function every(children, func, context) {
      var index = 0;
      var result = true;

      _react2.default.Children.forEach(children, function (child) {
        if (!result) {
          return;
        }
        if (!_react2.default.isValidElement(child)) {
          return;
        }

        if (!func.call(context, child, index++)) {
          result = false;
        }
      });

      return result;
    }

    /**
     * Finds children that are typically specified as `props.children`,
     * but only iterates over children that are "valid components".
     *
     * The provided forEachFunc(child, index) will be called for each
     * leaf child with the index reflecting the position relative to "valid components".
     *
     * @param {?*} children Children tree container.
     * @param {function(*, int)} func.
     * @param {*} context Context for func.
     * @returns {array} of children that meet the func return statement
     */

  }, {
    key: 'filter',
    value: function filter(children, func, context) {
      var index = 0;
      var result = [];

      _react2.default.Children.forEach(children, function (child) {
        if (!_react2.default.isValidElement(child)) {
          return;
        }

        if (func.call(context, child, index++)) {
          result.push(child);
        }
      });

      return result;
    }
  }, {
    key: 'find',
    value: function find(children, func, context) {
      var index = 0;
      var result = undefined;

      _react2.default.Children.forEach(children, function (child) {
        if (result) {
          return;
        }
        if (!_react2.default.isValidElement(child)) {
          return;
        }

        if (func.call(context, child, index++)) {
          result = child;
        }
      });

      return result;
    }

    /**
     * Iterates through children that are "valid components".
     *
     * The provided forEachFunc(child, index) will be called for each
     * leaf child with the index reflecting the position relative to "valid components".
     *
     * @param {?*} children Children tree container.
     * @param {function(*, int)} func.
     * @param {*} context Context for context.
     */

  }, {
    key: 'forEach',
    value: function forEach(children, func, context) {
      var index = 0;

      _react2.default.Children.forEach(children, function (child) {
        if (!_react2.default.isValidElement(child)) {
          return;
        }

        func.call(context, child, index++);
      });
    }

    /**
     * forward
     *
     * @param url like /dashboard
     */

  }, {
    key: 'forward',
    value: function forward(url) {
      (0, _createBrowserHistory2.default)().push({ pathname: url });
    }

    /**
     * Iterates through children that are typically specified as `props.children`,
     * but only maps over children that are "valid components".
     *
     * The mapFunction provided index will be normalised to the components mapped,
     * so an invalid component would not increase the index.
     *
     * @param {?*} children Children tree container.
     * @param {function(*, int)} func.
     * @param {*} context Context for func.
     * @return {object} Object containing the ordered map of results.
     */

  }, {
    key: 'map',
    value: function map(children, func, context) {
      var index = 0;

      return _react2.default.Children.map(children, function (child) {
        if (!_react2.default.isValidElement(child)) {
          return child;
        }

        return func.call(context, child, index++);
      });
    }
  }, {
    key: 'some',
    value: function some(children, func, context) {
      var index = 0;
      var result = false;

      _react2.default.Children.forEach(children, function (child) {
        if (result) {
          return;
        }
        if (!_react2.default.isValidElement(child)) {
          return;
        }

        if (func.call(context, child, index++)) {
          result = true;
        }
      });

      return result;
    }
  }, {
    key: 'toArray',
    value: function toArray(children) {
      var result = [];

      _react2.default.Children.forEach(children, function (child) {
        if (!_react2.default.isValidElement(child)) {
          return;
        }

        result.push(child);
      });

      return result;
    }
  }]);

  return Reacts;
}();

exports.default = Reacts;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwvUmVhY3RzLmpzIl0sIm5hbWVzIjpbIlJlYWN0cyIsImNoaWxkcmVuIiwicmVzdWx0IiwiQ2hpbGRyZW4iLCJmb3JFYWNoIiwiaXNWYWxpZEVsZW1lbnQiLCJjaGlsZCIsImZ1bmNzIiwiZmlsdGVyIiwiZiIsInJlZHVjZSIsImFjYyIsImlzRnVuY3Rpb24iLCJFcnJvciIsImNoYWluZWRGdW5jdGlvbiIsImFyZ3MiLCJhcHBseSIsImZ1bmMiLCJjb250ZXh0IiwiaW5kZXgiLCJjYWxsIiwicHVzaCIsInVuZGVmaW5lZCIsInVybCIsInBhdGhuYW1lIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7SUFFcUJBLE07Ozs7Ozs7OztBQUVuQjs7Ozs7OzBCQU1hQyxRLEVBQVU7QUFDckIsVUFBSUMsU0FBUyxDQUFiOztBQUVBLHNCQUFNQyxRQUFOLENBQWVDLE9BQWYsQ0FBdUJILFFBQXZCLEVBQWlDLGlCQUFTO0FBQ3hDLFlBQUksQ0FBQyxnQkFBTUksY0FBTixDQUFxQkMsS0FBckIsQ0FBTCxFQUFrQztBQUNoQztBQUNEOztBQUVELFVBQUVKLE1BQUY7QUFDRCxPQU5EOztBQVFBLGFBQU9BLE1BQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7OzRDQU11QztBQUFBLHdDQUFQSyxLQUFPO0FBQVBBLGFBQU87QUFBQTs7QUFDckMsYUFBT0EsTUFDSkMsTUFESSxDQUNHO0FBQUEsZUFBS0MsS0FBSyxJQUFWO0FBQUEsT0FESCxFQUVKQyxNQUZJLENBRUcsVUFBQ0MsR0FBRCxFQUFNRixDQUFOLEVBQVk7QUFDbEIsWUFBSSxDQUFDLGlCQUFFRyxVQUFGLENBQWFILENBQWIsQ0FBTCxFQUFzQjtBQUNwQixnQkFBTSxJQUFJSSxLQUFKLENBQVUseUVBQVYsQ0FBTjtBQUNEOztBQUVELFlBQUlGLFFBQVEsSUFBWixFQUFrQjtBQUNoQixpQkFBT0YsQ0FBUDtBQUNEOztBQUVELGVBQU8sU0FBU0ssZUFBVCxHQUFrQztBQUFBLDZDQUFOQyxJQUFNO0FBQU5BLGdCQUFNO0FBQUE7O0FBQ3ZDSixjQUFJSyxLQUFKLENBQVUsSUFBVixFQUFnQkQsSUFBaEI7QUFDQU4sWUFBRU8sS0FBRixDQUFRLElBQVIsRUFBY0QsSUFBZDtBQUNELFNBSEQ7QUFJRCxPQWZJLEVBZUYsSUFmRSxDQUFQO0FBZ0JEOzs7MEJBRVlkLFEsRUFBVWdCLEksRUFBTUMsTyxFQUFTO0FBQ3BDLFVBQUlDLFFBQVEsQ0FBWjtBQUNBLFVBQUlqQixTQUFTLElBQWI7O0FBRUEsc0JBQU1DLFFBQU4sQ0FBZUMsT0FBZixDQUF1QkgsUUFBdkIsRUFBaUMsaUJBQVM7QUFDeEMsWUFBSSxDQUFDQyxNQUFMLEVBQWE7QUFDWDtBQUNEO0FBQ0QsWUFBSSxDQUFDLGdCQUFNRyxjQUFOLENBQXFCQyxLQUFyQixDQUFMLEVBQWtDO0FBQ2hDO0FBQ0Q7O0FBRUQsWUFBSSxDQUFDVyxLQUFLRyxJQUFMLENBQVVGLE9BQVYsRUFBbUJaLEtBQW5CLEVBQTBCYSxPQUExQixDQUFMLEVBQXlDO0FBQ3ZDakIsbUJBQVMsS0FBVDtBQUNEO0FBQ0YsT0FYRDs7QUFhQSxhQUFPQSxNQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7OzsyQkFZY0QsUSxFQUFVZ0IsSSxFQUFNQyxPLEVBQVM7QUFDckMsVUFBSUMsUUFBUSxDQUFaO0FBQ0EsVUFBSWpCLFNBQVMsRUFBYjs7QUFFQSxzQkFBTUMsUUFBTixDQUFlQyxPQUFmLENBQXVCSCxRQUF2QixFQUFpQyxpQkFBUztBQUN4QyxZQUFJLENBQUMsZ0JBQU1JLGNBQU4sQ0FBcUJDLEtBQXJCLENBQUwsRUFBa0M7QUFDaEM7QUFDRDs7QUFFRCxZQUFJVyxLQUFLRyxJQUFMLENBQVVGLE9BQVYsRUFBbUJaLEtBQW5CLEVBQTBCYSxPQUExQixDQUFKLEVBQXdDO0FBQ3RDakIsaUJBQU9tQixJQUFQLENBQVlmLEtBQVo7QUFDRDtBQUNGLE9BUkQ7O0FBVUEsYUFBT0osTUFBUDtBQUNEOzs7eUJBRVdELFEsRUFBVWdCLEksRUFBTUMsTyxFQUFTO0FBQ25DLFVBQUlDLFFBQVEsQ0FBWjtBQUNBLFVBQUlqQixTQUFTb0IsU0FBYjs7QUFFQSxzQkFBTW5CLFFBQU4sQ0FBZUMsT0FBZixDQUF1QkgsUUFBdkIsRUFBaUMsaUJBQVM7QUFDeEMsWUFBSUMsTUFBSixFQUFZO0FBQ1Y7QUFDRDtBQUNELFlBQUksQ0FBQyxnQkFBTUcsY0FBTixDQUFxQkMsS0FBckIsQ0FBTCxFQUFrQztBQUNoQztBQUNEOztBQUVELFlBQUlXLEtBQUtHLElBQUwsQ0FBVUYsT0FBVixFQUFtQlosS0FBbkIsRUFBMEJhLE9BQTFCLENBQUosRUFBd0M7QUFDdENqQixtQkFBU0ksS0FBVDtBQUNEO0FBQ0YsT0FYRDs7QUFhQSxhQUFPSixNQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7NEJBVWVELFEsRUFBVWdCLEksRUFBTUMsTyxFQUFTO0FBQ3RDLFVBQUlDLFFBQVEsQ0FBWjs7QUFFQSxzQkFBTWhCLFFBQU4sQ0FBZUMsT0FBZixDQUF1QkgsUUFBdkIsRUFBaUMsaUJBQVM7QUFDeEMsWUFBSSxDQUFDLGdCQUFNSSxjQUFOLENBQXFCQyxLQUFyQixDQUFMLEVBQWtDO0FBQ2hDO0FBQ0Q7O0FBRURXLGFBQUtHLElBQUwsQ0FBVUYsT0FBVixFQUFtQlosS0FBbkIsRUFBMEJhLE9BQTFCO0FBQ0QsT0FORDtBQU9EOztBQUVEOzs7Ozs7Ozs0QkFLZUksRyxFQUFLO0FBQ2xCLDRDQUFnQkYsSUFBaEIsQ0FBcUIsRUFBQ0csVUFBVUQsR0FBWCxFQUFyQjtBQUNEOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7d0JBWVd0QixRLEVBQVVnQixJLEVBQU1DLE8sRUFBUztBQUNsQyxVQUFJQyxRQUFRLENBQVo7O0FBRUEsYUFBTyxnQkFBTWhCLFFBQU4sQ0FBZXNCLEdBQWYsQ0FBbUJ4QixRQUFuQixFQUE2QixpQkFBUztBQUMzQyxZQUFJLENBQUMsZ0JBQU1JLGNBQU4sQ0FBcUJDLEtBQXJCLENBQUwsRUFBa0M7QUFDaEMsaUJBQU9BLEtBQVA7QUFDRDs7QUFFRCxlQUFPVyxLQUFLRyxJQUFMLENBQVVGLE9BQVYsRUFBbUJaLEtBQW5CLEVBQTBCYSxPQUExQixDQUFQO0FBQ0QsT0FOTSxDQUFQO0FBT0Q7Ozt5QkFFV2xCLFEsRUFBVWdCLEksRUFBTUMsTyxFQUFTO0FBQ25DLFVBQUlDLFFBQVEsQ0FBWjtBQUNBLFVBQUlqQixTQUFTLEtBQWI7O0FBRUEsc0JBQU1DLFFBQU4sQ0FBZUMsT0FBZixDQUF1QkgsUUFBdkIsRUFBaUMsaUJBQVM7QUFDeEMsWUFBSUMsTUFBSixFQUFZO0FBQ1Y7QUFDRDtBQUNELFlBQUksQ0FBQyxnQkFBTUcsY0FBTixDQUFxQkMsS0FBckIsQ0FBTCxFQUFrQztBQUNoQztBQUNEOztBQUVELFlBQUlXLEtBQUtHLElBQUwsQ0FBVUYsT0FBVixFQUFtQlosS0FBbkIsRUFBMEJhLE9BQTFCLENBQUosRUFBd0M7QUFDdENqQixtQkFBUyxJQUFUO0FBQ0Q7QUFDRixPQVhEOztBQWFBLGFBQU9BLE1BQVA7QUFDRDs7OzRCQUVjRCxRLEVBQVU7QUFDdkIsVUFBTUMsU0FBUyxFQUFmOztBQUVBLHNCQUFNQyxRQUFOLENBQWVDLE9BQWYsQ0FBdUJILFFBQXZCLEVBQWlDLGlCQUFTO0FBQ3hDLFlBQUksQ0FBQyxnQkFBTUksY0FBTixDQUFxQkMsS0FBckIsQ0FBTCxFQUFrQztBQUNoQztBQUNEOztBQUVESixlQUFPbUIsSUFBUCxDQUFZZixLQUFaO0FBQ0QsT0FORDs7QUFRQSxhQUFPSixNQUFQO0FBQ0Q7Ozs7OztrQkEzTWtCRixNIiwiZmlsZSI6InV0aWwvUmVhY3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3JlYXRlSGlzdG9yeSBmcm9tICdoaXN0b3J5L2NyZWF0ZUJyb3dzZXJIaXN0b3J5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RzIHtcblxuICAvKipcbiAgICogQ291bnQgdGhlIG51bWJlciBvZiBcInZhbGlkIGNvbXBvbmVudHNcIiBpbiB0aGUgQ2hpbGRyZW4gY29udGFpbmVyLlxuICAgKlxuICAgKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAgICogQHJldHVybnMge251bWJlcn1cbiAgICovXG4gIHN0YXRpYyBjb3VudChjaGlsZHJlbikge1xuICAgIGxldCByZXN1bHQgPSAwO1xuXG4gICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgY2hpbGQgPT4ge1xuICAgICAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICArK3Jlc3VsdDtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogU2FmZSBjaGFpbmVkIGZ1bmN0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZ1bmNzIHRvIGNoYWluXG4gICAqIEByZXR1cm5zIHtmdW5jdGlvbnxudWxsfVxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZUNoYWluZWRGdW5jdGlvbiguLi5mdW5jcykge1xuICAgIHJldHVybiBmdW5jc1xuICAgICAgLmZpbHRlcihmID0+IGYgIT0gbnVsbClcbiAgICAgIC5yZWR1Y2UoKGFjYywgZikgPT4ge1xuICAgICAgICBpZiAoIV8uaXNGdW5jdGlvbihmKSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBBcmd1bWVudCBUeXBlLCBtdXN0IG9ubHkgcHJvdmlkZSBmdW5jdGlvbnMsIHVuZGVmaW5lZCwgb3IgbnVsbC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhY2MgPT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBjaGFpbmVkRnVuY3Rpb24oLi4uYXJncykge1xuICAgICAgICAgIGFjYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgICBmLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICB9O1xuICAgICAgfSwgbnVsbCk7XG4gIH1cblxuICBzdGF0aWMgZXZlcnkoY2hpbGRyZW4sIGZ1bmMsIGNvbnRleHQpIHtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGxldCByZXN1bHQgPSB0cnVlO1xuXG4gICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgY2hpbGQgPT4ge1xuICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgaW5kZXgrKykpIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmRzIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCxcbiAgICogYnV0IG9ubHkgaXRlcmF0ZXMgb3ZlciBjaGlsZHJlbiB0aGF0IGFyZSBcInZhbGlkIGNvbXBvbmVudHNcIi5cbiAgICpcbiAgICogVGhlIHByb3ZpZGVkIGZvckVhY2hGdW5jKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAgICogbGVhZiBjaGlsZCB3aXRoIHRoZSBpbmRleCByZWZsZWN0aW5nIHRoZSBwb3NpdGlvbiByZWxhdGl2ZSB0byBcInZhbGlkIGNvbXBvbmVudHNcIi5cbiAgICpcbiAgICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZnVuYy5cbiAgICogQHBhcmFtIHsqfSBjb250ZXh0IENvbnRleHQgZm9yIGZ1bmMuXG4gICAqIEByZXR1cm5zIHthcnJheX0gb2YgY2hpbGRyZW4gdGhhdCBtZWV0IHRoZSBmdW5jIHJldHVybiBzdGF0ZW1lbnRcbiAgICovXG4gIHN0YXRpYyBmaWx0ZXIoY2hpbGRyZW4sIGZ1bmMsIGNvbnRleHQpIHtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGxldCByZXN1bHQgPSBbXTtcblxuICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGNoaWxkID0+IHtcbiAgICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgaW5kZXgrKykpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goY2hpbGQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHN0YXRpYyBmaW5kKGNoaWxkcmVuLCBmdW5jLCBjb250ZXh0KSB7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBsZXQgcmVzdWx0ID0gdW5kZWZpbmVkO1xuXG4gICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgY2hpbGQgPT4ge1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGluZGV4KyspKSB7XG4gICAgICAgIHJlc3VsdCA9IGNoaWxkO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJdGVyYXRlcyB0aHJvdWdoIGNoaWxkcmVuIHRoYXQgYXJlIFwidmFsaWQgY29tcG9uZW50c1wiLlxuICAgKlxuICAgKiBUaGUgcHJvdmlkZWQgZm9yRWFjaEZ1bmMoY2hpbGQsIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICAgKiBsZWFmIGNoaWxkIHdpdGggdGhlIGluZGV4IHJlZmxlY3RpbmcgdGhlIHBvc2l0aW9uIHJlbGF0aXZlIHRvIFwidmFsaWQgY29tcG9uZW50c1wiLlxuICAgKlxuICAgKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAgICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmdW5jLlxuICAgKiBAcGFyYW0geyp9IGNvbnRleHQgQ29udGV4dCBmb3IgY29udGV4dC5cbiAgICovXG4gIHN0YXRpYyBmb3JFYWNoKGNoaWxkcmVuLCBmdW5jLCBjb250ZXh0KSB7XG4gICAgbGV0IGluZGV4ID0gMDtcblxuICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGNoaWxkID0+IHtcbiAgICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBpbmRleCsrKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBmb3J3YXJkXG4gICAqXG4gICAqIEBwYXJhbSB1cmwgbGlrZSAvZGFzaGJvYXJkXG4gICAqL1xuICBzdGF0aWMgZm9yd2FyZCh1cmwpIHtcbiAgICBjcmVhdGVIaXN0b3J5KCkucHVzaCh7cGF0aG5hbWU6IHVybH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEl0ZXJhdGVzIHRocm91Z2ggY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLFxuICAgKiBidXQgb25seSBtYXBzIG92ZXIgY2hpbGRyZW4gdGhhdCBhcmUgXCJ2YWxpZCBjb21wb25lbnRzXCIuXG4gICAqXG4gICAqIFRoZSBtYXBGdW5jdGlvbiBwcm92aWRlZCBpbmRleCB3aWxsIGJlIG5vcm1hbGlzZWQgdG8gdGhlIGNvbXBvbmVudHMgbWFwcGVkLFxuICAgKiBzbyBhbiBpbnZhbGlkIGNvbXBvbmVudCB3b3VsZCBub3QgaW5jcmVhc2UgdGhlIGluZGV4LlxuICAgKlxuICAgKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAgICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmdW5jLlxuICAgKiBAcGFyYW0geyp9IGNvbnRleHQgQ29udGV4dCBmb3IgZnVuYy5cbiAgICogQHJldHVybiB7b2JqZWN0fSBPYmplY3QgY29udGFpbmluZyB0aGUgb3JkZXJlZCBtYXAgb2YgcmVzdWx0cy5cbiAgICovXG4gIHN0YXRpYyBtYXAoY2hpbGRyZW4sIGZ1bmMsIGNvbnRleHQpIHtcbiAgICBsZXQgaW5kZXggPSAwO1xuXG4gICAgcmV0dXJuIFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgY2hpbGQgPT4ge1xuICAgICAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBpbmRleCsrKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBzb21lKGNoaWxkcmVuLCBmdW5jLCBjb250ZXh0KSB7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG5cbiAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBjaGlsZCA9PiB7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgaW5kZXgrKykpIHtcbiAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzdGF0aWMgdG9BcnJheShjaGlsZHJlbikge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuXG4gICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgY2hpbGQgPT4ge1xuICAgICAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZXN1bHQucHVzaChjaGlsZCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG4iXX0=