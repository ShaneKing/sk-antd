'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _layout = require('antd/lib/layout');

var _layout2 = _interopRequireDefault(_layout);

require('antd/lib/layout/style');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGQvbGF5b3V0L1NLU2lkZXIuanMiXSwibmFtZXMiOlsiU2lkZXIiLCJkZWZhdWx0UHJvcHMiLCJhc3NpZ24iLCJjb2xsYXBzZWRXaWR0aCIsImNvbGxhcHNpYmxlIiwiZGVmYXVsdENvbGxhcHNlZCIsInJldmVyc2VBcnJvdyIsIndpZHRoIiwicHJvcFR5cGVzIiwiYnJlYWtwb2ludCIsIm9uZU9mIiwiT2JqZWN0IiwidmFsdWVzIiwiY2xhc3NOYW1lIiwic3RyaW5nIiwiY29sbGFwc2VkIiwiYm9vbCIsIm51bWJlciIsInN0eWxlIiwib2JqZWN0IiwidHJpZ2dlciIsIm9uZU9mVHlwZSIsIm5vZGUiLCJvbkNvbGxhcHNlIiwiZnVuYyIsIlNLU2lkZXIiLCJhcmdzIiwiY29tcE5hbWUiLCJjb21wVGFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLGlCQUFPQSxLQUFQLENBQWFDLFlBQWIsR0FBNEIsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYztBQUN4Q0Msa0JBQWdCLEVBRHdCO0FBRXhDQyxlQUFhLEtBRjJCO0FBR3hDQyxvQkFBa0IsS0FIc0I7QUFJeENDLGdCQUFjLEtBSjBCO0FBS3hDQyxTQUFPO0FBTGlDLENBQWQsRUFNekIsdUJBQWFOLFlBTlksRUFNRSxpQkFBT0QsS0FBUCxDQUFhQyxZQU5mLEVBTTZCLEVBTjdCLENBQTVCOztBQVFBLGlCQUFPRCxLQUFQLENBQWFRLFNBQWIsR0FBeUIsU0FBR04sTUFBSCxDQUFVLEVBQVYsRUFBYztBQUNyQztBQUNBTyxjQUFZLG9CQUFVQyxLQUFWLENBQWdCQyxPQUFPQyxNQUFQLG1CQUFoQixDQUZ5QjtBQUdyQ0MsYUFBVyxvQkFBVUMsTUFIZ0I7QUFJckNDLGFBQVcsb0JBQVVDLElBSmdCO0FBS3JDYixrQkFBZ0Isb0JBQVVjLE1BTFc7QUFNckNiLGVBQWEsb0JBQVVZLElBTmM7QUFPckNYLG9CQUFrQixvQkFBVVcsSUFQUztBQVFyQ1YsZ0JBQWMsb0JBQVVVLElBUmE7QUFTckNFLFNBQU8sb0JBQVVDLE1BVG9CO0FBVXJDQyxXQUFTLG9CQUFVQyxTQUFWLENBQW9CLENBQzNCLG9CQUFVUCxNQURpQixFQUUzQixvQkFBVVEsSUFGaUIsQ0FBcEIsQ0FWNEI7QUFjckNmLFNBQU8sb0JBQVVVLE1BZG9CO0FBZXJDTSxjQUFZLG9CQUFVQztBQWZlLENBQWQsRUFnQnRCLHVCQUFhaEIsU0FoQlMsRUFnQkUsaUJBQU9SLEtBQVAsQ0FBYVEsU0FoQmYsRUFnQjBCLEVBaEIxQixDQUF6Qjs7SUFrQnFCaUIsTzs7O0FBTW5CLHFCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSw2SUFDVkEsSUFEVTs7QUFFbkIsVUFBS0MsUUFBTCxHQUFnQixTQUFoQjtBQUZtQjtBQUdwQjs7Ozs7QUFUa0JGLE8sQ0FDWnhCLFksR0FBZSxTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTRCxZQUF2QixFQUFxQyxpQkFBT0QsS0FBUCxDQUFhQyxZQUFsRCxFQUFnRTtBQUNwRjJCLFdBQVMsaUJBQU81QjtBQURvRSxDQUFoRSxDO0FBREh5QixPLENBSVpqQixTLEdBQVksU0FBR04sTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU00sU0FBdkIsRUFBa0MsaUJBQU9SLEtBQVAsQ0FBYVEsU0FBL0MsRUFBMEQsRUFBMUQsQztrQkFKQWlCLE8iLCJmaWxlIjoiYW50ZC9sYXlvdXQvU0tTaWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFNLIH0gZnJvbSAnc2stanMnO1xuaW1wb3J0IEFudGRDb21wIGZyb20gJy4uL0FudGRDb21wJztcbmltcG9ydCB7IEJSRUFLUE9JTlQgfSBmcm9tICcuLi8uLi9Db25zdCc7XG5pbXBvcnQgT3JpZ2luTGF5b3V0IGZyb20gJy4vT3JpZ2luTGF5b3V0JztcblxuTGF5b3V0LlNpZGVyLmRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwge1xuICBjb2xsYXBzZWRXaWR0aDogNjQsXG4gIGNvbGxhcHNpYmxlOiBmYWxzZSxcbiAgZGVmYXVsdENvbGxhcHNlZDogZmFsc2UsXG4gIHJldmVyc2VBcnJvdzogZmFsc2UsXG4gIHdpZHRoOiAyMDAsXG59LCBPcmlnaW5MYXlvdXQuZGVmYXVsdFByb3BzLCBMYXlvdXQuU2lkZXIuZGVmYXVsdFByb3BzLCB7fSk7XG5cbkxheW91dC5TaWRlci5wcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIHtcbiAgLy9odHRwczovL2FudC5kZXNpZ24vY29tcG9uZW50cy9sYXlvdXQtY24vI0xheW91dC5TaWRlclxuICBicmVha3BvaW50OiBQcm9wVHlwZXMub25lT2YoT2JqZWN0LnZhbHVlcyhCUkVBS1BPSU5UKSksXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY29sbGFwc2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgY29sbGFwc2VkV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNvbGxhcHNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGVmYXVsdENvbGxhcHNlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHJldmVyc2VBcnJvdzogUHJvcFR5cGVzLmJvb2wsXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICB0cmlnZ2VyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5ub2RlLFxuICBdKSxcbiAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gIG9uQ29sbGFwc2U6IFByb3BUeXBlcy5mdW5jLFxufSwgT3JpZ2luTGF5b3V0LnByb3BUeXBlcywgTGF5b3V0LlNpZGVyLnByb3BUeXBlcywge30pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS1NpZGVyIGV4dGVuZHMgQW50ZENvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5kZWZhdWx0UHJvcHMsIExheW91dC5TaWRlci5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBMYXlvdXQuU2lkZXIsXG4gIH0pO1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5wcm9wVHlwZXMsIExheW91dC5TaWRlci5wcm9wVHlwZXMsIHt9KTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5jb21wTmFtZSA9ICdTS1NpZGVyJztcbiAgfVxufVxuIl19