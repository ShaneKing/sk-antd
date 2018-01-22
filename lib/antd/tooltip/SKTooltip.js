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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGQvdG9vbHRpcC9TS1Rvb2x0aXAuanMiXSwibmFtZXMiOlsiZGVmYXVsdFByb3BzIiwiYXNzaWduIiwicHJvcFR5cGVzIiwidGl0bGUiLCJzdHJpbmciLCJTS1Rvb2x0aXAiLCJhcmdzIiwiY29tcE5hbWUiLCJjb21wVGFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsa0JBQVFBLFlBQVIsR0FBdUIsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxFQUFkLEVBQWtCLG9CQUFVRCxZQUE1QixFQUEwQyxrQkFBUUEsWUFBbEQsRUFBZ0UsRUFBaEUsQ0FBdkI7QUFDQSxrQkFBUUUsU0FBUixHQUFvQixTQUFHRCxNQUFILENBQVUsRUFBVixFQUFjO0FBQ2hDO0FBQ0FFLFNBQU8sb0JBQVVDO0FBRmUsQ0FBZCxFQUdqQixvQkFBVUYsU0FITyxFQUdJLGtCQUFRQSxTQUhaLEVBR3VCLEVBSHZCLENBQXBCOztJQUtxQkcsUzs7O0FBTW5CLHVCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSxpSkFDVkEsSUFEVTs7QUFFbkIsVUFBS0MsUUFBTCxHQUFnQixXQUFoQjtBQUZtQjtBQUdwQjs7Ozs7QUFUa0JGLFMsQ0FDWkwsWSxHQUFlLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNELFlBQXZCLEVBQXFDLGtCQUFRQSxZQUE3QyxFQUEyRDtBQUMvRVE7QUFEK0UsQ0FBM0QsQztBQURISCxTLENBSVpILFMsR0FBWSxTQUFHRCxNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTQyxTQUF2QixFQUFrQyxrQkFBUUEsU0FBMUMsRUFBcUQsRUFBckQsQztrQkFKQUcsUyIsImZpbGUiOiJhbnRkL3Rvb2x0aXAvU0tUb29sdGlwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUb29sdGlwfSBmcm9tICdhbnRkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTS30gZnJvbSAnc2stanMnO1xuaW1wb3J0IENvbW1vblRpcCBmcm9tICcuL0NvbW1vblRpcCc7XG5pbXBvcnQgQW50ZENvbXAgZnJvbSAnLi4vQW50ZENvbXAnO1xuXG5Ub29sdGlwLmRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwge30sIENvbW1vblRpcC5kZWZhdWx0UHJvcHMsIFRvb2x0aXAuZGVmYXVsdFByb3BzLCB7fSk7XG5Ub29sdGlwLnByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwge1xuICAvL2h0dHBzOi8vYW50LmRlc2lnbi9jb21wb25lbnRzL3Rvb2x0aXAtY24vI0FQSVxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZ1xufSwgQ29tbW9uVGlwLnByb3BUeXBlcywgVG9vbHRpcC5wcm9wVHlwZXMsIHt9KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tUb29sdGlwIGV4dGVuZHMgQW50ZENvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5kZWZhdWx0UHJvcHMsIFRvb2x0aXAuZGVmYXVsdFByb3BzLCB7XG4gICAgY29tcFRhZzogVG9vbHRpcFxuICB9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAucHJvcFR5cGVzLCBUb29sdGlwLnByb3BUeXBlcywge30pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLmNvbXBOYW1lID0gJ1NLVG9vbHRpcCc7XG4gIH1cbn1cbiJdfQ==