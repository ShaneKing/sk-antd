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

var _Const = require('../../../util/Const');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_row2.default.defaultProps = _skJs.SK.assign({}, {
  align: _Const.ALIGN.Top,
  gutter: 0,
  justify: _Const.JUSTIFY.Start
}, _row2.default.defaultProps, {});

_row2.default.propTypes = _skJs.SK.assign({}, {
  //https://ant.design/components/grid-cn/#Row
  align: _propTypes2.default.oneOf(Object.values(_Const.ALIGN)),
  gutter: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.object]),
  justify: _propTypes2.default.oneOf(Object.values(_Const.JUSTIFY)),
  type: _propTypes2.default.string
}, _row2.default.propTypes, {});

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

      gutter = gutter || this.skProp(_AntdComp3.default.SK_PROPS.GRID_GUTTER);

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

SKRow.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, _row2.default.defaultProps, {
  compTag: _row2.default
});
SKRow.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _row2.default.propTypes, {});
exports.default = SKRow;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9yb3cvU0tSb3cuanMiXSwibmFtZXMiOlsiZGVmYXVsdFByb3BzIiwiYXNzaWduIiwiYWxpZ24iLCJUb3AiLCJndXR0ZXIiLCJqdXN0aWZ5IiwiU3RhcnQiLCJwcm9wVHlwZXMiLCJvbmVPZiIsIk9iamVjdCIsInZhbHVlcyIsIm9uZU9mVHlwZSIsIm51bWJlciIsIm9iamVjdCIsInR5cGUiLCJzdHJpbmciLCJTS1JvdyIsImFyZ3MiLCJjb21wTmFtZSIsInByb3BzIiwiQ29tcFRhZyIsImNvbXBUYWciLCJza1Byb3AiLCJTS19QUk9QUyIsIkdSSURfR1VUVEVSIiwic2tUcmFuc1Byb3BzMlNlbGYiLCJza1RyYW5zUHJvcHMyQ2hpbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVBLGNBQUlBLFlBQUosR0FBbUIsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYztBQUMvQkMsU0FBTyxhQUFNQyxHQURrQjtBQUUvQkMsVUFBUSxDQUZ1QjtBQUcvQkMsV0FBUyxlQUFRQztBQUhjLENBQWQsRUFJaEIsY0FBSU4sWUFKWSxFQUlFLEVBSkYsQ0FBbkI7O0FBTUEsY0FBSU8sU0FBSixHQUFnQixTQUFHTixNQUFILENBQVUsRUFBVixFQUFjO0FBQzVCO0FBQ0FDLFNBQU8sb0JBQVVNLEtBQVYsQ0FBZ0JDLE9BQU9DLE1BQVAsY0FBaEIsQ0FGcUI7QUFHNUJOLFVBQVEsb0JBQVVPLFNBQVYsQ0FBb0IsQ0FDMUIsb0JBQVVDLE1BRGdCLEVBRTFCLG9CQUFVQyxNQUZnQixDQUFwQixDQUhvQjtBQU81QlIsV0FBUyxvQkFBVUcsS0FBVixDQUFnQkMsT0FBT0MsTUFBUCxnQkFBaEIsQ0FQbUI7QUFRNUJJLFFBQU0sb0JBQVVDO0FBUlksQ0FBZCxFQVNiLGNBQUlSLFNBVFMsRUFTRSxFQVRGLENBQWhCOztJQVdxQlMsSzs7O0FBT25CLG1CQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSx5SUFDVkEsSUFEVTs7QUFFbkIsVUFBS0MsUUFBTCxHQUFnQixPQUFoQjtBQUZtQjtBQUdwQjs7Ozs2QkFFUTtBQUFBLG1CQUMwQixLQUFLQyxLQUQvQjtBQUFBLFVBQ09DLE9BRFAsVUFDRkMsT0FERTtBQUFBLFVBQ2dCakIsTUFEaEIsVUFDZ0JBLE1BRGhCOztBQUVQQSxlQUFTQSxVQUFVLEtBQUtrQixNQUFMLENBQVksbUJBQVNDLFFBQVQsQ0FBa0JDLFdBQTlCLENBQW5COztBQUVBLGFBQ0U7QUFBQyxlQUFEO0FBQUEscUJBQWEsS0FBS0MsaUJBQUwsQ0FBdUJMLE9BQXZCLENBQWI7QUFDUyxrQkFBUWhCLE1BRGpCO0FBRUcsYUFBS3NCLGtCQUFMO0FBRkgsT0FERjtBQU1EOzs7Ozs7QUF0QmtCVixLLENBQ1poQixZLEdBQWUsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0QsWUFBdkIsRUFBcUMsY0FBSUEsWUFBekMsRUFBdUQ7QUFDM0VxQjtBQUQyRSxDQUF2RCxDO0FBREhMLEssQ0FJWlQsUyxHQUFZLFNBQUdOLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNNLFNBQXZCLEVBQWtDLGNBQUlBLFNBQXRDLEVBQWlELEVBQWpELEM7a0JBSkFTLEsiLCJmaWxlIjoiY29tcC9hbnRkL3Jvdy9TS1Jvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Um93fSBmcm9tICdhbnRkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTS30gZnJvbSAnc2stanMnO1xuaW1wb3J0IEFudGRDb21wIGZyb20gJy4uL0FudGRDb21wJztcbmltcG9ydCB7QUxJR04sIEpVU1RJRll9IGZyb20gJy4uLy4uLy4uL3V0aWwvQ29uc3QnO1xuXG5Sb3cuZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCB7XG4gIGFsaWduOiBBTElHTi5Ub3AsXG4gIGd1dHRlcjogMCxcbiAganVzdGlmeTogSlVTVElGWS5TdGFydFxufSwgUm93LmRlZmF1bHRQcm9wcywge30pO1xuXG5Sb3cucHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCB7XG4gIC8vaHR0cHM6Ly9hbnQuZGVzaWduL2NvbXBvbmVudHMvZ3JpZC1jbi8jUm93XG4gIGFsaWduOiBQcm9wVHlwZXMub25lT2YoT2JqZWN0LnZhbHVlcyhBTElHTikpLFxuICBndXR0ZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLm9iamVjdFxuICBdKSxcbiAganVzdGlmeTogUHJvcFR5cGVzLm9uZU9mKE9iamVjdC52YWx1ZXMoSlVTVElGWSkpLFxuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nXG59LCBSb3cucHJvcFR5cGVzLCB7fSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNLUm93IGV4dGVuZHMgQW50ZENvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5kZWZhdWx0UHJvcHMsIFJvdy5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBSb3dcbiAgfSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLnByb3BUeXBlcywgUm93LnByb3BUeXBlcywge30pO1xuXG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnU0tSb3cnO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7Y29tcFRhZzogQ29tcFRhZywgZ3V0dGVyfSA9IHRoaXMucHJvcHM7XG4gICAgZ3V0dGVyID0gZ3V0dGVyIHx8IHRoaXMuc2tQcm9wKEFudGRDb21wLlNLX1BST1BTLkdSSURfR1VUVEVSKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcFRhZyB7Li4udGhpcy5za1RyYW5zUHJvcHMyU2VsZihDb21wVGFnKX1cbiAgICAgICAgICAgICAgIGd1dHRlcj17Z3V0dGVyfT5cbiAgICAgICAge3RoaXMuc2tUcmFuc1Byb3BzMkNoaWxkKCl9XG4gICAgICA8L0NvbXBUYWc+XG4gICAgKTtcbiAgfVxufVxuIl19