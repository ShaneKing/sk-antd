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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvaHRtbC9TS0EuanMiXSwibmFtZXMiOlsiU0tBIiwiYXJncyIsImNvbXBOYW1lIiwiZSIsInByb3BzIiwib25DbGljayIsImlzRnVuY3Rpb24iLCJDb21wVGFnIiwiY29tcFRhZyIsInNrVHJhbnNQcm9wczJTZWxmIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwic2tUcmFuc1Byb3BzMkNoaWxkIiwiZGVmYXVsdFByb3BzIiwiYXNzaWduIiwiVEFHIiwiYSIsInByb3BUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEc7OztBQU9uQixpQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEscUlBQ1ZBLElBRFU7O0FBRW5CLFVBQUtDLFFBQUwsR0FBZ0IsS0FBaEI7QUFGbUI7QUFHcEI7Ozs7Z0NBRVdDLEMsRUFBRztBQUNiLFVBQUksS0FBS0MsS0FBTCxDQUFXQyxPQUFYLElBQXNCLGlCQUFFQyxVQUFGLENBQWEsS0FBS0YsS0FBTCxDQUFXQyxPQUF4QixDQUExQixFQUE0RDtBQUMxRCxhQUFLRCxLQUFMLENBQVdDLE9BQVgsQ0FBbUJGLENBQW5CO0FBQ0Q7QUFDRjs7OzZCQUVRO0FBQUEsVUFDT0ksT0FEUCxHQUNrQixLQUFLSCxLQUR2QixDQUNGSSxPQURFOztBQUVQLGFBQ0U7QUFBQyxlQUFEO0FBQUEscUJBQWEsS0FBS0MsaUJBQUwsQ0FBdUJGLE9BQXZCLENBQWI7QUFDUyxnQkFBTSxxQkFEZjtBQUVTLG1CQUFTLEtBQUtHLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLENBRmxCO0FBR0csYUFBS0Msa0JBQUw7QUFISCxPQURGO0FBT0Q7Ozs7OztBQTNCa0JaLEcsQ0FDWmEsWSxHQUFlLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsZUFBS0QsWUFBbkIsRUFBaUM7QUFDckRMLFdBQVMsZ0JBQU1PLEdBQU4sQ0FBVUM7QUFEa0MsQ0FBakMsQztBQURIaEIsRyxDQUlaaUIsUyxHQUFZLFNBQUdILE1BQUgsQ0FBVSxFQUFWLEVBQWMsZUFBS0csU0FBbkIsRUFBOEIsRUFBOUIsQztrQkFKQWpCLEciLCJmaWxlIjoiY29tcC9odG1sL1NLQS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTS30gZnJvbSAnc2stanMnO1xuaW1wb3J0IENvbXAgZnJvbSAnLi4vQ29tcCc7XG5pbXBvcnQgUkVBQ1QgZnJvbSAnLi4vLi4vdXRpbC9SRUFDVCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNLQSBleHRlbmRzIENvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCBDb21wLmRlZmF1bHRQcm9wcywge1xuICAgIGNvbXBUYWc6IFJFQUNULlRBRy5hXG4gIH0pO1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBDb21wLnByb3BUeXBlcywge30pO1xuXG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnU0tBJztcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrICYmIF8uaXNGdW5jdGlvbih0aGlzLnByb3BzLm9uQ2xpY2spKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2xpY2soZSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7Y29tcFRhZzogQ29tcFRhZ30gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8Q29tcFRhZyB7Li4udGhpcy5za1RyYW5zUHJvcHMyU2VsZihDb21wVGFnKX1cbiAgICAgICAgICAgICAgIGhyZWY9eydqYXZhc2NyaXB0OnZvaWQoMCk7J31cbiAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKX0+XG4gICAgICAgIHt0aGlzLnNrVHJhbnNQcm9wczJDaGlsZCgpfVxuICAgICAgPC9Db21wVGFnPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==