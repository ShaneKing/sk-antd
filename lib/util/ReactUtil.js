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
      (0, _createBrowserHistory2.default)().push(url);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwvUmVhY3RVdGlsLmpzIl0sIm5hbWVzIjpbIlJlYWN0VXRpbCIsImNoaWxkcmVuIiwicmVzdWx0IiwiQ2hpbGRyZW4iLCJmb3JFYWNoIiwiaXNWYWxpZEVsZW1lbnQiLCJjaGlsZCIsImZ1bmNzIiwiZmlsdGVyIiwiZiIsInJlZHVjZSIsImFjYyIsImlzRnVuY3Rpb24iLCJFcnJvciIsImNoYWluZWRGdW5jdGlvbiIsImFyZ3MiLCJhcHBseSIsImZ1bmMiLCJjb250ZXh0IiwiaW5kZXgiLCJjYWxsIiwicHVzaCIsInVuZGVmaW5lZCIsInVybCIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0lBRXFCQSxTOzs7Ozs7Ozs7QUFFbkI7Ozs7OzswQkFNYUMsUSxFQUFVO0FBQ3JCLFVBQUlDLFNBQVMsQ0FBYjs7QUFFQSxzQkFBTUMsUUFBTixDQUFlQyxPQUFmLENBQXVCSCxRQUF2QixFQUFpQyxpQkFBUztBQUN4QyxZQUFJLENBQUMsZ0JBQU1JLGNBQU4sQ0FBcUJDLEtBQXJCLENBQUwsRUFBa0M7QUFDaEM7QUFDRDs7QUFFRCxVQUFFSixNQUFGO0FBQ0QsT0FORDs7QUFRQSxhQUFPQSxNQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs0Q0FNdUM7QUFBQSx3Q0FBUEssS0FBTztBQUFQQSxhQUFPO0FBQUE7O0FBQ3JDLGFBQU9BLE1BQ0pDLE1BREksQ0FDRztBQUFBLGVBQUtDLEtBQUssSUFBVjtBQUFBLE9BREgsRUFFSkMsTUFGSSxDQUVHLFVBQUNDLEdBQUQsRUFBTUYsQ0FBTixFQUFZO0FBQ2xCLFlBQUksQ0FBQyxpQkFBRUcsVUFBRixDQUFhSCxDQUFiLENBQUwsRUFBc0I7QUFDcEIsZ0JBQU0sSUFBSUksS0FBSixDQUFVLHlFQUFWLENBQU47QUFDRDs7QUFFRCxZQUFJRixRQUFRLElBQVosRUFBa0I7QUFDaEIsaUJBQU9GLENBQVA7QUFDRDs7QUFFRCxlQUFPLFNBQVNLLGVBQVQsR0FBa0M7QUFBQSw2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MUIsQ0FBUDtBQUNELE9BTk0sQ0FBUDtBQU9EOzs7eUJBRVdsQixRLEVBQVVnQixJLEVBQU1DLE8sRUFBUztBQUNuQyxVQUFJQyxRQUFRLENBQVo7QUFDQSxVQUFJakIsU0FBUyxLQUFiOztBQUVBLHNCQUFNQyxRQUFOLENBQWVDLE9BQWYsQ0FBdUJILFFBQXZCLEVBQWlDLGlCQUFTO0FBQ3hDLFlBQUlDLE1BQUosRUFBWTtBQUNWO0FBQ0Q7QUFDRCxZQUFJLENBQUMsZ0JBQU1HLGNBQU4sQ0FBcUJDLEtBQXJCLENBQUwsRUFBa0M7QUFDaEM7QUFDRDs7QUFFRCxZQUFJVyxLQUFLRyxJQUFMLENBQVVGLE9BQVYsRUFBbUJaLEtBQW5CLEVBQTBCYSxPQUExQixDQUFKLEVBQXdDO0FBQ3RDakIsbUJBQVMsSUFBVDtBQUNEO0FBQ0YsT0FYRDs7QUFhQSxhQUFPQSxNQUFQO0FBQ0Q7Ozs0QkFFY0QsUSxFQUFVO0FBQ3ZCLFVBQU1DLFNBQVMsRUFBZjs7QUFFQSxzQkFBTUMsUUFBTixDQUFlQyxPQUFmLENBQXVCSCxRQUF2QixFQUFpQyxpQkFBUztBQUN4QyxZQUFJLENBQUMsZ0JBQU1JLGNBQU4sQ0FBcUJDLEtBQXJCLENBQUwsRUFBa0M7QUFDaEM7QUFDRDs7QUFFREosZUFBT21CLElBQVAsQ0FBWWYsS0FBWjtBQUNELE9BTkQ7O0FBUUEsYUFBT0osTUFBUDtBQUNEOzs7Ozs7a0JBdE1rQkYsUyIsImZpbGUiOiJ1dGlsL1JlYWN0VXRpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNyZWF0ZUhpc3RvcnkgZnJvbSAnaGlzdG9yeS9jcmVhdGVCcm93c2VySGlzdG9yeSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0VXRpbCB7XG5cbiAgLyoqXG4gICAqIENvdW50IHRoZSBudW1iZXIgb2YgXCJ2YWxpZCBjb21wb25lbnRzXCIgaW4gdGhlIENoaWxkcmVuIGNvbnRhaW5lci5cbiAgICpcbiAgICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICBzdGF0aWMgY291bnQoY2hpbGRyZW4pIHtcbiAgICBsZXQgcmVzdWx0ID0gMDtcblxuICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGNoaWxkID0+IHtcbiAgICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgKytyZXN1bHQ7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIFNhZmUgY2hhaW5lZCBmdW5jdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmdW5jcyB0byBjaGFpblxuICAgKiBAcmV0dXJucyB7ZnVuY3Rpb258bnVsbH1cbiAgICovXG4gIHN0YXRpYyBjcmVhdGVDaGFpbmVkRnVuY3Rpb24oLi4uZnVuY3MpIHtcbiAgICByZXR1cm4gZnVuY3NcbiAgICAgIC5maWx0ZXIoZiA9PiBmICE9IG51bGwpXG4gICAgICAucmVkdWNlKChhY2MsIGYpID0+IHtcbiAgICAgICAgaWYgKCFfLmlzRnVuY3Rpb24oZikpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgQXJndW1lbnQgVHlwZSwgbXVzdCBvbmx5IHByb3ZpZGUgZnVuY3Rpb25zLCB1bmRlZmluZWQsIG9yIG51bGwuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWNjID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gY2hhaW5lZEZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICAgICAgICBhY2MuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgZi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgfTtcbiAgICAgIH0sIG51bGwpO1xuICB9XG5cbiAgc3RhdGljIGV2ZXJ5KGNoaWxkcmVuLCBmdW5jLCBjb250ZXh0KSB7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcblxuICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGNoaWxkID0+IHtcbiAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGluZGV4KyspKSB7XG4gICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kcyBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAsXG4gICAqIGJ1dCBvbmx5IGl0ZXJhdGVzIG92ZXIgY2hpbGRyZW4gdGhhdCBhcmUgXCJ2YWxpZCBjb21wb25lbnRzXCIuXG4gICAqXG4gICAqIFRoZSBwcm92aWRlZCBmb3JFYWNoRnVuYyhjaGlsZCwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gICAqIGxlYWYgY2hpbGQgd2l0aCB0aGUgaW5kZXggcmVmbGVjdGluZyB0aGUgcG9zaXRpb24gcmVsYXRpdmUgdG8gXCJ2YWxpZCBjb21wb25lbnRzXCIuXG4gICAqXG4gICAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZ1bmMuXG4gICAqIEBwYXJhbSB7Kn0gY29udGV4dCBDb250ZXh0IGZvciBmdW5jLlxuICAgKiBAcmV0dXJucyB7YXJyYXl9IG9mIGNoaWxkcmVuIHRoYXQgbWVldCB0aGUgZnVuYyByZXR1cm4gc3RhdGVtZW50XG4gICAqL1xuICBzdGF0aWMgZmlsdGVyKGNoaWxkcmVuLCBmdW5jLCBjb250ZXh0KSB7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBsZXQgcmVzdWx0ID0gW107XG5cbiAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBjaGlsZCA9PiB7XG4gICAgICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGluZGV4KyspKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGNoaWxkKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzdGF0aWMgZmluZChjaGlsZHJlbiwgZnVuYywgY29udGV4dCkge1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgbGV0IHJlc3VsdCA9IHVuZGVmaW5lZDtcblxuICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGNoaWxkID0+IHtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBpbmRleCsrKSkge1xuICAgICAgICByZXN1bHQgPSBjaGlsZDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogSXRlcmF0ZXMgdGhyb3VnaCBjaGlsZHJlbiB0aGF0IGFyZSBcInZhbGlkIGNvbXBvbmVudHNcIi5cbiAgICpcbiAgICogVGhlIHByb3ZpZGVkIGZvckVhY2hGdW5jKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAgICogbGVhZiBjaGlsZCB3aXRoIHRoZSBpbmRleCByZWZsZWN0aW5nIHRoZSBwb3NpdGlvbiByZWxhdGl2ZSB0byBcInZhbGlkIGNvbXBvbmVudHNcIi5cbiAgICpcbiAgICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZnVuYy5cbiAgICogQHBhcmFtIHsqfSBjb250ZXh0IENvbnRleHQgZm9yIGNvbnRleHQuXG4gICAqL1xuICBzdGF0aWMgZm9yRWFjaChjaGlsZHJlbiwgZnVuYywgY29udGV4dCkge1xuICAgIGxldCBpbmRleCA9IDA7XG5cbiAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBjaGlsZCA9PiB7XG4gICAgICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgaW5kZXgrKyk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZm9yd2FyZCh1cmwpIHtcbiAgICBjcmVhdGVIaXN0b3J5KCkucHVzaCh1cmwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEl0ZXJhdGVzIHRocm91Z2ggY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLFxuICAgKiBidXQgb25seSBtYXBzIG92ZXIgY2hpbGRyZW4gdGhhdCBhcmUgXCJ2YWxpZCBjb21wb25lbnRzXCIuXG4gICAqXG4gICAqIFRoZSBtYXBGdW5jdGlvbiBwcm92aWRlZCBpbmRleCB3aWxsIGJlIG5vcm1hbGlzZWQgdG8gdGhlIGNvbXBvbmVudHMgbWFwcGVkLFxuICAgKiBzbyBhbiBpbnZhbGlkIGNvbXBvbmVudCB3b3VsZCBub3QgaW5jcmVhc2UgdGhlIGluZGV4LlxuICAgKlxuICAgKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAgICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmdW5jLlxuICAgKiBAcGFyYW0geyp9IGNvbnRleHQgQ29udGV4dCBmb3IgZnVuYy5cbiAgICogQHJldHVybiB7b2JqZWN0fSBPYmplY3QgY29udGFpbmluZyB0aGUgb3JkZXJlZCBtYXAgb2YgcmVzdWx0cy5cbiAgICovXG4gIHN0YXRpYyBtYXAoY2hpbGRyZW4sIGZ1bmMsIGNvbnRleHQpIHtcbiAgICBsZXQgaW5kZXggPSAwO1xuXG4gICAgcmV0dXJuIFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgY2hpbGQgPT4ge1xuICAgICAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBpbmRleCsrKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBzb21lKGNoaWxkcmVuLCBmdW5jLCBjb250ZXh0KSB7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG5cbiAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBjaGlsZCA9PiB7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgaW5kZXgrKykpIHtcbiAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzdGF0aWMgdG9BcnJheShjaGlsZHJlbikge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuXG4gICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgY2hpbGQgPT4ge1xuICAgICAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZXN1bHQucHVzaChjaGlsZCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG4iXX0=