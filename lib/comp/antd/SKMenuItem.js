'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style2 = require('antd/lib/menu/style');

var _menu = require('antd/lib/menu');

var _menu2 = _interopRequireDefault(_menu);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _skJs2 = _interopRequireDefault(_skJs);

var _Comp2 = require('../../util/Comp');

var _Comp3 = _interopRequireDefault(_Comp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_menu2.default.Item.propTypes = _skJs2.default.assign({}, _menu2.default.Item.propTypes, {}, {
  inlineIndent: _react2.default.PropTypes.number,
  level: _react2.default.PropTypes.number
});

// Menu.Item.defaultProps = SK.assign({}, Menu.Item.defaultProps, {
//   inlineIndent: 24
// });

var SKMenuItem = function (_Comp) {
  _inherits(SKMenuItem, _Comp);

  function SKMenuItem() {
    var _ref;

    _classCallCheck(this, SKMenuItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(this, (_ref = SKMenuItem.__proto__ || Object.getPrototypeOf(SKMenuItem)).call.apply(_ref, [this].concat(args)));
  }

  return SKMenuItem;
}(_Comp3.default);

SKMenuItem.defaultProps = _skJs2.default.assign({}, _menu2.default.Item.defaultProps, {
  compTag: _menu2.default.Item
});
SKMenuItem.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _menu2.default.propTypes, _menu2.default.Item.propTypes, {});
exports.default = SKMenuItem;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9TS01lbnVJdGVtLmpzIl0sIm5hbWVzIjpbIkl0ZW0iLCJwcm9wVHlwZXMiLCJhc3NpZ24iLCJpbmxpbmVJbmRlbnQiLCJQcm9wVHlwZXMiLCJudW1iZXIiLCJsZXZlbCIsIlNLTWVudUl0ZW0iLCJhcmdzIiwiZGVmYXVsdFByb3BzIiwiY29tcFRhZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxlQUFLQSxJQUFMLENBQVVDLFNBQVYsR0FBc0IsZUFBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxlQUFLRixJQUFMLENBQVVDLFNBQXhCLEVBQW1DLEVBQW5DLEVBQXVDO0FBQzNERSxnQkFBYyxnQkFBTUMsU0FBTixDQUFnQkMsTUFENkI7QUFFM0RDLFNBQU8sZ0JBQU1GLFNBQU4sQ0FBZ0JDO0FBRm9DLENBQXZDLENBQXRCOztBQUtBO0FBQ0E7QUFDQTs7SUFFcUJFLFU7OztBQU1uQix3QkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsOElBQ1ZBLElBRFU7QUFFcEI7Ozs7O0FBUmtCRCxVLENBQ1pFLFksR0FBZSxlQUFHUCxNQUFILENBQVUsRUFBVixFQUFjLGVBQUtGLElBQUwsQ0FBVVMsWUFBeEIsRUFBc0M7QUFDMURDLFdBQVMsZUFBS1Y7QUFENEMsQ0FBdEMsQztBQURITyxVLENBSVpOLFMsR0FBWSxlQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLGVBQUtELFNBQW5CLEVBQThCLGVBQUtBLFNBQW5DLEVBQThDLGVBQUtELElBQUwsQ0FBVUMsU0FBeEQsRUFBbUUsRUFBbkUsQztrQkFKQU0sVSIsImZpbGUiOiJjb21wL2FudGQvU0tNZW51SXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TWVudX0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNLIGZyb20gJ3NrLWpzJztcbmltcG9ydCBDb21wIGZyb20gJy4uLy4uL3V0aWwvQ29tcCc7XG5cbk1lbnUuSXRlbS5wcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIE1lbnUuSXRlbS5wcm9wVHlwZXMsIHt9LCB7XG4gIGlubGluZUluZGVudDogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgbGV2ZWw6IFJlYWN0LlByb3BUeXBlcy5udW1iZXJcbn0pO1xuXG4vLyBNZW51Lkl0ZW0uZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCBNZW51Lkl0ZW0uZGVmYXVsdFByb3BzLCB7XG4vLyAgIGlubGluZUluZGVudDogMjRcbi8vIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS01lbnVJdGVtIGV4dGVuZHMgQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIE1lbnUuSXRlbS5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBNZW51Lkl0ZW1cbiAgfSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIENvbXAucHJvcFR5cGVzLCBNZW51LnByb3BUeXBlcywgTWVudS5JdGVtLnByb3BUeXBlcywge30pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgfVxufVxuIl19