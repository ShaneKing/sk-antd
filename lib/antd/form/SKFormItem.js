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
      var CompTag = this.props.compTag;

      var labelCol = this.skProp(SKFormItem.SK_PROPS.LABEL_COL);
      var wrapperCol = this.skProp(SKFormItem.SK_PROPS.WRAPPER_COL);

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
  LABEL_COL: 'labelCol',
  WRAPPER_COL: 'wrapperCol'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGQvZm9ybS9TS0Zvcm1JdGVtLmpzIl0sIm5hbWVzIjpbIkl0ZW0iLCJkZWZhdWx0UHJvcHMiLCJhc3NpZ24iLCJjb2xvbiIsImhhc0ZlZWRiYWNrIiwicmVxdWlyZWQiLCJwcm9wVHlwZXMiLCJib29sIiwiZXh0cmEiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJub2RlIiwiaGVscCIsImxhYmVsIiwibGFiZWxDb2wiLCJvYmplY3QiLCJ2YWxpZGF0ZVN0YXR1cyIsIndyYXBwZXJDb2wiLCJTS0Zvcm1JdGVtIiwiYXJncyIsImNvbXBOYW1lIiwiQ29tcFRhZyIsInByb3BzIiwiY29tcFRhZyIsInNrUHJvcCIsIlNLX1BST1BTIiwiTEFCRUxfQ09MIiwiV1JBUFBFUl9DT0wiLCJza1RyYW5zUHJvcHMyU2VsZiIsInNrVHJhbnNQcm9wczJDaGlsZCIsImZvcm1MYWJlbENvbCIsInNrRm9ybUxhYmVsQ29sIiwiZm9ybVdyYXBwZXJDb2wiLCJza0Zvcm1XcmFwcGVyQ29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLGVBQUtBLElBQUwsQ0FBVUMsWUFBVixHQUF5QixTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjO0FBQ3JDQyxTQUFPLElBRDhCO0FBRXJDQyxlQUFhLEtBRndCO0FBR3JDQyxZQUFVO0FBSDJCLENBQWQsRUFJdEIscUJBQVdKLFlBSlcsRUFJRyxlQUFLRCxJQUFMLENBQVVDLFlBSmIsRUFJMkIsRUFKM0IsQ0FBekI7QUFLQSxlQUFLRCxJQUFMLENBQVVNLFNBQVYsR0FBc0IsU0FBR0osTUFBSCxDQUFVLEVBQVYsRUFBYztBQUNsQztBQUNBQyxTQUFPLG9CQUFVSSxJQUZpQjtBQUdsQ0MsU0FBTyxvQkFBVUMsU0FBVixDQUFvQixDQUN6QixvQkFBVUMsTUFEZSxFQUV6QixvQkFBVUMsSUFGZSxDQUFwQixDQUgyQjtBQU9sQ1AsZUFBYSxvQkFBVUcsSUFQVztBQVFsQ0ssUUFBTSxvQkFBVUgsU0FBVixDQUFvQixDQUN4QixvQkFBVUMsTUFEYyxFQUV4QixvQkFBVUMsSUFGYyxDQUFwQixDQVI0QjtBQVlsQ0UsU0FBTyxvQkFBVUosU0FBVixDQUFvQixDQUN6QixvQkFBVUMsTUFEZSxFQUV6QixvQkFBVUMsSUFGZSxDQUFwQixDQVoyQjtBQWdCbENHLFlBQVUsb0JBQVVDLE1BaEJjO0FBaUJsQ1YsWUFBVSxvQkFBVUUsSUFqQmM7QUFrQmxDUyxrQkFBZ0Isb0JBQVVOLE1BbEJRO0FBbUJsQ08sY0FBWSxvQkFBVUY7QUFuQlksQ0FBZCxFQW9CbkIscUJBQVdULFNBcEJRLEVBb0JHLGVBQUtOLElBQUwsQ0FBVU0sU0FwQmIsRUFvQndCLEVBcEJ4QixDQUF0Qjs7SUFzQnFCWSxVOzs7QUFlbkIsd0JBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLG1KQUNWQSxJQURVOztBQUVuQixVQUFLQyxRQUFMLEdBQWdCLFlBQWhCO0FBRm1CO0FBR3BCOzs7OzZCQUVRO0FBQUEsVUFDT0MsT0FEUCxHQUNrQixLQUFLQyxLQUR2QixDQUNGQyxPQURFOztBQUVQLFVBQUlULFdBQVcsS0FBS1UsTUFBTCxDQUFZTixXQUFXTyxRQUFYLENBQW9CQyxTQUFoQyxDQUFmO0FBQ0EsVUFBSVQsYUFBYSxLQUFLTyxNQUFMLENBQVlOLFdBQVdPLFFBQVgsQ0FBb0JFLFdBQWhDLENBQWpCOztBQUVBLGFBQ0U7QUFBQyxlQUFEO0FBQUEscUJBQWEsS0FBS0MsaUJBQUwsQ0FBdUJQLE9BQXZCLENBQWI7QUFDUyxvQkFBVVAsUUFEbkI7QUFFUyxzQkFBWUcsVUFGckI7QUFHRyxhQUFLWSxrQkFBTDtBQUhILE9BREY7QUFPRDs7Ozs7O0FBaENrQlgsVSxDQUNaTyxRLEdBQVc7QUFDaEJDLGFBQVcsVUFESztBQUVoQkMsZUFBYTtBQUZHLEM7QUFEQ1QsVSxDQUtaakIsWSxHQUFlLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNELFlBQXZCLEVBQXFDLGVBQUtELElBQUwsQ0FBVUMsWUFBL0MsRUFBNkQ7QUFDakZzQixXQUFTLGVBQUt2QjtBQURtRSxDQUE3RCxDO0FBTEhrQixVLENBUVpaLFMsR0FBWSxTQUFHSixNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTSSxTQUF2QixFQUFrQyxlQUFLTixJQUFMLENBQVVNLFNBQTVDLEVBQXVEO0FBQ3hFd0IsZ0JBQWMsb0JBQVVmLE1BRGdEO0FBRXhFZ0Isa0JBQWdCLG9CQUFVaEIsTUFGOEM7QUFHeEVpQixrQkFBZ0Isb0JBQVVqQixNQUg4QztBQUl4RWtCLG9CQUFrQixvQkFBVWxCO0FBSjRDLENBQXZELEM7a0JBUkFHLFUiLCJmaWxlIjoiYW50ZC9mb3JtL1NLRm9ybUl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Zvcm19IGZyb20gJ2FudGQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1NLfSBmcm9tICdzay1qcyc7XG5pbXBvcnQgT3JpZ2luRm9ybSBmcm9tICcuL09yaWdpbkZvcm0nO1xuaW1wb3J0IEFudGRDb21wIGZyb20gJy4uL0FudGRDb21wJztcblxuRm9ybS5JdGVtLmRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwge1xuICBjb2xvbjogdHJ1ZSxcbiAgaGFzRmVlZGJhY2s6IGZhbHNlLFxuICByZXF1aXJlZDogZmFsc2Vcbn0sIE9yaWdpbkZvcm0uZGVmYXVsdFByb3BzLCBGb3JtLkl0ZW0uZGVmYXVsdFByb3BzLCB7fSk7XG5Gb3JtLkl0ZW0ucHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCB7XG4gIC8vaHR0cHM6Ly9hbnQuZGVzaWduL2NvbXBvbmVudHMvZm9ybS1jbi8jRm9ybS5JdGVtXG4gIGNvbG9uOiBQcm9wVHlwZXMuYm9vbCxcbiAgZXh0cmE6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm5vZGVcbiAgXSksXG4gIGhhc0ZlZWRiYWNrOiBQcm9wVHlwZXMuYm9vbCxcbiAgaGVscDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubm9kZVxuICBdKSxcbiAgbGFiZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm5vZGVcbiAgXSksXG4gIGxhYmVsQ29sOiBQcm9wVHlwZXMub2JqZWN0LFxuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHZhbGlkYXRlU3RhdHVzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB3cmFwcGVyQ29sOiBQcm9wVHlwZXMub2JqZWN0XG59LCBPcmlnaW5Gb3JtLnByb3BUeXBlcywgRm9ybS5JdGVtLnByb3BUeXBlcywge30pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS0Zvcm1JdGVtIGV4dGVuZHMgQW50ZENvbXAge1xuICBzdGF0aWMgU0tfUFJPUFMgPSB7XG4gICAgTEFCRUxfQ09MOiAnbGFiZWxDb2wnLFxuICAgIFdSQVBQRVJfQ09MOiAnd3JhcHBlckNvbCdcbiAgfTtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAuZGVmYXVsdFByb3BzLCBGb3JtLkl0ZW0uZGVmYXVsdFByb3BzLCB7XG4gICAgY29tcFRhZzogRm9ybS5JdGVtXG4gIH0pO1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5wcm9wVHlwZXMsIEZvcm0uSXRlbS5wcm9wVHlwZXMsIHtcbiAgICBmb3JtTGFiZWxDb2w6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgc2tGb3JtTGFiZWxDb2w6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgZm9ybVdyYXBwZXJDb2w6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgc2tGb3JtV3JhcHBlckNvbDogUHJvcFR5cGVzLm9iamVjdFxuICB9KTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5jb21wTmFtZSA9ICdTS0Zvcm1JdGVtJztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge2NvbXBUYWc6IENvbXBUYWd9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgbGFiZWxDb2wgPSB0aGlzLnNrUHJvcChTS0Zvcm1JdGVtLlNLX1BST1BTLkxBQkVMX0NPTCk7XG4gICAgbGV0IHdyYXBwZXJDb2wgPSB0aGlzLnNrUHJvcChTS0Zvcm1JdGVtLlNLX1BST1BTLldSQVBQRVJfQ09MKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcFRhZyB7Li4udGhpcy5za1RyYW5zUHJvcHMyU2VsZihDb21wVGFnKX1cbiAgICAgICAgICAgICAgIGxhYmVsQ29sPXtsYWJlbENvbH1cbiAgICAgICAgICAgICAgIHdyYXBwZXJDb2w9e3dyYXBwZXJDb2x9PlxuICAgICAgICB7dGhpcy5za1RyYW5zUHJvcHMyQ2hpbGQoKX1cbiAgICAgIDwvQ29tcFRhZz5cbiAgICApO1xuICB9XG59XG4iXX0=