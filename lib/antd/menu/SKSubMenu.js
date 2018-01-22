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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGQvbWVudS9TS1N1Yk1lbnUuanMiXSwibmFtZXMiOlsiU3ViTWVudSIsImRlZmF1bHRQcm9wcyIsImFzc2lnbiIsImRpc2FibGVkIiwicHJvcFR5cGVzIiwib25JdGVtSG92ZXIiLCJmdW5jIiwiYm9vbCIsInRpdGxlIiwib25lT2ZUeXBlIiwic3RyaW5nIiwibm9kZSIsIm9uVGl0bGVDbGljayIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsIm9uVGl0bGVNb3VzZUVudGVyIiwib25UaXRsZU1vdXNlTGVhdmUiLCJTS1N1Yk1lbnUiLCJhcmdzIiwiY29tcE5hbWUiLCJjb21wVGFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsZUFBS0EsT0FBTCxDQUFhQyxZQUFiLEdBQTRCLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWM7QUFDeENDLFlBQVU7QUFEOEIsQ0FBZCxFQUV6QixxQkFBV0YsWUFGYyxFQUVBLGVBQUtELE9BQUwsQ0FBYUMsWUFGYixFQUUyQixFQUYzQixDQUE1Qjs7QUFJQSxlQUFLRCxPQUFMLENBQWFJLFNBQWIsR0FBeUIsU0FBR0YsTUFBSCxDQUFVO0FBQ2pDO0FBQ0FHLGVBQWEsb0JBQVVDO0FBRlUsQ0FBVixFQUd0QjtBQUNEO0FBQ0E7QUFDQUgsWUFBVSxvQkFBVUksSUFIbkI7QUFJRDtBQUNBQyxTQUFPLG9CQUFVQyxTQUFWLENBQW9CLENBQ3pCLG9CQUFVQyxNQURlLEVBRXpCLG9CQUFVQyxJQUZlLENBQXBCLENBTE47QUFTREMsZ0JBQWMsb0JBQVVOLElBVHZCO0FBVUQ7QUFDQU8sZ0JBQWMsb0JBQVVQLElBWHZCO0FBWURRLGdCQUFjLG9CQUFVUixJQVp2QjtBQWFEUyxxQkFBbUIsb0JBQVVULElBYjVCO0FBY0RVLHFCQUFtQixvQkFBVVY7QUFkNUIsQ0FIc0IsRUFrQnRCLHFCQUFXRixTQWxCVyxFQWtCQSxlQUFLSixPQUFMLENBQWFJLFNBbEJiLEVBa0J3QixFQWxCeEIsQ0FBekI7O0lBb0JxQmEsUzs7O0FBTW5CLHVCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSxpSkFDVkEsSUFEVTs7QUFFbkIsVUFBS0MsUUFBTCxHQUFnQixXQUFoQjtBQUZtQjtBQUdwQjs7Ozs7QUFUa0JGLFMsQ0FDWmhCLFksR0FBZSxTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTRCxZQUF2QixFQUFxQyxlQUFLRCxPQUFMLENBQWFDLFlBQWxELEVBQWdFO0FBQ3BGbUIsV0FBUyxlQUFLcEI7QUFEc0UsQ0FBaEUsQztBQURIaUIsUyxDQUlaYixTLEdBQVksU0FBR0YsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0UsU0FBdkIsRUFBa0MsZUFBS0osT0FBTCxDQUFhSSxTQUEvQyxFQUEwRCxFQUExRCxDO2tCQUpBYSxTIiwiZmlsZSI6ImFudGQvbWVudS9TS1N1Yk1lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01lbnV9IGZyb20gJ2FudGQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1NLfSBmcm9tICdzay1qcyc7XG5pbXBvcnQgT3JpZ2luTWVudSBmcm9tICcuL09yaWdpbk1lbnUnO1xuaW1wb3J0IEFudGRDb21wIGZyb20gJy4uL0FudGRDb21wJztcblxuTWVudS5TdWJNZW51LmRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwge1xuICBkaXNhYmxlZDogZmFsc2Vcbn0sIE9yaWdpbk1lbnUuZGVmYXVsdFByb3BzLCBNZW51LlN1Yk1lbnUuZGVmYXVsdFByb3BzLCB7fSk7XG5cbk1lbnUuU3ViTWVudS5wcm9wVHlwZXMgPSBTSy5hc3NpZ24oe1xuICAvL2h0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1jb21wb25lbnQvbWVudS9ibG9iL21hc3Rlci9zcmMvU3ViTWVudS5qc3gjTDM2XG4gIG9uSXRlbUhvdmVyOiBQcm9wVHlwZXMuZnVuY1xufSwge1xuICAvL2h0dHBzOi8vYW50LmRlc2lnbi9jb21wb25lbnRzL21lbnUtY24vI01lbnUuU3ViTWVudVxuICAvLyBjaGlsZHJlbjogUHJvcFR5cGVzLmFycmF5LFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8vIGtleTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGl0bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm5vZGVcbiAgXSksXG4gIG9uVGl0bGVDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIC8vaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbXBvbmVudC9tZW51I21lbnVzdWJtZW51LXByb3BzXG4gIG9uTW91c2VFbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uTW91c2VMZWF2ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uVGl0bGVNb3VzZUVudGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25UaXRsZU1vdXNlTGVhdmU6IFByb3BUeXBlcy5mdW5jXG59LCBPcmlnaW5NZW51LnByb3BUeXBlcywgTWVudS5TdWJNZW51LnByb3BUeXBlcywge30pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS1N1Yk1lbnUgZXh0ZW5kcyBBbnRkQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLmRlZmF1bHRQcm9wcywgTWVudS5TdWJNZW51LmRlZmF1bHRQcm9wcywge1xuICAgIGNvbXBUYWc6IE1lbnUuU3ViTWVudVxuICB9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAucHJvcFR5cGVzLCBNZW51LlN1Yk1lbnUucHJvcFR5cGVzLCB7fSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnU0tTdWJNZW51JztcbiAgfVxufVxuIl19