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

_menu2.default.SubMenu.propTypes = _skJs.SK.assign({
  //https://github.com/react-component/menu/blob/master/src/SubMenu.jsx#L36
  onItemHover: _propTypes2.default.func
}, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9tZW51L1NLU3ViTWVudS5qcyJdLCJuYW1lcyI6WyJTdWJNZW51IiwiZGVmYXVsdFByb3BzIiwiYXNzaWduIiwiZGlzYWJsZWQiLCJwcm9wVHlwZXMiLCJvbkl0ZW1Ib3ZlciIsImZ1bmMiLCJib29sIiwidGl0bGUiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJub2RlIiwib25UaXRsZUNsaWNrIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwib25UaXRsZU1vdXNlRW50ZXIiLCJvblRpdGxlTW91c2VMZWF2ZSIsIlNLU3ViTWVudSIsImFyZ3MiLCJjb21wTmFtZSIsImNvbXBUYWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxlQUFLQSxPQUFMLENBQWFDLFlBQWIsR0FBNEIsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYztBQUN4Q0MsWUFBVTtBQUQ4QixDQUFkLEVBRXpCLHFCQUFXRixZQUZjLEVBRUEsZUFBS0QsT0FBTCxDQUFhQyxZQUZiLEVBRTJCLEVBRjNCLENBQTVCOztBQUlBLGVBQUtELE9BQUwsQ0FBYUksU0FBYixHQUF5QixTQUFHRixNQUFILENBQVU7QUFDakM7QUFDQUcsZUFBYSxvQkFBVUM7QUFGVSxDQUFWLEVBR3RCO0FBQ0Q7QUFDQTtBQUNBSCxZQUFVLG9CQUFVSSxJQUhuQjtBQUlEO0FBQ0FDLFNBQU8sb0JBQVVDLFNBQVYsQ0FBb0IsQ0FDekIsb0JBQVVDLE1BRGUsRUFFekIsb0JBQVVDLElBRmUsQ0FBcEIsQ0FMTjtBQVNEQyxnQkFBYyxvQkFBVU4sSUFUdkI7QUFVRDtBQUNBTyxnQkFBYyxvQkFBVVAsSUFYdkI7QUFZRFEsZ0JBQWMsb0JBQVVSLElBWnZCO0FBYURTLHFCQUFtQixvQkFBVVQsSUFiNUI7QUFjRFUscUJBQW1CLG9CQUFVVjtBQWQ1QixDQUhzQixFQWtCdEIscUJBQVdGLFNBbEJXLEVBa0JBLGVBQUtKLE9BQUwsQ0FBYUksU0FsQmIsRUFrQndCLEVBbEJ4QixDQUF6Qjs7SUFvQnFCYSxTOzs7QUFNbkIsdUJBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLGlKQUNWQSxJQURVOztBQUVuQixVQUFLQyxRQUFMLEdBQWdCLFdBQWhCO0FBRm1CO0FBR3BCOzs7OztBQVRrQkYsUyxDQUNaaEIsWSxHQUFlLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNELFlBQXZCLEVBQXFDLGVBQUtELE9BQUwsQ0FBYUMsWUFBbEQsRUFBZ0U7QUFDcEZtQixXQUFTLGVBQUtwQjtBQURzRSxDQUFoRSxDO0FBREhpQixTLENBSVpiLFMsR0FBWSxTQUFHRixNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTRSxTQUF2QixFQUFrQyxlQUFLSixPQUFMLENBQWFJLFNBQS9DLEVBQTBELEVBQTFELEM7a0JBSkFhLFMiLCJmaWxlIjoiY29tcC9hbnRkL21lbnUvU0tTdWJNZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNZW51fSBmcm9tICdhbnRkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTS30gZnJvbSAnc2stanMnO1xuaW1wb3J0IE9yaWdpbk1lbnUgZnJvbSAnLi9PcmlnaW5NZW51JztcbmltcG9ydCBBbnRkQ29tcCBmcm9tICcuLi9BbnRkQ29tcCc7XG5cbk1lbnUuU3ViTWVudS5kZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIHtcbiAgZGlzYWJsZWQ6IGZhbHNlXG59LCBPcmlnaW5NZW51LmRlZmF1bHRQcm9wcywgTWVudS5TdWJNZW51LmRlZmF1bHRQcm9wcywge30pO1xuXG5NZW51LlN1Yk1lbnUucHJvcFR5cGVzID0gU0suYXNzaWduKHtcbiAgLy9odHRwczovL2dpdGh1Yi5jb20vcmVhY3QtY29tcG9uZW50L21lbnUvYmxvYi9tYXN0ZXIvc3JjL1N1Yk1lbnUuanN4I0wzNlxuICBvbkl0ZW1Ib3ZlcjogUHJvcFR5cGVzLmZ1bmNcbn0sIHtcbiAgLy9odHRwczovL2FudC5kZXNpZ24vY29tcG9uZW50cy9tZW51LWNuLyNNZW51LlN1Yk1lbnVcbiAgLy8gY2hpbGRyZW46IFByb3BUeXBlcy5hcnJheSxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAvLyBrZXk6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRpdGxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5ub2RlXG4gIF0pLFxuICBvblRpdGxlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAvL2h0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1jb21wb25lbnQvbWVudSNtZW51c3VibWVudS1wcm9wc1xuICBvbk1vdXNlRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBvbk1vdXNlTGVhdmU6IFByb3BUeXBlcy5mdW5jLFxuICBvblRpdGxlTW91c2VFbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uVGl0bGVNb3VzZUxlYXZlOiBQcm9wVHlwZXMuZnVuY1xufSwgT3JpZ2luTWVudS5wcm9wVHlwZXMsIE1lbnUuU3ViTWVudS5wcm9wVHlwZXMsIHt9KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tTdWJNZW51IGV4dGVuZHMgQW50ZENvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5kZWZhdWx0UHJvcHMsIE1lbnUuU3ViTWVudS5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBNZW51LlN1Yk1lbnVcbiAgfSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLnByb3BUeXBlcywgTWVudS5TdWJNZW51LnByb3BUeXBlcywge30pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLmNvbXBOYW1lID0gJ1NLU3ViTWVudSc7XG4gIH1cbn1cbiJdfQ==