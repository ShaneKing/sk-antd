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
  }]);

  return SKCol;
}(_AntdComp3.default);

SKCol.SK_PROPS = {
  COL_SPAN: 'colSpan',
  GRID_GUTTER: 'gridGutter'
};
SKCol.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, {
  compTag: _col2.default
});
SKCol.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, {
  colSpan: _propTypes2.default.number,
  skColSpan: _propTypes2.default.number,
  gridGutter: _propTypes2.default.number,
  skGridGutter: _propTypes2.default.number
});
exports.default = SKCol;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9jb2wvU0tDb2wuanMiXSwibmFtZXMiOlsiU0tDb2wiLCJhcmdzIiwiY29tcE5hbWUiLCJwcm9wcyIsIkNvbXBUYWciLCJjb21wVGFnIiwic3BhbiIsImd1dHRlciIsInN0eWxlIiwic2tQcm9wIiwiU0tfUFJPUFMiLCJDT0xfU1BBTiIsIkdSSURfR1VUVEVSIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJza1RyYW5zUHJvcHMyU2VsZiIsInNrVHJhbnNQcm9wczJDaGlsZCIsImRlZmF1bHRQcm9wcyIsImFzc2lnbiIsInByb3BUeXBlcyIsImNvbFNwYW4iLCJudW1iZXIiLCJza0NvbFNwYW4iLCJncmlkR3V0dGVyIiwic2tHcmlkR3V0dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7OztBQWVuQixtQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEseUlBQ1ZBLElBRFU7O0FBRW5CLFVBQUtDLFFBQUwsR0FBZ0IsT0FBaEI7QUFGbUI7QUFHcEI7Ozs7NkJBRVE7QUFBQSxtQkFDdUMsS0FBS0MsS0FENUM7QUFBQSxVQUNPQyxPQURQLFVBQ0ZDLE9BREU7QUFBQSxVQUNnQkMsSUFEaEIsVUFDZ0JBLElBRGhCO0FBQUEsVUFDc0JDLE1BRHRCLFVBQ3NCQSxNQUR0QjtBQUFBLFVBQzhCQyxLQUQ5QixVQUM4QkEsS0FEOUI7O0FBRVBGLGFBQU9BLFFBQVEsS0FBS0csTUFBTCxDQUFZVCxNQUFNVSxRQUFOLENBQWVDLFFBQTNCLENBQWY7O0FBRUFILGNBQVFBLFNBQVMsRUFBakI7QUFDQUQsZUFBU0EsVUFBVSxLQUFLRSxNQUFMLENBQVlULE1BQU1VLFFBQU4sQ0FBZUUsV0FBM0IsQ0FBbkI7QUFDQSxVQUFJTCxTQUFTLENBQWIsRUFBZ0I7QUFDZEMsY0FBTUssV0FBTixHQUFvQk4sU0FBUyxDQUE3QjtBQUNBQyxjQUFNTSxZQUFOLEdBQXFCUCxTQUFTLENBQTlCO0FBQ0Q7O0FBRUQsYUFDRTtBQUFDLGVBQUQ7QUFBQSxxQkFBYSxLQUFLUSxpQkFBTCxDQUF1QlgsT0FBdkIsQ0FBYjtBQUNTLGdCQUFNRSxJQURmO0FBRUcsYUFBS1Usa0JBQUw7QUFGSCxPQURGO0FBTUQ7Ozs7OztBQXJDa0JoQixLLENBQ1pVLFEsR0FBVztBQUNoQkMsWUFBVSxTQURNO0FBRWhCQyxlQUFhO0FBRkcsQztBQURDWixLLENBS1ppQixZLEdBQWUsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0QsWUFBdkIsRUFBcUM7QUFDekRaO0FBRHlELENBQXJDLEM7QUFMSEwsSyxDQVFabUIsUyxHQUFZLFNBQUdELE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNDLFNBQXZCLEVBQWtDO0FBQ25EQyxXQUFTLG9CQUFVQyxNQURnQztBQUVuREMsYUFBVyxvQkFBVUQsTUFGOEI7QUFHbkRFLGNBQVksb0JBQVVGLE1BSDZCO0FBSW5ERyxnQkFBYyxvQkFBVUg7QUFKMkIsQ0FBbEMsQztrQkFSQXJCLEsiLCJmaWxlIjoiY29tcC9hbnRkL2NvbC9TS0NvbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29sfSBmcm9tICdhbnRkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTS30gZnJvbSAnc2stanMnO1xuaW1wb3J0IEFudGRDb21wIGZyb20gJy4uL0FudGRDb21wJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tDb2wgZXh0ZW5kcyBBbnRkQ29tcCB7XG4gIHN0YXRpYyBTS19QUk9QUyA9IHtcbiAgICBDT0xfU1BBTjogJ2NvbFNwYW4nLFxuICAgIEdSSURfR1VUVEVSOiAnZ3JpZEd1dHRlcidcbiAgfTtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAuZGVmYXVsdFByb3BzLCB7XG4gICAgY29tcFRhZzogQ29sXG4gIH0pO1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5wcm9wVHlwZXMsIHtcbiAgICBjb2xTcGFuOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHNrQ29sU3BhbjogUHJvcFR5cGVzLm51bWJlcixcbiAgICBncmlkR3V0dGVyOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHNrR3JpZEd1dHRlcjogUHJvcFR5cGVzLm51bWJlclxuICB9KTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5jb21wTmFtZSA9ICdTS0NvbCc7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtjb21wVGFnOiBDb21wVGFnLCBzcGFuLCBndXR0ZXIsIHN0eWxlfSA9IHRoaXMucHJvcHM7XG4gICAgc3BhbiA9IHNwYW4gfHwgdGhpcy5za1Byb3AoU0tDb2wuU0tfUFJPUFMuQ09MX1NQQU4pO1xuXG4gICAgc3R5bGUgPSBzdHlsZSB8fCB7fTtcbiAgICBndXR0ZXIgPSBndXR0ZXIgfHwgdGhpcy5za1Byb3AoU0tDb2wuU0tfUFJPUFMuR1JJRF9HVVRURVIpO1xuICAgIGlmIChndXR0ZXIgPiAwKSB7XG4gICAgICBzdHlsZS5wYWRkaW5nTGVmdCA9IGd1dHRlciAvIDI7XG4gICAgICBzdHlsZS5wYWRkaW5nUmlnaHQgPSBndXR0ZXIgLyAyO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcFRhZyB7Li4udGhpcy5za1RyYW5zUHJvcHMyU2VsZihDb21wVGFnKX1cbiAgICAgICAgICAgICAgIHNwYW49e3NwYW59PlxuICAgICAgICB7dGhpcy5za1RyYW5zUHJvcHMyQ2hpbGQoKX1cbiAgICAgIDwvQ29tcFRhZz5cbiAgICApO1xuICB9XG59XG4iXX0=