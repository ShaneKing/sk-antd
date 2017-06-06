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

var _Comp2 = require('../../utils/Comp');

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
    value: function handleChange(e) {
      this.skVal(e);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FudGQvU0tTd2l0Y2guanMiXSwibmFtZXMiOlsiU0tTd2l0Y2giLCJhcmdzIiwiZSIsInNrVmFsIiwicHJvcHMiLCJDb21wVGFnIiwiY29tcFRhZyIsImNoZWNrZWRDaGlsZHJlbiIsInVuQ2hlY2tlZENoaWxkcmVuIiwiY29tcFZhbGlkUHJvcHMiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFE7OztBQU1uQixzQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsMElBQ1ZBLElBRFU7QUFFcEI7Ozs7aUNBRVlDLEMsRUFBRztBQUNkLFdBQUtDLEtBQUwsQ0FBV0QsQ0FBWDtBQUNEOzs7NkJBRVE7QUFBQSxtQkFDc0QsS0FBS0UsS0FEM0Q7QUFBQSxVQUNPQyxPQURQLFVBQ0ZDLE9BREU7QUFBQSxVQUNnQkMsZUFEaEIsVUFDZ0JBLGVBRGhCO0FBQUEsVUFDaUNDLGlCQURqQyxVQUNpQ0EsaUJBRGpDOzs7QUFHUCxhQUNFLDhCQUFDLE9BQUQsZUFBYSxLQUFLQyxjQUFMLENBQW9CSixPQUFwQixDQUFiO0FBQ0UsaUJBQVMsS0FBS0YsS0FBTCxFQURYO0FBRUUseUJBQWlCSSxlQUZuQjtBQUdFLGtCQUFVLEtBQUtHLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBSFo7QUFJRSwyQkFBbUJILGlCQUpyQixJQURGO0FBT0Q7Ozs7OztBQXhCa0JSLFEsQ0FDWlksWSxHQUFlO0FBQ3BCTjtBQURvQixDO0FBREhOLFEsQ0FJWmEsUyxHQUFZLGVBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsZUFBS0QsU0FBbkIsRUFBOEIsaUJBQU9BLFNBQXJDLEVBQWdELEVBQWhELEM7a0JBSkFiLFEiLCJmaWxlIjoiY29tcHMvYW50ZC9TS1N3aXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3dpdGNofSBmcm9tICdhbnRkJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU0sgZnJvbSAnc2stanMnO1xuaW1wb3J0IENvbXAgZnJvbSAnLi4vLi4vdXRpbHMvQ29tcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNLU3dpdGNoIGV4dGVuZHMgQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY29tcFRhZzogU3dpdGNoXG4gIH07XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIENvbXAucHJvcFR5cGVzLCBTd2l0Y2gucHJvcFR5cGVzLCB7fSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnNrVmFsKGUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7Y29tcFRhZzogQ29tcFRhZywgY2hlY2tlZENoaWxkcmVuLCB1bkNoZWNrZWRDaGlsZHJlbn0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wVGFnIHsuLi50aGlzLmNvbXBWYWxpZFByb3BzKENvbXBUYWcpfVxuICAgICAgICBjaGVja2VkPXt0aGlzLnNrVmFsKCl9XG4gICAgICAgIGNoZWNrZWRDaGlsZHJlbj17Y2hlY2tlZENoaWxkcmVufVxuICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgdW5DaGVja2VkQ2hpbGRyZW49e3VuQ2hlY2tlZENoaWxkcmVufS8+XG4gICAgKTtcbiAgfVxufVxuIl19