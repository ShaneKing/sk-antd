'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactUtil = function () {
  function ReactUtil() {
    _classCallCheck(this, ReactUtil);
  }

  _createClass(ReactUtil, null, [{
    key: 'map',


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
    value: function map(children, func, context) {
      var index = 0;

      return _react2.default.Children.map(children, function (child) {
        if (!_react2.default.isValidElement(child)) {
          return child;
        }

        return func.call(context, child, index++);
      });
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
     * Count the number of "valid components" in the Children container.
     *
     * @param {?*} children Children tree container.
     * @returns {number}
     */

  }, {
    key: 'count',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL1JlYWN0VXRpbC5qcyJdLCJuYW1lcyI6WyJSZWFjdFV0aWwiLCJjaGlsZHJlbiIsImZ1bmMiLCJjb250ZXh0IiwiaW5kZXgiLCJDaGlsZHJlbiIsIm1hcCIsImlzVmFsaWRFbGVtZW50IiwiY2hpbGQiLCJjYWxsIiwiZm9yRWFjaCIsInJlc3VsdCIsInB1c2giLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7O0lBRXFCQSxTOzs7Ozs7Ozs7QUFFbkI7Ozs7Ozs7Ozs7Ozt3QkFZV0MsUSxFQUFVQyxJLEVBQU1DLE8sRUFBUztBQUNsQyxVQUFJQyxRQUFRLENBQVo7O0FBRUEsYUFBTyxnQkFBTUMsUUFBTixDQUFlQyxHQUFmLENBQW1CTCxRQUFuQixFQUE2QixpQkFBUztBQUMzQyxZQUFJLENBQUMsZ0JBQU1NLGNBQU4sQ0FBcUJDLEtBQXJCLENBQUwsRUFBa0M7QUFDaEMsaUJBQU9BLEtBQVA7QUFDRDs7QUFFRCxlQUFPTixLQUFLTyxJQUFMLENBQVVOLE9BQVYsRUFBbUJLLEtBQW5CLEVBQTBCSixPQUExQixDQUFQO0FBQ0QsT0FOTSxDQUFQO0FBT0Q7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7NEJBVWVILFEsRUFBVUMsSSxFQUFNQyxPLEVBQVM7QUFDdEMsVUFBSUMsUUFBUSxDQUFaOztBQUVBLHNCQUFNQyxRQUFOLENBQWVLLE9BQWYsQ0FBdUJULFFBQXZCLEVBQWlDLGlCQUFTO0FBQ3hDLFlBQUksQ0FBQyxnQkFBTU0sY0FBTixDQUFxQkMsS0FBckIsQ0FBTCxFQUFrQztBQUNoQztBQUNEOztBQUVETixhQUFLTyxJQUFMLENBQVVOLE9BQVYsRUFBbUJLLEtBQW5CLEVBQTBCSixPQUExQjtBQUNELE9BTkQ7QUFPRDs7QUFFRDs7Ozs7Ozs7OzBCQU1hSCxRLEVBQVU7QUFDckIsVUFBSVUsU0FBUyxDQUFiOztBQUVBLHNCQUFNTixRQUFOLENBQWVLLE9BQWYsQ0FBdUJULFFBQXZCLEVBQWlDLGlCQUFTO0FBQ3hDLFlBQUks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IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RVdGlsIHtcblxuICAvKipcbiAgICogSXRlcmF0ZXMgdGhyb3VnaCBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAsXG4gICAqIGJ1dCBvbmx5IG1hcHMgb3ZlciBjaGlsZHJlbiB0aGF0IGFyZSBcInZhbGlkIGNvbXBvbmVudHNcIi5cbiAgICpcbiAgICogVGhlIG1hcEZ1bmN0aW9uIHByb3ZpZGVkIGluZGV4IHdpbGwgYmUgbm9ybWFsaXNlZCB0byB0aGUgY29tcG9uZW50cyBtYXBwZWQsXG4gICAqIHNvIGFuIGludmFsaWQgY29tcG9uZW50IHdvdWxkIG5vdCBpbmNyZWFzZSB0aGUgaW5kZXguXG4gICAqXG4gICAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZ1bmMuXG4gICAqIEBwYXJhbSB7Kn0gY29udGV4dCBDb250ZXh0IGZvciBmdW5jLlxuICAgKiBAcmV0dXJuIHtvYmplY3R9IE9iamVjdCBjb250YWluaW5nIHRoZSBvcmRlcmVkIG1hcCBvZiByZXN1bHRzLlxuICAgKi9cbiAgc3RhdGljIG1hcChjaGlsZHJlbiwgZnVuYywgY29udGV4dCkge1xuICAgIGxldCBpbmRleCA9IDA7XG5cbiAgICByZXR1cm4gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBjaGlsZCA9PiB7XG4gICAgICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGluZGV4KyspO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEl0ZXJhdGVzIHRocm91Z2ggY2hpbGRyZW4gdGhhdCBhcmUgXCJ2YWxpZCBjb21wb25lbnRzXCIuXG4gICAqXG4gICAqIFRoZSBwcm92aWRlZCBmb3JFYWNoRnVuYyhjaGlsZCwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gICAqIGxlYWYgY2hpbGQgd2l0aCB0aGUgaW5kZXggcmVmbGVjdGluZyB0aGUgcG9zaXRpb24gcmVsYXRpdmUgdG8gXCJ2YWxpZCBjb21wb25lbnRzXCIuXG4gICAqXG4gICAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZ1bmMuXG4gICAqIEBwYXJhbSB7Kn0gY29udGV4dCBDb250ZXh0IGZvciBjb250ZXh0LlxuICAgKi9cbiAgc3RhdGljIGZvckVhY2goY2hpbGRyZW4sIGZ1bmMsIGNvbnRleHQpIHtcbiAgICBsZXQgaW5kZXggPSAwO1xuXG4gICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgY2hpbGQgPT4ge1xuICAgICAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGluZGV4KyspO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvdW50IHRoZSBudW1iZXIgb2YgXCJ2YWxpZCBjb21wb25lbnRzXCIgaW4gdGhlIENoaWxkcmVuIGNvbnRhaW5lci5cbiAgICpcbiAgICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICBzdGF0aWMgY291bnQoY2hpbGRyZW4pIHtcbiAgICBsZXQgcmVzdWx0ID0gMDtcblxuICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGNoaWxkID0+IHtcbiAgICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgKytyZXN1bHQ7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmRzIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCxcbiAgICogYnV0IG9ubHkgaXRlcmF0ZXMgb3ZlciBjaGlsZHJlbiB0aGF0IGFyZSBcInZhbGlkIGNvbXBvbmVudHNcIi5cbiAgICpcbiAgICogVGhlIHByb3ZpZGVkIGZvckVhY2hGdW5jKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAgICogbGVhZiBjaGlsZCB3aXRoIHRoZSBpbmRleCByZWZsZWN0aW5nIHRoZSBwb3NpdGlvbiByZWxhdGl2ZSB0byBcInZhbGlkIGNvbXBvbmVudHNcIi5cbiAgICpcbiAgICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZnVuYy5cbiAgICogQHBhcmFtIHsqfSBjb250ZXh0IENvbnRleHQgZm9yIGZ1bmMuXG4gICAqIEByZXR1cm5zIHthcnJheX0gb2YgY2hpbGRyZW4gdGhhdCBtZWV0IHRoZSBmdW5jIHJldHVybiBzdGF0ZW1lbnRcbiAgICovXG4gIHN0YXRpYyBmaWx0ZXIoY2hpbGRyZW4sIGZ1bmMsIGNvbnRleHQpIHtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGxldCByZXN1bHQgPSBbXTtcblxuICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGNoaWxkID0+IHtcbiAgICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgaW5kZXgrKykpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goY2hpbGQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHN0YXRpYyBmaW5kKGNoaWxkcmVuLCBmdW5jLCBjb250ZXh0KSB7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBsZXQgcmVzdWx0ID0gdW5kZWZpbmVkO1xuXG4gICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgY2hpbGQgPT4ge1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGluZGV4KyspKSB7XG4gICAgICAgIHJlc3VsdCA9IGNoaWxkO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHN0YXRpYyBldmVyeShjaGlsZHJlbiwgZnVuYywgY29udGV4dCkge1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgbGV0IHJlc3VsdCA9IHRydWU7XG5cbiAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBjaGlsZCA9PiB7XG4gICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBpbmRleCsrKSkge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzdGF0aWMgc29tZShjaGlsZHJlbiwgZnVuYywgY29udGV4dCkge1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuXG4gICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgY2hpbGQgPT4ge1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGluZGV4KyspKSB7XG4gICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc3RhdGljIHRvQXJyYXkoY2hpbGRyZW4pIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcblxuICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGNoaWxkID0+IHtcbiAgICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcmVzdWx0LnB1c2goY2hpbGQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuIl19