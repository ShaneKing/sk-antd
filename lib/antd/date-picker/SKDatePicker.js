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

var _CommonPicker = require('./CommonPicker');

var _CommonPicker2 = _interopRequireDefault(_CommonPicker);

var _AntdComp2 = require('../AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_datePicker2.default.defaultProps = _skJs.SK.assign({}, {
  format: _skJs.SK.DEFAULT_MOMENT_DATE,
  showToday: true
}, _CommonPicker2.default.defaultProps, _datePicker2.default.defaultProps, {});

_datePicker2.default.propTypes = _skJs.SK.assign({}, {
  //https://ant.design/components/date-picker-cn/#DatePicker
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
}, _CommonPicker2.default.propTypes, _datePicker2.default.propTypes, {});

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
          placeholder: _skJs.Mesgs.get('Please_select_date'),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGQvZGF0ZS1waWNrZXIvU0tEYXRlUGlja2VyLmpzIl0sIm5hbWVzIjpbImRlZmF1bHRQcm9wcyIsImFzc2lnbiIsImZvcm1hdCIsIkRFRkFVTFRfTU9NRU5UX0RBVEUiLCJzaG93VG9kYXkiLCJwcm9wVHlwZXMiLCJkZWZhdWx0VmFsdWUiLCJpbnN0YW5jZU9mIiwiZGlzYWJsZWRUaW1lIiwiZnVuYyIsInN0cmluZyIsInJlbmRlckV4dHJhRm9vdGVyIiwic2hvd1RpbWUiLCJvbmVPZlR5cGUiLCJvYmplY3QiLCJib29sIiwidmFsdWUiLCJvbkNoYW5nZSIsIm9uT2siLCJTS0RhdGVQaWNrZXIiLCJhcmdzIiwiY29tcE5hbWUiLCJoYW5kbGVDaGFuZ2UiLCJkYXRlTW9tZW50IiwiZGF0ZVN0cmluZyIsInNrVmFsIiwidW5kZWZpbmVkIiwiQ29tcFRhZyIsInByb3BzIiwiY29tcFRhZyIsInNrVHJhbnNQcm9wczJTZWxmIiwiZ2V0Iiwic2tQcm9wIiwiU0tfUFJPUFMiLCJTSVpFIiwic2tUcmFuc1Byb3BzMkNoaWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEscUJBQVdBLFlBQVgsR0FBMEIsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYztBQUN0Q0MsVUFBUSxTQUFHQyxtQkFEMkI7QUFFdENDLGFBQVc7QUFGMkIsQ0FBZCxFQUd2Qix1QkFBYUosWUFIVSxFQUdJLHFCQUFXQSxZQUhmLEVBRzZCLEVBSDdCLENBQTFCOztBQUtBLHFCQUFXSyxTQUFYLEdBQXVCLFNBQUdKLE1BQUgsQ0FBVSxFQUFWLEVBQWM7QUFDbkM7QUFDQUssZ0JBQWMsb0JBQVVDLFVBQVYsa0JBRnFCO0FBR25DQyxnQkFBYyxvQkFBVUMsSUFIVztBQUluQ1AsVUFBUSxvQkFBVVEsTUFKaUI7QUFLbkNDLHFCQUFtQixvQkFBVUYsSUFMTTtBQU1uQ0csWUFBVSxvQkFBVUMsU0FBVixDQUFvQixDQUM1QixvQkFBVUMsTUFEa0IsRUFFNUIsb0JBQVVDLElBRmtCLENBQXBCLENBTnlCO0FBVW5DO0FBQ0FYLGFBQVcsb0JBQVVXLElBWGM7QUFZbkNDLFNBQU8sb0JBQVVULFVBQVYsa0JBWjRCO0FBYW5DVSxZQUFVLG9CQUFVUixJQWJlO0FBY25DUyxRQUFNLG9CQUFVVDtBQWRtQixDQUFkLEVBZXBCLHVCQUFhSixTQWZPLEVBZUkscUJBQVdBLFNBZmYsRUFlMEIsRUFmMUIsQ0FBdkI7O0lBaUJxQmMsWTs7O0FBTW5CLDBCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSx1SkFDVkEsSUFEVTs7QUFFbkIsVUFBS0MsUUFBTCxHQUFnQixjQUFoQjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsVUFBQ0MsVUFBRCxFQUFhQyxVQUFiLEVBQTRCO0FBQzlDLFVBQUlELFVBQUosRUFBZ0I7QUFDZCxjQUFLRSxLQUFMLENBQVdGLFdBQVdyQixNQUFYLENBQWtCLFNBQUdDLG1CQUFyQixDQUFYO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsY0FBS3NCLEtBQUwsQ0FBV0MsU0FBWDtBQUNEO0FBQ0YsS0FORDtBQUhtQjtBQVVwQjs7Ozs2QkFFUTtBQUFBLFVBQ09DLE9BRFAsR0FDa0IsS0FBS0MsS0FEdkIsQ0FDRkMsT0FERTs7O0FBR1AsYUFDRTtBQUFDLGVBQUQ7QUFBQSxxQkFBYSxLQUFLQyxpQkFBTCxDQUF1QkgsT0FBdkIsQ0FBYjtBQUNTLG9CQUFVLEtBQUtMLFlBRHhCO0FBRVMsdUJBQWEsWUFBTVMsR0FBTixDQUFVLG9CQUFWLENBRnRCO0FBR1MsZ0JBQU0sS0FBS0MsTUFBTCxDQUFZLG1CQUFTQyxRQUFULENBQWtCQyxJQUE5QixDQUhmO0FBSVMsaUJBQU8sS0FBS1QsS0FBTCxLQUFlLHNCQUFPLEtBQUtBLEtBQUwsRUFBUCxFQUFxQixTQUFHdEIsbUJBQXhCLENBQWYsR0FBOER1QixTQUo5RTtBQUtHLGFBQUtTLGtCQUFMO0FBTEgsT0FERjtBQVNEOzs7Ozs7QUE5QmtCaEIsWSxDQUNabkIsWSxHQUFlLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNELFlBQXZCLEVBQXFDLHFCQUFXQSxZQUFoRCxFQUE4RDtBQUNsRjZCO0FBRGtGLENBQTlELEM7QUFESFYsWSxDQUlaZCxTLEdBQVksU0FBR0osTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0ksU0FBdkIsRUFBa0MscUJBQVdBLFNBQTdDLEVBQXdELEVBQXhELEM7a0JBSkFjLFkiLCJmaWxlIjoiYW50ZC9kYXRlLXBpY2tlci9TS0RhdGVQaWNrZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RhdGVQaWNrZXJ9IGZyb20gJ2FudGQnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1NLLCBNZXNnc30gZnJvbSAnc2stanMnO1xuaW1wb3J0IENvbW1vblBpY2tlciBmcm9tICcuL0NvbW1vblBpY2tlcic7XG5pbXBvcnQgQW50ZENvbXAgZnJvbSAnLi4vQW50ZENvbXAnO1xuXG5EYXRlUGlja2VyLmRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwge1xuICBmb3JtYXQ6IFNLLkRFRkFVTFRfTU9NRU5UX0RBVEUsXG4gIHNob3dUb2RheTogdHJ1ZVxufSwgQ29tbW9uUGlja2VyLmRlZmF1bHRQcm9wcywgRGF0ZVBpY2tlci5kZWZhdWx0UHJvcHMsIHt9KTtcblxuRGF0ZVBpY2tlci5wcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIHtcbiAgLy9odHRwczovL2FudC5kZXNpZ24vY29tcG9uZW50cy9kYXRlLXBpY2tlci1jbi8jRGF0ZVBpY2tlclxuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5pbnN0YW5jZU9mKG1vbWVudCksXG4gIGRpc2FibGVkVGltZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGZvcm1hdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgcmVuZGVyRXh0cmFGb290ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBzaG93VGltZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLm9iamVjdCxcbiAgICBQcm9wVHlwZXMuYm9vbFxuICBdKSxcbiAgLy9zaG93VGltZS5kZWZhdWx0VmFsdWU6UHJvcFR5cGVzLmluc3RhbmNlT2YobW9tZW50KSxcbiAgc2hvd1RvZGF5OiBQcm9wVHlwZXMuYm9vbCxcbiAgdmFsdWU6IFByb3BUeXBlcy5pbnN0YW5jZU9mKG1vbWVudCksXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25PazogUHJvcFR5cGVzLmZ1bmNcbn0sIENvbW1vblBpY2tlci5wcm9wVHlwZXMsIERhdGVQaWNrZXIucHJvcFR5cGVzLCB7fSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNLRGF0ZVBpY2tlciBleHRlbmRzIEFudGRDb21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAuZGVmYXVsdFByb3BzLCBEYXRlUGlja2VyLmRlZmF1bHRQcm9wcywge1xuICAgIGNvbXBUYWc6IERhdGVQaWNrZXJcbiAgfSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLnByb3BUeXBlcywgRGF0ZVBpY2tlci5wcm9wVHlwZXMsIHt9KTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5jb21wTmFtZSA9ICdTS0RhdGVQaWNrZXInO1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gKGRhdGVNb21lbnQsIGRhdGVTdHJpbmcpID0+IHtcbiAgICAgIGlmIChkYXRlTW9tZW50KSB7XG4gICAgICAgIHRoaXMuc2tWYWwoZGF0ZU1vbWVudC5mb3JtYXQoU0suREVGQVVMVF9NT01FTlRfREFURSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5za1ZhbCh1bmRlZmluZWQpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtjb21wVGFnOiBDb21wVGFnfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBUYWcgey4uLnRoaXMuc2tUcmFuc1Byb3BzMlNlbGYoQ29tcFRhZyl9XG4gICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17TWVzZ3MuZ2V0KCdQbGVhc2Vfc2VsZWN0X2RhdGUnKX1cbiAgICAgICAgICAgICAgIHNpemU9e3RoaXMuc2tQcm9wKEFudGRDb21wLlNLX1BST1BTLlNJWkUpfVxuICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc2tWYWwoKSA/IG1vbWVudCh0aGlzLnNrVmFsKCksIFNLLkRFRkFVTFRfTU9NRU5UX0RBVEUpIDogdW5kZWZpbmVkfT5cbiAgICAgICAge3RoaXMuc2tUcmFuc1Byb3BzMkNoaWxkKCl9XG4gICAgICA8L0NvbXBUYWc+XG4gICAgKTtcbiAgfVxufVxuIl19