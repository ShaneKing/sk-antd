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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9mb3JtLWNvbXAvU0tGb3JtSW5wdXQuanMiXSwibmFtZXMiOlsiU0tGb3JtSW5wdXQiLCJhcmdzIiwiY29tcE5hbWUiLCJkZWZhdWx0UHJvcHMiLCJhc3NpZ24iLCJjb21wVGFnIiwicHJvcFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFc7OztBQU1uQix5QkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEscUpBQ1ZBLElBRFU7O0FBRW5CLFVBQUtDLFFBQUwsR0FBZ0IsYUFBaEI7QUFGbUI7QUFHcEI7Ozs7O0FBVGtCRixXLENBQ1pHLFksR0FBZSxTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTRCxZQUF2QixFQUFxQyxrQkFBUUEsWUFBN0MsRUFBMkQ7QUFDL0VFO0FBRCtFLENBQTNELEM7QUFESEwsVyxDQUlaTSxTLEdBQVksU0FBR0YsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0UsU0FBdkIsRUFBa0Msa0JBQVFBLFNBQTFDLEVBQXFELEVBQXJELEM7a0JBSkFOLFciLCJmaWxlIjoiY29tcC9hbnRkL2Zvcm0tY29tcC9TS0Zvcm1JbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U0t9IGZyb20gJ3NrLWpzJztcbmltcG9ydCBGb3JtQ29tcCBmcm9tICcuL0Zvcm1Db21wJztcbmltcG9ydCBTS0lucHV0IGZyb20gJy4uL2lucHV0L1NLSW5wdXQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS0Zvcm1JbnB1dCBleHRlbmRzIEZvcm1Db21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwgRm9ybUNvbXAuZGVmYXVsdFByb3BzLCBTS0lucHV0LmRlZmF1bHRQcm9wcywge1xuICAgIGNvbXBUYWc6IFNLSW5wdXRcbiAgfSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIEZvcm1Db21wLnByb3BUeXBlcywgU0tJbnB1dC5wcm9wVHlwZXMsIHt9KTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5jb21wTmFtZSA9ICdTS0Zvcm1JbnB1dCc7XG4gIH1cbn1cbiJdfQ==