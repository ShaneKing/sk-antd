'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _row = require('antd/lib/row');

var _row2 = _interopRequireDefault(_row);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/row/style');

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

_row2.default.defaultProps = _skJs.SK.assign({}, {
  align: _Const.ALIGN.Top,
  gutter: 0,
  justify: _Const.JUSTIFY.Start
}, _row2.default.defaultProps, {});

_row2.default.propTypes = _skJs.SK.assign({}, {
  align: _propTypes2.default.oneOf(Object.values(_Const.ALIGN)),
  gutter: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.object]),
  justify: _propTypes2.default.oneOf(Object.values(_Const.JUSTIFY)),
  type: _propTypes2.default.string
}, _row2.default.propTypes, {});

var SKRow = function (_AntdComp) {
  _inherits(SKRow, _AntdComp);

  function SKRow() {
    var _ref;

    _classCallCheck(this, SKRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SKRow.__proto__ || Object.getPrototypeOf(SKRow)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'SKRow';
    return _this;
  }

  _createClass(SKRow, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          CompTag = _props.compTag,
          gutter = _props.gutter;

      gutter = gutter || this.skProp(_AntdComp3.default.SK_PROPS.GRID_GUTTER);

      return _react2.default.createElement(
        CompTag,
        _extends({}, this.skTransProps2Self(CompTag), {
          gutter: gutter }),
        this.skTransProps2Child()
      );
    }
  }]);

  return SKRow;
}(_AntdComp3.default);

