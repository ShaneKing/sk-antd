'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tooltip = require('antd/lib/tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

require('antd/lib/tooltip/style');

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

_tooltip2.default.COMMON_DEFAULT_PROPS = _skJs.SK.assign({}, {
  arrowPointAtCenter: false,
  autoAdjustOverflow: true,
  mouseEnterDelay: 0,
  mouseLeaveDelay: 0.1,
  placement: _Const.PLACEMENT.Top,
  trigger: _Const.TRIGGER.Hover,
  defaultVisible: false,
  visible: false
}, {});

_tooltip2.default.COMMON_PROP_TYPES = _skJs.SK.assign({}, {
  arrowPointAtCenter: _propTypes2.default.bool,
  autoAdjustOverflow: _propTypes2.default.bool,
  getPopupContainer: _propTypes2.default.func,
  mouseEnterDelay: _propTypes2.default.number,
  mouseLeaveDelay: _propTypes2.default.number,
  overlayClassName: _propTypes2.default.string,
  overlayStyle: _propTypes2.default.object,
  placement: _propTypes2.default.oneOf(Object.values(_Const.PLACEMENT)),
  trigger: _propTypes2.default.string,
  defaultVisible: _propTypes2.default.bool,
  visible: _propTypes2.default.bool,
  onCollapse: _propTypes2.default.func
}, {});

_tooltip2.default.defaultProps = _skJs.SK.assign({}, {}, _tooltip2.default.COMMON_DEFAULT_PROPS, _tooltip2.default.defaultProps, {});

_tooltip2.default.propTypes = _skJs.SK.assign({}, {
  title: _propTypes2.default.string
}, _tooltip2.default.COMMON_PROP_TYPES, _tooltip2.default.propTypes, {});

var SKTooltip = function (_AntdComp) {
  _inherits(SKTooltip, _AntdComp);

  function SKTooltip() {
    var _ref;

    _classCallCheck(this, SKTooltip);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SKTooltip.__proto__ || Object.getPrototypeOf(SKTooltip)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'SKTooltip';
    return _this;
  }

  return SKTooltip;
}(_AntdComp3.default);

