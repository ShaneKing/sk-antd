'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _menu = require('antd/lib/menu');

var _menu2 = _interopRequireDefault(_menu);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/menu/style');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _AntdComp2 = require('./AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_menu2.default.Item.defaultProps = _skJs.SK.assign({}, {
  disabled: false
}, _menu2.default.defaultProps, _menu2.default.Item.defaultProps, {});

_menu2.default.Item.propTypes = _skJs.SK.assign({}, {
  disabled: _propTypes2.default.bool
}, _menu2.default.propTypes, _menu2.default.Item.propTypes, {});

var SKMenuItem = function (_AntdComp) {
  _inherits(SKMenuItem, _AntdComp);

  function SKMenuItem() {
    var _ref;

    _classCallCheck(this, SKMenuItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SKMenuItem.__proto__ || Object.getPrototypeOf(SKMenuItem)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'SKMenuItem';
    return _this;
  }

  _createClass(SKMenuItem, [{
    key: 'allowTransProps2Self',
    value: function allowTransProps2Self() {
      return Object.keys(_menu2.default.propTypes);
    }
  }]);

  return SKMenuItem;
}(_AntdComp3.default);

SKMenuItem.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, _menu2.default.Item.defaultProps, {
  compTag: _menu2.default.Item
});
SKMenuItem.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _menu2.default.Item.propTypes, {});
exports.default = SKMenuItem;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9TS01lbnVJdGVtLmpzIl0sIm5hbWVzIjpbIkl0ZW0iLCJkZWZhdWx0UHJvcHMiLCJhc3NpZ24iLCJkaXNhYmxlZCIsInByb3BUeXBlcyIsImJvb2wiLCJTS01lbnVJdGVtIiwiYXJncyIsImNvbXBOYW1lIiwiT2JqZWN0Iiwia2V5cyIsImNvbXBUYWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxlQUFLQSxJQUFMLENBQVVDLFlBQVYsR0FBeUIsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYztBQUNyQ0MsWUFBVTtBQUQyQixDQUFkLEVBRXRCLGVBQUtGLFlBRmlCLEVBRUgsZUFBS0QsSUFBTCxDQUFVQyxZQUZQLEVBRXFCLEVBRnJCLENBQXpCOztBQUlBLGVBQUtELElBQUwsQ0FBVUksU0FBVixHQUFzQixTQUFHRixNQUFILENBQVUsRUFBVixFQUFjO0FBQ2xDQyxZQUFVLG9CQUFVRTtBQURjLENBQWQsRUFFbkIsZUFBS0QsU0FGYyxFQUVILGVBQUtKLElBQUwsQ0FBVUksU0FGUCxFQUVrQixFQUZsQixDQUF0Qjs7SUFJcUJFLFU7OztBQU9uQix3QkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsbUpBQ1ZBLElBRFU7O0FBRW5CLFVBQUtDLFFBQUwsR0FBZ0IsWUFBaEI7QUFGbUI7QUFHcEI7Ozs7MkNBRXNCO0FBQ3JCLGFBQU9DLE9BQU9DLElBQVAsQ0FBWSxlQUFLTixTQUFqQixDQUFQO0FBQ0Q7Ozs7OztBQWRrQkUsVSxDQUNaTCxZLEdBQWUsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0QsWUFBdkIsRUFBcUMsZUFBS0QsSUFBTCxDQUFVQyxZQUEvQyxFQUE2RDtBQUNqRlUsV0FBUyxlQUFLWDtBQURtRSxDQUE3RCxDO0FBREhNLFUsQ0FJWkYsUyxHQUFZLFNBQUdGLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNFLFNBQXZCLEVBQWtDLGVBQUtKLElBQUwsQ0FBVUksU0FBNUMsRUFBdUQsRUFBdkQsQztrQkFKQUUsVSIsImZpbGUiOiJjb21wL2FudGQvU0tNZW51SXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TWVudX0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U0t9IGZyb20gJ3NrLWpzJztcbmltcG9ydCBBbnRkQ29tcCBmcm9tICcuL0FudGRDb21wJztcblxuTWVudS5JdGVtLmRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwge1xuICBkaXNhYmxlZDogZmFsc2Vcbn0sIE1lbnUuZGVmYXVsdFByb3BzLCBNZW51Lkl0ZW0uZGVmYXVsdFByb3BzLCB7fSk7XG5cbk1lbnUuSXRlbS5wcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIHtcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sXG59LCBNZW51LnByb3BUeXBlcywgTWVudS5JdGVtLnByb3BUeXBlcywge30pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS01lbnVJdGVtIGV4dGVuZHMgQW50ZENvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5kZWZhdWx0UHJvcHMsIE1lbnUuSXRlbS5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBNZW51Lkl0ZW1cbiAgfSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLnByb3BUeXBlcywgTWVudS5JdGVtLnByb3BUeXBlcywge30pO1xuXG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnU0tNZW51SXRlbSc7XG4gIH1cblxuICBhbGxvd1RyYW5zUHJvcHMyU2VsZigpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoTWVudS5wcm9wVHlwZXMpO1xuICB9XG59XG4iXX0=