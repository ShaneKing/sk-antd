'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactUtils = function () {
  function ReactUtils() {
    _classCallCheck(this, ReactUtils);
  }

  _createClass(ReactUtils, null, [{
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

  return ReactUtils;
}();

exports.default = ReactUtils;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL1JlYWN0VXRpbHMuanMiXSwibmFtZXMiOlsiUmVhY3RVdGlscyIsImNoaWxkcmVuIiwiZnVuYyIsImNvbnRleHQiLCJpbmRleCIsIkNoaWxkcmVuIiwibWFwIiwiaXNWYWxpZEVsZW1lbnQiLCJjaGlsZCIsImNhbGwiLCJmb3JFYWNoIiwicmVzdWx0IiwicHVzaCIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7SUFFcUJBLFU7Ozs7Ozs7OztBQUVuQjs7Ozs7Ozs7Ozs7O3dCQVlXQyxRLEVBQVVDLEksRUFBTUMsTyxFQUFTO0FBQ2xDLFVBQUlDLFFBQVEsQ0FBWjs7QUFFQSxhQUFPLGdCQUFNQyxRQUFOLENBQWVDLEdBQWYsQ0FBbUJMLFFBQW5CLEVBQTZCLGlCQUFTO0FBQzNDLFlBQUksQ0FBQyxnQkFBTU0sY0FBTixDQUFxQkMsS0FBckIsQ0FBTCxFQUFrQztBQUNoQyxpQkFBT0EsS0FBUDtBQUNEOztBQUVELGVBQU9OLEtBQUtPLElBQUwsQ0FBVU4sT0FBVixFQUFtQkssS0FBbkIsRUFBMEJKLE9BQTFCLENBQVA7QUFDRCxPQU5NLENBQVA7QUFPRDs7QUFFRDs7Ozs7Ozs7Ozs7Ozs0QkFVZUgsUSxFQUFVQyxJLEVBQU1DLE8sRUFBUztBQUN0QyxVQUFJQyxRQUFRLENBQVo7O0FBRUEsc0JBQU1DLFFBQU4sQ0FBZUssT0FBZixDQUF1QlQsUUFBdkIsRUFBaUMsaUJBQVM7QUFDeEMsWUFBSSxDQUFDLGdCQUFNTSxjQUFOLENBQXFCQyxLQUFyQixDQUFMLEVBQWtDO0FBQ2hDO0FBQ0Q7O0FBRUROLGFBQUtPLElBQUwsQ0FBVU4sT0FBVixFQUFtQkssS0FBbkIsRUFBMEJKLE9BQTFCO0FBQ0QsT0FORDtBQU9EOztBQUVEOzs7Ozs7Ozs7MEJBTWFILFEsRUFBVTtBQUNyQixVQUFJVSxTQUFTLENBQWI7O0FBRUEsc0JBQU1OLFFBQU4sQ0FBZUssT0FBZixDQUF1QlQsUUFBdkIsRUFBaUMsaUJBQVM7QUFDeEMsWUFB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YWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RVdGlscyB7XG5cbiAgLyoqXG4gICAqIEl0ZXJhdGVzIHRocm91Z2ggY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLFxuICAgKiBidXQgb25seSBtYXBzIG92ZXIgY2hpbGRyZW4gdGhhdCBhcmUgXCJ2YWxpZCBjb21wb25lbnRzXCIuXG4gICAqXG4gICAqIFRoZSBtYXBGdW5jdGlvbiBwcm92aWRlZCBpbmRleCB3aWxsIGJlIG5vcm1hbGlzZWQgdG8gdGhlIGNvbXBvbmVudHMgbWFwcGVkLFxuICAgKiBzbyBhbiBpbnZhbGlkIGNvbXBvbmVudCB3b3VsZCBub3QgaW5jcmVhc2UgdGhlIGluZGV4LlxuICAgKlxuICAgKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAgICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmdW5jLlxuICAgKiBAcGFyYW0geyp9IGNvbnRleHQgQ29udGV4dCBmb3IgZnVuYy5cbiAgICogQHJldHVybiB7b2JqZWN0fSBPYmplY3QgY29udGFpbmluZyB0aGUgb3JkZXJlZCBtYXAgb2YgcmVzdWx0cy5cbiAgICovXG4gIHN0YXRpYyBtYXAoY2hpbGRyZW4sIGZ1bmMsIGNvbnRleHQpIHtcbiAgICBsZXQgaW5kZXggPSAwO1xuXG4gICAgcmV0dXJuIFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgY2hpbGQgPT4ge1xuICAgICAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBpbmRleCsrKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJdGVyYXRlcyB0aHJvdWdoIGNoaWxkcmVuIHRoYXQgYXJlIFwidmFsaWQgY29tcG9uZW50c1wiLlxuICAgKlxuICAgKiBUaGUgcHJvdmlkZWQgZm9yRWFjaEZ1bmMoY2hpbGQsIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICAgKiBsZWFmIGNoaWxkIHdpdGggdGhlIGluZGV4IHJlZmxlY3RpbmcgdGhlIHBvc2l0aW9uIHJlbGF0aXZlIHRvIFwidmFsaWQgY29tcG9uZW50c1wiLlxuICAgKlxuICAgKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAgICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmdW5jLlxuICAgKiBAcGFyYW0geyp9IGNvbnRleHQgQ29udGV4dCBmb3IgY29udGV4dC5cbiAgICovXG4gIHN0YXRpYyBmb3JFYWNoKGNoaWxkcmVuLCBmdW5jLCBjb250ZXh0KSB7XG4gICAgbGV0IGluZGV4ID0gMDtcblxuICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGNoaWxkID0+IHtcbiAgICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBpbmRleCsrKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb3VudCB0aGUgbnVtYmVyIG9mIFwidmFsaWQgY29tcG9uZW50c1wiIGluIHRoZSBDaGlsZHJlbiBjb250YWluZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgc3RhdGljIGNvdW50KGNoaWxkcmVuKSB7XG4gICAgbGV0IHJlc3VsdCA9IDA7XG5cbiAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBjaGlsZCA9PiB7XG4gICAgICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgICsrcmVzdWx0O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kcyBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAsXG4gICAqIGJ1dCBvbmx5IGl0ZXJhdGVzIG92ZXIgY2hpbGRyZW4gdGhhdCBhcmUgXCJ2YWxpZCBjb21wb25lbnRzXCIuXG4gICAqXG4gICAqIFRoZSBwcm92aWRlZCBmb3JFYWNoRnVuYyhjaGlsZCwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gICAqIGxlYWYgY2hpbGQgd2l0aCB0aGUgaW5kZXggcmVmbGVjdGluZyB0aGUgcG9zaXRpb24gcmVsYXRpdmUgdG8gXCJ2YWxpZCBjb21wb25lbnRzXCIuXG4gICAqXG4gICAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZ1bmMuXG4gICAqIEBwYXJhbSB7Kn0gY29udGV4dCBDb250ZXh0IGZvciBmdW5jLlxuICAgKiBAcmV0dXJucyB7YXJyYXl9IG9mIGNoaWxkcmVuIHRoYXQgbWVldCB0aGUgZnVuYyByZXR1cm4gc3RhdGVtZW50XG4gICAqL1xuICBzdGF0aWMgZmlsdGVyKGNoaWxkcmVuLCBmdW5jLCBjb250ZXh0KSB7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBsZXQgcmVzdWx0ID0gW107XG5cbiAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBjaGlsZCA9PiB7XG4gICAgICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGluZGV4KyspKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGNoaWxkKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzdGF0aWMgZmluZChjaGlsZHJlbiwgZnVuYywgY29udGV4dCkge1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgbGV0IHJlc3VsdCA9IHVuZGVmaW5lZDtcblxuICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGNoaWxkID0+IHtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBpbmRleCsrKSkge1xuICAgICAgICByZXN1bHQgPSBjaGlsZDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzdGF0aWMgZXZlcnkoY2hpbGRyZW4sIGZ1bmMsIGNvbnRleHQpIHtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGxldCByZXN1bHQgPSB0cnVlO1xuXG4gICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgY2hpbGQgPT4ge1xuICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgaW5kZXgrKykpIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc3RhdGljIHNvbWUoY2hpbGRyZW4sIGZ1bmMsIGNvbnRleHQpIHtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGxldCByZXN1bHQgPSBmYWxzZTtcblxuICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGNoaWxkID0+IHtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBpbmRleCsrKSkge1xuICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHN0YXRpYyB0b0FycmF5KGNoaWxkcmVuKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG5cbiAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBjaGlsZCA9PiB7XG4gICAgICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJlc3VsdC5wdXNoKGNoaWxkKTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cbiJdfQ==