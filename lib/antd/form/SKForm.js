'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

require('antd/lib/form/style');

var _skJs = require('sk-js');

var _OriginForm = require('./OriginForm');

var _OriginForm2 = _interopRequireDefault(_OriginForm);

var _AntdComp2 = require('../AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//origin exist, use origin
var SKForm = function (_AntdComp) {
  _inherits(SKForm, _AntdComp);

  function SKForm() {
    var _ref;

    _classCallCheck(this, SKForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SKForm.__proto__ || Object.getPrototypeOf(SKForm)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'SKForm';
    return _this;
  }

  return SKForm;
}(_AntdComp3.default);

SKForm.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, _OriginForm2.default.defaultProps, {
  compTag: _form2.default
});
SKForm.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _OriginForm2.default.propTypes, {});
exports.default = SKForm;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGQvZm9ybS9TS0Zvcm0uanMiXSwibmFtZXMiOlsiU0tGb3JtIiwiYXJncyIsImNvbXBOYW1lIiwiZGVmYXVsdFByb3BzIiwiYXNzaWduIiwiY29tcFRhZyIsInByb3BUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7SUFDcUJBLE07OztBQU1uQixvQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsMklBQ1ZBLElBRFU7O0FBRW5CLFVBQUtDLFFBQUwsR0FBZ0IsUUFBaEI7QUFGbUI7QUFHcEI7Ozs7O0FBVGtCRixNLENBQ1pHLFksR0FBZSxTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTRCxZQUF2QixFQUFxQyxxQkFBV0EsWUFBaEQsRUFBOEQ7QUFDbEZFO0FBRGtGLENBQTlELEM7QUFESEwsTSxDQUlaTSxTLEdBQVksU0FBR0YsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0UsU0FBdkIsRUFBa0MscUJBQVdBLFNBQTdDLEVBQXdELEVBQXhELEM7a0JBSkFOLE0iLCJmaWxlIjoiYW50ZC9mb3JtL1NLRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Rm9ybX0gZnJvbSAnYW50ZCc7XG5pbXBvcnQge1NLfSBmcm9tICdzay1qcyc7XG5pbXBvcnQgT3JpZ2luRm9ybSBmcm9tICcuL09yaWdpbkZvcm0nO1xuaW1wb3J0IEFudGRDb21wIGZyb20gJy4uL0FudGRDb21wJztcblxuLy9vcmlnaW4gZXhpc3QsIHVzZSBvcmlnaW5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNLRm9ybSBleHRlbmRzIEFudGRDb21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAuZGVmYXVsdFByb3BzLCBPcmlnaW5Gb3JtLmRlZmF1bHRQcm9wcywge1xuICAgIGNvbXBUYWc6IEZvcm1cbiAgfSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLnByb3BUeXBlcywgT3JpZ2luRm9ybS5wcm9wVHlwZXMsIHt9KTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5jb21wTmFtZSA9ICdTS0Zvcm0nO1xuICB9XG59XG4iXX0=