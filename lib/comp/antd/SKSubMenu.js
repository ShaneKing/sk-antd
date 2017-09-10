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
SKSubMenu.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _menu2.default.propTypes, _menu2.default.SubMenu.propTypes, {});
exports.default = SKSubMenu;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9TS1N1Yk1lbnUuanMiXSwibmFtZXMiOlsiU3ViTWVudSIsInByb3BUeXBlcyIsImFzc2lnbiIsImlubGluZUluZGVudCIsIlByb3BUeXBlcyIsIm51bWJlciIsImxldmVsIiwiU0tTdWJNZW51IiwiYXJncyIsImRlZmF1bHRQcm9wcyIsImNvbXBUYWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsZUFBS0EsT0FBTCxDQUFhQyxTQUFiLEdBQXlCLGVBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsZUFBS0YsT0FBTCxDQUFhQyxTQUEzQixFQUFzQyxFQUF0QyxFQUEwQztBQUNqRUUsZ0JBQWMsZ0JBQU1DLFNBQU4sQ0FBZ0JDLE1BRG1DO0FBRWpFQyxTQUFPLGdCQUFNRixTQUFOLENBQWdCQztBQUYwQyxDQUExQyxDQUF6Qjs7QUFLQTtBQUNBO0FBQ0E7O0lBRXFCRSxTOzs7QUFNbkIsdUJBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLDRJQUNWQSxJQURVO0FBRXBCOzs7OztBQVJrQkQsUyxDQUNaRSxZLEdBQWUsZUFBR1AsTUFBSCxDQUFVLEVBQVYsRUFBYyxlQUFLRixPQUFMLENBQWFTLFlBQTNCLEVBQXlDO0FBQzdEQyxXQUFTLGVBQUtWO0FBRCtDLENBQXpDLEM7QUFESE8sUyxDQUlaTixTLEdBQVksZUFBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxlQUFLRCxTQUFuQixFQUE4QixlQUFLQSxTQUFuQyxFQUE4QyxlQUFLRCxPQUFMLENBQWFDLFNBQTNELEVBQXNFLEVBQXRFLEM7a0JBSkFNLFMiLCJmaWxlIjoiY29tcC9hbnRkL1NLU3ViTWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TWVudX0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNLIGZyb20gJ3NrLWpzJztcbmltcG9ydCBDb21wIGZyb20gJy4uLy4uL3V0aWwvQ29tcCc7XG5cbk1lbnUuU3ViTWVudS5wcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIE1lbnUuU3ViTWVudS5wcm9wVHlwZXMsIHt9LCB7XG4gIGlubGluZUluZGVudDogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgbGV2ZWw6IFJlYWN0LlByb3BUeXBlcy5udW1iZXJcbn0pO1xuXG4vLyBNZW51LlN1Yk1lbnUuZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCBNZW51LlN1Yk1lbnUuZGVmYXVsdFByb3BzLCB7XG4vLyAgIGlubGluZUluZGVudDogMjRcbi8vIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS1N1Yk1lbnUgZXh0ZW5kcyBDb21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwgTWVudS5TdWJNZW51LmRlZmF1bHRQcm9wcywge1xuICAgIGNvbXBUYWc6IE1lbnUuU3ViTWVudVxuICB9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQ29tcC5wcm9wVHlwZXMsIE1lbnUucHJvcFR5cGVzLCBNZW51LlN1Yk1lbnUucHJvcFR5cGVzLCB7fSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICB9XG59XG4iXX0=