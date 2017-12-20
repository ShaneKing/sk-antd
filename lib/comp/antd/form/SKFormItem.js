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

var _OriginForm = require('./OriginForm');

var _OriginForm2 = _interopRequireDefault(_OriginForm);

var _AntdComp2 = require('../AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_form2.default.Item.defaultProps = _skJs.SK.assign({}, {
  colon: true,
  hasFeedback: false,
  required: false
}, _OriginForm2.default.defaultProps, _form2.default.Item.defaultProps, {});
_form2.default.Item.propTypes = _skJs.SK.assign({}, {
  //https://ant.design/components/form-cn/#Form.Item
  colon: _propTypes2.default.bool,
  extra: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  hasFeedback: _propTypes2.default.bool,
  help: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  labelCol: _propTypes2.default.object,
  required: _propTypes2.default.bool,
  validateStatus: _propTypes2.default.string,
  wrapperCol: _propTypes2.default.object
}, _OriginForm2.default.propTypes, _form2.default.Item.propTypes, {});

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
SKFormItem.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, _form2.default.Item.defaultProps, {
  compTag: _form2.default.Item
});
SKFormItem.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _form2.default.Item.propTypes, {
  formLabelCol: _propTypes2.default.object,
  skFormLabelCol: _propTypes2.default.object,
  formWrapperCol: _propTypes2.default.object,
  skFormWrapperCol: _propTypes2.default.object
});
exports.default = SKFormItem;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9mb3JtL1NLRm9ybUl0ZW0uanMiXSwibmFtZXMiOlsiSXRlbSIsImRlZmF1bHRQcm9wcyIsImFzc2lnbiIsImNvbG9uIiwiaGFzRmVlZGJhY2siLCJyZXF1aXJlZCIsInByb3BUeXBlcyIsImJvb2wiLCJleHRyYSIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm5vZGUiLCJoZWxwIiwibGFiZWwiLCJsYWJlbENvbCIsIm9iamVjdCIsInZhbGlkYXRlU3RhdHVzIiwid3JhcHBlckNvbCIsIlNLRm9ybUl0ZW0iLCJhcmdzIiwiY29tcE5hbWUiLCJwcm9wcyIsIkNvbXBUYWciLCJjb21wVGFnIiwic2tQcm9wIiwiU0tfUFJPUFMiLCJGT1JNX0xBQkVMX0NPTCIsIkZPUk1fV1JBUFBFUl9DT0wiLCJza1RyYW5zUHJvcHMyU2VsZiIsInNrVHJhbnNQcm9wczJDaGlsZCIsImZvcm1MYWJlbENvbCIsInNrRm9ybUxhYmVsQ29sIiwiZm9ybVdyYXBwZXJDb2wiLCJza0Zvcm1XcmFwcGVyQ29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLGVBQUtBLElBQUwsQ0FBVUMsWUFBVixHQUF5QixTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjO0FBQ3JDQyxTQUFPLElBRDhCO0FBRXJDQyxlQUFhLEtBRndCO0FBR3JDQyxZQUFVO0FBSDJCLENBQWQsRUFJdEIscUJBQVdKLFlBSlcsRUFJRyxlQUFLRCxJQUFMLENBQVVDLFlBSmIsRUFJMkIsRUFKM0IsQ0FBekI7QUFLQSxlQUFLRCxJQUFMLENBQVVNLFNBQVYsR0FBc0IsU0FBR0osTUFBSCxDQUFVLEVBQVYsRUFBYztBQUNsQztBQUNBQyxTQUFPLG9CQUFVSSxJQUZpQjtBQUdsQ0MsU0FBTyxvQkFBVUMsU0FBVixDQUFvQixDQUN6QixvQkFBVUMsTUFEZSxFQUV6QixvQkFBVUMsSUFGZSxDQUFwQixDQUgyQjtBQU9sQ1AsZUFBYSxvQkFBVUcsSUFQVztBQVFsQ0ssUUFBTSxvQkFBVUgsU0FBVixDQUFvQixDQUN4QixvQkFBVUMsTUFEYyxFQUV4QixvQkFBVUMsSUFGYyxDQUFwQixDQVI0QjtBQVlsQ0UsU0FBTyxvQkFBVUosU0FBVixDQUFvQixDQUN6QixvQkFBVUMsTUFEZSxFQUV6QixvQkFBVUMsSUFGZSxDQUFwQixDQVoyQjtBQWdCbENHLFlBQVUsb0JBQVVDLE1BaEJjO0FBaUJsQ1YsWUFBVSxvQkFBVUUsSUFqQmM7QUFrQmxDUyxrQkFBZ0Isb0JBQVVOLE1BbEJRO0FBbUJsQ08sY0FBWSxvQkFBVUY7QUFuQlksQ0FBZCxFQW9CbkIscUJBQVdULFNBcEJRLEVBb0JHLGVBQUtOLElBQUwsQ0FBVU0sU0FwQmIsRUFvQndCLEVBcEJ4QixDQUF0Qjs7SUFzQnFCWSxVOzs7QUFlbkIsd0JBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLG1KQUNWQSxJQURVOztBQUVuQixVQUFLQyxRQUFMLEdBQWdCLFlBQWhCO0FBRm1CO0FBR3BCOzs7OzZCQUVRO0FBQUEsbUJBQ3dDLEtBQUtDLEtBRDdDO0FBQUEsVUFDT0MsT0FEUCxVQUNGQyxPQURFO0FBQUEsVUFDZ0JULFFBRGhCLFVBQ2dCQSxRQURoQjtBQUFBLFVBQzBCRyxVQUQxQixVQUMwQkEsVUFEMUI7O0FBRVBILGlCQUFXQSxZQUFZLEtBQUtVLE1BQUwsQ0FBWU4sV0FBV08sUUFBWCxDQUFvQkMsY0FBaEMsQ0FBdkI7QUFDQVQsbUJBQWFBLGNBQWMsS0FBS08sTUFBTCxDQUFZTixXQUFXTyxRQUFYLENBQW9CRSxnQkFBaEMsQ0FBM0I7O0FBRUEsYUFDRTtBQUFDLGVBQUQ7QUFBQSxxQkFBYSxLQUFLQyxpQkFBTCxDQUF1Qk4sT0FBdkIsQ0FBYjtBQUNTLG9CQUFVUixRQURuQjtBQUVTLHNCQUFZRyxVQUZyQjtBQUdHLGFBQUtZLGtCQUFMO0FBSEgsT0FERjtBQU9EOzs7Ozs7QUFoQ2tCWCxVLENBQ1pPLFEsR0FBVztBQUNoQkMsa0JBQWdCLGNBREE7QUFFaEJDLG9CQUFrQjtBQUZGLEM7QUFEQ1QsVSxDQUtaakIsWSxHQUFlLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNELFlBQXZCLEVBQXFDLGVBQUtELElBQUwsQ0FBVUMsWUFBL0MsRUFBNkQ7QUFDakZzQixXQUFTLGVBQUt2QjtBQURtRSxDQUE3RCxDO0FBTEhrQixVLENBUVpaLFMsR0FBWSxTQUFHSixNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTSSxTQUF2QixFQUFrQyxlQUFLTixJQUFMLENBQVVNLFNBQTVDLEVBQXVEO0FBQ3hFd0IsZ0JBQWMsb0JBQVVmLE1BRGdEO0FBRXhFZ0Isa0JBQWdCLG9CQUFVaEIsTUFGOEM7QUFHeEVpQixrQkFBZ0Isb0JBQVVqQixNQUg4QztBQUl4RWtCLG9CQUFrQixvQkFBVWxCO0FBSjRDLENBQXZELEM7a0JBUkFHLFUiLCJmaWxlIjoiY29tcC9hbnRkL2Zvcm0vU0tGb3JtSXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Rm9ybX0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U0t9IGZyb20gJ3NrLWpzJztcbmltcG9ydCBPcmlnaW5Gb3JtIGZyb20gJy4vT3JpZ2luRm9ybSc7XG5pbXBvcnQgQW50ZENvbXAgZnJvbSAnLi4vQW50ZENvbXAnO1xuXG5Gb3JtLkl0ZW0uZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCB7XG4gIGNvbG9uOiB0cnVlLFxuICBoYXNGZWVkYmFjazogZmFsc2UsXG4gIHJlcXVpcmVkOiBmYWxzZVxufSwgT3JpZ2luRm9ybS5kZWZhdWx0UHJvcHMsIEZvcm0uSXRlbS5kZWZhdWx0UHJvcHMsIHt9KTtcbkZvcm0uSXRlbS5wcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIHtcbiAgLy9odHRwczovL2FudC5kZXNpZ24vY29tcG9uZW50cy9mb3JtLWNuLyNGb3JtLkl0ZW1cbiAgY29sb246IFByb3BUeXBlcy5ib29sLFxuICBleHRyYTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubm9kZVxuICBdKSxcbiAgaGFzRmVlZGJhY2s6IFByb3BUeXBlcy5ib29sLFxuICBoZWxwOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5ub2RlXG4gIF0pLFxuICBsYWJlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubm9kZVxuICBdKSxcbiAgbGFiZWxDb2w6IFByb3BUeXBlcy5vYmplY3QsXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgdmFsaWRhdGVTdGF0dXM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHdyYXBwZXJDb2w6IFByb3BUeXBlcy5vYmplY3Rcbn0sIE9yaWdpbkZvcm0ucHJvcFR5cGVzLCBGb3JtLkl0ZW0ucHJvcFR5cGVzLCB7fSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNLRm9ybUl0ZW0gZXh0ZW5kcyBBbnRkQ29tcCB7XG4gIHN0YXRpYyBTS19QUk9QUyA9IHtcbiAgICBGT1JNX0xBQkVMX0NPTDogJ2Zvcm1MYWJlbENvbCcsXG4gICAgRk9STV9XUkFQUEVSX0NPTDogJ2Zvcm1XcmFwcGVyQ29sJ1xuICB9O1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5kZWZhdWx0UHJvcHMsIEZvcm0uSXRlbS5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBGb3JtLkl0ZW1cbiAgfSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLnByb3BUeXBlcywgRm9ybS5JdGVtLnByb3BUeXBlcywge1xuICAgIGZvcm1MYWJlbENvbDogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBza0Zvcm1MYWJlbENvbDogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBmb3JtV3JhcHBlckNvbDogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBza0Zvcm1XcmFwcGVyQ29sOiBQcm9wVHlwZXMub2JqZWN0XG4gIH0pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLmNvbXBOYW1lID0gJ1NLRm9ybUl0ZW0nO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7Y29tcFRhZzogQ29tcFRhZywgbGFiZWxDb2wsIHdyYXBwZXJDb2x9ID0gdGhpcy5wcm9wcztcbiAgICBsYWJlbENvbCA9IGxhYmVsQ29sIHx8IHRoaXMuc2tQcm9wKFNLRm9ybUl0ZW0uU0tfUFJPUFMuRk9STV9MQUJFTF9DT0wpO1xuICAgIHdyYXBwZXJDb2wgPSB3cmFwcGVyQ29sIHx8IHRoaXMuc2tQcm9wKFNLRm9ybUl0ZW0uU0tfUFJPUFMuRk9STV9XUkFQUEVSX0NPTCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBUYWcgey4uLnRoaXMuc2tUcmFuc1Byb3BzMlNlbGYoQ29tcFRhZyl9XG4gICAgICAgICAgICAgICBsYWJlbENvbD17bGFiZWxDb2x9XG4gICAgICAgICAgICAgICB3cmFwcGVyQ29sPXt3cmFwcGVyQ29sfT5cbiAgICAgICAge3RoaXMuc2tUcmFuc1Byb3BzMkNoaWxkKCl9XG4gICAgICA8L0NvbXBUYWc+XG4gICAgKTtcbiAgfVxufVxuIl19