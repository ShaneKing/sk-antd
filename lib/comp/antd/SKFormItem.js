'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/form/style');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _AntdComp2 = require('./AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_form2.default.Item.defaultProps = _skJs.SK.assign({}, {
  colon: true,
  hasFeedback: false,
  required: false
}, _form2.default.defaultProps, _form2.default.Item.defaultProps, {});

_form2.default.Item.propTypes = _skJs.SK.assign({}, {
  colon: _propTypes2.default.bool,
  extra: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  hasFeedback: _propTypes2.default.bool,
  help: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  labelCol: _propTypes2.default.object,
  required: _propTypes2.default.bool,
  validateStatus: _propTypes2.default.string,
  wrapperCol: _propTypes2.default.object
}, _form2.default.propTypes, _form2.default.Item.propTypes, {});

var SKFormItem = function (_AntdComp) {
  _inherits(SKFormItem, _AntdComp);

  function SKFormItem() {
    var _ref;

    _classCallCheck(this, SKFormItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SKFormItem.__proto__ || Object.getPrototypeOf(SKFormItem)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'SKFormItem';
    return _this;
  }

  _createClass(SKFormItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          CompTag = _props.compTag,
          labelCol = _props.labelCol,
          wrapperCol = _props.wrapperCol;

      labelCol = labelCol || this.skProp(_AntdComp3.default.SK_PROPS.FORM_LABEL_COL);
      wrapperCol = wrapperCol || this.skProp(_AntdComp3.default.SK_PROPS.FORM_WRAPPER_COL);

      return _react2.default.createElement(
        CompTag,
        _extends({}, this.skTransProps2Self(CompTag), {
          labelCol: labelCol,
          wrapperCol: wrapperCol }),
        this.skTransProps2Child()
      );
    }
  }]);

  return SKFormItem;
}(_AntdComp3.default);

