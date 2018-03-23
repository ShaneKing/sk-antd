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

var _Const = require('../../Const');

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
      var CompTag = this.props.compTag;

      var gutter = this.skProp(SKRow.SK_PROPS.GUTTER);

      return _react2.default.createElement(
        CompTag,
        _extends({}, this.skTransProps2Self(CompTag), {
          gutter: gutter
        }),
        this.skTransProps2Child()
      );
    }
  }]);

  return SKRow;
}(_AntdComp3.default);

SKRow.SK_PROPS = {
  GUTTER: 'gutter'
};
SKRow.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, _row2.default.defaultProps, {
  compTag: _row2.default
});
SKRow.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _row2.default.propTypes, {});
exports.default = SKRow;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGQvcm93L1NLUm93LmpzIl0sIm5hbWVzIjpbImRlZmF1bHRQcm9wcyIsImFzc2lnbiIsImFsaWduIiwiVG9wIiwiZ3V0dGVyIiwianVzdGlmeSIsIlN0YXJ0IiwicHJvcFR5cGVzIiwib25lT2YiLCJPYmplY3QiLCJ2YWx1ZXMiLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJvYmplY3QiLCJ0eXBlIiwic3RyaW5nIiwiU0tSb3ciLCJhcmdzIiwiY29tcE5hbWUiLCJDb21wVGFnIiwicHJvcHMiLCJjb21wVGFnIiwic2tQcm9wIiwiU0tfUFJPUFMiLCJHVVRURVIiLCJza1RyYW5zUHJvcHMyU2VsZiIsInNrVHJhbnNQcm9wczJDaGlsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0FBRUEsY0FBSUEsWUFBSixHQUFtQixTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjO0FBQy9CQyxTQUFPLGFBQU1DLEdBRGtCO0FBRS9CQyxVQUFRLENBRnVCO0FBRy9CQyxXQUFTLGVBQVFDO0FBSGMsQ0FBZCxFQUloQixjQUFJTixZQUpZLEVBSUUsRUFKRixDQUFuQjs7QUFNQSxjQUFJTyxTQUFKLEdBQWdCLFNBQUdOLE1BQUgsQ0FBVSxFQUFWLEVBQWM7QUFDNUI7QUFDQUMsU0FBTyxvQkFBVU0sS0FBVixDQUFnQkMsT0FBT0MsTUFBUCxjQUFoQixDQUZxQjtBQUc1Qk4sVUFBUSxvQkFBVU8sU0FBVixDQUFvQixDQUMxQixvQkFBVUMsTUFEZ0IsRUFFMUIsb0JBQVVDLE1BRmdCLENBQXBCLENBSG9CO0FBTzVCUixXQUFTLG9CQUFVRyxLQUFWLENBQWdCQyxPQUFPQyxNQUFQLGdCQUFoQixDQVBtQjtBQVE1QkksUUFBTSxvQkFBVUM7QUFSWSxDQUFkLEVBU2IsY0FBSVIsU0FUUyxFQVNFLEVBVEYsQ0FBaEI7O0lBV3FCUyxLOzs7QUFTbkIsbUJBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLHlJQUNWQSxJQURVOztBQUVuQixVQUFLQyxRQUFMLEdBQWdCLE9BQWhCO0FBRm1CO0FBR3BCOzs7OzZCQUVRO0FBQUEsVUFDVUMsT0FEVixHQUNzQixLQUFLQyxLQUQzQixDQUNDQyxPQUREOztBQUVQLFVBQU1qQixTQUFTLEtBQUtrQixNQUFMLENBQVlOLE1BQU1PLFFBQU4sQ0FBZUMsTUFBM0IsQ0FBZjs7QUFFQSxhQUNFO0FBQUMsZUFBRDtBQUFBLHFCQUNNLEtBQUtDLGlCQUFMLENBQXVCTixPQUF2QixDQUROO0FBRUUsa0JBQVFmO0FBRlY7QUFJRyxhQUFLc0Isa0JBQUw7QUFKSCxPQURGO0FBUUQ7Ozs7OztBQTFCa0JWLEssQ0FDWk8sUSxHQUFXO0FBQ2hCQyxVQUFRO0FBRFEsQztBQURDUixLLENBSVpoQixZLEdBQWUsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0QsWUFBdkIsRUFBcUMsY0FBSUEsWUFBekMsRUFBdUQ7QUFDM0VxQjtBQUQyRSxDQUF2RCxDO0FBSkhMLEssQ0FPWlQsUyxHQUFZLFNBQUdOLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNNLFNBQXZCLEVBQWtDLGNBQUlBLFNBQXRDLEVBQWlELEVBQWpELEM7a0JBUEFTLEsiLCJmaWxlIjoiYW50ZC9yb3cvU0tSb3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3cgfSBmcm9tICdhbnRkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU0sgfSBmcm9tICdzay1qcyc7XG5pbXBvcnQgQW50ZENvbXAgZnJvbSAnLi4vQW50ZENvbXAnO1xuaW1wb3J0IHsgQUxJR04sIEpVU1RJRlkgfSBmcm9tICcuLi8uLi9Db25zdCc7XG5cblJvdy5kZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIHtcbiAgYWxpZ246IEFMSUdOLlRvcCxcbiAgZ3V0dGVyOiAwLFxuICBqdXN0aWZ5OiBKVVNUSUZZLlN0YXJ0LFxufSwgUm93LmRlZmF1bHRQcm9wcywge30pO1xuXG5Sb3cucHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCB7XG4gIC8vaHR0cHM6Ly9hbnQuZGVzaWduL2NvbXBvbmVudHMvZ3JpZC1jbi8jUm93XG4gIGFsaWduOiBQcm9wVHlwZXMub25lT2YoT2JqZWN0LnZhbHVlcyhBTElHTikpLFxuICBndXR0ZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLm9iamVjdCxcbiAgXSksXG4gIGp1c3RpZnk6IFByb3BUeXBlcy5vbmVPZihPYmplY3QudmFsdWVzKEpVU1RJRlkpKSxcbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbn0sIFJvdy5wcm9wVHlwZXMsIHt9KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tSb3cgZXh0ZW5kcyBBbnRkQ29tcCB7XG4gIHN0YXRpYyBTS19QUk9QUyA9IHtcbiAgICBHVVRURVI6ICdndXR0ZXInLFxuICB9O1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5kZWZhdWx0UHJvcHMsIFJvdy5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBSb3csXG4gIH0pO1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5wcm9wVHlwZXMsIFJvdy5wcm9wVHlwZXMsIHt9KTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5jb21wTmFtZSA9ICdTS1Jvdyc7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb21wVGFnOiBDb21wVGFnIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGd1dHRlciA9IHRoaXMuc2tQcm9wKFNLUm93LlNLX1BST1BTLkdVVFRFUik7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBUYWdcbiAgICAgICAgey4uLnRoaXMuc2tUcmFuc1Byb3BzMlNlbGYoQ29tcFRhZyl9XG4gICAgICAgIGd1dHRlcj17Z3V0dGVyfVxuICAgICAgPlxuICAgICAgICB7dGhpcy5za1RyYW5zUHJvcHMyQ2hpbGQoKX1cbiAgICAgIDwvQ29tcFRhZz5cbiAgICApO1xuICB9XG59XG4iXX0=