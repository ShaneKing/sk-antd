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

var _AntdComp2 = require('../AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

      labelCol = labelCol || this.skProp(SKFormItem.SK_PROPS.FORM_LABEL_COL);
      wrapperCol = wrapperCol || this.skProp(SKFormItem.SK_PROPS.FORM_WRAPPER_COL);

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

SKFormItem.SK_PROPS = {
  FORM_LABEL_COL: 'formLabelCol',
  FORM_WRAPPER_COL: 'formWrapperCol'
};
SKFormItem.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, {
  compTag: _form2.default.Item
});
SKFormItem.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, {
  formLabelCol: _propTypes2.default.object,
  skFormLabelCol: _propTypes2.default.object,
  formWrapperCol: _propTypes2.default.object,
  skFormWrapperCol: _propTypes2.default.object
});
exports.default = SKFormItem;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9mb3JtL1NLRm9ybUl0ZW0uanMiXSwibmFtZXMiOlsiU0tGb3JtSXRlbSIsImFyZ3MiLCJjb21wTmFtZSIsInByb3BzIiwiQ29tcFRhZyIsImNvbXBUYWciLCJsYWJlbENvbCIsIndyYXBwZXJDb2wiLCJza1Byb3AiLCJTS19QUk9QUyIsIkZPUk1fTEFCRUxfQ09MIiwiRk9STV9XUkFQUEVSX0NPTCIsInNrVHJhbnNQcm9wczJTZWxmIiwic2tUcmFuc1Byb3BzMkNoaWxkIiwiZGVmYXVsdFByb3BzIiwiYXNzaWduIiwiSXRlbSIsInByb3BUeXBlcyIsImZvcm1MYWJlbENvbCIsIm9iamVjdCIsInNrRm9ybUxhYmVsQ29sIiwiZm9ybVdyYXBwZXJDb2wiLCJza0Zvcm1XcmFwcGVyQ29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFU7OztBQWVuQix3QkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsbUpBQ1ZBLElBRFU7O0FBRW5CLFVBQUtDLFFBQUwsR0FBZ0IsWUFBaEI7QUFGbUI7QUFHcEI7Ozs7NkJBRVE7QUFBQSxtQkFDd0MsS0FBS0MsS0FEN0M7QUFBQSxVQUNPQyxPQURQLFVBQ0ZDLE9BREU7QUFBQSxVQUNnQkMsUUFEaEIsVUFDZ0JBLFFBRGhCO0FBQUEsVUFDMEJDLFVBRDFCLFVBQzBCQSxVQUQxQjs7QUFFUEQsaUJBQVdBLFlBQVksS0FBS0UsTUFBTCxDQUFZUixXQUFXUyxRQUFYLENBQW9CQyxjQUFoQyxDQUF2QjtBQUNBSCxtQkFBYUEsY0FBYyxLQUFLQyxNQUFMLENBQVlSLFdBQVdTLFFBQVgsQ0FBb0JFLGdCQUFoQyxDQUEzQjs7QUFFQSxhQUNFO0FBQUMsZUFBRDtBQUFBLHFCQUFhLEtBQUtDLGlCQUFMLENBQXVCUixPQUF2QixDQUFiO0FBQ1Msb0JBQVVFLFFBRG5CO0FBRVMsc0JBQVlDLFVBRnJCO0FBR0csYUFBS00sa0JBQUw7QUFISCxPQURGO0FBT0Q7Ozs7OztBQWhDa0JiLFUsQ0FDWlMsUSxHQUFXO0FBQ2hCQyxrQkFBZ0IsY0FEQTtBQUVoQkMsb0JBQWtCO0FBRkYsQztBQURDWCxVLENBS1pjLFksR0FBZSxTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTRCxZQUF2QixFQUFxQztBQUN6RFQsV0FBUyxlQUFLVztBQUQyQyxDQUFyQyxDO0FBTEhoQixVLENBUVppQixTLEdBQVksU0FBR0YsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0UsU0FBdkIsRUFBa0M7QUFDbkRDLGdCQUFjLG9CQUFVQyxNQUQyQjtBQUVuREMsa0JBQWdCLG9CQUFVRCxNQUZ5QjtBQUduREUsa0JBQWdCLG9CQUFVRixNQUh5QjtBQUluREcsb0JBQWtCLG9CQUFVSDtBQUp1QixDQUFsQyxDO2tCQVJBbkIsVSIsImZpbGUiOiJjb21wL2FudGQvZm9ybS9TS0Zvcm1JdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGb3JtfSBmcm9tICdhbnRkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTS30gZnJvbSAnc2stanMnO1xuaW1wb3J0IEFudGRDb21wIGZyb20gJy4uL0FudGRDb21wJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tGb3JtSXRlbSBleHRlbmRzIEFudGRDb21wIHtcbiAgc3RhdGljIFNLX1BST1BTID0ge1xuICAgIEZPUk1fTEFCRUxfQ09MOiAnZm9ybUxhYmVsQ29sJyxcbiAgICBGT1JNX1dSQVBQRVJfQ09MOiAnZm9ybVdyYXBwZXJDb2wnXG4gIH07XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLmRlZmF1bHRQcm9wcywge1xuICAgIGNvbXBUYWc6IEZvcm0uSXRlbVxuICB9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAucHJvcFR5cGVzLCB7XG4gICAgZm9ybUxhYmVsQ29sOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHNrRm9ybUxhYmVsQ29sOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGZvcm1XcmFwcGVyQ29sOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHNrRm9ybVdyYXBwZXJDb2w6IFByb3BUeXBlcy5vYmplY3RcbiAgfSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnU0tGb3JtSXRlbSc7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtjb21wVGFnOiBDb21wVGFnLCBsYWJlbENvbCwgd3JhcHBlckNvbH0gPSB0aGlzLnByb3BzO1xuICAgIGxhYmVsQ29sID0gbGFiZWxDb2wgfHwgdGhpcy5za1Byb3AoU0tGb3JtSXRlbS5TS19QUk9QUy5GT1JNX0xBQkVMX0NPTCk7XG4gICAgd3JhcHBlckNvbCA9IHdyYXBwZXJDb2wgfHwgdGhpcy5za1Byb3AoU0tGb3JtSXRlbS5TS19QUk9QUy5GT1JNX1dSQVBQRVJfQ09MKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcFRhZyB7Li4udGhpcy5za1RyYW5zUHJvcHMyU2VsZihDb21wVGFnKX1cbiAgICAgICAgICAgICAgIGxhYmVsQ29sPXtsYWJlbENvbH1cbiAgICAgICAgICAgICAgIHdyYXBwZXJDb2w9e3dyYXBwZXJDb2x9PlxuICAgICAgICB7dGhpcy5za1RyYW5zUHJvcHMyQ2hpbGQoKX1cbiAgICAgIDwvQ29tcFRhZz5cbiAgICApO1xuICB9XG59XG4iXX0=