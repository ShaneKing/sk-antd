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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _skL10n = require('sk-l10n');

var _AntdComp2 = require('./AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_datePicker2.default.COMMON_DEFAULT_PROPS = _skJs.SK.assign({}, {
  allowClear: true,
  autoFocus: false,
  className: _skJs.SK.EMPTY,
  disabled: false,
  popupStyle: {},
  style: {}
}, {});

_datePicker2.default.COMMON_PROP_TYPES = _skJs.SK.assign({}, {
  allowClear: _propTypes2.default.bool,
  autoFocus: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  dateRender: _propTypes2.default.func,
  disabled: _propTypes2.default.bool,
  disabledDate: _propTypes2.default.func,
  getCalendarContainer: _propTypes2.default.func,
  locale: _propTypes2.default.object,
  open: _propTypes2.default.bool,
  placeholder: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
  popupStyle: _propTypes2.default.object,
  size: _propTypes2.default.string,
  style: _propTypes2.default.object,
  onOpenChange: _propTypes2.default.func
}, {});

_datePicker2.default.defaultProps = _skJs.SK.assign({}, {
  format: _skJs.SK.DEFAULT_MOMENT_DATE,
  showToday: true
}, _datePicker2.default.COMMON_DEFAULT_PROPS, _datePicker2.default.defaultProps, {});

_datePicker2.default.propTypes = _skJs.SK.assign({}, {
  defaultValue: _propTypes2.default.instanceOf(_moment2.default),
  disabledTime: _propTypes2.default.func,
  format: _propTypes2.default.string,
  renderExtraFooter: _propTypes2.default.func,
  showTime: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.bool]),
  //showTime.defaultValue:PropTypes.instanceOf(moment),
  showToday: _propTypes2.default.bool,
  value: _propTypes2.default.instanceOf(_moment2.default),
  onChange: _propTypes2.default.func,
  onOk: _propTypes2.default.func
}, _datePicker2.default.COMMON_PROP_TYPES, _datePicker2.default.propTypes, {});

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
    return _this;
  }

  _createClass(SKDatePicker, [{
    key: 'handleChange',
    value: function handleChange(dateMoment, dateString) {
      if (dateMoment) {
        this.skVal(dateMoment.format(_skJs.SK.DEFAULT_MOMENT_DATE));
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
        _extends({}, this.skTransProps2Self(CompTag), {
          onChange: this.handleChange.bind(this),
          placeholder: _skL10n.I18N.get('Please_select_date'),
          size: this.skProp(_AntdComp3.default.SK_PROPS.SIZE),
          value: this.skVal() ? (0, _moment2.default)(this.skVal(), _skJs.SK.DEFAULT_MOMENT_DATE) : undefined }),
        this.skTransProps2Child()
      );
    }
  }]);

  return SKDatePicker;
}(_AntdComp3.default);

