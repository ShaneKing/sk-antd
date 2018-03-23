'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _checkbox = require('antd/lib/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/checkbox/style');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _AntdComp2 = require('../AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_checkbox2.default.defaultProps = _skJs.SK.assign({}, {
  autoFocus: false,
  checked: false,
  defaultChecked: false,
  indeterminate: false
}, _checkbox2.default.defaultProps, {});

_checkbox2.default.propTypes = _skJs.SK.assign({}, {
  //https://ant.design/components/checkbox-cn/#Checkbox
  autoFocus: _propTypes2.default.bool,
  checked: _propTypes2.default.bool,
  defaultChecked: _propTypes2.default.bool,
  indeterminate: _propTypes2.default.bool,
  onChange: _propTypes2.default.func
}, _checkbox2.default.propTypes, {});

var SKCheckbox = function (_AntdComp) {
  _inherits(SKCheckbox, _AntdComp);

  function SKCheckbox() {
    var _ref;

    _classCallCheck(this, SKCheckbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SKCheckbox.__proto__ || Object.getPrototypeOf(SKCheckbox)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'SKCheckbox';
    _this.handleChange = function (domEvent) {
      _this.skVal(domEvent.target.checked);
    };
    return _this;
  }

  _createClass(SKCheckbox, [{
    key: 'render',
    value: function render() {
      var CompTag = this.props.compTag;


      return _react2.default.createElement(
        CompTag,
        _extends({}, this.skTransProps2Self(CompTag), {
          checked: this.skVal(),
          onChange: this.handleChange
        }),
        this.skTransProps2Child()
      );
    }
  }]);

  return SKCheckbox;
}(_AntdComp3.default);

SKCheckbox.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, _checkbox2.default.defaultProps, {
  compTag: _checkbox2.default
});
SKCheckbox.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _checkbox2.default.propTypes, {});
exports.default = SKCheckbox;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGQvY2hlY2tib3gvU0tDaGVja2JveC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0UHJvcHMiLCJhc3NpZ24iLCJhdXRvRm9jdXMiLCJjaGVja2VkIiwiZGVmYXVsdENoZWNrZWQiLCJpbmRldGVybWluYXRlIiwicHJvcFR5cGVzIiwiYm9vbCIsIm9uQ2hhbmdlIiwiZnVuYyIsIlNLQ2hlY2tib3giLCJhcmdzIiwiY29tcE5hbWUiLCJoYW5kbGVDaGFuZ2UiLCJkb21FdmVudCIsInNrVmFsIiwidGFyZ2V0IiwiQ29tcFRhZyIsInByb3BzIiwiY29tcFRhZyIsInNrVHJhbnNQcm9wczJTZWxmIiwic2tUcmFuc1Byb3BzMkNoaWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxtQkFBU0EsWUFBVCxHQUF3QixTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjO0FBQ3BDQyxhQUFXLEtBRHlCO0FBRXBDQyxXQUFTLEtBRjJCO0FBR3BDQyxrQkFBZ0IsS0FIb0I7QUFJcENDLGlCQUFlO0FBSnFCLENBQWQsRUFLckIsbUJBQVNMLFlBTFksRUFLRSxFQUxGLENBQXhCOztBQU9BLG1CQUFTTSxTQUFULEdBQXFCLFNBQUdMLE1BQUgsQ0FBVSxFQUFWLEVBQWM7QUFDakM7QUFDQUMsYUFBVyxvQkFBVUssSUFGWTtBQUdqQ0osV0FBUyxvQkFBVUksSUFIYztBQUlqQ0gsa0JBQWdCLG9CQUFVRyxJQUpPO0FBS2pDRixpQkFBZSxvQkFBVUUsSUFMUTtBQU1qQ0MsWUFBVSxvQkFBVUM7QUFOYSxDQUFkLEVBT2xCLG1CQUFTSCxTQVBTLEVBT0UsRUFQRixDQUFyQjs7SUFTcUJJLFU7OztBQU1uQix3QkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsbUpBQ1ZBLElBRFU7O0FBRW5CLFVBQUtDLFFBQUwsR0FBZ0IsWUFBaEI7QUFDQSxVQUFLQyxZQUFMLEdBQW9CLFVBQUNDLFFBQUQsRUFBYztBQUNoQyxZQUFLQyxLQUFMLENBQVdELFNBQVNFLE1BQVQsQ0FBZ0JiLE9BQTNCO0FBQ0QsS0FGRDtBQUhtQjtBQU1wQjs7Ozs2QkFFUTtBQUFBLFVBQ1VjLE9BRFYsR0FDc0IsS0FBS0MsS0FEM0IsQ0FDQ0MsT0FERDs7O0FBR1AsYUFDRTtBQUFDLGVBQUQ7QUFBQSxxQkFDTSxLQUFLQyxpQkFBTCxDQUF1QkgsT0FBdkIsQ0FETjtBQUVFLG1CQUFTLEtBQUtGLEtBQUwsRUFGWDtBQUdFLG9CQUFVLEtBQUtGO0FBSGpCO0FBS0csYUFBS1Esa0JBQUw7QUFMSCxPQURGO0FBU0Q7Ozs7OztBQTFCa0JYLFUsQ0FDWlYsWSxHQUFlLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNELFlBQXZCLEVBQXFDLG1CQUFTQSxZQUE5QyxFQUE0RDtBQUNoRm1CO0FBRGdGLENBQTVELEM7QUFESFQsVSxDQUlaSixTLEdBQVksU0FBR0wsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0ssU0FBdkIsRUFBa0MsbUJBQVNBLFNBQTNDLEVBQXNELEVBQXRELEM7a0JBSkFJLFUiLCJmaWxlIjoiYW50ZC9jaGVja2JveC9TS0NoZWNrYm94LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tICdhbnRkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU0sgfSBmcm9tICdzay1qcyc7XG5pbXBvcnQgQW50ZENvbXAgZnJvbSAnLi4vQW50ZENvbXAnO1xuXG5DaGVja2JveC5kZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIHtcbiAgYXV0b0ZvY3VzOiBmYWxzZSxcbiAgY2hlY2tlZDogZmFsc2UsXG4gIGRlZmF1bHRDaGVja2VkOiBmYWxzZSxcbiAgaW5kZXRlcm1pbmF0ZTogZmFsc2UsXG59LCBDaGVja2JveC5kZWZhdWx0UHJvcHMsIHt9KTtcblxuQ2hlY2tib3gucHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCB7XG4gIC8vaHR0cHM6Ly9hbnQuZGVzaWduL2NvbXBvbmVudHMvY2hlY2tib3gtY24vI0NoZWNrYm94XG4gIGF1dG9Gb2N1czogUHJvcFR5cGVzLmJvb2wsXG4gIGNoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxuICBkZWZhdWx0Q2hlY2tlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGluZGV0ZXJtaW5hdGU6IFByb3BUeXBlcy5ib29sLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG59LCBDaGVja2JveC5wcm9wVHlwZXMsIHt9KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tDaGVja2JveCBleHRlbmRzIEFudGRDb21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAuZGVmYXVsdFByb3BzLCBDaGVja2JveC5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBDaGVja2JveCxcbiAgfSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLnByb3BUeXBlcywgQ2hlY2tib3gucHJvcFR5cGVzLCB7fSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnU0tDaGVja2JveCc7XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSAoZG9tRXZlbnQpID0+IHtcbiAgICAgIHRoaXMuc2tWYWwoZG9tRXZlbnQudGFyZ2V0LmNoZWNrZWQpO1xuICAgIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb21wVGFnOiBDb21wVGFnIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wVGFnXG4gICAgICAgIHsuLi50aGlzLnNrVHJhbnNQcm9wczJTZWxmKENvbXBUYWcpfVxuICAgICAgICBjaGVja2VkPXt0aGlzLnNrVmFsKCl9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgID5cbiAgICAgICAge3RoaXMuc2tUcmFuc1Byb3BzMkNoaWxkKCl9XG4gICAgICA8L0NvbXBUYWc+XG4gICAgKTtcbiAgfVxufVxuIl19