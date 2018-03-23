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

_menu2.default.Item.defaultProps = _skJs.SK.assign({}, {
  disabled: false
}, _OriginMenu2.default.defaultProps, _menu2.default.Item.defaultProps, {});

_menu2.default.Item.propTypes = _skJs.SK.assign({
  //https://github.com/react-component/menu/blob/master/src/MenuItem.jsx#L21
  onItemHover: _propTypes2.default.func
}, {
  //https://ant.design/components/menu-cn/#Menu.Item
  disabled: _propTypes2.default.bool,
  //https://github.com/react-component/menu#menuitem-props
  onMouseEnter: _propTypes2.default.func,
  onMouseLeave: _propTypes2.default.func
}, _OriginMenu2.default.propTypes, _menu2.default.Item.propTypes, {});

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

  return SKMenuItem;
}(_AntdComp3.default);

SKMenuItem.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, _menu2.default.Item.defaultProps, {
  compTag: _menu2.default.Item
});
SKMenuItem.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _menu2.default.Item.propTypes, {});
exports.default = SKMenuItem;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGQvbWVudS9TS01lbnVJdGVtLmpzIl0sIm5hbWVzIjpbIkl0ZW0iLCJkZWZhdWx0UHJvcHMiLCJhc3NpZ24iLCJkaXNhYmxlZCIsInByb3BUeXBlcyIsIm9uSXRlbUhvdmVyIiwiZnVuYyIsImJvb2wiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJTS01lbnVJdGVtIiwiYXJncyIsImNvbXBOYW1lIiwiY29tcFRhZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxlQUFLQSxJQUFMLENBQVVDLFlBQVYsR0FBeUIsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYztBQUNyQ0MsWUFBVTtBQUQyQixDQUFkLEVBRXRCLHFCQUFXRixZQUZXLEVBRUcsZUFBS0QsSUFBTCxDQUFVQyxZQUZiLEVBRTJCLEVBRjNCLENBQXpCOztBQUlBLGVBQUtELElBQUwsQ0FBVUksU0FBVixHQUFzQixTQUFHRixNQUFILENBQVU7QUFDOUI7QUFDQUcsZUFBYSxvQkFBVUM7QUFGTyxDQUFWLEVBR25CO0FBQ0Q7QUFDQUgsWUFBVSxvQkFBVUksSUFGbkI7QUFHRDtBQUNBQyxnQkFBYyxvQkFBVUYsSUFKdkI7QUFLREcsZ0JBQWMsb0JBQVVIO0FBTHZCLENBSG1CLEVBU25CLHFCQUFXRixTQVRRLEVBU0csZUFBS0osSUFBTCxDQUFVSSxTQVRiLEVBU3dCLEVBVHhCLENBQXRCOztJQVdxQk0sVTs7O0FBTW5CLHdCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSxtSkFDVkEsSUFEVTs7QUFFbkIsVUFBS0MsUUFBTCxHQUFnQixZQUFoQjtBQUZtQjtBQUdwQjs7Ozs7QUFUa0JGLFUsQ0FDWlQsWSxHQUFlLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNELFlBQXZCLEVBQXFDLGVBQUtELElBQUwsQ0FBVUMsWUFBL0MsRUFBNkQ7QUFDakZZLFdBQVMsZUFBS2I7QUFEbUUsQ0FBN0QsQztBQURIVSxVLENBSVpOLFMsR0FBWSxTQUFHRixNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTRSxTQUF2QixFQUFrQyxlQUFLSixJQUFMLENBQVVJLFNBQTVDLEVBQXVELEVBQXZELEM7a0JBSkFNLFUiLCJmaWxlIjoiYW50ZC9tZW51L1NLTWVudUl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZW51IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgU0sgfSBmcm9tICdzay1qcyc7XG5pbXBvcnQgT3JpZ2luTWVudSBmcm9tICcuL09yaWdpbk1lbnUnO1xuaW1wb3J0IEFudGRDb21wIGZyb20gJy4uL0FudGRDb21wJztcblxuTWVudS5JdGVtLmRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwge1xuICBkaXNhYmxlZDogZmFsc2UsXG59LCBPcmlnaW5NZW51LmRlZmF1bHRQcm9wcywgTWVudS5JdGVtLmRlZmF1bHRQcm9wcywge30pO1xuXG5NZW51Lkl0ZW0ucHJvcFR5cGVzID0gU0suYXNzaWduKHtcbiAgLy9odHRwczovL2dpdGh1Yi5jb20vcmVhY3QtY29tcG9uZW50L21lbnUvYmxvYi9tYXN0ZXIvc3JjL01lbnVJdGVtLmpzeCNMMjFcbiAgb25JdGVtSG92ZXI6IFByb3BUeXBlcy5mdW5jLFxufSwge1xuICAvL2h0dHBzOi8vYW50LmRlc2lnbi9jb21wb25lbnRzL21lbnUtY24vI01lbnUuSXRlbVxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8vaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbXBvbmVudC9tZW51I21lbnVpdGVtLXByb3BzXG4gIG9uTW91c2VFbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uTW91c2VMZWF2ZTogUHJvcFR5cGVzLmZ1bmMsXG59LCBPcmlnaW5NZW51LnByb3BUeXBlcywgTWVudS5JdGVtLnByb3BUeXBlcywge30pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS01lbnVJdGVtIGV4dGVuZHMgQW50ZENvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5kZWZhdWx0UHJvcHMsIE1lbnUuSXRlbS5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBNZW51Lkl0ZW0sXG4gIH0pO1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5wcm9wVHlwZXMsIE1lbnUuSXRlbS5wcm9wVHlwZXMsIHt9KTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5jb21wTmFtZSA9ICdTS01lbnVJdGVtJztcbiAgfVxufVxuIl19