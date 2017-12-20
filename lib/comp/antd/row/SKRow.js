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

var _AntdComp2 = require('../AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

var _Const = require('../../../util/Const');

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
  //https://ant.design/components/grid-cn/#Row
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

      gutter = gutter || this.skProp(SKRow.SK_PROPS.GRID_GUTTER);

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

SKRow.SK_PROPS = {
  GRID_GUTTER: 'gridGutter'
};
SKRow.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, _row2.default.defaultProps, {
  compTag: _row2.default
});
SKRow.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _row2.default.propTypes, {
  gridGutter: _propTypes2.default.number,
  skGridGutter: _propTypes2.default.number
});
exports.default = SKRow;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9yb3cvU0tSb3cuanMiXSwibmFtZXMiOlsiZGVmYXVsdFByb3BzIiwiYXNzaWduIiwiYWxpZ24iLCJUb3AiLCJndXR0ZXIiLCJqdXN0aWZ5IiwiU3RhcnQiLCJwcm9wVHlwZXMiLCJvbmVPZiIsIk9iamVjdCIsInZhbHVlcyIsIm9uZU9mVHlwZSIsIm51bWJlciIsIm9iamVjdCIsInR5cGUiLCJzdHJpbmciLCJTS1JvdyIsImFyZ3MiLCJjb21wTmFtZSIsInByb3BzIiwiQ29tcFRhZyIsImNvbXBUYWciLCJza1Byb3AiLCJTS19QUk9QUyIsIkdSSURfR1VUVEVSIiwic2tUcmFuc1Byb3BzMlNlbGYiLCJza1RyYW5zUHJvcHMyQ2hpbGQiLCJncmlkR3V0dGVyIiwic2tHcmlkR3V0dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxjQUFJQSxZQUFKLEdBQW1CLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWM7QUFDL0JDLFNBQU8sYUFBTUMsR0FEa0I7QUFFL0JDLFVBQVEsQ0FGdUI7QUFHL0JDLFdBQVMsZUFBUUM7QUFIYyxDQUFkLEVBSWhCLGNBQUlOLFlBSlksRUFJRSxFQUpGLENBQW5COztBQU1BLGNBQUlPLFNBQUosR0FBZ0IsU0FBR04sTUFBSCxDQUFVLEVBQVYsRUFBYztBQUM1QjtBQUNBQyxTQUFPLG9CQUFVTSxLQUFWLENBQWdCQyxPQUFPQyxNQUFQLGNBQWhCLENBRnFCO0FBRzVCTixVQUFRLG9CQUFVTyxTQUFWLENBQW9CLENBQzFCLG9CQUFVQyxNQURnQixFQUUxQixvQkFBVUMsTUFGZ0IsQ0FBcEIsQ0FIb0I7QUFPNUJSLFdBQVMsb0JBQVVHLEtBQVYsQ0FBZ0JDLE9BQU9DLE1BQVAsZ0JBQWhCLENBUG1CO0FBUTVCSSxRQUFNLG9CQUFVQztBQVJZLENBQWQsRUFTYixjQUFJUixTQVRTLEVBU0UsRUFURixDQUFoQjs7SUFXcUJTLEs7OztBQVluQixtQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEseUlBQ1ZBLElBRFU7O0FBRW5CLFVBQUtDLFFBQUwsR0FBZ0IsT0FBaEI7QUFGbUI7QUFHcEI7Ozs7NkJBRVE7QUFBQSxtQkFDMEIsS0FBS0MsS0FEL0I7QUFBQSxVQUNPQyxPQURQLFVBQ0ZDLE9BREU7QUFBQSxVQUNnQmpCLE1BRGhCLFVBQ2dCQSxNQURoQjs7QUFFUEEsZUFBU0EsVUFBVSxLQUFLa0IsTUFBTCxDQUFZTixNQUFNTyxRQUFOLENBQWVDLFdBQTNCLENBQW5COztBQUVBLGFBQ0U7QUFBQyxlQUFEO0FBQUEscUJBQWEsS0FBS0MsaUJBQUwsQ0FBdUJMLE9BQXZCLENBQWI7QUFDUyxrQkFBUWhCLE1BRGpCO0FBRUcsYUFBS3NCLGtCQUFMO0FBRkgsT0FERjtBQU1EOzs7Ozs7QUEzQmtCVixLLENBQ1pPLFEsR0FBVztBQUNoQkMsZUFBYTtBQURHLEM7QUFEQ1IsSyxDQUlaaEIsWSxHQUFlLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNELFlBQXZCLEVBQXFDLGNBQUlBLFlBQXpDLEVBQXVEO0FBQzNFcUI7QUFEMkUsQ0FBdkQsQztBQUpITCxLLENBT1pULFMsR0FBWSxTQUFHTixNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTTSxTQUF2QixFQUFrQyxjQUFJQSxTQUF0QyxFQUFpRDtBQUNsRW9CLGNBQVksb0JBQVVmLE1BRDRDO0FBRWxFZ0IsZ0JBQWMsb0JBQVVoQjtBQUYwQyxDQUFqRCxDO2tCQVBBSSxLIiwiZmlsZSI6ImNvbXAvYW50ZC9yb3cvU0tSb3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1Jvd30gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U0t9IGZyb20gJ3NrLWpzJztcbmltcG9ydCBBbnRkQ29tcCBmcm9tICcuLi9BbnRkQ29tcCc7XG5pbXBvcnQge0FMSUdOLCBKVVNUSUZZfSBmcm9tICcuLi8uLi8uLi91dGlsL0NvbnN0JztcblxuUm93LmRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwge1xuICBhbGlnbjogQUxJR04uVG9wLFxuICBndXR0ZXI6IDAsXG4gIGp1c3RpZnk6IEpVU1RJRlkuU3RhcnRcbn0sIFJvdy5kZWZhdWx0UHJvcHMsIHt9KTtcblxuUm93LnByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwge1xuICAvL2h0dHBzOi8vYW50LmRlc2lnbi9jb21wb25lbnRzL2dyaWQtY24vI1Jvd1xuICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mKE9iamVjdC52YWx1ZXMoQUxJR04pKSxcbiAgZ3V0dGVyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5vYmplY3RcbiAgXSksXG4gIGp1c3RpZnk6IFByb3BUeXBlcy5vbmVPZihPYmplY3QudmFsdWVzKEpVU1RJRlkpKSxcbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZ1xufSwgUm93LnByb3BUeXBlcywge30pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS1JvdyBleHRlbmRzIEFudGRDb21wIHtcbiAgc3RhdGljIFNLX1BST1BTID0ge1xuICAgIEdSSURfR1VUVEVSOiAnZ3JpZEd1dHRlcicsXG4gIH07XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLmRlZmF1bHRQcm9wcywgUm93LmRlZmF1bHRQcm9wcywge1xuICAgIGNvbXBUYWc6IFJvd1xuICB9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAucHJvcFR5cGVzLCBSb3cucHJvcFR5cGVzLCB7XG4gICAgZ3JpZEd1dHRlcjogUHJvcFR5cGVzLm51bWJlcixcbiAgICBza0dyaWRHdXR0ZXI6IFByb3BUeXBlcy5udW1iZXJcbiAgfSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnU0tSb3cnO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7Y29tcFRhZzogQ29tcFRhZywgZ3V0dGVyfSA9IHRoaXMucHJvcHM7XG4gICAgZ3V0dGVyID0gZ3V0dGVyIHx8IHRoaXMuc2tQcm9wKFNLUm93LlNLX1BST1BTLkdSSURfR1VUVEVSKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcFRhZyB7Li4udGhpcy5za1RyYW5zUHJvcHMyU2VsZihDb21wVGFnKX1cbiAgICAgICAgICAgICAgIGd1dHRlcj17Z3V0dGVyfT5cbiAgICAgICAge3RoaXMuc2tUcmFuc1Byb3BzMkNoaWxkKCl9XG4gICAgICA8L0NvbXBUYWc+XG4gICAgKTtcbiAgfVxufVxuIl19