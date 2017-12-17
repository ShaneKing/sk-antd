'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _AntdComp2 = require('../AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

var _SKCol = require('../col/SKCol');

var _SKCol2 = _interopRequireDefault(_SKCol);

var _SKFormItem = require('./SKFormItem');

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
      var inFormItem = this.skProp(_AntdComp3.default.SK_PROPS.IN_FROM_ITEM);
      var inFormRow = this.skProp(_AntdComp3.default.SK_PROPS.IN_FROM_ROW);

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

FormComp.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, _SKCol2.default.defaultProps, _SKFormItem2.default.defaultProps, {});
FormComp.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _SKCol2.default.propTypes, _SKFormItem2.default.propTypes, {});
exports.default = FormComp;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9mb3JtL0Zvcm1Db21wLmpzIl0sIm5hbWVzIjpbIkZvcm1Db21wIiwiYXJncyIsImNvbXBOYW1lIiwiaW5Gb3JtSXRlbSIsInNrUHJvcCIsIlNLX1BST1BTIiwiSU5fRlJPTV9JVEVNIiwiaW5Gb3JtUm93IiwiSU5fRlJPTV9ST1ciLCJlcnJvck9iaiIsImdldEVycm9ycyIsImhlbHAiLCJpc0VtcHR5IiwiRU1QVFkiLCJqb2luIiwic2tWYWxzIiwiQ0hBUl9WRVJUSUNBTCIsInZhbGlkYXRlU3RhdHVzIiwiU1RSX0VSUk9SIiwic2tUcmFuc1Byb3BzMlNlbGYiLCJyZW5kZXJGb3JtQ29tcCIsInByb3BzIiwiQ29tcFRhZyIsImNvbXBUYWciLCJtb2RlbElkIiwic2tUcmFuc1Byb3BzMkNoaWxkIiwiZGVmYXVsdFByb3BzIiwiYXNzaWduIiwicHJvcFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7QUFJbkIsc0JBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLCtJQUNWQSxJQURVOztBQUVuQixVQUFLQyxRQUFMLEdBQWdCLFVBQWhCO0FBRm1CO0FBR3BCOzs7OzZCQUVRO0FBQ1AsVUFBSUMsYUFBYSxLQUFLQyxNQUFMLENBQVksbUJBQVNDLFFBQVQsQ0FBa0JDLFlBQTlCLENBQWpCO0FBQ0EsVUFBSUMsWUFBWSxLQUFLSCxNQUFMLENBQVksbUJBQVNDLFFBQVQsQ0FBa0JHLFdBQTlCLENBQWhCOztBQUVBLFVBQUlDLFdBQVcsS0FBS0MsU0FBTCxFQUFmO0FBQ0EsVUFBSUMsT0FBTyxpQkFBRUMsT0FBRixDQUFVSCxRQUFWLElBQXNCLFNBQUdJLEtBQXpCLEdBQWlDLGlCQUFFQyxJQUFGLENBQU9MLFNBQVNNLE1BQVQsRUFBUCxFQUEwQixTQUFHQyxhQUE3QixDQUE1QztBQUNBLFVBQUlDLGlCQUFpQixpQkFBRUwsT0FBRixDQUFVSCxRQUFWLElBQXNCLFNBQUdJLEtBQXpCLEdBQWlDLFNBQUdLLFNBQXpEOztBQUVBLFVBQUlYLGFBQWFKLFVBQWpCLEVBQTZCO0FBQzNCLGVBQ0U7QUFBQTtBQUFXLGVBQUtnQixpQkFBTCxpQkFBWDtBQUNFO0FBQUE7QUFBQSx5QkFBZ0IsS0FBS0EsaUJBQUwsc0JBQWhCLElBQW9ELGdCQUFnQkYsY0FBcEUsRUFBb0YsTUFBTU4sSUFBMUY7QUFDRyxpQkFBS1MsY0FBTDtBQURIO0FBREYsU0FERjtBQU9ELE9BUkQsTUFRTyxJQUFJYixhQUFhLENBQUNKLFVBQWxCLEVBQThCO0FBQ25DLGVBQ0U7QUFBQTtBQUFXLGVBQUtnQixpQkFBTCxpQkFBWDtBQUNHLGVBQUtDLGNBQUw7QUFESCxTQURGO0FBS0QsT0FOTSxNQU1BLElBQUksQ0FBQ2IsU0FBRCxJQUFjSixVQUFsQixFQUE4QjtBQUNuQyxlQUNFO0FBQUE7QUFBQSx1QkFBZ0IsS0FBS2dCLGlCQUFMLHNCQUFoQixJQUFvRCxnQkFBZ0JGLGNBQXBFLEVBQW9GLE1BQU1OLElBQTFGO0FBQ0csZUFBS1MsY0FBTDtBQURILFNBREY7QUFLRCxPQU5NLE1BTUE7QUFDTCxlQUFPLEtBQUtBLGNBQUwsRUFBUDtBQUNEO0FBQ0Y7OztxQ0FFZ0I7QUFBQSxtQkFDbUIsS0FBS0MsS0FEeEI7QUFBQSxVQUNEQyxPQURDLFVBQ1ZDLE9BRFU7QUFBQSxVQUNRQyxPQURSLFVBQ1FBLE9BRFI7OztBQUdmLGFBQ0U7QUFBQyxlQUFEO0FBQUEscUJBQWEsS0FBS0wsaUJBQUwsQ0FBdUJHLE9BQXZCLENBQWIsSUFBOEMsU0FBU0UsT0FBdkQ7QUFDRyxhQUFLQyxrQkFBTDtBQURILE9BREY7QUFLRDs7Ozs7O0FBbERrQnpCLFEsQ0FDWjBCLFksR0FBZSxTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTRCxZQUF2QixFQUFxQyxnQkFBTUEsWUFBM0MsRUFBeUQscUJBQVdBLFlBQXBFLEVBQWtGLEVBQWxGLEM7QUFESDFCLFEsQ0FFWjRCLFMsR0FBWSxTQUFHRCxNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTQyxTQUF2QixFQUFrQyxnQkFBTUEsU0FBeEMsRUFBbUQscUJBQVdBLFNBQTlELEVBQXlFLEVBQXpFLEM7a0JBRkE1QixRIiwiZmlsZSI6ImNvbXAvYW50ZC9mb3JtL0Zvcm1Db21wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1NLfSBmcm9tICdzay1qcyc7XG5pbXBvcnQgQW50ZENvbXAgZnJvbSAnLi4vQW50ZENvbXAnO1xuaW1wb3J0IFNLQ29sIGZyb20gJy4uL2NvbC9TS0NvbCc7XG5pbXBvcnQgU0tGb3JtSXRlbSBmcm9tICcuL1NLRm9ybUl0ZW0nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtQ29tcCBleHRlbmRzIEFudGRDb21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAuZGVmYXVsdFByb3BzLCBTS0NvbC5kZWZhdWx0UHJvcHMsIFNLRm9ybUl0ZW0uZGVmYXVsdFByb3BzLCB7fSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLnByb3BUeXBlcywgU0tDb2wucHJvcFR5cGVzLCBTS0Zvcm1JdGVtLnByb3BUeXBlcywge30pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLmNvbXBOYW1lID0gJ0Zvcm1Db21wJztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgaW5Gb3JtSXRlbSA9IHRoaXMuc2tQcm9wKEFudGRDb21wLlNLX1BST1BTLklOX0ZST01fSVRFTSk7XG4gICAgbGV0IGluRm9ybVJvdyA9IHRoaXMuc2tQcm9wKEFudGRDb21wLlNLX1BST1BTLklOX0ZST01fUk9XKTtcblxuICAgIGxldCBlcnJvck9iaiA9IHRoaXMuZ2V0RXJyb3JzKCk7XG4gICAgbGV0IGhlbHAgPSBfLmlzRW1wdHkoZXJyb3JPYmopID8gU0suRU1QVFkgOiBfLmpvaW4oZXJyb3JPYmouc2tWYWxzKCksIFNLLkNIQVJfVkVSVElDQUwpO1xuICAgIGxldCB2YWxpZGF0ZVN0YXR1cyA9IF8uaXNFbXB0eShlcnJvck9iaikgPyBTSy5FTVBUWSA6IFNLLlNUUl9FUlJPUjtcblxuICAgIGlmIChpbkZvcm1Sb3cgJiYgaW5Gb3JtSXRlbSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFNLQ29sIHsuLi50aGlzLnNrVHJhbnNQcm9wczJTZWxmKFNLQ29sKX0+XG4gICAgICAgICAgPFNLRm9ybUl0ZW0gey4uLnRoaXMuc2tUcmFuc1Byb3BzMlNlbGYoU0tGb3JtSXRlbSl9IHZhbGlkYXRlU3RhdHVzPXt2YWxpZGF0ZVN0YXR1c30gaGVscD17aGVscH0+XG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJGb3JtQ29tcCgpfVxuICAgICAgICAgIDwvU0tGb3JtSXRlbT5cbiAgICAgICAgPC9TS0NvbD5cbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChpbkZvcm1Sb3cgJiYgIWluRm9ybUl0ZW0pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTS0NvbCB7Li4udGhpcy5za1RyYW5zUHJvcHMyU2VsZihTS0NvbCl9PlxuICAgICAgICAgIHt0aGlzLnJlbmRlckZvcm1Db21wKCl9XG4gICAgICAgIDwvU0tDb2w+XG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoIWluRm9ybVJvdyAmJiBpbkZvcm1JdGVtKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U0tGb3JtSXRlbSB7Li4udGhpcy5za1RyYW5zUHJvcHMyU2VsZihTS0Zvcm1JdGVtKX0gdmFsaWRhdGVTdGF0dXM9e3ZhbGlkYXRlU3RhdHVzfSBoZWxwPXtoZWxwfT5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJGb3JtQ29tcCgpfVxuICAgICAgICA8L1NLRm9ybUl0ZW0+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJGb3JtQ29tcCgpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlckZvcm1Db21wKCkge1xuICAgIGxldCB7Y29tcFRhZzogQ29tcFRhZywgbW9kZWxJZH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wVGFnIHsuLi50aGlzLnNrVHJhbnNQcm9wczJTZWxmKENvbXBUYWcpfSBtb2RlbElkPXttb2RlbElkfT5cbiAgICAgICAge3RoaXMuc2tUcmFuc1Byb3BzMkNoaWxkKCl9XG4gICAgICA8L0NvbXBUYWc+XG4gICAgKTtcbiAgfVxufVxuIl19