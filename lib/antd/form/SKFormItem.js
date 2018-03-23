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
          wrapperCol: wrapperCol
        }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGQvZm9ybS9TS0Zvcm1JdGVtLmpzIl0sIm5hbWVzIjpbIkl0ZW0iLCJkZWZhdWx0UHJvcHMiLCJhc3NpZ24iLCJjb2xvbiIsImhhc0ZlZWRiYWNrIiwicmVxdWlyZWQiLCJwcm9wVHlwZXMiLCJib29sIiwiZXh0cmEiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJub2RlIiwiaGVscCIsImxhYmVsIiwibGFiZWxDb2wiLCJvYmplY3QiLCJ2YWxpZGF0ZVN0YXR1cyIsIndyYXBwZXJDb2wiLCJTS0Zvcm1JdGVtIiwiYXJncyIsImNvbXBOYW1lIiwiQ29tcFRhZyIsInByb3BzIiwiY29tcFRhZyIsInNrUHJvcCIsIlNLX1BST1BTIiwiTEFCRUxfQ09MIiwiV1JBUFBFUl9DT0wiLCJza1RyYW5zUHJvcHMyU2VsZiIsInNrVHJhbnNQcm9wczJDaGlsZCIsImZvcm1MYWJlbENvbCIsInNrRm9ybUxhYmVsQ29sIiwiZm9ybVdyYXBwZXJDb2wiLCJza0Zvcm1XcmFwcGVyQ29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLGVBQUtBLElBQUwsQ0FBVUMsWUFBVixHQUF5QixTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjO0FBQ3JDQyxTQUFPLElBRDhCO0FBRXJDQyxlQUFhLEtBRndCO0FBR3JDQyxZQUFVO0FBSDJCLENBQWQsRUFJdEIscUJBQVdKLFlBSlcsRUFJRyxlQUFLRCxJQUFMLENBQVVDLFlBSmIsRUFJMkIsRUFKM0IsQ0FBekI7QUFLQSxlQUFLRCxJQUFMLENBQVVNLFNBQVYsR0FBc0IsU0FBR0osTUFBSCxDQUFVLEVBQVYsRUFBYztBQUNsQztBQUNBQyxTQUFPLG9CQUFVSSxJQUZpQjtBQUdsQ0MsU0FBTyxvQkFBVUMsU0FBVixDQUFvQixDQUN6QixvQkFBVUMsTUFEZSxFQUV6QixvQkFBVUMsSUFGZSxDQUFwQixDQUgyQjtBQU9sQ1AsZUFBYSxvQkFBVUcsSUFQVztBQVFsQ0ssUUFBTSxvQkFBVUgsU0FBVixDQUFvQixDQUN4QixvQkFBVUMsTUFEYyxFQUV4QixvQkFBVUMsSUFGYyxDQUFwQixDQVI0QjtBQVlsQ0UsU0FBTyxvQkFBVUosU0FBVixDQUFvQixDQUN6QixvQkFBVUMsTUFEZSxFQUV6QixvQkFBVUMsSUFGZSxDQUFwQixDQVoyQjtBQWdCbENHLFlBQVUsb0JBQVVDLE1BaEJjO0FBaUJsQ1YsWUFBVSxvQkFBVUUsSUFqQmM7QUFrQmxDUyxrQkFBZ0Isb0JBQVVOLE1BbEJRO0FBbUJsQ08sY0FBWSxvQkFBVUY7QUFuQlksQ0FBZCxFQW9CbkIscUJBQVdULFNBcEJRLEVBb0JHLGVBQUtOLElBQUwsQ0FBVU0sU0FwQmIsRUFvQndCLEVBcEJ4QixDQUF0Qjs7SUFzQnFCWSxVOzs7QUFlbkIsd0JBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLG1KQUNWQSxJQURVOztBQUVuQixVQUFLQyxRQUFMLEdBQWdCLFlBQWhCO0FBRm1CO0FBR3BCOzs7OzZCQUVRO0FBQUEsVUFDVUMsT0FEVixHQUNzQixLQUFLQyxLQUQzQixDQUNDQyxPQUREOztBQUVQLFVBQU1ULFdBQVcsS0FBS1UsTUFBTCxDQUFZTixXQUFXTyxRQUFYLENBQW9CQyxTQUFoQyxDQUFqQjtBQUNBLFVBQU1ULGFBQWEsS0FBS08sTUFBTCxDQUFZTixXQUFXTyxRQUFYLENBQW9CRSxXQUFoQyxDQUFuQjs7QUFFQSxhQUNFO0FBQUMsZUFBRDtBQUFBLHFCQUNNLEtBQUtDLGlCQUFMLENBQXVCUCxPQUF2QixDQUROO0FBRUUsb0JBQVVQLFFBRlo7QUFHRSxzQkFBWUc7QUFIZDtBQUtHLGFBQUtZLGtCQUFMO0FBTEgsT0FERjtBQVNEOzs7Ozs7QUFsQ2tCWCxVLENBQ1pPLFEsR0FBVztBQUNoQkMsYUFBVyxVQURLO0FBRWhCQyxlQUFhO0FBRkcsQztBQURDVCxVLENBS1pqQixZLEdBQWUsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0QsWUFBdkIsRUFBcUMsZUFBS0QsSUFBTCxDQUFVQyxZQUEvQyxFQUE2RDtBQUNqRnNCLFdBQVMsZUFBS3ZCO0FBRG1FLENBQTdELEM7QUFMSGtCLFUsQ0FRWlosUyxHQUFZLFNBQUdKLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNJLFNBQXZCLEVBQWtDLGVBQUtOLElBQUwsQ0FBVU0sU0FBNUMsRUFBdUQ7QUFDeEV3QixnQkFBYyxvQkFBVWYsTUFEZ0Q7QUFFeEVnQixrQkFBZ0Isb0JBQVVoQixNQUY4QztBQUd4RWlCLGtCQUFnQixvQkFBVWpCLE1BSDhDO0FBSXhFa0Isb0JBQWtCLG9CQUFVbEI7QUFKNEMsQ0FBdkQsQztrQkFSQUcsVSIsImZpbGUiOiJhbnRkL2Zvcm0vU0tGb3JtSXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm0gfSBmcm9tICdhbnRkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU0sgfSBmcm9tICdzay1qcyc7XG5pbXBvcnQgT3JpZ2luRm9ybSBmcm9tICcuL09yaWdpbkZvcm0nO1xuaW1wb3J0IEFudGRDb21wIGZyb20gJy4uL0FudGRDb21wJztcblxuRm9ybS5JdGVtLmRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwge1xuICBjb2xvbjogdHJ1ZSxcbiAgaGFzRmVlZGJhY2s6IGZhbHNlLFxuICByZXF1aXJlZDogZmFsc2UsXG59LCBPcmlnaW5Gb3JtLmRlZmF1bHRQcm9wcywgRm9ybS5JdGVtLmRlZmF1bHRQcm9wcywge30pO1xuRm9ybS5JdGVtLnByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwge1xuICAvL2h0dHBzOi8vYW50LmRlc2lnbi9jb21wb25lbnRzL2Zvcm0tY24vI0Zvcm0uSXRlbVxuICBjb2xvbjogUHJvcFR5cGVzLmJvb2wsXG4gIGV4dHJhOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5ub2RlLFxuICBdKSxcbiAgaGFzRmVlZGJhY2s6IFByb3BUeXBlcy5ib29sLFxuICBoZWxwOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5ub2RlLFxuICBdKSxcbiAgbGFiZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm5vZGUsXG4gIF0pLFxuICBsYWJlbENvbDogUHJvcFR5cGVzLm9iamVjdCxcbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuICB2YWxpZGF0ZVN0YXR1czogUHJvcFR5cGVzLnN0cmluZyxcbiAgd3JhcHBlckNvbDogUHJvcFR5cGVzLm9iamVjdCxcbn0sIE9yaWdpbkZvcm0ucHJvcFR5cGVzLCBGb3JtLkl0ZW0ucHJvcFR5cGVzLCB7fSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNLRm9ybUl0ZW0gZXh0ZW5kcyBBbnRkQ29tcCB7XG4gIHN0YXRpYyBTS19QUk9QUyA9IHtcbiAgICBMQUJFTF9DT0w6ICdsYWJlbENvbCcsXG4gICAgV1JBUFBFUl9DT0w6ICd3cmFwcGVyQ29sJyxcbiAgfTtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAuZGVmYXVsdFByb3BzLCBGb3JtLkl0ZW0uZGVmYXVsdFByb3BzLCB7XG4gICAgY29tcFRhZzogRm9ybS5JdGVtLFxuICB9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAucHJvcFR5cGVzLCBGb3JtLkl0ZW0ucHJvcFR5cGVzLCB7XG4gICAgZm9ybUxhYmVsQ29sOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHNrRm9ybUxhYmVsQ29sOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGZvcm1XcmFwcGVyQ29sOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHNrRm9ybVdyYXBwZXJDb2w6IFByb3BUeXBlcy5vYmplY3QsXG4gIH0pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLmNvbXBOYW1lID0gJ1NLRm9ybUl0ZW0nO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY29tcFRhZzogQ29tcFRhZyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBsYWJlbENvbCA9IHRoaXMuc2tQcm9wKFNLRm9ybUl0ZW0uU0tfUFJPUFMuTEFCRUxfQ09MKTtcbiAgICBjb25zdCB3cmFwcGVyQ29sID0gdGhpcy5za1Byb3AoU0tGb3JtSXRlbS5TS19QUk9QUy5XUkFQUEVSX0NPTCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBUYWdcbiAgICAgICAgey4uLnRoaXMuc2tUcmFuc1Byb3BzMlNlbGYoQ29tcFRhZyl9XG4gICAgICAgIGxhYmVsQ29sPXtsYWJlbENvbH1cbiAgICAgICAgd3JhcHBlckNvbD17d3JhcHBlckNvbH1cbiAgICAgID5cbiAgICAgICAge3RoaXMuc2tUcmFuc1Byb3BzMkNoaWxkKCl9XG4gICAgICA8L0NvbXBUYWc+XG4gICAgKTtcbiAgfVxufVxuIl19