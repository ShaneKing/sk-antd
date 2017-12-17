'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _col = require('antd/lib/col');

var _col2 = _interopRequireDefault(_col);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/col/style');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _AntdComp2 = require('../AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_col2.default.defaultProps = _skJs.SK.assign({}, {
  offset: 0,
  order: 0,
  pull: 0,
  push: 0
}, _col2.default.defaultProps, {});

_col2.default.propTypes = _skJs.SK.assign({}, {
  //https://ant.design/components/grid-cn/#Col
  offset: _propTypes2.default.number,
  order: _propTypes2.default.number,
  pull: _propTypes2.default.number,
  push: _propTypes2.default.number,
  span: _propTypes2.default.number,
  xs: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.object]),
  sm: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.object]),
  md: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.object]),
  lg: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.object]),
  xl: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.object]),
  xxl: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.object])
}, _col2.default.propTypes, {});

var SKCol = function (_AntdComp) {
  _inherits(SKCol, _AntdComp);

  function SKCol() {
    var _ref;

    _classCallCheck(this, SKCol);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SKCol.__proto__ || Object.getPrototypeOf(SKCol)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'SKCol';
    return _this;
  }

  _createClass(SKCol, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          CompTag = _props.compTag,
          span = _props.span,
          gutter = _props.gutter,
          style = _props.style;

      span = span || this.skProp(_AntdComp3.default.SK_PROPS.COL_SPAN);

      style = style || {};
      gutter = gutter || this.skProp(_AntdComp3.default.SK_PROPS.GRID_GUTTER);
      if (gutter > 0) {
        style.paddingLeft = gutter / 2;
        style.paddingRight = gutter / 2;
      }

      return _react2.default.createElement(
        CompTag,
        _extends({}, this.skTransProps2Self(CompTag), {
          span: span }),
        this.skTransProps2Child()
      );
    }
  }, {
    key: 'allowTransProps2Child',
    value: function allowTransProps2Child(child) {
      return { style: {} };
    }
  }]);

  return SKCol;
}(_AntdComp3.default);

