'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _AntdComp2 = require('../AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

var _SKCol = require('../col/SKCol');

var _SKCol2 = _interopRequireDefault(_SKCol);

var _SKFormItem = require('../form/SKFormItem');

var _SKFormItem2 = _interopRequireDefault(_SKFormItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormComp = function (_AntdComp) {
  _inherits(FormComp, _AntdComp);

  function FormComp() {
    var _ref;

    _classCallCheck(this, FormComp);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = FormComp.__proto__ || Object.getPrototypeOf(FormComp)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'FormComp';
    return _this;
  }

  _createClass(FormComp, [{
    key: 'render',
    value: function render() {
      var inFormItem = this.skProp(FormComp.SK_PROPS.IN_FROM_ITEM);
      var inFormRow = this.skProp(FormComp.SK_PROPS.IN_FROM_ROW);

      var errorObj = this.getErrors();
      var help = _lodash2.default.isEmpty(errorObj) ? _skJs.SK.EMPTY : _lodash2.default.join(errorObj.skVals(), _skJs.SK.CHAR_VERTICAL);
      var validateStatus = _lodash2.default.isEmpty(errorObj) ? _skJs.SK.EMPTY : _skJs.SK.STR_ERROR;

      if (inFormRow && inFormItem) {
        return _react2.default.createElement(
          _SKCol2.default,
          this.skTransProps2Self(_SKCol2.default),
          _react2.default.createElement(
            _SKFormItem2.default,
            _extends({}, this.skTransProps2Self(_SKFormItem2.default), { validateStatus: validateStatus, help: help }),
            this.renderFormComp()
          )
        );
      } else if (inFormRow && !inFormItem) {
        return _react2.default.createElement(
          _SKCol2.default,
          this.skTransProps2Self(_SKCol2.default),
          this.renderFormComp()
        );
      } else if (!inFormRow && inFormItem) {
        return _react2.default.createElement(
          _SKFormItem2.default,
          _extends({}, this.skTransProps2Self(_SKFormItem2.default), { validateStatus: validateStatus, help: help }),
          this.renderFormComp()
        );
      } else {
        return this.renderFormComp();
      }
    }
  }, {
    key: 'renderFormComp',
    value: function renderFormComp() {
      var _props = this.props,
          CompTag = _props.compTag,
          modelId = _props.modelId;


      return _react2.default.createElement(
        CompTag,
        _extends({}, this.skTransProps2Self(CompTag), { modelId: modelId }),
        this.skTransProps2Child()
      );
    }
  }]);

  return FormComp;
}(_AntdComp3.default);

FormComp.SK_PROPS = {
  IN_FROM_ITEM: 'inFormItem',
  IN_FROM_ROW: 'inFormRow'
};
FormComp.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, _SKCol2.default.defaultProps, _SKFormItem2.default.defaultProps, {});
FormComp.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _SKCol2.default.propTypes, _SKFormItem2.default.propTypes, {
  inFormItem: _propTypes2.default.bool,
  skInFormItem: _propTypes2.default.bool,
  inFormRow: _propTypes2.default.bool,
  skInFormRow: _propTypes2.default.bool
});
exports.default = FormComp;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9mb3JtLWNvbXAvRm9ybUNvbXAuanMiXSwibmFtZXMiOlsiRm9ybUNvbXAiLCJhcmdzIiwiY29tcE5hbWUiLCJpbkZvcm1JdGVtIiwic2tQcm9wIiwiU0tfUFJPUFMiLCJJTl9GUk9NX0lURU0iLCJpbkZvcm1Sb3ciLCJJTl9GUk9NX1JPVyIsImVycm9yT2JqIiwiZ2V0RXJyb3JzIiwiaGVscCIsImlzRW1wdHkiLCJFTVBUWSIsImpvaW4iLCJza1ZhbHMiLCJDSEFSX1ZFUlRJQ0FMIiwidmFsaWRhdGVTdGF0dXMiLCJTVFJfRVJST1IiLCJza1RyYW5zUHJvcHMyU2VsZiIsInJlbmRlckZvcm1Db21wIiwicHJvcHMiLCJDb21wVGFnIiwiY29tcFRhZyIsIm1vZGVsSWQiLCJza1RyYW5zUHJvcHMyQ2hpbGQiLCJkZWZhdWx0UHJvcHMiLCJhc3NpZ24iLCJwcm9wVHlwZXMiLCJib29sIiwic2tJbkZvcm1JdGVtIiwic2tJbkZvcm1Sb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7O0FBYW5CLHNCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSwrSUFDVkEsSUFEVTs7QUFFbkIsVUFBS0MsUUFBTCxHQUFnQixVQUFoQjtBQUZtQjtBQUdwQjs7Ozs2QkFFUTtBQUNQLFVBQUlDLGFBQWEsS0FBS0MsTUFBTCxDQUFZSixTQUFTSyxRQUFULENBQWtCQyxZQUE5QixDQUFqQjtBQUNBLFVBQUlDLFlBQVksS0FBS0gsTUFBTCxDQUFZSixTQUFTSyxRQUFULENBQWtCRyxXQUE5QixDQUFoQjs7QUFFQSxVQUFJQyxXQUFXLEtBQUtDLFNBQUwsRUFBZjtBQUNBLFVBQUlDLE9BQU8saUJBQUVDLE9BQUYsQ0FBVUgsUUFBVixJQUFzQixTQUFHSSxLQUF6QixHQUFpQyxpQkFBRUMsSUFBRixDQUFPTCxTQUFTTSxNQUFULEVBQVAsRUFBMEIsU0FBR0MsYUFBN0IsQ0FBNUM7QUFDQSxVQUFJQyxpQkFBaUIsaUJBQUVMLE9BQUYsQ0FBVUgsUUFBVixJQUFzQixTQUFHSSxLQUF6QixHQUFpQyxTQUFHSyxTQUF6RDs7QUFFQSxVQUFJWCxhQUFhSixVQUFqQixFQUE2QjtBQUMzQixlQUNFO0FBQUE7QUFBVyxlQUFLZ0IsaUJBQUwsaUJBQVg7QUFDRTtBQUFBO0FBQUEseUJBQWdCLEtBQUtBLGlCQUFMLHNCQUFoQixJQUFvRCxnQkFBZ0JGLGNBQXBFLEVBQW9GLE1BQU1OLElBQTFGO0FBQ0csaUJBQUtTLGNBQUw7QUFESDtBQURGLFNBREY7QUFPRCxPQVJELE1BUU8sSUFBSWIsYUFBYSxDQUFDSixVQUFsQixFQUE4QjtBQUNuQyxlQUNFO0FBQUE7QUFBVyxlQUFLZ0IsaUJBQUwsaUJBQVg7QUFDRyxlQUFLQyxjQUFMO0FBREgsU0FERjtBQUtELE9BTk0sTUFNQSxJQUFJLENBQUNiLFNBQUQsSUFBY0osVUFBbEIsRUFBOEI7QUFDbkMsZUFDRTtBQUFBO0FBQUEsdUJBQWdCLEtBQUtnQixpQkFBTCxzQkFBaEIsSUFBb0QsZ0JBQWdCRixjQUFwRSxFQUFvRixNQUFNTixJQUExRjtBQUNHLGVBQUtTLGNBQUw7QUFESCxTQURGO0FBS0QsT0FOTSxNQU1BO0FBQ0wsZUFBTyxLQUFLQSxjQUFMLEVBQVA7QUFDRDtBQUNGOzs7cUNBRWdCO0FBQUEsbUJBQ21CLEtBQUtDLEtBRHhCO0FBQUEsVUFDREMsT0FEQyxVQUNWQyxPQURVO0FBQUEsVUFDUUMsT0FEUixVQUNRQSxPQURSOzs7QUFHZixhQUNFO0FBQUMsZUFBRDtBQUFBLHFCQUFhLEtBQUtMLGlCQUFMLENBQXVCRyxPQUF2QixDQUFiLElBQThDLFNBQVNFLE9BQXZEO0FBQ0csYUFBS0Msa0JBQUw7QUFESCxPQURGO0FBS0Q7Ozs7OztBQTNEa0J6QixRLENBQ1pLLFEsR0FBVztBQUNoQkMsZ0JBQWMsWUFERTtBQUVoQkUsZUFBYTtBQUZHLEM7QUFEQ1IsUSxDQUtaMEIsWSxHQUFlLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNELFlBQXZCLEVBQXFDLGdCQUFNQSxZQUEzQyxFQUF5RCxxQkFBV0EsWUFBcEUsRUFBa0YsRUFBbEYsQztBQUxIMUIsUSxDQU1aNEIsUyxHQUFZLFNBQUdELE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNDLFNBQXZCLEVBQWtDLGdCQUFNQSxTQUF4QyxFQUFtRCxxQkFBV0EsU0FBOUQsRUFBeUU7QUFDMUZ6QixjQUFZLG9CQUFVMEIsSUFEb0U7QUFFMUZDLGdCQUFjLG9CQUFVRCxJQUZrRTtBQUcxRnRCLGFBQVcsb0JBQVVzQixJQUhxRTtBQUkxRkUsZUFBYSxvQkFBVUY7QUFKbUUsQ0FBekUsQztrQkFOQTdCLFEiLCJmaWxlIjoiY29tcC9hbnRkL2Zvcm0tY29tcC9Gb3JtQ29tcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U0t9IGZyb20gJ3NrLWpzJztcbmltcG9ydCBBbnRkQ29tcCBmcm9tICcuLi9BbnRkQ29tcCc7XG5pbXBvcnQgU0tDb2wgZnJvbSAnLi4vY29sL1NLQ29sJztcbmltcG9ydCBTS0Zvcm1JdGVtIGZyb20gJy4uL2Zvcm0vU0tGb3JtSXRlbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1Db21wIGV4dGVuZHMgQW50ZENvbXAge1xuICBzdGF0aWMgU0tfUFJPUFMgPSB7XG4gICAgSU5fRlJPTV9JVEVNOiAnaW5Gb3JtSXRlbScsXG4gICAgSU5fRlJPTV9ST1c6ICdpbkZvcm1Sb3cnXG4gIH07XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLmRlZmF1bHRQcm9wcywgU0tDb2wuZGVmYXVsdFByb3BzLCBTS0Zvcm1JdGVtLmRlZmF1bHRQcm9wcywge30pO1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5wcm9wVHlwZXMsIFNLQ29sLnByb3BUeXBlcywgU0tGb3JtSXRlbS5wcm9wVHlwZXMsIHtcbiAgICBpbkZvcm1JdGVtOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBza0luRm9ybUl0ZW06IFByb3BUeXBlcy5ib29sLFxuICAgIGluRm9ybVJvdzogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2tJbkZvcm1Sb3c6IFByb3BUeXBlcy5ib29sXG4gIH0pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLmNvbXBOYW1lID0gJ0Zvcm1Db21wJztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgaW5Gb3JtSXRlbSA9IHRoaXMuc2tQcm9wKEZvcm1Db21wLlNLX1BST1BTLklOX0ZST01fSVRFTSk7XG4gICAgbGV0IGluRm9ybVJvdyA9IHRoaXMuc2tQcm9wKEZvcm1Db21wLlNLX1BST1BTLklOX0ZST01fUk9XKTtcblxuICAgIGxldCBlcnJvck9iaiA9IHRoaXMuZ2V0RXJyb3JzKCk7XG4gICAgbGV0IGhlbHAgPSBfLmlzRW1wdHkoZXJyb3JPYmopID8gU0suRU1QVFkgOiBfLmpvaW4oZXJyb3JPYmouc2tWYWxzKCksIFNLLkNIQVJfVkVSVElDQUwpO1xuICAgIGxldCB2YWxpZGF0ZVN0YXR1cyA9IF8uaXNFbXB0eShlcnJvck9iaikgPyBTSy5FTVBUWSA6IFNLLlNUUl9FUlJPUjtcblxuICAgIGlmIChpbkZvcm1Sb3cgJiYgaW5Gb3JtSXRlbSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFNLQ29sIHsuLi50aGlzLnNrVHJhbnNQcm9wczJTZWxmKFNLQ29sKX0+XG4gICAgICAgICAgPFNLRm9ybUl0ZW0gey4uLnRoaXMuc2tUcmFuc1Byb3BzMlNlbGYoU0tGb3JtSXRlbSl9IHZhbGlkYXRlU3RhdHVzPXt2YWxpZGF0ZVN0YXR1c30gaGVscD17aGVscH0+XG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJGb3JtQ29tcCgpfVxuICAgICAgICAgIDwvU0tGb3JtSXRlbT5cbiAgICAgICAgPC9TS0NvbD5cbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChpbkZvcm1Sb3cgJiYgIWluRm9ybUl0ZW0pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTS0NvbCB7Li4udGhpcy5za1RyYW5zUHJvcHMyU2VsZihTS0NvbCl9PlxuICAgICAgICAgIHt0aGlzLnJlbmRlckZvcm1Db21wKCl9XG4gICAgICAgIDwvU0tDb2w+XG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoIWluRm9ybVJvdyAmJiBpbkZvcm1JdGVtKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U0tGb3JtSXRlbSB7Li4udGhpcy5za1RyYW5zUHJvcHMyU2VsZihTS0Zvcm1JdGVtKX0gdmFsaWRhdGVTdGF0dXM9e3ZhbGlkYXRlU3RhdHVzfSBoZWxwPXtoZWxwfT5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJGb3JtQ29tcCgpfVxuICAgICAgICA8L1NLRm9ybUl0ZW0+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJGb3JtQ29tcCgpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlckZvcm1Db21wKCkge1xuICAgIGxldCB7Y29tcFRhZzogQ29tcFRhZywgbW9kZWxJZH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wVGFnIHsuLi50aGlzLnNrVHJhbnNQcm9wczJTZWxmKENvbXBUYWcpfSBtb2RlbElkPXttb2RlbElkfT5cbiAgICAgICAge3RoaXMuc2tUcmFuc1Byb3BzMkNoaWxkKCl9XG4gICAgICA8L0NvbXBUYWc+XG4gICAgKTtcbiAgfVxufVxuIl19