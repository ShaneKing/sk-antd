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

var _Comp2 = require('../../utils/Comp');

var _Comp3 = _interopRequireDefault(_Comp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_menu2.default.SubMenu.propTypes = _skJs2.default.assign({}, _menu2.default.SubMenu.propTypes, {}, {
  inlineIndent: _react2.default.PropTypes.number,
  level: _react2.default.PropTypes.number
});

// Menu.SubMenu.defaultProps = SK.assign({}, Menu.SubMenu.defaultProps, {
//   inlineIndent: 24
// });

var SKSubMenu = function (_Comp) {
  _inherits(SKSubMenu, _Comp);

  function SKSubMenu() {
    var _ref;

    _classCallCheck(this, SKSubMenu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(this, (_ref = SKSubMenu.__proto__ || Object.getPrototypeOf(SKSubMenu)).call.apply(_ref, [this].concat(args)));
  }

  return SKSubMenu;
}(_Comp3.default);

SKSubMenu.defaultProps = _skJs2.default.assign({}, _menu2.default.SubMenu.defaultProps, {
  compTag: _menu2.default.SubMenu
});
SKSubMenu.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _menu2.default.SubMenu.propTypes, {});
exports.default = SKSubMenu;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FudGQvU0tTdWJNZW51LmpzIl0sIm5hbWVzIjpbIlN1Yk1lbnUiLCJwcm9wVHlwZXMiLCJhc3NpZ24iLCJpbmxpbmVJbmRlbnQiLCJQcm9wVHlwZXMiLCJudW1iZXIiLCJsZXZlbCIsIlNLU3ViTWVudSIsImFyZ3MiLCJkZWZhdWx0UHJvcHMiLCJjb21wVGFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLGVBQUtBLE9BQUwsQ0FBYUMsU0FBYixHQUF5QixlQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLGVBQUtGLE9BQUwsQ0FBYUMsU0FBM0IsRUFBc0MsRUFBdEMsRUFBMEM7QUFDakVFLGdCQUFjLGdCQUFNQyxTQUFOLENBQWdCQyxNQURtQztBQUVqRUMsU0FBTyxnQkFBTUYsU0FBTixDQUFnQkM7QUFGMEMsQ0FBMUMsQ0FBekI7O0FBS0E7QUFDQTtBQUNBOztJQUVxQkUsUzs7O0FBTW5CLHVCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSw0SUFDVkEsSUFEVTtBQUVwQjs7Ozs7QUFSa0JELFMsQ0FDWkUsWSxHQUFlLGVBQUdQLE1BQUgsQ0FBVSxFQUFWLEVBQWMsZUFBS0YsT0FBTCxDQUFhUyxZQUEzQixFQUF5QztBQUM3REMsV0FBUyxlQUFLVjtBQUQrQyxDQUF6QyxDO0FBREhPLFMsQ0FJWk4sUyxHQUFZLGVBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsZUFBS0QsU0FBbkIsRUFBOEIsZUFBS0QsT0FBTCxDQUFhQyxTQUEzQyxFQUFzRCxFQUF0RCxDO2tCQUpBTSxTIiwiZmlsZSI6ImNvbXBzL2FudGQvU0tTdWJNZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNZW51fSBmcm9tICdhbnRkJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU0sgZnJvbSAnc2stanMnO1xuaW1wb3J0IENvbXAgZnJvbSAnLi4vLi4vdXRpbHMvQ29tcCc7XG5cbk1lbnUuU3ViTWVudS5wcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIE1lbnUuU3ViTWVudS5wcm9wVHlwZXMsIHt9LCB7XG4gIGlubGluZUluZGVudDogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgbGV2ZWw6IFJlYWN0LlByb3BUeXBlcy5udW1iZXJcbn0pO1xuXG4vLyBNZW51LlN1Yk1lbnUuZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCBNZW51LlN1Yk1lbnUuZGVmYXVsdFByb3BzLCB7XG4vLyAgIGlubGluZUluZGVudDogMjRcbi8vIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS1N1Yk1lbnUgZXh0ZW5kcyBDb21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwgTWVudS5TdWJNZW51LmRlZmF1bHRQcm9wcywge1xuICAgIGNvbXBUYWc6IE1lbnUuU3ViTWVudVxuICB9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQ29tcC5wcm9wVHlwZXMsIE1lbnUuU3ViTWVudS5wcm9wVHlwZXMsIHt9KTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gIH1cbn1cbiJdfQ==