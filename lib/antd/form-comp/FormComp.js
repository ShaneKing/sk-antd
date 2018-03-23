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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGQvZm9ybS1jb21wL0Zvcm1Db21wLmpzIl0sIm5hbWVzIjpbIkZvcm1Db21wIiwiYXJncyIsImNvbXBOYW1lIiwiaW5Gb3JtSXRlbSIsInNrUHJvcCIsIlNLX1BST1BTIiwiSU5fRlJPTV9JVEVNIiwiaW5Gb3JtUm93IiwiSU5fRlJPTV9ST1ciLCJlcnJvck9iaiIsImdldEVycm9ycyIsImhlbHAiLCJpc0VtcHR5IiwiRU1QVFkiLCJqb2luIiwic2tWYWxzIiwiQ0hBUl9WRVJUSUNBTCIsInZhbGlkYXRlU3RhdHVzIiwiU1RSX0VSUk9SIiwic2tUcmFuc1Byb3BzMlNlbGYiLCJyZW5kZXJGb3JtQ29tcCIsInByb3BzIiwiQ29tcFRhZyIsImNvbXBUYWciLCJtb2RlbElkIiwic2tUcmFuc1Byb3BzMkNoaWxkIiwiZGVmYXVsdFByb3BzIiwiYXNzaWduIiwicHJvcFR5cGVzIiwiYm9vbCIsInNrSW5Gb3JtSXRlbSIsInNrSW5Gb3JtUm93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFE7OztBQWFuQixzQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsK0lBQ1ZBLElBRFU7O0FBRW5CLFVBQUtDLFFBQUwsR0FBZ0IsVUFBaEI7QUFGbUI7QUFHcEI7Ozs7NkJBRVE7QUFDUCxVQUFNQyxhQUFhLEtBQUtDLE1BQUwsQ0FBWUosU0FBU0ssUUFBVCxDQUFrQkMsWUFBOUIsQ0FBbkI7QUFDQSxVQUFNQyxZQUFZLEtBQUtILE1BQUwsQ0FBWUosU0FBU0ssUUFBVCxDQUFrQkcsV0FBOUIsQ0FBbEI7O0FBRUEsVUFBTUMsV0FBVyxLQUFLQyxTQUFMLEVBQWpCO0FBQ0EsVUFBTUMsT0FBTyxpQkFBRUMsT0FBRixDQUFVSCxRQUFWLElBQXNCLFNBQUdJLEtBQXpCLEdBQWlDLGlCQUFFQyxJQUFGLENBQU9MLFNBQVNNLE1BQVQsRUFBUCxFQUEwQixTQUFHQyxhQUE3QixDQUE5QztBQUNBLFVBQU1DLGlCQUFpQixpQkFBRUwsT0FBRixDQUFVSCxRQUFWLElBQXNCLFNBQUdJLEtBQXpCLEdBQWlDLFNBQUdLLFNBQTNEOztBQUVBLFVBQUlYLGFBQWFKLFVBQWpCLEVBQTZCO0FBQzNCLGVBQ0U7QUFBQTtBQUFXLGVBQUtnQixpQkFBTCxpQkFBWDtBQUNFO0FBQUE7QUFBQSx5QkFBZ0IsS0FBS0EsaUJBQUwsc0JBQWhCLElBQW9ELGdCQUFnQkYsY0FBcEUsRUFBb0YsTUFBTU4sSUFBMUY7QUFDRyxpQkFBS1MsY0FBTDtBQURIO0FBREYsU0FERjtBQU9ELE9BUkQsTUFRTyxJQUFJYixhQUFhLENBQUNKLFVBQWxCLEVBQThCO0FBQ25DLGVBQ0U7QUFBQTtBQUFXLGVBQUtnQixpQkFBTCxpQkFBWDtBQUNHLGVBQUtDLGNBQUw7QUFESCxTQURGO0FBS0QsT0FOTSxNQU1BLElBQUksQ0FBQ2IsU0FBRCxJQUFjSixVQUFsQixFQUE4QjtBQUNuQyxlQUNFO0FBQUE7QUFBQSx1QkFBZ0IsS0FBS2dCLGlCQUFMLHNCQUFoQixJQUFvRCxnQkFBZ0JGLGNBQXBFLEVBQW9GLE1BQU1OLElBQTFGO0FBQ0csZUFBS1MsY0FBTDtBQURILFNBREY7QUFLRCxPQU5NLE1BTUE7QUFDTCxlQUFPLEtBQUtBLGNBQUwsRUFBUDtBQUNEO0FBQ0Y7OztxQ0FFZ0I7QUFBQSxtQkFDdUIsS0FBS0MsS0FENUI7QUFBQSxVQUNFQyxPQURGLFVBQ1BDLE9BRE87QUFBQSxVQUNXQyxPQURYLFVBQ1dBLE9BRFg7OztBQUdmLGFBQ0U7QUFBQyxlQUFEO0FBQUEscUJBQWEsS0FBS0wsaUJBQUwsQ0FBdUJHLE9BQXZCLENBQWIsSUFBOEMsU0FBU0UsT0FBdkQ7QUFDRyxhQUFLQyxrQkFBTDtBQURILE9BREY7QUFLRDs7Ozs7O0FBM0RrQnpCLFEsQ0FDWkssUSxHQUFXO0FBQ2hCQyxnQkFBYyxZQURFO0FBRWhCRSxlQUFhO0FBRkcsQztBQURDUixRLENBS1owQixZLEdBQWUsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0QsWUFBdkIsRUFBcUMsZ0JBQU1BLFlBQTNDLEVBQXlELHFCQUFXQSxZQUFwRSxFQUFrRixFQUFsRixDO0FBTEgxQixRLENBTVo0QixTLEdBQVksU0FBR0QsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0MsU0FBdkIsRUFBa0MsZ0JBQU1BLFNBQXhDLEVBQW1ELHFCQUFXQSxTQUE5RCxFQUF5RTtBQUMxRnpCLGNBQVksb0JBQVUwQixJQURvRTtBQUUxRkMsZ0JBQWMsb0JBQVVELElBRmtFO0FBRzFGdEIsYUFBVyxvQkFBVXNCLElBSHFFO0FBSTFGRSxlQUFhLG9CQUFVRjtBQUptRSxDQUF6RSxDO2tCQU5BN0IsUSIsImZpbGUiOiJhbnRkL2Zvcm0tY29tcC9Gb3JtQ29tcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNLIH0gZnJvbSAnc2stanMnO1xuaW1wb3J0IEFudGRDb21wIGZyb20gJy4uL0FudGRDb21wJztcbmltcG9ydCBTS0NvbCBmcm9tICcuLi9jb2wvU0tDb2wnO1xuaW1wb3J0IFNLRm9ybUl0ZW0gZnJvbSAnLi4vZm9ybS9TS0Zvcm1JdGVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybUNvbXAgZXh0ZW5kcyBBbnRkQ29tcCB7XG4gIHN0YXRpYyBTS19QUk9QUyA9IHtcbiAgICBJTl9GUk9NX0lURU06ICdpbkZvcm1JdGVtJyxcbiAgICBJTl9GUk9NX1JPVzogJ2luRm9ybVJvdycsXG4gIH07XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLmRlZmF1bHRQcm9wcywgU0tDb2wuZGVmYXVsdFByb3BzLCBTS0Zvcm1JdGVtLmRlZmF1bHRQcm9wcywge30pO1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5wcm9wVHlwZXMsIFNLQ29sLnByb3BUeXBlcywgU0tGb3JtSXRlbS5wcm9wVHlwZXMsIHtcbiAgICBpbkZvcm1JdGVtOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBza0luRm9ybUl0ZW06IFByb3BUeXBlcy5ib29sLFxuICAgIGluRm9ybVJvdzogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2tJbkZvcm1Sb3c6IFByb3BUeXBlcy5ib29sLFxuICB9KTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5jb21wTmFtZSA9ICdGb3JtQ29tcCc7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaW5Gb3JtSXRlbSA9IHRoaXMuc2tQcm9wKEZvcm1Db21wLlNLX1BST1BTLklOX0ZST01fSVRFTSk7XG4gICAgY29uc3QgaW5Gb3JtUm93ID0gdGhpcy5za1Byb3AoRm9ybUNvbXAuU0tfUFJPUFMuSU5fRlJPTV9ST1cpO1xuXG4gICAgY29uc3QgZXJyb3JPYmogPSB0aGlzLmdldEVycm9ycygpO1xuICAgIGNvbnN0IGhlbHAgPSBfLmlzRW1wdHkoZXJyb3JPYmopID8gU0suRU1QVFkgOiBfLmpvaW4oZXJyb3JPYmouc2tWYWxzKCksIFNLLkNIQVJfVkVSVElDQUwpO1xuICAgIGNvbnN0IHZhbGlkYXRlU3RhdHVzID0gXy5pc0VtcHR5KGVycm9yT2JqKSA/IFNLLkVNUFRZIDogU0suU1RSX0VSUk9SO1xuXG4gICAgaWYgKGluRm9ybVJvdyAmJiBpbkZvcm1JdGVtKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U0tDb2wgey4uLnRoaXMuc2tUcmFuc1Byb3BzMlNlbGYoU0tDb2wpfT5cbiAgICAgICAgICA8U0tGb3JtSXRlbSB7Li4udGhpcy5za1RyYW5zUHJvcHMyU2VsZihTS0Zvcm1JdGVtKX0gdmFsaWRhdGVTdGF0dXM9e3ZhbGlkYXRlU3RhdHVzfSBoZWxwPXtoZWxwfT5cbiAgICAgICAgICAgIHt0aGlzLnJlbmRlckZvcm1Db21wKCl9XG4gICAgICAgICAgPC9TS0Zvcm1JdGVtPlxuICAgICAgICA8L1NLQ29sPlxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGluRm9ybVJvdyAmJiAhaW5Gb3JtSXRlbSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFNLQ29sIHsuLi50aGlzLnNrVHJhbnNQcm9wczJTZWxmKFNLQ29sKX0+XG4gICAgICAgICAge3RoaXMucmVuZGVyRm9ybUNvbXAoKX1cbiAgICAgICAgPC9TS0NvbD5cbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICghaW5Gb3JtUm93ICYmIGluRm9ybUl0ZW0pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTS0Zvcm1JdGVtIHsuLi50aGlzLnNrVHJhbnNQcm9wczJTZWxmKFNLRm9ybUl0ZW0pfSB2YWxpZGF0ZVN0YXR1cz17dmFsaWRhdGVTdGF0dXN9IGhlbHA9e2hlbHB9PlxuICAgICAgICAgIHt0aGlzLnJlbmRlckZvcm1Db21wKCl9XG4gICAgICAgIDwvU0tGb3JtSXRlbT5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlckZvcm1Db21wKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyRm9ybUNvbXAoKSB7XG4gICAgY29uc3QgeyBjb21wVGFnOiBDb21wVGFnLCBtb2RlbElkIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wVGFnIHsuLi50aGlzLnNrVHJhbnNQcm9wczJTZWxmKENvbXBUYWcpfSBtb2RlbElkPXttb2RlbElkfT5cbiAgICAgICAge3RoaXMuc2tUcmFuc1Byb3BzMkNoaWxkKCl9XG4gICAgICA8L0NvbXBUYWc+XG4gICAgKTtcbiAgfVxufVxuIl19