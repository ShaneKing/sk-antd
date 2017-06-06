'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style2 = require('antd/lib/layout/style');

var _layout = require('antd/lib/layout');

var _layout2 = _interopRequireDefault(_layout);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _skJs2 = _interopRequireDefault(_skJs);

var _Comp2 = require('../../utils/Comp');

var _Comp3 = _interopRequireDefault(_Comp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_layout2.default.Sider.propTypes = _skJs2.default.assign({}, _layout2.default.Sider.propTypes, {
  collapsed: _react2.default.PropTypes.bool,
  collapsedWidth: _react2.default.PropTypes.number,
  collapsible: _react2.default.PropTypes.bool,
  onCollapse: _react2.default.PropTypes.func,
  trigger: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.node]),
  width: _react2.default.PropTypes.number
}, {});

var SKSider = function (_Comp) {
  _inherits(SKSider, _Comp);

  function SKSider() {
    var _ref;

    _classCallCheck(this, SKSider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(this, (_ref = SKSider.__proto__ || Object.getPrototypeOf(SKSider)).call.apply(_ref, [this].concat(args)));
  }

  return SKSider;
}(_Comp3.default);

SKSider.defaultProps = {
  compTag: _layout2.default.Sider
};
SKSider.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _layout2.default.Sider.propTypes, {});
exports.default = SKSider;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FudGQvU0tTaWRlci5qcyJdLCJuYW1lcyI6WyJTaWRlciIsInByb3BUeXBlcyIsImFzc2lnbiIsImNvbGxhcHNlZCIsIlByb3BUeXBlcyIsImJvb2wiLCJjb2xsYXBzZWRXaWR0aCIsIm51bWJlciIsImNvbGxhcHNpYmxlIiwib25Db2xsYXBzZSIsImZ1bmMiLCJ0cmlnZ2VyIiwib25lT2ZUeXBlIiwic3RyaW5nIiwibm9kZSIsIndpZHRoIiwiU0tTaWRlciIsImFyZ3MiLCJkZWZhdWx0UHJvcHMiLCJjb21wVGFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLGlCQUFPQSxLQUFQLENBQWFDLFNBQWIsR0FBeUIsZUFBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxpQkFBT0YsS0FBUCxDQUFhQyxTQUEzQixFQUFzQztBQUM3REUsYUFBVyxnQkFBTUMsU0FBTixDQUFnQkMsSUFEa0M7QUFFN0RDLGtCQUFnQixnQkFBTUYsU0FBTixDQUFnQkcsTUFGNkI7QUFHN0RDLGVBQWEsZ0JBQU1KLFNBQU4sQ0FBZ0JDLElBSGdDO0FBSTdESSxjQUFZLGdCQUFNTCxTQUFOLENBQWdCTSxJQUppQztBQUs3REMsV0FBUyxnQkFBTVAsU0FBTixDQUFnQlEsU0FBaEIsQ0FBMEIsQ0FDakMsZ0JBQU1SLFNBQU4sQ0FBZ0JTLE1BRGlCLEVBRWpDLGdCQUFNVCxTQUFOLENBQWdCVSxJQUZpQixDQUExQixDQUxvRDtBQVM3REMsU0FBTyxnQkFBTVgsU0FBTixDQUFnQkc7QUFUc0MsQ0FBdEMsRUFVdEIsRUFWc0IsQ0FBekI7O0lBWXFCUyxPOzs7QUFNbkIscUJBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLHdJQUNWQSxJQURVO0FBRXBCOzs7OztBQVJrQkQsTyxDQUNaRSxZLEdBQWU7QUFDcEJDLFdBQVMsaUJBQU9uQjtBQURJLEM7QUFESGdCLE8sQ0FJWmYsUyxHQUFZLGVBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsZUFBS0QsU0FBbkIsRUFBOEIsaUJBQU9ELEtBQVAsQ0FBYUMsU0FBM0MsRUFBc0QsRUFBdEQsQztrQkFKQWUsTyIsImZpbGUiOiJjb21wcy9hbnRkL1NLU2lkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xheW91dH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNLIGZyb20gJ3NrLWpzJztcbmltcG9ydCBDb21wIGZyb20gJy4uLy4uL3V0aWxzL0NvbXAnO1xuXG5MYXlvdXQuU2lkZXIucHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBMYXlvdXQuU2lkZXIucHJvcFR5cGVzLCB7XG4gIGNvbGxhcHNlZDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIGNvbGxhcHNlZFdpZHRoOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICBjb2xsYXBzaWJsZTogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIG9uQ29sbGFwc2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICB0cmlnZ2VyOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIFJlYWN0LlByb3BUeXBlcy5ub2RlXG4gIF0pLFxuICB3aWR0aDogUmVhY3QuUHJvcFR5cGVzLm51bWJlclxufSwge30pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS1NpZGVyIGV4dGVuZHMgQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY29tcFRhZzogTGF5b3V0LlNpZGVyXG4gIH07XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIENvbXAucHJvcFR5cGVzLCBMYXlvdXQuU2lkZXIucHJvcFR5cGVzLCB7fSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICB9XG59XG4iXX0=