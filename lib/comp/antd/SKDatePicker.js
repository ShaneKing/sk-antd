'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style2 = require('antd/lib/date-picker/style');

var _datePicker = require('antd/lib/date-picker');

var _datePicker2 = _interopRequireDefault(_datePicker);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _skJs2 = _interopRequireDefault(_skJs);

var _skL10n = require('sk-l10n');

var _Comp2 = require('../../util/Comp');

var _Comp3 = _interopRequireDefault(_Comp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SKDatePicker = function (_Comp) {
  _inherits(SKDatePicker, _Comp);

  function SKDatePicker() {
    var _ref;

    _classCallCheck(this, SKDatePicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(this, (_ref = SKDatePicker.__proto__ || Object.getPrototypeOf(SKDatePicker)).call.apply(_ref, [this].concat(args)));
  }

  _createClass(SKDatePicker, [{
    key: 'handleChange',
    value: function handleChange(dateMoment, dateString) {
      if (dateMoment) {
        this.skVal(dateMoment.format(_skJs2.default.DEFAULT_MOMENT_DATE));
      } else {
        this.skVal(undefined);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var CompTag = this.props.compTag;


      return _react2.default.createElement(
        CompTag,
        _extends({}, this.compValidProps(CompTag), {
          onChange: this.handleChange.bind(this),
          placeholder: _skL10n.I18N.get('Please_select_date'),
          size: this.skProp(_Comp3.default.SK_PROPS.SIZE),
          value: this.skVal() ? (0, _moment2.default)(this.skVal(), _skJs2.default.DEFAULT_MOMENT_DATE) : undefined }),
        this.skPropsTrans()
      );
    }
  }]);

  return SKDatePicker;
}(_Comp3.default);

SKDatePicker.defaultProps = {
  compTag: _datePicker2.default
};
SKDatePicker.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _datePicker2.default.propTypes, {});
exports.default = SKDatePicker;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9TS0RhdGVQaWNrZXIuanMiXSwibmFtZXMiOlsiU0tEYXRlUGlja2VyIiwiYXJncyIsImRhdGVNb21lbnQiLCJkYXRlU3RyaW5nIiwic2tWYWwiLCJmb3JtYXQiLCJERUZBVUxUX01PTUVOVF9EQVRFIiwidW5kZWZpbmVkIiwiQ29tcFRhZyIsInByb3BzIiwiY29tcFRhZyIsImNvbXBWYWxpZFByb3BzIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsImdldCIsInNrUHJvcCIsIlNLX1BST1BTIiwiU0laRSIsInNrUHJvcHNUcmFucyIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsImFzc2lnbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFk7OztBQU1uQiwwQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsa0pBQ1ZBLElBRFU7QUFFcEI7Ozs7aUNBRVlDLFUsRUFBWUMsVSxFQUFZO0FBQ25DLFVBQUlELFVBQUosRUFBZ0I7QUFDZCxhQUFLRSxLQUFMLENBQVdGLFdBQVdHLE1BQVgsQ0FBa0IsZUFBR0MsbUJBQXJCLENBQVg7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLRixLQUFMLENBQVdHLFNBQVg7QUFDRDtBQUNGOzs7NkJBRVE7QUFBQSxVQUNPQyxPQURQLEdBQ2tCLEtBQUtDLEtBRHZCLENBQ0ZDLE9BREU7OztBQUdQLGFBQ0U7QUFBQyxlQUFEO0FBQUEscUJBQWEsS0FBS0MsY0FBTCxDQUFvQkgsT0FBcEIsQ0FBYjtBQUNTLG9CQUFVLEtBQUtJLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBRG5CO0FBRVMsdUJBQWEsYUFBS0MsR0FBTCxDQUFTLG9CQUFULENBRnRCO0FBR1MsZ0JBQU0sS0FBS0MsTUFBTCxDQUFZLGVBQUtDLFFBQUwsQ0FBY0MsSUFBMUIsQ0FIZjtBQUlTLGlCQUFPLEtBQUtiLEtBQUwsS0FBZSxzQkFBTyxLQUFLQSxLQUFMLEVBQVAsRUFBcUIsZUFBR0UsbUJBQXhCLENBQWYsR0FBOERDLFNBSjlFO0FBS0csYUFBS1csWUFBTDtBQUxILE9BREY7QUFTRDs7Ozs7O0FBOUJrQmxCLFksQ0FDWm1CLFksR0FBZTtBQUNwQlQ7QUFEb0IsQztBQURIVixZLENBSVpvQixTLEdBQVksZUFBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxlQUFLRCxTQUFuQixFQUE4QixxQkFBV0EsU0FBekMsRUFBb0QsRUFBcEQsQztrQkFKQXBCLFkiLCJmaWxlIjoiY29tcC9hbnRkL1NLRGF0ZVBpY2tlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGF0ZVBpY2tlcn0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNLIGZyb20gJ3NrLWpzJztcbmltcG9ydCB7STE4Tn0gZnJvbSAnc2stbDEwbic7XG5pbXBvcnQgQ29tcCBmcm9tICcuLi8uLi91dGlsL0NvbXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS0RhdGVQaWNrZXIgZXh0ZW5kcyBDb21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb21wVGFnOiBEYXRlUGlja2VyXG4gIH07XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIENvbXAucHJvcFR5cGVzLCBEYXRlUGlja2VyLnByb3BUeXBlcywge30pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShkYXRlTW9tZW50LCBkYXRlU3RyaW5nKSB7XG4gICAgaWYgKGRhdGVNb21lbnQpIHtcbiAgICAgIHRoaXMuc2tWYWwoZGF0ZU1vbWVudC5mb3JtYXQoU0suREVGQVVMVF9NT01FTlRfREFURSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNrVmFsKHVuZGVmaW5lZCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7Y29tcFRhZzogQ29tcFRhZ30gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wVGFnIHsuLi50aGlzLmNvbXBWYWxpZFByb3BzKENvbXBUYWcpfVxuICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17STE4Ti5nZXQoJ1BsZWFzZV9zZWxlY3RfZGF0ZScpfVxuICAgICAgICAgICAgICAgc2l6ZT17dGhpcy5za1Byb3AoQ29tcC5TS19QUk9QUy5TSVpFKX1cbiAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnNrVmFsKCkgPyBtb21lbnQodGhpcy5za1ZhbCgpLCBTSy5ERUZBVUxUX01PTUVOVF9EQVRFKSA6IHVuZGVmaW5lZH0+XG4gICAgICAgIHt0aGlzLnNrUHJvcHNUcmFucygpfVxuICAgICAgPC9Db21wVGFnPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==