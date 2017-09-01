'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style2 = require('antd/lib/col/style');

var _col = require('antd/lib/col');

var _col2 = _interopRequireDefault(_col);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _skJs2 = _interopRequireDefault(_skJs);

var _Comp2 = require('../../util/Comp');

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

      return _react2.default.createElement(
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
  compTag: _col2.default
};
SKCol.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _col2.default.propTypes, {});
exports.default = SKCol;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9TS0NvbC5qcyJdLCJuYW1lcyI6WyJTS0NvbCIsImFyZ3MiLCJwcm9wcyIsIkNvbXBUYWciLCJjb21wVGFnIiwic3BhbiIsImd1dHRlciIsInN0eWxlIiwic2tQcm9wIiwiU0tfUFJPUFMiLCJDT0xfU1BBTiIsIkdSSURfR1VUVEVSIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJjb21wVmFsaWRQcm9wcyIsInNrUHJvcHNUcmFucyIsImNoaWxkIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7OztBQU1uQixtQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsb0lBQ1ZBLElBRFU7QUFFcEI7Ozs7NkJBRVE7QUFBQSxtQkFDdUMsS0FBS0MsS0FENUM7QUFBQSxVQUNPQyxPQURQLFVBQ0ZDLE9BREU7QUFBQSxVQUNnQkMsSUFEaEIsVUFDZ0JBLElBRGhCO0FBQUEsVUFDc0JDLE1BRHRCLFVBQ3NCQSxNQUR0QjtBQUFBLFVBQzhCQyxLQUQ5QixVQUM4QkEsS0FEOUI7O0FBRVBGLGFBQU9BLFFBQVEsS0FBS0csTUFBTCxDQUFZLGVBQUtDLFFBQUwsQ0FBY0MsUUFBMUIsQ0FBZjs7QUFFQUgsY0FBUUEsU0FBUyxFQUFqQjtBQUNBRCxlQUFTQSxVQUFVLEtBQUtFLE1BQUwsQ0FBWSxlQUFLQyxRQUFMLENBQWNFLFdBQTFCLENBQW5CO0FBQ0EsVUFBSUwsU0FBUyxDQUFiLEVBQWdCO0FBQ2RDLGNBQU1LLFdBQU4sR0FBb0JOLFNBQVMsQ0FBN0I7QUFDQUMsY0FBTU0sWUFBTixHQUFxQlAsU0FBUyxDQUE5QjtBQUNEOztBQUVELGFBQ0U7QUFBQyxlQUFEO0FBQUEscUJBQWEsS0FBS1EsY0FBTCxDQUFvQlgsT0FBcEIsQ0FBYjtBQUNTLGdCQUFNRSxJQURmO0FBRUcsYUFBS1UsWUFBTDtBQUZILE9BREY7QUFNRDs7O29DQUVlQyxLLEVBQU87QUFDckIsYUFBTyxFQUFDVCxPQUFPLEVBQVIsRUFBUDtBQUNEOzs7Ozs7QUEvQmtCUCxLLENBQ1ppQixZLEdBQWU7QUFDcEJiO0FBRG9CLEM7QUFESEosSyxDQUlaa0IsUyxHQUFZLGVBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsZUFBS0QsU0FBbkIsRUFBOEIsY0FBSUEsU0FBbEMsRUFBNkMsRUFBN0MsQztrQkFKQWxCLEsiLCJmaWxlIjoiY29tcC9hbnRkL1NLQ29sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb2x9IGZyb20gJ2FudGQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTSyBmcm9tICdzay1qcyc7XG5pbXBvcnQgQ29tcCBmcm9tICcuLi8uLi91dGlsL0NvbXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS0NvbCBleHRlbmRzIENvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbXBUYWc6IENvbFxuICB9O1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBDb21wLnByb3BUeXBlcywgQ29sLnByb3BUeXBlcywge30pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge2NvbXBUYWc6IENvbXBUYWcsIHNwYW4sIGd1dHRlciwgc3R5bGV9ID0gdGhpcy5wcm9wcztcbiAgICBzcGFuID0gc3BhbiB8fCB0aGlzLnNrUHJvcChDb21wLlNLX1BST1BTLkNPTF9TUEFOKTtcblxuICAgIHN0eWxlID0gc3R5bGUgfHwge307XG4gICAgZ3V0dGVyID0gZ3V0dGVyIHx8IHRoaXMuc2tQcm9wKENvbXAuU0tfUFJPUFMuR1JJRF9HVVRURVIpO1xuICAgIGlmIChndXR0ZXIgPiAwKSB7XG4gICAgICBzdHlsZS5wYWRkaW5nTGVmdCA9IGd1dHRlciAvIDI7XG4gICAgICBzdHlsZS5wYWRkaW5nUmlnaHQgPSBndXR0ZXIgLyAyO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcFRhZyB7Li4udGhpcy5jb21wVmFsaWRQcm9wcyhDb21wVGFnKX1cbiAgICAgICAgICAgICAgIHNwYW49e3NwYW59PlxuICAgICAgICB7dGhpcy5za1Byb3BzVHJhbnMoKX1cbiAgICAgIDwvQ29tcFRhZz5cbiAgICApO1xuICB9XG5cbiAgY2hpbGRQcm9wc1RyYW5zKGNoaWxkKSB7XG4gICAgcmV0dXJuIHtzdHlsZToge319O1xuICB9XG59XG4iXX0=