SKDatePicker.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, _datePicker2.default.defaultProps, {
  compTag: _datePicker2.default
});
SKDatePicker.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _datePicker2.default.propTypes, {});
exports.default = SKDatePicker;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9TS0RhdGVQaWNrZXIuanMiXSwibmFtZXMiOlsiQ09NTU9OX0RFRkFVTFRfUFJPUFMiLCJhc3NpZ24iLCJhbGxvd0NsZWFyIiwiYXV0b0ZvY3VzIiwiY2xhc3NOYW1lIiwiRU1QVFkiLCJkaXNhYmxlZCIsInBvcHVwU3R5bGUiLCJzdHlsZSIsIkNPTU1PTl9QUk9QX1RZUEVTIiwiYm9vbCIsInN0cmluZyIsImRhdGVSZW5kZXIiLCJmdW5jIiwiZGlzYWJsZWREYXRlIiwiZ2V0Q2FsZW5kYXJDb250YWluZXIiLCJsb2NhbGUiLCJvYmplY3QiLCJvcGVuIiwicGxhY2Vob2xkZXIiLCJvbmVPZlR5cGUiLCJhcnJheSIsInNpemUiLCJvbk9wZW5DaGFuZ2UiLCJkZWZhdWx0UHJvcHMiLCJmb3JtYXQiLCJERUZBVUxUX01PTUVOVF9EQVRFIiwic2hvd1RvZGF5IiwicHJvcFR5cGVzIiwiZGVmYXVsdFZhbHVlIiwiaW5zdGFuY2VPZiIsImRpc2FibGVkVGltZSIsInJlbmRlckV4dHJhRm9vdGVyIiwic2hvd1RpbWUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwib25PayIsIlNLRGF0ZVBpY2tlciIsImFyZ3MiLCJjb21wTmFtZSIsImRhdGVNb21lbnQiLCJkYXRlU3RyaW5nIiwic2tWYWwiLCJ1bmRlZmluZWQiLCJDb21wVGFnIiwicHJvcHMiLCJjb21wVGFnIiwic2tUcmFuc1Byb3BzMlNlbGYiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiZ2V0Iiwic2tQcm9wIiwiU0tfUFJPUFMiLCJTSVpFIiwic2tUcmFuc1Byb3BzMkNoaWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLHFCQUFXQSxvQkFBWCxHQUFrQyxTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjO0FBQzlDQyxjQUFZLElBRGtDO0FBRTlDQyxhQUFXLEtBRm1DO0FBRzlDQyxhQUFXLFNB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YUFBS1csa0JBQUw7QUFMSCxPQURGO0FBU0Q7Ozs7OztBQS9Ca0JqQixZLENBQ1piLFksR0FBZSxTQUFHdkIsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU3VCLFlBQXZCLEVBQXFDLHFCQUFXQSxZQUFoRCxFQUE4RDtBQUNsRnNCO0FBRGtGLENBQTlELEM7QUFESFQsWSxDQUlaVCxTLEdBQVksU0FBRzNCLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVMyQixTQUF2QixFQUFrQyxxQkFBV0EsU0FBN0MsRUFBd0QsRUFBeEQsQztrQkFKQVMsWSIsImZpbGUiOiJjb21wL2FudGQvU0tEYXRlUGlja2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEYXRlUGlja2VyfSBmcm9tICdhbnRkJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTS30gZnJvbSAnc2stanMnO1xuaW1wb3J0IHtJMThOfSBmcm9tICdzay1sMTBuJztcbmltcG9ydCBBbnRkQ29tcCBmcm9tICcuL0FudGRDb21wJztcblxuRGF0ZVBpY2tlci5DT01NT05fREVGQVVMVF9QUk9QUyA9IFNLLmFzc2lnbih7fSwge1xuICBhbGxvd0NsZWFyOiB0cnVlLFxuICBhdXRvRm9jdXM6IGZhbHNlLFxuICBjbGFzc05hbWU6IFNLLkVNUFRZLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIHBvcHVwU3R5bGU6IHt9LFxuICBzdHlsZToge31cbn0sIHt9KTtcblxuRGF0ZVBpY2tlci5DT01NT05fUFJPUF9UWVBFUyA9IFNLLmFzc2lnbih7fSwge1xuICBhbGxvd0NsZWFyOiBQcm9wVHlwZXMuYm9vbCxcbiAgYXV0b0ZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkYXRlUmVuZGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBkaXNhYmxlZERhdGU6IFByb3BUeXBlcy5mdW5jLFxuICBnZXRDYWxlbmRhckNvbnRhaW5lcjogUHJvcFR5cGVzLmZ1bmMsXG4gIGxvY2FsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgb3BlbjogUHJvcFR5cGVzLmJvb2wsXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5hcnJheVxuICBdKSxcbiAgcG9wdXBTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgc2l6ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIG9uT3BlbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmNcbn0sIHt9KTtcblxuRGF0ZVBpY2tlci5kZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIHtcbiAgZm9ybWF0OiBTSy5ERUZBVUxUX01PTUVOVF9EQVRFLFxuICBzaG93VG9kYXk6IHRydWVcbn0sIERhdGVQaWNrZXIuQ09NTU9OX0RFRkFVTFRfUFJPUFMsIERhdGVQaWNrZXIuZGVmYXVsdFByb3BzLCB7fSk7XG5cbkRhdGVQaWNrZXIucHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCB7XG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLmluc3RhbmNlT2YobW9tZW50KSxcbiAgZGlzYWJsZWRUaW1lOiBQcm9wVHlwZXMuZnVuYyxcbiAgZm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICByZW5kZXJFeHRyYUZvb3RlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIHNob3dUaW1lOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMub2JqZWN0LFxuICAgIFByb3BUeXBlcy5ib29sXG4gIF0pLFxuICAvL3Nob3dUaW1lLmRlZmF1bHRWYWx1ZTpQcm9wVHlwZXMuaW5zdGFuY2VPZihtb21lbnQpLFxuICBzaG93VG9kYXk6IFByb3BUeXBlcy5ib29sLFxuICB2YWx1ZTogUHJvcFR5cGVzLmluc3RhbmNlT2YobW9tZW50KSxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvbk9rOiBQcm9wVHlwZXMuZnVuY1xufSwgRGF0ZVBpY2tlci5DT01NT05fUFJPUF9UWVBFUywgRGF0ZVBpY2tlci5wcm9wVHlwZXMsIHt9KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tEYXRlUGlja2VyIGV4dGVuZHMgQW50ZENvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5kZWZhdWx0UHJvcHMsIERhdGVQaWNrZXIuZGVmYXVsdFByb3BzLCB7XG4gICAgY29tcFRhZzogRGF0ZVBpY2tlclxuICB9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAucHJvcFR5cGVzLCBEYXRlUGlja2VyLnByb3BUeXBlcywge30pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLmNvbXBOYW1lID0gJ1NLRGF0ZVBpY2tlcic7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZGF0ZU1vbWVudCwgZGF0ZVN0cmluZykge1xuICAgIGlmIChkYXRlTW9tZW50KSB7XG4gICAgICB0aGlzLnNrVmFsKGRhdGVNb21lbnQuZm9ybWF0KFNLLkRFRkFVTFRfTU9NRU5UX0RBVEUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5za1ZhbCh1bmRlZmluZWQpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge2NvbXBUYWc6IENvbXBUYWd9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcFRhZyB7Li4udGhpcy5za1RyYW5zUHJvcHMyU2VsZihDb21wVGFnKX1cbiAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e0kxOE4uZ2V0KCdQbGVhc2Vfc2VsZWN0X2RhdGUnKX1cbiAgICAgICAgICAgICAgIHNpemU9e3RoaXMuc2tQcm9wKEFudGRDb21wLlNLX1BST1BTLlNJWkUpfVxuICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc2tWYWwoKSA/IG1vbWVudCh0aGlzLnNrVmFsKCksIFNLLkRFRkFVTFRfTU9NRU5UX0RBVEUpIDogdW5kZWZpbmVkfT5cbiAgICAgICAge3RoaXMuc2tUcmFuc1Byb3BzMkNoaWxkKCl9XG4gICAgICA8L0NvbXBUYWc+XG4gICAgKTtcbiAgfVxufVxuIl19