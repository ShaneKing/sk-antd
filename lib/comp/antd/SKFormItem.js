'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style2 = require('antd/lib/form/style');

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _skJs2 = _interopRequireDefault(_skJs);

var _Comp2 = require('../../util/Comp');

var _Comp3 = _interopRequireDefault(_Comp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SKFormItem = function (_Comp) {
  _inherits(SKFormItem, _Comp);

  function SKFormItem() {
    var _ref;

    _classCallCheck(this, SKFormItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(this, (_ref = SKFormItem.__proto__ || Object.getPrototypeOf(SKFormItem)).call.apply(_ref, [this].concat(args)));
  }

  _createClass(SKFormItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          CompTag = _props.compTag,
          labelCol = _props.labelCol,
          wrapperCol = _props.wrapperCol;

      labelCol = labelCol || this.skProp(_Comp3.default.SK_PROPS.FORM_LABEL_COL);
      wrapperCol = wrapperCol || this.skProp(_Comp3.default.SK_PROPS.FORM_WRAPPER_COL);

      return _react2.default.createElement(
        CompTag,
        _extends({}, this.compValidProps(CompTag), {
          labelCol: labelCol,
          wrapperCol: wrapperCol }),
        this.skPropsTrans()
      );
    }
  }]);

  return SKFormItem;
}(_Comp3.default);

SKFormItem.defaultProps = {
  compTag: _form2.default.Item
};
SKFormItem.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _form2.default.Item.propTypes, {});
exports.default = SKFormItem;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9TS0Zvcm1JdGVtLmpzIl0sIm5hbWVzIjpbIlNLRm9ybUl0ZW0iLCJhcmdzIiwicHJvcHMiLCJDb21wVGFnIiwiY29tcFRhZyIsImxhYmVsQ29sIiwid3JhcHBlckNvbCIsInNrUHJvcCIsIlNLX1BST1BTIiwiRk9STV9MQUJFTF9DT0wiLCJGT1JNX1dSQVBQRVJfQ09MIiwiY29tcFZhbGlkUHJvcHMiLCJza1Byb3BzVHJhbnMiLCJkZWZhdWx0UHJvcHMiLCJJdGVtIiwicHJvcFR5cGVzIiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFU7OztBQU1uQix3QkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsOElBQ1ZBLElBRFU7QUFFcEI7Ozs7NkJBRVE7QUFBQSxtQkFDd0MsS0FBS0MsS0FEN0M7QUFBQSxVQUNPQyxPQURQLFVBQ0ZDLE9BREU7QUFBQSxVQUNnQkMsUUFEaEIsVUFDZ0JBLFFBRGhCO0FBQUEsVUFDMEJDLFVBRDFCLFVBQzBCQSxVQUQxQjs7QUFFUEQsaUJBQVdBLFlBQVksS0FBS0UsTUFBTCxDQUFZLGVBQUtDLFFBQUwsQ0FBY0MsY0FBMUIsQ0FBdkI7QUFDQUgsbUJBQWFBLGNBQWMsS0FBS0MsTUFBTCxDQUFZLGVBQUtDLFFBQUwsQ0FBY0UsZ0JBQTFCLENBQTNCOztBQUVBLGFBQ0U7QUFBQyxlQUFEO0FBQUEscUJBQWEsS0FBS0MsY0FBTCxDQUFvQlIsT0FBcEIsQ0FBYjtBQUNTLG9CQUFVRSxRQURuQjtBQUVTLHNCQUFZQyxVQUZyQjtBQUdHLGFBQUtNLFlBQUw7QUFISCxPQURGO0FBT0Q7Ozs7OztBQXRCa0JaLFUsQ0FDWmEsWSxHQUFlO0FBQ3BCVCxXQUFTLGVBQUtVO0FBRE0sQztBQURIZCxVLENBSVplLFMsR0FBWSxlQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLGVBQUtELFNBQW5CLEVBQThCLGVBQUtELElBQUwsQ0FBVUMsU0FBeEMsRUFBbUQsRUFBbkQsQztrQkFKQWYsVSIsImZpbGUiOiJjb21wL2FudGQvU0tGb3JtSXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Rm9ybX0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNLIGZyb20gJ3NrLWpzJztcbmltcG9ydCBDb21wIGZyb20gJy4uLy4uL3V0aWwvQ29tcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNLRm9ybUl0ZW0gZXh0ZW5kcyBDb21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb21wVGFnOiBGb3JtLkl0ZW1cbiAgfTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQ29tcC5wcm9wVHlwZXMsIEZvcm0uSXRlbS5wcm9wVHlwZXMsIHt9KTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtjb21wVGFnOiBDb21wVGFnLCBsYWJlbENvbCwgd3JhcHBlckNvbH0gPSB0aGlzLnByb3BzO1xuICAgIGxhYmVsQ29sID0gbGFiZWxDb2wgfHwgdGhpcy5za1Byb3AoQ29tcC5TS19QUk9QUy5GT1JNX0xBQkVMX0NPTCk7XG4gICAgd3JhcHBlckNvbCA9IHdyYXBwZXJDb2wgfHwgdGhpcy5za1Byb3AoQ29tcC5TS19QUk9QUy5GT1JNX1dSQVBQRVJfQ09MKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcFRhZyB7Li4udGhpcy5jb21wVmFsaWRQcm9wcyhDb21wVGFnKX1cbiAgICAgICAgICAgICAgIGxhYmVsQ29sPXtsYWJlbENvbH1cbiAgICAgICAgICAgICAgIHdyYXBwZXJDb2w9e3dyYXBwZXJDb2x9PlxuICAgICAgICB7dGhpcy5za1Byb3BzVHJhbnMoKX1cbiAgICAgIDwvQ29tcFRhZz5cbiAgICApO1xuICB9XG59XG4iXX0=