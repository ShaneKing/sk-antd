'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _switch = require('antd/lib/switch');

var _switch2 = _interopRequireDefault(_switch);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/switch/style');

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

_switch2.default.defaultProps = _skJs.SK.assign({}, {
  allowClear: false,
  checked: false,
  defaultChecked: false,
  size: _Const.SIZE.Default,
  loading: false
}, _switch2.default.defaultProps, {});

_switch2.default.propTypes = _skJs.SK.assign({}, {
  //https://ant.design/components/switch-cn/#API
  allowClear: _propTypes2.default.bool,
  checked: _propTypes2.default.bool,
  checkedChildren: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  defaultChecked: _propTypes2.default.bool,
  size: _propTypes2.default.string,
  unCheckedChildren: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  onChange: _propTypes2.default.func,
  loading: _propTypes2.default.bool
}, _switch2.default.propTypes, {});

var SKSwitch = function (_AntdComp) {
  _inherits(SKSwitch, _AntdComp);

  function SKSwitch() {
    var _ref;

    _classCallCheck(this, SKSwitch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SKSwitch.__proto__ || Object.getPrototypeOf(SKSwitch)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'SKSwitch';
    _this.handleChange = function (checked) {
      _this.skVal(checked);
    };
    return _this;
  }

  _createClass(SKSwitch, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          CompTag = _props.compTag,
          checkedChildren = _props.checkedChildren,
          unCheckedChildren = _props.unCheckedChildren;


      return _react2.default.createElement(CompTag, _extends({}, this.skTransProps2Self(CompTag), {
        checked: this.skVal(),
        checkedChildren: checkedChildren,
        onChange: this.handleChange,
        unCheckedChildren: unCheckedChildren }));
    }
  }]);

  return SKSwitch;
}(_AntdComp3.default);

