'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _skJs = require('sk-js');

var _skJs2 = _interopRequireDefault(_skJs);

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

    return _possibleConstructorReturn(this, (_ref = FormDatePicker.__proto__ || Object.getPrototypeOf(FormDatePicker)).call.apply(_ref, [this].concat(args)));
  }

  return FormDatePicker;
}(_FormComp3.default);

FormDatePicker.defaultProps = {
  compTag: _SKDatePicker2.default
};
FormDatePicker.propTypes = _skJs2.default.assign({}, _FormComp3.default.propTypes, _SKDatePicker2.default.propTypes, {});
exports.default = FormDatePicker;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9Gb3JtRGF0ZVBpY2tlci5qcyJdLCJuYW1lcyI6WyJGb3JtRGF0ZVBpY2tlciIsImFyZ3MiLCJkZWZhdWx0UHJvcHMiLCJjb21wVGFnIiwicHJvcFR5cGVzIiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsYzs7O0FBTW5CLDRCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSxzSkFDVkEsSUFEVTtBQUVwQjs7Ozs7QUFSa0JELGMsQ0FDWkUsWSxHQUFlO0FBQ3BCQztBQURvQixDO0FBREhILGMsQ0FJWkksUyxHQUFZLGVBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNELFNBQXZCLEVBQWtDLHVCQUFhQSxTQUEvQyxFQUEwRCxFQUExRCxDO2tCQUpBSixjIiwiZmlsZSI6ImNvbXAvYW50ZC9Gb3JtRGF0ZVBpY2tlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTSyBmcm9tICdzay1qcyc7XG5pbXBvcnQgRm9ybUNvbXAgZnJvbSAnLi9Gb3JtQ29tcCc7XG5pbXBvcnQgU0tEYXRlUGlja2VyIGZyb20gJy4vU0tEYXRlUGlja2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybURhdGVQaWNrZXIgZXh0ZW5kcyBGb3JtQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY29tcFRhZzogU0tEYXRlUGlja2VyXG4gIH07XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIEZvcm1Db21wLnByb3BUeXBlcywgU0tEYXRlUGlja2VyLnByb3BUeXBlcywge30pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgfVxufVxuIl19