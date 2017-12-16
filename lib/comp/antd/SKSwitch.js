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

var _AntdComp2 = require('./AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

var _Const = require('../../util/Const');

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
    return _this;
  }

  _createClass(SKSwitch, [{
    key: 'handleChange',
    value: function handleChange(checked) {
      this.skVal(checked);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          CompTag = _props.compTag,
          checkedChildren = _props.checkedChildren,
          unCheckedChildren = _props.unCheckedChildren;


      return _react2.default.createElement(CompTag, _extends({}, this.skTransProps2Self(CompTag), {
        checked: this.skVal(),
        checkedChildren: checkedChildren,
        onChange: this.handleChange.bind(this),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9TS1N3aXRjaC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0UHJvcHMiLCJhc3NpZ24iLCJhbGxvd0NsZWFyIiwiY2hlY2tlZCIsImRlZmF1bHRDaGVja2VkIiwic2l6ZSIsIkRlZmF1bHQiLCJsb2FkaW5nIiwicHJvcFR5cGVzIiwiYm9vbCIsImNoZWNrZWRDaGlsZHJlbiIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm5vZGUiLCJ1bkNoZWNrZWRDaGlsZHJlbiIsIm9uQ2hhbmdlIiwiZnVuYyIsIlNLU3dpdGNoIiwiYXJncyIsImNvbXBOYW1lIiwic2tWYWwiLCJwcm9wcyIsIkNvbXBUYWciLCJjb21wVGFnIiwic2tUcmFuc1Byb3BzMlNlbGYiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxpQkFBT0EsWUFBUCxHQUFzQixTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjO0FBQ2xDQyxjQUFZLEtBRHNCO0FBRWxDQyxXQUFTLEtBRnlCO0FBR2xDQyxrQkFBZ0IsS0FIa0I7QUFJbENDLFFBQU0sWUFBS0MsT0FKdUI7QUFLbENDLFdBQVM7QUFMeUIsQ0FBZCxFQU1uQixpQkFBT1AsWUFOWSxFQU1FLEVBTkYsQ0FBdEI7O0FBUUEsaUJBQU9RLFNBQVAsR0FBbUIsU0FBR1AsTUFBSCxDQUFVLEVBQVYsRUFBYztBQUMvQkMsY0FBWSxvQkFBVU8sSUFEUztBQUUvQk4sV0FBUyxvQkFBVU0sSUFGWTtBQUcvQkMsbUJBQWlCLG9CQUFVQyxTQUFWLENBQW9CLENBQ25DLG9CQUFVQyxNQUR5QixFQUVuQyxvQkFBVUMsSUFGeUIsQ0FBcEIsQ0FIYztBQU8vQlQsa0JBQWdCLG9CQUFVSyxJQVBLO0FBUS9CSixRQUFNLG9CQUFVTyxNQVJlO0FBUy9CRSxxQkFBbUIsb0JBQVVILFNBQVYsQ0FBb0IsQ0FDckMsb0JBQVVDLE1BRDJCLEVBRXJDLG9CQUFVQyxJQUYyQixDQUFwQixDQVRZO0FBYS9CRSxZQUFVLG9CQUFVQyxJQWJXO0FBYy9CVCxXQUFTLG9CQUFVRTtBQWRZLENBQWQsRUFlaEIsaUJBQU9ELFNBZlMsRUFlRSxFQWZGLENBQW5COztJQWlCcUJTLFE7OztBQU9uQixzQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsK0lBQ1ZBLElBRFU7O0FBRW5CLFVBQUtDLFFBQUwsR0FBZ0IsVUFBaEI7QUFGbUI7QUFHcEI7Ozs7aUNBRVloQixPLEVBQVM7QUFDcEIsV0FBS2lCLEtBQUwsQ0FBV2pCLE9BQVg7QUFDRDs7OzZCQUVRO0FBQUEsbUJBQ3NELEtBQUtrQixLQUQzRDtBQUFBLFVBQ09DLE9BRFAsVUFDRkMsT0FERTtBQUFBLFVBQ2dCYixlQURoQixVQUNnQkEsZUFEaEI7QUFBQSxVQUNpQ0ksaUJBRGpDLFVBQ2lDQSxpQkFEakM7OztBQUdQLGFBQ0UsOEJBQUMsT0FBRCxlQUFhLEtBQUtVLGlCQUFMLENBQXVCRixPQUF2QixDQUFiO0FBQ1MsaUJBQVMsS0FBS0YsS0FBTCxFQURsQjtBQUVTLHlCQUFpQlYsZUFGMUI7QUFHUyxrQkFBVSxLQUFLZSxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUhuQjtBQUlTLDJCQUFtQlosaUJBSjVCLElBREY7QUFPRDs7Ozs7O0FBMUJrQkcsUSxDQUNaakIsWSxHQUFlLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNELFlBQXZCLEVBQXFDLGlCQUFPQSxZQUE1QyxFQUEwRDtBQUM5RXVCO0FBRDhFLENBQTFELEM7QUFESE4sUSxDQUlaVCxTLEdBQVksU0FBR1AsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU08sU0FBdkIsRUFBa0MsaUJBQU9BLFNBQXpDLEVBQW9ELEVBQXBELEM7a0JBSkFTLFEiLCJmaWxlIjoiY29tcC9hbnRkL1NLU3dpdGNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTd2l0Y2h9IGZyb20gJ2FudGQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1NLfSBmcm9tICdzay1qcyc7XG5pbXBvcnQgQW50ZENvbXAgZnJvbSAnLi9BbnRkQ29tcCc7XG5pbXBvcnQge1NJWkV9IGZyb20gJy4uLy4uL3V0aWwvQ29uc3QnO1xuXG5Td2l0Y2guZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCB7XG4gIGFsbG93Q2xlYXI6IGZhbHNlLFxuICBjaGVja2VkOiBmYWxzZSxcbiAgZGVmYXVsdENoZWNrZWQ6IGZhbHNlLFxuICBzaXplOiBTSVpFLkRlZmF1bHQsXG4gIGxvYWRpbmc6IGZhbHNlXG59LCBTd2l0Y2guZGVmYXVsdFByb3BzLCB7fSk7XG5cblN3aXRjaC5wcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIHtcbiAgYWxsb3dDbGVhcjogUHJvcFR5cGVzLmJvb2wsXG4gIGNoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxuICBjaGVja2VkQ2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm5vZGVcbiAgXSksXG4gIGRlZmF1bHRDaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2l6ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdW5DaGVja2VkQ2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm5vZGVcbiAgXSksXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2xcbn0sIFN3aXRjaC5wcm9wVHlwZXMsIHt9KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tTd2l0Y2ggZXh0ZW5kcyBBbnRkQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLmRlZmF1bHRQcm9wcywgU3dpdGNoLmRlZmF1bHRQcm9wcywge1xuICAgIGNvbXBUYWc6IFN3aXRjaFxuICB9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAucHJvcFR5cGVzLCBTd2l0Y2gucHJvcFR5cGVzLCB7fSk7XG5cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5jb21wTmFtZSA9ICdTS1N3aXRjaCc7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoY2hlY2tlZCkge1xuICAgIHRoaXMuc2tWYWwoY2hlY2tlZCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtjb21wVGFnOiBDb21wVGFnLCBjaGVja2VkQ2hpbGRyZW4sIHVuQ2hlY2tlZENoaWxkcmVufSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBUYWcgey4uLnRoaXMuc2tUcmFuc1Byb3BzMlNlbGYoQ29tcFRhZyl9XG4gICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnNrVmFsKCl9XG4gICAgICAgICAgICAgICBjaGVja2VkQ2hpbGRyZW49e2NoZWNrZWRDaGlsZHJlbn1cbiAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgdW5DaGVja2VkQ2hpbGRyZW49e3VuQ2hlY2tlZENoaWxkcmVufS8+XG4gICAgKTtcbiAgfVxufVxuIl19