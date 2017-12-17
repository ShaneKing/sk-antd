'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _menu = require('antd/lib/menu');

var _menu2 = _interopRequireDefault(_menu);

require('antd/lib/menu/style');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _OriginMenu = require('./OriginMenu');

var _OriginMenu2 = _interopRequireDefault(_OriginMenu);

var _AntdComp2 = require('../AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_menu2.default.SubMenu.defaultProps = _skJs.SK.assign({}, {
  disabled: false
}, _OriginMenu2.default.defaultProps, _menu2.default.SubMenu.defaultProps, {});

_menu2.default.SubMenu.propTypes = _skJs.SK.assign({}, {
  //https://ant.design/components/menu-cn/#Menu.SubMenu
  // children: PropTypes.array,
  disabled: _propTypes2.default.bool,
  // key: PropTypes.string,
  title: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  onTitleClick: _propTypes2.default.func,
  //https://github.com/react-component/menu#menusubmenu-props
  onMouseEnter: _propTypes2.default.func,
  onMouseLeave: _propTypes2.default.func,
  onTitleMouseEnter: _propTypes2.default.func,
  onTitleMouseLeave: _propTypes2.default.func
}, _OriginMenu2.default.propTypes, _menu2.default.SubMenu.propTypes, {});

var SKSubMenu = function (_AntdComp) {
  _inherits(SKSubMenu, _AntdComp);

  function SKSubMenu() {
    var _ref;

    _classCallCheck(this, SKSubMenu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SKSubMenu.__proto__ || Object.getPrototypeOf(SKSubMenu)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'SKSubMenu';
    return _this;
  }

  return SKSubMenu;
}(_AntdComp3.default);

SKSubMenu.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, _menu2.default.SubMenu.defaultProps, {
  compTag: _menu2.default.SubMenu
});
SKSubMenu.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _menu2.default.SubMenu.propTypes, {});
exports.default = SKSubMenu;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9tZW51L1NLU3ViTWVudS5qcyJdLCJuYW1lcyI6WyJTdWJNZW51IiwiZGVmYXVsdFByb3BzIiwiYXNzaWduIiwiZGlzYWJsZWQiLCJwcm9wVHlwZXMiLCJib29sIiwidGl0bGUiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJub2RlIiwib25UaXRsZUNsaWNrIiwiZnVuYyIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsIm9uVGl0bGVNb3VzZUVudGVyIiwib25UaXRsZU1vdXNlTGVhdmUiLCJTS1N1Yk1lbnUiLCJhcmdzIiwiY29tcE5hbWUiLCJjb21wVGFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsZUFBS0EsT0FBTCxDQUFhQyxZQUFiLEdBQTRCLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWM7QUFDeENDLFlBQVU7QUFEOEIsQ0FBZCxFQUV6QixxQkFBV0YsWUFGYyxFQUVBLGVBQUtELE9BQUwsQ0FBYUMsWUFGYixFQUUyQixFQUYzQixDQUE1Qjs7QUFJQSxlQUFLRCxPQUFMLENBQWFJLFNBQWIsR0FBeUIsU0FBR0YsTUFBSCxDQUFVLEVBQVYsRUFBYztBQUNyQztBQUNBO0FBQ0FDLFlBQVUsb0JBQVVFLElBSGlCO0FBSXJDO0FBQ0FDLFNBQU8sb0JBQVVDLFNBQVYsQ0FBb0IsQ0FDekIsb0JBQVVDLE1BRGUsRUFFekIsb0JBQVVDLElBRmUsQ0FBcEIsQ0FMOEI7QUFTckNDLGdCQUFjLG9CQUFVQyxJQVRhO0FBVXJDO0FBQ0FDLGdCQUFjLG9CQUFVRCxJQVhhO0FBWXJDRSxnQkFBYyxvQkFBVUYsSUFaYTtBQWFyQ0cscUJBQW1CLG9CQUFVSCxJQWJRO0FBY3JDSSxxQkFBbUIsb0JBQVVKO0FBZFEsQ0FBZCxFQWV0QixxQkFBV1AsU0FmVyxFQWVBLGVBQUtKLE9BQUwsQ0FBYUksU0FmYixFQWV3QixFQWZ4QixDQUF6Qjs7SUFpQnFCWSxTOzs7QUFPbkIsdUJBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLGlKQUNWQSxJQURVOztBQUVuQixVQUFLQyxRQUFMLEdBQWdCLFdBQWhCO0FBRm1CO0FBR3BCOzs7OztBQVZrQkYsUyxDQUNaZixZLEdBQWUsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0QsWUFBdkIsRUFBcUMsZUFBS0QsT0FBTCxDQUFhQyxZQUFsRCxFQUFnRTtBQUNwRmtCLFdBQVMsZUFBS25CO0FBRHNFLENBQWhFLEM7QUFESGdCLFMsQ0FJWlosUyxHQUFZLFNBQUdGLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNFLFNBQXZCLEVBQWtDLGVBQUtKLE9BQUwsQ0FBYUksU0FBL0MsRUFBMEQsRUFBMUQsQztrQkFKQVksUyIsImZpbGUiOiJjb21wL2FudGQvbWVudS9TS1N1Yk1lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01lbnV9IGZyb20gJ2FudGQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1NLfSBmcm9tICdzay1qcyc7XG5pbXBvcnQgT3JpZ2luTWVudSBmcm9tICcuL09yaWdpbk1lbnUnO1xuaW1wb3J0IEFudGRDb21wIGZyb20gJy4uL0FudGRDb21wJztcblxuTWVudS5TdWJNZW51LmRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwge1xuICBkaXNhYmxlZDogZmFsc2Vcbn0sIE9yaWdpbk1lbnUuZGVmYXVsdFByb3BzLCBNZW51LlN1Yk1lbnUuZGVmYXVsdFByb3BzLCB7fSk7XG5cbk1lbnUuU3ViTWVudS5wcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIHtcbiAgLy9odHRwczovL2FudC5kZXNpZ24vY29tcG9uZW50cy9tZW51LWNuLyNNZW51LlN1Yk1lbnVcbiAgLy8gY2hpbGRyZW46IFByb3BUeXBlcy5hcnJheSxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAvLyBrZXk6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRpdGxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5ub2RlXG4gIF0pLFxuICBvblRpdGxlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAvL2h0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1jb21wb25lbnQvbWVudSNtZW51c3VibWVudS1wcm9wc1xuICBvbk1vdXNlRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBvbk1vdXNlTGVhdmU6IFByb3BUeXBlcy5mdW5jLFxuICBvblRpdGxlTW91c2VFbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uVGl0bGVNb3VzZUxlYXZlOiBQcm9wVHlwZXMuZnVuY1xufSwgT3JpZ2luTWVudS5wcm9wVHlwZXMsIE1lbnUuU3ViTWVudS5wcm9wVHlwZXMsIHt9KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tTdWJNZW51IGV4dGVuZHMgQW50ZENvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5kZWZhdWx0UHJvcHMsIE1lbnUuU3ViTWVudS5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBNZW51LlN1Yk1lbnVcbiAgfSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLnByb3BUeXBlcywgTWVudS5TdWJNZW51LnByb3BUeXBlcywge30pO1xuXG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnU0tTdWJNZW51JztcbiAgfVxufVxuIl19