SKRow.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, _row2.default.defaultProps, {
  compTag: _row2.default
});
SKRow.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _row2.default.propTypes, {});
exports.default = SKRow;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9TS1Jvdy5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0UHJvcHMiLCJhc3NpZ24iLCJhbGlnbiIsIlRvcCIsImd1dHRlciIsImp1c3RpZnkiLCJTdGFydCIsInByb3BUeXBlcyIsIm9uZU9mIiwiT2JqZWN0IiwidmFsdWVzIiwib25lT2ZUeXBlIiwibnVtYmVyIiwib2JqZWN0IiwidHlwZSIsInN0cmluZyIsIlNLUm93IiwiYXJncyIsImNvbXBOYW1lIiwicHJvcHMiLCJDb21wVGFnIiwiY29tcFRhZyIsInNrUHJvcCIsIlNLX1BST1BTIiwiR1JJRF9HVVRURVIiLCJza1RyYW5zUHJvcHMyU2VsZiIsInNrVHJhbnNQcm9wczJDaGlsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0FBRUEsY0FBSUEsWUFBSixHQUFtQixTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjO0FBQy9CQyxTQUFPLGFBQU1DLEdBRGtCO0FBRS9CQyxVQUFRLENBRnVCO0FBRy9CQyxXQUFTLGVBQVFDO0FBSGMsQ0FBZCxFQUloQixjQUFJTixZQUpZLEVBSUUsRUFKRixDQUFuQjs7QUFNQSxjQUFJTyxTQUFKLEdBQWdCLFNBQUdOLE1BQUgsQ0FBVSxFQUFWLEVBQWM7QUFDNUJDLFNBQU8sb0JBQVVNLEtBQVYsQ0FBZ0JDLE9BQU9DLE1BQVAsY0FBaEIsQ0FEcUI7QUFFNUJOLFVBQVEsb0JBQVVPLFNBQVYsQ0FBb0IsQ0FDMUIsb0JBQVVDLE1BRGdCLEVBRTFCLG9CQUFVQyxNQUZnQixDQUFwQixDQUZvQjtBQU01QlIsV0FBUyxvQkFBVUcsS0FBVixDQUFnQkMsT0FBT0MsTUFBUCxnQkFBaEIsQ0FObUI7QUFPNUJJLFFBQU0sb0JBQVVDO0FBUFksQ0FBZCxFQVFiLGNBQUlSLFNBUlMsRUFRRSxFQVJGLENBQWhCOztJQVVxQlMsSzs7O0FBT25CLG1CQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSx5SUFDVkEsSUFEVTs7QUFFbkIsVUFBS0MsUUFBTCxHQUFnQixPQUFoQjtBQUZtQjtBQUdwQjs7Ozs2QkFFUTtBQUFBLG1CQUMwQixLQUFLQyxLQUQvQjtBQUFBLFVBQ09DLE9BRFAsVUFDRkMsT0FERTtBQUFBLFVBQ2dCakIsTUFEaEIsVUFDZ0JBLE1BRGhCOztBQUVQQSxlQUFTQSxVQUFVLEtBQUtrQixNQUFMLENBQVksbUJBQVNDLFFBQVQsQ0FBa0JDLFdBQTlCLENBQW5COztBQUVBLGFBQ0U7QUFBQyxlQUFEO0FBQUEscUJBQWEsS0FBS0MsaUJBQUwsQ0FBdUJMLE9BQXZCLENBQWI7QUFDUyxrQkFBUWhCLE1BRGpCO0FBRUcsYUFBS3NCLGtCQUFMO0FBRkgsT0FERjtBQU1EOzs7Ozs7QUF0QmtCVixLLENBQ1poQixZLEdBQWUsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0QsWUFBdkIsRUFBcUMsY0FBSUEsWUFBekMsRUFBdUQ7QUFDM0VxQjtBQUQyRSxDQUF2RCxDO0FBREhMLEssQ0FJWlQsUyxHQUFZLFNBQUdOLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNNLFNBQXZCLEVBQWtDLGNBQUlBLFNBQXRDLEVBQWlELEVBQWpELEM7a0JBSkFTLEsiLCJmaWxlIjoiY29tcC9hbnRkL1NLUm93LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSb3d9IGZyb20gJ2FudGQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1NLfSBmcm9tICdzay1qcyc7XG5pbXBvcnQgQW50ZENvbXAgZnJvbSAnLi9BbnRkQ29tcCc7XG5pbXBvcnQge0FMSUdOLCBKVVNUSUZZfSBmcm9tICcuLi8uLi91dGlsL0NvbnN0JztcblxuUm93LmRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwge1xuICBhbGlnbjogQUxJR04uVG9wLFxuICBndXR0ZXI6IDAsXG4gIGp1c3RpZnk6IEpVU1RJRlkuU3RhcnRcbn0sIFJvdy5kZWZhdWx0UHJvcHMsIHt9KTtcblxuUm93LnByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwge1xuICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mKE9iamVjdC52YWx1ZXMoQUxJR04pKSxcbiAgZ3V0dGVyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5vYmplY3RcbiAgXSksXG4gIGp1c3RpZnk6IFByb3BUeXBlcy5vbmVPZihPYmplY3QudmFsdWVzKEpVU1RJRlkpKSxcbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZ1xufSwgUm93LnByb3BUeXBlcywge30pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS1JvdyBleHRlbmRzIEFudGRDb21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAuZGVmYXVsdFByb3BzLCBSb3cuZGVmYXVsdFByb3BzLCB7XG4gICAgY29tcFRhZzogUm93XG4gIH0pO1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5wcm9wVHlwZXMsIFJvdy5wcm9wVHlwZXMsIHt9KTtcblxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLmNvbXBOYW1lID0gJ1NLUm93JztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge2NvbXBUYWc6IENvbXBUYWcsIGd1dHRlcn0gPSB0aGlzLnByb3BzO1xuICAgIGd1dHRlciA9IGd1dHRlciB8fCB0aGlzLnNrUHJvcChBbnRkQ29tcC5TS19QUk9QUy5HUklEX0dVVFRFUik7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBUYWcgey4uLnRoaXMuc2tUcmFuc1Byb3BzMlNlbGYoQ29tcFRhZyl9XG4gICAgICAgICAgICAgICBndXR0ZXI9e2d1dHRlcn0+XG4gICAgICAgIHt0aGlzLnNrVHJhbnNQcm9wczJDaGlsZCgpfVxuICAgICAgPC9Db21wVGFnPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==