SKCol.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, _col2.default.defaultProps, {
  compTag: _col2.default
});
SKCol.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _col2.default.propTypes, {});
exports.default = SKCol;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9jb2wvU0tDb2wuanMiXSwibmFtZXMiOlsiZGVmYXVsdFByb3BzIiwiYXNzaWduIiwib2Zmc2V0Iiwib3JkZXIiLCJwdWxsIiwicHVzaCIsInByb3BUeXBlcyIsIm51bWJlciIsInNwYW4iLCJ4cyIsIm9uZU9mVHlwZSIsIm9iamVjdCIsInNtIiwibWQiLCJsZyIsInhsIiwieHhsIiwiU0tDb2wiLCJhcmdzIiwiY29tcE5hbWUiLCJwcm9wcyIsIkNvbXBUYWciLCJjb21wVGFnIiwiZ3V0dGVyIiwic3R5bGUiLCJza1Byb3AiLCJTS19QUk9QUyIsIkNPTF9TUEFOIiwiR1JJRF9HVVRURVIiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsInNrVHJhbnNQcm9wczJTZWxmIiwic2tUcmFuc1Byb3BzMkNoaWxkIiwiY2hpbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLGNBQUlBLFlBQUosR0FBbUIsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYztBQUMvQkMsVUFBUSxDQUR1QjtBQUUvQkMsU0FBTyxDQUZ3QjtBQUcvQkMsUUFBTSxDQUh5QjtBQUkvQkMsUUFBTTtBQUp5QixDQUFkLEVBS2hCLGNBQUlMLFlBTFksRUFLRSxFQUxGLENBQW5COztBQU9BLGNBQUlNLFNBQUosR0FBZ0IsU0FBR0wsTUFBSCxDQUFVLEVBQVYsRUFBYztBQUM1QjtBQUNBQyxVQUFRLG9CQUFVSyxNQUZVO0FBRzVCSixTQUFPLG9CQUFVSSxNQUhXO0FBSTVCSCxRQUFNLG9CQUFVRyxNQUpZO0FBSzVCRixRQUFNLG9CQUFVRSxNQUxZO0FBTTVCQyxRQUFNLG9CQUFVRCxNQU5ZO0FBTzVCRSxNQUFJLG9CQUFVQyxTQUFWLENBQW9CLENBQ3RCLG9CQUFVSCxNQURZLEVBRXRCLG9CQUFVSSxNQUZZLENBQXBCLENBUHdCO0FBVzVCQyxNQUFJLG9CQUFVRixTQUFWLENBQW9CLENBQ3RCLG9CQUFVSCxNQURZLEVBRXRCLG9CQUFVSSxNQUZZLENBQXBCLENBWHdCO0FBZTVCRSxNQUFJLG9CQUFVSCxTQUFWLENBQW9CLENBQ3RCLG9CQUFVSCxNQURZLEVBRXRCLG9CQUFVSSxNQUZZLENBQXBCLENBZndCO0FBbUI1QkcsTUFBSSxvQkFBVUosU0FBVixDQUFvQixDQUN0QixvQkFBVUgsTUFEWSxFQUV0QixvQkFBVUksTUFGWSxDQUFwQixDQW5Cd0I7QUF1QjVCSSxNQUFJLG9CQUFVTCxTQUFWLENBQW9CLENBQ3RCLG9CQUFVSCxNQURZLEVBRXRCLG9CQUFVSSxNQUZZLENBQXBCLENBdkJ3QjtBQTJCNUJLLE9BQUssb0JBQVVOLFNBQVYsQ0FBb0IsQ0FDdkIsb0JBQVVILE1BRGEsRUFFdkIsb0JBQVVJLE1BRmEsQ0FBcEI7QUEzQnVCLENBQWQsRUErQmIsY0FBSUwsU0EvQlMsRUErQkUsRUEvQkYsQ0FBaEI7O0lBaUNxQlcsSzs7O0FBT25CLG1CQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSx5SUFDVkEsSUFEVTs7QUFFbkIsVUFBS0MsUUFBTCxHQUFnQixPQUFoQjtBQUZtQjtBQUdwQjs7Ozs2QkFFUTtBQUFBLG1CQUN1QyxLQUFLQyxLQUQ1QztBQUFBLFVBQ09DLE9BRFAsVUFDRkMsT0FERTtBQUFBLFVBQ2dCZCxJQURoQixVQUNnQkEsSUFEaEI7QUFBQSxVQUNzQmUsTUFEdEIsVUFDc0JBLE1BRHRCO0FBQUEsVUFDOEJDLEtBRDlCLFVBQzhCQSxLQUQ5Qjs7QUFFUGhCLGFBQU9BLFFBQVEsS0FBS2lCLE1BQUwsQ0FBWSxtQkFBU0MsUUFBVCxDQUFrQkMsUUFBOUIsQ0FBZjs7QUFFQUgsY0FBUUEsU0FBUyxFQUFqQjtBQUNBRCxlQUFTQSxVQUFVLEtBQUtFLE1BQUwsQ0FBWSxtQkFBU0MsUUFBVCxDQUFrQkUsV0FBOUIsQ0FBbkI7QUFDQSxVQUFJTCxTQUFTLENBQWIsRUFBZ0I7QUFDZEMsY0FBTUssV0FBTixHQUFvQk4sU0FBUyxDQUE3QjtBQUNBQyxjQUFNTSxZQUFOLEdBQXFCUCxTQUFTLENBQTlCO0FBQ0Q7O0FBRUQsYUFDRTtBQUFDLGVBQUQ7QUFBQSxxQkFBYSxLQUFLUSxpQkFBTCxDQUF1QlYsT0FBdkIsQ0FBYjtBQUNTLGdCQUFNYixJQURmO0FBRUcsYUFBS3dCLGtCQUFMO0FBRkgsT0FERjtBQU1EOzs7MENBRXFCQyxLLEVBQU87QUFDM0IsYUFBTyxFQUFDVCxPQUFPLEVBQVIsRUFBUDtBQUNEOzs7Ozs7QUFqQ2tCUCxLLENBQ1pqQixZLEdBQWUsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0QsWUFBdkIsRUFBcUMsY0FBSUEsWUFBekMsRUFBdUQ7QUFDM0VzQjtBQUQyRSxDQUF2RCxDO0FBREhMLEssQ0FJWlgsUyxHQUFZLFNBQUdMLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNLLFNBQXZCLEVBQWtDLGNBQUlBLFNBQXRDLEVBQWlELEVBQWpELEM7a0JBSkFXLEsiLCJmaWxlIjoiY29tcC9hbnRkL2NvbC9TS0NvbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29sfSBmcm9tICdhbnRkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTS30gZnJvbSAnc2stanMnO1xuaW1wb3J0IEFudGRDb21wIGZyb20gJy4uL0FudGRDb21wJztcblxuQ29sLmRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwge1xuICBvZmZzZXQ6IDAsXG4gIG9yZGVyOiAwLFxuICBwdWxsOiAwLFxuICBwdXNoOiAwXG59LCBDb2wuZGVmYXVsdFByb3BzLCB7fSk7XG5cbkNvbC5wcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIHtcbiAgLy9odHRwczovL2FudC5kZXNpZ24vY29tcG9uZW50cy9ncmlkLWNuLyNDb2xcbiAgb2Zmc2V0OiBQcm9wVHlwZXMubnVtYmVyLFxuICBvcmRlcjogUHJvcFR5cGVzLm51bWJlcixcbiAgcHVsbDogUHJvcFR5cGVzLm51bWJlcixcbiAgcHVzaDogUHJvcFR5cGVzLm51bWJlcixcbiAgc3BhbjogUHJvcFR5cGVzLm51bWJlcixcbiAgeHM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLm9iamVjdFxuICBdKSxcbiAgc206IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLm9iamVjdFxuICBdKSxcbiAgbWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLm9iamVjdFxuICBdKSxcbiAgbGc6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLm9iamVjdFxuICBdKSxcbiAgeGw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLm9iamVjdFxuICBdKSxcbiAgeHhsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5vYmplY3RcbiAgXSlcbn0sIENvbC5wcm9wVHlwZXMsIHt9KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tDb2wgZXh0ZW5kcyBBbnRkQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLmRlZmF1bHRQcm9wcywgQ29sLmRlZmF1bHRQcm9wcywge1xuICAgIGNvbXBUYWc6IENvbFxuICB9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAucHJvcFR5cGVzLCBDb2wucHJvcFR5cGVzLCB7fSk7XG5cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5jb21wTmFtZSA9ICdTS0NvbCc7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtjb21wVGFnOiBDb21wVGFnLCBzcGFuLCBndXR0ZXIsIHN0eWxlfSA9IHRoaXMucHJvcHM7XG4gICAgc3BhbiA9IHNwYW4gfHwgdGhpcy5za1Byb3AoQW50ZENvbXAuU0tfUFJPUFMuQ09MX1NQQU4pO1xuXG4gICAgc3R5bGUgPSBzdHlsZSB8fCB7fTtcbiAgICBndXR0ZXIgPSBndXR0ZXIgfHwgdGhpcy5za1Byb3AoQW50ZENvbXAuU0tfUFJPUFMuR1JJRF9HVVRURVIpO1xuICAgIGlmIChndXR0ZXIgPiAwKSB7XG4gICAgICBzdHlsZS5wYWRkaW5nTGVmdCA9IGd1dHRlciAvIDI7XG4gICAgICBzdHlsZS5wYWRkaW5nUmlnaHQgPSBndXR0ZXIgLyAyO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcFRhZyB7Li4udGhpcy5za1RyYW5zUHJvcHMyU2VsZihDb21wVGFnKX1cbiAgICAgICAgICAgICAgIHNwYW49e3NwYW59PlxuICAgICAgICB7dGhpcy5za1RyYW5zUHJvcHMyQ2hpbGQoKX1cbiAgICAgIDwvQ29tcFRhZz5cbiAgICApO1xuICB9XG5cbiAgYWxsb3dUcmFuc1Byb3BzMkNoaWxkKGNoaWxkKSB7XG4gICAgcmV0dXJuIHtzdHlsZToge319O1xuICB9XG59XG4iXX0=