'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _row = require('antd/lib/row');

var _row2 = _interopRequireDefault(_row);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/row/style');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _AntdComp2 = require('../AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SKRow = function (_AntdComp) {
  _inherits(SKRow, _AntdComp);

  function SKRow() {
    var _ref;

    _classCallCheck(this, SKRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SKRow.__proto__ || Object.getPrototypeOf(SKRow)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'SKRow';
    return _this;
  }

  _createClass(SKRow, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          CompTag = _props.compTag,
          gutter = _props.gutter;

      gutter = gutter || this.skProp(SKRow.SK_PROPS.GRID_GUTTER);

      return _react2.default.createElement(
        CompTag,
        _extends({}, this.skTransProps2Self(CompTag), {
          gutter: gutter }),
        this.skTransProps2Child()
      );
    }
  }]);

  return SKRow;
}(_AntdComp3.default);

SKRow.SK_PROPS = {
  GRID_GUTTER: 'gridGutter'
};
SKRow.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, {
  compTag: _row2.default
});
SKRow.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, {
  gridGutter: _propTypes2.default.number,
  skGridGutter: _propTypes2.default.number
});
exports.default = SKRow;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9yb3cvU0tSb3cuanMiXSwibmFtZXMiOlsiU0tSb3ciLCJhcmdzIiwiY29tcE5hbWUiLCJwcm9wcyIsIkNvbXBUYWciLCJjb21wVGFnIiwiZ3V0dGVyIiwic2tQcm9wIiwiU0tfUFJPUFMiLCJHUklEX0dVVFRFUiIsInNrVHJhbnNQcm9wczJTZWxmIiwic2tUcmFuc1Byb3BzMkNoaWxkIiwiZGVmYXVsdFByb3BzIiwiYXNzaWduIiwicHJvcFR5cGVzIiwiZ3JpZEd1dHRlciIsIm51bWJlciIsInNrR3JpZEd1dHRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7QUFZbkIsbUJBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLHlJQUNWQSxJQURVOztBQUVuQixVQUFLQyxRQUFMLEdBQWdCLE9BQWhCO0FBRm1CO0FBR3BCOzs7OzZCQUVRO0FBQUEsbUJBQzBCLEtBQUtDLEtBRC9CO0FBQUEsVUFDT0MsT0FEUCxVQUNGQyxPQURFO0FBQUEsVUFDZ0JDLE1BRGhCLFVBQ2dCQSxNQURoQjs7QUFFUEEsZUFBU0EsVUFBVSxLQUFLQyxNQUFMLENBQVlQLE1BQU1RLFFBQU4sQ0FBZUMsV0FBM0IsQ0FBbkI7O0FBRUEsYUFDRTtBQUFDLGVBQUQ7QUFBQSxxQkFBYSxLQUFLQyxpQkFBTCxDQUF1Qk4sT0FBdkIsQ0FBYjtBQUNTLGtCQUFRRSxNQURqQjtBQUVHLGFBQUtLLGtCQUFMO0FBRkgsT0FERjtBQU1EOzs7Ozs7QUEzQmtCWCxLLENBQ1pRLFEsR0FBVztBQUNoQkMsZUFBYTtBQURHLEM7QUFEQ1QsSyxDQUlaWSxZLEdBQWUsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0QsWUFBdkIsRUFBcUM7QUFDekRQO0FBRHlELENBQXJDLEM7QUFKSEwsSyxDQU9aYyxTLEdBQVksU0FBR0QsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0MsU0FBdkIsRUFBa0M7QUFDbkRDLGNBQVksb0JBQVVDLE1BRDZCO0FBRW5EQyxnQkFBYyxvQkFBVUQ7QUFGMkIsQ0FBbEMsQztrQkFQQWhCLEsiLCJmaWxlIjoiY29tcC9hbnRkL3Jvdy9TS1Jvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Um93fSBmcm9tICdhbnRkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTS30gZnJvbSAnc2stanMnO1xuaW1wb3J0IEFudGRDb21wIGZyb20gJy4uL0FudGRDb21wJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tSb3cgZXh0ZW5kcyBBbnRkQ29tcCB7XG4gIHN0YXRpYyBTS19QUk9QUyA9IHtcbiAgICBHUklEX0dVVFRFUjogJ2dyaWRHdXR0ZXInLFxuICB9O1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBSb3dcbiAgfSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLnByb3BUeXBlcywge1xuICAgIGdyaWRHdXR0ZXI6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgc2tHcmlkR3V0dGVyOiBQcm9wVHlwZXMubnVtYmVyXG4gIH0pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLmNvbXBOYW1lID0gJ1NLUm93JztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge2NvbXBUYWc6IENvbXBUYWcsIGd1dHRlcn0gPSB0aGlzLnByb3BzO1xuICAgIGd1dHRlciA9IGd1dHRlciB8fCB0aGlzLnNrUHJvcChTS1Jvdy5TS19QUk9QUy5HUklEX0dVVFRFUik7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBUYWcgey4uLnRoaXMuc2tUcmFuc1Byb3BzMlNlbGYoQ29tcFRhZyl9XG4gICAgICAgICAgICAgICBndXR0ZXI9e2d1dHRlcn0+XG4gICAgICAgIHt0aGlzLnNrVHJhbnNQcm9wczJDaGlsZCgpfVxuICAgICAgPC9Db21wVGFnPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==