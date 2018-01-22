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

var _SKRow = require('../row/SKRow');

var _SKRow2 = _interopRequireDefault(_SKRow);

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
          style = _props.style;

      var span = this.skProp(SKCol.SK_PROPS.SPAN);
      var gutter = this.skProp(_SKRow2.default.SK_PROPS.GUTTER);

      style = style || {};
      if (gutter > 0) {
        style.paddingLeft = gutter / 2;
        style.paddingRight = gutter / 2;
      }

      return _react2.default.createElement(
        CompTag,
        _extends({}, this.skTransProps2Self(CompTag), {
          span: span,
          style: style }),
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

SKCol.SK_PROPS = {
  SPAN: 'span'
};
SKCol.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, _col2.default.defaultProps, {
  compTag: _col2.default
});
SKCol.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _col2.default.propTypes, {});
exports.default = SKCol;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGQvY29sL1NLQ29sLmpzIl0sIm5hbWVzIjpbImRlZmF1bHRQcm9wcyIsImFzc2lnbiIsIm9mZnNldCIsIm9yZGVyIiwicHVsbCIsInB1c2giLCJwcm9wVHlwZXMiLCJudW1iZXIiLCJzcGFuIiwieHMiLCJvbmVPZlR5cGUiLCJvYmplY3QiLCJzbSIsIm1kIiwibGciLCJ4bCIsInh4bCIsIlNLQ29sIiwiYXJncyIsImNvbXBOYW1lIiwicHJvcHMiLCJDb21wVGFnIiwiY29tcFRhZyIsInN0eWxlIiwic2tQcm9wIiwiU0tfUFJPUFMiLCJTUEFOIiwiZ3V0dGVyIiwiR1VUVEVSIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJza1RyYW5zUHJvcHMyU2VsZiIsInNrVHJhbnNQcm9wczJDaGlsZCIsImNoaWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLGNBQUlBLFlBQUosR0FBbUIsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYztBQUMvQkMsVUFBUSxDQUR1QjtBQUUvQkMsU0FBTyxDQUZ3QjtBQUcvQkMsUUFBTSxDQUh5QjtBQUkvQkMsUUFBTTtBQUp5QixDQUFkLEVBS2hCLGNBQUlMLFlBTFksRUFLRSxFQUxGLENBQW5COztBQU9BLGNBQUlNLFNBQUosR0FBZ0IsU0FBR0wsTUFBSCxDQUFVLEVBQVYsRUFBYztBQUM1QjtBQUNBQyxVQUFRLG9CQUFVSyxNQUZVO0FBRzVCSixTQUFPLG9CQUFVSSxNQUhXO0FBSTVCSCxRQUFNLG9CQUFVRyxNQUpZO0FBSzVCRixRQUFNLG9CQUFVRSxNQUxZO0FBTTVCQyxRQUFNLG9CQUFVRCxNQU5ZO0FBTzVCRSxNQUFJLG9CQUFVQyxTQUFWLENBQW9CLENBQ3RCLG9CQUFVSCxNQURZLEVBRXRCLG9CQUFVSSxNQUZZLENBQXBCLENBUHdCO0FBVzVCQyxNQUFJLG9CQUFVRixTQUFWLENBQW9CLENBQ3RCLG9CQUFVSCxNQURZLEVBRXRCLG9CQUFVSSxNQUZZLENBQXBCLENBWHdCO0FBZTVCRSxNQUFJLG9CQUFVSCxTQUFWLENBQW9CLENBQ3RCLG9CQUFVSCxNQURZLEVBRXRCLG9CQUFVSSxNQUZZLENBQXBCLENBZndCO0FBbUI1QkcsTUFBSSxvQkFBVUosU0FBVixDQUFvQixDQUN0QixvQkFBVUgsTUFEWSxFQUV0QixvQkFBVUksTUFGWSxDQUFwQixDQW5Cd0I7QUF1QjVCSSxNQUFJLG9CQUFVTCxTQUFWLENBQW9CLENBQ3RCLG9CQUFVSCxNQURZLEVBRXRCLG9CQUFVSSxNQUZZLENBQXBCLENBdkJ3QjtBQTJCNUJLLE9BQUssb0JBQVVOLFNBQVYsQ0FBb0IsQ0FDdkIsb0JBQVVILE1BRGEsRUFFdkIsb0JBQVVJLE1BRmEsQ0FBcEI7QUEzQnVCLENBQWQsRUErQmIsY0FBSUwsU0EvQlMsRUErQkUsRUEvQkYsQ0FBaEI7O0lBaUNxQlcsSzs7O0FBU25CLG1CQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSx5SUFDVkEsSUFEVTs7QUFFbkIsVUFBS0MsUUFBTCxHQUFnQixPQUFoQjtBQUZtQjtBQUdwQjs7Ozs2QkFFUTtBQUFBLG1CQUN5QixLQUFLQyxLQUQ5QjtBQUFBLFVBQ09DLE9BRFAsVUFDRkMsT0FERTtBQUFBLFVBQ2dCQyxLQURoQixVQUNnQkEsS0FEaEI7O0FBRVAsVUFBSWYsT0FBTyxLQUFLZ0IsTUFBTCxDQUFZUCxNQUFNUSxRQUFOLENBQWVDLElBQTNCLENBQVg7QUFDQSxVQUFJQyxTQUFTLEtBQUtILE1BQUwsQ0FBWSxnQkFBTUMsUUFBTixDQUFlRyxNQUEzQixDQUFiOztBQUVBTCxjQUFRQSxTQUFTLEVBQWpCO0FBQ0EsVUFBSUksU0FBUyxDQUFiLEVBQWdCO0FBQ2RKLGNBQU1NLFdBQU4sR0FBb0JGLFNBQVMsQ0FBN0I7QUFDQUosY0FBTU8sWUFBTixHQUFxQkgsU0FBUyxDQUE5QjtBQUNEOztBQUVELGFBQ0U7QUFBQyxlQUFEO0FBQUEscUJBQWEsS0FBS0ksaUJBQUwsQ0FBdUJWLE9BQXZCLENBQWI7QUFDUyxnQkFBTWIsSUFEZjtBQUVTLGlCQUFPZSxLQUZoQjtBQUdHLGFBQUtTLGtCQUFMO0FBSEgsT0FERjtBQU9EOzs7MENBRXFCQyxLLEVBQU87QUFDM0IsYUFBTyxFQUFDVixPQUFPLEVBQVIsRUFBUDtBQUNEOzs7Ozs7QUFwQ2tCTixLLENBQ1pRLFEsR0FBVztBQUNoQkMsUUFBTTtBQURVLEM7QUFEQ1QsSyxDQUlaakIsWSxHQUFlLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNELFlBQXZCLEVBQXFDLGNBQUlBLFlBQXpDLEVBQXVEO0FBQzNFc0I7QUFEMkUsQ0FBdkQsQztBQUpITCxLLENBT1pYLFMsR0FBWSxTQUFHTCxNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTSyxTQUF2QixFQUFrQyxjQUFJQSxTQUF0QyxFQUFpRCxFQUFqRCxDO2tCQVBBVyxLIiwiZmlsZSI6ImFudGQvY29sL1NLQ29sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb2x9IGZyb20gJ2FudGQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1NLfSBmcm9tICdzay1qcyc7XG5pbXBvcnQgQW50ZENvbXAgZnJvbSAnLi4vQW50ZENvbXAnO1xuaW1wb3J0IFNLUm93IGZyb20gJy4uL3Jvdy9TS1Jvdyc7XG5cbkNvbC5kZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIHtcbiAgb2Zmc2V0OiAwLFxuICBvcmRlcjogMCxcbiAgcHVsbDogMCxcbiAgcHVzaDogMFxufSwgQ29sLmRlZmF1bHRQcm9wcywge30pO1xuXG5Db2wucHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCB7XG4gIC8vaHR0cHM6Ly9hbnQuZGVzaWduL2NvbXBvbmVudHMvZ3JpZC1jbi8jQ29sXG4gIG9mZnNldDogUHJvcFR5cGVzLm51bWJlcixcbiAgb3JkZXI6IFByb3BUeXBlcy5udW1iZXIsXG4gIHB1bGw6IFByb3BUeXBlcy5udW1iZXIsXG4gIHB1c2g6IFByb3BUeXBlcy5udW1iZXIsXG4gIHNwYW46IFByb3BUeXBlcy5udW1iZXIsXG4gIHhzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5vYmplY3RcbiAgXSksXG4gIHNtOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5vYmplY3RcbiAgXSksXG4gIG1kOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5vYmplY3RcbiAgXSksXG4gIGxnOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5vYmplY3RcbiAgXSksXG4gIHhsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5vYmplY3RcbiAgXSksXG4gIHh4bDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMub2JqZWN0XG4gIF0pXG59LCBDb2wucHJvcFR5cGVzLCB7fSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNLQ29sIGV4dGVuZHMgQW50ZENvbXAge1xuICBzdGF0aWMgU0tfUFJPUFMgPSB7XG4gICAgU1BBTjogJ3NwYW4nXG4gIH07XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLmRlZmF1bHRQcm9wcywgQ29sLmRlZmF1bHRQcm9wcywge1xuICAgIGNvbXBUYWc6IENvbFxuICB9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAucHJvcFR5cGVzLCBDb2wucHJvcFR5cGVzLCB7fSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnU0tDb2wnO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7Y29tcFRhZzogQ29tcFRhZywgc3R5bGV9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgc3BhbiA9IHRoaXMuc2tQcm9wKFNLQ29sLlNLX1BST1BTLlNQQU4pO1xuICAgIGxldCBndXR0ZXIgPSB0aGlzLnNrUHJvcChTS1Jvdy5TS19QUk9QUy5HVVRURVIpO1xuXG4gICAgc3R5bGUgPSBzdHlsZSB8fCB7fTtcbiAgICBpZiAoZ3V0dGVyID4gMCkge1xuICAgICAgc3R5bGUucGFkZGluZ0xlZnQgPSBndXR0ZXIgLyAyO1xuICAgICAgc3R5bGUucGFkZGluZ1JpZ2h0ID0gZ3V0dGVyIC8gMjtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBUYWcgey4uLnRoaXMuc2tUcmFuc1Byb3BzMlNlbGYoQ29tcFRhZyl9XG4gICAgICAgICAgICAgICBzcGFuPXtzcGFufVxuICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfT5cbiAgICAgICAge3RoaXMuc2tUcmFuc1Byb3BzMkNoaWxkKCl9XG4gICAgICA8L0NvbXBUYWc+XG4gICAgKTtcbiAgfVxuXG4gIGFsbG93VHJhbnNQcm9wczJDaGlsZChjaGlsZCkge1xuICAgIHJldHVybiB7c3R5bGU6IHt9fTtcbiAgfVxufVxuIl19