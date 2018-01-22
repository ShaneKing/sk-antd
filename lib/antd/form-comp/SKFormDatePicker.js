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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGQvZm9ybS1jb21wL1NLRm9ybURhdGVQaWNrZXIuanMiXSwibmFtZXMiOlsiU0tGb3JtRGF0ZVBpY2tlciIsImFyZ3MiLCJjb21wTmFtZSIsImRlZmF1bHRQcm9wcyIsImFzc2lnbiIsImNvbXBUYWciLCJwcm9wVHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsZ0I7OztBQU1uQiw4QkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsK0pBQ1ZBLElBRFU7O0FBRW5CLFVBQUtDLFFBQUwsR0FBZ0Isa0JBQWhCO0FBRm1CO0FBR3BCOzs7OztBQVRrQkYsZ0IsQ0FDWkcsWSxHQUFlLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNELFlBQXZCLEVBQXFDLHVCQUFhQSxZQUFsRCxFQUFnRTtBQUNwRkU7QUFEb0YsQ0FBaEUsQztBQURITCxnQixDQUlaTSxTLEdBQVksU0FBR0YsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0UsU0FBdkIsRUFBa0MsdUJBQWFBLFNBQS9DLEVBQTBELEVBQTFELEM7a0JBSkFOLGdCIiwiZmlsZSI6ImFudGQvZm9ybS1jb21wL1NLRm9ybURhdGVQaWNrZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NLfSBmcm9tICdzay1qcyc7XG5pbXBvcnQgRm9ybUNvbXAgZnJvbSAnLi9Gb3JtQ29tcCc7XG5pbXBvcnQgU0tEYXRlUGlja2VyIGZyb20gJy4uL2RhdGUtcGlja2VyL1NLRGF0ZVBpY2tlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNLRm9ybURhdGVQaWNrZXIgZXh0ZW5kcyBGb3JtQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIEZvcm1Db21wLmRlZmF1bHRQcm9wcywgU0tEYXRlUGlja2VyLmRlZmF1bHRQcm9wcywge1xuICAgIGNvbXBUYWc6IFNLRGF0ZVBpY2tlclxuICB9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgRm9ybUNvbXAucHJvcFR5cGVzLCBTS0RhdGVQaWNrZXIucHJvcFR5cGVzLCB7fSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnU0tGb3JtRGF0ZVBpY2tlcic7XG4gIH1cbn1cbiJdfQ==