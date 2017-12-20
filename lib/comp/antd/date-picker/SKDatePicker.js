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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9kYXRlLXBpY2tlci9TS0RhdGVQaWNrZXIuanMiXSwibmFtZXMiOlsiZGVmYXVsdFByb3BzIiwiYXNzaWduIiwiZm9ybWF0IiwiREVGQVVMVF9NT01FTlRfREFURSIsInNob3dUb2RheSIsInByb3BUeXBlcyIsImRlZmF1bHRWYWx1ZSIsImluc3RhbmNlT2YiLCJkaXNhYmxlZFRpbWUiLCJmdW5jIiwic3RyaW5nIiwicmVuZGVyRXh0cmFGb290ZXIiLCJzaG93VGltZSIsIm9uZU9mVHlwZSIsIm9iamVjdCIsImJvb2wiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwib25PayIsIlNLRGF0ZVBpY2tlciIsImFyZ3MiLCJjb21wTmFtZSIsImhhbmRsZUNoYW5nZSIsImRhdGVNb21lbnQiLCJkYXRlU3RyaW5nIiwic2tWYWwiLCJ1bmRlZmluZWQiLCJDb21wVGFnIiwicHJvcHMiLCJjb21wVGFnIiwic2tUcmFuc1Byb3BzMlNlbGYiLCJnZXQiLCJza1Byb3AiLCJTS19QUk9QUyIsIlNJWkUiLCJza1RyYW5zUHJvcHMyQ2hpbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxxQkFBV0EsWUFBWCxHQUEwQixTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjO0FBQ3RDQyxVQUFRLFNBQUdDLG1CQUQyQjtBQUV0Q0MsYUFBVztBQUYyQixDQUFkLEVBR3ZCLHVCQUFhSixZQUhVLEVBR0kscUJBQVdBLFlBSGYsRUFHNkIsRUFIN0IsQ0FBMUI7O0FBS0EscUJBQVdLLFNBQVgsR0FBdUIsU0FBR0osTUFBSCxDQUFVLEVBQVYsRUFBYztBQUNuQztBQUNBSyxnQkFBYyxvQkFBVUMsVUFBVixrQkFGcUI7QUFHbkNDLGdCQUFjLG9CQUFVQyxJQUhXO0FBSW5DUCxVQUFRLG9CQUFVUSxNQUppQjtBQUtuQ0MscUJBQW1CLG9CQUFVRixJQUxNO0FBTW5DRyxZQUFVLG9CQUFVQyxTQUFWLENBQW9CLENBQzVCLG9CQUFVQyxNQURrQixFQUU1QixvQkFBVUMsSUFGa0IsQ0FBcEIsQ0FOeUI7QUFVbkM7QUFDQVgsYUFBVyxvQkFBVVcsSUFYYztBQVluQ0MsU0FBTyxvQkFBVVQsVUFBVixrQkFaNEI7QUFhbkNVLFlBQVUsb0JBQVVSLElBYmU7QUFjbkNTLFFBQU0sb0JBQVVUO0FBZG1CLENBQWQsRUFlcEIsdUJBQWFKLFNBZk8sRUFlSSxxQkFBV0EsU0FmZixFQWUwQixFQWYxQixDQUF2Qjs7SUFpQnFCYyxZOzs7QUFNbkIsMEJBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLHVKQUNWQSxJQURVOztBQUVuQixVQUFLQyxRQUFMLEdBQWdCLGNBQWhCO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixVQUFDQyxVQUFELEVBQWFDLFVBQWIsRUFBNEI7QUFDOUMsVUFBSUQsVUFBSixFQUFnQjtBQUNkLGNBQUtFLEtBQUwsQ0FBV0YsV0FBV3JCLE1BQVgsQ0FBa0IsU0FBR0MsbUJBQXJCLENBQVg7QUFDRCxPQUZELE1BRU87QUFDTCxjQUFLc0IsS0FBTCxDQUFXQyxTQUFYO0FBQ0Q7QUFDRixLQU5EO0FBSG1CO0FBVXBCOzs7OzZCQUVRO0FBQUEsVUFDT0MsT0FEUCxHQUNrQixLQUFLQyxLQUR2QixDQUNGQyxPQURFOzs7QUFHUCxhQUNFO0FBQUMsZUFBRDtBQUFBLHFCQUFhLEtBQUtDLGlCQUFMLENBQXVCSCxPQUF2QixDQUFiO0FBQ1Msb0JBQVUsS0FBS0wsWUFEeEI7QUFFUyx1QkFBYSxhQUFLUyxHQUFMLENBQVMsb0JBQVQsQ0FGdEI7QUFHUyxnQkFBTSxLQUFLQyxNQUFMLENBQVksbUJBQVNDLFFBQVQsQ0FBa0JDLElBQTlCLENBSGY7QUFJUyxpQkFBTyxLQUFLVCxLQUFMLEtBQWUsc0JBQU8sS0FBS0EsS0FBTCxFQUFQLEVBQXFCLFNBQUd0QixtQkFBeEIsQ0FBZixHQUE4RHVCLFNBSjlFO0FBS0csYUFBS1Msa0JBQUw7QUFMSCxPQURGO0FBU0Q7Ozs7OztBQTlCa0JoQixZLENBQ1puQixZLEdBQWUsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0QsWUFBdkIsRUFBcUMscUJBQVdBLFlBQWhELEVBQThEO0FBQ2xGNkI7QUFEa0YsQ0FBOUQsQztBQURIVixZLENBSVpkLFMsR0FBWSxTQUFHSixNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTSSxTQUF2QixFQUFrQyxxQkFBV0EsU0FBN0MsRUFBd0QsRUFBeEQsQztrQkFKQWMsWSIsImZpbGUiOiJjb21wL2FudGQvZGF0ZS1waWNrZXIvU0tEYXRlUGlja2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEYXRlUGlja2VyfSBmcm9tICdhbnRkJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTS30gZnJvbSAnc2stanMnO1xuaW1wb3J0IHtJMThOfSBmcm9tICdzay1sMTBuJztcbmltcG9ydCBDb21tb25QaWNrZXIgZnJvbSAnLi9Db21tb25QaWNrZXInO1xuaW1wb3J0IEFudGRDb21wIGZyb20gJy4uL0FudGRDb21wJztcblxuRGF0ZVBpY2tlci5kZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIHtcbiAgZm9ybWF0OiBTSy5ERUZBVUxUX01PTUVOVF9EQVRFLFxuICBzaG93VG9kYXk6IHRydWVcbn0sIENvbW1vblBpY2tlci5kZWZhdWx0UHJvcHMsIERhdGVQaWNrZXIuZGVmYXVsdFByb3BzLCB7fSk7XG5cbkRhdGVQaWNrZXIucHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCB7XG4gIC8vaHR0cHM6Ly9hbnQuZGVzaWduL2NvbXBvbmVudHMvZGF0ZS1waWNrZXItY24vI0RhdGVQaWNrZXJcbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihtb21lbnQpLFxuICBkaXNhYmxlZFRpbWU6IFByb3BUeXBlcy5mdW5jLFxuICBmb3JtYXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHJlbmRlckV4dHJhRm9vdGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgc2hvd1RpbWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5vYmplY3QsXG4gICAgUHJvcFR5cGVzLmJvb2xcbiAgXSksXG4gIC8vc2hvd1RpbWUuZGVmYXVsdFZhbHVlOlByb3BUeXBlcy5pbnN0YW5jZU9mKG1vbWVudCksXG4gIHNob3dUb2RheTogUHJvcFR5cGVzLmJvb2wsXG4gIHZhbHVlOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihtb21lbnQpLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uT2s6IFByb3BUeXBlcy5mdW5jXG59LCBDb21tb25QaWNrZXIucHJvcFR5cGVzLCBEYXRlUGlja2VyLnByb3BUeXBlcywge30pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS0RhdGVQaWNrZXIgZXh0ZW5kcyBBbnRkQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLmRlZmF1bHRQcm9wcywgRGF0ZVBpY2tlci5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBEYXRlUGlja2VyXG4gIH0pO1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5wcm9wVHlwZXMsIERhdGVQaWNrZXIucHJvcFR5cGVzLCB7fSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnU0tEYXRlUGlja2VyJztcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IChkYXRlTW9tZW50LCBkYXRlU3RyaW5nKSA9PiB7XG4gICAgICBpZiAoZGF0ZU1vbWVudCkge1xuICAgICAgICB0aGlzLnNrVmFsKGRhdGVNb21lbnQuZm9ybWF0KFNLLkRFRkFVTFRfTU9NRU5UX0RBVEUpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2tWYWwodW5kZWZpbmVkKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7Y29tcFRhZzogQ29tcFRhZ30gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wVGFnIHsuLi50aGlzLnNrVHJhbnNQcm9wczJTZWxmKENvbXBUYWcpfVxuICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e0kxOE4uZ2V0KCdQbGVhc2Vfc2VsZWN0X2RhdGUnKX1cbiAgICAgICAgICAgICAgIHNpemU9e3RoaXMuc2tQcm9wKEFudGRDb21wLlNLX1BST1BTLlNJWkUpfVxuICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc2tWYWwoKSA/IG1vbWVudCh0aGlzLnNrVmFsKCksIFNLLkRFRkFVTFRfTU9NRU5UX0RBVEUpIDogdW5kZWZpbmVkfT5cbiAgICAgICAge3RoaXMuc2tUcmFuc1Byb3BzMkNoaWxkKCl9XG4gICAgICA8L0NvbXBUYWc+XG4gICAgKTtcbiAgfVxufVxuIl19