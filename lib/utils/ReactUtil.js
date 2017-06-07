'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactUtil = function () {
  function ReactUtil() {
    _classCallCheck(this, ReactUtil);
  }

  _createClass(ReactUtil, null, [{
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
  }, {
    key: 'forward',
    value: function forward(url) {
      _reactRouter.browserHistory.push(url);
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

  return ReactUtil;
}();

exports.default = ReactUtil;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL1JlYWN0VXRpbC5qcyJdLCJuYW1lcyI6WyJSZWFjdFV0aWwiLCJjaGlsZHJlbiIsInJlc3VsdCIsIkNoaWxkcmVuIiwiZm9yRWFjaCIsImlzVmFsaWRFbGVtZW50IiwiY2hpbGQiLCJmdW5jcyIsImZpbHRlciIsImYiLCJyZWR1Y2UiLCJhY2MiLCJpc0Z1bmN0aW9uIiwiRXJyb3IiLCJjaGFpbmVkRnVuY3Rpb24iLCJhcmdzIiwiYXBwbHkiLCJmdW5jIiwiY29udGV4dCIsImluZGV4IiwiY2FsbCIsInB1c2giLCJ1bmRlZmluZWQiLCJ1cmwiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7SUFFcUJBLFM7Ozs7Ozs7OztBQUVuQjs7Ozs7OzBCQU1hQyxRLEVBQVU7QUFDckIsVUFBSUMsU0FBUyxDQUFiOztBQUVBLHNCQUFNQyxRQUFOLENBQWVDLE9BQWYsQ0FBdUJILFFBQXZCLEVBQWlDLGlCQUFTO0FBQ3hDLFlBQUksQ0FBQyxnQkFBTUksY0FBTixDQUFxQkMsS0FBckIsQ0FBTCxFQUFrQztBQUNoQztBQUNEOztBQUVELFVBQUVKLE1BQUY7QUFDRCxPQU5EOztBQVFBLGFBQU9BLE1BQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7OzRDQU11QztBQUFBLHdDQUFQSyxLQUFPO0FBQVBBLGFBQU87QUFBQTs7QUFDckMsYUFBT0EsTUFDSkMsTUFESSxDQUNHO0FBQUEsZUFBS0MsS0FBSyxJQUFWO0FBQUEsT0FESCxFQUVKQyxNQUZJLENBRUcsVUFBQ0MsR0FBRCxFQUFNRixDQUFOLEVBQVk7QUFDbEIsWUFBSSxDQUFDLGlCQUFFRyxVQUFGLENBQWFILENBQWIsQ0FBTCxFQUFzQjtBQUNwQixnQkFBTSxJQUFJSSxLQUFKLENBQVUseUVBQVYsQ0FBTjtBQUNEOztBQUVELFlBQUlGLFFBQVEsSUFBWixFQUFrQjtBQUNoQixpQkFBT0YsQ0FBUDtBQUNEOztBQUVELGVBQU8sU0FBU0ssZUFBVCxHQUFrQztBQUFBLDZD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Q0FBUDtBQUNELE9BTk0sQ0FBUDtBQU9EOzs7eUJBRVdsQixRLEVBQVVnQixJLEVBQU1DLE8sRUFBUztBQUNuQyxVQUFJQyxRQUFRLENBQVo7QUFDQSxVQUFJakIsU0FBUyxLQUFiOztBQUVBLHNCQUFNQyxRQUFOLENBQWVDLE9BQWYsQ0FBdUJILFFBQXZCLEVBQWlDLGlCQUFTO0FBQ3hDLFlBQUlDLE1BQUosRUFBWTtBQUNWO0FBQ0Q7QUFDRCxZQUFJLENBQUMsZ0JBQU1HLGNBQU4sQ0FBcUJDLEtBQXJCLENBQUwsRUFBa0M7QUFDaEM7QUFDRDs7QUFFRCxZQUFJVyxLQUFLRyxJQUFMLENBQVVGLE9BQVYsRUFBbUJaLEtBQW5CLEVBQTBCYSxPQUExQixDQUFKLEVBQXdDO0FBQ3RDakIsbUJBQVMsSUFBVDtBQUNEO0FBQ0YsT0FYRDs7QUFhQSxhQUFPQSxNQUFQO0FBQ0Q7Ozs0QkFFY0QsUSxFQUFVO0FBQ3ZCLFVBQU1DLFNBQVMsRUFBZjs7QUFFQSxzQkFBTUMsUUFBTixDQUFlQyxPQUFmLENBQXVCSCxRQUF2QixFQUFpQyxpQkFBUztBQUN4QyxZQUFJLENBQUMsZ0JBQU1JLGNBQU4sQ0FBcUJDLEtBQXJCLENBQUwsRUFBa0M7QUFDaEM7QUFDRDs7QUFFREosZUFBT21CLElBQVAsQ0FBWWYsS0FBWjtBQUNELE9BTkQ7O0FBUUEsYUFBT0osTUFBUDtBQUNEOzs7Ozs7a0JBdE1rQkYsUyIsImZpbGUiOiJ1dGlscy9SZWFjdFV0aWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7YnJvd3Nlckhpc3Rvcnl9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0VXRpbCB7XG5cbiAgLyoqXG4gICAqIENvdW50IHRoZSBudW1iZXIgb2YgXCJ2YWxpZCBjb21wb25lbnRzXCIgaW4gdGhlIENoaWxkcmVuIGNvbnRhaW5lci5cbiAgICpcbiAgICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICBzdGF0aWMgY291bnQoY2hpbGRyZW4pIHtcbiAgICBsZXQgcmVzdWx0ID0gMDtcblxuICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGNoaWxkID0+IHtcbiAgICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgKytyZXN1bHQ7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIFNhZmUgY2hhaW5lZCBmdW5jdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmdW5jcyB0byBjaGFpblxuICAgKiBAcmV0dXJucyB7ZnVuY3Rpb258bnVsbH1cbiAgICovXG4gIHN0YXRpYyBjcmVhdGVDaGFpbmVkRnVuY3Rpb24oLi4uZnVuY3MpIHtcbiAgICByZXR1cm4gZnVuY3NcbiAgICAgIC5maWx0ZXIoZiA9PiBmICE9IG51bGwpXG4gICAgICAucmVkdWNlKChhY2MsIGYpID0+IHtcbiAgICAgICAgaWYgKCFfLmlzRnVuY3Rpb24oZikpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgQXJndW1lbnQgVHlwZSwgbXVzdCBvbmx5IHByb3ZpZGUgZnVuY3Rpb25zLCB1bmRlZmluZWQsIG9yIG51bGwuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWNjID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gY2hhaW5lZEZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICAgICAgICBhY2MuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgZi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgfTtcbiAgICAgIH0sIG51bGwpO1xuICB9XG5cbiAgc3RhdGljIGV2ZXJ5KGNoaWxkcmVuLCBmdW5jLCBjb250ZXh0KSB7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcblxuICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGNoaWxkID0+IHtcbiAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGluZGV4KyspKSB7XG4gICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kcyBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAsXG4gICAqIGJ1dCBvbmx5IGl0ZXJhdGVzIG92ZXIgY2hpbGRyZW4gdGhhdCBhcmUgXCJ2YWxpZCBjb21wb25lbnRzXCIuXG4gICAqXG4gICAqIFRoZSBwcm92aWRlZCBmb3JFYWNoRnVuYyhjaGlsZCwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gICAqIGxlYWYgY2hpbGQgd2l0aCB0aGUgaW5kZXggcmVmbGVjdGluZyB0aGUgcG9zaXRpb24gcmVsYXRpdmUgdG8gXCJ2YWxpZCBjb21wb25lbnRzXCIuXG4gICAqXG4gICAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZ1bmMuXG4gICAqIEBwYXJhbSB7Kn0gY29udGV4dCBDb250ZXh0IGZvciBmdW5jLlxuICAgKiBAcmV0dXJucyB7YXJyYXl9IG9mIGNoaWxkcmVuIHRoYXQgbWVldCB0aGUgZnVuYyByZXR1cm4gc3RhdGVtZW50XG4gICAqL1xuICBzdGF0aWMgZmlsdGVyKGNoaWxkcmVuLCBmdW5jLCBjb250ZXh0KSB7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBsZXQgcmVzdWx0ID0gW107XG5cbiAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBjaGlsZCA9PiB7XG4gICAgICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGluZGV4KyspKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGNoaWxkKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzdGF0aWMgZmluZChjaGlsZHJlbiwgZnVuYywgY29udGV4dCkge1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgbGV0IHJlc3VsdCA9IHVuZGVmaW5lZDtcblxuICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGNoaWxkID0+IHtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBpbmRleCsrKSkge1xuICAgICAgICByZXN1bHQgPSBjaGlsZDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogSXRlcmF0ZXMgdGhyb3VnaCBjaGlsZHJlbiB0aGF0IGFyZSBcInZhbGlkIGNvbXBvbmVudHNcIi5cbiAgICpcbiAgICogVGhlIHByb3ZpZGVkIGZvckVhY2hGdW5jKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAgICogbGVhZiBjaGlsZCB3aXRoIHRoZSBpbmRleCByZWZsZWN0aW5nIHRoZSBwb3NpdGlvbiByZWxhdGl2ZSB0byBcInZhbGlkIGNvbXBvbmVudHNcIi5cbiAgICpcbiAgICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZnVuYy5cbiAgICogQHBhcmFtIHsqfSBjb250ZXh0IENvbnRleHQgZm9yIGNvbnRleHQuXG4gICAqL1xuICBzdGF0aWMgZm9yRWFjaChjaGlsZHJlbiwgZnVuYywgY29udGV4dCkge1xuICAgIGxldCBpbmRleCA9IDA7XG5cbiAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBjaGlsZCA9PiB7XG4gICAgICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgaW5kZXgrKyk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZm9yd2FyZCh1cmwpIHtcbiAgICBicm93c2VySGlzdG9yeS5wdXNoKHVybCk7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiBJdGVyYXRlcyB0aHJvdWdoIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCxcbiAgICogYnV0IG9ubHkgbWFwcyBvdmVyIGNoaWxkcmVuIHRoYXQgYXJlIFwidmFsaWQgY29tcG9uZW50c1wiLlxuICAgKlxuICAgKiBUaGUgbWFwRnVuY3Rpb24gcHJvdmlkZWQgaW5kZXggd2lsbCBiZSBub3JtYWxpc2VkIHRvIHRoZSBjb21wb25lbnRzIG1hcHBlZCxcbiAgICogc28gYW4gaW52YWxpZCBjb21wb25lbnQgd291bGQgbm90IGluY3JlYXNlIHRoZSBpbmRleC5cbiAgICpcbiAgICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZnVuYy5cbiAgICogQHBhcmFtIHsqfSBjb250ZXh0IENvbnRleHQgZm9yIGZ1bmMuXG4gICAqIEByZXR1cm4ge29iamVjdH0gT2JqZWN0IGNvbnRhaW5pbmcgdGhlIG9yZGVyZWQgbWFwIG9mIHJlc3VsdHMuXG4gICAqL1xuICBzdGF0aWMgbWFwKGNoaWxkcmVuLCBmdW5jLCBjb250ZXh0KSB7XG4gICAgbGV0IGluZGV4ID0gMDtcblxuICAgIHJldHVybiBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGNoaWxkID0+IHtcbiAgICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgaW5kZXgrKyk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgc29tZShjaGlsZHJlbiwgZnVuYywgY29udGV4dCkge1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuXG4gICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgY2hpbGQgPT4ge1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGluZGV4KyspKSB7XG4gICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc3RhdGljIHRvQXJyYXkoY2hpbGRyZW4pIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcblxuICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGNoaWxkID0+IHtcbiAgICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcmVzdWx0LnB1c2goY2hpbGQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuIl19