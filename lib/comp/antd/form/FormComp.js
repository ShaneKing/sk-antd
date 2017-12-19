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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9mb3JtL0Zvcm1Db21wLmpzIl0sIm5hbWVzIjpbIkZvcm1Db21wIiwiYXJncyIsImNvbXBOYW1lIiwiaW5Gb3JtSXRlbSIsInNrUHJvcCIsIlNLX1BST1BTIiwiSU5fRlJPTV9JVEVNIiwiaW5Gb3JtUm93IiwiSU5fRlJPTV9ST1ciLCJlcnJvck9iaiIsImdldEVycm9ycyIsImhlbHAiLCJpc0VtcHR5IiwiRU1QVFkiLCJqb2luIiwic2tWYWxzIiwiQ0hBUl9WRVJUSUNBTCIsInZhbGlkYXRlU3RhdHVzIiwiU1RSX0VSUk9SIiwic2tUcmFuc1Byb3BzMlNlbGYiLCJyZW5kZXJGb3JtQ29tcCIsInByb3BzIiwiQ29tcFRhZyIsImNvbXBUYWciLCJtb2RlbElkIiwic2tUcmFuc1Byb3BzMkNoaWxkIiwiZGVmYXVsdFByb3BzIiwiYXNzaWduIiwicHJvcFR5cGVzIiwiYm9vbCIsInNrSW5Gb3JtSXRlbSIsInNrSW5Gb3JtUm93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFE7OztBQWFuQixzQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsK0lBQ1ZBLElBRFU7O0FBRW5CLFVBQUtDLFFBQUwsR0FBZ0IsVUFBaEI7QUFGbUI7QUFHcEI7Ozs7NkJBRVE7QUFDUCxVQUFJQyxhQUFhLEtBQUtDLE1BQUwsQ0FBWUosU0FBU0ssUUFBVCxDQUFrQkMsWUFBOUIsQ0FBakI7QUFDQSxVQUFJQyxZQUFZLEtBQUtILE1BQUwsQ0FBWUosU0FBU0ssUUFBVCxDQUFrQkcsV0FBOUIsQ0FBaEI7O0FBRUEsVUFBSUMsV0FBVyxLQUFLQyxTQUFMLEVBQWY7QUFDQSxVQUFJQyxPQUFPLGlCQUFFQyxPQUFGLENBQVVILFFBQVYsSUFBc0IsU0FBR0ksS0FBekIsR0FBaUMsaUJBQUVDLElBQUYsQ0FBT0wsU0FBU00sTUFBVCxFQUFQLEVBQTBCLFNBQUdDLGFBQTdCLENBQTVDO0FBQ0EsVUFBSUMsaUJBQWlCLGlCQUFFTCxPQUFGLENBQVVILFFBQVYsSUFBc0IsU0FBR0ksS0FBekIsR0FBaUMsU0FBR0ssU0FBekQ7O0FBRUEsVUFBSVgsYUFBYUosVUFBakIsRUFBNkI7QUFDM0IsZUFDRTtBQUFBO0FBQVcsZUFBS2dCLGlCQUFMLGlCQUFYO0FBQ0U7QUFBQTtBQUFBLHlCQUFnQixLQUFLQSxpQkFBTCxzQkFBaEIsSUFBb0QsZ0JBQWdCRixjQUFwRSxFQUFvRixNQUFNTixJQUExRjtBQUNHLGlCQUFLUyxjQUFMO0FBREg7QUFERixTQURGO0FBT0QsT0FSRCxNQVFPLElBQUliLGFBQWEsQ0FBQ0osVUFBbEIsRUFBOEI7QUFDbkMsZUFDRTtBQUFBO0FBQVcsZUFBS2dCLGlCQUFMLGlCQUFYO0FBQ0csZUFBS0MsY0FBTDtBQURILFNBREY7QUFLRCxPQU5NLE1BTUEsSUFBSSxDQUFDYixTQUFELElBQWNKLFVBQWxCLEVBQThCO0FBQ25DLGVBQ0U7QUFBQTtBQUFBLHVCQUFnQixLQUFLZ0IsaUJBQUwsc0JBQWhCLElBQW9ELGdCQUFnQkYsY0FBcEUsRUFBb0YsTUFBTU4sSUFBMUY7QUFDRyxlQUFLUyxjQUFMO0FBREgsU0FERjtBQUtELE9BTk0sTUFNQTtBQUNMLGVBQU8sS0FBS0EsY0FBTCxFQUFQO0FBQ0Q7QUFDRjs7O3FDQUVnQjtBQUFBLG1CQUNtQixLQUFLQyxLQUR4QjtBQUFBLFVBQ0RDLE9BREMsVUFDVkMsT0FEVTtBQUFBLFVBQ1FDLE9BRFIsVUFDUUEsT0FEUjs7O0FBR2YsYUFDRTtBQUFDLGVBQUQ7QUFBQSxxQkFBYSxLQUFLTCxpQkFBTCxDQUF1QkcsT0FBdkIsQ0FBYixJQUE4QyxTQUFTRSxPQUF2RDtBQUNHLGFBQUtDLGtCQUFMO0FBREgsT0FERjtBQUtEOzs7Ozs7QUEzRGtCekIsUSxDQUNaSyxRLEdBQVc7QUFDaEJDLGdCQUFjLFlBREU7QUFFaEJFLGVBQWE7QUFGRyxDO0FBRENSLFEsQ0FLWjBCLFksR0FBZSxTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTRCxZQUF2QixFQUFxQyxnQkFBTUEsWUFBM0MsRUFBeUQscUJBQVdBLFlBQXBFLEVBQWtGLEVBQWxGLEM7QUFMSDFCLFEsQ0FNWjRCLFMsR0FBWSxTQUFHRCxNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTQyxTQUF2QixFQUFrQyxnQkFBTUEsU0FBeEMsRUFBbUQscUJBQVdBLFNBQTlELEVBQXlFO0FBQzFGekIsY0FBWSxvQkFBVTBCLElBRG9FO0FBRTFGQyxnQkFBYyxvQkFBVUQsSUFGa0U7QUFHMUZ0QixhQUFXLG9CQUFVc0IsSUFIcUU7QUFJMUZFLGVBQWEsb0JBQVVGO0FBSm1FLENBQXpFLEM7a0JBTkE3QixRIiwiZmlsZSI6ImNvbXAvYW50ZC9mb3JtL0Zvcm1Db21wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTS30gZnJvbSAnc2stanMnO1xuaW1wb3J0IEFudGRDb21wIGZyb20gJy4uL0FudGRDb21wJztcbmltcG9ydCBTS0NvbCBmcm9tICcuLi9jb2wvU0tDb2wnO1xuaW1wb3J0IFNLRm9ybUl0ZW0gZnJvbSAnLi9TS0Zvcm1JdGVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybUNvbXAgZXh0ZW5kcyBBbnRkQ29tcCB7XG4gIHN0YXRpYyBTS19QUk9QUyA9IHtcbiAgICBJTl9GUk9NX0lURU06ICdpbkZvcm1JdGVtJyxcbiAgICBJTl9GUk9NX1JPVzogJ2luRm9ybVJvdydcbiAgfTtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAuZGVmYXVsdFByb3BzLCBTS0NvbC5kZWZhdWx0UHJvcHMsIFNLRm9ybUl0ZW0uZGVmYXVsdFByb3BzLCB7fSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLnByb3BUeXBlcywgU0tDb2wucHJvcFR5cGVzLCBTS0Zvcm1JdGVtLnByb3BUeXBlcywge1xuICAgIGluRm9ybUl0ZW06IFByb3BUeXBlcy5ib29sLFxuICAgIHNrSW5Gb3JtSXRlbTogUHJvcFR5cGVzLmJvb2wsXG4gICAgaW5Gb3JtUm93OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBza0luRm9ybVJvdzogUHJvcFR5cGVzLmJvb2xcbiAgfSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnRm9ybUNvbXAnO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBpbkZvcm1JdGVtID0gdGhpcy5za1Byb3AoRm9ybUNvbXAuU0tfUFJPUFMuSU5fRlJPTV9JVEVNKTtcbiAgICBsZXQgaW5Gb3JtUm93ID0gdGhpcy5za1Byb3AoRm9ybUNvbXAuU0tfUFJPUFMuSU5fRlJPTV9ST1cpO1xuXG4gICAgbGV0IGVycm9yT2JqID0gdGhpcy5nZXRFcnJvcnMoKTtcbiAgICBsZXQgaGVscCA9IF8uaXNFbXB0eShlcnJvck9iaikgPyBTSy5FTVBUWSA6IF8uam9pbihlcnJvck9iai5za1ZhbHMoKSwgU0suQ0hBUl9WRVJUSUNBTCk7XG4gICAgbGV0IHZhbGlkYXRlU3RhdHVzID0gXy5pc0VtcHR5KGVycm9yT2JqKSA/IFNLLkVNUFRZIDogU0suU1RSX0VSUk9SO1xuXG4gICAgaWYgKGluRm9ybVJvdyAmJiBpbkZvcm1JdGVtKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U0tDb2wgey4uLnRoaXMuc2tUcmFuc1Byb3BzMlNlbGYoU0tDb2wpfT5cbiAgICAgICAgICA8U0tGb3JtSXRlbSB7Li4udGhpcy5za1RyYW5zUHJvcHMyU2VsZihTS0Zvcm1JdGVtKX0gdmFsaWRhdGVTdGF0dXM9e3ZhbGlkYXRlU3RhdHVzfSBoZWxwPXtoZWxwfT5cbiAgICAgICAgICAgIHt0aGlzLnJlbmRlckZvcm1Db21wKCl9XG4gICAgICAgICAgPC9TS0Zvcm1JdGVtPlxuICAgICAgICA8L1NLQ29sPlxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGluRm9ybVJvdyAmJiAhaW5Gb3JtSXRlbSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFNLQ29sIHsuLi50aGlzLnNrVHJhbnNQcm9wczJTZWxmKFNLQ29sKX0+XG4gICAgICAgICAge3RoaXMucmVuZGVyRm9ybUNvbXAoKX1cbiAgICAgICAgPC9TS0NvbD5cbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICghaW5Gb3JtUm93ICYmIGluRm9ybUl0ZW0pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTS0Zvcm1JdGVtIHsuLi50aGlzLnNrVHJhbnNQcm9wczJTZWxmKFNLRm9ybUl0ZW0pfSB2YWxpZGF0ZVN0YXR1cz17dmFsaWRhdGVTdGF0dXN9IGhlbHA9e2hlbHB9PlxuICAgICAgICAgIHt0aGlzLnJlbmRlckZvcm1Db21wKCl9XG4gICAgICAgIDwvU0tGb3JtSXRlbT5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlckZvcm1Db21wKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyRm9ybUNvbXAoKSB7XG4gICAgbGV0IHtjb21wVGFnOiBDb21wVGFnLCBtb2RlbElkfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBUYWcgey4uLnRoaXMuc2tUcmFuc1Byb3BzMlNlbGYoQ29tcFRhZyl9IG1vZGVsSWQ9e21vZGVsSWR9PlxuICAgICAgICB7dGhpcy5za1RyYW5zUHJvcHMyQ2hpbGQoKX1cbiAgICAgIDwvQ29tcFRhZz5cbiAgICApO1xuICB9XG59XG4iXX0=