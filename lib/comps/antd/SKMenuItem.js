'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _antd = require('antd');

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

_antd.Menu.Item.propTypes = _skJs2.default.assign({}, _antd.Menu.Item.propTypes, {}, {
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

SKMenuItem.defaultProps = _skJs2.default.assign({}, _antd.Menu.Item.defaultProps, {
  compTag: _antd.Menu.Item
});
SKMenuItem.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _antd.Menu.Item.propTypes, {});
exports.default = SKMenuItem;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FudGQvU0tNZW51SXRlbS5qcyJdLCJuYW1lcyI6WyJJdGVtIiwicHJvcFR5cGVzIiwiYXNzaWduIiwiaW5saW5lSW5kZW50IiwiUHJvcFR5cGVzIiwibnVtYmVyIiwibGV2ZWwiLCJTS01lbnVJdGVtIiwiYXJncyIsImRlZmF1bHRQcm9wcyIsImNvbXBUYWciXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsV0FBS0EsSUFBTCxDQUFVQyxTQUFWLEdBQXNCLGVBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsV0FBS0YsSUFBTCxDQUFVQyxTQUF4QixFQUFtQyxFQUFuQyxFQUF1QztBQUMzREUsZ0JBQWMsZ0JBQU1DLFNBQU4sQ0FBZ0JDLE1BRDZCO0FBRTNEQyxTQUFPLGdCQUFNRixTQUFOLENBQWdCQztBQUZvQyxDQUF2QyxDQUF0Qjs7QUFLQTtBQUNBO0FBQ0E7O0lBRXFCRSxVOzs7QUFNbkIsd0JBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLDhJQUNWQSxJQURVO0FBRXBCOzs7OztBQVJrQkQsVSxDQUNaRSxZLEdBQWUsZUFBR1AsTUFBSCxDQUFVLEVBQVYsRUFBYyxXQUFLRixJQUFMLENBQVVTLFlBQXhCLEVBQXNDO0FBQzFEQyxXQUFTLFdBQUtWO0FBRDRDLENBQXRDLEM7QUFESE8sVSxDQUlaTixTLEdBQVksZUFBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxlQUFLRCxTQUFuQixFQUE4QixXQUFLRCxJQUFMLENBQVVDLFNBQXhDLEVBQW1ELEVBQW5ELEM7a0JBSkFNLFUiLCJmaWxlIjoiY29tcHMvYW50ZC9TS01lbnVJdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNZW51fSBmcm9tICdhbnRkJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU0sgZnJvbSAnc2stanMnO1xuaW1wb3J0IENvbXAgZnJvbSAnLi4vLi4vdXRpbHMvQ29tcCc7XG5cbk1lbnUuSXRlbS5wcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIE1lbnUuSXRlbS5wcm9wVHlwZXMsIHt9LCB7XG4gIGlubGluZUluZGVudDogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgbGV2ZWw6IFJlYWN0LlByb3BUeXBlcy5udW1iZXJcbn0pO1xuXG4vLyBNZW51Lkl0ZW0uZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCBNZW51Lkl0ZW0uZGVmYXVsdFByb3BzLCB7XG4vLyAgIGlubGluZUluZGVudDogMjRcbi8vIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS01lbnVJdGVtIGV4dGVuZHMgQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIE1lbnUuSXRlbS5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBNZW51Lkl0ZW1cbiAgfSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIENvbXAucHJvcFR5cGVzLCBNZW51Lkl0ZW0ucHJvcFR5cGVzLCB7fSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICB9XG59XG4iXX0=