SKTooltip.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, _tooltip2.default.defaultProps, {
  compTag: _tooltip2.default
});
SKTooltip.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _tooltip2.default.propTypes, {});
exports.default = SKTooltip;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9TS1Rvb2x0aXAuanMiXSwibmFtZXMiOlsiQ09NTU9OX0RFRkFVTFRfUFJPUFMiLCJhc3NpZ24iLCJhcnJvd1BvaW50QXRDZW50ZXIiLCJhdXRvQWRqdXN0T3ZlcmZsb3ciLCJtb3VzZUVudGVyRGVsYXkiLCJtb3VzZUxlYXZlRGVsYXkiLCJwbGFjZW1lbnQiLCJUb3AiLCJ0cmlnZ2VyIiwiSG92ZXIiLCJkZWZhdWx0VmlzaWJsZSIsInZpc2libGUiLCJDT01NT05fUFJPUF9UWVBFUyIsImJvb2wiLCJnZXRQb3B1cENvbnRhaW5lciIsImZ1bmMiLCJudW1iZXIiLCJvdmVybGF5Q2xhc3NOYW1lIiwic3RyaW5nIiwib3ZlcmxheVN0eWxlIiwib2JqZWN0Iiwib25lT2YiLCJPYmplY3QiLCJ2YWx1ZXMiLCJvbkNvbGxhcHNlIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwidGl0bGUiLCJTS1Rvb2x0aXAiLCJhcmdzIiwiY29tcE5hbWUiLCJjb21wVGFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVBLGtCQUFRQSxvQkFBUixHQUErQixTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjO0FBQzNDQyxzQkFBb0IsS0FEdUI7QUFFM0NDLHNCQUFvQixJQUZ1QjtBQUczQ0MsbUJBQWlCLENBSDBCO0FBSTNDQyxtQkFBaUIsR0FKMEI7QUFLM0NDLGFBQVcsaUJBQVVDLEdBTHNCO0FBTTNDQyxXQUFTLGVBQVFDLEtBTjBCO0FBTzNDQyxrQkFBZ0IsS0FQMkI7QUFRM0NDLFdBQVM7QUFSa0MsQ0FBZCxFQVM1QixFQVQ0QixDQUEvQjs7QUFXQSxrQkFBUUMsaUJBQVIsR0FBNEIsU0FBR1gsTUFBSCxDQUFVLEVBQVYsRUFBYztBQUN4Q0Msc0JBQW9CLG9CQUFVVyxJQURVO0FBRXhDVixzQkFBb0Isb0JBQVVVLElBRlU7QUFHeENDLHFCQUFtQixvQkFBVUMsSUFIVztBQUl4Q1gsbUJBQWlCLG9CQUFVWSxNQUphO0FBS3hDWCxtQkFBaUIsb0JBQVVXLE1BTGE7QUFNeENDLG9CQUFrQixvQkFBVUMsTUFOWTtBQU94Q0MsZ0JBQWMsb0JBQVVDLE1BUGdCO0FBUXhDZCxhQUFXLG9CQUFVZSxLQUFWLENBQWdCQyxPQUFPQyxNQUFQLGtCQUFoQixDQVI2QjtBQVN4Q2YsV0FBUyxvQkFBVVUsTUFUcUI7QUFVeENSLGtCQUFnQixvQkFBVUcsSUFWYztBQVd4Q0YsV0FBUyxvQkFBVUUsSUFYcUI7QUFZeENXLGNBQVksb0JBQVVUO0FBWmtCLENBQWQsRUFhekIsRUFieUIsQ0FBNUI7O0FBZUEsa0JBQVFVLFlBQVIsR0FBdUIsU0FBR3hCLE1BQUgsQ0FBVSxFQUFWLEVBQWMsRUFBZCxFQUFrQixrQkFBUUQsb0JBQTFCLEVBQWdELGtCQUFReUIsWUFBeEQsRUFBc0UsRUFBdEUsQ0FBdkI7O0FBRUEsa0JBQVFDLFNBQVIsR0FBb0IsU0FBR3pCLE1BQUgsQ0FBVSxFQUFWLEVBQWM7QUFDaEMwQixTQUFPLG9CQUFVVDtBQURlLENBQWQsRUFFakIsa0JBQVFOLGlCQUZTLEVBRVUsa0JBQVFjLFNBRmxCLEVBRTZCLEVBRjdCLENBQXBCOztJQUlxQkUsUzs7O0FBT25CLHVCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSxpSkFDVkEsSUFEVTs7QUFFbkIsVUFBS0MsUUFBTCxHQUFnQixXQUFoQjtBQUZtQjtBQUdwQjs7Ozs7QUFWa0JGLFMsQ0FDWkgsWSxHQUFlLFNBQUd4QixNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTd0IsWUFBdkIsRUFBcUMsa0JBQVFBLFlBQTdDLEVBQTJEO0FBQy9FTTtBQUQrRSxDQUEzRCxDO0FBREhILFMsQ0FJWkYsUyxHQUFZLFNBQUd6QixNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTeUIsU0FBdkIsRUFBa0Msa0JBQVFBLFNBQTFDLEVBQXFELEVBQXJELEM7a0JBSkFFLFMiLCJmaWxlIjoiY29tcC9hbnRkL1NLVG9vbHRpcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VG9vbHRpcH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U0t9IGZyb20gJ3NrLWpzJztcbmltcG9ydCBBbnRkQ29tcCBmcm9tICcuL0FudGRDb21wJztcbmltcG9ydCB7UExBQ0VNRU5ULCBUUklHR0VSfSBmcm9tICcuLi8uLi91dGlsL0NvbnN0JztcblxuVG9vbHRpcC5DT01NT05fREVGQVVMVF9QUk9QUyA9IFNLLmFzc2lnbih7fSwge1xuICBhcnJvd1BvaW50QXRDZW50ZXI6IGZhbHNlLFxuICBhdXRvQWRqdXN0T3ZlcmZsb3c6IHRydWUsXG4gIG1vdXNlRW50ZXJEZWxheTogMCxcbiAgbW91c2VMZWF2ZURlbGF5OiAwLjEsXG4gIHBsYWNlbWVudDogUExBQ0VNRU5ULlRvcCxcbiAgdHJpZ2dlcjogVFJJR0dFUi5Ib3ZlcixcbiAgZGVmYXVsdFZpc2libGU6IGZhbHNlLFxuICB2aXNpYmxlOiBmYWxzZVxufSwge30pO1xuXG5Ub29sdGlwLkNPTU1PTl9QUk9QX1RZUEVTID0gU0suYXNzaWduKHt9LCB7XG4gIGFycm93UG9pbnRBdENlbnRlcjogUHJvcFR5cGVzLmJvb2wsXG4gIGF1dG9BZGp1c3RPdmVyZmxvdzogUHJvcFR5cGVzLmJvb2wsXG4gIGdldFBvcHVwQ29udGFpbmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgbW91c2VFbnRlckRlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuICBtb3VzZUxlYXZlRGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gIG92ZXJsYXlDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG92ZXJsYXlTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgcGxhY2VtZW50OiBQcm9wVHlwZXMub25lT2YoT2JqZWN0LnZhbHVlcyhQTEFDRU1FTlQpKSxcbiAgdHJpZ2dlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdFZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICB2aXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25Db2xsYXBzZTogUHJvcFR5cGVzLmZ1bmNcbn0sIHt9KTtcblxuVG9vbHRpcC5kZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIHt9LCBUb29sdGlwLkNPTU1PTl9ERUZBVUxUX1BST1BTLCBUb29sdGlwLmRlZmF1bHRQcm9wcywge30pO1xuXG5Ub29sdGlwLnByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwge1xuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZ1xufSwgVG9vbHRpcC5DT01NT05fUFJPUF9UWVBFUywgVG9vbHRpcC5wcm9wVHlwZXMsIHt9KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tUb29sdGlwIGV4dGVuZHMgQW50ZENvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5kZWZhdWx0UHJvcHMsIFRvb2x0aXAuZGVmYXVsdFByb3BzLCB7XG4gICAgY29tcFRhZzogVG9vbHRpcFxuICB9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAucHJvcFR5cGVzLCBUb29sdGlwLnByb3BUeXBlcywge30pO1xuXG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnU0tUb29sdGlwJztcbiAgfVxufVxuIl19