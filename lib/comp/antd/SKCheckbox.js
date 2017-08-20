'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style2 = require('antd/lib/checkbox/style');

var _checkbox = require('antd/lib/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

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

var SKCheckbox = function (_Comp) {
  _inherits(SKCheckbox, _Comp);

  function SKCheckbox() {
    var _ref;

    _classCallCheck(this, SKCheckbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(this, (_ref = SKCheckbox.__proto__ || Object.getPrototypeOf(SKCheckbox)).call.apply(_ref, [this].concat(args)));
  }

  _createClass(SKCheckbox, [{
    key: 'handleChange',
    value: function handleChange(domEvent) {
      this.skVal(domEvent.target.checked);
    }
  }, {
    key: 'render',
    value: function render() {
      var CompTag = this.props.compTag;


      return _react2.default.createElement(
        CompTag,
        _extends({}, this.compValidProps(CompTag), {
          checked: this.skVal(),
          onChange: this.handleChange.bind(this) }),
        this.skPropsTrans()
      );
    }
  }]);

  return SKCheckbox;
}(_Comp3.default);

SKCheckbox.defaultProps = {
  compTag: _checkbox2.default
};
SKCheckbox.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _checkbox2.default.propTypes, {});
exports.default = SKCheckbox;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9TS0NoZWNrYm94LmpzIl0sIm5hbWVzIjpbIlNLQ2hlY2tib3giLCJhcmdzIiwiZG9tRXZlbnQiLCJza1ZhbCIsInRhcmdldCIsImNoZWNrZWQiLCJDb21wVGFnIiwicHJvcHMiLCJjb21wVGFnIiwiY29tcFZhbGlkUHJvcHMiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwic2tQcm9wc1RyYW5zIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFU7OztBQU1uQix3QkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsOElBQ1ZBLElBRFU7QUFFcEI7Ozs7aUNBRVlDLFEsRUFBVTtBQUNyQixXQUFLQyxLQUFMLENBQVdELFNBQVNFLE1BQVQsQ0FBZ0JDLE9BQTNCO0FBQ0Q7Ozs2QkFFUTtBQUFBLFVBQ09DLE9BRFAsR0FDa0IsS0FBS0MsS0FEdkIsQ0FDRkMsT0FERTs7O0FBR1AsYUFDRTtBQUFDLGVBQUQ7QUFBQSxxQkFBYSxLQUFLQyxjQUFMLENBQW9CSCxPQUFwQixDQUFiO0FBQ0UsbUJBQVMsS0FBS0gsS0FBTCxFQURYO0FBRUUsb0JBQVUsS0FBS08sWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FGWjtBQUdHLGFBQUtDLFlBQUw7QUFISCxPQURGO0FBT0Q7Ozs7OztBQXhCa0JaLFUsQ0FDWmEsWSxHQUFlO0FBQ3BCTDtBQURvQixDO0FBREhSLFUsQ0FJWmMsUyxHQUFZLGVBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsZUFBS0QsU0FBbkIsRUFBOEIsbUJBQVNBLFNBQXZDLEVBQWtELEVBQWxELEM7a0JBSkFkLFUiLCJmaWxlIjoiY29tcC9hbnRkL1NLQ2hlY2tib3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NoZWNrYm94fSBmcm9tICdhbnRkJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU0sgZnJvbSAnc2stanMnO1xuaW1wb3J0IENvbXAgZnJvbSAnLi4vLi4vdXRpbC9Db21wJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tDaGVja2JveCBleHRlbmRzIENvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbXBUYWc6IENoZWNrYm94XG4gIH07XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIENvbXAucHJvcFR5cGVzLCBDaGVja2JveC5wcm9wVHlwZXMsIHt9KTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZG9tRXZlbnQpIHtcbiAgICB0aGlzLnNrVmFsKGRvbUV2ZW50LnRhcmdldC5jaGVja2VkKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge2NvbXBUYWc6IENvbXBUYWd9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcFRhZyB7Li4udGhpcy5jb21wVmFsaWRQcm9wcyhDb21wVGFnKX1cbiAgICAgICAgY2hlY2tlZD17dGhpcy5za1ZhbCgpfVxuICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX0+XG4gICAgICAgIHt0aGlzLnNrUHJvcHNUcmFucygpfVxuICAgICAgPC9Db21wVGFnPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==