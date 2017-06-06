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

var _Comp2 = require('../../utils/Comp');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FudGQvU0tGb3JtSXRlbS5qcyJdLCJuYW1lcyI6WyJTS0Zvcm1JdGVtIiwiYXJncyIsInByb3BzIiwiQ29tcFRhZyIsImNvbXBUYWciLCJsYWJlbENvbCIsIndyYXBwZXJDb2wiLCJza1Byb3AiLCJTS19QUk9QUyIsIkZPUk1fTEFCRUxfQ09MIiwiRk9STV9XUkFQUEVSX0NPTCIsImNvbXBWYWxpZFByb3BzIiwic2tQcm9wc1RyYW5zIiwiZGVmYXVsdFByb3BzIiwiSXRlbSIsInByb3BUeXBlcyIsImFzc2lnbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxVOzs7QUFNbkIsd0JBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLDhJQUNWQSxJQURVO0FBRXBCOzs7OzZCQUVRO0FBQUEsbUJBQ3dDLEtBQUtDLEtBRDdDO0FBQUEsVUFDT0MsT0FEUCxVQUNGQyxPQURFO0FBQUEsVUFDZ0JDLFFBRGhCLFVBQ2dCQSxRQURoQjtBQUFBLFVBQzBCQyxVQUQxQixVQUMwQkEsVUFEMUI7O0FBRVBELGlCQUFXQSxZQUFZLEtBQUtFLE1BQUwsQ0FBWSxlQUFLQyxRQUFMLENBQWNDLGNBQTFCLENBQXZCO0FBQ0FILG1CQUFhQSxjQUFjLEtBQUtDLE1BQUwsQ0FBWSxlQUFLQyxRQUFMLENBQWNFLGdCQUExQixDQUEzQjs7QUFFQSxhQUNFO0FBQUMsZUFBRDtBQUFBLHFCQUFhLEtBQUtDLGNBQUwsQ0FBb0JSLE9BQXBCLENBQWI7QUFDRSxvQkFBVUUsUUFEWjtBQUVFLHNCQUFZQyxVQUZkO0FBR0csYUFBS00sWUFBTDtBQUhILE9BREY7QUFPRDs7Ozs7O0FBdEJrQlosVSxDQUNaYSxZLEdBQWU7QUFDcEJULFdBQVMsZUFBS1U7QUFETSxDO0FBREhkLFUsQ0FJWmUsUyxHQUFZLGVBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsZUFBS0QsU0FBbkIsRUFBOEIsZUFBS0QsSUFBTCxDQUFVQyxTQUF4QyxFQUFtRCxFQUFuRCxDO2tCQUpBZixVIiwiZmlsZSI6ImNvbXBzL2FudGQvU0tGb3JtSXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Rm9ybX0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNLIGZyb20gJ3NrLWpzJztcbmltcG9ydCBDb21wIGZyb20gJy4uLy4uL3V0aWxzL0NvbXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS0Zvcm1JdGVtIGV4dGVuZHMgQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY29tcFRhZzogRm9ybS5JdGVtXG4gIH07XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIENvbXAucHJvcFR5cGVzLCBGb3JtLkl0ZW0ucHJvcFR5cGVzLCB7fSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7Y29tcFRhZzogQ29tcFRhZywgbGFiZWxDb2wsIHdyYXBwZXJDb2x9ID0gdGhpcy5wcm9wcztcbiAgICBsYWJlbENvbCA9IGxhYmVsQ29sIHx8IHRoaXMuc2tQcm9wKENvbXAuU0tfUFJPUFMuRk9STV9MQUJFTF9DT0wpO1xuICAgIHdyYXBwZXJDb2wgPSB3cmFwcGVyQ29sIHx8IHRoaXMuc2tQcm9wKENvbXAuU0tfUFJPUFMuRk9STV9XUkFQUEVSX0NPTCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBUYWcgey4uLnRoaXMuY29tcFZhbGlkUHJvcHMoQ29tcFRhZyl9XG4gICAgICAgIGxhYmVsQ29sPXtsYWJlbENvbH1cbiAgICAgICAgd3JhcHBlckNvbD17d3JhcHBlckNvbH0+XG4gICAgICAgIHt0aGlzLnNrUHJvcHNUcmFucygpfVxuICAgICAgPC9Db21wVGFnPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==