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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FudGQvRm9ybUlucHV0LmpzIl0sIm5hbWVzIjpbIkZvcm1JbnB1dCIsImFyZ3MiLCJkZWZhdWx0UHJvcHMiLCJjb21wVGFnIiwicHJvcFR5cGVzIiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUzs7O0FBTW5CLHVCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSw0SUFDVkEsSUFEVTtBQUVwQjs7Ozs7QUFSa0JELFMsQ0FDWkUsWSxHQUFlO0FBQ3BCQztBQURvQixDO0FBREhILFMsQ0FJWkksUyxHQUFZLGVBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNELFNBQXZCLEVBQWtDLGtCQUFRQSxTQUExQyxFQUFxRCxFQUFyRCxDO2tCQUpBSixTIiwiZmlsZSI6ImNvbXBzL2FudGQvRm9ybUlucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNLIGZyb20gJ3NrLWpzJztcbmltcG9ydCBGb3JtQ29tcCBmcm9tICcuL0Zvcm1Db21wJztcbmltcG9ydCBTS0lucHV0IGZyb20gJy4vU0tJbnB1dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1JbnB1dCBleHRlbmRzIEZvcm1Db21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb21wVGFnOiBTS0lucHV0XG4gIH07XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIEZvcm1Db21wLnByb3BUeXBlcywgU0tJbnB1dC5wcm9wVHlwZXMsIHt9KTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gIH1cbn1cbiJdfQ==