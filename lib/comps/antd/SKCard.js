'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _antd = require('antd');

var _skJs = require('sk-js');

var _skJs2 = _interopRequireDefault(_skJs);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Comp2 = require('../../utils/Comp');

var _Comp3 = _interopRequireDefault(_Comp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_antd.Card.propTypes = _skJs2.default.assign({}, _antd.Card.propTypes, {
  bodyStyle: _react2.default.PropTypes.object
}, {});

var SKCard = function (_Comp) {
  _inherits(SKCard, _Comp);

  function SKCard() {
    var _ref;

    _classCallCheck(this, SKCard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(this, (_ref = SKCard.__proto__ || Object.getPrototypeOf(SKCard)).call.apply(_ref, [this].concat(args)));
  }

  return SKCard;
}(_Comp3.default);

SKCard.defaultProps = {
  compTag: _antd.Card
};
SKCard.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _antd.Card.propTypes, {});
exports.default = SKCard;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FudGQvU0tDYXJkLmpzIl0sIm5hbWVzIjpbInByb3BUeXBlcyIsImFzc2lnbiIsImJvZHlTdHlsZSIsIlByb3BUeXBlcyIsIm9iamVjdCIsIlNLQ2FyZCIsImFyZ3MiLCJkZWZhdWx0UHJvcHMiLCJjb21wVGFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLFdBQUtBLFNBQUwsR0FBaUIsZUFBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxXQUFLRCxTQUFuQixFQUE4QjtBQUM3Q0UsYUFBVyxnQkFBTUMsU0FBTixDQUFnQkM7QUFEa0IsQ0FBOUIsRUFFZCxFQUZjLENBQWpCOztJQUlxQkMsTTs7O0FBTW5CLG9CQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSxzSUFDVkEsSUFEVTtBQUVwQjs7Ozs7QUFSa0JELE0sQ0FDWkUsWSxHQUFlO0FBQ3BCQztBQURvQixDO0FBREhILE0sQ0FJWkwsUyxHQUFZLGVBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsZUFBS0QsU0FBbkIsRUFBOEIsV0FBS0EsU0FBbkMsRUFBOEMsRUFBOUMsQztrQkFKQUssTSIsImZpbGUiOiJjb21wcy9hbnRkL1NLQ2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2FyZH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgU0sgZnJvbSAnc2stanMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb21wIGZyb20gJy4uLy4uL3V0aWxzL0NvbXAnO1xuXG5DYXJkLnByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQ2FyZC5wcm9wVHlwZXMsIHtcbiAgYm9keVN0eWxlOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG59LCB7fSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNLQ2FyZCBleHRlbmRzIENvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbXBUYWc6IENhcmRcbiAgfTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQ29tcC5wcm9wVHlwZXMsIENhcmQucHJvcFR5cGVzLCB7fSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICB9XG59XG4iXX0=