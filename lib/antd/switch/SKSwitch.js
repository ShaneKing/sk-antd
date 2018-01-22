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

var _Const = require('../../Const');

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
    _this.handleChange = function (checked) {
      _this.skVal(checked);
    };
    return _this;
  }

  _createClass(SKSwitch, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          CompTag = _props.compTag,
          checkedChildren = _props.checkedChildren,
          unCheckedChildren = _props.unCheckedChildren;


      return _react2.default.createElement(CompTag, _extends({}, this.skTransProps2Self(CompTag), {
        checked: this.skVal(),
        checkedChildren: checkedChildren,
        onChange: this.handleChange,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGQvc3dpdGNoL1NLU3dpdGNoLmpzIl0sIm5hbWVzIjpbImRlZmF1bHRQcm9wcyIsImFzc2lnbiIsImFsbG93Q2xlYXIiLCJjaGVja2VkIiwiZGVmYXVsdENoZWNrZWQiLCJzaXplIiwiRGVmYXVsdCIsImxvYWRpbmciLCJwcm9wVHlwZXMiLCJib29sIiwiY2hlY2tlZENoaWxkcmVuIiwib25lT2ZUeXBlIiwic3RyaW5nIiwibm9kZSIsInVuQ2hlY2tlZENoaWxkcmVuIiwib25DaGFuZ2UiLCJmdW5jIiwiU0tTd2l0Y2giLCJhcmdzIiwiY29tcE5hbWUiLCJoYW5kbGVDaGFuZ2UiLCJza1ZhbCIsInByb3BzIiwiQ29tcFRhZyIsImNvbXBUYWciLCJza1RyYW5zUHJvcHMyU2VsZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0FBRUEsaUJBQU9BLFlBQVAsR0FBc0IsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYztBQUNsQ0MsY0FBWSxLQURzQjtBQUVsQ0MsV0FBUyxLQUZ5QjtBQUdsQ0Msa0JBQWdCLEtBSGtCO0FBSWxDQyxRQUFNLFlBQUtDLE9BSnVCO0FBS2xDQyxXQUFTO0FBTHlCLENBQWQsRUFNbkIsaUJBQU9QLFlBTlksRUFNRSxFQU5GLENBQXRCOztBQVFBLGlCQUFPUSxTQUFQLEdBQW1CLFNBQUdQLE1BQUgsQ0FBVSxFQUFWLEVBQWM7QUFDL0I7QUFDQUMsY0FBWSxvQkFBVU8sSUFGUztBQUcvQk4sV0FBUyxvQkFBVU0sSUFIWTtBQUkvQkMsbUJBQWlCLG9CQUFVQyxTQUFWLENBQW9CLENBQ25DLG9CQUFVQyxNQUR5QixFQUVuQyxvQkFBVUMsSUFGeUIsQ0FBcEIsQ0FKYztBQVEvQlQsa0JBQWdCLG9CQUFVSyxJQVJLO0FBUy9CSixRQUFNLG9CQUFVTyxNQVRlO0FBVS9CRSxxQkFBbUIsb0JBQVVILFNBQVYsQ0FBb0IsQ0FDckMsb0JBQVVDLE1BRDJCLEVBRXJDLG9CQUFVQyxJQUYyQixDQUFwQixDQVZZO0FBYy9CRSxZQUFVLG9CQUFVQyxJQWRXO0FBZS9CVCxXQUFTLG9CQUFVRTtBQWZZLENBQWQsRUFnQmhCLGlCQUFPRCxTQWhCUyxFQWdCRSxFQWhCRixDQUFuQjs7SUFrQnFCUyxROzs7QUFNbkIsc0JBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLCtJQUNWQSxJQURVOztBQUVuQixVQUFLQyxRQUFMLEdBQWdCLFVBQWhCO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixVQUFDakIsT0FBRCxFQUFhO0FBQy9CLFlBQUtrQixLQUFMLENBQVdsQixPQUFYO0FBQ0QsS0FGRDtBQUhtQjtBQU1wQjs7Ozs2QkFFUTtBQUFBLG1CQUNzRCxLQUFLbUIsS0FEM0Q7QUFBQSxVQUNPQyxPQURQLFVBQ0ZDLE9BREU7QUFBQSxVQUNnQmQsZUFEaEIsVUFDZ0JBLGVBRGhCO0FBQUEsVUFDaUNJLGlCQURqQyxVQUNpQ0EsaUJBRGpDOzs7QUFHUCxhQUNFLDhCQUFDLE9BQUQsZUFBYSxLQUFLVyxpQkFBTCxDQUF1QkYsT0FBdkIsQ0FBYjtBQUNTLGlCQUFTLEtBQUtGLEtBQUwsRUFEbEI7QUFFUyx5QkFBaUJYLGVBRjFCO0FBR1Msa0JBQVUsS0FBS1UsWUFIeEI7QUFJUywyQkFBbUJOLGlCQUo1QixJQURGO0FBT0Q7Ozs7OztBQXhCa0JHLFEsQ0FDWmpCLFksR0FBZSxTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTRCxZQUF2QixFQUFxQyxpQkFBT0EsWUFBNUMsRUFBMEQ7QUFDOUV3QjtBQUQ4RSxDQUExRCxDO0FBREhQLFEsQ0FJWlQsUyxHQUFZLFNBQUdQLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNPLFNBQXZCLEVBQWtDLGlCQUFPQSxTQUF6QyxFQUFvRCxFQUFwRCxDO2tCQUpBUyxRIiwiZmlsZSI6ImFudGQvc3dpdGNoL1NLU3dpdGNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTd2l0Y2h9IGZyb20gJ2FudGQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1NLfSBmcm9tICdzay1qcyc7XG5pbXBvcnQgQW50ZENvbXAgZnJvbSAnLi4vQW50ZENvbXAnO1xuaW1wb3J0IHtTSVpFfSBmcm9tICcuLi8uLi9Db25zdCc7XG5cblN3aXRjaC5kZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIHtcbiAgYWxsb3dDbGVhcjogZmFsc2UsXG4gIGNoZWNrZWQ6IGZhbHNlLFxuICBkZWZhdWx0Q2hlY2tlZDogZmFsc2UsXG4gIHNpemU6IFNJWkUuRGVmYXVsdCxcbiAgbG9hZGluZzogZmFsc2Vcbn0sIFN3aXRjaC5kZWZhdWx0UHJvcHMsIHt9KTtcblxuU3dpdGNoLnByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwge1xuICAvL2h0dHBzOi8vYW50LmRlc2lnbi9jb21wb25lbnRzL3N3aXRjaC1jbi8jQVBJXG4gIGFsbG93Q2xlYXI6IFByb3BUeXBlcy5ib29sLFxuICBjaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2hlY2tlZENoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5ub2RlXG4gIF0pLFxuICBkZWZhdWx0Q2hlY2tlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHNpemU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHVuQ2hlY2tlZENoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5ub2RlXG4gIF0pLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sXG59LCBTd2l0Y2gucHJvcFR5cGVzLCB7fSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNLU3dpdGNoIGV4dGVuZHMgQW50ZENvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5kZWZhdWx0UHJvcHMsIFN3aXRjaC5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBTd2l0Y2hcbiAgfSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLnByb3BUeXBlcywgU3dpdGNoLnByb3BUeXBlcywge30pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLmNvbXBOYW1lID0gJ1NLU3dpdGNoJztcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IChjaGVja2VkKSA9PiB7XG4gICAgICB0aGlzLnNrVmFsKGNoZWNrZWQpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge2NvbXBUYWc6IENvbXBUYWcsIGNoZWNrZWRDaGlsZHJlbiwgdW5DaGVja2VkQ2hpbGRyZW59ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcFRhZyB7Li4udGhpcy5za1RyYW5zUHJvcHMyU2VsZihDb21wVGFnKX1cbiAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc2tWYWwoKX1cbiAgICAgICAgICAgICAgIGNoZWNrZWRDaGlsZHJlbj17Y2hlY2tlZENoaWxkcmVufVxuICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgdW5DaGVja2VkQ2hpbGRyZW49e3VuQ2hlY2tlZENoaWxkcmVufS8+XG4gICAgKTtcbiAgfVxufVxuIl19