SKSwitch.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, _switch2.default.defaultProps, {
  compTag: _switch2.default
});
SKSwitch.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _switch2.default.propTypes, {});
exports.default = SKSwitch;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9zd2l0Y2gvU0tTd2l0Y2guanMiXSwibmFtZXMiOlsiZGVmYXVsdFByb3BzIiwiYXNzaWduIiwiYWxsb3dDbGVhciIsImNoZWNrZWQiLCJkZWZhdWx0Q2hlY2tlZCIsInNpemUiLCJEZWZhdWx0IiwibG9hZGluZyIsInByb3BUeXBlcyIsImJvb2wiLCJjaGVja2VkQ2hpbGRyZW4iLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJub2RlIiwidW5DaGVja2VkQ2hpbGRyZW4iLCJvbkNoYW5nZSIsImZ1bmMiLCJTS1N3aXRjaCIsImFyZ3MiLCJjb21wTmFtZSIsImhhbmRsZUNoYW5nZSIsInNrVmFsIiwicHJvcHMiLCJDb21wVGFnIiwiY29tcFRhZyIsInNrVHJhbnNQcm9wczJTZWxmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxpQkFBT0EsWUFBUCxHQUFzQixTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjO0FBQ2xDQyxjQUFZLEtBRHNCO0FBRWxDQyxXQUFTLEtBRnlCO0FBR2xDQyxrQkFBZ0IsS0FIa0I7QUFJbENDLFFBQU0sWUFBS0MsT0FKdUI7QUFLbENDLFdBQVM7QUFMeUIsQ0FBZCxFQU1uQixpQkFBT1AsWUFOWSxFQU1FLEVBTkYsQ0FBdEI7O0FBUUEsaUJBQU9RLFNBQVAsR0FBbUIsU0FBR1AsTUFBSCxDQUFVLEVBQVYsRUFBYztBQUMvQjtBQUNBQyxjQUFZLG9CQUFVTyxJQUZTO0FBRy9CTixXQUFTLG9CQUFVTSxJQUhZO0FBSS9CQyxtQkFBaUIsb0JBQVVDLFNBQVYsQ0FBb0IsQ0FDbkMsb0JBQVVDLE1BRHlCLEVBRW5DLG9CQUFVQyxJQUZ5QixDQUFwQixDQUpjO0FBUS9CVCxrQkFBZ0Isb0JBQVVLLElBUks7QUFTL0JKLFFBQU0sb0JBQVVPLE1BVGU7QUFVL0JFLHFCQUFtQixvQkFBVUgsU0FBVixDQUFvQixDQUNyQyxvQkFBVUMsTUFEMkIsRUFFckMsb0JBQVVDLElBRjJCLENBQXBCLENBVlk7QUFjL0JFLFlBQVUsb0JBQVVDLElBZFc7QUFlL0JULFdBQVMsb0JBQVVFO0FBZlksQ0FBZCxFQWdCaEIsaUJBQU9ELFNBaEJTLEVBZ0JFLEVBaEJGLENBQW5COztJQWtCcUJTLFE7OztBQU1uQixzQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsK0lBQ1ZBLElBRFU7O0FBRW5CLFVBQUtDLFFBQUwsR0FBZ0IsVUFBaEI7QUFDQSxVQUFLQyxZQUFMLEdBQW9CLFVBQUNqQixPQUFELEVBQWE7QUFDL0IsWUFBS2tCLEtBQUwsQ0FBV2xCLE9BQVg7QUFDRCxLQUZEO0FBSG1CO0FBTXBCOzs7OzZCQUVRO0FBQUEsbUJBQ3NELEtBQUttQixLQUQzRDtBQUFBLFVBQ09DLE9BRFAsVUFDRkMsT0FERTtBQUFBLFVBQ2dCZCxlQURoQixVQUNnQkEsZUFEaEI7QUFBQSxVQUNpQ0ksaUJBRGpDLFVBQ2lDQSxpQkFEakM7OztBQUdQLGFBQ0UsOEJBQUMsT0FBRCxlQUFhLEtBQUtXLGlCQUFMLENBQXVCRixPQUF2QixDQUFiO0FBQ1MsaUJBQVMsS0FBS0YsS0FBTCxFQURsQjtBQUVTLHlCQUFpQlgsZUFGMUI7QUFHUyxrQkFBVSxLQUFLVSxZQUh4QjtBQUlTLDJCQUFtQk4saUJBSjVCLElBREY7QUFPRDs7Ozs7O0FBeEJrQkcsUSxDQUNaakIsWSxHQUFlLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNELFlBQXZCLEVBQXFDLGlCQUFPQSxZQUE1QyxFQUEwRDtBQUM5RXdCO0FBRDhFLENBQTFELEM7QUFESFAsUSxDQUlaVCxTLEdBQVksU0FBR1AsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU08sU0FBdkIsRUFBa0MsaUJBQU9BLFNBQXpDLEVBQW9ELEVBQXBELEM7a0JBSkFTLFEiLCJmaWxlIjoiY29tcC9hbnRkL3N3aXRjaC9TS1N3aXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3dpdGNofSBmcm9tICdhbnRkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTS30gZnJvbSAnc2stanMnO1xuaW1wb3J0IEFudGRDb21wIGZyb20gJy4uL0FudGRDb21wJztcbmltcG9ydCB7U0laRX0gZnJvbSAnLi4vLi4vLi4vdXRpbC9Db25zdCc7XG5cblN3aXRjaC5kZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIHtcbiAgYWxsb3dDbGVhcjogZmFsc2UsXG4gIGNoZWNrZWQ6IGZhbHNlLFxuICBkZWZhdWx0Q2hlY2tlZDogZmFsc2UsXG4gIHNpemU6IFNJWkUuRGVmYXVsdCxcbiAgbG9hZGluZzogZmFsc2Vcbn0sIFN3aXRjaC5kZWZhdWx0UHJvcHMsIHt9KTtcblxuU3dpdGNoLnByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwge1xuICAvL2h0dHBzOi8vYW50LmRlc2lnbi9jb21wb25lbnRzL3N3aXRjaC1jbi8jQVBJXG4gIGFsbG93Q2xlYXI6IFByb3BUeXBlcy5ib29sLFxuICBjaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2hlY2tlZENoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5ub2RlXG4gIF0pLFxuICBkZWZhdWx0Q2hlY2tlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHNpemU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHVuQ2hlY2tlZENoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5ub2RlXG4gIF0pLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sXG59LCBTd2l0Y2gucHJvcFR5cGVzLCB7fSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNLU3dpdGNoIGV4dGVuZHMgQW50ZENvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5kZWZhdWx0UHJvcHMsIFN3aXRjaC5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBTd2l0Y2hcbiAgfSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLnByb3BUeXBlcywgU3dpdGNoLnByb3BUeXBlcywge30pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLmNvbXBOYW1lID0gJ1NLU3dpdGNoJztcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IChjaGVja2VkKSA9PiB7XG4gICAgICB0aGlzLnNrVmFsKGNoZWNrZWQpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge2NvbXBUYWc6IENvbXBUYWcsIGNoZWNrZWRDaGlsZHJlbiwgdW5DaGVja2VkQ2hpbGRyZW59ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcFRhZyB7Li4udGhpcy5za1RyYW5zUHJvcHMyU2VsZihDb21wVGFnKX1cbiAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc2tWYWwoKX1cbiAgICAgICAgICAgICAgIGNoZWNrZWRDaGlsZHJlbj17Y2hlY2tlZENoaWxkcmVufVxuICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgdW5DaGVja2VkQ2hpbGRyZW49e3VuQ2hlY2tlZENoaWxkcmVufS8+XG4gICAgKTtcbiAgfVxufVxuIl19