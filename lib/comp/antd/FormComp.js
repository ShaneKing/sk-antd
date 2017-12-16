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

var _AntdComp2 = require('./AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

var _SKCol = require('./SKCol');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9Gb3JtQ29tcC5qcyJdLCJuYW1lcyI6WyJGb3JtQ29tcCIsImFyZ3MiLCJjb21wTmFtZSIsImluRm9ybUl0ZW0iLCJza1Byb3AiLCJTS19QUk9QUyIsIklOX0ZST01fSVRFTSIsImluRm9ybVJvdyIsIklOX0ZST01fUk9XIiwiZXJyb3JPYmoiLCJnZXRFcnJvcnMiLCJoZWxwIiwiaXNFbXB0eSIsIkVNUFRZIiwiam9pbiIsInNrVmFscyIsIkNIQVJfVkVSVElDQUwiLCJ2YWxpZGF0ZVN0YXR1cyIsIlNUUl9FUlJPUiIsInNrVHJhbnNQcm9wczJTZWxmIiwicmVuZGVyRm9ybUNvbXAiLCJwcm9wcyIsIkNvbXBUYWciLCJjb21wVGFnIiwibW9kZWxJZCIsInNrVHJhbnNQcm9wczJDaGlsZCIsImRlZmF1bHRQcm9wcyIsImFzc2lnbiIsInByb3BUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7O0FBSW5CLHNCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSwrSUFDVkEsSUFEVTs7QUFFbkIsVUFBS0MsUUFBTCxHQUFnQixVQUFoQjtBQUZtQjtBQUdwQjs7Ozs2QkFFUTtBQUNQLFVBQUlDLGFBQWEsS0FBS0MsTUFBTCxDQUFZLG1CQUFTQyxRQUFULENBQWtCQyxZQUE5QixDQUFqQjtBQUNBLFVBQUlDLFlBQVksS0FBS0gsTUFBTCxDQUFZLG1CQUFTQyxRQUFULENBQWtCRyxXQUE5QixDQUFoQjs7QUFFQSxVQUFJQyxXQUFXLEtBQUtDLFNBQUwsRUFBZjtBQUNBLFVBQUlDLE9BQU8saUJBQUVDLE9BQUYsQ0FBVUgsUUFBVixJQUFzQixTQUFHSSxLQUF6QixHQUFpQyxpQkFBRUMsSUFBRixDQUFPTCxTQUFTTSxNQUFULEVBQVAsRUFBMEIsU0FBR0MsYUFBN0IsQ0FBNUM7QUFDQSxVQUFJQyxpQkFBaUIsaUJBQUVMLE9BQUYsQ0FBVUgsUUFBVixJQUFzQixTQUFHSSxLQUF6QixHQUFpQyxTQUFHSyxTQUF6RDs7QUFFQSxVQUFJWCxhQUFhSixVQUFqQixFQUE2QjtBQUMzQixlQUNFO0FBQUE7QUFBVyxlQUFLZ0IsaUJBQUwsaUJBQVg7QUFDRTtBQUFBO0FBQUEseUJBQWdCLEtBQUtBLGlCQUFMLHNCQUFoQixJQUFvRCxnQkFBZ0JGLGNBQXBFLEVBQW9GLE1BQU1OLElBQTFGO0FBQ0csaUJBQUtTLGNBQUw7QUFESDtBQURGLFNBREY7QUFPRCxPQVJELE1BUU8sSUFBSWIsYUFBYSxDQUFDSixVQUFsQixFQUE4QjtBQUNuQyxlQUNFO0FBQUE7QUFBVyxlQUFLZ0IsaUJBQUwsaUJBQVg7QUFDRyxlQUFLQyxjQUFMO0FBREgsU0FERjtBQUtELE9BTk0sTUFNQSxJQUFJLENBQUNiLFNBQUQsSUFBY0osVUFBbEIsRUFBOEI7QUFDbkMsZUFDRTtBQUFBO0FBQUEsdUJBQWdCLEtBQUtnQixpQkFBTCxzQkFBaEIsSUFBb0QsZ0JBQWdCRixjQUFwRSxFQUFvRixNQUFNTixJQUExRjtBQUNHLGVBQUtTLGNBQUw7QUFESCxTQURGO0FBS0QsT0FOTSxNQU1BO0FBQ0wsZUFBTyxLQUFLQSxjQUFMLEVBQVA7QUFDRDtBQUNGOzs7cUNBRWdCO0FBQUEsbUJBQ21CLEtBQUtDLEtBRHhCO0FBQUEsVUFDREMsT0FEQyxVQUNWQyxPQURVO0FBQUEsVUFDUUMsT0FEUixVQUNRQSxPQURSOzs7QUFHZixhQUNFO0FBQUMsZUFBRDtBQUFBLHFCQUFhLEtBQUtMLGlCQUFMLENBQXVCRyxPQUF2QixDQUFiLElBQThDLFNBQVNFLE9BQXZEO0FBQ0csYUFBS0Msa0JBQUw7QUFESCxPQURGO0FBS0Q7Ozs7OztBQWxEa0J6QixRLENBQ1owQixZLEdBQWUsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0QsWUFBdkIsRUFBcUMsZ0JBQU1BLFlBQTNDLEVBQXlELHFCQUFXQSxZQUFwRSxFQUFrRixFQUFsRixDO0FBREgxQixRLENBRVo0QixTLEdBQVksU0FBR0QsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0MsU0FBdkIsRUFBa0MsZ0JBQU1BLFNBQXhDLEVBQW1ELHFCQUFXQSxTQUE5RCxFQUF5RSxFQUF6RSxDO2tCQUZBNUIsUSIsImZpbGUiOiJjb21wL2FudGQvRm9ybUNvbXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U0t9IGZyb20gJ3NrLWpzJztcbmltcG9ydCBBbnRkQ29tcCBmcm9tICcuL0FudGRDb21wJztcbmltcG9ydCBTS0NvbCBmcm9tICcuL1NLQ29sJztcbmltcG9ydCBTS0Zvcm1JdGVtIGZyb20gJy4vU0tGb3JtSXRlbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1Db21wIGV4dGVuZHMgQW50ZENvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5kZWZhdWx0UHJvcHMsIFNLQ29sLmRlZmF1bHRQcm9wcywgU0tGb3JtSXRlbS5kZWZhdWx0UHJvcHMsIHt9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAucHJvcFR5cGVzLCBTS0NvbC5wcm9wVHlwZXMsIFNLRm9ybUl0ZW0ucHJvcFR5cGVzLCB7fSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnRm9ybUNvbXAnO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBpbkZvcm1JdGVtID0gdGhpcy5za1Byb3AoQW50ZENvbXAuU0tfUFJPUFMuSU5fRlJPTV9JVEVNKTtcbiAgICBsZXQgaW5Gb3JtUm93ID0gdGhpcy5za1Byb3AoQW50ZENvbXAuU0tfUFJPUFMuSU5fRlJPTV9ST1cpO1xuXG4gICAgbGV0IGVycm9yT2JqID0gdGhpcy5nZXRFcnJvcnMoKTtcbiAgICBsZXQgaGVscCA9IF8uaXNFbXB0eShlcnJvck9iaikgPyBTSy5FTVBUWSA6IF8uam9pbihlcnJvck9iai5za1ZhbHMoKSwgU0suQ0hBUl9WRVJUSUNBTCk7XG4gICAgbGV0IHZhbGlkYXRlU3RhdHVzID0gXy5pc0VtcHR5KGVycm9yT2JqKSA/IFNLLkVNUFRZIDogU0suU1RSX0VSUk9SO1xuXG4gICAgaWYgKGluRm9ybVJvdyAmJiBpbkZvcm1JdGVtKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U0tDb2wgey4uLnRoaXMuc2tUcmFuc1Byb3BzMlNlbGYoU0tDb2wpfT5cbiAgICAgICAgICA8U0tGb3JtSXRlbSB7Li4udGhpcy5za1RyYW5zUHJvcHMyU2VsZihTS0Zvcm1JdGVtKX0gdmFsaWRhdGVTdGF0dXM9e3ZhbGlkYXRlU3RhdHVzfSBoZWxwPXtoZWxwfT5cbiAgICAgICAgICAgIHt0aGlzLnJlbmRlckZvcm1Db21wKCl9XG4gICAgICAgICAgPC9TS0Zvcm1JdGVtPlxuICAgICAgICA8L1NLQ29sPlxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGluRm9ybVJvdyAmJiAhaW5Gb3JtSXRlbSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFNLQ29sIHsuLi50aGlzLnNrVHJhbnNQcm9wczJTZWxmKFNLQ29sKX0+XG4gICAgICAgICAge3RoaXMucmVuZGVyRm9ybUNvbXAoKX1cbiAgICAgICAgPC9TS0NvbD5cbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICghaW5Gb3JtUm93ICYmIGluRm9ybUl0ZW0pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTS0Zvcm1JdGVtIHsuLi50aGlzLnNrVHJhbnNQcm9wczJTZWxmKFNLRm9ybUl0ZW0pfSB2YWxpZGF0ZVN0YXR1cz17dmFsaWRhdGVTdGF0dXN9IGhlbHA9e2hlbHB9PlxuICAgICAgICAgIHt0aGlzLnJlbmRlckZvcm1Db21wKCl9XG4gICAgICAgIDwvU0tGb3JtSXRlbT5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlckZvcm1Db21wKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyRm9ybUNvbXAoKSB7XG4gICAgbGV0IHtjb21wVGFnOiBDb21wVGFnLCBtb2RlbElkfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBUYWcgey4uLnRoaXMuc2tUcmFuc1Byb3BzMlNlbGYoQ29tcFRhZyl9IG1vZGVsSWQ9e21vZGVsSWR9PlxuICAgICAgICB7dGhpcy5za1RyYW5zUHJvcHMyQ2hpbGQoKX1cbiAgICAgIDwvQ29tcFRhZz5cbiAgICApO1xuICB9XG59XG4iXX0=