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

var _AntdComp2 = require('./AntdComp');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9TS0NoZWNrYm94LmpzIl0sIm5hbWVzIjpbImRlZmF1bHRQcm9wcyIsImFzc2lnbiIsImF1dG9Gb2N1cyIsImNoZWNrZWQiLCJkZWZhdWx0Q2hlY2tlZCIsImluZGV0ZXJtaW5hdGUiLCJwcm9wVHlwZXMiLCJib29sIiwib25DaGFuZ2UiLCJmdW5jIiwiU0tDaGVja2JveCIsImFyZ3MiLCJjb21wTmFtZSIsImRvbUV2ZW50Iiwic2tWYWwiLCJ0YXJnZXQiLCJDb21wVGFnIiwicHJvcHMiLCJjb21wVGFnIiwic2tUcmFuc1Byb3BzMlNlbGYiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwic2tUcmFuc1Byb3BzMkNoaWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxtQkFBU0EsWUFBVCxHQUF3QixTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjO0FBQ3BDQyxhQUFXLEtBRHlCO0FBRXBDQyxXQUFTLEtBRjJCO0FBR3BDQyxrQkFBZ0IsS0FIb0I7QUFJcENDLGlCQUFlO0FBSnFCLENBQWQsRUFLckIsbUJBQVNMLFlBTFksRUFLRSxFQUxGLENBQXhCOztBQU9BLG1CQUFTTSxTQUFULEdBQXFCLFNBQUdMLE1BQUgsQ0FBVSxFQUFWLEVBQWM7QUFDakNDLGFBQVcsb0JBQVVLLElBRFk7QUFFakNKLFdBQVMsb0JBQVVJLElBRmM7QUFHakNILGtCQUFnQixvQkFBVUcsSUFITztBQUlqQ0YsaUJBQWUsb0JBQVVFLElBSlE7QUFLakNDLFlBQVUsb0JBQVVDO0FBTGEsQ0FBZCxFQU1sQixtQkFBU0gsU0FOUyxFQU1FLEVBTkYsQ0FBckI7O0lBUXFCSSxVOzs7QUFNbkIsd0JBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLG1KQUNWQSxJQURVOztBQUVuQixVQUFLQyxRQUFMLEdBQWdCLFlBQWhCO0FBRm1CO0FBR3BCOzs7O2lDQUVZQyxRLEVBQVU7QUFDckIsV0FBS0MsS0FBTCxDQUFXRCxTQUFTRSxNQUFULENBQWdCWixPQUEzQjtBQUNEOzs7NkJBRVE7QUFBQSxVQUNPYSxPQURQLEdBQ2tCLEtBQUtDLEtBRHZCLENBQ0ZDLE9BREU7OztBQUdQLGFBQ0U7QUFBQyxlQUFEO0FBQUEscUJBQWEsS0FBS0MsaUJBQUwsQ0FBdUJILE9BQXZCLENBQWI7QUFDUyxtQkFBUyxLQUFLRixLQUFMLEVBRGxCO0FBRVMsb0JBQVUsS0FBS00sWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FGbkI7QUFHRyxhQUFLQyxrQkFBTDtBQUhILE9BREY7QUFPRDs7Ozs7O0FBekJrQlosVSxDQUNaVixZLEdBQWUsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0QsWUFBdkIsRUFBcUMsbUJBQVNBLFlBQTlDLEVBQTREO0FBQ2hGa0I7QUFEZ0YsQ0FBNUQsQztBQURIUixVLENBSVpKLFMsR0FBWSxTQUFHTCxNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTSyxTQUF2QixFQUFrQyxtQkFBU0EsU0FBM0MsRUFBc0QsRUFBdEQsQztrQkFKQUksVSIsImZpbGUiOiJjb21wL2FudGQvU0tDaGVja2JveC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hlY2tib3h9IGZyb20gJ2FudGQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1NLfSBmcm9tICdzay1qcyc7XG5pbXBvcnQgQW50ZENvbXAgZnJvbSAnLi9BbnRkQ29tcCc7XG5cbkNoZWNrYm94LmRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwge1xuICBhdXRvRm9jdXM6IGZhbHNlLFxuICBjaGVja2VkOiBmYWxzZSxcbiAgZGVmYXVsdENoZWNrZWQ6IGZhbHNlLFxuICBpbmRldGVybWluYXRlOiBmYWxzZVxufSwgQ2hlY2tib3guZGVmYXVsdFByb3BzLCB7fSk7XG5cbkNoZWNrYm94LnByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwge1xuICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuICBjaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGVmYXVsdENoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxuICBpbmRldGVybWluYXRlOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jXG59LCBDaGVja2JveC5wcm9wVHlwZXMsIHt9KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tDaGVja2JveCBleHRlbmRzIEFudGRDb21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAuZGVmYXVsdFByb3BzLCBDaGVja2JveC5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBDaGVja2JveFxuICB9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAucHJvcFR5cGVzLCBDaGVja2JveC5wcm9wVHlwZXMsIHt9KTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5jb21wTmFtZSA9ICdTS0NoZWNrYm94JztcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShkb21FdmVudCkge1xuICAgIHRoaXMuc2tWYWwoZG9tRXZlbnQudGFyZ2V0LmNoZWNrZWQpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7Y29tcFRhZzogQ29tcFRhZ30gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wVGFnIHsuLi50aGlzLnNrVHJhbnNQcm9wczJTZWxmKENvbXBUYWcpfVxuICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5za1ZhbCgpfVxuICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9PlxuICAgICAgICB7dGhpcy5za1RyYW5zUHJvcHMyQ2hpbGQoKX1cbiAgICAgIDwvQ29tcFRhZz5cbiAgICApO1xuICB9XG59XG4iXX0=