'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

require('antd/lib/button/style');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _skJs = require('sk-js');

var _AntdComp2 = require('../AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

var _Const = require('../../../util/Const');

var _REACT = require('../../../util/REACT');

var _REACT2 = _interopRequireDefault(_REACT);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_button2.default.defaultProps = _skJs.SK.assign({}, {
  ghost: false,
  htmlType: _REACT2.default.TAG.button,
  loading: false,
  size: _Const.SIZE.Default
}, _button2.default.defaultProps, {});

_button2.default.propTypes = _skJs.SK.assign({}, {
  //https://ant.design/components/button-cn/#API
  ghost: _propTypes2.default.bool,
  htmlType: _propTypes2.default.string,
  icon: _propTypes2.default.string,
  loading: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.object]),
  shape: _propTypes2.default.string,
  size: _propTypes2.default.string,
  type: _propTypes2.default.string,
  onClick: _propTypes2.default.func,
  href: _propTypes2.default.string,
  target: _propTypes2.default.string
}, _button2.default.propTypes, {});

var SKButton = function (_AntdComp) {
  _inherits(SKButton, _AntdComp);

  function SKButton() {
    var _ref;

    _classCallCheck(this, SKButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SKButton.__proto__ || Object.getPrototypeOf(SKButton)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'SKButton';
    return _this;
  }

  return SKButton;
}(_AntdComp3.default);

SKButton.TYPE = {
  Primary: 'primary',
  Dashed: 'dashed',
  Danger: 'danger'
};
SKButton.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, _button2.default.defaultProps, {
  compTag: _button2.default
});
SKButton.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _button2.default.propTypes, {});
exports.default = SKButton;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9idXR0b24vU0tCdXR0b24uanMiXSwibmFtZXMiOlsiZGVmYXVsdFByb3BzIiwiYXNzaWduIiwiZ2hvc3QiLCJodG1sVHlwZSIsIlRBRyIsImJ1dHRvbiIsImxvYWRpbmciLCJzaXplIiwiRGVmYXVsdCIsInByb3BUeXBlcyIsImJvb2wiLCJzdHJpbmciLCJpY29uIiwib25lT2ZUeXBlIiwib2JqZWN0Iiwic2hhcGUiLCJ0eXBlIiwib25DbGljayIsImZ1bmMiLCJocmVmIiwidGFyZ2V0IiwiU0tCdXR0b24iLCJhcmdzIiwiY29tcE5hbWUiLCJUWVBFIiwiUHJpbWFyeSIsIkRhc2hlZCIsIkRhbmdlciIsImNvbXBUYWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsaUJBQU9BLFlBQVAsR0FBc0IsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYztBQUNsQ0MsU0FBTyxLQUQyQjtBQUVsQ0MsWUFBVSxnQkFBTUMsR0FBTixDQUFVQyxNQUZjO0FBR2xDQyxXQUFTLEtBSHlCO0FBSWxDQyxRQUFNLFlBQUtDO0FBSnVCLENBQWQsRUFLbkIsaUJBQU9SLFlBTFksRUFLRSxFQUxGLENBQXRCOztBQU9BLGlCQUFPUyxTQUFQLEdBQW1CLFNBQUdSLE1BQUgsQ0FBVSxFQUFWLEVBQWM7QUFDL0I7QUFDQUMsU0FBTyxvQkFBVVEsSUFGYztBQUcvQlAsWUFBVSxvQkFBVVEsTUFIVztBQUkvQkMsUUFBTSxvQkFBVUQsTUFKZTtBQUsvQkwsV0FBUyxvQkFBVU8sU0FBVixDQUFvQixDQUMzQixvQkFBVUgsSUFEaUIsRUFFM0Isb0JBQVVJLE1BRmlCLENBQXBCLENBTHNCO0FBUy9CQyxTQUFPLG9CQUFVSixNQVRjO0FBVS9CSixRQUFNLG9CQUFVSSxNQVZlO0FBVy9CSyxRQUFNLG9CQUFVTCxNQVhlO0FBWS9CTSxXQUFTLG9CQUFVQyxJQVpZO0FBYS9CQyxRQUFNLG9CQUFVUixNQWJlO0FBYy9CUyxVQUFRLG9CQUFVVDtBQWRhLENBQWQsRUFlaEIsaUJBQU9GLFNBZlMsRUFlRSxFQWZGLENBQW5COztJQWlCcUJZLFE7OztBQVduQixzQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsK0lBQ1ZBLElBRFU7O0FBRW5CLFVBQUtDLFFBQUwsR0FBZ0IsVUFBaEI7QUFGbUI7QUFHcEI7Ozs7O0FBZGtCRixRLENBQ1pHLEksR0FBTztBQUNaQyxXQUFTLFNBREc7QUFFWkMsVUFBUSxRQUZJO0FBR1pDLFVBQVE7QUFISSxDO0FBREtOLFEsQ0FNWnJCLFksR0FBZSxTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTRCxZQUF2QixFQUFxQyxpQkFBT0EsWUFBNUMsRUFBMEQ7QUFDOUU0QjtBQUQ4RSxDQUExRCxDO0FBTkhQLFEsQ0FTWlosUyxHQUFZLFNBQUdSLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNRLFNBQXZCLEVBQWtDLGlCQUFPQSxTQUF6QyxFQUFvRCxFQUFwRCxDO2tCQVRBWSxRIiwiZmlsZSI6ImNvbXAvYW50ZC9idXR0b24vU0tCdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0J1dHRvbn0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtTS30gZnJvbSAnc2stanMnO1xuaW1wb3J0IEFudGRDb21wIGZyb20gJy4uL0FudGRDb21wJztcbmltcG9ydCB7U0laRX0gZnJvbSAnLi4vLi4vLi4vdXRpbC9Db25zdCc7XG5pbXBvcnQgUkVBQ1QgZnJvbSAnLi4vLi4vLi4vdXRpbC9SRUFDVCc7XG5cbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIHtcbiAgZ2hvc3Q6IGZhbHNlLFxuICBodG1sVHlwZTogUkVBQ1QuVEFHLmJ1dHRvbixcbiAgbG9hZGluZzogZmFsc2UsXG4gIHNpemU6IFNJWkUuRGVmYXVsdCxcbn0sIEJ1dHRvbi5kZWZhdWx0UHJvcHMsIHt9KTtcblxuQnV0dG9uLnByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwge1xuICAvL2h0dHBzOi8vYW50LmRlc2lnbi9jb21wb25lbnRzL2J1dHRvbi1jbi8jQVBJXG4gIGdob3N0OiBQcm9wVHlwZXMuYm9vbCxcbiAgaHRtbFR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGljb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxvYWRpbmc6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5ib29sLFxuICAgIFByb3BUeXBlcy5vYmplY3RcbiAgXSksXG4gIHNoYXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzaXplOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgaHJlZjogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGFyZ2V0OiBQcm9wVHlwZXMuc3RyaW5nXG59LCBCdXR0b24ucHJvcFR5cGVzLCB7fSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNLQnV0dG9uIGV4dGVuZHMgQW50ZENvbXAge1xuICBzdGF0aWMgVFlQRSA9IHtcbiAgICBQcmltYXJ5OiAncHJpbWFyeScsXG4gICAgRGFzaGVkOiAnZGFzaGVkJyxcbiAgICBEYW5nZXI6ICdkYW5nZXInXG4gIH07XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLmRlZmF1bHRQcm9wcywgQnV0dG9uLmRlZmF1bHRQcm9wcywge1xuICAgIGNvbXBUYWc6IEJ1dHRvblxuICB9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAucHJvcFR5cGVzLCBCdXR0b24ucHJvcFR5cGVzLCB7fSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnU0tCdXR0b24nO1xuICB9XG59XG4iXX0=