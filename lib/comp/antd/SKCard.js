'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style2 = require('antd/lib/card/style');

var _card = require('antd/lib/card');

var _card2 = _interopRequireDefault(_card);

var _skJs = require('sk-js');

var _skJs2 = _interopRequireDefault(_skJs);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Comp2 = require('../../util/Comp');

var _Comp3 = _interopRequireDefault(_Comp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_card2.default.propTypes = _skJs2.default.assign({}, _card2.default.propTypes, {
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
  compTag: _card2.default
};
SKCard.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _card2.default.propTypes, {});
exports.default = SKCard;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9TS0NhcmQuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwiYXNzaWduIiwiYm9keVN0eWxlIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiU0tDYXJkIiwiYXJncyIsImRlZmF1bHRQcm9wcyIsImNvbXBUYWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsZUFBS0EsU0FBTCxHQUFpQixlQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLGVBQUtELFNBQW5CLEVBQThCO0FBQzdDRSxhQUFXLGdCQUFNQyxTQUFOLENBQWdCQztBQURrQixDQUE5QixFQUVkLEVBRmMsQ0FBakI7O0lBSXFCQyxNOzs7QUFNbkIsb0JBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLHNJQUNWQSxJQURVO0FBRXBCOzs7OztBQVJrQkQsTSxDQUNaRSxZLEdBQWU7QUFDcEJDO0FBRG9CLEM7QUFESEgsTSxDQUlaTCxTLEdBQVksZUFBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxlQUFLRCxTQUFuQixFQUE4QixlQUFLQSxTQUFuQyxFQUE4QyxFQUE5QyxDO2tCQUpBSyxNIiwiZmlsZSI6ImNvbXAvYW50ZC9TS0NhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NhcmR9IGZyb20gJ2FudGQnO1xuaW1wb3J0IFNLIGZyb20gJ3NrLWpzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29tcCBmcm9tICcuLi8uLi91dGlsL0NvbXAnO1xuXG5DYXJkLnByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQ2FyZC5wcm9wVHlwZXMsIHtcbiAgYm9keVN0eWxlOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG59LCB7fSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNLQ2FyZCBleHRlbmRzIENvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbXBUYWc6IENhcmRcbiAgfTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQ29tcC5wcm9wVHlwZXMsIENhcmQucHJvcFR5cGVzLCB7fSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICB9XG59XG4iXX0=