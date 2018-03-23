'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tooltip = require('antd/lib/tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

require('antd/lib/tooltip/style');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _skJs = require('sk-js');

var _CommonTip = require('./CommonTip');

var _CommonTip2 = _interopRequireDefault(_CommonTip);

var _AntdComp2 = require('../AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_tooltip2.default.defaultProps = _skJs.SK.assign({}, {}, _CommonTip2.default.defaultProps, _tooltip2.default.defaultProps, {});
_tooltip2.default.propTypes = _skJs.SK.assign({}, {
  //https://ant.design/components/tooltip-cn/#API
  title: _propTypes2.default.string
}, _CommonTip2.default.propTypes, _tooltip2.default.propTypes, {});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGQvdG9vbHRpcC9TS1Rvb2x0aXAuanMiXSwibmFtZXMiOlsiZGVmYXVsdFByb3BzIiwiYXNzaWduIiwicHJvcFR5cGVzIiwidGl0bGUiLCJzdHJpbmciLCJTS1Rvb2x0aXAiLCJhcmdzIiwiY29tcE5hbWUiLCJjb21wVGFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLGtCQUFRQSxZQUFSLEdBQXVCLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsRUFBZCxFQUFrQixvQkFBVUQsWUFBNUIsRUFBMEMsa0JBQVFBLFlBQWxELEVBQWdFLEVBQWhFLENBQXZCO0FBQ0Esa0JBQVFFLFNBQVIsR0FBb0IsU0FBR0QsTUFBSCxDQUFVLEVBQVYsRUFBYztBQUNoQztBQUNBRSxTQUFPLG9CQUFVQztBQUZlLENBQWQsRUFHakIsb0JBQVVGLFNBSE8sRUFHSSxrQkFBUUEsU0FIWixFQUd1QixFQUh2QixDQUFwQjs7SUFLcUJHLFM7OztBQU1uQix1QkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsaUpBQ1ZBLElBRFU7O0FBRW5CLFVBQUtDLFFBQUwsR0FBZ0IsV0FBaEI7QUFGbUI7QUFHcEI7Ozs7O0FBVGtCRixTLENBQ1pMLFksR0FBZSxTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTRCxZQUF2QixFQUFxQyxrQkFBUUEsWUFBN0MsRUFBMkQ7QUFDL0VRO0FBRCtFLENBQTNELEM7QUFESEgsUyxDQUlaSCxTLEdBQVksU0FBR0QsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0MsU0FBdkIsRUFBa0Msa0JBQVFBLFNBQTFDLEVBQXFELEVBQXJELEM7a0JBSkFHLFMiLCJmaWxlIjoiYW50ZC90b29sdGlwL1NLVG9vbHRpcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRvb2x0aXAgfSBmcm9tICdhbnRkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBTSyB9IGZyb20gJ3NrLWpzJztcbmltcG9ydCBDb21tb25UaXAgZnJvbSAnLi9Db21tb25UaXAnO1xuaW1wb3J0IEFudGRDb21wIGZyb20gJy4uL0FudGRDb21wJztcblxuVG9vbHRpcC5kZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIHt9LCBDb21tb25UaXAuZGVmYXVsdFByb3BzLCBUb29sdGlwLmRlZmF1bHRQcm9wcywge30pO1xuVG9vbHRpcC5wcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIHtcbiAgLy9odHRwczovL2FudC5kZXNpZ24vY29tcG9uZW50cy90b29sdGlwLWNuLyNBUElcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG59LCBDb21tb25UaXAucHJvcFR5cGVzLCBUb29sdGlwLnByb3BUeXBlcywge30pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS1Rvb2x0aXAgZXh0ZW5kcyBBbnRkQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLmRlZmF1bHRQcm9wcywgVG9vbHRpcC5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBUb29sdGlwLFxuICB9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAucHJvcFR5cGVzLCBUb29sdGlwLnByb3BUeXBlcywge30pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLmNvbXBOYW1lID0gJ1NLVG9vbHRpcCc7XG4gIH1cbn1cbiJdfQ==