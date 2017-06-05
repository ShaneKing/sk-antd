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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FudGQvRm9ybURhdGVQaWNrZXIuanMiXSwibmFtZXMiOlsiRm9ybURhdGVQaWNrZXIiLCJhcmdzIiwiZGVmYXVsdFByb3BzIiwiY29tcFRhZyIsInByb3BUeXBlcyIsImFzc2lnbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLGM7OztBQU1uQiw0QkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsc0pBQ1ZBLElBRFU7QUFFcEI7Ozs7O0FBUmtCRCxjLENBQ1pFLFksR0FBZTtBQUNwQkM7QUFEb0IsQztBQURISCxjLENBSVpJLFMsR0FBWSxlQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTRCxTQUF2QixFQUFrQyx1QkFBYUEsU0FBL0MsRUFBMEQsRUFBMUQsQztrQkFKQUosYyIsImZpbGUiOiJjb21wcy9hbnRkL0Zvcm1EYXRlUGlja2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNLIGZyb20gJ3NrLWpzJztcbmltcG9ydCBGb3JtQ29tcCBmcm9tICcuL0Zvcm1Db21wJztcbmltcG9ydCBTS0RhdGVQaWNrZXIgZnJvbSAnLi9TS0RhdGVQaWNrZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtRGF0ZVBpY2tlciBleHRlbmRzIEZvcm1Db21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb21wVGFnOiBTS0RhdGVQaWNrZXJcbiAgfTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgRm9ybUNvbXAucHJvcFR5cGVzLCBTS0RhdGVQaWNrZXIucHJvcFR5cGVzLCB7fSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICB9XG59XG4iXX0=