'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _layout = require('antd/lib/layout');

var _layout2 = _interopRequireDefault(_layout);

require('antd/lib/layout/style');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _AntdComp2 = require('../AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

var _Const = require('../../Const');

var _OriginLayout = require('./OriginLayout');

var _OriginLayout2 = _interopRequireDefault(_OriginLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_layout2.default.Sider.defaultProps = _skJs.SK.assign({}, {
  collapsedWidth: 64,
  collapsible: false,
  defaultCollapsed: false,
  reverseArrow: false,
  width: 200
}, _OriginLayout2.default.defaultProps, _layout2.default.Sider.defaultProps, {});

_layout2.default.Sider.propTypes = _skJs.SK.assign({}, {
  //https://ant.design/components/layout-cn/#Layout.Sider
  breakpoint: _propTypes2.default.oneOf(Object.values(_Const.BREAKPOINT)),
  className: _propTypes2.default.string,
  collapsed: _propTypes2.default.bool,
  collapsedWidth: _propTypes2.default.number,
  collapsible: _propTypes2.default.bool,
  defaultCollapsed: _propTypes2.default.bool,
  reverseArrow: _propTypes2.default.bool,
  style: _propTypes2.default.object,
  trigger: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  width: _propTypes2.default.number,
  onCollapse: _propTypes2.default.func
}, _OriginLayout2.default.propTypes, _layout2.default.Sider.propTypes, {});

var SKSider = function (_AntdComp) {
  _inherits(SKSider, _AntdComp);

  function SKSider() {
    var _ref;

    _classCallCheck(this, SKSider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SKSider.__proto__ || Object.getPrototypeOf(SKSider)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'SKSider';
    return _this;
  }

  return SKSider;
}(_AntdComp3.default);

SKSider.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, _layout2.default.Sider.defaultProps, {
  compTag: _layout2.default.Sider
});
SKSider.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _layout2.default.Sider.propTypes, {});
exports.default = SKSider;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGQvbGF5b3V0L1NLU2lkZXIuanMiXSwibmFtZXMiOlsiU2lkZXIiLCJkZWZhdWx0UHJvcHMiLCJhc3NpZ24iLCJjb2xsYXBzZWRXaWR0aCIsImNvbGxhcHNpYmxlIiwiZGVmYXVsdENvbGxhcHNlZCIsInJldmVyc2VBcnJvdyIsIndpZHRoIiwicHJvcFR5cGVzIiwiYnJlYWtwb2ludCIsIm9uZU9mIiwiT2JqZWN0IiwidmFsdWVzIiwiY2xhc3NOYW1lIiwic3RyaW5nIiwiY29sbGFwc2VkIiwiYm9vbCIsIm51bWJlciIsInN0eWxlIiwib2JqZWN0IiwidHJpZ2dlciIsIm9uZU9mVHlwZSIsIm5vZGUiLCJvbkNvbGxhcHNlIiwiZnVuYyIsIlNLU2lkZXIiLCJhcmdzIiwiY29tcE5hbWUiLCJjb21wVGFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsaUJBQU9BLEtBQVAsQ0FBYUMsWUFBYixHQUE0QixTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjO0FBQ3hDQyxrQkFBZ0IsRUFEd0I7QUFFeENDLGVBQWEsS0FGMkI7QUFHeENDLG9CQUFrQixLQUhzQjtBQUl4Q0MsZ0JBQWMsS0FKMEI7QUFLeENDLFNBQU87QUFMaUMsQ0FBZCxFQU16Qix1QkFBYU4sWUFOWSxFQU1FLGlCQUFPRCxLQUFQLENBQWFDLFlBTmYsRUFNNkIsRUFON0IsQ0FBNUI7O0FBUUEsaUJBQU9ELEtBQVAsQ0FBYVEsU0FBYixHQUF5QixTQUFHTixNQUFILENBQVUsRUFBVixFQUFjO0FBQ3JDO0FBQ0FPLGNBQVksb0JBQVVDLEtBQVYsQ0FBZ0JDLE9BQU9DLE1BQVAsbUJBQWhCLENBRnlCO0FBR3JDQyxhQUFXLG9CQUFVQyxNQUhnQjtBQUlyQ0MsYUFBVyxvQkFBVUMsSUFKZ0I7QUFLckNiLGtCQUFnQixvQkFBVWMsTUFMVztBQU1yQ2IsZUFBYSxvQkFBVVksSUFOYztBQU9yQ1gsb0JBQWtCLG9CQUFVVyxJQVBTO0FBUXJDVixnQkFBYyxvQkFBVVUsSUFSYTtBQVNyQ0UsU0FBTyxvQkFBVUMsTUFUb0I7QUFVckNDLFdBQVMsb0JBQVVDLFNBQVYsQ0FBb0IsQ0FDM0Isb0JBQVVQLE1BRGlCLEVBRTNCLG9CQUFVUSxJQUZpQixDQUFwQixDQVY0QjtBQWNyQ2YsU0FBTyxvQkFBVVUsTUFkb0I7QUFlckNNLGNBQVksb0JBQVVDO0FBZmUsQ0FBZCxFQWdCdEIsdUJBQWFoQixTQWhCUyxFQWdCRSxpQkFBT1IsS0FBUCxDQUFhUSxTQWhCZixFQWdCMEIsRUFoQjFCLENBQXpCOztJQWtCcUJpQixPOzs7QUFNbkIscUJBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLDZJQUNWQSxJQURVOztBQUVuQixVQUFLQyxRQUFMLEdBQWdCLFNBQWhCO0FBRm1CO0FBR3BCOzs7OztBQVRrQkYsTyxDQUNaeEIsWSxHQUFlLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNELFlBQXZCLEVBQXFDLGlCQUFPRCxLQUFQLENBQWFDLFlBQWxELEVBQWdFO0FBQ3BGMkIsV0FBUyxpQkFBTzVCO0FBRG9FLENBQWhFLEM7QUFESHlCLE8sQ0FJWmpCLFMsR0FBWSxTQUFHTixNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTTSxTQUF2QixFQUFrQyxpQkFBT1IsS0FBUCxDQUFhUSxTQUEvQyxFQUEwRCxFQUExRCxDO2tCQUpBaUIsTyIsImZpbGUiOiJhbnRkL2xheW91dC9TS1NpZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtMYXlvdXR9IGZyb20gJ2FudGQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1NLfSBmcm9tICdzay1qcyc7XG5pbXBvcnQgQW50ZENvbXAgZnJvbSAnLi4vQW50ZENvbXAnO1xuaW1wb3J0IHtCUkVBS1BPSU5UfSBmcm9tICcuLi8uLi9Db25zdCc7XG5pbXBvcnQgT3JpZ2luTGF5b3V0IGZyb20gJy4vT3JpZ2luTGF5b3V0JztcblxuTGF5b3V0LlNpZGVyLmRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwge1xuICBjb2xsYXBzZWRXaWR0aDogNjQsXG4gIGNvbGxhcHNpYmxlOiBmYWxzZSxcbiAgZGVmYXVsdENvbGxhcHNlZDogZmFsc2UsXG4gIHJldmVyc2VBcnJvdzogZmFsc2UsXG4gIHdpZHRoOiAyMDBcbn0sIE9yaWdpbkxheW91dC5kZWZhdWx0UHJvcHMsIExheW91dC5TaWRlci5kZWZhdWx0UHJvcHMsIHt9KTtcblxuTGF5b3V0LlNpZGVyLnByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwge1xuICAvL2h0dHBzOi8vYW50LmRlc2lnbi9jb21wb25lbnRzL2xheW91dC1jbi8jTGF5b3V0LlNpZGVyXG4gIGJyZWFrcG9pbnQ6IFByb3BUeXBlcy5vbmVPZihPYmplY3QudmFsdWVzKEJSRUFLUE9JTlQpKSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjb2xsYXBzZWQ6IFByb3BUeXBlcy5ib29sLFxuICBjb2xsYXBzZWRXaWR0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgY29sbGFwc2libGU6IFByb3BUeXBlcy5ib29sLFxuICBkZWZhdWx0Q29sbGFwc2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgcmV2ZXJzZUFycm93OiBQcm9wVHlwZXMuYm9vbCxcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIHRyaWdnZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm5vZGVcbiAgXSksXG4gIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICBvbkNvbGxhcHNlOiBQcm9wVHlwZXMuZnVuY1xufSwgT3JpZ2luTGF5b3V0LnByb3BUeXBlcywgTGF5b3V0LlNpZGVyLnByb3BUeXBlcywge30pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS1NpZGVyIGV4dGVuZHMgQW50ZENvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5kZWZhdWx0UHJvcHMsIExheW91dC5TaWRlci5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBMYXlvdXQuU2lkZXJcbiAgfSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLnByb3BUeXBlcywgTGF5b3V0LlNpZGVyLnByb3BUeXBlcywge30pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLmNvbXBOYW1lID0gJ1NLU2lkZXInO1xuICB9XG59XG4iXX0=