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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwvUmVhY3RVdGlsLmpzIl0sIm5hbWVzIjpbIlJlYWN0VXRpbCIsImNoaWxkcmVuIiwicmVzdWx0IiwiQ2hpbGRyZW4iLCJmb3JFYWNoIiwiaXNWYWxpZEVsZW1lbnQiLCJjaGlsZCIsImZ1bmNzIiwiZmlsdGVyIiwiZiIsInJlZHVjZSIsImFjYyIsImlzRnVuY3Rpb24iLCJFcnJvciIsImNoYWluZWRGdW5jdGlvbiIsImFyZ3MiLCJhcHBseSIsImZ1bmMiLCJjb250ZXh0IiwiaW5kZXgiLCJjYWxsIiwicHVzaCIsInVuZGVmaW5lZCIsInVybCIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUVxQkEsUzs7Ozs7Ozs7O0FBRW5COzs7Ozs7MEJBTWFDLFEsRUFBVTtBQUNyQixVQUFJQyxTQUFTLENBQWI7O0FBRUEsc0JBQU1DLFFBQU4sQ0FBZUMsT0FBZixDQUF1QkgsUUFBdkIsRUFBaUMsaUJBQVM7QUFDeEMsWUFBSSxDQUFDLGdCQUFNSSxjQUFOLENBQXFCQyxLQUFyQixDQUFMLEVBQWtDO0FBQ2hDO0FBQ0Q7O0FBRUQsVUFBRUosTUFBRjtBQUNELE9BTkQ7O0FBUUEsYUFBT0EsTUFBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7NENBTXVDO0FBQUEsd0NBQVBLLEtBQU87QUFBUEEsYUFBTztBQUFBOztBQUNyQyxhQUFPQSxNQUNKQyxNQURJLENBQ0c7QUFBQSxlQUFLQyxLQUFLLElBQVY7QUFBQSxPQURILEVBRUpDLE1BRkksQ0FFRyxVQUFDQyxHQUFELEVBQU1GLENBQU4sRUFBWTtBQUNsQixZQUFJLENBQUMsaUJBQUVHLFVBQUYsQ0FBYUgsQ0FBYixDQUFMLEVBQXNCO0FBQ3BCLGdCQUFNLElBQUlJLEtBQUosQ0FBVSx5RUFBVixDQUFOO0FBQ0Q7O0FBRUQsWUFBSUYsUUFBUSxJQUFaLEVBQWtCO0FBQ2hCLGlCQUFPRixDQUFQO0FBQ0Q7O0FBRUQsZUFBTyxTQUFTSyxlQUFULEdBQWtDO0FBQUEsNkNB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QUFQO0FBQ0QsT0FOTSxDQUFQO0FBT0Q7Ozt5QkFFV2xCLFEsRUFBVWdCLEksRUFBTUMsTyxFQUFTO0FBQ25DLFVBQUlDLFFBQVEsQ0FBWjtBQUNBLFVBQUlqQixTQUFTLEtBQWI7O0FBRUEsc0JBQU1DLFFBQU4sQ0FBZUMsT0FBZixDQUF1QkgsUUFBdkIsRUFBaUMsaUJBQVM7QUFDeEMsWUFBSUMsTUFBSixFQUFZO0FBQ1Y7QUFDRDtBQUNELFlBQUksQ0FBQyxnQkFBTUcsY0FBTixDQUFxQkMsS0FBckIsQ0FBTCxFQUFrQztBQUNoQztBQUNEOztBQUVELFlBQUlXLEtBQUtHLElBQUwsQ0FBVUYsT0FBVixFQUFtQlosS0FBbkIsRUFBMEJhLE9BQTFCLENBQUosRUFBd0M7QUFDdENqQixtQkFBUyxJQUFUO0FBQ0Q7QUFDRixPQVhEOztBQWFBLGFBQU9BLE1BQVA7QUFDRDs7OzRCQUVjRCxRLEVBQVU7QUFDdkIsVUFBTUMsU0FBUyxFQUFmOztBQUVBLHNCQUFNQyxRQUFOLENBQWVDLE9BQWYsQ0FBdUJILFFBQXZCLEVBQWlDLGlCQUFTO0FBQ3hDLFlBQUksQ0FBQyxnQkFBTUksY0FBTixDQUFxQkMsS0FBckIsQ0FBTCxFQUFrQztBQUNoQztBQUNEOztBQUVESixlQUFPbUIsSUFBUCxDQUFZZixLQUFaO0FBQ0QsT0FORDs7QUFRQSxhQUFPSixNQUFQO0FBQ0Q7Ozs7OztrQkF0TWtCRixTIiwiZmlsZSI6InV0aWwvUmVhY3RVdGlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Jyb3dzZXJIaXN0b3J5fSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdFV0aWwge1xuXG4gIC8qKlxuICAgKiBDb3VudCB0aGUgbnVtYmVyIG9mIFwidmFsaWQgY29tcG9uZW50c1wiIGluIHRoZSBDaGlsZHJlbiBjb250YWluZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgc3RhdGljIGNvdW50KGNoaWxkcmVuKSB7XG4gICAgbGV0IHJlc3VsdCA9IDA7XG5cbiAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBjaGlsZCA9PiB7XG4gICAgICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgICsrcmVzdWx0O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYWZlIGNoYWluZWQgZnVuY3Rpb25cbiAgICpcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZnVuY3MgdG8gY2hhaW5cbiAgICogQHJldHVybnMge2Z1bmN0aW9ufG51bGx9XG4gICAqL1xuICBzdGF0aWMgY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKC4uLmZ1bmNzKSB7XG4gICAgcmV0dXJuIGZ1bmNzXG4gICAgICAuZmlsdGVyKGYgPT4gZiAhPSBudWxsKVxuICAgICAgLnJlZHVjZSgoYWNjLCBmKSA9PiB7XG4gICAgICAgIGlmICghXy5pc0Z1bmN0aW9uKGYpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIEFyZ3VtZW50IFR5cGUsIG11c3Qgb25seSBwcm92aWRlIGZ1bmN0aW9ucywgdW5kZWZpbmVkLCBvciBudWxsLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFjYyA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGNoYWluZWRGdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgICAgICAgYWNjLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICAgIGYuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgIH07XG4gICAgICB9LCBudWxsKTtcbiAgfVxuXG4gIHN0YXRpYyBldmVyeShjaGlsZHJlbiwgZnVuYywgY29udGV4dCkge1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgbGV0IHJlc3VsdCA9IHRydWU7XG5cbiAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBjaGlsZCA9PiB7XG4gICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBpbmRleCsrKSkge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogRmluZHMgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLFxuICAgKiBidXQgb25seSBpdGVyYXRlcyBvdmVyIGNoaWxkcmVuIHRoYXQgYXJlIFwidmFsaWQgY29tcG9uZW50c1wiLlxuICAgKlxuICAgKiBUaGUgcHJvdmlkZWQgZm9yRWFjaEZ1bmMoY2hpbGQsIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICAgKiBsZWFmIGNoaWxkIHdpdGggdGhlIGluZGV4IHJlZmxlY3RpbmcgdGhlIHBvc2l0aW9uIHJlbGF0aXZlIHRvIFwidmFsaWQgY29tcG9uZW50c1wiLlxuICAgKlxuICAgKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAgICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmdW5jLlxuICAgKiBAcGFyYW0geyp9IGNvbnRleHQgQ29udGV4dCBmb3IgZnVuYy5cbiAgICogQHJldHVybnMge2FycmF5fSBvZiBjaGlsZHJlbiB0aGF0IG1lZXQgdGhlIGZ1bmMgcmV0dXJuIHN0YXRlbWVudFxuICAgKi9cbiAgc3RhdGljIGZpbHRlcihjaGlsZHJlbiwgZnVuYywgY29udGV4dCkge1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuXG4gICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgY2hpbGQgPT4ge1xuICAgICAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBpbmRleCsrKSkge1xuICAgICAgICByZXN1bHQucHVzaChjaGlsZCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc3RhdGljIGZpbmQoY2hpbGRyZW4sIGZ1bmMsIGNvbnRleHQpIHtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGxldCByZXN1bHQgPSB1bmRlZmluZWQ7XG5cbiAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBjaGlsZCA9PiB7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgaW5kZXgrKykpIHtcbiAgICAgICAgcmVzdWx0ID0gY2hpbGQ7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIEl0ZXJhdGVzIHRocm91Z2ggY2hpbGRyZW4gdGhhdCBhcmUgXCJ2YWxpZCBjb21wb25lbnRzXCIuXG4gICAqXG4gICAqIFRoZSBwcm92aWRlZCBmb3JFYWNoRnVuYyhjaGlsZCwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gICAqIGxlYWYgY2hpbGQgd2l0aCB0aGUgaW5kZXggcmVmbGVjdGluZyB0aGUgcG9zaXRpb24gcmVsYXRpdmUgdG8gXCJ2YWxpZCBjb21wb25lbnRzXCIuXG4gICAqXG4gICAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZ1bmMuXG4gICAqIEBwYXJhbSB7Kn0gY29udGV4dCBDb250ZXh0IGZvciBjb250ZXh0LlxuICAgKi9cbiAgc3RhdGljIGZvckVhY2goY2hpbGRyZW4sIGZ1bmMsIGNvbnRleHQpIHtcbiAgICBsZXQgaW5kZXggPSAwO1xuXG4gICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgY2hpbGQgPT4ge1xuICAgICAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGluZGV4KyspO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZvcndhcmQodXJsKSB7XG4gICAgYnJvd3Nlckhpc3RvcnkucHVzaCh1cmwpO1xuICB9XG4gIFxuICAvKipcbiAgICogSXRlcmF0ZXMgdGhyb3VnaCBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAsXG4gICAqIGJ1dCBvbmx5IG1hcHMgb3ZlciBjaGlsZHJlbiB0aGF0IGFyZSBcInZhbGlkIGNvbXBvbmVudHNcIi5cbiAgICpcbiAgICogVGhlIG1hcEZ1bmN0aW9uIHByb3ZpZGVkIGluZGV4IHdpbGwgYmUgbm9ybWFsaXNlZCB0byB0aGUgY29tcG9uZW50cyBtYXBwZWQsXG4gICAqIHNvIGFuIGludmFsaWQgY29tcG9uZW50IHdvdWxkIG5vdCBpbmNyZWFzZSB0aGUgaW5kZXguXG4gICAqXG4gICAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZ1bmMuXG4gICAqIEBwYXJhbSB7Kn0gY29udGV4dCBDb250ZXh0IGZvciBmdW5jLlxuICAgKiBAcmV0dXJuIHtvYmplY3R9IE9iamVjdCBjb250YWluaW5nIHRoZSBvcmRlcmVkIG1hcCBvZiByZXN1bHRzLlxuICAgKi9cbiAgc3RhdGljIG1hcChjaGlsZHJlbiwgZnVuYywgY29udGV4dCkge1xuICAgIGxldCBpbmRleCA9IDA7XG5cbiAgICByZXR1cm4gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBjaGlsZCA9PiB7XG4gICAgICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGluZGV4KyspO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHNvbWUoY2hpbGRyZW4sIGZ1bmMsIGNvbnRleHQpIHtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGxldCByZXN1bHQgPSBmYWxzZTtcblxuICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGNoaWxkID0+IHtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBpbmRleCsrKSkge1xuICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHN0YXRpYyB0b0FycmF5KGNoaWxkcmVuKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG5cbiAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBjaGlsZCA9PiB7XG4gICAgICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJlc3VsdC5wdXNoKGNoaWxkKTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cbiJdfQ==