'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style2 = require('antd/lib/row/style');

var _row = require('antd/lib/row');

var _row2 = _interopRequireDefault(_row);

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

var SKRow = function (_Comp) {
  _inherits(SKRow, _Comp);

  function SKRow() {
    var _ref;

    _classCallCheck(this, SKRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(this, (_ref = SKRow.__proto__ || Object.getPrototypeOf(SKRow)).call.apply(_ref, [this].concat(args)));
  }

  _createClass(SKRow, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          CompTag = _props.compTag,
          gutter = _props.gutter;

      gutter = gutter || this.skProp(_Comp3.default.SK_PROPS.GRID_GUTTER);

      return _react2.default.createElement(
        CompTag,
        _extends({}, this.compValidProps(CompTag), {
          gutter: gutter }),
        this.skPropsTrans()
      );
    }
  }]);

  return SKRow;
}(_Comp3.default);

SKRow.defaultProps = {
  compTag: _row2.default
};
SKRow.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _row2.default.propTypes, {});
exports.default = SKRow;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9TS1Jvdy5qcyJdLCJuYW1lcyI6WyJTS1JvdyIsImFyZ3MiLCJwcm9wcyIsIkNvbXBUYWciLCJjb21wVGFnIiwiZ3V0dGVyIiwic2tQcm9wIiwiU0tfUFJPUFMiLCJHUklEX0dVVFRFUiIsImNvbXBWYWxpZFByb3BzIiwic2tQcm9wc1RyYW5zIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7OztBQU1uQixtQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsb0lBQ1ZBLElBRFU7QUFFcEI7Ozs7NkJBRVE7QUFBQSxtQkFDMEIsS0FBS0MsS0FEL0I7QUFBQSxVQUNPQyxPQURQLFVBQ0ZDLE9BREU7QUFBQSxVQUNnQkMsTUFEaEIsVUFDZ0JBLE1BRGhCOztBQUVQQSxlQUFTQSxVQUFVLEtBQUtDLE1BQUwsQ0FBWSxlQUFLQyxRQUFMLENBQWNDLFdBQTFCLENBQW5COztBQUVBLGFBQ0U7QUFBQyxlQUFEO0FBQUEscUJBQWEsS0FBS0MsY0FBTCxDQUFvQk4sT0FBcEIsQ0FBYjtBQUNFLGtCQUFRRSxNQURWO0FBRUcsYUFBS0ssWUFBTDtBQUZILE9BREY7QUFNRDs7Ozs7O0FBcEJrQlYsSyxDQUNaVyxZLEdBQWU7QUFDcEJQO0FBRG9CLEM7QUFESEosSyxDQUlaWSxTLEdBQVksZUFBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxlQUFLRCxTQUFuQixFQUE4QixjQUFJQSxTQUFsQyxFQUE2QyxFQUE3QyxDO2tCQUpBWixLIiwiZmlsZSI6ImNvbXAvYW50ZC9TS1Jvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Um93fSBmcm9tICdhbnRkJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU0sgZnJvbSAnc2stanMnO1xuaW1wb3J0IENvbXAgZnJvbSAnLi4vLi4vdXRpbC9Db21wJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tSb3cgZXh0ZW5kcyBDb21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb21wVGFnOiBSb3dcbiAgfTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQ29tcC5wcm9wVHlwZXMsIFJvdy5wcm9wVHlwZXMsIHt9KTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtjb21wVGFnOiBDb21wVGFnLCBndXR0ZXJ9ID0gdGhpcy5wcm9wcztcbiAgICBndXR0ZXIgPSBndXR0ZXIgfHwgdGhpcy5za1Byb3AoQ29tcC5TS19QUk9QUy5HUklEX0dVVFRFUik7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBUYWcgey4uLnRoaXMuY29tcFZhbGlkUHJvcHMoQ29tcFRhZyl9XG4gICAgICAgIGd1dHRlcj17Z3V0dGVyfT5cbiAgICAgICAge3RoaXMuc2tQcm9wc1RyYW5zKCl9XG4gICAgICA8L0NvbXBUYWc+XG4gICAgKTtcbiAgfVxufVxuIl19