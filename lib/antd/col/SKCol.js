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

/*eslint no-unused-vars: "off"*/

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
      var CompTag = this.props.compTag;

      var span = this.skProp(SKCol.SK_PROPS.SPAN);
      var gutter = this.skProp(_SKRow2.default.SK_PROPS.GUTTER);

      var style = this.props.style || {};
      if (gutter > 0) {
        style.paddingLeft = gutter / 2;
        style.paddingRight = gutter / 2;
      }

      return _react2.default.createElement(
        CompTag,
        _extends({}, this.skTransProps2Self(CompTag), {
          span: span,
          style: style
        }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGQvY29sL1NLQ29sLmpzIl0sIm5hbWVzIjpbImRlZmF1bHRQcm9wcyIsImFzc2lnbiIsIm9mZnNldCIsIm9yZGVyIiwicHVsbCIsInB1c2giLCJwcm9wVHlwZXMiLCJudW1iZXIiLCJzcGFuIiwieHMiLCJvbmVPZlR5cGUiLCJvYmplY3QiLCJzbSIsIm1kIiwibGciLCJ4bCIsInh4bCIsIlNLQ29sIiwiYXJncyIsImNvbXBOYW1lIiwiQ29tcFRhZyIsInByb3BzIiwiY29tcFRhZyIsInNrUHJvcCIsIlNLX1BST1BTIiwiU1BBTiIsImd1dHRlciIsIkdVVFRFUiIsInN0eWxlIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJza1RyYW5zUHJvcHMyU2VsZiIsInNrVHJhbnNQcm9wczJDaGlsZCIsImNoaWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOztBQUVBLGNBQUlBLFlBQUosR0FBbUIsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYztBQUMvQkMsVUFBUSxDQUR1QjtBQUUvQkMsU0FBTyxDQUZ3QjtBQUcvQkMsUUFBTSxDQUh5QjtBQUkvQkMsUUFBTTtBQUp5QixDQUFkLEVBS2hCLGNBQUlMLFlBTFksRUFLRSxFQUxGLENBQW5COztBQU9BLGNBQUlNLFNBQUosR0FBZ0IsU0FBR0wsTUFBSCxDQUFVLEVBQVYsRUFBYztBQUM1QjtBQUNBQyxVQUFRLG9CQUFVSyxNQUZVO0FBRzVCSixTQUFPLG9CQUFVSSxNQUhXO0FBSTVCSCxRQUFNLG9CQUFVRyxNQUpZO0FBSzVCRixRQUFNLG9CQUFVRSxNQUxZO0FBTTVCQyxRQUFNLG9CQUFVRCxNQU5ZO0FBTzVCRSxNQUFJLG9CQUFVQyxTQUFWLENBQW9CLENBQ3RCLG9CQUFVSCxNQURZLEVBRXRCLG9CQUFVSSxNQUZZLENBQXBCLENBUHdCO0FBVzVCQyxNQUFJLG9CQUFVRixTQUFWLENBQW9CLENBQ3RCLG9CQUFVSCxNQURZLEVBRXRCLG9CQUFVSSxNQUZZLENBQXBCLENBWHdCO0FBZTVCRSxNQUFJLG9CQUFVSCxTQUFWLENBQW9CLENBQ3RCLG9CQUFVSCxNQURZLEVBRXRCLG9CQUFVSSxNQUZZLENBQXBCLENBZndCO0FBbUI1QkcsTUFBSSxvQkFBVUosU0FBVixDQUFvQixDQUN0QixvQkFBVUgsTUFEWSxFQUV0QixvQkFBVUksTUFGWSxDQUFwQixDQW5Cd0I7QUF1QjVCSSxNQUFJLG9CQUFVTCxTQUFWLENBQW9CLENBQ3RCLG9CQUFVSCxNQURZLEVBRXRCLG9CQUFVSSxNQUZZLENBQXBCLENBdkJ3QjtBQTJCNUJLLE9BQUssb0JBQVVOLFNBQVYsQ0FBb0IsQ0FDdkIsb0JBQVVILE1BRGEsRUFFdkIsb0JBQVVJLE1BRmEsQ0FBcEI7QUEzQnVCLENBQWQsRUErQmIsY0FBSUwsU0EvQlMsRUErQkUsRUEvQkYsQ0FBaEI7O0lBaUNxQlcsSzs7O0FBU25CLG1CQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSx5SUFDVkEsSUFEVTs7QUFFbkIsVUFBS0MsUUFBTCxHQUFnQixPQUFoQjtBQUZtQjtBQUdwQjs7Ozs2QkFFUTtBQUFBLFVBQ1VDLE9BRFYsR0FDc0IsS0FBS0MsS0FEM0IsQ0FDQ0MsT0FERDs7QUFFUCxVQUFNZCxPQUFPLEtBQUtlLE1BQUwsQ0FBWU4sTUFBTU8sUUFBTixDQUFlQyxJQUEzQixDQUFiO0FBQ0EsVUFBTUMsU0FBUyxLQUFLSCxNQUFMLENBQVksZ0JBQU1DLFFBQU4sQ0FBZUcsTUFBM0IsQ0FBZjs7QUFFQSxVQUFNQyxRQUFRLEtBQUtQLEtBQUwsQ0FBV08sS0FBWCxJQUFvQixFQUFsQztBQUNBLFVBQUlGLFNBQVMsQ0FBYixFQUFnQjtBQUNkRSxjQUFNQyxXQUFOLEdBQW9CSCxTQUFTLENBQTdCO0FBQ0FFLGNBQU1FLFlBQU4sR0FBcUJKLFNBQVMsQ0FBOUI7QUFDRDs7QUFFRCxhQUNFO0FBQUMsZUFBRDtBQUFBLHFCQUNNLEtBQUtLLGlCQUFMLENBQXVCWCxPQUF2QixDQUROO0FBRUUsZ0JBQU1aLElBRlI7QUFHRSxpQkFBT29CO0FBSFQ7QUFLRyxhQUFLSSxrQkFBTDtBQUxILE9BREY7QUFTRDs7OzBDQUVxQkMsSyxFQUFPO0FBQzNCLGFBQU8sRUFBRUwsT0FBTyxFQUFULEVBQVA7QUFDRDs7Ozs7O0FBdENrQlgsSyxDQUNaTyxRLEdBQVc7QUFDaEJDLFFBQU07QUFEVSxDO0FBRENSLEssQ0FJWmpCLFksR0FBZSxTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTRCxZQUF2QixFQUFxQyxjQUFJQSxZQUF6QyxFQUF1RDtBQUMzRXNCO0FBRDJFLENBQXZELEM7QUFKSEwsSyxDQU9aWCxTLEdBQVksU0FBR0wsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0ssU0FBdkIsRUFBa0MsY0FBSUEsU0FBdEMsRUFBaUQsRUFBakQsQztrQkFQQVcsSyIsImZpbGUiOiJhbnRkL2NvbC9TS0NvbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTSyB9IGZyb20gJ3NrLWpzJztcbmltcG9ydCBBbnRkQ29tcCBmcm9tICcuLi9BbnRkQ29tcCc7XG5pbXBvcnQgU0tSb3cgZnJvbSAnLi4vcm93L1NLUm93JztcblxuLyplc2xpbnQgbm8tdW51c2VkLXZhcnM6IFwib2ZmXCIqL1xuXG5Db2wuZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCB7XG4gIG9mZnNldDogMCxcbiAgb3JkZXI6IDAsXG4gIHB1bGw6IDAsXG4gIHB1c2g6IDAsXG59LCBDb2wuZGVmYXVsdFByb3BzLCB7fSk7XG5cbkNvbC5wcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIHtcbiAgLy9odHRwczovL2FudC5kZXNpZ24vY29tcG9uZW50cy9ncmlkLWNuLyNDb2xcbiAgb2Zmc2V0OiBQcm9wVHlwZXMubnVtYmVyLFxuICBvcmRlcjogUHJvcFR5cGVzLm51bWJlcixcbiAgcHVsbDogUHJvcFR5cGVzLm51bWJlcixcbiAgcHVzaDogUHJvcFR5cGVzLm51bWJlcixcbiAgc3BhbjogUHJvcFR5cGVzLm51bWJlcixcbiAgeHM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLm9iamVjdCxcbiAgXSksXG4gIHNtOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5vYmplY3QsXG4gIF0pLFxuICBtZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMub2JqZWN0LFxuICBdKSxcbiAgbGc6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLm9iamVjdCxcbiAgXSksXG4gIHhsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5vYmplY3QsXG4gIF0pLFxuICB4eGw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLm9iamVjdCxcbiAgXSksXG59LCBDb2wucHJvcFR5cGVzLCB7fSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNLQ29sIGV4dGVuZHMgQW50ZENvbXAge1xuICBzdGF0aWMgU0tfUFJPUFMgPSB7XG4gICAgU1BBTjogJ3NwYW4nLFxuICB9O1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5kZWZhdWx0UHJvcHMsIENvbC5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBDb2wsXG4gIH0pO1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5wcm9wVHlwZXMsIENvbC5wcm9wVHlwZXMsIHt9KTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5jb21wTmFtZSA9ICdTS0NvbCc7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb21wVGFnOiBDb21wVGFnIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHNwYW4gPSB0aGlzLnNrUHJvcChTS0NvbC5TS19QUk9QUy5TUEFOKTtcbiAgICBjb25zdCBndXR0ZXIgPSB0aGlzLnNrUHJvcChTS1Jvdy5TS19QUk9QUy5HVVRURVIpO1xuXG4gICAgY29uc3Qgc3R5bGUgPSB0aGlzLnByb3BzLnN0eWxlIHx8IHt9O1xuICAgIGlmIChndXR0ZXIgPiAwKSB7XG4gICAgICBzdHlsZS5wYWRkaW5nTGVmdCA9IGd1dHRlciAvIDI7XG4gICAgICBzdHlsZS5wYWRkaW5nUmlnaHQgPSBndXR0ZXIgLyAyO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcFRhZ1xuICAgICAgICB7Li4udGhpcy5za1RyYW5zUHJvcHMyU2VsZihDb21wVGFnKX1cbiAgICAgICAgc3Bhbj17c3Bhbn1cbiAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgPlxuICAgICAgICB7dGhpcy5za1RyYW5zUHJvcHMyQ2hpbGQoKX1cbiAgICAgIDwvQ29tcFRhZz5cbiAgICApO1xuICB9XG5cbiAgYWxsb3dUcmFuc1Byb3BzMkNoaWxkKGNoaWxkKSB7XG4gICAgcmV0dXJuIHsgc3R5bGU6IHt9IH07XG4gIH1cbn1cbiJdfQ==