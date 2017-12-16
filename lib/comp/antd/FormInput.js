'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _skJs = require('sk-js');

var _FormComp2 = require('./FormComp');

var _FormComp3 = _interopRequireDefault(_FormComp2);

var _SKInput = require('./SKInput');

var _SKInput2 = _interopRequireDefault(_SKInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormInput = function (_FormComp) {
  _inherits(FormInput, _FormComp);

  function FormInput() {
    var _ref;

    _classCallCheck(this, FormInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = FormInput.__proto__ || Object.getPrototypeOf(FormInput)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'FormInput';
    return _this;
  }

  return FormInput;
}(_FormComp3.default);

FormInput.defaultProps = _skJs.SK.assign({}, _FormComp3.default.defaultProps, _SKInput2.default.defaultProps, {
  compTag: _SKInput2.default
});
FormInput.propTypes = _skJs.SK.assign({}, _FormComp3.default.propTypes, _SKInput2.default.propTypes, {});
exports.default = FormInput;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9Gb3JtSW5wdXQuanMiXSwibmFtZXMiOlsiRm9ybUlucHV0IiwiYXJncyIsImNvbXBOYW1lIiwiZGVmYXVsdFByb3BzIiwiYXNzaWduIiwiY29tcFRhZyIsInByb3BUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxTOzs7QUFNbkIsdUJBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLGlKQUNWQSxJQURVOztBQUVuQixVQUFLQyxRQUFMLEdBQWdCLFdBQWhCO0FBRm1CO0FBR3BCOzs7OztBQVRrQkYsUyxDQUNaRyxZLEdBQWUsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0QsWUFBdkIsRUFBcUMsa0JBQVFBLFlBQTdDLEVBQTJEO0FBQy9FRTtBQUQrRSxDQUEzRCxDO0FBREhMLFMsQ0FJWk0sUyxHQUFZLFNBQUdGLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNFLFNBQXZCLEVBQWtDLGtCQUFRQSxTQUExQyxFQUFxRCxFQUFyRCxDO2tCQUpBTixTIiwiZmlsZSI6ImNvbXAvYW50ZC9Gb3JtSW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NLfSBmcm9tICdzay1qcyc7XG5pbXBvcnQgRm9ybUNvbXAgZnJvbSAnLi9Gb3JtQ29tcCc7XG5pbXBvcnQgU0tJbnB1dCBmcm9tICcuL1NLSW5wdXQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtSW5wdXQgZXh0ZW5kcyBGb3JtQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIEZvcm1Db21wLmRlZmF1bHRQcm9wcywgU0tJbnB1dC5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBTS0lucHV0XG4gIH0pO1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBGb3JtQ29tcC5wcm9wVHlwZXMsIFNLSW5wdXQucHJvcFR5cGVzLCB7fSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnRm9ybUlucHV0JztcbiAgfVxufVxuIl19