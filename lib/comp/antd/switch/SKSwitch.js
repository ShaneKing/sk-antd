'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _switch = require('antd/lib/switch');

var _switch2 = _interopRequireDefault(_switch);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/switch/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _AntdComp2 = require('../AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

SKSwitch.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, {
  compTag: _switch2.default
});
SKSwitch.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, {});
exports.default = SKSwitch;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9zd2l0Y2gvU0tTd2l0Y2guanMiXSwibmFtZXMiOlsiU0tTd2l0Y2giLCJhcmdzIiwiY29tcE5hbWUiLCJoYW5kbGVDaGFuZ2UiLCJjaGVja2VkIiwic2tWYWwiLCJwcm9wcyIsIkNvbXBUYWciLCJjb21wVGFnIiwiY2hlY2tlZENoaWxkcmVuIiwidW5DaGVja2VkQ2hpbGRyZW4iLCJza1RyYW5zUHJvcHMyU2VsZiIsImRlZmF1bHRQcm9wcyIsImFzc2lnbiIsInByb3BUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7O0FBTW5CLHNCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSwrSUFDVkEsSUFEVTs7QUFFbkIsVUFBS0MsUUFBTCxHQUFnQixVQUFoQjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsVUFBQ0MsT0FBRCxFQUFhO0FBQy9CLFlBQUtDLEtBQUwsQ0FBV0QsT0FBWDtBQUNELEtBRkQ7QUFIbUI7QUFNcEI7Ozs7NkJBRVE7QUFBQSxtQkFDc0QsS0FBS0UsS0FEM0Q7QUFBQSxVQUNPQyxPQURQLFVBQ0ZDLE9BREU7QUFBQSxVQUNnQkMsZUFEaEIsVUFDZ0JBLGVBRGhCO0FBQUEsVUFDaUNDLGlCQURqQyxVQUNpQ0EsaUJBRGpDOzs7QUFHUCxhQUNFLDhCQUFDLE9BQUQsZUFBYSxLQUFLQyxpQkFBTCxDQUF1QkosT0FBdkIsQ0FBYjtBQUNTLGlCQUFTLEtBQUtGLEtBQUwsRUFEbEI7QUFFUyx5QkFBaUJJLGVBRjFCO0FBR1Msa0JBQVUsS0FBS04sWUFIeEI7QUFJUywyQkFBbUJPLGlCQUo1QixJQURGO0FBT0Q7Ozs7OztBQXhCa0JWLFEsQ0FDWlksWSxHQUFlLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNELFlBQXZCLEVBQXFDO0FBQ3pESjtBQUR5RCxDQUFyQyxDO0FBREhSLFEsQ0FJWmMsUyxHQUFZLFNBQUdELE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNDLFNBQXZCLEVBQWtDLEVBQWxDLEM7a0JBSkFkLFEiLCJmaWxlIjoiY29tcC9hbnRkL3N3aXRjaC9TS1N3aXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3dpdGNofSBmcm9tICdhbnRkJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1NLfSBmcm9tICdzay1qcyc7XG5pbXBvcnQgQW50ZENvbXAgZnJvbSAnLi4vQW50ZENvbXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS1N3aXRjaCBleHRlbmRzIEFudGRDb21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAuZGVmYXVsdFByb3BzLCB7XG4gICAgY29tcFRhZzogU3dpdGNoXG4gIH0pO1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5wcm9wVHlwZXMsIHt9KTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5jb21wTmFtZSA9ICdTS1N3aXRjaCc7XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSAoY2hlY2tlZCkgPT4ge1xuICAgICAgdGhpcy5za1ZhbChjaGVja2VkKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtjb21wVGFnOiBDb21wVGFnLCBjaGVja2VkQ2hpbGRyZW4sIHVuQ2hlY2tlZENoaWxkcmVufSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBUYWcgey4uLnRoaXMuc2tUcmFuc1Byb3BzMlNlbGYoQ29tcFRhZyl9XG4gICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnNrVmFsKCl9XG4gICAgICAgICAgICAgICBjaGVja2VkQ2hpbGRyZW49e2NoZWNrZWRDaGlsZHJlbn1cbiAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgIHVuQ2hlY2tlZENoaWxkcmVuPXt1bkNoZWNrZWRDaGlsZHJlbn0vPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==