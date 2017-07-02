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

var _Comp2 = require('../../utils/Comp');

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
    value: function handleChange(e) {
      if (e) {
        this.skVal(e.format(_skJs2.default.DEFAULT_MOMENT_DATE));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FudGQvU0tEYXRlUGlja2VyLmpzIl0sIm5hbWVzIjpbIlNLRGF0ZVBpY2tlciIsImFyZ3MiLCJlIiwic2tWYWwiLCJmb3JtYXQiLCJERUZBVUxUX01PTUVOVF9EQVRFIiwidW5kZWZpbmVkIiwiQ29tcFRhZyIsInByb3BzIiwiY29tcFRhZyIsImNvbXBWYWxpZFByb3BzIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsImdldCIsInNrUHJvcCIsIlNLX1BST1BTIiwiU0laRSIsInNrUHJvcHNUcmFucyIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsImFzc2lnbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFk7OztBQU1uQiwwQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsa0pBQ1ZBLElBRFU7QUFFcEI7Ozs7aUNBRVlDLEMsRUFBRztBQUNkLFVBQUlBLENBQUosRUFBTztBQUNMLGFBQUtDLEtBQUwsQ0FBV0QsRUFBRUUsTUFBRixDQUFTLGVBQUdDLG1CQUFaLENBQVg7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLRixLQUFMLENBQVdHLFNBQVg7QUFDRDtBQUNGOzs7NkJBRVE7QUFBQSxVQUNPQyxPQURQLEdBQ2tCLEtBQUtDLEtBRHZCLENBQ0ZDLE9BREU7OztBQUdQLGFBQ0U7QUFBQyxlQUFEO0FBQUEscUJBQWEsS0FBS0MsY0FBTCxDQUFvQkgsT0FBcEIsQ0FBYjtBQUNFLG9CQUFVLEtBQUtJLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBRFo7QUFFRSx1QkFBYSxhQUFLQyxHQUFMLENBQVMsb0JBQVQsQ0FGZjtBQUdFLGdCQUFNLEtBQUtDLE1BQUwsQ0FBWSxlQUFLQyxRQUFMLENBQWNDLElBQTFCLENBSFI7QUFJRSxpQkFBTyxLQUFLYixLQUFMLEtBQWUsc0JBQU8sS0FBS0EsS0FBTCxFQUFQLEVBQXFCLGVBQUdFLG1CQUF4QixDQUFmLEdBQThEQyxTQUp2RTtBQUtHLGFBQUtXLFlBQUw7QUFMSCxPQURGO0FBU0Q7Ozs7OztBQTlCa0JqQixZLENBQ1prQixZLEdBQWU7QUFDcEJUO0FBRG9CLEM7QUFESFQsWSxDQUlabUIsUyxHQUFZLGVBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsZUFBS0QsU0FBbkIsRUFBOEIscUJBQVdBLFNBQXpDLEVBQW9ELEVBQXBELEM7a0JBSkFuQixZIiwiZmlsZSI6ImNvbXBzL2FudGQvU0tEYXRlUGlja2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEYXRlUGlja2VyfSBmcm9tICdhbnRkJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU0sgZnJvbSAnc2stanMnO1xuaW1wb3J0IHtJMThOfSBmcm9tICdzay1sMTBuJztcbmltcG9ydCBDb21wIGZyb20gJy4uLy4uL3V0aWxzL0NvbXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS0RhdGVQaWNrZXIgZXh0ZW5kcyBDb21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb21wVGFnOiBEYXRlUGlja2VyXG4gIH07XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIENvbXAucHJvcFR5cGVzLCBEYXRlUGlja2VyLnByb3BUeXBlcywge30pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgaWYgKGUpIHtcbiAgICAgIHRoaXMuc2tWYWwoZS5mb3JtYXQoU0suREVGQVVMVF9NT01FTlRfREFURSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNrVmFsKHVuZGVmaW5lZCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7Y29tcFRhZzogQ29tcFRhZ30gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wVGFnIHsuLi50aGlzLmNvbXBWYWxpZFByb3BzKENvbXBUYWcpfVxuICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgcGxhY2Vob2xkZXI9e0kxOE4uZ2V0KCdQbGVhc2Vfc2VsZWN0X2RhdGUnKX1cbiAgICAgICAgc2l6ZT17dGhpcy5za1Byb3AoQ29tcC5TS19QUk9QUy5TSVpFKX1cbiAgICAgICAgdmFsdWU9e3RoaXMuc2tWYWwoKSA/IG1vbWVudCh0aGlzLnNrVmFsKCksIFNLLkRFRkFVTFRfTU9NRU5UX0RBVEUpIDogdW5kZWZpbmVkfT5cbiAgICAgICAge3RoaXMuc2tQcm9wc1RyYW5zKCl9XG4gICAgICA8L0NvbXBUYWc+XG4gICAgKTtcbiAgfVxufVxuIl19