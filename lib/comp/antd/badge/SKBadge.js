'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _badge = require('antd/lib/badge');

var _badge2 = _interopRequireDefault(_badge);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/badge/style');

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

_badge2.default.defaultProps = _skJs.SK.assign({}, {
  dot: false,
  overflowCount: 99,
  showZero: false
}, _badge2.default.defaultProps, {});

_badge2.default.propTypes = _skJs.SK.assign({}, {
  //https://ant.design/components/badge-cn/#API
  count: _propTypes2.default.number,
  dot: _propTypes2.default.bool,
  overflowCount: _propTypes2.default.number,
  showZero: _propTypes2.default.bool,
  status: _propTypes2.default.oneOf(Object.values(_Const.STATUS)),
  text: _propTypes2.default.string,
  offset: _propTypes2.default.any
}, _badge2.default.propTypes, {});

var SKBadge = function (_AntdComp) {
  _inherits(SKBadge, _AntdComp);

  function SKBadge() {
    var _ref;

    _classCallCheck(this, SKBadge);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SKBadge.__proto__ || Object.getPrototypeOf(SKBadge)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'SKBadge';
    return _this;
  }

  _createClass(SKBadge, [{
    key: 'render',
    value: function render() {
      var CompTag = this.props.compTag;


      return _react2.default.createElement(
        CompTag,
        _extends({}, this.skTransProps2Self(CompTag), { count: this.skVal() }),
        this.skTransProps2Child()
      );
    }
  }]);

  return SKBadge;
}(_AntdComp3.default);

