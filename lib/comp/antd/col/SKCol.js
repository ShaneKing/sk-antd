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

      span = span || this.skProp(SKCol.SK_PROPS.COL_SPAN);

      style = style || {};
      gutter = gutter || this.skProp(SKCol.SK_PROPS.GRID_GUTTER);
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

SKCol.SK_PROPS = {
  COL_SPAN: 'colSpan',
  GRID_GUTTER: 'gridGutter'
};
SKCol.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, _col2.default.defaultProps, {
  compTag: _col2.default
});
SKCol.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _col2.default.propTypes, {
  colSpan: _propTypes2.default.number,
  skColSpan: _propTypes2.default.number,
  gridGutter: _propTypes2.default.number,
  skGridGutter: _propTypes2.default.number
});
exports.default = SKCol;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9jb2wvU0tDb2wuanMiXSwibmFtZXMiOlsiZGVmYXVsdFByb3BzIiwiYXNzaWduIiwib2Zmc2V0Iiwib3JkZXIiLCJwdWxsIiwicHVzaCIsInByb3BUeXBlcyIsIm51bWJlciIsInNwYW4iLCJ4cyIsIm9uZU9mVHlwZSIsIm9iamVjdCIsInNtIiwibWQiLCJsZyIsInhsIiwieHhsIiwiU0tDb2wiLCJhcmdzIiwiY29tcE5hbWUiLCJwcm9wcyIsIkNvbXBUYWciLCJjb21wVGFnIiwiZ3V0dGVyIiwic3R5bGUiLCJza1Byb3AiLCJTS19QUk9QUyIsIkNPTF9TUEFOIiwiR1JJRF9HVVRURVIiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsInNrVHJhbnNQcm9wczJTZWxmIiwic2tUcmFuc1Byb3BzMkNoaWxkIiwiY2hpbGQiLCJjb2xTcGFuIiwic2tDb2xTcGFuIiwiZ3JpZEd1dHRlciIsInNrR3JpZEd1dHRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsY0FBSUEsWUFBSixHQUFtQixTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjO0FBQy9CQyxVQUFRLENBRHVCO0FBRS9CQyxTQUFPLENBRndCO0FBRy9CQyxRQUFNLENBSHlCO0FBSS9CQyxRQUFNO0FBSnlCLENBQWQsRUFLaEIsY0FBSUwsWUFMWSxFQUtFLEVBTEYsQ0FBbkI7O0FBT0EsY0FBSU0sU0FBSixHQUFnQixTQUFHTCxNQUFILENBQVUsRUFBVixFQUFjO0FBQzVCO0FBQ0FDLFVBQVEsb0JBQVVLLE1BRlU7QUFHNUJKLFNBQU8sb0JBQVVJLE1BSFc7QUFJNUJILFFBQU0sb0JBQVVHLE1BSlk7QUFLNUJGLFFBQU0sb0JBQVVFLE1BTFk7QUFNNUJDLFFBQU0sb0JBQVVELE1BTlk7QUFPNUJFLE1BQUksb0JBQVVDLFNBQVYsQ0FBb0IsQ0FDdEIsb0JBQVVILE1BRFksRUFFdEIsb0JBQVVJLE1BRlksQ0FBcEIsQ0FQd0I7QUFXNUJDLE1BQUksb0JBQVVGLFNBQVYsQ0FBb0IsQ0FDdEIsb0JBQVVILE1BRFksRUFFdEIsb0JBQVVJLE1BRlksQ0FBcEIsQ0FYd0I7QUFlNUJFLE1BQUksb0JBQVVILFNBQVYsQ0FBb0IsQ0FDdEIsb0JBQVVILE1BRFksRUFFdEIsb0JBQVVJLE1BRlksQ0FBcEIsQ0Fmd0I7QUFtQjVCRyxNQUFJLG9CQUFVSixTQUFWLENBQW9CLENBQ3RCLG9CQUFVSCxNQURZLEVBRXRCLG9CQUFVSSxNQUZZLENBQXBCLENBbkJ3QjtBQXVCNUJJLE1BQUksb0JBQVVMLFNBQVYsQ0FBb0IsQ0FDdEIsb0JBQVVILE1BRFksRUFFdEIsb0JBQVVJLE1BRlksQ0FBcEIsQ0F2QndCO0FBMkI1QkssT0FBSyxvQkFBVU4sU0FBVixDQUFvQixDQUN2QixvQkFBVUgsTUFEYSxFQUV2QixvQkFBVUksTUFGYSxDQUFwQjtBQTNCdUIsQ0FBZCxFQStCYixjQUFJTCxTQS9CUyxFQStCRSxFQS9CRixDQUFoQjs7SUFpQ3FCVyxLOzs7QUFlbkIsbUJBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLHlJQUNWQSxJQURVOztBQUVuQixVQUFLQyxRQUFMLEdBQWdCLE9BQWhCO0FBRm1CO0FBR3BCOzs7OzZCQUVRO0FBQUEsbUJBQ3VDLEtBQUtDLEtBRDVDO0FBQUEsVUFDT0MsT0FEUCxVQUNGQyxPQURFO0FBQUEsVUFDZ0JkLElBRGhCLFVBQ2dCQSxJQURoQjtBQUFBLFVBQ3NCZSxNQUR0QixVQUNzQkEsTUFEdEI7QUFBQSxVQUM4QkMsS0FEOUIsVUFDOEJBLEtBRDlCOztBQUVQaEIsYUFBT0EsUUFBUSxLQUFLaUIsTUFBTCxDQUFZUixNQUFNUyxRQUFOLENBQWVDLFFBQTNCLENBQWY7O0FBRUFILGNBQVFBLFNBQVMsRUFBakI7QUFDQUQsZUFBU0EsVUFBVSxLQUFLRSxNQUFMLENBQVlSLE1BQU1TLFFBQU4sQ0FBZUUsV0FBM0IsQ0FBbkI7QUFDQSxVQUFJTCxTQUFTLENBQWIsRUFBZ0I7QUFDZEMsY0FBTUssV0FBTixHQUFvQk4sU0FBUyxDQUE3QjtBQUNBQyxjQUFNTSxZQUFOLEdBQXFCUCxTQUFTLENBQTlCO0FBQ0Q7O0FBRUQsYUFDRTtBQUFDLGVBQUQ7QUFBQSxxQkFBYSxLQUFLUSxpQkFBTCxDQUF1QlYsT0FBdkIsQ0FBYjtBQUNTLGdCQUFNYixJQURmO0FBRUcsYUFBS3dCLGtCQUFMO0FBRkgsT0FERjtBQU1EOzs7MENBRXFCQyxLLEVBQU87QUFDM0IsYUFBTyxFQUFDVCxPQUFPLEVBQVIsRUFBUDtBQUNEOzs7Ozs7QUF6Q2tCUCxLLENBQ1pTLFEsR0FBVztBQUNoQkMsWUFBVSxTQURNO0FBRWhCQyxlQUFhO0FBRkcsQztBQURDWCxLLENBS1pqQixZLEdBQWUsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0QsWUFBdkIsRUFBcUMsY0FBSUEsWUFBekMsRUFBdUQ7QUFDM0VzQjtBQUQyRSxDQUF2RCxDO0FBTEhMLEssQ0FRWlgsUyxHQUFZLFNBQUdMLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNLLFNBQXZCLEVBQWtDLGNBQUlBLFNBQXRDLEVBQWlEO0FBQ2xFNEIsV0FBUyxvQkFBVTNCLE1BRCtDO0FBRWxFNEIsYUFBVyxvQkFBVTVCLE1BRjZDO0FBR2xFNkIsY0FBWSxvQkFBVTdCLE1BSDRDO0FBSWxFOEIsZ0JBQWMsb0JBQVU5QjtBQUowQyxDQUFqRCxDO2tCQVJBVSxLIiwiZmlsZSI6ImNvbXAvYW50ZC9jb2wvU0tDb2wuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U0t9IGZyb20gJ3NrLWpzJztcbmltcG9ydCBBbnRkQ29tcCBmcm9tICcuLi9BbnRkQ29tcCc7XG5cbkNvbC5kZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIHtcbiAgb2Zmc2V0OiAwLFxuICBvcmRlcjogMCxcbiAgcHVsbDogMCxcbiAgcHVzaDogMFxufSwgQ29sLmRlZmF1bHRQcm9wcywge30pO1xuXG5Db2wucHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCB7XG4gIC8vaHR0cHM6Ly9hbnQuZGVzaWduL2NvbXBvbmVudHMvZ3JpZC1jbi8jQ29sXG4gIG9mZnNldDogUHJvcFR5cGVzLm51bWJlcixcbiAgb3JkZXI6IFByb3BUeXBlcy5udW1iZXIsXG4gIHB1bGw6IFByb3BUeXBlcy5udW1iZXIsXG4gIHB1c2g6IFByb3BUeXBlcy5udW1iZXIsXG4gIHNwYW46IFByb3BUeXBlcy5udW1iZXIsXG4gIHhzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5vYmplY3RcbiAgXSksXG4gIHNtOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5vYmplY3RcbiAgXSksXG4gIG1kOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5vYmplY3RcbiAgXSksXG4gIGxnOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5vYmplY3RcbiAgXSksXG4gIHhsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5vYmplY3RcbiAgXSksXG4gIHh4bDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMub2JqZWN0XG4gIF0pXG59LCBDb2wucHJvcFR5cGVzLCB7fSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNLQ29sIGV4dGVuZHMgQW50ZENvbXAge1xuICBzdGF0aWMgU0tfUFJPUFMgPSB7XG4gICAgQ09MX1NQQU46ICdjb2xTcGFuJyxcbiAgICBHUklEX0dVVFRFUjogJ2dyaWRHdXR0ZXInXG4gIH07XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLmRlZmF1bHRQcm9wcywgQ29sLmRlZmF1bHRQcm9wcywge1xuICAgIGNvbXBUYWc6IENvbFxuICB9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAucHJvcFR5cGVzLCBDb2wucHJvcFR5cGVzLCB7XG4gICAgY29sU3BhbjogUHJvcFR5cGVzLm51bWJlcixcbiAgICBza0NvbFNwYW46IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZ3JpZEd1dHRlcjogUHJvcFR5cGVzLm51bWJlcixcbiAgICBza0dyaWRHdXR0ZXI6IFByb3BUeXBlcy5udW1iZXJcbiAgfSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnU0tDb2wnO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7Y29tcFRhZzogQ29tcFRhZywgc3BhbiwgZ3V0dGVyLCBzdHlsZX0gPSB0aGlzLnByb3BzO1xuICAgIHNwYW4gPSBzcGFuIHx8IHRoaXMuc2tQcm9wKFNLQ29sLlNLX1BST1BTLkNPTF9TUEFOKTtcblxuICAgIHN0eWxlID0gc3R5bGUgfHwge307XG4gICAgZ3V0dGVyID0gZ3V0dGVyIHx8IHRoaXMuc2tQcm9wKFNLQ29sLlNLX1BST1BTLkdSSURfR1VUVEVSKTtcbiAgICBpZiAoZ3V0dGVyID4gMCkge1xuICAgICAgc3R5bGUucGFkZGluZ0xlZnQgPSBndXR0ZXIgLyAyO1xuICAgICAgc3R5bGUucGFkZGluZ1JpZ2h0ID0gZ3V0dGVyIC8gMjtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBUYWcgey4uLnRoaXMuc2tUcmFuc1Byb3BzMlNlbGYoQ29tcFRhZyl9XG4gICAgICAgICAgICAgICBzcGFuPXtzcGFufT5cbiAgICAgICAge3RoaXMuc2tUcmFuc1Byb3BzMkNoaWxkKCl9XG4gICAgICA8L0NvbXBUYWc+XG4gICAgKTtcbiAgfVxuXG4gIGFsbG93VHJhbnNQcm9wczJDaGlsZChjaGlsZCkge1xuICAgIHJldHVybiB7c3R5bGU6IHt9fTtcbiAgfVxufVxuIl19