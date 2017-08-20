'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style2 = require('antd/lib/input/style');

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

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

_input2.default.propTypes = _skJs2.default.assign({}, _input2.default.propTypes, {
  suffix: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.node])
}, {});

var SKInput = function (_Comp) {
  _inherits(SKInput, _Comp);

  function SKInput() {
    var _ref;

    _classCallCheck(this, SKInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(this, (_ref = SKInput.__proto__ || Object.getPrototypeOf(SKInput)).call.apply(_ref, [this].concat(args)));
  }

  _createClass(SKInput, [{
    key: 'handleChange',
    value: function handleChange(domEvent) {
      this.skVal(domEvent.target.value);
    }
  }, {
    key: 'render',
    value: function render() {
      var CompTag = this.props.compTag;


      return _react2.default.createElement(
        CompTag,
        _extends({}, this.compValidProps(CompTag), {
          onChange: this.handleChange.bind(this),
          size: this.skProp(_Comp3.default.SK_PROPS.SIZE),
          value: this.skVal() }),
        this.skPropsTrans()
      );
    }
  }]);

  return SKInput;
}(_Comp3.default);

SKInput.defaultProps = {
  compTag: _input2.default
};
SKInput.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _input2.default.propTypes, {});
exports.default = SKInput;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9TS0lucHV0LmpzIl0sIm5hbWVzIjpbInByb3BUeXBlcyIsImFzc2lnbiIsInN1ZmZpeCIsIlByb3BUeXBlcyIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm5vZGUiLCJTS0lucHV0IiwiYXJncyIsImRvbUV2ZW50Iiwic2tWYWwiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkNvbXBUYWciLCJwcm9wcyIsImNvbXBUYWciLCJjb21wVmFsaWRQcm9wcyIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJza1Byb3AiLCJTS19QUk9QUyIsIlNJWkUiLCJza1Byb3BzVHJhbnMiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLGdCQUFNQSxTQUFOLEdBQWtCLGVBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsZ0JBQU1ELFNBQXBCLEVBQStCO0FBQy9DRSxVQUFRLGdCQUFNQyxTQUFOLENBQWdCQyxTQUFoQixDQUEwQixDQUNoQyxnQkFBTUQsU0FBTixDQUFnQkUsTUFEZ0IsRUFFaEMsZ0JBQU1GLFNBQU4sQ0FBZ0JHLElBRmdCLENBQTFCO0FBRHVDLENBQS9CLEVBS2YsRUFMZSxDQUFsQjs7SUFPcUJDLE87OztBQU9uQixxQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsd0lBQ1ZBLElBRFU7QUFFcEI7Ozs7aUNBRVlDLFEsRUFBVTtBQUNyQixXQUFLQyxLQUFMLENBQVdELFNBQVNFLE1BQVQsQ0FBZ0JDLEtBQTNCO0FBQ0Q7Ozs2QkFFUTtBQUFBLFVBQ09DLE9BRFAsR0FDa0IsS0FBS0MsS0FEdkIsQ0FDRkMsT0FERTs7O0FBR1AsYUFDRTtBQUFDLGVBQUQ7QUFBQSxxQkFBYSxLQUFLQyxjQUFMLENBQW9CSCxPQUFwQixDQUFiO0FBQ0Usb0JBQVUsS0FBS0ksWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FEWjtBQUVFLGdCQUFNLEtBQUtDLE1BQUwsQ0FBWSxlQUFLQyxRQUFMLENBQWNDLElBQTFCLENBRlI7QUFHRSxpQkFBTyxLQUFLWCxLQUFMLEVBSFQ7QUFJRyxhQUFLWSxZQUFMO0FBSkgsT0FERjtBQVFEOzs7Ozs7QUExQmtCZixPLENBQ1pnQixZLEdBQWU7QUFDcEJSO0FBRG9CLEM7QUFESFIsTyxDQUlaUCxTLEdBQVksZUFBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxlQUFLRCxTQUFuQixFQUE4QixnQkFBTUEsU0FBcEMsRUFBK0MsRUFBL0MsQztrQkFKQU8sTyIsImZpbGUiOiJjb21wL2FudGQvU0tJbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5wdXR9IGZyb20gJ2FudGQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTSyBmcm9tICdzay1qcyc7XG5pbXBvcnQgQ29tcCBmcm9tICcuLi8uLi91dGlsL0NvbXAnO1xuXG5JbnB1dC5wcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIElucHV0LnByb3BUeXBlcywge1xuICBzdWZmaXg6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgUmVhY3QuUHJvcFR5cGVzLm5vZGVcbiAgXSlcbn0sIHt9KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tJbnB1dCBleHRlbmRzIENvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbXBUYWc6IElucHV0XG4gIH07XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIENvbXAucHJvcFR5cGVzLCBJbnB1dC5wcm9wVHlwZXMsIHtcbiAgfSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGRvbUV2ZW50KSB7XG4gICAgdGhpcy5za1ZhbChkb21FdmVudC50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7Y29tcFRhZzogQ29tcFRhZ30gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wVGFnIHsuLi50aGlzLmNvbXBWYWxpZFByb3BzKENvbXBUYWcpfVxuICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgc2l6ZT17dGhpcy5za1Byb3AoQ29tcC5TS19QUk9QUy5TSVpFKX1cbiAgICAgICAgdmFsdWU9e3RoaXMuc2tWYWwoKX0+XG4gICAgICAgIHt0aGlzLnNrUHJvcHNUcmFucygpfVxuICAgICAgPC9Db21wVGFnPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==