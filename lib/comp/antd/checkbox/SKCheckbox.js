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
    return _this;
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
        _extends({}, this.skTransProps2Self(CompTag), {
          checked: this.skVal(),
          onChange: this.handleChange.bind(this) }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9jaGVja2JveC9TS0NoZWNrYm94LmpzIl0sIm5hbWVzIjpbImRlZmF1bHRQcm9wcyIsImFzc2lnbiIsImF1dG9Gb2N1cyIsImNoZWNrZWQiLCJkZWZhdWx0Q2hlY2tlZCIsImluZGV0ZXJtaW5hdGUiLCJwcm9wVHlwZXMiLCJib29sIiwib25DaGFuZ2UiLCJmdW5jIiwiU0tDaGVja2JveCIsImFyZ3MiLCJjb21wTmFtZSIsImRvbUV2ZW50Iiwic2tWYWwiLCJ0YXJnZXQiLCJDb21wVGFnIiwicHJvcHMiLCJjb21wVGFnIiwic2tUcmFuc1Byb3BzMlNlbGYiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwic2tUcmFuc1Byb3BzMkNoaWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxtQkFBU0EsWUFBVCxHQUF3QixTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjO0FBQ3BDQyxhQUFXLEtBRHlCO0FBRXBDQyxXQUFTLEtBRjJCO0FBR3BDQyxrQkFBZ0IsS0FIb0I7QUFJcENDLGlCQUFlO0FBSnFCLENBQWQsRUFLckIsbUJBQVNMLFlBTFksRUFLRSxFQUxGLENBQXhCOztBQU9BLG1CQUFTTSxTQUFULEdBQXFCLFNBQUdMLE1BQUgsQ0FBVSxFQUFWLEVBQWM7QUFDakM7QUFDQUMsYUFBVyxvQkFBVUssSUFGWTtBQUdqQ0osV0FBUyxvQkFBVUksSUFIYztBQUlqQ0gsa0JBQWdCLG9CQUFVRyxJQUpPO0FBS2pDRixpQkFBZSxvQkFBVUUsSUFMUTtBQU1qQ0MsWUFBVSxvQkFBVUM7QUFOYSxDQUFkLEVBT2xCLG1CQUFTSCxTQVBTLEVBT0UsRUFQRixDQUFyQjs7SUFTcUJJLFU7OztBQU1uQix3QkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsbUpBQ1ZBLElBRFU7O0FBRW5CLFVBQUtDLFFBQUwsR0FBZ0IsWUFBaEI7QUFGbUI7QUFHcEI7Ozs7aUNBRVlDLFEsRUFBVTtBQUNyQixXQUFLQyxLQUFMLENBQVdELFNBQVNFLE1BQVQsQ0FBZ0JaLE9BQTNCO0FBQ0Q7Ozs2QkFFUTtBQUFBLFVBQ09hLE9BRFAsR0FDa0IsS0FBS0MsS0FEdkIsQ0FDRkMsT0FERTs7O0FBR1AsYUFDRTtBQUFDLGVBQUQ7QUFBQSxxQkFBYSxLQUFLQyxpQkFBTCxDQUF1QkgsT0FBdkIsQ0FBYjtBQUNTLG1CQUFTLEtBQUtGLEtBQUwsRUFEbEI7QUFFUyxvQkFBVSxLQUFLTSxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUZuQjtBQUdHLGFBQUtDLGtCQUFMO0FBSEgsT0FERjtBQU9EOzs7Ozs7QUF6QmtCWixVLENBQ1pWLFksR0FBZSxTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTRCxZQUF2QixFQUFxQyxtQkFBU0EsWUFBOUMsRUFBNEQ7QUFDaEZrQjtBQURnRixDQUE1RCxDO0FBREhSLFUsQ0FJWkosUyxHQUFZLFNBQUdMLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNLLFNBQXZCLEVBQWtDLG1CQUFTQSxTQUEzQyxFQUFzRCxFQUF0RCxDO2tCQUpBSSxVIiwiZmlsZSI6ImNvbXAvYW50ZC9jaGVja2JveC9TS0NoZWNrYm94LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGVja2JveH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U0t9IGZyb20gJ3NrLWpzJztcbmltcG9ydCBBbnRkQ29tcCBmcm9tICcuLi9BbnRkQ29tcCc7XG5cbkNoZWNrYm94LmRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwge1xuICBhdXRvRm9jdXM6IGZhbHNlLFxuICBjaGVja2VkOiBmYWxzZSxcbiAgZGVmYXVsdENoZWNrZWQ6IGZhbHNlLFxuICBpbmRldGVybWluYXRlOiBmYWxzZVxufSwgQ2hlY2tib3guZGVmYXVsdFByb3BzLCB7fSk7XG5cbkNoZWNrYm94LnByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwge1xuICAvL2h0dHBzOi8vYW50LmRlc2lnbi9jb21wb25lbnRzL2NoZWNrYm94LWNuLyNDaGVja2JveFxuICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuICBjaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGVmYXVsdENoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxuICBpbmRldGVybWluYXRlOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jXG59LCBDaGVja2JveC5wcm9wVHlwZXMsIHt9KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tDaGVja2JveCBleHRlbmRzIEFudGRDb21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAuZGVmYXVsdFByb3BzLCBDaGVja2JveC5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBDaGVja2JveFxuICB9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAucHJvcFR5cGVzLCBDaGVja2JveC5wcm9wVHlwZXMsIHt9KTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5jb21wTmFtZSA9ICdTS0NoZWNrYm94JztcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShkb21FdmVudCkge1xuICAgIHRoaXMuc2tWYWwoZG9tRXZlbnQudGFyZ2V0LmNoZWNrZWQpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7Y29tcFRhZzogQ29tcFRhZ30gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wVGFnIHsuLi50aGlzLnNrVHJhbnNQcm9wczJTZWxmKENvbXBUYWcpfVxuICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5za1ZhbCgpfVxuICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9PlxuICAgICAgICB7dGhpcy5za1RyYW5zUHJvcHMyQ2hpbGQoKX1cbiAgICAgIDwvQ29tcFRhZz5cbiAgICApO1xuICB9XG59XG4iXX0=