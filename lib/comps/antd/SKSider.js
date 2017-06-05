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

_antd.Layout.Sider.propTypes = _skJs2.default.assign({}, _antd.Layout.Sider.propTypes, {
  collapsed: _react2.default.PropTypes.bool,
  collapsedWidth: _react2.default.PropTypes.number,
  collapsible: _react2.default.PropTypes.bool,
  onCollapse: _react2.default.PropTypes.func,
  trigger: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.node]),
  width: _react2.default.PropTypes.number
}, {});

var SKSider = function (_Comp) {
  _inherits(SKSider, _Comp);

  function SKSider() {
    var _ref;

    _classCallCheck(this, SKSider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(this, (_ref = SKSider.__proto__ || Object.getPrototypeOf(SKSider)).call.apply(_ref, [this].concat(args)));
  }

  return SKSider;
}(_Comp3.default);

SKSider.defaultProps = {
  compTag: _antd.Layout.Sider
};
SKSider.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _antd.Layout.Sider.propTypes, {});
exports.default = SKSider;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FudGQvU0tTaWRlci5qcyJdLCJuYW1lcyI6WyJTaWRlciIsInByb3BUeXBlcyIsImFzc2lnbiIsImNvbGxhcHNlZCIsIlByb3BUeXBlcyIsImJvb2wiLCJjb2xsYXBzZWRXaWR0aCIsIm51bWJlciIsImNvbGxhcHNpYmxlIiwib25Db2xsYXBzZSIsImZ1bmMiLCJ0cmlnZ2VyIiwib25lT2ZUeXBlIiwic3RyaW5nIiwibm9kZSIsIndpZHRoIiwiU0tTaWRlciIsImFyZ3MiLCJkZWZhdWx0UHJvcHMiLCJjb21wVGFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLGFBQU9BLEtBQVAsQ0FBYUMsU0FBYixHQUF5QixlQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLGFBQU9GLEtBQVAsQ0FBYUMsU0FBM0IsRUFBc0M7QUFDN0RFLGFBQVcsZ0JBQU1DLFNBQU4sQ0FBZ0JDLElBRGtDO0FBRTdEQyxrQkFBZ0IsZ0JBQU1GLFNBQU4sQ0FBZ0JHLE1BRjZCO0FBRzdEQyxlQUFhLGdCQUFNSixTQUFOLENBQWdCQyxJQUhnQztBQUk3REksY0FBWSxnQkFBTUwsU0FBTixDQUFnQk0sSUFKaUM7QUFLN0RDLFdBQVMsZ0JBQU1QLFNBQU4sQ0FBZ0JRLFNBQWhCLENBQTBCLENBQ2pDLGdCQUFNUixTQUFOLENBQWdCUyxNQURpQixFQUVqQyxnQkFBTVQsU0FBTixDQUFnQlUsSUFGaUIsQ0FBMUIsQ0FMb0Q7QUFTN0RDLFNBQU8sZ0JBQU1YLFNBQU4sQ0FBZ0JHO0FBVHNDLENBQXRDLEVBVXRCLEVBVnNCLENBQXpCOztJQVlxQlMsTzs7O0FBTW5CLHFCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSx3SUFDVkEsSUFEVTtBQUVwQjs7Ozs7QUFSa0JELE8sQ0FDWkUsWSxHQUFlO0FBQ3BCQyxXQUFTLGFBQU9uQjtBQURJLEM7QUFESGdCLE8sQ0FJWmYsUyxHQUFZLGVBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsZUFBS0QsU0FBbkIsRUFBOEIsYUFBT0QsS0FBUCxDQUFhQyxTQUEzQyxFQUFzRCxFQUF0RCxDO2tCQUpBZSxPIiwiZmlsZSI6ImNvbXBzL2FudGQvU0tTaWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TGF5b3V0fSBmcm9tICdhbnRkJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU0sgZnJvbSAnc2stanMnO1xuaW1wb3J0IENvbXAgZnJvbSAnLi4vLi4vdXRpbHMvQ29tcCc7XG5cbkxheW91dC5TaWRlci5wcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIExheW91dC5TaWRlci5wcm9wVHlwZXMsIHtcbiAgY29sbGFwc2VkOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgY29sbGFwc2VkV2lkdGg6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIGNvbGxhcHNpYmxlOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgb25Db2xsYXBzZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIHRyaWdnZXI6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgUmVhY3QuUHJvcFR5cGVzLm5vZGVcbiAgXSksXG4gIHdpZHRoOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyXG59LCB7fSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNLU2lkZXIgZXh0ZW5kcyBDb21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb21wVGFnOiBMYXlvdXQuU2lkZXJcbiAgfTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQ29tcC5wcm9wVHlwZXMsIExheW91dC5TaWRlci5wcm9wVHlwZXMsIHt9KTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gIH1cbn1cbiJdfQ==