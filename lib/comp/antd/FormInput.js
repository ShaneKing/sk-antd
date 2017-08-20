'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _skJs = require('sk-js');

var _skJs2 = _interopRequireDefault(_skJs);

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

    return _possibleConstructorReturn(this, (_ref = FormInput.__proto__ || Object.getPrototypeOf(FormInput)).call.apply(_ref, [this].concat(args)));
  }

  return FormInput;
}(_FormComp3.default);

FormInput.defaultProps = {
  compTag: _SKInput2.default
};
FormInput.propTypes = _skJs2.default.assign({}, _FormComp3.default.propTypes, _SKInput2.default.propTypes, {});
exports.default = FormInput;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9Gb3JtSW5wdXQuanMiXSwibmFtZXMiOlsiRm9ybUlucHV0IiwiYXJncyIsImRlZmF1bHRQcm9wcyIsImNvbXBUYWciLCJwcm9wVHlwZXMiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxTOzs7QUFNbkIsdUJBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLDRJQUNWQSxJQURVO0FBRXBCOzs7OztBQVJrQkQsUyxDQUNaRSxZLEdBQWU7QUFDcEJDO0FBRG9CLEM7QUFESEgsUyxDQUlaSSxTLEdBQVksZUFBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0QsU0FBdkIsRUFBa0Msa0JBQVFBLFNBQTFDLEVBQXFELEVBQXJELEM7a0JBSkFKLFMiLCJmaWxlIjoiY29tcC9hbnRkL0Zvcm1JbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTSyBmcm9tICdzay1qcyc7XG5pbXBvcnQgRm9ybUNvbXAgZnJvbSAnLi9Gb3JtQ29tcCc7XG5pbXBvcnQgU0tJbnB1dCBmcm9tICcuL1NLSW5wdXQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtSW5wdXQgZXh0ZW5kcyBGb3JtQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY29tcFRhZzogU0tJbnB1dFxuICB9O1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBGb3JtQ29tcC5wcm9wVHlwZXMsIFNLSW5wdXQucHJvcFR5cGVzLCB7fSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICB9XG59XG4iXX0=