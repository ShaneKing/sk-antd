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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC90b29sdGlwL1NLVG9vbHRpcC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0UHJvcHMiLCJhc3NpZ24iLCJwcm9wVHlwZXMiLCJ0aXRsZSIsInN0cmluZyIsIlNLVG9vbHRpcCIsImFyZ3MiLCJjb21wTmFtZSIsImNvbXBUYWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxrQkFBUUEsWUFBUixHQUF1QixTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLEVBQWQsRUFBa0Isb0JBQVVELFlBQTVCLEVBQTBDLGtCQUFRQSxZQUFsRCxFQUFnRSxFQUFoRSxDQUF2QjtBQUNBLGtCQUFRRSxTQUFSLEdBQW9CLFNBQUdELE1BQUgsQ0FBVSxFQUFWLEVBQWM7QUFDaEM7QUFDQUUsU0FBTyxvQkFBVUM7QUFGZSxDQUFkLEVBR2pCLG9CQUFVRixTQUhPLEVBR0ksa0JBQVFBLFNBSFosRUFHdUIsRUFIdkIsQ0FBcEI7O0lBS3FCRyxTOzs7QUFNbkIsdUJBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLGlKQUNWQSxJQURVOztBQUVuQixVQUFLQyxRQUFMLEdBQWdCLFdBQWhCO0FBRm1CO0FBR3BCOzs7OztBQVRrQkYsUyxDQUNaTCxZLEdBQWUsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0QsWUFBdkIsRUFBcUMsa0JBQVFBLFlBQTdDLEVBQTJEO0FBQy9FUTtBQUQrRSxDQUEzRCxDO0FBREhILFMsQ0FJWkgsUyxHQUFZLFNBQUdELE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNDLFNBQXZCLEVBQWtDLGtCQUFRQSxTQUExQyxFQUFxRCxFQUFyRCxDO2tCQUpBRyxTIiwiZmlsZSI6ImNvbXAvYW50ZC90b29sdGlwL1NLVG9vbHRpcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VG9vbHRpcH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U0t9IGZyb20gJ3NrLWpzJztcbmltcG9ydCBDb21tb25UaXAgZnJvbSAnLi9Db21tb25UaXAnO1xuaW1wb3J0IEFudGRDb21wIGZyb20gJy4uL0FudGRDb21wJztcblxuVG9vbHRpcC5kZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIHt9LCBDb21tb25UaXAuZGVmYXVsdFByb3BzLCBUb29sdGlwLmRlZmF1bHRQcm9wcywge30pO1xuVG9vbHRpcC5wcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIHtcbiAgLy9odHRwczovL2FudC5kZXNpZ24vY29tcG9uZW50cy90b29sdGlwLWNuLyNBUElcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmdcbn0sIENvbW1vblRpcC5wcm9wVHlwZXMsIFRvb2x0aXAucHJvcFR5cGVzLCB7fSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNLVG9vbHRpcCBleHRlbmRzIEFudGRDb21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAuZGVmYXVsdFByb3BzLCBUb29sdGlwLmRlZmF1bHRQcm9wcywge1xuICAgIGNvbXBUYWc6IFRvb2x0aXBcbiAgfSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLnByb3BUeXBlcywgVG9vbHRpcC5wcm9wVHlwZXMsIHt9KTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5jb21wTmFtZSA9ICdTS1Rvb2x0aXAnO1xuICB9XG59XG4iXX0=