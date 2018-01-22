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

_layout2.default.Content.defaultProps = _skJs.SK.assign({}, {}, _OriginLayout2.default.defaultProps, _layout2.default.Content.defaultProps, {});
_layout2.default.Content.propTypes = _skJs.SK.assign({}, {}, _OriginLayout2.default.propTypes, _layout2.default.Content.propTypes, {});

var SKContent = function (_AntdComp) {
  _inherits(SKContent, _AntdComp);

  function SKContent() {
    var _ref;

    _classCallCheck(this, SKContent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SKContent.__proto__ || Object.getPrototypeOf(SKContent)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'SKContent';
    return _this;
  }

  return SKContent;
}(_AntdComp3.default);

SKContent.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, _layout2.default.Content.defaultProps, {
  compTag: _layout2.default.Content
});
SKContent.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _layout2.default.Content.propTypes, {});
exports.default = SKContent;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGQvbGF5b3V0L1NLQ29udGVudC5qcyJdLCJuYW1lcyI6WyJDb250ZW50IiwiZGVmYXVsdFByb3BzIiwiYXNzaWduIiwicHJvcFR5cGVzIiwiU0tDb250ZW50IiwiYXJncyIsImNvbXBOYW1lIiwiY29tcFRhZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsaUJBQU9BLE9BQVAsQ0FBZUMsWUFBZixHQUE4QixTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLEVBQWQsRUFBa0IsdUJBQWFELFlBQS9CLEVBQTZDLGlCQUFPRCxPQUFQLENBQWVDLFlBQTVELEVBQTBFLEVBQTFFLENBQTlCO0FBQ0EsaUJBQU9ELE9BQVAsQ0FBZUcsU0FBZixHQUEyQixTQUFHRCxNQUFILENBQVUsRUFBVixFQUFjLEVBQWQsRUFBa0IsdUJBQWFDLFNBQS9CLEVBQTBDLGlCQUFPSCxPQUFQLENBQWVHLFNBQXpELEVBQW9FLEVBQXBFLENBQTNCOztJQUVxQkMsUzs7O0FBTW5CLHVCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSxpSkFDVkEsSUFEVTs7QUFFbkIsVUFBS0MsUUFBTCxHQUFnQixXQUFoQjtBQUZtQjtBQUdwQjs7Ozs7QUFUa0JGLFMsQ0FDWkgsWSxHQUFlLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNELFlBQXZCLEVBQXFDLGlCQUFPRCxPQUFQLENBQWVDLFlBQXBELEVBQWtFO0FBQ3RGTSxXQUFTLGlCQUFPUDtBQURzRSxDQUFsRSxDO0FBREhJLFMsQ0FJWkQsUyxHQUFZLFNBQUdELE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNDLFNBQXZCLEVBQWtDLGlCQUFPSCxPQUFQLENBQWVHLFNBQWpELEVBQTRELEVBQTVELEM7a0JBSkFDLFMiLCJmaWxlIjoiYW50ZC9sYXlvdXQvU0tDb250ZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtMYXlvdXR9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHtTS30gZnJvbSAnc2stanMnO1xuaW1wb3J0IEFudGRDb21wIGZyb20gJy4uL0FudGRDb21wJztcbmltcG9ydCBPcmlnaW5MYXlvdXQgZnJvbSAnLi9PcmlnaW5MYXlvdXQnO1xuXG5MYXlvdXQuQ29udGVudC5kZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIHt9LCBPcmlnaW5MYXlvdXQuZGVmYXVsdFByb3BzLCBMYXlvdXQuQ29udGVudC5kZWZhdWx0UHJvcHMsIHt9KTtcbkxheW91dC5Db250ZW50LnByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwge30sIE9yaWdpbkxheW91dC5wcm9wVHlwZXMsIExheW91dC5Db250ZW50LnByb3BUeXBlcywge30pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS0NvbnRlbnQgZXh0ZW5kcyBBbnRkQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLmRlZmF1bHRQcm9wcywgTGF5b3V0LkNvbnRlbnQuZGVmYXVsdFByb3BzLCB7XG4gICAgY29tcFRhZzogTGF5b3V0LkNvbnRlbnRcbiAgfSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLnByb3BUeXBlcywgTGF5b3V0LkNvbnRlbnQucHJvcFR5cGVzLCB7fSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnU0tDb250ZW50JztcbiAgfVxufVxuIl19