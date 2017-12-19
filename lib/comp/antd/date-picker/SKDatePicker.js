'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _datePicker = require('antd/lib/date-picker');

var _datePicker2 = _interopRequireDefault(_datePicker);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/date-picker/style');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _skL10n = require('sk-l10n');

var _AntdComp2 = require('../AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SKDatePicker = function (_AntdComp) {
  _inherits(SKDatePicker, _AntdComp);

  function SKDatePicker() {
    var _ref;

    _classCallCheck(this, SKDatePicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SKDatePicker.__proto__ || Object.getPrototypeOf(SKDatePicker)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'SKDatePicker';
    _this.handleChange = function (dateMoment, dateString) {
      if (dateMoment) {
        _this.skVal(dateMoment.format(_skJs.SK.DEFAULT_MOMENT_DATE));
      } else {
        _this.skVal(undefined);
      }
    };
    return _this;
  }

  _createClass(SKDatePicker, [{
    key: 'render',
    value: function render() {
      var CompTag = this.props.compTag;


      return _react2.default.createElement(
        CompTag,
        _extends({}, this.skTransProps2Self(CompTag), {
          onChange: this.handleChange,
          placeholder: _skL10n.I18N.get('Please_select_date'),
          size: this.skProp(_AntdComp3.default.SK_PROPS.SIZE),
          value: this.skVal() ? (0, _moment2.default)(this.skVal(), _skJs.SK.DEFAULT_MOMENT_DATE) : undefined }),
        this.skTransProps2Child()
      );
    }
  }]);

  return SKDatePicker;
}(_AntdComp3.default);

SKDatePicker.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, {
  compTag: _datePicker2.default
});
SKDatePicker.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, {});
exports.default = SKDatePicker;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9kYXRlLXBpY2tlci9TS0RhdGVQaWNrZXIuanMiXSwibmFtZXMiOlsiU0tEYXRlUGlja2VyIiwiYXJncyIsImNvbXBOYW1lIiwiaGFuZGxlQ2hhbmdlIiwiZGF0ZU1vbWVudCIsImRhdGVTdHJpbmciLCJza1ZhbCIsImZvcm1hdCIsIkRFRkFVTFRfTU9NRU5UX0RBVEUiLCJ1bmRlZmluZWQiLCJDb21wVGFnIiwicHJvcHMiLCJjb21wVGFnIiwic2tUcmFuc1Byb3BzMlNlbGYiLCJnZXQiLCJza1Byb3AiLCJTS19QUk9QUyIsIlNJWkUiLCJza1RyYW5zUHJvcHMyQ2hpbGQiLCJkZWZhdWx0UHJvcHMiLCJhc3NpZ24iLCJwcm9wVHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsWTs7O0FBTW5CLDBCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSx1SkFDVkEsSUFEVTs7QUFFbkIsVUFBS0MsUUFBTCxHQUFnQixjQUFoQjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsVUFBQ0MsVUFBRCxFQUFhQyxVQUFiLEVBQTRCO0FBQzlDLFVBQUlELFVBQUosRUFBZ0I7QUFDZCxjQUFLRSxLQUFMLENBQVdGLFdBQVdHLE1BQVgsQ0FBa0IsU0FBR0MsbUJBQXJCLENBQVg7QUFDRCxPQUZELE1BRU87QUFDTCxjQUFLRixLQUFMLENBQVdHLFNBQVg7QUFDRDtBQUNGLEtBTkQ7QUFIbUI7QUFVcEI7Ozs7NkJBRVE7QUFBQSxVQUNPQyxPQURQLEdBQ2tCLEtBQUtDLEtBRHZCLENBQ0ZDLE9BREU7OztBQUdQLGFBQ0U7QUFBQyxlQUFEO0FBQUEscUJBQWEsS0FBS0MsaUJBQUwsQ0FBdUJILE9BQXZCLENBQWI7QUFDUyxvQkFBVSxLQUFLUCxZQUR4QjtBQUVTLHVCQUFhLGFBQUtXLEdBQUwsQ0FBUyxvQkFBVCxDQUZ0QjtBQUdTLGdCQUFNLEtBQUtDLE1BQUwsQ0FBWSxtQkFBU0MsUUFBVCxDQUFrQkMsSUFBOUIsQ0FIZjtBQUlTLGlCQUFPLEtBQUtYLEtBQUwsS0FBZSxzQkFBTyxLQUFLQSxLQUFMLEVBQVAsRUFBcUIsU0FBR0UsbUJBQXhCLENBQWYsR0FBOERDLFNBSjlFO0FBS0csYUFBS1Msa0JBQUw7QUFMSCxPQURGO0FBU0Q7Ozs7OztBQTlCa0JsQixZLENBQ1ptQixZLEdBQWUsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0QsWUFBdkIsRUFBcUM7QUFDekRQO0FBRHlELENBQXJDLEM7QUFESFosWSxDQUlacUIsUyxHQUFZLFNBQUdELE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNDLFNBQXZCLEVBQWtDLEVBQWxDLEM7a0JBSkFyQixZIiwiZmlsZSI6ImNvbXAvYW50ZC9kYXRlLXBpY2tlci9TS0RhdGVQaWNrZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RhdGVQaWNrZXJ9IGZyb20gJ2FudGQnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U0t9IGZyb20gJ3NrLWpzJztcbmltcG9ydCB7STE4Tn0gZnJvbSAnc2stbDEwbic7XG5pbXBvcnQgQW50ZENvbXAgZnJvbSAnLi4vQW50ZENvbXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS0RhdGVQaWNrZXIgZXh0ZW5kcyBBbnRkQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLmRlZmF1bHRQcm9wcywge1xuICAgIGNvbXBUYWc6IERhdGVQaWNrZXJcbiAgfSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLnByb3BUeXBlcywge30pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLmNvbXBOYW1lID0gJ1NLRGF0ZVBpY2tlcic7XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSAoZGF0ZU1vbWVudCwgZGF0ZVN0cmluZykgPT4ge1xuICAgICAgaWYgKGRhdGVNb21lbnQpIHtcbiAgICAgICAgdGhpcy5za1ZhbChkYXRlTW9tZW50LmZvcm1hdChTSy5ERUZBVUxUX01PTUVOVF9EQVRFKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNrVmFsKHVuZGVmaW5lZCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge2NvbXBUYWc6IENvbXBUYWd9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcFRhZyB7Li4udGhpcy5za1RyYW5zUHJvcHMyU2VsZihDb21wVGFnKX1cbiAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtJMThOLmdldCgnUGxlYXNlX3NlbGVjdF9kYXRlJyl9XG4gICAgICAgICAgICAgICBzaXplPXt0aGlzLnNrUHJvcChBbnRkQ29tcC5TS19QUk9QUy5TSVpFKX1cbiAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnNrVmFsKCkgPyBtb21lbnQodGhpcy5za1ZhbCgpLCBTSy5ERUZBVUxUX01PTUVOVF9EQVRFKSA6IHVuZGVmaW5lZH0+XG4gICAgICAgIHt0aGlzLnNrVHJhbnNQcm9wczJDaGlsZCgpfVxuICAgICAgPC9Db21wVGFnPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==