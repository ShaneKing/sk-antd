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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9mb3JtL1NLRm9ybUl0ZW0uanMiXSwibmFtZXMiOlsiSXRlbSIsImRlZmF1bHRQcm9wcyIsImFzc2lnbiIsImNvbG9uIiwiaGFzRmVlZGJhY2siLCJyZXF1aXJlZCIsInByb3BUeXBlcyIsImJvb2wiLCJleHRyYSIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm5vZGUiLCJoZWxwIiwibGFiZWwiLCJsYWJlbENvbCIsIm9iamVjdCIsInZhbGlkYXRlU3RhdHVzIiwid3JhcHBlckNvbCIsIlNLRm9ybUl0ZW0iLCJhcmdzIiwiY29tcE5hbWUiLCJwcm9wcyIsIkNvbXBUYWciLCJjb21wVGFnIiwic2tQcm9wIiwiU0tfUFJPUFMiLCJGT1JNX0xBQkVMX0NPTCIsIkZPUk1fV1JBUFBFUl9DT0wiLCJza1RyYW5zUHJvcHMyU2VsZiIsInNrVHJhbnNQcm9wczJDaGlsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxlQUFLQSxJQUFMLENBQVVDLFlBQVYsR0FBeUIsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYztBQUNyQ0MsU0FBTyxJQUQ4QjtBQUVyQ0MsZUFBYSxLQUZ3QjtBQUdyQ0MsWUFBVTtBQUgyQixDQUFkLEVBSXRCLHFCQUFXSixZQUpXLEVBSUcsZUFBS0QsSUFBTCxDQUFVQyxZQUpiLEVBSTJCLEVBSjNCLENBQXpCO0FBS0EsZUFBS0QsSUFBTCxDQUFVTSxTQUFWLEdBQXNCLFNBQUdKLE1BQUgsQ0FBVSxFQUFWLEVBQWM7QUFDbEM7QUFDQUMsU0FBTyxvQkFBVUksSUFGaUI7QUFHbENDLFNBQU8sb0JBQVVDLFNBQVYsQ0FBb0IsQ0FDekIsb0JBQVVDLE1BRGUsRUFFekIsb0JBQVVDLElBRmUsQ0FBcEIsQ0FIMkI7QUFPbENQLGVBQWEsb0JBQVVHLElBUFc7QUFRbENLLFFBQU0sb0JBQVVILFNBQVYsQ0FBb0IsQ0FDeEIsb0JBQVVDLE1BRGMsRUFFeEIsb0JBQVVDLElBRmMsQ0FBcEIsQ0FSNEI7QUFZbENFLFNBQU8sb0JBQVVKLFNBQVYsQ0FBb0IsQ0FDekIsb0JBQVVDLE1BRGUsRUFFekIsb0JBQVVDLElBRmUsQ0FBcEIsQ0FaMkI7QUFnQmxDRyxZQUFVLG9CQUFVQyxNQWhCYztBQWlCbENWLFlBQVUsb0JBQVVFLElBakJjO0FBa0JsQ1Msa0JBQWdCLG9CQUFVTixNQWxCUTtBQW1CbENPLGNBQVksb0JBQVVGO0FBbkJZLENBQWQsRUFvQm5CLHFCQUFXVCxTQXBCUSxFQW9CRyxlQUFLTixJQUFMLENBQVVNLFNBcEJiLEVBb0J3QixFQXBCeEIsQ0FBdEI7O0lBc0JxQlksVTs7O0FBT25CLHdCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSxtSkFDVkEsSUFEVTs7QUFFbkIsVUFBS0MsUUFBTCxHQUFnQixZQUFoQjtBQUZtQjtBQUdwQjs7Ozs2QkFFUTtBQUFBLG1CQUN3QyxLQUFLQyxLQUQ3QztBQUFBLFVBQ09DLE9BRFAsVUFDRkMsT0FERTtBQUFBLFVBQ2dCVCxRQURoQixVQUNnQkEsUUFEaEI7QUFBQSxVQUMwQkcsVUFEMUIsVUFDMEJBLFVBRDFCOztBQUVQSCxpQkFBV0EsWUFBWSxLQUFLVSxNQUFMLENBQVksbUJBQVNDLFFBQVQsQ0FBa0JDLGNBQTlCLENBQXZCO0FBQ0FULG1CQUFhQSxjQUFjLEtBQUtPLE1BQUwsQ0FBWSxtQkFBU0MsUUFBVCxDQUFrQkUsZ0JBQTlCLENBQTNCOztBQUVBLGFBQ0U7QUFBQyxlQUFEO0FBQUEscUJBQWEsS0FBS0MsaUJBQUwsQ0FBdUJOLE9BQXZCLENBQWI7QUFDUyxvQkFBVVIsUUFEbkI7QUFFUyxzQkFBWUcsVUFGckI7QUFHRyxhQUFLWSxrQkFBTDtBQUhILE9BREY7QUFPRDs7Ozs7O0FBeEJrQlgsVSxDQUNaakIsWSxHQUFlLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNELFlBQXZCLEVBQXFDLGVBQUtELElBQUwsQ0FBVUMsWUFBL0MsRUFBNkQ7QUFDakZzQixXQUFTLGVBQUt2QjtBQURtRSxDQUE3RCxDO0FBREhrQixVLENBSVpaLFMsR0FBWSxTQUFHSixNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTSSxTQUF2QixFQUFrQyxlQUFLTixJQUFMLENBQVVNLFNBQTVDLEVBQXVELEVBQXZELEM7a0JBSkFZLFUiLCJmaWxlIjoiY29tcC9hbnRkL2Zvcm0vU0tGb3JtSXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Rm9ybX0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U0t9IGZyb20gJ3NrLWpzJztcbmltcG9ydCBPcmlnaW5Gb3JtIGZyb20gJy4vT3JpZ2luRm9ybSc7XG5pbXBvcnQgQW50ZENvbXAgZnJvbSAnLi4vQW50ZENvbXAnO1xuXG5Gb3JtLkl0ZW0uZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCB7XG4gIGNvbG9uOiB0cnVlLFxuICBoYXNGZWVkYmFjazogZmFsc2UsXG4gIHJlcXVpcmVkOiBmYWxzZVxufSwgT3JpZ2luRm9ybS5kZWZhdWx0UHJvcHMsIEZvcm0uSXRlbS5kZWZhdWx0UHJvcHMsIHt9KTtcbkZvcm0uSXRlbS5wcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIHtcbiAgLy9odHRwczovL2FudC5kZXNpZ24vY29tcG9uZW50cy9mb3JtLWNuLyNGb3JtLkl0ZW1cbiAgY29sb246IFByb3BUeXBlcy5ib29sLFxuICBleHRyYTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubm9kZVxuICBdKSxcbiAgaGFzRmVlZGJhY2s6IFByb3BUeXBlcy5ib29sLFxuICBoZWxwOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5ub2RlXG4gIF0pLFxuICBsYWJlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubm9kZVxuICBdKSxcbiAgbGFiZWxDb2w6IFByb3BUeXBlcy5vYmplY3QsXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgdmFsaWRhdGVTdGF0dXM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHdyYXBwZXJDb2w6IFByb3BUeXBlcy5vYmplY3Rcbn0sIE9yaWdpbkZvcm0ucHJvcFR5cGVzLCBGb3JtLkl0ZW0ucHJvcFR5cGVzLCB7fSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNLRm9ybUl0ZW0gZXh0ZW5kcyBBbnRkQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLmRlZmF1bHRQcm9wcywgRm9ybS5JdGVtLmRlZmF1bHRQcm9wcywge1xuICAgIGNvbXBUYWc6IEZvcm0uSXRlbVxuICB9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAucHJvcFR5cGVzLCBGb3JtLkl0ZW0ucHJvcFR5cGVzLCB7fSk7XG5cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5jb21wTmFtZSA9ICdTS0Zvcm1JdGVtJztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge2NvbXBUYWc6IENvbXBUYWcsIGxhYmVsQ29sLCB3cmFwcGVyQ29sfSA9IHRoaXMucHJvcHM7XG4gICAgbGFiZWxDb2wgPSBsYWJlbENvbCB8fCB0aGlzLnNrUHJvcChBbnRkQ29tcC5TS19QUk9QUy5GT1JNX0xBQkVMX0NPTCk7XG4gICAgd3JhcHBlckNvbCA9IHdyYXBwZXJDb2wgfHwgdGhpcy5za1Byb3AoQW50ZENvbXAuU0tfUFJPUFMuRk9STV9XUkFQUEVSX0NPTCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBUYWcgey4uLnRoaXMuc2tUcmFuc1Byb3BzMlNlbGYoQ29tcFRhZyl9XG4gICAgICAgICAgICAgICBsYWJlbENvbD17bGFiZWxDb2x9XG4gICAgICAgICAgICAgICB3cmFwcGVyQ29sPXt3cmFwcGVyQ29sfT5cbiAgICAgICAge3RoaXMuc2tUcmFuc1Byb3BzMkNoaWxkKCl9XG4gICAgICA8L0NvbXBUYWc+XG4gICAgKTtcbiAgfVxufVxuIl19