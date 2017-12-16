'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _skJs = require('sk-js');

var _FormComp2 = require('./FormComp');

var _FormComp3 = _interopRequireDefault(_FormComp2);

var _SKDatePicker = require('./SKDatePicker');

var _SKDatePicker2 = _interopRequireDefault(_SKDatePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormDatePicker = function (_FormComp) {
  _inherits(FormDatePicker, _FormComp);

  function FormDatePicker() {
    var _ref;

    _classCallCheck(this, FormDatePicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = FormDatePicker.__proto__ || Object.getPrototypeOf(FormDatePicker)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'FormDatePicker';
    return _this;
  }

  return FormDatePicker;
}(_FormComp3.default);

FormDatePicker.defaultProps = _skJs.SK.assign({}, _FormComp3.default.defaultProps, _SKDatePicker2.default.defaultProps, {
  compTag: _SKDatePicker2.default
});
FormDatePicker.propTypes = _skJs.SK.assign({}, _FormComp3.default.propTypes, _SKDatePicker2.default.propTypes, {});
exports.default = FormDatePicker;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9Gb3JtRGF0ZVBpY2tlci5qcyJdLCJuYW1lcyI6WyJGb3JtRGF0ZVBpY2tlciIsImFyZ3MiLCJjb21wTmFtZSIsImRlZmF1bHRQcm9wcyIsImFzc2lnbiIsImNvbXBUYWciLCJwcm9wVHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsYzs7O0FBTW5CLDRCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSwySkFDVkEsSUFEVTs7QUFFbkIsVUFBS0MsUUFBTCxHQUFnQixnQkFBaEI7QUFGbUI7QUFHcEI7Ozs7O0FBVGtCRixjLENBQ1pHLFksR0FBZSxTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTRCxZQUF2QixFQUFxQyx1QkFBYUEsWUFBbEQsRUFBZ0U7QUFDcEZFO0FBRG9GLENBQWhFLEM7QUFESEwsYyxDQUlaTSxTLEdBQVksU0FBR0YsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0UsU0FBdkIsRUFBa0MsdUJBQWFBLFNBQS9DLEVBQTBELEVBQTFELEM7a0JBSkFOLGMiLCJmaWxlIjoiY29tcC9hbnRkL0Zvcm1EYXRlUGlja2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTS30gZnJvbSAnc2stanMnO1xuaW1wb3J0IEZvcm1Db21wIGZyb20gJy4vRm9ybUNvbXAnO1xuaW1wb3J0IFNLRGF0ZVBpY2tlciBmcm9tICcuL1NLRGF0ZVBpY2tlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1EYXRlUGlja2VyIGV4dGVuZHMgRm9ybUNvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCBGb3JtQ29tcC5kZWZhdWx0UHJvcHMsIFNLRGF0ZVBpY2tlci5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBTS0RhdGVQaWNrZXJcbiAgfSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIEZvcm1Db21wLnByb3BUeXBlcywgU0tEYXRlUGlja2VyLnByb3BUeXBlcywge30pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLmNvbXBOYW1lID0gJ0Zvcm1EYXRlUGlja2VyJztcbiAgfVxufVxuIl19