SKBadge.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, _badge2.default.defaultProps, {
  compTag: _badge2.default
});
SKBadge.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _badge2.default.propTypes, {});
exports.default = SKBadge;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9iYWRnZS9TS0JhZGdlLmpzIl0sIm5hbWVzIjpbImRlZmF1bHRQcm9wcyIsImFzc2lnbiIsImRvdCIsIm92ZXJmbG93Q291bnQiLCJzaG93WmVybyIsInByb3BUeXBlcyIsImNvdW50IiwibnVtYmVyIiwiYm9vbCIsInN0YXR1cyIsIm9uZU9mIiwiT2JqZWN0IiwidmFsdWVzIiwidGV4dCIsInN0cmluZyIsIm9mZnNldCIsImFueSIsIlNLQmFkZ2UiLCJhcmdzIiwiY29tcE5hbWUiLCJDb21wVGFnIiwicHJvcHMiLCJjb21wVGFnIiwic2tUcmFuc1Byb3BzMlNlbGYiLCJza1ZhbCIsInNrVHJhbnNQcm9wczJDaGlsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0FBRUEsZ0JBQU1BLFlBQU4sR0FBcUIsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYztBQUNqQ0MsT0FBSyxLQUQ0QjtBQUVqQ0MsaUJBQWUsRUFGa0I7QUFHakNDLFlBQVU7QUFIdUIsQ0FBZCxFQUlsQixnQkFBTUosWUFKWSxFQUlFLEVBSkYsQ0FBckI7O0FBTUEsZ0JBQU1LLFNBQU4sR0FBa0IsU0FBR0osTUFBSCxDQUFVLEVBQVYsRUFBYztBQUM5QjtBQUNBSyxTQUFPLG9CQUFVQyxNQUZhO0FBRzlCTCxPQUFLLG9CQUFVTSxJQUhlO0FBSTlCTCxpQkFBZSxvQkFBVUksTUFKSztBQUs5QkgsWUFBVSxvQkFBVUksSUFMVTtBQU05QkMsVUFBUSxvQkFBVUMsS0FBVixDQUFnQkMsT0FBT0MsTUFBUCxlQUFoQixDQU5zQjtBQU85QkMsUUFBTSxvQkFBVUMsTUFQYztBQVE5QkMsVUFBUSxvQkFBVUM7QUFSWSxDQUFkLEVBU2YsZ0JBQU1YLFNBVFMsRUFTRSxFQVRGLENBQWxCOztJQVdxQlksTzs7O0FBTW5CLHFCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSw2SUFDVkEsSUFEVTs7QUFFbkIsVUFBS0MsUUFBTCxHQUFnQixTQUFoQjtBQUZtQjtBQUdwQjs7Ozs2QkFFUTtBQUFBLFVBQ09DLE9BRFAsR0FDa0IsS0FBS0MsS0FEdkIsQ0FDRkMsT0FERTs7O0FBR1AsYUFDRTtBQUFDLGVBQUQ7QUFBQSxxQkFBYSxLQUFLQyxpQkFBTCxDQUF1QkgsT0FBdkIsQ0FBYixJQUE4QyxPQUFPLEtBQUtJLEtBQUwsRUFBckQ7QUFDRyxhQUFLQyxrQkFBTDtBQURILE9BREY7QUFLRDs7Ozs7O0FBbkJrQlIsTyxDQUNaakIsWSxHQUFlLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNELFlBQXZCLEVBQXFDLGdCQUFNQSxZQUEzQyxFQUF5RDtBQUM3RXNCO0FBRDZFLENBQXpELEM7QUFESEwsTyxDQUlaWixTLEdBQVksU0FBR0osTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0ksU0FBdkIsRUFBa0MsZ0JBQU1BLFNBQXhDLEVBQW1ELEVBQW5ELEM7a0JBSkFZLE8iLCJmaWxlIjoiY29tcC9hbnRkL2JhZGdlL1NLQmFkZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0JhZGdlfSBmcm9tICdhbnRkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTS30gZnJvbSAnc2stanMnO1xuaW1wb3J0IEFudGRDb21wIGZyb20gJy4uL0FudGRDb21wJztcbmltcG9ydCB7U1RBVFVTfSBmcm9tICcuLi8uLi8uLi91dGlsL0NvbnN0JztcblxuQmFkZ2UuZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCB7XG4gIGRvdDogZmFsc2UsXG4gIG92ZXJmbG93Q291bnQ6IDk5LFxuICBzaG93WmVybzogZmFsc2Vcbn0sIEJhZGdlLmRlZmF1bHRQcm9wcywge30pO1xuXG5CYWRnZS5wcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIHtcbiAgLy9odHRwczovL2FudC5kZXNpZ24vY29tcG9uZW50cy9iYWRnZS1jbi8jQVBJXG4gIGNvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICBkb3Q6IFByb3BUeXBlcy5ib29sLFxuICBvdmVyZmxvd0NvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICBzaG93WmVybzogUHJvcFR5cGVzLmJvb2wsXG4gIHN0YXR1czogUHJvcFR5cGVzLm9uZU9mKE9iamVjdC52YWx1ZXMoU1RBVFVTKSksXG4gIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9mZnNldDogUHJvcFR5cGVzLmFueVxufSwgQmFkZ2UucHJvcFR5cGVzLCB7fSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNLQmFkZ2UgZXh0ZW5kcyBBbnRkQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLmRlZmF1bHRQcm9wcywgQmFkZ2UuZGVmYXVsdFByb3BzLCB7XG4gICAgY29tcFRhZzogQmFkZ2VcbiAgfSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLnByb3BUeXBlcywgQmFkZ2UucHJvcFR5cGVzLCB7fSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnU0tCYWRnZSc7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtjb21wVGFnOiBDb21wVGFnfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBUYWcgey4uLnRoaXMuc2tUcmFuc1Byb3BzMlNlbGYoQ29tcFRhZyl9IGNvdW50PXt0aGlzLnNrVmFsKCl9PlxuICAgICAgICB7dGhpcy5za1RyYW5zUHJvcHMyQ2hpbGQoKX1cbiAgICAgIDwvQ29tcFRhZz5cbiAgICApO1xuICB9XG59XG4iXX0=