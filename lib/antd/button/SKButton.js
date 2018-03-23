'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

require('antd/lib/button/style');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _skJs = require('sk-js');

var _AntdComp2 = require('../AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

var _Const = require('../../Const');

var _Reacts = require('../../Reacts');

var _Reacts2 = _interopRequireDefault(_Reacts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_button2.default.defaultProps = _skJs.SK.assign({}, {
  ghost: false,
  htmlType: _Reacts2.default.TAG.button,
  loading: false,
  size: _Const.SIZE.Default
}, _button2.default.defaultProps, {});

_button2.default.propTypes = _skJs.SK.assign({}, {
  //https://ant.design/components/button-cn/#API
  ghost: _propTypes2.default.bool,
  htmlType: _propTypes2.default.string,
  icon: _propTypes2.default.string,
  loading: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.object]),
  shape: _propTypes2.default.string,
  size: _propTypes2.default.string,
  type: _propTypes2.default.string,
  onClick: _propTypes2.default.func,
  href: _propTypes2.default.string,
  target: _propTypes2.default.string
}, _button2.default.propTypes, {});

var SKButton = function (_AntdComp) {
  _inherits(SKButton, _AntdComp);

  function SKButton() {
    var _ref;

    _classCallCheck(this, SKButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SKButton.__proto__ || Object.getPrototypeOf(SKButton)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'SKButton';
    return _this;
  }

  return SKButton;
}(_AntdComp3.default);

SKButton.TYPE = {
  Primary: 'primary',
  Dashed: 'dashed',
  Danger: 'danger'
};
SKButton.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, _button2.default.defaultProps, {
  compTag: _button2.default
});
SKButton.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _button2.default.propTypes, {});
exports.default = SKButton;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGQvYnV0dG9uL1NLQnV0dG9uLmpzIl0sIm5hbWVzIjpbImRlZmF1bHRQcm9wcyIsImFzc2lnbiIsImdob3N0IiwiaHRtbFR5cGUiLCJUQUciLCJidXR0b24iLCJsb2FkaW5nIiwic2l6ZSIsIkRlZmF1bHQiLCJwcm9wVHlwZXMiLCJib29sIiwic3RyaW5nIiwiaWNvbiIsIm9uZU9mVHlwZSIsIm9iamVjdCIsInNoYXBlIiwidHlwZSIsIm9uQ2xpY2siLCJmdW5jIiwiaHJlZiIsInRhcmdldCIsIlNLQnV0dG9uIiwiYXJncyIsImNvbXBOYW1lIiwiVFlQRSIsIlByaW1hcnkiLCJEYXNoZWQiLCJEYW5nZXIiLCJjb21wVGFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLGlCQUFPQSxZQUFQLEdBQXNCLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWM7QUFDbENDLFNBQU8sS0FEMkI7QUFFbENDLFlBQVUsaUJBQU9DLEdBQVAsQ0FBV0MsTUFGYTtBQUdsQ0MsV0FBUyxLQUh5QjtBQUlsQ0MsUUFBTSxZQUFLQztBQUp1QixDQUFkLEVBS25CLGlCQUFPUixZQUxZLEVBS0UsRUFMRixDQUF0Qjs7QUFPQSxpQkFBT1MsU0FBUCxHQUFtQixTQUFHUixNQUFILENBQVUsRUFBVixFQUFjO0FBQy9CO0FBQ0FDLFNBQU8sb0JBQVVRLElBRmM7QUFHL0JQLFlBQVUsb0JBQVVRLE1BSFc7QUFJL0JDLFFBQU0sb0JBQVVELE1BSmU7QUFLL0JMLFdBQVMsb0JBQVVPLFNBQVYsQ0FBb0IsQ0FDM0Isb0JBQVVILElBRGlCLEVBRTNCLG9CQUFVSSxNQUZpQixDQUFwQixDQUxzQjtBQVMvQkMsU0FBTyxvQkFBVUosTUFUYztBQVUvQkosUUFBTSxvQkFBVUksTUFWZTtBQVcvQkssUUFBTSxvQkFBVUwsTUFYZTtBQVkvQk0sV0FBUyxvQkFBVUMsSUFaWTtBQWEvQkMsUUFBTSxvQkFBVVIsTUFiZTtBQWMvQlMsVUFBUSxvQkFBVVQ7QUFkYSxDQUFkLEVBZWhCLGlCQUFPRixTQWZTLEVBZUUsRUFmRixDQUFuQjs7SUFpQnFCWSxROzs7QUFXbkIsc0JBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLCtJQUNWQSxJQURVOztBQUVuQixVQUFLQyxRQUFMLEdBQWdCLFVBQWhCO0FBRm1CO0FBR3BCOzs7OztBQWRrQkYsUSxDQUNaRyxJLEdBQU87QUFDWkMsV0FBUyxTQURHO0FBRVpDLFVBQVEsUUFGSTtBQUdaQyxVQUFRO0FBSEksQztBQURLTixRLENBTVpyQixZLEdBQWUsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0QsWUFBdkIsRUFBcUMsaUJBQU9BLFlBQTVDLEVBQTBEO0FBQzlFNEI7QUFEOEUsQ0FBMUQsQztBQU5IUCxRLENBU1paLFMsR0FBWSxTQUFHUixNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTUSxTQUF2QixFQUFrQyxpQkFBT0EsU0FBekMsRUFBb0QsRUFBcEQsQztrQkFUQVksUSIsImZpbGUiOiJhbnRkL2J1dHRvbi9TS0J1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFNLIH0gZnJvbSAnc2stanMnO1xuaW1wb3J0IEFudGRDb21wIGZyb20gJy4uL0FudGRDb21wJztcbmltcG9ydCB7IFNJWkUgfSBmcm9tICcuLi8uLi9Db25zdCc7XG5pbXBvcnQgUmVhY3RzIGZyb20gJy4uLy4uL1JlYWN0cyc7XG5cbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIHtcbiAgZ2hvc3Q6IGZhbHNlLFxuICBodG1sVHlwZTogUmVhY3RzLlRBRy5idXR0b24sXG4gIGxvYWRpbmc6IGZhbHNlLFxuICBzaXplOiBTSVpFLkRlZmF1bHQsXG59LCBCdXR0b24uZGVmYXVsdFByb3BzLCB7fSk7XG5cbkJ1dHRvbi5wcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIHtcbiAgLy9odHRwczovL2FudC5kZXNpZ24vY29tcG9uZW50cy9idXR0b24tY24vI0FQSVxuICBnaG9zdDogUHJvcFR5cGVzLmJvb2wsXG4gIGh0bWxUeXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsb2FkaW5nOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuYm9vbCxcbiAgICBQcm9wVHlwZXMub2JqZWN0LFxuICBdKSxcbiAgc2hhcGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNpemU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBocmVmOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0YXJnZXQ6IFByb3BUeXBlcy5zdHJpbmcsXG59LCBCdXR0b24ucHJvcFR5cGVzLCB7fSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNLQnV0dG9uIGV4dGVuZHMgQW50ZENvbXAge1xuICBzdGF0aWMgVFlQRSA9IHtcbiAgICBQcmltYXJ5OiAncHJpbWFyeScsXG4gICAgRGFzaGVkOiAnZGFzaGVkJyxcbiAgICBEYW5nZXI6ICdkYW5nZXInLFxuICB9O1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5kZWZhdWx0UHJvcHMsIEJ1dHRvbi5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBCdXR0b24sXG4gIH0pO1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5wcm9wVHlwZXMsIEJ1dHRvbi5wcm9wVHlwZXMsIHt9KTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5jb21wTmFtZSA9ICdTS0J1dHRvbic7XG4gIH1cbn1cbiJdfQ==