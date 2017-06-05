'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _antd = require('antd');

var _skJs = require('sk-js');

var _skJs2 = _interopRequireDefault(_skJs);

var _Comp2 = require('../../utils/Comp');

var _Comp3 = _interopRequireDefault(_Comp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SKCol = function (_Comp) {
  _inherits(SKCol, _Comp);

  function SKCol() {
    var _ref;

    _classCallCheck(this, SKCol);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(this, (_ref = SKCol.__proto__ || Object.getPrototypeOf(SKCol)).call.apply(_ref, [this].concat(args)));
  }

  _createClass(SKCol, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          CompTag = _props.compTag,
          span = _props.span,
          gutter = _props.gutter,
          style = _props.style;

      span = span || this.skProp(_Comp3.default.SK_PROPS.COL_SPAN);

      style = style || {};
      gutter = gutter || this.skProp(_Comp3.default.SK_PROPS.GRID_GUTTER);
      if (gutter > 0) {
        style.paddingLeft = gutter / 2;
        style.paddingRight = gutter / 2;
      }

      return React.createElement(
        CompTag,
        _extends({}, this.compValidProps(CompTag), {
          span: span }),
        this.skPropsTrans()
      );
    }
  }, {
    key: 'childPropsTrans',
    value: function childPropsTrans(child) {
      return { style: {} };
    }
  }]);

  return SKCol;
}(_Comp3.default);

SKCol.defaultProps = {
  compTag: _antd.Col
};
SKCol.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _antd.Col.propTypes, {});
exports.default = SKCol;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FudGQvU0tDb2wuanMiXSwibmFtZXMiOlsiU0tDb2wiLCJhcmdzIiwicHJvcHMiLCJDb21wVGFnIiwiY29tcFRhZyIsInNwYW4iLCJndXR0ZXIiLCJzdHlsZSIsInNrUHJvcCIsIlNLX1BST1BTIiwiQ09MX1NQQU4iLCJHUklEX0dVVFRFUiIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwiY29tcFZhbGlkUHJvcHMiLCJza1Byb3BzVHJhbnMiLCJjaGlsZCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsImFzc2lnbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7O0FBTW5CLG1CQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSxvSUFDVkEsSUFEVTtBQUVwQjs7Ozs2QkFFUTtBQUFBLG1CQUN1QyxLQUFLQyxLQUQ1QztBQUFBLFVBQ09DLE9BRFAsVUFDRkMsT0FERTtBQUFBLFVBQ2dCQyxJQURoQixVQUNnQkEsSUFEaEI7QUFBQSxVQUNzQkMsTUFEdEIsVUFDc0JBLE1BRHRCO0FBQUEsVUFDOEJDLEtBRDlCLFVBQzhCQSxLQUQ5Qjs7QUFFUEYsYUFBT0EsUUFBUSxLQUFLRyxNQUFMLENBQVksZUFBS0MsUUFBTCxDQUFjQyxRQUExQixDQUFmOztBQUVBSCxjQUFRQSxTQUFTLEVBQWpCO0FBQ0FELGVBQVNBLFVBQVUsS0FBS0UsTUFBTCxDQUFZLGVBQUtDLFFBQUwsQ0FBY0UsV0FBMUIsQ0FBbkI7QUFDQSxVQUFJTCxTQUFTLENBQWIsRUFBZ0I7QUFDZEMsY0FBTUssV0FBTixHQUFvQk4sU0FBUyxDQUE3QjtBQUNBQyxjQUFNTSxZQUFOLEdBQXFCUCxTQUFTLENBQTlCO0FBQ0Q7O0FBRUQsYUFDRTtBQUFDLGVBQUQ7QUFBQSxxQkFBYSxLQUFLUSxjQUFMLENBQW9CWCxPQUFwQixDQUFiO0FBQ0UsZ0JBQU1FLElBRFI7QUFFRyxhQUFLVSxZQUFMO0FBRkgsT0FERjtBQU1EOzs7b0NBRWVDLEssRUFBTztBQUNyQixhQUFPLEVBQUNULE9BQU8sRUFBUixFQUFQO0FBQ0Q7Ozs7OztBQS9Ca0JQLEssQ0FDWmlCLFksR0FBZTtBQUNwQmI7QUFEb0IsQztBQURISixLLENBSVprQixTLEdBQVksZUFBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxlQUFLRCxTQUFuQixFQUE4QixVQUFJQSxTQUFsQyxFQUE2QyxFQUE3QyxDO2tCQUpBbEIsSyIsImZpbGUiOiJjb21wcy9hbnRkL1NLQ29sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb2x9IGZyb20gJ2FudGQnO1xuaW1wb3J0IFNLIGZyb20gJ3NrLWpzJztcbmltcG9ydCBDb21wIGZyb20gJy4uLy4uL3V0aWxzL0NvbXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS0NvbCBleHRlbmRzIENvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbXBUYWc6IENvbFxuICB9O1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBDb21wLnByb3BUeXBlcywgQ29sLnByb3BUeXBlcywge30pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge2NvbXBUYWc6IENvbXBUYWcsIHNwYW4sIGd1dHRlciwgc3R5bGV9ID0gdGhpcy5wcm9wcztcbiAgICBzcGFuID0gc3BhbiB8fCB0aGlzLnNrUHJvcChDb21wLlNLX1BST1BTLkNPTF9TUEFOKTtcblxuICAgIHN0eWxlID0gc3R5bGUgfHwge307XG4gICAgZ3V0dGVyID0gZ3V0dGVyIHx8IHRoaXMuc2tQcm9wKENvbXAuU0tfUFJPUFMuR1JJRF9HVVRURVIpO1xuICAgIGlmIChndXR0ZXIgPiAwKSB7XG4gICAgICBzdHlsZS5wYWRkaW5nTGVmdCA9IGd1dHRlciAvIDI7XG4gICAgICBzdHlsZS5wYWRkaW5nUmlnaHQgPSBndXR0ZXIgLyAyO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcFRhZyB7Li4udGhpcy5jb21wVmFsaWRQcm9wcyhDb21wVGFnKX1cbiAgICAgICAgc3Bhbj17c3Bhbn0+XG4gICAgICAgIHt0aGlzLnNrUHJvcHNUcmFucygpfVxuICAgICAgPC9Db21wVGFnPlxuICAgICk7XG4gIH1cblxuICBjaGlsZFByb3BzVHJhbnMoY2hpbGQpIHtcbiAgICByZXR1cm4ge3N0eWxlOiB7fX07XG4gIH1cbn1cbiJdfQ==