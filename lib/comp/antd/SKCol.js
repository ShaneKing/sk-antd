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

var _AntdComp2 = require('./AntdComp');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9TS0NvbC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0UHJvcHMiLCJhc3NpZ24iLCJvZmZzZXQiLCJvcmRlciIsInB1bGwiLCJwdXNoIiwicHJvcFR5cGVzIiwibnVtYmVyIiwic3BhbiIsInhzIiwib25lT2ZUeXBlIiwib2JqZWN0Iiwic20iLCJtZCIsImxnIiwieGwiLCJ4eGwiLCJTS0NvbCIsImFyZ3MiLCJjb21wTmFtZSIsInByb3BzIiwiQ29tcFRhZyIsImNvbXBUYWciLCJndXR0ZXIiLCJzdHlsZSIsInNrUHJvcCIsIlNLX1BST1BTIiwiQ09MX1NQQU4iLCJHUklEX0dVVFRFUiIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0Iiwic2tUcmFuc1Byb3BzMlNlbGYiLCJza1RyYW5zUHJvcHMyQ2hpbGQiLCJjaGlsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsY0FBSUEsWUFBSixHQUFtQixTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjO0FBQy9CQyxVQUFRLENBRHVCO0FBRS9CQyxTQUFPLENBRndCO0FBRy9CQyxRQUFNLENBSHlCO0FBSS9CQyxRQUFNO0FBSnlCLENBQWQsRUFLaEIsY0FBSUwsWUFMWSxFQUtFLEVBTEYsQ0FBbkI7O0FBT0EsY0FBSU0sU0FBSixHQUFnQixTQUFHTCxNQUFILENBQVUsRUFBVixFQUFjO0FBQzVCQyxVQUFRLG9CQUFVSyxNQURVO0FBRTVCSixTQUFPLG9CQUFVSSxNQUZXO0FBRzVCSCxRQUFNLG9CQUFVRyxNQUhZO0FBSTVCRixRQUFNLG9CQUFVRSxNQUpZO0FBSzVCQyxRQUFNLG9CQUFVRCxNQUxZO0FBTTVCRSxNQUFJLG9CQUFVQyxTQUFWLENBQW9CLENBQ3RCLG9CQUFVSCxNQURZLEVBRXRCLG9CQUFVSSxNQUZZLENBQXBCLENBTndCO0FBVTVCQyxNQUFJLG9CQUFVRixTQUFWLENBQW9CLENBQ3RCLG9CQUFVSCxNQURZLEVBRXRCLG9CQUFVSSxNQUZZLENBQXBCLENBVndCO0FBYzVCRSxNQUFJLG9CQUFVSCxTQUFWLENBQW9CLENBQ3RCLG9CQUFVSCxNQURZLEVBRXRCLG9CQUFVSSxNQUZZLENBQXBCLENBZHdCO0FBa0I1QkcsTUFBSSxvQkFBVUosU0FBVixDQUFvQixDQUN0QixvQkFBVUgsTUFEWSxFQUV0QixvQkFBVUksTUFGWSxDQUFwQixDQWxCd0I7QUFzQjVCSSxNQUFJLG9CQUFVTCxTQUFWLENBQW9CLENBQ3RCLG9CQUFVSCxNQURZLEVBRXRCLG9CQUFVSSxNQUZZLENBQXBCLENBdEJ3QjtBQTBCNUJLLE9BQUssb0JBQVVOLFNBQVYsQ0FBb0IsQ0FDdkIsb0JBQVVILE1BRGEsRUFFdkIsb0JBQVVJLE1BRmEsQ0FBcEI7QUExQnVCLENBQWQsRUE4QmIsY0FBSUwsU0E5QlMsRUE4QkUsRUE5QkYsQ0FBaEI7O0lBZ0NxQlcsSzs7O0FBT25CLG1CQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSx5SUFDVkEsSUFEVTs7QUFFbkIsVUFBS0MsUUFBTCxHQUFnQixPQUFoQjtBQUZtQjtBQUdwQjs7Ozs2QkFFUTtBQUFBLG1CQUN1QyxLQUFLQyxLQUQ1QztBQUFBLFVBQ09DLE9BRFAsVUFDRkMsT0FERTtBQUFBLFVBQ2dCZCxJQURoQixVQUNnQkEsSUFEaEI7QUFBQSxVQUNzQmUsTUFEdEIsVUFDc0JBLE1BRHRCO0FBQUEsVUFDOEJDLEtBRDlCLFVBQzhCQSxLQUQ5Qjs7QUFFUGhCLGFBQU9BLFFBQVEsS0FBS2lCLE1BQUwsQ0FBWSxtQkFBU0MsUUFBVCxDQUFrQkMsUUFBOUIsQ0FBZjs7QUFFQUgsY0FBUUEsU0FBUyxFQUFqQjtBQUNBRCxlQUFTQSxVQUFVLEtBQUtFLE1BQUwsQ0FBWSxtQkFBU0MsUUFBVCxDQUFrQkUsV0FBOUIsQ0FBbkI7QUFDQSxVQUFJTCxTQUFTLENBQWIsRUFBZ0I7QUFDZEMsY0FBTUssV0FBTixHQUFvQk4sU0FBUyxDQUE3QjtBQUNBQyxjQUFNTSxZQUFOLEdBQXFCUCxTQUFTLENBQTlCO0FBQ0Q7O0FBRUQsYUFDRTtBQUFDLGVBQUQ7QUFBQSxxQkFBYSxLQUFLUSxpQkFBTCxDQUF1QlYsT0FBdkIsQ0FBYjtBQUNTLGdCQUFNYixJQURmO0FBRUcsYUFBS3dCLGtCQUFMO0FBRkgsT0FERjtBQU1EOzs7MENBRXFCQyxLLEVBQU87QUFDM0IsYUFBTyxFQUFDVCxPQUFPLEVBQVIsRUFBUDtBQUNEOzs7Ozs7QUFqQ2tCUCxLLENBQ1pqQixZLEdBQWUsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0QsWUFBdkIsRUFBcUMsY0FBSUEsWUFBekMsRUFBdUQ7QUFDM0VzQjtBQUQyRSxDQUF2RCxDO0FBREhMLEssQ0FJWlgsUyxHQUFZLFNBQUdMLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNLLFNBQXZCLEVBQWtDLGNBQUlBLFNBQXRDLEVBQWlELEVBQWpELEM7a0JBSkFXLEsiLCJmaWxlIjoiY29tcC9hbnRkL1NLQ29sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb2x9IGZyb20gJ2FudGQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1NLfSBmcm9tICdzay1qcyc7XG5pbXBvcnQgQW50ZENvbXAgZnJvbSAnLi9BbnRkQ29tcCc7XG5cbkNvbC5kZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIHtcbiAgb2Zmc2V0OiAwLFxuICBvcmRlcjogMCxcbiAgcHVsbDogMCxcbiAgcHVzaDogMFxufSwgQ29sLmRlZmF1bHRQcm9wcywge30pO1xuXG5Db2wucHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCB7XG4gIG9mZnNldDogUHJvcFR5cGVzLm51bWJlcixcbiAgb3JkZXI6IFByb3BUeXBlcy5udW1iZXIsXG4gIHB1bGw6IFByb3BUeXBlcy5udW1iZXIsXG4gIHB1c2g6IFByb3BUeXBlcy5udW1iZXIsXG4gIHNwYW46IFByb3BUeXBlcy5udW1iZXIsXG4gIHhzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5vYmplY3RcbiAgXSksXG4gIHNtOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5vYmplY3RcbiAgXSksXG4gIG1kOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5vYmplY3RcbiAgXSksXG4gIGxnOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5vYmplY3RcbiAgXSksXG4gIHhsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5vYmplY3RcbiAgXSksXG4gIHh4bDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMub2JqZWN0XG4gIF0pXG59LCBDb2wucHJvcFR5cGVzLCB7fSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNLQ29sIGV4dGVuZHMgQW50ZENvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5kZWZhdWx0UHJvcHMsIENvbC5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBDb2xcbiAgfSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLnByb3BUeXBlcywgQ29sLnByb3BUeXBlcywge30pO1xuXG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnU0tDb2wnO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7Y29tcFRhZzogQ29tcFRhZywgc3BhbiwgZ3V0dGVyLCBzdHlsZX0gPSB0aGlzLnByb3BzO1xuICAgIHNwYW4gPSBzcGFuIHx8IHRoaXMuc2tQcm9wKEFudGRDb21wLlNLX1BST1BTLkNPTF9TUEFOKTtcblxuICAgIHN0eWxlID0gc3R5bGUgfHwge307XG4gICAgZ3V0dGVyID0gZ3V0dGVyIHx8IHRoaXMuc2tQcm9wKEFudGRDb21wLlNLX1BST1BTLkdSSURfR1VUVEVSKTtcbiAgICBpZiAoZ3V0dGVyID4gMCkge1xuICAgICAgc3R5bGUucGFkZGluZ0xlZnQgPSBndXR0ZXIgLyAyO1xuICAgICAgc3R5bGUucGFkZGluZ1JpZ2h0ID0gZ3V0dGVyIC8gMjtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBUYWcgey4uLnRoaXMuc2tUcmFuc1Byb3BzMlNlbGYoQ29tcFRhZyl9XG4gICAgICAgICAgICAgICBzcGFuPXtzcGFufT5cbiAgICAgICAge3RoaXMuc2tUcmFuc1Byb3BzMkNoaWxkKCl9XG4gICAgICA8L0NvbXBUYWc+XG4gICAgKTtcbiAgfVxuXG4gIGFsbG93VHJhbnNQcm9wczJDaGlsZChjaGlsZCkge1xuICAgIHJldHVybiB7c3R5bGU6IHt9fTtcbiAgfVxufVxuIl19