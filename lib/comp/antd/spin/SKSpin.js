'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _spin = require('antd/lib/spin');

var _spin2 = _interopRequireDefault(_spin);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/spin/style');

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

_spin2.default.defaultProps = _skJs.SK.assign({}, {
  size: _Const.SIZE.Default,
  spinning: true
}, _spin2.default.defaultProps, {});

_spin2.default.propTypes = _skJs.SK.assign({}, {
  //https://ant.design/components/spin-cn/#API
  delay: _propTypes2.default.number,
  indicator: _propTypes2.default.node,
  size: _propTypes2.default.string,
  spinning: _propTypes2.default.bool,
  tip: _propTypes2.default.string,
  wrapperClassName: _propTypes2.default.string
}, _spin2.default.propTypes, {});

var SKSpin = function (_AntdComp) {
  _inherits(SKSpin, _AntdComp);

  function SKSpin() {
    var _ref;

    _classCallCheck(this, SKSpin);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SKSpin.__proto__ || Object.getPrototypeOf(SKSpin)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'SKSpin';
    return _this;
  }

  _createClass(SKSpin, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          CompTag = _props.compTag,
          className = _props.className;


      return _react2.default.createElement(
        CompTag,
        _extends({}, this.skTransProps2Self(CompTag), {
          className: className,
          spinning: this.skVal() }),
        this.skTransProps2Child()
      );
    }
  }]);

  return SKSpin;
}(_AntdComp3.default);

SKSpin.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, _spin2.default.defaultProps, {
  compTag: _spin2.default
});
SKSpin.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _spin2.default.propTypes, {});
exports.default = SKSpin;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9zcGluL1NLU3Bpbi5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0UHJvcHMiLCJhc3NpZ24iLCJzaXplIiwiRGVmYXVsdCIsInNwaW5uaW5nIiwicHJvcFR5cGVzIiwiZGVsYXkiLCJudW1iZXIiLCJpbmRpY2F0b3IiLCJub2RlIiwic3RyaW5nIiwiYm9vbCIsInRpcCIsIndyYXBwZXJDbGFzc05hbWUiLCJTS1NwaW4iLCJhcmdzIiwiY29tcE5hbWUiLCJwcm9wcyIsIkNvbXBUYWciLCJjb21wVGFnIiwiY2xhc3NOYW1lIiwic2tUcmFuc1Byb3BzMlNlbGYiLCJza1ZhbCIsInNrVHJhbnNQcm9wczJDaGlsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0FBRUEsZUFBS0EsWUFBTCxHQUFvQixTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjO0FBQ2hDQyxRQUFNLFlBQUtDLE9BRHFCO0FBRWhDQyxZQUFVO0FBRnNCLENBQWQsRUFHakIsZUFBS0osWUFIWSxFQUdFLEVBSEYsQ0FBcEI7O0FBS0EsZUFBS0ssU0FBTCxHQUFpQixTQUFHSixNQUFILENBQVUsRUFBVixFQUFjO0FBQzdCO0FBQ0FLLFNBQU8sb0JBQVVDLE1BRlk7QUFHN0JDLGFBQVcsb0JBQVVDLElBSFE7QUFJN0JQLFFBQU0sb0JBQVVRLE1BSmE7QUFLN0JOLFlBQVUsb0JBQVVPLElBTFM7QUFNN0JDLE9BQUssb0JBQVVGLE1BTmM7QUFPN0JHLG9CQUFrQixvQkFBVUg7QUFQQyxDQUFkLEVBUWQsZUFBS0wsU0FSUyxFQVFFLEVBUkYsQ0FBakI7O0lBVXFCUyxNOzs7QUFNbkIsb0JBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLDJJQUNWQSxJQURVOztBQUVuQixVQUFLQyxRQUFMLEdBQWdCLFFBQWhCO0FBRm1CO0FBR3BCOzs7OzZCQUVRO0FBQUEsbUJBQzZCLEtBQUtDLEtBRGxDO0FBQUEsVUFDT0MsT0FEUCxVQUNGQyxPQURFO0FBQUEsVUFDZ0JDLFNBRGhCLFVBQ2dCQSxTQURoQjs7O0FBR1AsYUFDRTtBQUFDLGVBQUQ7QUFBQSxxQkFBYSxLQUFLQyxpQkFBTCxDQUF1QkgsT0FBdkIsQ0FBYjtBQUNTLHFCQUFXRSxTQURwQjtBQUVTLG9CQUFVLEtBQUtFLEtBQUwsRUFGbkI7QUFHRyxhQUFLQyxrQkFBTDtBQUhILE9BREY7QUFPRDs7Ozs7O0FBckJrQlQsTSxDQUNaZCxZLEdBQWUsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0QsWUFBdkIsRUFBcUMsZUFBS0EsWUFBMUMsRUFBd0Q7QUFDNUVtQjtBQUQ0RSxDQUF4RCxDO0FBREhMLE0sQ0FJWlQsUyxHQUFZLFNBQUdKLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNJLFNBQXZCLEVBQWtDLGVBQUtBLFNBQXZDLEVBQWtELEVBQWxELEM7a0JBSkFTLE0iLCJmaWxlIjoiY29tcC9hbnRkL3NwaW4vU0tTcGluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTcGlufSBmcm9tICdhbnRkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTS30gZnJvbSAnc2stanMnO1xuaW1wb3J0IEFudGRDb21wIGZyb20gJy4uL0FudGRDb21wJztcbmltcG9ydCB7U0laRX0gZnJvbSAnLi4vLi4vLi4vdXRpbC9Db25zdCc7XG5cblNwaW4uZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCB7XG4gIHNpemU6IFNJWkUuRGVmYXVsdCxcbiAgc3Bpbm5pbmc6IHRydWVcbn0sIFNwaW4uZGVmYXVsdFByb3BzLCB7fSk7XG5cblNwaW4ucHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCB7XG4gIC8vaHR0cHM6Ly9hbnQuZGVzaWduL2NvbXBvbmVudHMvc3Bpbi1jbi8jQVBJXG4gIGRlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuICBpbmRpY2F0b3I6IFByb3BUeXBlcy5ub2RlLFxuICBzaXplOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzcGlubmluZzogUHJvcFR5cGVzLmJvb2wsXG4gIHRpcDogUHJvcFR5cGVzLnN0cmluZyxcbiAgd3JhcHBlckNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufSwgU3Bpbi5wcm9wVHlwZXMsIHt9KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tTcGluIGV4dGVuZHMgQW50ZENvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5kZWZhdWx0UHJvcHMsIFNwaW4uZGVmYXVsdFByb3BzLCB7XG4gICAgY29tcFRhZzogU3BpblxuICB9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAucHJvcFR5cGVzLCBTcGluLnByb3BUeXBlcywge30pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLmNvbXBOYW1lID0gJ1NLU3Bpbic7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtjb21wVGFnOiBDb21wVGFnLCBjbGFzc05hbWV9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcFRhZyB7Li4udGhpcy5za1RyYW5zUHJvcHMyU2VsZihDb21wVGFnKX1cbiAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgc3Bpbm5pbmc9e3RoaXMuc2tWYWwoKX0+XG4gICAgICAgIHt0aGlzLnNrVHJhbnNQcm9wczJDaGlsZCgpfVxuICAgICAgPC9Db21wVGFnPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==