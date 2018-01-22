'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _layout = require('antd/lib/layout');

var _layout2 = _interopRequireDefault(_layout);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/layout/style');

var _dedupe = require('classnames/dedupe');

var _dedupe2 = _interopRequireDefault(_dedupe);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _OriginLayout = require('./OriginLayout');

var _OriginLayout2 = _interopRequireDefault(_OriginLayout);

var _AntdComp2 = require('../AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SKLayout = function (_AntdComp) {
  _inherits(SKLayout, _AntdComp);

  function SKLayout() {
    var _ref;

    _classCallCheck(this, SKLayout);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SKLayout.__proto__ || Object.getPrototypeOf(SKLayout)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'SKLayout';
    return _this;
  }

  _createClass(SKLayout, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          CompTag = _props.compTag,
          className = _props.className;


      var classes = {};
      classes['ant-layout-has-sider'] = this.hasSpecialChild('SKSider');

      return _react2.default.createElement(
        CompTag,
        _extends({}, this.skTransProps2Self(CompTag), { className: (0, _dedupe2.default)(classes, className) }),
        this.skTransProps2Child()
      );
    }
  }]);

  return SKLayout;
}(_AntdComp3.default);

SKLayout.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, _OriginLayout2.default.defaultProps, {
  compTag: _layout2.default
});
SKLayout.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _OriginLayout2.default.propTypes, {});
exports.default = SKLayout;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGQvbGF5b3V0L1NLTGF5b3V0LmpzIl0sIm5hbWVzIjpbIlNLTGF5b3V0IiwiYXJncyIsImNvbXBOYW1lIiwicHJvcHMiLCJDb21wVGFnIiwiY29tcFRhZyIsImNsYXNzTmFtZSIsImNsYXNzZXMiLCJoYXNTcGVjaWFsQ2hpbGQiLCJza1RyYW5zUHJvcHMyU2VsZiIsInNrVHJhbnNQcm9wczJDaGlsZCIsImRlZmF1bHRQcm9wcyIsImFzc2lnbiIsInByb3BUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFHcUJBLFE7OztBQU1uQixzQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsK0lBQ1ZBLElBRFU7O0FBRW5CLFVBQUtDLFFBQUwsR0FBZ0IsVUFBaEI7QUFGbUI7QUFHcEI7Ozs7NkJBRVE7QUFBQSxtQkFDNkIsS0FBS0MsS0FEbEM7QUFBQSxVQUNPQyxPQURQLFVBQ0ZDLE9BREU7QUFBQSxVQUNnQkMsU0FEaEIsVUFDZ0JBLFNBRGhCOzs7QUFHUCxVQUFJQyxVQUFVLEVBQWQ7QUFDQUEsY0FBUSxzQkFBUixJQUFrQyxLQUFLQyxlQUFMLENBQXFCLFNBQXJCLENBQWxDOztBQUVBLGFBQ0U7QUFBQyxlQUFEO0FBQUEscUJBQWEsS0FBS0MsaUJBQUwsQ0FBdUJMLE9BQXZCLENBQWIsSUFBOEMsV0FBVyxzQkFBV0csT0FBWCxFQUFvQkQsU0FBcEIsQ0FBekQ7QUFDRyxhQUFLSSxrQkFBTDtBQURILE9BREY7QUFLRDs7Ozs7O0FBdEJrQlYsUSxDQUNaVyxZLEdBQWUsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0QsWUFBdkIsRUFBcUMsdUJBQWFBLFlBQWxELEVBQWdFO0FBQ3BGTjtBQURvRixDQUFoRSxDO0FBREhMLFEsQ0FJWmEsUyxHQUFZLFNBQUdELE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNDLFNBQXZCLEVBQWtDLHVCQUFhQSxTQUEvQyxFQUEwRCxFQUExRCxDO2tCQUpBYixRIiwiZmlsZSI6ImFudGQvbGF5b3V0L1NLTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtMYXlvdXR9IGZyb20gJ2FudGQnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9kZWR1cGUnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U0t9IGZyb20gJ3NrLWpzJztcbmltcG9ydCBPcmlnaW5MYXlvdXQgZnJvbSAnLi9PcmlnaW5MYXlvdXQnO1xuaW1wb3J0IEFudGRDb21wIGZyb20gJy4uL0FudGRDb21wJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS0xheW91dCBleHRlbmRzIEFudGRDb21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAuZGVmYXVsdFByb3BzLCBPcmlnaW5MYXlvdXQuZGVmYXVsdFByb3BzLCB7XG4gICAgY29tcFRhZzogTGF5b3V0XG4gIH0pO1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5wcm9wVHlwZXMsIE9yaWdpbkxheW91dC5wcm9wVHlwZXMsIHt9KTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5jb21wTmFtZSA9ICdTS0xheW91dCc7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtjb21wVGFnOiBDb21wVGFnLCBjbGFzc05hbWV9ID0gdGhpcy5wcm9wcztcblxuICAgIGxldCBjbGFzc2VzID0ge307XG4gICAgY2xhc3Nlc1snYW50LWxheW91dC1oYXMtc2lkZXInXSA9IHRoaXMuaGFzU3BlY2lhbENoaWxkKCdTS1NpZGVyJyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBUYWcgey4uLnRoaXMuc2tUcmFuc1Byb3BzMlNlbGYoQ29tcFRhZyl9IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc2VzLCBjbGFzc05hbWUpfT5cbiAgICAgICAge3RoaXMuc2tUcmFuc1Byb3BzMkNoaWxkKCl9XG4gICAgICA8L0NvbXBUYWc+XG4gICAgKTtcbiAgfVxufVxuIl19