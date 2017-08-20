'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style2 = require('antd/lib/spin/style');

var _spin = require('antd/lib/spin');

var _spin2 = _interopRequireDefault(_spin);

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

_spin2.default.propTypes = _skJs2.default.assign({}, _spin2.default.propTypes, {
  tip: _react2.default.PropTypes.string
}, {});

var SKSpin = function (_Comp) {
  _inherits(SKSpin, _Comp);

  function SKSpin() {
    var _ref;

    _classCallCheck(this, SKSpin);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(this, (_ref = SKSpin.__proto__ || Object.getPrototypeOf(SKSpin)).call.apply(_ref, [this].concat(args)));
  }

  _createClass(SKSpin, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          CompTag = _props.compTag,
          className = _props.className;


      return _react2.default.createElement(
        CompTag,
        _extends({}, this.compValidProps(CompTag), {
          className: className,
          spinning: this.skVal() }),
        this.skPropsTrans()
      );
    }
  }]);

  return SKSpin;
}(_Comp3.default);

SKSpin.defaultProps = {
  compTag: _spin2.default
};
SKSpin.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _spin2.default.propTypes, {});
exports.default = SKSpin;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9TS1NwaW4uanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwiYXNzaWduIiwidGlwIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiU0tTcGluIiwiYXJncyIsInByb3BzIiwiQ29tcFRhZyIsImNvbXBUYWciLCJjbGFzc05hbWUiLCJjb21wVmFsaWRQcm9wcyIsInNrVmFsIiwic2tQcm9wc1RyYW5zIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxlQUFLQSxTQUFMLEdBQWlCLGVBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsZUFBS0QsU0FBbkIsRUFBOEI7QUFDN0NFLE9BQUssZ0JBQU1DLFNBQU4sQ0FBZ0JDO0FBRHdCLENBQTlCLEVBRWQsRUFGYyxDQUFqQjs7SUFJcUJDLE07OztBQU1uQixvQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsc0lBQ1ZBLElBRFU7QUFFcEI7Ozs7NkJBRVE7QUFBQSxtQkFDNkIsS0FBS0MsS0FEbEM7QUFBQSxVQUNPQyxPQURQLFVBQ0ZDLE9BREU7QUFBQSxVQUNnQkMsU0FEaEIsVUFDZ0JBLFNBRGhCOzs7QUFHUCxhQUNFO0FBQUMsZUFBRDtBQUFBLHFCQUFhLEtBQUtDLGNBQUwsQ0FBb0JILE9BQXBCLENBQWI7QUFDRSxxQkFBV0UsU0FEYjtBQUVFLG9CQUFVLEtBQUtFLEtBQUwsRUFGWjtBQUdHLGFBQUtDLFlBQUw7QUFISCxPQURGO0FBT0Q7Ozs7OztBQXBCa0JSLE0sQ0FDWlMsWSxHQUFlO0FBQ3BCTDtBQURvQixDO0FBREhKLE0sQ0FJWkwsUyxHQUFZLGVBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsZUFBS0QsU0FBbkIsRUFBOEIsZUFBS0EsU0FBbkMsRUFBOEMsRUFBOUMsQztrQkFKQUssTSIsImZpbGUiOiJjb21wL2FudGQvU0tTcGluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTcGlufSBmcm9tICdhbnRkJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU0sgZnJvbSAnc2stanMnO1xuaW1wb3J0IENvbXAgZnJvbSAnLi4vLi4vdXRpbC9Db21wJztcblxuU3Bpbi5wcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIFNwaW4ucHJvcFR5cGVzLCB7XG4gIHRpcDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZ1xufSwge30pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS1NwaW4gZXh0ZW5kcyBDb21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb21wVGFnOiBTcGluXG4gIH07XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIENvbXAucHJvcFR5cGVzLCBTcGluLnByb3BUeXBlcywge30pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge2NvbXBUYWc6IENvbXBUYWcsIGNsYXNzTmFtZX0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wVGFnIHsuLi50aGlzLmNvbXBWYWxpZFByb3BzKENvbXBUYWcpfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgc3Bpbm5pbmc9e3RoaXMuc2tWYWwoKX0+XG4gICAgICAgIHt0aGlzLnNrUHJvcHNUcmFucygpfVxuICAgICAgPC9Db21wVGFnPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==