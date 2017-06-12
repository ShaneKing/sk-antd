'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style2 = require('antd/lib/input/style');

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

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

_input2.default.propTypes = _skJs2.default.assign({}, _input2.default.propTypes, {
  suffix: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.node])
}, {});

var SKInput = function (_Comp) {
  _inherits(SKInput, _Comp);

  function SKInput() {
    var _ref;

    _classCallCheck(this, SKInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(this, (_ref = SKInput.__proto__ || Object.getPrototypeOf(SKInput)).call.apply(_ref, [this].concat(args)));
  }

  _createClass(SKInput, [{
    key: 'handleChange',
    value: function handleChange(e) {
      this.skVal(e.target.value);
    }
  }, {
    key: 'render',
    value: function render() {
      var CompTag = this.props.compTag;


      return _react2.default.createElement(
        CompTag,
        _extends({}, this.compValidProps(CompTag), {
          onChange: this.handleChange.bind(this),
          value: this.skVal() }),
        this.skPropsTrans()
      );
    }
  }]);

  return SKInput;
}(_Comp3.default);

SKInput.defaultProps = {
  compTag: _input2.default
};
SKInput.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _input2.default.propTypes, {
  searchFuncId: _react2.default.PropTypes.string
});
exports.default = SKInput;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FudGQvU0tJbnB1dC5qcyJdLCJuYW1lcyI6WyJwcm9wVHlwZXMiLCJhc3NpZ24iLCJzdWZmaXgiLCJQcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJub2RlIiwiU0tJbnB1dCIsImFyZ3MiLCJlIiwic2tWYWwiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkNvbXBUYWciLCJwcm9wcyIsImNvbXBUYWciLCJjb21wVmFsaWRQcm9wcyIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJza1Byb3BzVHJhbnMiLCJkZWZhdWx0UHJvcHMiLCJzZWFyY2hGdW5jSWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLGdCQUFNQSxTQUFOLEdBQWtCLGVBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsZ0JBQU1ELFNBQXBCLEVBQStCO0FBQy9DRSxVQUFRLGdCQUFNQyxTQUFOLENBQWdCQyxTQUFoQixDQUEwQixDQUNoQyxnQkFBTUQsU0FBTixDQUFnQkUsTUFEZ0IsRUFFaEMsZ0JBQU1GLFNBQU4sQ0FBZ0JHLElBRmdCLENBQTFCO0FBRHVDLENBQS9CLEVBS2YsRUFMZSxDQUFsQjs7SUFPcUJDLE87OztBQVFuQixxQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsd0lBQ1ZBLElBRFU7QUFFcEI7Ozs7aUNBRVlDLEMsRUFBRztBQUNkLFdBQUtDLEtBQUwsQ0FBV0QsRUFBRUUsTUFBRixDQUFTQyxLQUFwQjtBQUNEOzs7NkJBRVE7QUFBQSxVQUNPQyxPQURQLEdBQ2tCLEtBQUtDLEtBRHZCLENBQ0ZDLE9BREU7OztBQUdQLGFBQ0U7QUFBQyxlQUFEO0FBQUEscUJBQWEsS0FBS0MsY0FBTCxDQUFvQkgsT0FBcEIsQ0FBYjtBQUNFLG9CQUFVLEtBQUtJLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBRFo7QUFFRSxpQkFBTyxLQUFLUixLQUFMLEVBRlQ7QUFHRyxhQUFLUyxZQUFMO0FBSEgsT0FERjtBQU9EOzs7Ozs7QUExQmtCWixPLENBQ1phLFksR0FBZTtBQUNwQkw7QUFEb0IsQztBQURIUixPLENBSVpQLFMsR0FBWSxlQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLGVBQUtELFNBQW5CLEVBQThCLGdCQUFNQSxTQUFwQyxFQUErQztBQUNoRXFCLGdCQUFjLGdCQUFNbEIsU0FBTixDQUFnQkU7QUFEa0MsQ0FBL0MsQztrQkFKQUUsTyIsImZpbGUiOiJjb21wcy9hbnRkL1NLSW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lucHV0fSBmcm9tICdhbnRkJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU0sgZnJvbSAnc2stanMnO1xuaW1wb3J0IENvbXAgZnJvbSAnLi4vLi4vdXRpbHMvQ29tcCc7XG5cbklucHV0LnByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgSW5wdXQucHJvcFR5cGVzLCB7XG4gIHN1ZmZpeDogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBSZWFjdC5Qcm9wVHlwZXMubm9kZVxuICBdKVxufSwge30pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS0lucHV0IGV4dGVuZHMgQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY29tcFRhZzogSW5wdXRcbiAgfTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQ29tcC5wcm9wVHlwZXMsIElucHV0LnByb3BUeXBlcywge1xuICAgIHNlYXJjaEZ1bmNJZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZ1xuICB9KTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2tWYWwoZS50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7Y29tcFRhZzogQ29tcFRhZ30gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wVGFnIHsuLi50aGlzLmNvbXBWYWxpZFByb3BzKENvbXBUYWcpfVxuICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgdmFsdWU9e3RoaXMuc2tWYWwoKX0+XG4gICAgICAgIHt0aGlzLnNrUHJvcHNUcmFucygpfVxuICAgICAgPC9Db21wVGFnPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==