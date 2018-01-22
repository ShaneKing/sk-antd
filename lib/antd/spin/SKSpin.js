'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _spin = require('antd/lib/spin');

var _spin2 = _interopRequireDefault(_spin);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/spin/style');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _AntdComp2 = require('../AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

var _Const = require('../../Const');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_spin2.default.defaultProps = _skJs.SK.assign({}, {
  size: _Const.SIZE.Default,
  spinning: true
}, _spin2.default.defaultProps, {});

_spin2.default.propTypes = _skJs.SK.assign({}, {
  //https://ant.design/components/spin-cn/#API
  delay: _propTypes2.default.number,
  indicator: _propTypes2.default.node,
  size: _propTypes2.default.string,
  spinning: _propTypes2.default.bool,
  tip: _propTypes2.default.string,
  wrapperClassName: _propTypes2.default.string
}, _spin2.default.propTypes, {});

var SKSpin = function (_AntdComp) {
  _inherits(SKSpin, _AntdComp);

  function SKSpin() {
    var _ref;

    _classCallCheck(this, SKSpin);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SKSpin.__proto__ || Object.getPrototypeOf(SKSpin)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'SKSpin';
    return _this;
  }

  _createClass(SKSpin, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          CompTag = _props.compTag,
          className = _props.className;


      return _react2.default.createElement(
        CompTag,
        _extends({}, this.skTransProps2Self(CompTag), {
          className: className,
          spinning: this.skVal() }),
        this.skTransProps2Child()
      );
    }
  }]);

  return SKSpin;
}(_AntdComp3.default);

SKSpin.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, _spin2.default.defaultProps, {
  compTag: _spin2.default,
  size: _Const.SIZE.Large
});
SKSpin.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _spin2.default.propTypes, {});
exports.default = SKSpin;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGQvc3Bpbi9TS1NwaW4uanMiXSwibmFtZXMiOlsiZGVmYXVsdFByb3BzIiwiYXNzaWduIiwic2l6ZSIsIkRlZmF1bHQiLCJzcGlubmluZyIsInByb3BUeXBlcyIsImRlbGF5IiwibnVtYmVyIiwiaW5kaWNhdG9yIiwibm9kZSIsInN0cmluZyIsImJvb2wiLCJ0aXAiLCJ3cmFwcGVyQ2xhc3NOYW1lIiwiU0tTcGluIiwiYXJncyIsImNvbXBOYW1lIiwicHJvcHMiLCJDb21wVGFnIiwiY29tcFRhZyIsImNsYXNzTmFtZSIsInNrVHJhbnNQcm9wczJTZWxmIiwic2tWYWwiLCJza1RyYW5zUHJvcHMyQ2hpbGQiLCJMYXJnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0FBRUEsZUFBS0EsWUFBTCxHQUFvQixTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjO0FBQ2hDQyxRQUFNLFlBQUtDLE9BRHFCO0FBRWhDQyxZQUFVO0FBRnNCLENBQWQsRUFHakIsZUFBS0osWUFIWSxFQUdFLEVBSEYsQ0FBcEI7O0FBS0EsZUFBS0ssU0FBTCxHQUFpQixTQUFHSixNQUFILENBQVUsRUFBVixFQUFjO0FBQzdCO0FBQ0FLLFNBQU8sb0JBQVVDLE1BRlk7QUFHN0JDLGFBQVcsb0JBQVVDLElBSFE7QUFJN0JQLFFBQU0sb0JBQVVRLE1BSmE7QUFLN0JOLFlBQVUsb0JBQVVPLElBTFM7QUFNN0JDLE9BQUssb0JBQVVGLE1BTmM7QUFPN0JHLG9CQUFrQixvQkFBVUg7QUFQQyxDQUFkLEVBUWQsZUFBS0wsU0FSUyxFQVFFLEVBUkYsQ0FBakI7O0lBVXFCUyxNOzs7QUFPbkIsb0JBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLDJJQUNWQSxJQURVOztBQUVuQixVQUFLQyxRQUFMLEdBQWdCLFFBQWhCO0FBRm1CO0FBR3BCOzs7OzZCQUVRO0FBQUEsbUJBQzZCLEtBQUtDLEtBRGxDO0FBQUEsVUFDT0MsT0FEUCxVQUNGQyxPQURFO0FBQUEsVUFDZ0JDLFNBRGhCLFVBQ2dCQSxTQURoQjs7O0FBR1AsYUFDRTtBQUFDLGVBQUQ7QUFBQSxxQkFBYSxLQUFLQyxpQkFBTCxDQUF1QkgsT0FBdkIsQ0FBYjtBQUNTLHFCQUFXRSxTQURwQjtBQUVTLG9CQUFVLEtBQUtFLEtBQUwsRUFGbkI7QUFHRyxhQUFLQyxrQkFBTDtBQUhILE9BREY7QUFPRDs7Ozs7O0FBdEJrQlQsTSxDQUNaZCxZLEdBQWUsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0QsWUFBdkIsRUFBcUMsZUFBS0EsWUFBMUMsRUFBd0Q7QUFDNUVtQix5QkFENEU7QUFFNUVqQixRQUFNLFlBQUtzQjtBQUZpRSxDQUF4RCxDO0FBREhWLE0sQ0FLWlQsUyxHQUFZLFNBQUdKLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNJLFNBQXZCLEVBQWtDLGVBQUtBLFNBQXZDLEVBQWtELEVBQWxELEM7a0JBTEFTLE0iLCJmaWxlIjoiYW50ZC9zcGluL1NLU3Bpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3Bpbn0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U0t9IGZyb20gJ3NrLWpzJztcbmltcG9ydCBBbnRkQ29tcCBmcm9tICcuLi9BbnRkQ29tcCc7XG5pbXBvcnQge1NJWkV9IGZyb20gJy4uLy4uL0NvbnN0JztcblxuU3Bpbi5kZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIHtcbiAgc2l6ZTogU0laRS5EZWZhdWx0LFxuICBzcGlubmluZzogdHJ1ZVxufSwgU3Bpbi5kZWZhdWx0UHJvcHMsIHt9KTtcblxuU3Bpbi5wcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIHtcbiAgLy9odHRwczovL2FudC5kZXNpZ24vY29tcG9uZW50cy9zcGluLWNuLyNBUElcbiAgZGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gIGluZGljYXRvcjogUHJvcFR5cGVzLm5vZGUsXG4gIHNpemU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNwaW5uaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgdGlwOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB3cmFwcGVyQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59LCBTcGluLnByb3BUeXBlcywge30pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS1NwaW4gZXh0ZW5kcyBBbnRkQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLmRlZmF1bHRQcm9wcywgU3Bpbi5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBTcGluLFxuICAgIHNpemU6IFNJWkUuTGFyZ2VcbiAgfSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLnByb3BUeXBlcywgU3Bpbi5wcm9wVHlwZXMsIHt9KTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5jb21wTmFtZSA9ICdTS1NwaW4nO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7Y29tcFRhZzogQ29tcFRhZywgY2xhc3NOYW1lfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBUYWcgey4uLnRoaXMuc2tUcmFuc1Byb3BzMlNlbGYoQ29tcFRhZyl9XG4gICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICAgICAgIHNwaW5uaW5nPXt0aGlzLnNrVmFsKCl9PlxuICAgICAgICB7dGhpcy5za1RyYW5zUHJvcHMyQ2hpbGQoKX1cbiAgICAgIDwvQ29tcFRhZz5cbiAgICApO1xuICB9XG59XG4iXX0=