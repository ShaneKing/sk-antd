'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _layout = require('antd/lib/layout');

var _layout2 = _interopRequireDefault(_layout);

require('antd/lib/layout/style');

var _skJs = require('sk-js');

var _AntdComp2 = require('../AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

var _OriginLayout = require('./OriginLayout');

var _OriginLayout2 = _interopRequireDefault(_OriginLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_layout2.default.Header.defaultProps = _skJs.SK.assign({}, {}, _OriginLayout2.default.defaultProps, _layout2.default.Header.defaultProps, {});
_layout2.default.Header.propTypes = _skJs.SK.assign({}, {}, _OriginLayout2.default.propTypes, _layout2.default.Header.propTypes, {});

var SKHeader = function (_AntdComp) {
  _inherits(SKHeader, _AntdComp);

  function SKHeader() {
    var _ref;

    _classCallCheck(this, SKHeader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SKHeader.__proto__ || Object.getPrototypeOf(SKHeader)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'SKHeader';
    return _this;
  }

  return SKHeader;
}(_AntdComp3.default);

SKHeader.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, _layout2.default.Header.defaultProps, {
  compTag: _layout2.default.Header
});
SKHeader.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _layout2.default.Header.propTypes, {});
exports.default = SKHeader;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGQvbGF5b3V0L1NLSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsImRlZmF1bHRQcm9wcyIsImFzc2lnbiIsInByb3BUeXBlcyIsIlNLSGVhZGVyIiwiYXJncyIsImNvbXBOYW1lIiwiY29tcFRhZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsaUJBQU9BLE1BQVAsQ0FBY0MsWUFBZCxHQUE2QixTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLEVBQWQsRUFBa0IsdUJBQWFELFlBQS9CLEVBQTZDLGlCQUFPRCxNQUFQLENBQWNDLFlBQTNELEVBQXlFLEVBQXpFLENBQTdCO0FBQ0EsaUJBQU9ELE1BQVAsQ0FBY0csU0FBZCxHQUEwQixTQUFHRCxNQUFILENBQVUsRUFBVixFQUFjLEVBQWQsRUFBa0IsdUJBQWFDLFNBQS9CLEVBQTBDLGlCQUFPSCxNQUFQLENBQWNHLFNBQXhELEVBQW1FLEVBQW5FLENBQTFCOztJQUVxQkMsUTs7O0FBTW5CLHNCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSwrSUFDVkEsSUFEVTs7QUFFbkIsVUFBS0MsUUFBTCxHQUFnQixVQUFoQjtBQUZtQjtBQUdwQjs7Ozs7QUFUa0JGLFEsQ0FDWkgsWSxHQUFlLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNELFlBQXZCLEVBQXFDLGlCQUFPRCxNQUFQLENBQWNDLFlBQW5ELEVBQWlFO0FBQ3JGTSxXQUFTLGlCQUFPUDtBQURxRSxDQUFqRSxDO0FBREhJLFEsQ0FJWkQsUyxHQUFZLFNBQUdELE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNDLFNBQXZCLEVBQWtDLGlCQUFPSCxNQUFQLENBQWNHLFNBQWhELEVBQTJELEVBQTNELEM7a0JBSkFDLFEiLCJmaWxlIjoiYW50ZC9sYXlvdXQvU0tIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xheW91dH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQge1NLfSBmcm9tICdzay1qcyc7XG5pbXBvcnQgQW50ZENvbXAgZnJvbSAnLi4vQW50ZENvbXAnO1xuaW1wb3J0IE9yaWdpbkxheW91dCBmcm9tICcuL09yaWdpbkxheW91dCc7XG5cbkxheW91dC5IZWFkZXIuZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCB7fSwgT3JpZ2luTGF5b3V0LmRlZmF1bHRQcm9wcywgTGF5b3V0LkhlYWRlci5kZWZhdWx0UHJvcHMsIHt9KTtcbkxheW91dC5IZWFkZXIucHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCB7fSwgT3JpZ2luTGF5b3V0LnByb3BUeXBlcywgTGF5b3V0LkhlYWRlci5wcm9wVHlwZXMsIHt9KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tIZWFkZXIgZXh0ZW5kcyBBbnRkQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLmRlZmF1bHRQcm9wcywgTGF5b3V0LkhlYWRlci5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBMYXlvdXQuSGVhZGVyXG4gIH0pO1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5wcm9wVHlwZXMsIExheW91dC5IZWFkZXIucHJvcFR5cGVzLCB7fSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnU0tIZWFkZXInO1xuICB9XG59XG4iXX0=