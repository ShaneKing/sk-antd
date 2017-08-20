'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style2 = require('antd/lib/badge/style');

var _badge = require('antd/lib/badge');

var _badge2 = _interopRequireDefault(_badge);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _skJs2 = _interopRequireDefault(_skJs);

var _Comp2 = require('../../util/Comp');

var _Comp3 = _interopRequireDefault(_Comp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SKBadge = function (_Comp) {
  _inherits(SKBadge, _Comp);

  function SKBadge() {
    var _ref;

    _classCallCheck(this, SKBadge);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(this, (_ref = SKBadge.__proto__ || Object.getPrototypeOf(SKBadge)).call.apply(_ref, [this].concat(args)));
  }

  _createClass(SKBadge, [{
    key: 'render',
    value: function render() {
      var CompTag = this.props.compTag;


      return _react2.default.createElement(
        CompTag,
        _extends({}, this.compValidProps(CompTag), { count: this.skVal() }),
        this.skPropsTrans()
      );
    }
  }]);

  return SKBadge;
}(_Comp3.default);

SKBadge.defaultProps = {
  compTag: _badge2.default
};
SKBadge.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _badge2.default.propTypes, {});
exports.default = SKBadge;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9TS0JhZGdlLmpzIl0sIm5hbWVzIjpbIlNLQmFkZ2UiLCJhcmdzIiwiQ29tcFRhZyIsInByb3BzIiwiY29tcFRhZyIsImNvbXBWYWxpZFByb3BzIiwic2tWYWwiLCJza1Byb3BzVHJhbnMiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTzs7O0FBTW5CLHFCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSx3SUFDVkEsSUFEVTtBQUVwQjs7Ozs2QkFFUTtBQUFBLFVBQ09DLE9BRFAsR0FDa0IsS0FBS0MsS0FEdkIsQ0FDRkMsT0FERTs7O0FBR1AsYUFDRTtBQUFDLGVBQUQ7QUFBQSxxQkFBYSxLQUFLQyxjQUFMLENBQW9CSCxPQUFwQixDQUFiLElBQTJDLE9BQU8sS0FBS0ksS0FBTCxFQUFsRDtBQUNHLGFBQUtDLFlBQUw7QUFESCxPQURGO0FBS0Q7Ozs7OztBQWxCa0JQLE8sQ0FDWlEsWSxHQUFlO0FBQ3BCSjtBQURvQixDO0FBREhKLE8sQ0FJWlMsUyxHQUFZLGVBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsZUFBS0QsU0FBbkIsRUFBOEIsZ0JBQU1BLFNBQXBDLEVBQStDLEVBQS9DLEM7a0JBSkFULE8iLCJmaWxlIjoiY29tcC9hbnRkL1NLQmFkZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0JhZGdlfSBmcm9tICdhbnRkJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU0sgZnJvbSAnc2stanMnO1xuaW1wb3J0IENvbXAgZnJvbSAnLi4vLi4vdXRpbC9Db21wJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tCYWRnZSBleHRlbmRzIENvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbXBUYWc6IEJhZGdlXG4gIH07XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIENvbXAucHJvcFR5cGVzLCBCYWRnZS5wcm9wVHlwZXMsIHt9KTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtjb21wVGFnOiBDb21wVGFnfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBUYWcgey4uLnRoaXMuY29tcFZhbGlkUHJvcHMoQ29tcFRhZyl9IGNvdW50PXt0aGlzLnNrVmFsKCl9PlxuICAgICAgICB7dGhpcy5za1Byb3BzVHJhbnMoKX1cbiAgICAgIDwvQ29tcFRhZz5cbiAgICApO1xuICB9XG59XG4iXX0=