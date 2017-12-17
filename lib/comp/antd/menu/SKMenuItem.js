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

_menu2.default.Item.defaultProps = _skJs.SK.assign({}, {
  disabled: false
}, _OriginMenu2.default.defaultProps, _menu2.default.Item.defaultProps, {});

_menu2.default.Item.propTypes = _skJs.SK.assign({}, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9tZW51L1NLTWVudUl0ZW0uanMiXSwibmFtZXMiOlsiSXRlbSIsImRlZmF1bHRQcm9wcyIsImFzc2lnbiIsImRpc2FibGVkIiwicHJvcFR5cGVzIiwiYm9vbCIsIm9uTW91c2VFbnRlciIsImZ1bmMiLCJvbk1vdXNlTGVhdmUiLCJTS01lbnVJdGVtIiwiYXJncyIsImNvbXBOYW1lIiwiY29tcFRhZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLGVBQUtBLElBQUwsQ0FBVUMsWUFBVixHQUF5QixTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjO0FBQ3JDQyxZQUFVO0FBRDJCLENBQWQsRUFFdEIscUJBQVdGLFlBRlcsRUFFRyxlQUFLRCxJQUFMLENBQVVDLFlBRmIsRUFFMkIsRUFGM0IsQ0FBekI7O0FBSUEsZUFBS0QsSUFBTCxDQUFVSSxTQUFWLEdBQXNCLFNBQUdGLE1BQUgsQ0FBVSxFQUFWLEVBQWM7QUFDbEM7QUFDQUMsWUFBVSxvQkFBVUUsSUFGYztBQUdsQztBQUNBQyxnQkFBYyxvQkFBVUMsSUFKVTtBQUtsQ0MsZ0JBQWMsb0JBQVVEO0FBTFUsQ0FBZCxFQU1uQixxQkFBV0gsU0FOUSxFQU1HLGVBQUtKLElBQUwsQ0FBVUksU0FOYixFQU13QixFQU54QixDQUF0Qjs7SUFRcUJLLFU7OztBQU9uQix3QkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsbUpBQ1ZBLElBRFU7O0FBRW5CLFVBQUtDLFFBQUwsR0FBZ0IsWUFBaEI7QUFGbUI7QUFHcEI7Ozs7O0FBVmtCRixVLENBQ1pSLFksR0FBZSxTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTRCxZQUF2QixFQUFxQyxlQUFLRCxJQUFMLENBQVVDLFlBQS9DLEVBQTZEO0FBQ2pGVyxXQUFTLGVBQUtaO0FBRG1FLENBQTdELEM7QUFESFMsVSxDQUlaTCxTLEdBQVksU0FBR0YsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0UsU0FBdkIsRUFBa0MsZUFBS0osSUFBTCxDQUFVSSxTQUE1QyxFQUF1RCxFQUF2RCxDO2tCQUpBSyxVIiwiZmlsZSI6ImNvbXAvYW50ZC9tZW51L1NLTWVudUl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01lbnV9IGZyb20gJ2FudGQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1NLfSBmcm9tICdzay1qcyc7XG5pbXBvcnQgT3JpZ2luTWVudSBmcm9tICcuL09yaWdpbk1lbnUnO1xuaW1wb3J0IEFudGRDb21wIGZyb20gJy4uL0FudGRDb21wJztcblxuTWVudS5JdGVtLmRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwge1xuICBkaXNhYmxlZDogZmFsc2Vcbn0sIE9yaWdpbk1lbnUuZGVmYXVsdFByb3BzLCBNZW51Lkl0ZW0uZGVmYXVsdFByb3BzLCB7fSk7XG5cbk1lbnUuSXRlbS5wcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIHtcbiAgLy9odHRwczovL2FudC5kZXNpZ24vY29tcG9uZW50cy9tZW51LWNuLyNNZW51Lkl0ZW1cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAvL2h0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1jb21wb25lbnQvbWVudSNtZW51aXRlbS1wcm9wc1xuICBvbk1vdXNlRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBvbk1vdXNlTGVhdmU6IFByb3BUeXBlcy5mdW5jXG59LCBPcmlnaW5NZW51LnByb3BUeXBlcywgTWVudS5JdGVtLnByb3BUeXBlcywge30pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS01lbnVJdGVtIGV4dGVuZHMgQW50ZENvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5kZWZhdWx0UHJvcHMsIE1lbnUuSXRlbS5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBNZW51Lkl0ZW1cbiAgfSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLnByb3BUeXBlcywgTWVudS5JdGVtLnByb3BUeXBlcywge30pO1xuXG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnU0tNZW51SXRlbSc7XG4gIH1cbn1cbiJdfQ==