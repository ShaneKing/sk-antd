'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style2 = require('antd/lib/switch/style');

var _switch = require('antd/lib/switch');

var _switch2 = _interopRequireDefault(_switch);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _skJs2 = _interopRequireDefault(_skJs);

var _Comp2 = require('../../util/Comp');

var _Comp3 = _interopRequireDefault(_Comp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SKSwitch = function (_Comp) {
  _inherits(SKSwitch, _Comp);

  function SKSwitch() {
    var _ref;

    _classCallCheck(this, SKSwitch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(this, (_ref = SKSwitch.__proto__ || Object.getPrototypeOf(SKSwitch)).call.apply(_ref, [this].concat(args)));
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


      return _react2.default.createElement(CompTag, _extends({}, this.compValidProps(CompTag), {
        checked: this.skVal(),
        checkedChildren: checkedChildren,
        onChange: this.handleChange.bind(this),
        unCheckedChildren: unCheckedChildren }));
    }
  }]);

  return SKSwitch;
}(_Comp3.default);

SKSwitch.defaultProps = {
  compTag: _switch2.default
};
SKSwitch.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _switch2.default.propTypes, {});
exports.default = SKSwitch;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9TS1N3aXRjaC5qcyJdLCJuYW1lcyI6WyJTS1N3aXRjaCIsImFyZ3MiLCJjaGVja2VkIiwic2tWYWwiLCJwcm9wcyIsIkNvbXBUYWciLCJjb21wVGFnIiwiY2hlY2tlZENoaWxkcmVuIiwidW5DaGVja2VkQ2hpbGRyZW4iLCJjb21wVmFsaWRQcm9wcyIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7O0FBTW5CLHNCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSwwSUFDVkEsSUFEVTtBQUVwQjs7OztpQ0FFWUMsTyxFQUFTO0FBQ3BCLFdBQUtDLEtBQUwsQ0FBV0QsT0FBWDtBQUNEOzs7NkJBRVE7QUFBQSxtQkFDc0QsS0FBS0UsS0FEM0Q7QUFBQSxVQUNPQyxPQURQLFVBQ0ZDLE9BREU7QUFBQSxVQUNnQkMsZUFEaEIsVUFDZ0JBLGVBRGhCO0FBQUEsVUFDaUNDLGlCQURqQyxVQUNpQ0EsaUJBRGpDOzs7QUFHUCxhQUNFLDhCQUFDLE9BQUQsZUFBYSxLQUFLQyxjQUFMLENBQW9CSixPQUFwQixDQUFiO0FBQ0UsaUJBQVMsS0FBS0YsS0FBTCxFQURYO0FBRUUseUJBQWlCSSxlQUZuQjtBQUdFLGtCQUFVLEtBQUtHLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBSFo7QUFJRSwyQkFBbUJILGlCQUpyQixJQURGO0FBT0Q7Ozs7OztBQXhCa0JSLFEsQ0FDWlksWSxHQUFlO0FBQ3BCTjtBQURvQixDO0FBREhOLFEsQ0FJWmEsUyxHQUFZLGVBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsZUFBS0QsU0FBbkIsRUFBOEIsaUJBQU9BLFNBQXJDLEVBQWdELEVBQWhELEM7a0JBSkFiLFEiLCJmaWxlIjoiY29tcC9hbnRkL1NLU3dpdGNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTd2l0Y2h9IGZyb20gJ2FudGQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTSyBmcm9tICdzay1qcyc7XG5pbXBvcnQgQ29tcCBmcm9tICcuLi8uLi91dGlsL0NvbXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS1N3aXRjaCBleHRlbmRzIENvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbXBUYWc6IFN3aXRjaFxuICB9O1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBDb21wLnByb3BUeXBlcywgU3dpdGNoLnByb3BUeXBlcywge30pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShjaGVja2VkKSB7XG4gICAgdGhpcy5za1ZhbChjaGVja2VkKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge2NvbXBUYWc6IENvbXBUYWcsIGNoZWNrZWRDaGlsZHJlbiwgdW5DaGVja2VkQ2hpbGRyZW59ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcFRhZyB7Li4udGhpcy5jb21wVmFsaWRQcm9wcyhDb21wVGFnKX1cbiAgICAgICAgY2hlY2tlZD17dGhpcy5za1ZhbCgpfVxuICAgICAgICBjaGVja2VkQ2hpbGRyZW49e2NoZWNrZWRDaGlsZHJlbn1cbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgIHVuQ2hlY2tlZENoaWxkcmVuPXt1bkNoZWNrZWRDaGlsZHJlbn0vPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==