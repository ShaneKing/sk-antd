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

var _AntdComp2 = require('./AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

var _Const = require('../../util/Const');

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
}, _layout2.default.defaultProps, _layout2.default.Sider.defaultProps, {});

_layout2.default.Sider.propTypes = _skJs.SK.assign({}, {
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
}, _layout2.default.propTypes, _layout2.default.Sider.propTypes, {});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9TS1NpZGVyLmpzIl0sIm5hbWVzIjpbIlNpZGVyIiwiZGVmYXVsdFByb3BzIiwiYXNzaWduIiwiY29sbGFwc2VkV2lkdGgiLCJjb2xsYXBzaWJsZSIsImRlZmF1bHRDb2xsYXBzZWQiLCJyZXZlcnNlQXJyb3ciLCJ3aWR0aCIsInByb3BUeXBlcyIsImJyZWFrcG9pbnQiLCJvbmVPZiIsIk9iamVjdCIsInZhbHVlcyIsImNsYXNzTmFtZSIsInN0cmluZyIsImNvbGxhcHNlZCIsImJvb2wiLCJudW1iZXIiLCJzdHlsZSIsIm9iamVjdCIsInRyaWdnZXIiLCJvbmVPZlR5cGUiLCJub2RlIiwib25Db2xsYXBzZSIsImZ1bmMiLCJTS1NpZGVyIiwiYXJncyIsImNvbXBOYW1lIiwiY29tcFRhZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxpQkFBT0EsS0FBUCxDQUFhQyxZQUFiLEdBQTRCLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWM7QUFDeENDLGtCQUFnQixFQUR3QjtBQUV4Q0MsZUFBYSxLQUYyQjtBQUd4Q0Msb0JBQWtCLEtBSHNCO0FBSXhDQyxnQkFBYyxLQUowQjtBQUt4Q0MsU0FBTztBQUxpQyxDQUFkLEVBTXpCLGlCQUFPTixZQU5rQixFQU1KLGlCQUFPRCxLQUFQLENBQWFDLFlBTlQsRUFNdUIsRUFOdkIsQ0FBNUI7O0FBUUEsaUJBQU9ELEtBQVAsQ0FBYVEsU0FBYixHQUF5QixTQUFHTixNQUFILENBQVUsRUFBVixFQUFjO0FBQ3JDTyxjQUFZLG9CQUFVQyxLQUFWLENBQWdCQyxPQUFPQyxNQUFQLG1CQUFoQixDQUR5QjtBQUVyQ0MsYUFBVyxvQkFBVUMsTUFGZ0I7QUFHckNDLGFBQVcsb0JBQVVDLElBSGdCO0FBSXJDYixrQkFBZ0Isb0JBQVVjLE1BSlc7QUFLckNiLGVBQWEsb0JBQVVZLElBTGM7QUFNckNYLG9CQUFrQixvQkFBVVcsSUFOUztBQU9yQ1YsZ0JBQWMsb0JBQVVVLElBUGE7QUFRckNFLFNBQU8sb0JBQVVDLE1BUm9CO0FBU3JDQyxXQUFTLG9CQUFVQyxTQUFWLENBQW9CLENBQzNCLG9CQUFVUCxNQURpQixFQUUzQixvQkFBVVEsSUFGaUIsQ0FBcEIsQ0FUNEI7QUFhckNmLFNBQU8sb0JBQVVVLE1BYm9CO0FBY3JDTSxjQUFZLG9CQUFVQztBQWRlLENBQWQsRUFldEIsaUJBQU9oQixTQWZlLEVBZUosaUJBQU9SLEtBQVAsQ0FBYVEsU0FmVCxFQWVvQixFQWZwQixDQUF6Qjs7SUFpQnFCaUIsTzs7O0FBTW5CLHFCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSw2SUFDVkEsSUFEVTs7QUFFbkIsVUFBS0MsUUFBTCxHQUFnQixTQUFoQjtBQUZtQjtBQUdwQjs7Ozs7QUFUa0JGLE8sQ0FDWnhCLFksR0FBZSxTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTRCxZQUF2QixFQUFxQyxpQkFBT0QsS0FBUCxDQUFhQyxZQUFsRCxFQUFnRTtBQUNwRjJCLFdBQVMsaUJBQU81QjtBQURvRSxDQUFoRSxDO0FBREh5QixPLENBSVpqQixTLEdBQVksU0FBR04sTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU00sU0FBdkIsRUFBa0MsaUJBQU9SLEtBQVAsQ0FBYVEsU0FBL0MsRUFBMEQsRUFBMUQsQztrQkFKQWlCLE8iLCJmaWxlIjoiY29tcC9hbnRkL1NLU2lkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xheW91dH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U0t9IGZyb20gJ3NrLWpzJztcbmltcG9ydCBBbnRkQ29tcCBmcm9tICcuL0FudGRDb21wJztcbmltcG9ydCB7QlJFQUtQT0lOVH0gZnJvbSAnLi4vLi4vdXRpbC9Db25zdCc7XG5cbkxheW91dC5TaWRlci5kZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIHtcbiAgY29sbGFwc2VkV2lkdGg6IDY0LFxuICBjb2xsYXBzaWJsZTogZmFsc2UsXG4gIGRlZmF1bHRDb2xsYXBzZWQ6IGZhbHNlLFxuICByZXZlcnNlQXJyb3c6IGZhbHNlLFxuICB3aWR0aDogMjAwXG59LCBMYXlvdXQuZGVmYXVsdFByb3BzLCBMYXlvdXQuU2lkZXIuZGVmYXVsdFByb3BzLCB7fSk7XG5cbkxheW91dC5TaWRlci5wcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIHtcbiAgYnJlYWtwb2ludDogUHJvcFR5cGVzLm9uZU9mKE9iamVjdC52YWx1ZXMoQlJFQUtQT0lOVCkpLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNvbGxhcHNlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGNvbGxhcHNlZFdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjb2xsYXBzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIGRlZmF1bHRDb2xsYXBzZWQ6IFByb3BUeXBlcy5ib29sLFxuICByZXZlcnNlQXJyb3c6IFByb3BUeXBlcy5ib29sLFxuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgdHJpZ2dlcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubm9kZVxuICBdKSxcbiAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gIG9uQ29sbGFwc2U6IFByb3BUeXBlcy5mdW5jXG59LCBMYXlvdXQucHJvcFR5cGVzLCBMYXlvdXQuU2lkZXIucHJvcFR5cGVzLCB7fSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNLU2lkZXIgZXh0ZW5kcyBBbnRkQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLmRlZmF1bHRQcm9wcywgTGF5b3V0LlNpZGVyLmRlZmF1bHRQcm9wcywge1xuICAgIGNvbXBUYWc6IExheW91dC5TaWRlclxuICB9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAucHJvcFR5cGVzLCBMYXlvdXQuU2lkZXIucHJvcFR5cGVzLCB7fSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnU0tTaWRlcic7XG4gIH1cbn1cbiJdfQ==