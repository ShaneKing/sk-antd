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

var _Comp2 = require('../../util/Comp');

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
    return _this;
  }

  _createClass(SKA, [{
    key: 'handleClick',
    value: function handleClick(e) {
      if (this.props.onClick && _lodash2.default.isFunction(this.props.onClick)) {
        this.props.onClick(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var CompTag = this.props.compTag;

      return _react2.default.createElement(
        CompTag,
        _extends({}, this.skTransProps2Self(CompTag), {
          href: 'javascript:void(0);',
          onClick: this.handleClick.bind(this) }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvaHRtbC9TS0EuanMiXSwibmFtZXMiOlsiU0tBIiwiYXJncyIsImNvbXBOYW1lIiwiZSIsInByb3BzIiwib25DbGljayIsImlzRnVuY3Rpb24iLCJDb21wVGFnIiwiY29tcFRhZyIsInNrVHJhbnNQcm9wczJTZWxmIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwic2tUcmFuc1Byb3BzMkNoaWxkIiwiZGVmYXVsdFByb3BzIiwiYXNzaWduIiwiVEFHIiwiYSIsInByb3BUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEc7OztBQU9uQixpQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEscUlBQ1ZBLElBRFU7O0FBRW5CLFVBQUtDLFFBQUwsR0FBZ0IsS0FBaEI7QUFGbUI7QUFHcEI7Ozs7Z0NBRVdDLEMsRUFBRztBQUNiLFVBQUksS0FBS0MsS0FBTCxDQUFXQyxPQUFYLElBQXNCLGlCQUFFQyxVQUFGLENBQWEsS0FBS0YsS0FBTCxDQUFXQyxPQUF4QixDQUExQixFQUE0RDtBQUMxRCxhQUFLRCxLQUFMLENBQVdDLE9BQVgsQ0FBbUJGLENBQW5CO0FBQ0Q7QUFDRjs7OzZCQUVRO0FBQUEsVUFDT0ksT0FEUCxHQUNrQixLQUFLSCxLQUR2QixDQUNGSSxPQURFOztBQUVQLGFBQ0U7QUFBQyxlQUFEO0FBQUEscUJBQWEsS0FBS0MsaUJBQUwsQ0FBdUJGLE9BQXZCLENBQWI7QUFDUyxnQkFBTSxxQkFEZjtBQUVTLG1CQUFTLEtBQUtHLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLENBRmxCO0FBR0csYUFBS0Msa0JBQUw7QUFISCxPQURGO0FBT0Q7Ozs7OztBQTNCa0JaLEcsQ0FDWmEsWSxHQUFlLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsZUFBS0QsWUFBbkIsRUFBaUM7QUFDckRMLFdBQVMsZ0JBQU1PLEdBQU4sQ0FBVUM7QUFEa0MsQ0FBakMsQztBQURIaEIsRyxDQUlaaUIsUyxHQUFZLFNBQUdILE1BQUgsQ0FBVSxFQUFWLEVBQWMsZUFBS0csU0FBbkIsRUFBOEIsRUFBOUIsQztrQkFKQWpCLEciLCJmaWxlIjoiY29tcC9odG1sL1NLQS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTS30gZnJvbSAnc2stanMnO1xuaW1wb3J0IENvbXAgZnJvbSAnLi4vLi4vdXRpbC9Db21wJztcbmltcG9ydCBSRUFDVCBmcm9tICcuLi8uLi91dGlsL1JFQUNUJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tBIGV4dGVuZHMgQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIENvbXAuZGVmYXVsdFByb3BzLCB7XG4gICAgY29tcFRhZzogUkVBQ1QuVEFHLmFcbiAgfSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIENvbXAucHJvcFR5cGVzLCB7fSk7XG5cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5jb21wTmFtZSA9ICdTS0EnO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soZSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2sgJiYgXy5pc0Z1bmN0aW9uKHRoaXMucHJvcHMub25DbGljaykpIHtcbiAgICAgIHRoaXMucHJvcHMub25DbGljayhlKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtjb21wVGFnOiBDb21wVGFnfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wVGFnIHsuLi50aGlzLnNrVHJhbnNQcm9wczJTZWxmKENvbXBUYWcpfVxuICAgICAgICAgICAgICAgaHJlZj17J2phdmFzY3JpcHQ6dm9pZCgwKTsnfVxuICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpfT5cbiAgICAgICAge3RoaXMuc2tUcmFuc1Byb3BzMkNoaWxkKCl9XG4gICAgICA8L0NvbXBUYWc+XG4gICAgKTtcbiAgfVxufVxuIl19