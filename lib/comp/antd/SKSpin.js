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

var _AntdComp2 = require('./AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

var _Const = require('../../util/Const');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_spin2.default.defaultProps = _skJs.SK.assign({}, {
  size: _Const.SIZE.Default,
  spinning: true
}, _spin2.default.defaultProps, {});

_spin2.default.propTypes = _skJs.SK.assign({}, {
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
  compTag: _spin2.default
});
SKSpin.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _spin2.default.propTypes, {});
exports.default = SKSpin;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9TS1NwaW4uanMiXSwibmFtZXMiOlsiZGVmYXVsdFByb3BzIiwiYXNzaWduIiwic2l6ZSIsIkRlZmF1bHQiLCJzcGlubmluZyIsInByb3BUeXBlcyIsImRlbGF5IiwibnVtYmVyIiwiaW5kaWNhdG9yIiwibm9kZSIsInN0cmluZyIsImJvb2wiLCJ0aXAiLCJ3cmFwcGVyQ2xhc3NOYW1lIiwiU0tTcGluIiwiYXJncyIsImNvbXBOYW1lIiwicHJvcHMiLCJDb21wVGFnIiwiY29tcFRhZyIsImNsYXNzTmFtZSIsInNrVHJhbnNQcm9wczJTZWxmIiwic2tWYWwiLCJza1RyYW5zUHJvcHMyQ2hpbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVBLGVBQUtBLFlBQUwsR0FBb0IsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYztBQUNoQ0MsUUFBTSxZQUFLQyxPQURxQjtBQUVoQ0MsWUFBVTtBQUZzQixDQUFkLEVBR2pCLGVBQUtKLFlBSFksRUFHRSxFQUhGLENBQXBCOztBQUtBLGVBQUtLLFNBQUwsR0FBaUIsU0FBR0osTUFBSCxDQUFVLEVBQVYsRUFBYztBQUM3QkssU0FBTyxvQkFBVUMsTUFEWTtBQUU3QkMsYUFBVyxvQkFBVUMsSUFGUTtBQUc3QlAsUUFBTSxvQkFBVVEsTUFIYTtBQUk3Qk4sWUFBVSxvQkFBVU8sSUFKUztBQUs3QkMsT0FBSyxvQkFBVUYsTUFMYztBQU03Qkcsb0JBQWtCLG9CQUFVSDtBQU5DLENBQWQsRUFPZCxlQUFLTCxTQVBTLEVBT0UsRUFQRixDQUFqQjs7SUFTcUJTLE07OztBQU9uQixvQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsMklBQ1ZBLElBRFU7O0FBRW5CLFVBQUtDLFFBQUwsR0FBZ0IsUUFBaEI7QUFGbUI7QUFHcEI7Ozs7NkJBRVE7QUFBQSxtQkFDNkIsS0FBS0MsS0FEbEM7QUFBQSxVQUNPQyxPQURQLFVBQ0ZDLE9BREU7QUFBQSxVQUNnQkMsU0FEaEIsVUFDZ0JBLFNBRGhCOzs7QUFHUCxhQUNFO0FBQUMsZUFBRDtBQUFBLHFCQUFhLEtBQUtDLGlCQUFMLENBQXVCSCxPQUF2QixDQUFiO0FBQ1MscUJBQVdFLFNBRHBCO0FBRVMsb0JBQVUsS0FBS0UsS0FBTCxFQUZuQjtBQUdHLGFBQUtDLGtCQUFMO0FBSEgsT0FERjtBQU9EOzs7Ozs7QUF0QmtCVCxNLENBQ1pkLFksR0FBZSxTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTRCxZQUF2QixFQUFxQyxlQUFLQSxZQUExQyxFQUF3RDtBQUM1RW1CO0FBRDRFLENBQXhELEM7QUFESEwsTSxDQUlaVCxTLEdBQVksU0FBR0osTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0ksU0FBdkIsRUFBa0MsZUFBS0EsU0FBdkMsRUFBa0QsRUFBbEQsQztrQkFKQVMsTSIsImZpbGUiOiJjb21wL2FudGQvU0tTcGluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTcGlufSBmcm9tICdhbnRkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTS30gZnJvbSAnc2stanMnO1xuaW1wb3J0IEFudGRDb21wIGZyb20gJy4vQW50ZENvbXAnO1xuaW1wb3J0IHtTSVpFfSBmcm9tICcuLi8uLi91dGlsL0NvbnN0JztcblxuU3Bpbi5kZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIHtcbiAgc2l6ZTogU0laRS5EZWZhdWx0LFxuICBzcGlubmluZzogdHJ1ZVxufSwgU3Bpbi5kZWZhdWx0UHJvcHMsIHt9KTtcblxuU3Bpbi5wcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIHtcbiAgZGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gIGluZGljYXRvcjogUHJvcFR5cGVzLm5vZGUsXG4gIHNpemU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNwaW5uaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgdGlwOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB3cmFwcGVyQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59LCBTcGluLnByb3BUeXBlcywge30pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS1NwaW4gZXh0ZW5kcyBBbnRkQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLmRlZmF1bHRQcm9wcywgU3Bpbi5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBTcGluXG4gIH0pO1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5wcm9wVHlwZXMsIFNwaW4ucHJvcFR5cGVzLCB7fSk7XG5cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5jb21wTmFtZSA9ICdTS1NwaW4nO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7Y29tcFRhZzogQ29tcFRhZywgY2xhc3NOYW1lfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBUYWcgey4uLnRoaXMuc2tUcmFuc1Byb3BzMlNlbGYoQ29tcFRhZyl9XG4gICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICAgICAgIHNwaW5uaW5nPXt0aGlzLnNrVmFsKCl9PlxuICAgICAgICB7dGhpcy5za1RyYW5zUHJvcHMyQ2hpbGQoKX1cbiAgICAgIDwvQ29tcFRhZz5cbiAgICApO1xuICB9XG59XG4iXX0=