'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _antd = require('antd');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _skJs2 = _interopRequireDefault(_skJs);

var _Comp2 = require('../../utils/Comp');

var _Comp3 = _interopRequireDefault(_Comp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_antd.Popover.propTypes = _skJs2.default.assign({}, _antd.Popover.propTypes, {
  onVisibleChange: _react2.default.PropTypes.func,
  overlayClassName: _react2.default.PropTypes.string,
  placement: _react2.default.PropTypes.string,
  visible: _react2.default.PropTypes.bool,
  trigger: _react2.default.PropTypes.string
}, {});

var SKPopover = function (_Comp) {
  _inherits(SKPopover, _Comp);

  function SKPopover() {
    var _ref;

    _classCallCheck(this, SKPopover);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(this, (_ref = SKPopover.__proto__ || Object.getPrototypeOf(SKPopover)).call.apply(_ref, [this].concat(args)));
  }

  _createClass(SKPopover, [{
    key: 'handleVisibleChange',
    value: function handleVisibleChange(visible) {
      this.skVal(visible);
    }
  }, {
    key: 'render',
    value: function render() {
      var CompTag = this.props.compTag;


      return _react2.default.createElement(
        CompTag,
        _extends({}, this.compValidProps(CompTag), {
          onVisibleChange: this.handleVisibleChange.bind(this),
          visible: this.skVal() }),
        this.skPropsTrans()
      );
    }
  }]);

  return SKPopover;
}(_Comp3.default);

SKPopover.defaultProps = {
  compTag: _antd.Popover
};
SKPopover.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _antd.Popover.propTypes, {});
exports.default = SKPopover;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FudGQvU0tQb3BvdmVyLmpzIl0sIm5hbWVzIjpbInByb3BUeXBlcyIsImFzc2lnbiIsIm9uVmlzaWJsZUNoYW5nZSIsIlByb3BUeXBlcyIsImZ1bmMiLCJvdmVybGF5Q2xhc3NOYW1lIiwic3RyaW5nIiwicGxhY2VtZW50IiwidmlzaWJsZSIsImJvb2wiLCJ0cmlnZ2VyIiwiU0tQb3BvdmVyIiwiYXJncyIsInNrVmFsIiwiQ29tcFRhZyIsInByb3BzIiwiY29tcFRhZyIsImNvbXBWYWxpZFByb3BzIiwiaGFuZGxlVmlzaWJsZUNoYW5nZSIsImJpbmQiLCJza1Byb3BzVHJhbnMiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLGNBQVFBLFNBQVIsR0FBb0IsZUFBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxjQUFRRCxTQUF0QixFQUFpQztBQUNuREUsbUJBQWlCLGdCQUFNQyxTQUFOLENBQWdCQyxJQURrQjtBQUVuREMsb0JBQWtCLGdCQUFNRixTQUFOLENBQWdCRyxNQUZpQjtBQUduREMsYUFBVyxnQkFBTUosU0FBTixDQUFnQkcsTUFId0I7QUFJbkRFLFdBQVMsZ0JBQU1MLFNBQU4sQ0FBZ0JNLElBSjBCO0FBS25EQyxXQUFTLGdCQUFNUCxTQUFOLENBQWdCRztBQUwwQixDQUFqQyxFQU1qQixFQU5pQixDQUFwQjs7SUFRcUJLLFM7OztBQU1uQix1QkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsNElBQ1ZBLElBRFU7QUFFcEI7Ozs7d0NBRW1CSixPLEVBQVM7QUFDM0IsV0FBS0ssS0FBTCxDQUFXTCxPQUFYO0FBQ0Q7Ozs2QkFFUTtBQUFBLFVBQ09NLE9BRFAsR0FDa0IsS0FBS0MsS0FEdkIsQ0FDRkMsT0FERTs7O0FBR1AsYUFDRTtBQUFDLGVBQUQ7QUFBQSxxQkFBYSxLQUFLQyxjQUFMLENBQW9CSCxPQUFwQixDQUFiO0FBQ0UsMkJBQWlCLEtBQUtJLG1CQUFMLENBQXlCQyxJQUF6QixDQUE4QixJQUE5QixDQURuQjtBQUVFLG1CQUFTLEtBQUtOLEtBQUwsRUFGWDtBQUdHLGFBQUtPLFlBQUw7QUFISCxPQURGO0FBT0Q7Ozs7OztBQXhCa0JULFMsQ0FDWlUsWSxHQUFlO0FBQ3BCTDtBQURvQixDO0FBREhMLFMsQ0FJWlgsUyxHQUFZLGVBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsZUFBS0QsU0FBbkIsRUFBOEIsY0FBUUEsU0FBdEMsRUFBaUQsRUFBakQsQztrQkFKQVcsUyIsImZpbGUiOiJjb21wcy9hbnRkL1NLUG9wb3Zlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UG9wb3Zlcn0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNLIGZyb20gJ3NrLWpzJztcbmltcG9ydCBDb21wIGZyb20gJy4uLy4uL3V0aWxzL0NvbXAnO1xuXG5Qb3BvdmVyLnByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgUG9wb3Zlci5wcm9wVHlwZXMsIHtcbiAgb25WaXNpYmxlQ2hhbmdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgb3ZlcmxheUNsYXNzTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgcGxhY2VtZW50OiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICB2aXNpYmxlOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgdHJpZ2dlcjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZ1xufSwge30pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS1BvcG92ZXIgZXh0ZW5kcyBDb21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb21wVGFnOiBQb3BvdmVyXG4gIH07XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIENvbXAucHJvcFR5cGVzLCBQb3BvdmVyLnByb3BUeXBlcywge30pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgfVxuXG4gIGhhbmRsZVZpc2libGVDaGFuZ2UodmlzaWJsZSkge1xuICAgIHRoaXMuc2tWYWwodmlzaWJsZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtjb21wVGFnOiBDb21wVGFnfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBUYWcgey4uLnRoaXMuY29tcFZhbGlkUHJvcHMoQ29tcFRhZyl9XG4gICAgICAgIG9uVmlzaWJsZUNoYW5nZT17dGhpcy5oYW5kbGVWaXNpYmxlQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgIHZpc2libGU9e3RoaXMuc2tWYWwoKX0+XG4gICAgICAgIHt0aGlzLnNrUHJvcHNUcmFucygpfVxuICAgICAgPC9Db21wVGFnPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==