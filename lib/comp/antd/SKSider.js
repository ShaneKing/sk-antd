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

var _Comp2 = require('../../util/Comp');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9TS1NpZGVyLmpzIl0sIm5hbWVzIjpbIlNpZGVyIiwicHJvcFR5cGVzIiwiYXNzaWduIiwiY29sbGFwc2VkIiwiUHJvcFR5cGVzIiwiYm9vbCIsImNvbGxhcHNlZFdpZHRoIiwibnVtYmVyIiwiY29sbGFwc2libGUiLCJvbkNvbGxhcHNlIiwiZnVuYyIsInRyaWdnZXIiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJub2RlIiwid2lkdGgiLCJTS1NpZGVyIiwiYXJncyIsImRlZmF1bHRQcm9wcyIsImNvbXBUYWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsaUJBQU9BLEtBQVAsQ0FBYUMsU0FBYixHQUF5QixlQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLGlCQUFPRixLQUFQLENBQWFDLFNBQTNCLEVBQXNDO0FBQzdERSxhQUFXLGdCQUFNQyxTQUFOLENBQWdCQyxJQURrQztBQUU3REMsa0JBQWdCLGdCQUFNRixTQUFOLENBQWdCRyxNQUY2QjtBQUc3REMsZUFBYSxnQkFBTUosU0FBTixDQUFnQkMsSUFIZ0M7QUFJN0RJLGNBQVksZ0JBQU1MLFNBQU4sQ0FBZ0JNLElBSmlDO0FBSzdEQyxXQUFTLGdCQUFNUCxTQUFOLENBQWdCUSxTQUFoQixDQUEwQixDQUNqQyxnQkFBTVIsU0FBTixDQUFnQlMsTUFEaUIsRUFFakMsZ0JBQU1ULFNBQU4sQ0FBZ0JVLElBRmlCLENBQTFCLENBTG9EO0FBUzdEQyxTQUFPLGdCQUFNWCxTQUFOLENBQWdCRztBQVRzQyxDQUF0QyxFQVV0QixFQVZzQixDQUF6Qjs7SUFZcUJTLE87OztBQU1uQixxQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsd0lBQ1ZBLElBRFU7QUFFcEI7Ozs7O0FBUmtCRCxPLENBQ1pFLFksR0FBZTtBQUNwQkMsV0FBUyxpQkFBT25CO0FBREksQztBQURIZ0IsTyxDQUlaZixTLEdBQVksZUFBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxlQUFLRCxTQUFuQixFQUE4QixpQkFBT0QsS0FBUCxDQUFhQyxTQUEzQyxFQUFzRCxFQUF0RCxDO2tCQUpBZSxPIiwiZmlsZSI6ImNvbXAvYW50ZC9TS1NpZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtMYXlvdXR9IGZyb20gJ2FudGQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTSyBmcm9tICdzay1qcyc7XG5pbXBvcnQgQ29tcCBmcm9tICcuLi8uLi91dGlsL0NvbXAnO1xuXG5MYXlvdXQuU2lkZXIucHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBMYXlvdXQuU2lkZXIucHJvcFR5cGVzLCB7XG4gIGNvbGxhcHNlZDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIGNvbGxhcHNlZFdpZHRoOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICBjb2xsYXBzaWJsZTogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIG9uQ29sbGFwc2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICB0cmlnZ2VyOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIFJlYWN0LlByb3BUeXBlcy5ub2RlXG4gIF0pLFxuICB3aWR0aDogUmVhY3QuUHJvcFR5cGVzLm51bWJlclxufSwge30pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS1NpZGVyIGV4dGVuZHMgQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY29tcFRhZzogTGF5b3V0LlNpZGVyXG4gIH07XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIENvbXAucHJvcFR5cGVzLCBMYXlvdXQuU2lkZXIucHJvcFR5cGVzLCB7fSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICB9XG59XG4iXX0=