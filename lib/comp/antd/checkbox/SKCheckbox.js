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
          onChange: this.handleChange }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9jaGVja2JveC9TS0NoZWNrYm94LmpzIl0sIm5hbWVzIjpbImRlZmF1bHRQcm9wcyIsImFzc2lnbiIsImF1dG9Gb2N1cyIsImNoZWNrZWQiLCJkZWZhdWx0Q2hlY2tlZCIsImluZGV0ZXJtaW5hdGUiLCJwcm9wVHlwZXMiLCJib29sIiwib25DaGFuZ2UiLCJmdW5jIiwiU0tDaGVja2JveCIsImFyZ3MiLCJjb21wTmFtZSIsImhhbmRsZUNoYW5nZSIsImRvbUV2ZW50Iiwic2tWYWwiLCJ0YXJnZXQiLCJDb21wVGFnIiwicHJvcHMiLCJjb21wVGFnIiwic2tUcmFuc1Byb3BzMlNlbGYiLCJza1RyYW5zUHJvcHMyQ2hpbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLG1CQUFTQSxZQUFULEdBQXdCLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWM7QUFDcENDLGFBQVcsS0FEeUI7QUFFcENDLFdBQVMsS0FGMkI7QUFHcENDLGtCQUFnQixLQUhvQjtBQUlwQ0MsaUJBQWU7QUFKcUIsQ0FBZCxFQUtyQixtQkFBU0wsWUFMWSxFQUtFLEVBTEYsQ0FBeEI7O0FBT0EsbUJBQVNNLFNBQVQsR0FBcUIsU0FBR0wsTUFBSCxDQUFVLEVBQVYsRUFBYztBQUNqQztBQUNBQyxhQUFXLG9CQUFVSyxJQUZZO0FBR2pDSixXQUFTLG9CQUFVSSxJQUhjO0FBSWpDSCxrQkFBZ0Isb0JBQVVHLElBSk87QUFLakNGLGlCQUFlLG9CQUFVRSxJQUxRO0FBTWpDQyxZQUFVLG9CQUFVQztBQU5hLENBQWQsRUFPbEIsbUJBQVNILFNBUFMsRUFPRSxFQVBGLENBQXJCOztJQVNxQkksVTs7O0FBTW5CLHdCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSxtSkFDVkEsSUFEVTs7QUFFbkIsVUFBS0MsUUFBTCxHQUFnQixZQUFoQjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsVUFBQ0MsUUFBRCxFQUFjO0FBQ2hDLFlBQUtDLEtBQUwsQ0FBV0QsU0FBU0UsTUFBVCxDQUFnQmIsT0FBM0I7QUFDRCxLQUZEO0FBSG1CO0FBTXBCOzs7OzZCQUVRO0FBQUEsVUFDT2MsT0FEUCxHQUNrQixLQUFLQyxLQUR2QixDQUNGQyxPQURFOzs7QUFHUCxhQUNFO0FBQUMsZUFBRDtBQUFBLHFCQUFhLEtBQUtDLGlCQUFMLENBQXVCSCxPQUF2QixDQUFiO0FBQ1MsbUJBQVMsS0FBS0YsS0FBTCxFQURsQjtBQUVTLG9CQUFVLEtBQUtGLFlBRnhCO0FBR0csYUFBS1Esa0JBQUw7QUFISCxPQURGO0FBT0Q7Ozs7OztBQXhCa0JYLFUsQ0FDWlYsWSxHQUFlLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNELFlBQXZCLEVBQXFDLG1CQUFTQSxZQUE5QyxFQUE0RDtBQUNoRm1CO0FBRGdGLENBQTVELEM7QUFESFQsVSxDQUlaSixTLEdBQVksU0FBR0wsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0ssU0FBdkIsRUFBa0MsbUJBQVNBLFNBQTNDLEVBQXNELEVBQXRELEM7a0JBSkFJLFUiLCJmaWxlIjoiY29tcC9hbnRkL2NoZWNrYm94L1NLQ2hlY2tib3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NoZWNrYm94fSBmcm9tICdhbnRkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTS30gZnJvbSAnc2stanMnO1xuaW1wb3J0IEFudGRDb21wIGZyb20gJy4uL0FudGRDb21wJztcblxuQ2hlY2tib3guZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCB7XG4gIGF1dG9Gb2N1czogZmFsc2UsXG4gIGNoZWNrZWQ6IGZhbHNlLFxuICBkZWZhdWx0Q2hlY2tlZDogZmFsc2UsXG4gIGluZGV0ZXJtaW5hdGU6IGZhbHNlXG59LCBDaGVja2JveC5kZWZhdWx0UHJvcHMsIHt9KTtcblxuQ2hlY2tib3gucHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCB7XG4gIC8vaHR0cHM6Ly9hbnQuZGVzaWduL2NvbXBvbmVudHMvY2hlY2tib3gtY24vI0NoZWNrYm94XG4gIGF1dG9Gb2N1czogUHJvcFR5cGVzLmJvb2wsXG4gIGNoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxuICBkZWZhdWx0Q2hlY2tlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGluZGV0ZXJtaW5hdGU6IFByb3BUeXBlcy5ib29sLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmNcbn0sIENoZWNrYm94LnByb3BUeXBlcywge30pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS0NoZWNrYm94IGV4dGVuZHMgQW50ZENvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5kZWZhdWx0UHJvcHMsIENoZWNrYm94LmRlZmF1bHRQcm9wcywge1xuICAgIGNvbXBUYWc6IENoZWNrYm94XG4gIH0pO1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5wcm9wVHlwZXMsIENoZWNrYm94LnByb3BUeXBlcywge30pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLmNvbXBOYW1lID0gJ1NLQ2hlY2tib3gnO1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gKGRvbUV2ZW50KSA9PiB7XG4gICAgICB0aGlzLnNrVmFsKGRvbUV2ZW50LnRhcmdldC5jaGVja2VkKTtcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7Y29tcFRhZzogQ29tcFRhZ30gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wVGFnIHsuLi50aGlzLnNrVHJhbnNQcm9wczJTZWxmKENvbXBUYWcpfVxuICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5za1ZhbCgpfVxuICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfT5cbiAgICAgICAge3RoaXMuc2tUcmFuc1Byb3BzMkNoaWxkKCl9XG4gICAgICA8L0NvbXBUYWc+XG4gICAgKTtcbiAgfVxufVxuIl19