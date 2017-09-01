'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _skJs2 = _interopRequireDefault(_skJs);

var _Comp2 = require('../../util/Comp');

var _Comp3 = _interopRequireDefault(_Comp2);

var _ReactUtil = require('../../util/ReactUtil');

var _ReactUtil2 = _interopRequireDefault(_ReactUtil);

var _REACT = require('../../util/REACT');

var _REACT2 = _interopRequireDefault(_REACT);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SKLink = function (_Comp) {
  _inherits(SKLink, _Comp);

  function SKLink() {
    var _ref;

    _classCallCheck(this, SKLink);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(this, (_ref = SKLink.__proto__ || Object.getPrototypeOf(SKLink)).call.apply(_ref, [this].concat(args)));
  }

  _createClass(SKLink, [{
    key: 'handleClick',
    value: function handleClick() {
      _ReactUtil2.default.forward(this.props.to);
    }
  }, {
    key: 'render',
    value: function render() {
      var CompTag = this.props.compTag;

      return _react2.default.createElement(
        CompTag,
        _extends({}, this.compValidProps(CompTag), {
          href: 'javascript:void(0);',
          onClick: this.handleClick.bind(this) }),
        this.skPropsTrans()
      );
    }
  }]);

  return SKLink;
}(_Comp3.default);

SKLink.defaultProps = {
  compTag: _REACT2.default.TAG.a,
  to: _skJs2.default.CHAR_SLASH
};
SKLink.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, {
  to: _react2.default.PropTypes.string
});
exports.default = SKLink;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvcmVhY3QvU0tMaW5rLmpzIl0sIm5hbWVzIjpbIlNLTGluayIsImFyZ3MiLCJmb3J3YXJkIiwicHJvcHMiLCJ0byIsIkNvbXBUYWciLCJjb21wVGFnIiwiY29tcFZhbGlkUHJvcHMiLCJoYW5kbGVDbGljayIsImJpbmQiLCJza1Byb3BzVHJhbnMiLCJkZWZhdWx0UHJvcHMiLCJUQUciLCJhIiwiQ0hBUl9TTEFTSCIsInByb3BUeXBlcyIsImFzc2lnbiIsIlByb3BUeXBlcyIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTTs7O0FBU25CLG9CQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSxzSUFDVkEsSUFEVTtBQUVwQjs7OztrQ0FFYTtBQUNaLDBCQUFVQyxPQUFWLENBQWtCLEtBQUtDLEtBQUwsQ0FBV0MsRUFBN0I7QUFDRDs7OzZCQUVRO0FBQUEsVUFDT0MsT0FEUCxHQUNrQixLQUFLRixLQUR2QixDQUNGRyxPQURFOztBQUVQLGFBQ0U7QUFBQyxlQUFEO0FBQUEscUJBQWEsS0FBS0MsY0FBTCxDQUFvQkYsT0FBcEIsQ0FBYjtBQUNTLGdCQUFNLHFCQURmO0FBRVMsbUJBQVMsS0FBS0csV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FGbEI7QUFHRyxhQUFLQyxZQUFMO0FBSEgsT0FERjtBQU9EOzs7Ozs7QUExQmtCVixNLENBQ1pXLFksR0FBZTtBQUNwQkwsV0FBUyxnQkFBTU0sR0FBTixDQUFVQyxDQURDO0FBRXBCVCxNQUFJLGVBQUdVO0FBRmEsQztBQURIZCxNLENBS1plLFMsR0FBWSxlQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLGVBQUtELFNBQW5CLEVBQThCO0FBQy9DWCxNQUFJLGdCQUFNYSxTQUFOLENBQWdCQztBQUQyQixDQUE5QixDO2tCQUxBbEIsTSIsImZpbGUiOiJjb21wL3JlYWN0L1NLTGluay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU0sgZnJvbSAnc2stanMnO1xuaW1wb3J0IENvbXAgZnJvbSAnLi4vLi4vdXRpbC9Db21wJztcbmltcG9ydCBSZWFjdFV0aWwgZnJvbSAnLi4vLi4vdXRpbC9SZWFjdFV0aWwnO1xuaW1wb3J0IFJFQUNUIGZyb20gJy4uLy4uL3V0aWwvUkVBQ1QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS0xpbmsgZXh0ZW5kcyBDb21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb21wVGFnOiBSRUFDVC5UQUcuYSxcbiAgICB0bzogU0suQ0hBUl9TTEFTSFxuICB9O1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBDb21wLnByb3BUeXBlcywge1xuICAgIHRvOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXG4gIH0pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKCkge1xuICAgIFJlYWN0VXRpbC5mb3J3YXJkKHRoaXMucHJvcHMudG8pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7Y29tcFRhZzogQ29tcFRhZ30gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8Q29tcFRhZyB7Li4udGhpcy5jb21wVmFsaWRQcm9wcyhDb21wVGFnKX1cbiAgICAgICAgICAgICAgIGhyZWY9eydqYXZhc2NyaXB0OnZvaWQoMCk7J31cbiAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKX0+XG4gICAgICAgIHt0aGlzLnNrUHJvcHNUcmFucygpfVxuICAgICAgPC9Db21wVGFnPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==