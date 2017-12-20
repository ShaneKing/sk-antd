'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _skJs = require('sk-js');

var _FormComp2 = require('./FormComp');

var _FormComp3 = _interopRequireDefault(_FormComp2);

var _SKDatePicker = require('../date-picker/SKDatePicker');

var _SKDatePicker2 = _interopRequireDefault(_SKDatePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SKFormDatePicker = function (_FormComp) {
  _inherits(SKFormDatePicker, _FormComp);

  function SKFormDatePicker() {
    var _ref;

    _classCallCheck(this, SKFormDatePicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SKFormDatePicker.__proto__ || Object.getPrototypeOf(SKFormDatePicker)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'SKFormDatePicker';
    return _this;
  }

  return SKFormDatePicker;
}(_FormComp3.default);

SKFormDatePicker.defaultProps = _skJs.SK.assign({}, _FormComp3.default.defaultProps, _SKDatePicker2.default.defaultProps, {
  compTag: _SKDatePicker2.default
});
SKFormDatePicker.propTypes = _skJs.SK.assign({}, _FormComp3.default.propTypes, _SKDatePicker2.default.propTypes, {});
exports.default = SKFormDatePicker;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9mb3JtLWNvbXAvU0tGb3JtRGF0ZVBpY2tlci5qcyJdLCJuYW1lcyI6WyJTS0Zvcm1EYXRlUGlja2VyIiwiYXJncyIsImNvbXBOYW1lIiwiZGVmYXVsdFByb3BzIiwiYXNzaWduIiwiY29tcFRhZyIsInByb3BUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxnQjs7O0FBTW5CLDhCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSwrSkFDVkEsSUFEVTs7QUFFbkIsVUFBS0MsUUFBTCxHQUFnQixrQkFBaEI7QUFGbUI7QUFHcEI7Ozs7O0FBVGtCRixnQixDQUNaRyxZLEdBQWUsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0QsWUFBdkIsRUFBcUMsdUJBQWFBLFlBQWxELEVBQWdFO0FBQ3BGRTtBQURvRixDQUFoRSxDO0FBREhMLGdCLENBSVpNLFMsR0FBWSxTQUFHRixNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTRSxTQUF2QixFQUFrQyx1QkFBYUEsU0FBL0MsRUFBMEQsRUFBMUQsQztrQkFKQU4sZ0IiLCJmaWxlIjoiY29tcC9hbnRkL2Zvcm0tY29tcC9TS0Zvcm1EYXRlUGlja2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTS30gZnJvbSAnc2stanMnO1xuaW1wb3J0IEZvcm1Db21wIGZyb20gJy4vRm9ybUNvbXAnO1xuaW1wb3J0IFNLRGF0ZVBpY2tlciBmcm9tICcuLi9kYXRlLXBpY2tlci9TS0RhdGVQaWNrZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS0Zvcm1EYXRlUGlja2VyIGV4dGVuZHMgRm9ybUNvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCBGb3JtQ29tcC5kZWZhdWx0UHJvcHMsIFNLRGF0ZVBpY2tlci5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBTS0RhdGVQaWNrZXJcbiAgfSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIEZvcm1Db21wLnByb3BUeXBlcywgU0tEYXRlUGlja2VyLnByb3BUeXBlcywge30pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLmNvbXBOYW1lID0gJ1NLRm9ybURhdGVQaWNrZXInO1xuICB9XG59XG4iXX0=