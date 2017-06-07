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

var _ReactUtil = require('../../utils/ReactUtil');

var _ReactUtil2 = _interopRequireDefault(_ReactUtil);

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
  to: '/'
};
SKLink.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, {
  to: _react2.default.PropTypes.string
});
exports.default = SKLink;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL3JlYWN0L1NLTGluay5qcyJdLCJuYW1lcyI6WyJTS0xpbmsiLCJhcmdzIiwiZm9yd2FyZCIsInByb3BzIiwidG8iLCJDb21wVGFnIiwiY29tcFRhZyIsImNvbXBWYWxpZFByb3BzIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwic2tQcm9wc1RyYW5zIiwiZGVmYXVsdFByb3BzIiwiVEFHIiwiYSIsInByb3BUeXBlcyIsImFzc2lnbiIsIlByb3BUeXBlcyIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTTs7O0FBU25CLG9CQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSxzSUFDVkEsSUFEVTtBQUVwQjs7OztrQ0FFYTtBQUNaLDBCQUFVQyxPQUFWLENBQWtCLEtBQUtDLEtBQUwsQ0FBV0MsRUFBN0I7QUFDRDs7OzZCQUVRO0FBQUEsVUFDT0MsT0FEUCxHQUNrQixLQUFLRixLQUR2QixDQUNGRyxPQURFOztBQUVQLGFBQ0U7QUFBQyxlQUFEO0FBQUEscUJBQWEsS0FBS0MsY0FBTCxDQUFvQkYsT0FBcEIsQ0FBYjtBQUNFLGdCQUFNLHFCQURSO0FBRUUsbUJBQVMsS0FBS0csV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FGWDtBQUdHLGFBQUtDLFlBQUw7QUFISCxPQURGO0FBT0Q7Ozs7OztBQTFCa0JWLE0sQ0FDWlcsWSxHQUFlO0FBQ3BCTCxXQUFTLGdCQUFNTSxHQUFOLENBQVVDLENBREM7QUFFcEJULE1BQUk7QUFGZ0IsQztBQURISixNLENBS1pjLFMsR0FBWSxlQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLGVBQUtELFNBQW5CLEVBQThCO0FBQy9DVixNQUFJLGdCQUFNWSxTQUFOLENBQWdCQztBQUQyQixDQUE5QixDO2tCQUxBakIsTSIsImZpbGUiOiJjb21wcy9yZWFjdC9TS0xpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNLIGZyb20gJ3NrLWpzJztcbmltcG9ydCBDb21wIGZyb20gJy4uLy4uL3V0aWxzL0NvbXAnO1xuaW1wb3J0IFJlYWN0VXRpbCBmcm9tICcuLi8uLi91dGlscy9SZWFjdFV0aWwnO1xuaW1wb3J0IFJFQUNUIGZyb20gJy4uLy4uL3V0aWxzL1JFQUNUJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tMaW5rIGV4dGVuZHMgQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY29tcFRhZzogUkVBQ1QuVEFHLmEsXG4gICAgdG86ICcvJ1xuICB9O1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBDb21wLnByb3BUeXBlcywge1xuICAgIHRvOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXG4gIH0pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKCkge1xuICAgIFJlYWN0VXRpbC5mb3J3YXJkKHRoaXMucHJvcHMudG8pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7Y29tcFRhZzogQ29tcFRhZ30gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8Q29tcFRhZyB7Li4udGhpcy5jb21wVmFsaWRQcm9wcyhDb21wVGFnKX1cbiAgICAgICAgaHJlZj17J2phdmFzY3JpcHQ6dm9pZCgwKTsnfVxuICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyl9PlxuICAgICAgICB7dGhpcy5za1Byb3BzVHJhbnMoKX1cbiAgICAgIDwvQ29tcFRhZz5cbiAgICApO1xuICB9XG59XG4iXX0=