SKFormItem.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, _form2.default.Item.defaultProps, {
  compTag: _form2.default.Item
});
SKFormItem.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _form2.default.Item.propTypes, {});
exports.default = SKFormItem;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9TS0Zvcm1JdGVtLmpzIl0sIm5hbWVzIjpbIkl0ZW0iLCJkZWZhdWx0UHJvcHMiLCJhc3NpZ24iLCJjb2xvbiIsImhhc0ZlZWRiYWNrIiwicmVxdWlyZWQiLCJwcm9wVHlwZXMiLCJib29sIiwiZXh0cmEiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJub2RlIiwiaGVscCIsImxhYmVsIiwibGFiZWxDb2wiLCJvYmplY3QiLCJ2YWxpZGF0ZVN0YXR1cyIsIndyYXBwZXJDb2wiLCJTS0Zvcm1JdGVtIiwiYXJncyIsImNvbXBOYW1lIiwicHJvcHMiLCJDb21wVGFnIiwiY29tcFRhZyIsInNrUHJvcCIsIlNLX1BST1BTIiwiRk9STV9MQUJFTF9DT0wiLCJGT1JNX1dSQVBQRVJfQ09MIiwic2tUcmFuc1Byb3BzMlNlbGYiLCJza1RyYW5zUHJvcHMyQ2hpbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLGVBQUtBLElBQUwsQ0FBVUMsWUFBVixHQUF5QixTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjO0FBQ3JDQyxTQUFPLElBRDhCO0FBRXJDQyxlQUFhLEtBRndCO0FBR3JDQyxZQUFVO0FBSDJCLENBQWQsRUFJdEIsZUFBS0osWUFKaUIsRUFJSCxlQUFLRCxJQUFMLENBQVVDLFlBSlAsRUFJcUIsRUFKckIsQ0FBekI7O0FBTUEsZUFBS0QsSUFBTCxDQUFVTSxTQUFWLEdBQXNCLFNBQUdKLE1BQUgsQ0FBVSxFQUFWLEVBQWM7QUFDbENDLFNBQU8sb0JBQVVJLElBRGlCO0FBRWxDQyxTQUFPLG9CQUFVQyxTQUFWLENBQW9CLENBQ3pCLG9CQUFVQyxNQURlLEVBRXpCLG9CQUFVQyxJQUZlLENBQXBCLENBRjJCO0FBTWxDUCxlQUFhLG9CQUFVRyxJQU5XO0FBT2xDSyxRQUFNLG9CQUFVSCxTQUFWLENBQW9CLENBQ3hCLG9CQUFVQyxNQURjLEVBRXhCLG9CQUFVQyxJQUZjLENBQXBCLENBUDRCO0FBV2xDRSxTQUFPLG9CQUFVSixTQUFWLENBQW9CLENBQ3pCLG9CQUFVQyxNQURlLEVBRXpCLG9CQUFVQyxJQUZlLENBQXBCLENBWDJCO0FBZWxDRyxZQUFVLG9CQUFVQyxNQWZjO0FBZ0JsQ1YsWUFBVSxvQkFBVUUsSUFoQmM7QUFpQmxDUyxrQkFBZ0Isb0JBQVVOLE1BakJRO0FBa0JsQ08sY0FBWSxvQkFBVUY7QUFsQlksQ0FBZCxFQW1CbkIsZUFBS1QsU0FuQmMsRUFtQkgsZUFBS04sSUFBTCxDQUFVTSxTQW5CUCxFQW1Ca0IsRUFuQmxCLENBQXRCOztJQXFCcUJZLFU7OztBQU9uQix3QkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsbUpBQ1ZBLElBRFU7O0FBRW5CLFVBQUtDLFFBQUwsR0FBZ0IsWUFBaEI7QUFGbUI7QUFHcEI7Ozs7NkJBRVE7QUFBQSxtQkFDd0MsS0FBS0MsS0FEN0M7QUFBQSxVQUNPQyxPQURQLFVBQ0ZDLE9BREU7QUFBQSxVQUNnQlQsUUFEaEIsVUFDZ0JBLFFBRGhCO0FBQUEsVUFDMEJHLFVBRDFCLFVBQzBCQSxVQUQxQjs7QUFFUEgsaUJBQVdBLFlBQVksS0FBS1UsTUFBTCxDQUFZLG1CQUFTQyxRQUFULENBQWtCQyxjQUE5QixDQUF2QjtBQUNBVCxtQkFBYUEsY0FBYyxLQUFLTyxNQUFMLENBQVksbUJBQVNDLFFBQVQsQ0FBa0JFLGdCQUE5QixDQUEzQjs7QUFFQSxhQUNFO0FBQUMsZUFBRDtBQUFBLHFCQUFhLEtBQUtDLGlCQUFMLENBQXVCTixPQUF2QixDQUFiO0FBQ1Msb0JBQVVSLFFBRG5CO0FBRVMsc0JBQVlHLFVBRnJCO0FBR0csYUFBS1ksa0JBQUw7QUFISCxPQURGO0FBT0Q7Ozs7OztBQXhCa0JYLFUsQ0FDWmpCLFksR0FBZSxTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTRCxZQUF2QixFQUFxQyxlQUFLRCxJQUFMLENBQVVDLFlBQS9DLEVBQTZEO0FBQ2pGc0IsV0FBUyxlQUFLdkI7QUFEbUUsQ0FBN0QsQztBQURIa0IsVSxDQUlaWixTLEdBQVksU0FBR0osTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0ksU0FBdkIsRUFBa0MsZUFBS04sSUFBTCxDQUFVTSxTQUE1QyxFQUF1RCxFQUF2RCxDO2tCQUpBWSxVIiwiZmlsZSI6ImNvbXAvYW50ZC9TS0Zvcm1JdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGb3JtfSBmcm9tICdhbnRkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTS30gZnJvbSAnc2stanMnO1xuaW1wb3J0IEFudGRDb21wIGZyb20gJy4vQW50ZENvbXAnO1xuXG5Gb3JtLkl0ZW0uZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCB7XG4gIGNvbG9uOiB0cnVlLFxuICBoYXNGZWVkYmFjazogZmFsc2UsXG4gIHJlcXVpcmVkOiBmYWxzZVxufSwgRm9ybS5kZWZhdWx0UHJvcHMsIEZvcm0uSXRlbS5kZWZhdWx0UHJvcHMsIHt9KTtcblxuRm9ybS5JdGVtLnByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwge1xuICBjb2xvbjogUHJvcFR5cGVzLmJvb2wsXG4gIGV4dHJhOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5ub2RlXG4gIF0pLFxuICBoYXNGZWVkYmFjazogUHJvcFR5cGVzLmJvb2wsXG4gIGhlbHA6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm5vZGVcbiAgXSksXG4gIGxhYmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5ub2RlXG4gIF0pLFxuICBsYWJlbENvbDogUHJvcFR5cGVzLm9iamVjdCxcbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuICB2YWxpZGF0ZVN0YXR1czogUHJvcFR5cGVzLnN0cmluZyxcbiAgd3JhcHBlckNvbDogUHJvcFR5cGVzLm9iamVjdFxufSwgRm9ybS5wcm9wVHlwZXMsIEZvcm0uSXRlbS5wcm9wVHlwZXMsIHt9KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tGb3JtSXRlbSBleHRlbmRzIEFudGRDb21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAuZGVmYXVsdFByb3BzLCBGb3JtLkl0ZW0uZGVmYXVsdFByb3BzLCB7XG4gICAgY29tcFRhZzogRm9ybS5JdGVtXG4gIH0pO1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5wcm9wVHlwZXMsIEZvcm0uSXRlbS5wcm9wVHlwZXMsIHt9KTtcblxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLmNvbXBOYW1lID0gJ1NLRm9ybUl0ZW0nO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7Y29tcFRhZzogQ29tcFRhZywgbGFiZWxDb2wsIHdyYXBwZXJDb2x9ID0gdGhpcy5wcm9wcztcbiAgICBsYWJlbENvbCA9IGxhYmVsQ29sIHx8IHRoaXMuc2tQcm9wKEFudGRDb21wLlNLX1BST1BTLkZPUk1fTEFCRUxfQ09MKTtcbiAgICB3cmFwcGVyQ29sID0gd3JhcHBlckNvbCB8fCB0aGlzLnNrUHJvcChBbnRkQ29tcC5TS19QUk9QUy5GT1JNX1dSQVBQRVJfQ09MKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcFRhZyB7Li4udGhpcy5za1RyYW5zUHJvcHMyU2VsZihDb21wVGFnKX1cbiAgICAgICAgICAgICAgIGxhYmVsQ29sPXtsYWJlbENvbH1cbiAgICAgICAgICAgICAgIHdyYXBwZXJDb2w9e3dyYXBwZXJDb2x9PlxuICAgICAgICB7dGhpcy5za1RyYW5zUHJvcHMyQ2hpbGQoKX1cbiAgICAgIDwvQ29tcFRhZz5cbiAgICApO1xuICB9XG59XG4iXX0=