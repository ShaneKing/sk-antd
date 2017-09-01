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

var _REACT = require('../../util/REACT');

var _REACT2 = _interopRequireDefault(_REACT);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SKA = function (_Comp) {
  _inherits(SKA, _Comp);

  function SKA() {
    var _ref;

    _classCallCheck(this, SKA);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(this, (_ref = SKA.__proto__ || Object.getPrototypeOf(SKA)).call.apply(_ref, [this].concat(args)));
  }

  _createClass(SKA, [{
    key: 'handleClick',
    value: function handleClick(e) {
      if (this.props.onClick && _.isFunction(this.props.onClick)) {
        this.props.onClick(e);
      }
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

  return SKA;
}(_Comp3.default);

SKA.defaultProps = {
  compTag: _REACT2.default.TAG.a
};
SKA.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, {});
exports.default = SKA;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvaHRtbC9TS0EuanMiXSwibmFtZXMiOlsiU0tBIiwiYXJncyIsImUiLCJwcm9wcyIsIm9uQ2xpY2siLCJfIiwiaXNGdW5jdGlvbiIsIkNvbXBUYWciLCJjb21wVGFnIiwiY29tcFZhbGlkUHJvcHMiLCJoYW5kbGVDbGljayIsImJpbmQiLCJza1Byb3BzVHJhbnMiLCJkZWZhdWx0UHJvcHMiLCJUQUciLCJhIiwicHJvcFR5cGVzIiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsRzs7O0FBTW5CLGlCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSxnSUFDVkEsSUFEVTtBQUVwQjs7OztnQ0FFV0MsQyxFQUFHO0FBQ2IsVUFBSSxLQUFLQyxLQUFMLENBQVdDLE9BQVgsSUFBc0JDLEVBQUVDLFVBQUYsQ0FBYSxLQUFLSCxLQUFMLENBQVdDLE9BQXhCLENBQTFCLEVBQTREO0FBQzFELGFBQUtELEtBQUwsQ0FBV0MsT0FBWCxDQUFtQkYsQ0FBbkI7QUFDRDtBQUNGOzs7NkJBRVE7QUFBQSxVQUNPSyxPQURQLEdBQ2tCLEtBQUtKLEtBRHZCLENBQ0ZLLE9BREU7O0FBRVAsYUFDRTtBQUFDLGVBQUQ7QUFBQSxxQkFBYSxLQUFLQyxjQUFMLENBQW9CRixPQUFwQixDQUFiO0FBQ1MsZ0JBQU0scUJBRGY7QUFFUyxtQkFBUyxLQUFLRyxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixDQUZsQjtBQUdHLGFBQUtDLFlBQUw7QUFISCxPQURGO0FBT0Q7Ozs7OztBQXpCa0JaLEcsQ0FDWmEsWSxHQUFlO0FBQ3BCTCxXQUFTLGdCQUFNTSxHQUFOLENBQVVDO0FBREMsQztBQURIZixHLENBSVpnQixTLEdBQVksZUFBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxlQUFLRCxTQUFuQixFQUE4QixFQUE5QixDO2tCQUpBaEIsRyIsImZpbGUiOiJjb21wL2h0bWwvU0tBLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTSyBmcm9tICdzay1qcyc7XG5pbXBvcnQgQ29tcCBmcm9tICcuLi8uLi91dGlsL0NvbXAnO1xuaW1wb3J0IFJFQUNUIGZyb20gJy4uLy4uL3V0aWwvUkVBQ1QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS0EgZXh0ZW5kcyBDb21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb21wVGFnOiBSRUFDVC5UQUcuYVxuICB9O1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBDb21wLnByb3BUeXBlcywge30pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrICYmIF8uaXNGdW5jdGlvbih0aGlzLnByb3BzLm9uQ2xpY2spKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2xpY2soZSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7Y29tcFRhZzogQ29tcFRhZ30gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8Q29tcFRhZyB7Li4udGhpcy5jb21wVmFsaWRQcm9wcyhDb21wVGFnKX1cbiAgICAgICAgICAgICAgIGhyZWY9eydqYXZhc2NyaXB0OnZvaWQoMCk7J31cbiAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKX0+XG4gICAgICAgIHt0aGlzLnNrUHJvcHNUcmFucygpfVxuICAgICAgPC9Db21wVGFnPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==