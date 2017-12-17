'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _switch = require('antd/lib/switch');

var _switch2 = _interopRequireDefault(_switch);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/switch/style');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _AntdComp2 = require('../AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

var _Const = require('../../../util/Const');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_switch2.default.defaultProps = _skJs.SK.assign({}, {
  allowClear: false,
  checked: false,
  defaultChecked: false,
  size: _Const.SIZE.Default,
  loading: false
}, _switch2.default.defaultProps, {});

_switch2.default.propTypes = _skJs.SK.assign({}, {
  //https://ant.design/components/switch-cn/#API
  allowClear: _propTypes2.default.bool,
  checked: _propTypes2.default.bool,
  checkedChildren: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  defaultChecked: _propTypes2.default.bool,
  size: _propTypes2.default.string,
  unCheckedChildren: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  onChange: _propTypes2.default.func,
  loading: _propTypes2.default.bool
}, _switch2.default.propTypes, {});

var SKSwitch = function (_AntdComp) {
  _inherits(SKSwitch, _AntdComp);

  function SKSwitch() {
    var _ref;

    _classCallCheck(this, SKSwitch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SKSwitch.__proto__ || Object.getPrototypeOf(SKSwitch)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'SKSwitch';
    return _this;
  }

  _createClass(SKSwitch, [{
    key: 'handleChange',
    value: function handleChange(checked) {
      this.skVal(checked);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          CompTag = _props.compTag,
          checkedChildren = _props.checkedChildren,
          unCheckedChildren = _props.unCheckedChildren;


      return _react2.default.createElement(CompTag, _extends({}, this.skTransProps2Self(CompTag), {
        checked: this.skVal(),
        checkedChildren: checkedChildren,
        onChange: this.handleChange.bind(this),
        unCheckedChildren: unCheckedChildren }));
    }
  }]);

  return SKSwitch;
}(_AntdComp3.default);

SKSwitch.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, _switch2.default.defaultProps, {
  compTag: _switch2.default
});
SKSwitch.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _switch2.default.propTypes, {});
exports.default = SKSwitch;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9zd2l0Y2gvU0tTd2l0Y2guanMiXSwibmFtZXMiOlsiZGVmYXVsdFByb3BzIiwiYXNzaWduIiwiYWxsb3dDbGVhciIsImNoZWNrZWQiLCJkZWZhdWx0Q2hlY2tlZCIsInNpemUiLCJEZWZhdWx0IiwibG9hZGluZyIsInByb3BUeXBlcyIsImJvb2wiLCJjaGVja2VkQ2hpbGRyZW4iLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJub2RlIiwidW5DaGVja2VkQ2hpbGRyZW4iLCJvbkNoYW5nZSIsImZ1bmMiLCJTS1N3aXRjaCIsImFyZ3MiLCJjb21wTmFtZSIsInNrVmFsIiwicHJvcHMiLCJDb21wVGFnIiwiY29tcFRhZyIsInNrVHJhbnNQcm9wczJTZWxmIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0FBRUEsaUJBQU9BLFlBQVAsR0FBc0IsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYztBQUNsQ0MsY0FBWSxLQURzQjtBQUVsQ0MsV0FBUyxLQUZ5QjtBQUdsQ0Msa0JBQWdCLEtBSGtCO0FBSWxDQyxRQUFNLFlBQUtDLE9BSnVCO0FBS2xDQyxXQUFTO0FBTHlCLENBQWQsRUFNbkIsaUJBQU9QLFlBTlksRUFNRSxFQU5GLENBQXRCOztBQVFBLGlCQUFPUSxTQUFQLEdBQW1CLFNBQUdQLE1BQUgsQ0FBVSxFQUFWLEVBQWM7QUFDL0I7QUFDQUMsY0FBWSxvQkFBVU8sSUFGUztBQUcvQk4sV0FBUyxvQkFBVU0sSUFIWTtBQUkvQkMsbUJBQWlCLG9CQUFVQyxTQUFWLENBQW9CLENBQ25DLG9CQUFVQyxNQUR5QixFQUVuQyxvQkFBVUMsSUFGeUIsQ0FBcEIsQ0FKYztBQVEvQlQsa0JBQWdCLG9CQUFVSyxJQVJLO0FBUy9CSixRQUFNLG9CQUFVTyxNQVRlO0FBVS9CRSxxQkFBbUIsb0JBQVVILFNBQVYsQ0FBb0IsQ0FDckMsb0JBQVVDLE1BRDJCLEVBRXJDLG9CQUFVQyxJQUYyQixDQUFwQixDQVZZO0FBYy9CRSxZQUFVLG9CQUFVQyxJQWRXO0FBZS9CVCxXQUFTLG9CQUFVRTtBQWZZLENBQWQsRUFnQmhCLGlCQUFPRCxTQWhCUyxFQWdCRSxFQWhCRixDQUFuQjs7SUFrQnFCUyxROzs7QUFPbkIsc0JBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLCtJQUNWQSxJQURVOztBQUVuQixVQUFLQyxRQUFMLEdBQWdCLFVBQWhCO0FBRm1CO0FBR3BCOzs7O2lDQUVZaEIsTyxFQUFTO0FBQ3BCLFdBQUtpQixLQUFMLENBQVdqQixPQUFYO0FBQ0Q7Ozs2QkFFUTtBQUFBLG1CQUNzRCxLQUFLa0IsS0FEM0Q7QUFBQSxVQUNPQyxPQURQLFVBQ0ZDLE9BREU7QUFBQSxVQUNnQmIsZUFEaEIsVUFDZ0JBLGVBRGhCO0FBQUEsVUFDaUNJLGlCQURqQyxVQUNpQ0EsaUJBRGpDOzs7QUFHUCxhQUNFLDhCQUFDLE9BQUQsZUFBYSxLQUFLVSxpQkFBTCxDQUF1QkYsT0FBdkIsQ0FBYjtBQUNTLGlCQUFTLEtBQUtGLEtBQUwsRUFEbEI7QUFFUyx5QkFBaUJWLGVBRjFCO0FBR1Msa0JBQVUsS0FBS2UsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FIbkI7QUFJUywyQkFBbUJaLGlCQUo1QixJQURGO0FBT0Q7Ozs7OztBQTFCa0JHLFEsQ0FDWmpCLFksR0FBZSxTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTRCxZQUF2QixFQUFxQyxpQkFBT0EsWUFBNUMsRUFBMEQ7QUFDOUV1QjtBQUQ4RSxDQUExRCxDO0FBREhOLFEsQ0FJWlQsUyxHQUFZLFNBQUdQLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNPLFNBQXZCLEVBQWtDLGlCQUFPQSxTQUF6QyxFQUFvRCxFQUFwRCxDO2tCQUpBUyxRIiwiZmlsZSI6ImNvbXAvYW50ZC9zd2l0Y2gvU0tTd2l0Y2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1N3aXRjaH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U0t9IGZyb20gJ3NrLWpzJztcbmltcG9ydCBBbnRkQ29tcCBmcm9tICcuLi9BbnRkQ29tcCc7XG5pbXBvcnQge1NJWkV9IGZyb20gJy4uLy4uLy4uL3V0aWwvQ29uc3QnO1xuXG5Td2l0Y2guZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCB7XG4gIGFsbG93Q2xlYXI6IGZhbHNlLFxuICBjaGVja2VkOiBmYWxzZSxcbiAgZGVmYXVsdENoZWNrZWQ6IGZhbHNlLFxuICBzaXplOiBTSVpFLkRlZmF1bHQsXG4gIGxvYWRpbmc6IGZhbHNlXG59LCBTd2l0Y2guZGVmYXVsdFByb3BzLCB7fSk7XG5cblN3aXRjaC5wcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIHtcbiAgLy9odHRwczovL2FudC5kZXNpZ24vY29tcG9uZW50cy9zd2l0Y2gtY24vI0FQSVxuICBhbGxvd0NsZWFyOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2hlY2tlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGNoZWNrZWRDaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubm9kZVxuICBdKSxcbiAgZGVmYXVsdENoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxuICBzaXplOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB1bkNoZWNrZWRDaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubm9kZVxuICBdKSxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbFxufSwgU3dpdGNoLnByb3BUeXBlcywge30pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS1N3aXRjaCBleHRlbmRzIEFudGRDb21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAuZGVmYXVsdFByb3BzLCBTd2l0Y2guZGVmYXVsdFByb3BzLCB7XG4gICAgY29tcFRhZzogU3dpdGNoXG4gIH0pO1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5wcm9wVHlwZXMsIFN3aXRjaC5wcm9wVHlwZXMsIHt9KTtcblxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLmNvbXBOYW1lID0gJ1NLU3dpdGNoJztcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShjaGVja2VkKSB7XG4gICAgdGhpcy5za1ZhbChjaGVja2VkKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge2NvbXBUYWc6IENvbXBUYWcsIGNoZWNrZWRDaGlsZHJlbiwgdW5DaGVja2VkQ2hpbGRyZW59ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcFRhZyB7Li4udGhpcy5za1RyYW5zUHJvcHMyU2VsZihDb21wVGFnKX1cbiAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc2tWYWwoKX1cbiAgICAgICAgICAgICAgIGNoZWNrZWRDaGlsZHJlbj17Y2hlY2tlZENoaWxkcmVufVxuICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICB1bkNoZWNrZWRDaGlsZHJlbj17dW5DaGVja2VkQ2hpbGRyZW59Lz5cbiAgICApO1xuICB9XG59XG4iXX0=