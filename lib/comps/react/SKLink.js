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

var _Comp2 = require('../../utils/Comp');

var _Comp3 = _interopRequireDefault(_Comp2);

var _Path = require('../../utils/Path');

var _Path2 = _interopRequireDefault(_Path);

var _REACT = require('../../utils/REACT');

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
      _Path2.default.forward(this.props.to);
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
  to: '/'
};
SKLink.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, {
  to: _react2.default.PropTypes.string
});
exports.default = SKLink;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL3JlYWN0L1NLTGluay5qcyJdLCJuYW1lcyI6WyJTS0xpbmsiLCJhcmdzIiwiZm9yd2FyZCIsInByb3BzIiwidG8iLCJDb21wVGFnIiwiY29tcFRhZyIsImNvbXBWYWxpZFByb3BzIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwic2tQcm9wc1RyYW5zIiwiZGVmYXVsdFByb3BzIiwiVEFHIiwiYSIsInByb3BUeXBlcyIsImFzc2lnbiIsIlByb3BUeXBlcyIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTTs7O0FBU25CLG9CQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSxzSUFDVkEsSUFEVTtBQUVwQjs7OztrQ0FFYTtBQUNaLHFCQUFLQyxPQUFMLENBQWEsS0FBS0MsS0FBTCxDQUFXQyxFQUF4QjtBQUNEOzs7NkJBRVE7QUFBQSxVQUNPQyxPQURQLEdBQ2tCLEtBQUtGLEtBRHZCLENBQ0ZHLE9BREU7O0FBRVAsYUFDRTtBQUFDLGVBQUQ7QUFBQSxxQkFBYSxLQUFLQyxjQUFMLENBQW9CRixPQUFwQixDQUFiO0FBQ0UsZ0JBQU0scUJBRFI7QUFFRSxtQkFBUyxLQUFLRyxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixDQUZYO0FBR0csYUFBS0MsWUFBTDtBQUhILE9BREY7QUFPRDs7Ozs7O0FBMUJrQlYsTSxDQUNaVyxZLEdBQWU7QUFDcEJMLFdBQVMsZ0JBQU1NLEdBQU4sQ0FBVUMsQ0FEQztBQUVwQlQsTUFBSTtBQUZnQixDO0FBREhKLE0sQ0FLWmMsUyxHQUFZLGVBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsZUFBS0QsU0FBbkIsRUFBOEI7QUFDL0NWLE1BQUksZ0JBQU1ZLFNBQU4sQ0FBZ0JDO0FBRDJCLENBQTlCLEM7a0JBTEFqQixNIiwiZmlsZSI6ImNvbXBzL3JlYWN0L1NLTGluay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU0sgZnJvbSAnc2stanMnO1xuaW1wb3J0IENvbXAgZnJvbSAnLi4vLi4vdXRpbHMvQ29tcCc7XG5pbXBvcnQgUGF0aCBmcm9tICcuLi8uLi91dGlscy9QYXRoJztcbmltcG9ydCBSRUFDVCBmcm9tICcuLi8uLi91dGlscy9SRUFDVCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNLTGluayBleHRlbmRzIENvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbXBUYWc6IFJFQUNULlRBRy5hLFxuICAgIHRvOiAnLydcbiAgfTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQ29tcC5wcm9wVHlwZXMsIHtcbiAgICB0bzogUmVhY3QuUHJvcFR5cGVzLnN0cmluZ1xuICB9KTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gIH1cblxuICBoYW5kbGVDbGljaygpIHtcbiAgICBQYXRoLmZvcndhcmQodGhpcy5wcm9wcy50byk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtjb21wVGFnOiBDb21wVGFnfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wVGFnIHsuLi50aGlzLmNvbXBWYWxpZFByb3BzKENvbXBUYWcpfVxuICAgICAgICBocmVmPXsnamF2YXNjcmlwdDp2b2lkKDApOyd9XG4gICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKX0+XG4gICAgICAgIHt0aGlzLnNrUHJvcHNUcmFucygpfVxuICAgICAgPC9Db21wVGFnPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==