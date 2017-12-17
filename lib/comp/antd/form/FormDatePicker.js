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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9mb3JtL0Zvcm1EYXRlUGlja2VyLmpzIl0sIm5hbWVzIjpbIkZvcm1EYXRlUGlja2VyIiwiYXJncyIsImNvbXBOYW1lIiwiZGVmYXVsdFByb3BzIiwiYXNzaWduIiwiY29tcFRhZyIsInByb3BUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxjOzs7QUFNbkIsNEJBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLDJKQUNWQSxJQURVOztBQUVuQixVQUFLQyxRQUFMLEdBQWdCLGdCQUFoQjtBQUZtQjtBQUdwQjs7Ozs7QUFUa0JGLGMsQ0FDWkcsWSxHQUFlLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNELFlBQXZCLEVBQXFDLHVCQUFhQSxZQUFsRCxFQUFnRTtBQUNwRkU7QUFEb0YsQ0FBaEUsQztBQURITCxjLENBSVpNLFMsR0FBWSxTQUFHRixNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTRSxTQUF2QixFQUFrQyx1QkFBYUEsU0FBL0MsRUFBMEQsRUFBMUQsQztrQkFKQU4sYyIsImZpbGUiOiJjb21wL2FudGQvZm9ybS9Gb3JtRGF0ZVBpY2tlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U0t9IGZyb20gJ3NrLWpzJztcbmltcG9ydCBGb3JtQ29tcCBmcm9tICcuL0Zvcm1Db21wJztcbmltcG9ydCBTS0RhdGVQaWNrZXIgZnJvbSAnLi4vZGF0ZS1waWNrZXIvU0tEYXRlUGlja2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybURhdGVQaWNrZXIgZXh0ZW5kcyBGb3JtQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIEZvcm1Db21wLmRlZmF1bHRQcm9wcywgU0tEYXRlUGlja2VyLmRlZmF1bHRQcm9wcywge1xuICAgIGNvbXBUYWc6IFNLRGF0ZVBpY2tlclxuICB9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgRm9ybUNvbXAucHJvcFR5cGVzLCBTS0RhdGVQaWNrZXIucHJvcFR5cGVzLCB7fSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnRm9ybURhdGVQaWNrZXInO1xuICB9XG59XG4iXX0=