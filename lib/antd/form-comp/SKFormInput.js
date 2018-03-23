'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _skJs = require('sk-js');

var _FormComp2 = require('./FormComp');

var _FormComp3 = _interopRequireDefault(_FormComp2);

var _SKInput = require('../input/SKInput');

var _SKInput2 = _interopRequireDefault(_SKInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SKFormInput = function (_FormComp) {
  _inherits(SKFormInput, _FormComp);

  function SKFormInput() {
    var _ref;

    _classCallCheck(this, SKFormInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SKFormInput.__proto__ || Object.getPrototypeOf(SKFormInput)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'SKFormInput';
    return _this;
  }

  return SKFormInput;
}(_FormComp3.default);

SKFormInput.defaultProps = _skJs.SK.assign({}, _FormComp3.default.defaultProps, _SKInput2.default.defaultProps, {
  compTag: _SKInput2.default
});
SKFormInput.propTypes = _skJs.SK.assign({}, _FormComp3.default.propTypes, _SKInput2.default.propTypes, {});
exports.default = SKFormInput;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGQvZm9ybS1jb21wL1NLRm9ybUlucHV0LmpzIl0sIm5hbWVzIjpbIlNLRm9ybUlucHV0IiwiYXJncyIsImNvbXBOYW1lIiwiZGVmYXVsdFByb3BzIiwiYXNzaWduIiwiY29tcFRhZyIsInByb3BUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxXOzs7QUFNbkIseUJBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLHFKQUNWQSxJQURVOztBQUVuQixVQUFLQyxRQUFMLEdBQWdCLGFBQWhCO0FBRm1CO0FBR3BCOzs7OztBQVRrQkYsVyxDQUNaRyxZLEdBQWUsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0QsWUFBdkIsRUFBcUMsa0JBQVFBLFlBQTdDLEVBQTJEO0FBQy9FRTtBQUQrRSxDQUEzRCxDO0FBREhMLFcsQ0FJWk0sUyxHQUFZLFNBQUdGLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNFLFNBQXZCLEVBQWtDLGtCQUFRQSxTQUExQyxFQUFxRCxFQUFyRCxDO2tCQUpBTixXIiwiZmlsZSI6ImFudGQvZm9ybS1jb21wL1NLRm9ybUlucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU0sgfSBmcm9tICdzay1qcyc7XG5pbXBvcnQgRm9ybUNvbXAgZnJvbSAnLi9Gb3JtQ29tcCc7XG5pbXBvcnQgU0tJbnB1dCBmcm9tICcuLi9pbnB1dC9TS0lucHV0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tGb3JtSW5wdXQgZXh0ZW5kcyBGb3JtQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIEZvcm1Db21wLmRlZmF1bHRQcm9wcywgU0tJbnB1dC5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBTS0lucHV0LFxuICB9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgRm9ybUNvbXAucHJvcFR5cGVzLCBTS0lucHV0LnByb3BUeXBlcywge30pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLmNvbXBOYW1lID0gJ1NLRm9ybUlucHV0JztcbiAgfVxufVxuIl19