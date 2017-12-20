'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _Comp2 = require('../Comp');

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

    var _this = _possibleConstructorReturn(this, (_ref = SKA.__proto__ || Object.getPrototypeOf(SKA)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'SKA';
    _this.handleClick = function (e) {
      if (_this.props.onClick && _lodash2.default.isFunction(_this.props.onClick)) {
        _this.props.onClick(e);
      }
    };
    return _this;
  }

  _createClass(SKA, [{
    key: 'render',
    value: function render() {
      var CompTag = this.props.compTag;

      return _react2.default.createElement(
        CompTag,
        _extends({}, this.skTransProps2Self(CompTag), {
          href: 'javascript:void(0);',
          onClick: this.handleClick }),
        this.skTransProps2Child()
      );
    }
  }]);

  return SKA;
}(_Comp3.default);

SKA.defaultProps = _skJs.SK.assign({}, _Comp3.default.defaultProps, {
  compTag: _REACT2.default.TAG.a
});
SKA.propTypes = _skJs.SK.assign({}, _Comp3.default.propTypes, {});
exports.default = SKA;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvaHRtbC9TS0EuanMiXSwibmFtZXMiOlsiU0tBIiwiYXJncyIsImNvbXBOYW1lIiwiaGFuZGxlQ2xpY2siLCJlIiwicHJvcHMiLCJvbkNsaWNrIiwiaXNGdW5jdGlvbiIsIkNvbXBUYWciLCJjb21wVGFnIiwic2tUcmFuc1Byb3BzMlNlbGYiLCJza1RyYW5zUHJvcHMyQ2hpbGQiLCJkZWZhdWx0UHJvcHMiLCJhc3NpZ24iLCJUQUciLCJhIiwicHJvcFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsRzs7O0FBTW5CLGlCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSxxSUFDVkEsSUFEVTs7QUFFbkIsVUFBS0MsUUFBTCxHQUFnQixLQUFoQjtBQUNBLFVBQUtDLFdBQUwsR0FBbUIsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3hCLFVBQUksTUFBS0MsS0FBTCxDQUFXQyxPQUFYLElBQXNCLGlCQUFFQyxVQUFGLENBQWEsTUFBS0YsS0FBTCxDQUFXQyxPQUF4QixDQUExQixFQUE0RDtBQUMxRCxjQUFLRCxLQUFMLENBQVdDLE9BQVgsQ0FBbUJGLENBQW5CO0FBQ0Q7QUFDRixLQUpEO0FBSG1CO0FBUXBCOzs7OzZCQUVRO0FBQUEsVUFDT0ksT0FEUCxHQUNrQixLQUFLSCxLQUR2QixDQUNGSSxPQURFOztBQUVQLGFBQ0U7QUFBQyxlQUFEO0FBQUEscUJBQWEsS0FBS0MsaUJBQUwsQ0FBdUJGLE9BQXZCLENBQWI7QUFDUyxnQkFBTSxxQkFEZjtBQUVTLG1CQUFTLEtBQUtMLFdBRnZCO0FBR0csYUFBS1Esa0JBQUw7QUFISCxPQURGO0FBT0Q7Ozs7OztBQXpCa0JYLEcsQ0FDWlksWSxHQUFlLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsZUFBS0QsWUFBbkIsRUFBaUM7QUFDckRILFdBQVMsZ0JBQU1LLEdBQU4sQ0FBVUM7QUFEa0MsQ0FBakMsQztBQURIZixHLENBSVpnQixTLEdBQVksU0FBR0gsTUFBSCxDQUFVLEVBQVYsRUFBYyxlQUFLRyxTQUFuQixFQUE4QixFQUE5QixDO2tCQUpBaEIsRyIsImZpbGUiOiJjb21wL2h0bWwvU0tBLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1NLfSBmcm9tICdzay1qcyc7XG5pbXBvcnQgQ29tcCBmcm9tICcuLi9Db21wJztcbmltcG9ydCBSRUFDVCBmcm9tICcuLi8uLi91dGlsL1JFQUNUJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tBIGV4dGVuZHMgQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIENvbXAuZGVmYXVsdFByb3BzLCB7XG4gICAgY29tcFRhZzogUkVBQ1QuVEFHLmFcbiAgfSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIENvbXAucHJvcFR5cGVzLCB7fSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnU0tBJztcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gKGUpID0+IHtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2sgJiYgXy5pc0Z1bmN0aW9uKHRoaXMucHJvcHMub25DbGljaykpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKGUpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtjb21wVGFnOiBDb21wVGFnfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wVGFnIHsuLi50aGlzLnNrVHJhbnNQcm9wczJTZWxmKENvbXBUYWcpfVxuICAgICAgICAgICAgICAgaHJlZj17J2phdmFzY3JpcHQ6dm9pZCgwKTsnfVxuICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+XG4gICAgICAgIHt0aGlzLnNrVHJhbnNQcm9wczJDaGlsZCgpfVxuICAgICAgPC9Db21wVGFnPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==