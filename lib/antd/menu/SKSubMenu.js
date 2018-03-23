'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _menu = require('antd/lib/menu');

var _menu2 = _interopRequireDefault(_menu);

require('antd/lib/menu/style');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGQvbWVudS9TS1N1Yk1lbnUuanMiXSwibmFtZXMiOlsiU3ViTWVudSIsImRlZmF1bHRQcm9wcyIsImFzc2lnbiIsImRpc2FibGVkIiwicHJvcFR5cGVzIiwib25JdGVtSG92ZXIiLCJmdW5jIiwiYm9vbCIsInRpdGxlIiwib25lT2ZUeXBlIiwic3RyaW5nIiwibm9kZSIsIm9uVGl0bGVDbGljayIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsIm9uVGl0bGVNb3VzZUVudGVyIiwib25UaXRsZU1vdXNlTGVhdmUiLCJTS1N1Yk1lbnUiLCJhcmdzIiwiY29tcE5hbWUiLCJjb21wVGFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLGVBQUtBLE9BQUwsQ0FBYUMsWUFBYixHQUE0QixTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjO0FBQ3hDQyxZQUFVO0FBRDhCLENBQWQsRUFFekIscUJBQVdGLFlBRmMsRUFFQSxlQUFLRCxPQUFMLENBQWFDLFlBRmIsRUFFMkIsRUFGM0IsQ0FBNUI7O0FBSUEsZUFBS0QsT0FBTCxDQUFhSSxTQUFiLEdBQXlCLFNBQUdGLE1BQUgsQ0FBVTtBQUNqQztBQUNBRyxlQUFhLG9CQUFVQztBQUZVLENBQVYsRUFHdEI7QUFDRDtBQUNBO0FBQ0FILFlBQVUsb0JBQVVJLElBSG5CO0FBSUQ7QUFDQUMsU0FBTyxvQkFBVUMsU0FBVixDQUFvQixDQUN6QixvQkFBVUMsTUFEZSxFQUV6QixvQkFBVUMsSUFGZSxDQUFwQixDQUxOO0FBU0RDLGdCQUFjLG9CQUFVTixJQVR2QjtBQVVEO0FBQ0FPLGdCQUFjLG9CQUFVUCxJQVh2QjtBQVlEUSxnQkFBYyxvQkFBVVIsSUFadkI7QUFhRFMscUJBQW1CLG9CQUFVVCxJQWI1QjtBQWNEVSxxQkFBbUIsb0JBQVVWO0FBZDVCLENBSHNCLEVBa0J0QixxQkFBV0YsU0FsQlcsRUFrQkEsZUFBS0osT0FBTCxDQUFhSSxTQWxCYixFQWtCd0IsRUFsQnhCLENBQXpCOztJQW9CcUJhLFM7OztBQU1uQix1QkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsaUpBQ1ZBLElBRFU7O0FBRW5CLFVBQUtDLFFBQUwsR0FBZ0IsV0FBaEI7QUFGbUI7QUFHcEI7Ozs7O0FBVGtCRixTLENBQ1poQixZLEdBQWUsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0QsWUFBdkIsRUFBcUMsZUFBS0QsT0FBTCxDQUFhQyxZQUFsRCxFQUFnRTtBQUNwRm1CLFdBQVMsZUFBS3BCO0FBRHNFLENBQWhFLEM7QUFESGlCLFMsQ0FJWmIsUyxHQUFZLFNBQUdGLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNFLFNBQXZCLEVBQWtDLGVBQUtKLE9BQUwsQ0FBYUksU0FBL0MsRUFBMEQsRUFBMUQsQztrQkFKQWEsUyIsImZpbGUiOiJhbnRkL21lbnUvU0tTdWJNZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVudSB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFNLIH0gZnJvbSAnc2stanMnO1xuaW1wb3J0IE9yaWdpbk1lbnUgZnJvbSAnLi9PcmlnaW5NZW51JztcbmltcG9ydCBBbnRkQ29tcCBmcm9tICcuLi9BbnRkQ29tcCc7XG5cbk1lbnUuU3ViTWVudS5kZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIHtcbiAgZGlzYWJsZWQ6IGZhbHNlLFxufSwgT3JpZ2luTWVudS5kZWZhdWx0UHJvcHMsIE1lbnUuU3ViTWVudS5kZWZhdWx0UHJvcHMsIHt9KTtcblxuTWVudS5TdWJNZW51LnByb3BUeXBlcyA9IFNLLmFzc2lnbih7XG4gIC8vaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbXBvbmVudC9tZW51L2Jsb2IvbWFzdGVyL3NyYy9TdWJNZW51LmpzeCNMMzZcbiAgb25JdGVtSG92ZXI6IFByb3BUeXBlcy5mdW5jLFxufSwge1xuICAvL2h0dHBzOi8vYW50LmRlc2lnbi9jb21wb25lbnRzL21lbnUtY24vI01lbnUuU3ViTWVudVxuICAvLyBjaGlsZHJlbjogUHJvcFR5cGVzLmFycmF5LFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8vIGtleTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGl0bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm5vZGUsXG4gIF0pLFxuICBvblRpdGxlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAvL2h0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1jb21wb25lbnQvbWVudSNtZW51c3VibWVudS1wcm9wc1xuICBvbk1vdXNlRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBvbk1vdXNlTGVhdmU6IFByb3BUeXBlcy5mdW5jLFxuICBvblRpdGxlTW91c2VFbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uVGl0bGVNb3VzZUxlYXZlOiBQcm9wVHlwZXMuZnVuYyxcbn0sIE9yaWdpbk1lbnUucHJvcFR5cGVzLCBNZW51LlN1Yk1lbnUucHJvcFR5cGVzLCB7fSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNLU3ViTWVudSBleHRlbmRzIEFudGRDb21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAuZGVmYXVsdFByb3BzLCBNZW51LlN1Yk1lbnUuZGVmYXVsdFByb3BzLCB7XG4gICAgY29tcFRhZzogTWVudS5TdWJNZW51LFxuICB9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAucHJvcFR5cGVzLCBNZW51LlN1Yk1lbnUucHJvcFR5cGVzLCB7fSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnU0tTdWJNZW51JztcbiAgfVxufVxuIl19