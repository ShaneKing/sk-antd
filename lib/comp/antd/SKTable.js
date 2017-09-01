'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style2 = require('antd/lib/table/style');

var _table = require('antd/lib/table');

var _table2 = _interopRequireDefault(_table);

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

_table2.default.propTypes = _skJs2.default.assign({}, _table2.default.propTypes, {
  rowKey: _react2.default.PropTypes.func,
  scroll: _react2.default.PropTypes.object,
  size: _react2.default.PropTypes.string
}, {});

var SKTable = function (_Comp) {
  _inherits(SKTable, _Comp);

  function SKTable() {
    var _ref;

    _classCallCheck(this, SKTable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(this, (_ref = SKTable.__proto__ || Object.getPrototypeOf(SKTable)).call.apply(_ref, [this].concat(args)));
  }

  _createClass(SKTable, [{
    key: 'addExtendChangedMonitor',
    value: function addExtendChangedMonitor() {
      this.addChangedMonitor(this.props.loadingId);
      this.addChangedMonitor(this.props.paginationId);
    }
  }, {
    key: 'rmvExtendChangedMonitor',
    value: function rmvExtendChangedMonitor() {
      this.rmvChangedMonitor(this.props.loadingId);
      this.rmvChangedMonitor(this.props.paginationId);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          CompTag = _props.compTag,
          columns = _props.columns,
          scroll = _props.scroll;


      var tmpScroll = { y: false };
      tmpScroll.x = columns.reduce(function ($sum, $item) {
        return $sum + $item.width;
      }, 0);
      tmpScroll = scroll || tmpScroll;

      return _react2.default.createElement(CompTag, _extends({}, this.compValidProps(CompTag), {
        dataSource: this.skVal(),
        loading: this.iModel().skVal(this.props.loadingId),
        pagination: this.iModel().skVal(this.props.paginationId),
        scroll: tmpScroll }));
    }
  }]);

  return SKTable;
}(_Comp3.default);

SKTable.defaultProps = {
  compTag: _table2.default,
  bordered: true,
  loadingId: undefined,
  paginationId: undefined
};
SKTable.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _table2.default.propTypes, {
  loadingId: _react2.default.PropTypes.string.isRequired,
  paginationId: _react2.default.PropTypes.string.isRequired
});
exports.default = SKTable;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9TS1RhYmxlLmpzIl0sIm5hbWVzIjpbInByb3BUeXBlcyIsImFzc2lnbiIsInJvd0tleSIsIlByb3BUeXBlcyIsImZ1bmMiLCJzY3JvbGwiLCJvYmplY3QiLCJzaXplIiwic3RyaW5nIiwiU0tUYWJsZSIsImFyZ3MiLCJhZGRDaGFuZ2VkTW9uaXRvciIsInByb3BzIiwibG9hZGluZ0lkIiwicGFnaW5hdGlvbklkIiwicm12Q2hhbmdlZE1vbml0b3IiLCJDb21wVGFnIiwiY29tcFRhZyIsImNvbHVtbnMiLCJ0bXBTY3JvbGwiLCJ5IiwieCIsInJlZHVjZSIsIiRzdW0iLCIkaXRlbSIsIndpZHRoIiwiY29tcFZhbGlkUHJvcHMiLCJza1ZhbCIsImlNb2RlbCIsImRlZmF1bHRQcm9wcyIsImJvcmRlcmVkIiwidW5kZWZpbmVkIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsZ0JBQU1BLFNBQU4sR0FBa0IsZUFBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxnQkFBTUQsU0FBcEIsRUFBK0I7QUFDL0NFLFVBQVEsZ0JBQU1DLFNBQU4sQ0FBZ0JDLElBRHVCO0FBRS9DQyxVQUFRLGdCQUFNRixTQUFOLENBQWdCRyxNQUZ1QjtBQUcvQ0MsUUFBTSxnQkFBTUosU0FBTixDQUFnQks7QUFIeUIsQ0FBL0IsRUFJZixFQUplLENBQWxCOztJQU1xQkMsTzs7O0FBWW5CLHFCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSx3SUFDVkEsSUFEVTtBQUVwQjs7Ozs4Q0FFeUI7QUFDeEIsV0FBS0MsaUJBQUwsQ0FBdUIsS0FBS0MsS0FBTCxDQUFXQyxTQUFsQztBQUNBLFdBQUtGLGlCQUFMLENBQXVCLEtBQUtDLEtBQUwsQ0FBV0UsWUFBbEM7QUFDRDs7OzhDQUV5QjtBQUN4QixXQUFLQyxpQkFBTCxDQUF1QixLQUFLSCxLQUFMLENBQVdDLFNBQWxDO0FBQ0EsV0FBS0UsaUJBQUwsQ0FBdUIsS0FBS0gsS0FBTCxDQUFXRSxZQUFsQztBQUNEOzs7NkJBRVE7QUFBQSxtQkFDbUMsS0FBS0YsS0FEeEM7QUFBQSxVQUNPSSxPQURQLFVBQ0ZDLE9BREU7QUFBQSxVQUNnQkMsT0FEaEIsVUFDZ0JBLE9BRGhCO0FBQUEsVUFDeUJiLE1BRHpCLFVBQ3lCQSxNQUR6Qjs7O0FBR1AsVUFBSWMsWUFBWSxFQUFDQyxHQUFHLEtBQUosRUFBaEI7QUFDQUQsZ0JBQVVFLENBQVYsR0FBY0gsUUFBUUksTUFBUixDQUFlLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUM1QyxlQUFPRCxPQUFPQyxNQUFNQyxLQUFwQjtBQUNELE9BRmEsRUFFWCxDQUZXLENBQWQ7QUFHQU4sa0JBQVlkLFVBQVVjLFNBQXRCOztBQUVBLGFBQ0UsOEJBQUMsT0FBRCxlQUFhLEtBQUtPLGNBQUwsQ0FBb0JWLE9BQXBCLENBQWI7QUFDUyxvQkFBWSxLQUFLVyxLQUFMLEVBRHJCO0FBRVMsaUJBQVMsS0FBS0MsTUFBTCxHQUFjRCxLQUFkLENBQW9CLEtBQUtmLEtBQUwsQ0FBV0MsU0FBL0IsQ0FGbEI7QUFHUyxvQkFBWSxLQUFLZSxNQUFMLEdBQWNELEtBQWQsQ0FBb0IsS0FBS2YsS0FBTCxDQUFXRSxZQUEvQixDQUhyQjtBQUlTLGdCQUFRSyxTQUpqQixJQURGO0FBT0Q7Ozs7OztBQTFDa0JWLE8sQ0FDWm9CLFksR0FBZTtBQUNwQlosMEJBRG9CO0FBRXBCYSxZQUFVLElBRlU7QUFHcEJqQixhQUFXa0IsU0FIUztBQUlwQmpCLGdCQUFjaUI7QUFKTSxDO0FBREh0QixPLENBT1pULFMsR0FBWSxlQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLGVBQUtELFNBQW5CLEVBQThCLGdCQUFNQSxTQUFwQyxFQUErQztBQUNoRWEsYUFBVyxnQkFBTVYsU0FBTixDQUFnQkssTUFBaEIsQ0FBdUJ3QixVQUQ4QjtBQUVoRWxCLGdCQUFjLGdCQUFNWCxTQUFOLENBQWdCSyxNQUFoQixDQUF1QndCO0FBRjJCLENBQS9DLEM7a0JBUEF2QixPIiwiZmlsZSI6ImNvbXAvYW50ZC9TS1RhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUYWJsZX0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNLIGZyb20gJ3NrLWpzJztcbmltcG9ydCBDb21wIGZyb20gJy4uLy4uL3V0aWwvQ29tcCc7XG5cblRhYmxlLnByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgVGFibGUucHJvcFR5cGVzLCB7XG4gIHJvd0tleTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIHNjcm9sbDogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgc2l6ZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZ1xufSwge30pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS1RhYmxlIGV4dGVuZHMgQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY29tcFRhZzogVGFibGUsXG4gICAgYm9yZGVyZWQ6IHRydWUsXG4gICAgbG9hZGluZ0lkOiB1bmRlZmluZWQsXG4gICAgcGFnaW5hdGlvbklkOiB1bmRlZmluZWRcbiAgfTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQ29tcC5wcm9wVHlwZXMsIFRhYmxlLnByb3BUeXBlcywge1xuICAgIGxvYWRpbmdJZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHBhZ2luYXRpb25JZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gIH0pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgfVxuXG4gIGFkZEV4dGVuZENoYW5nZWRNb25pdG9yKCkge1xuICAgIHRoaXMuYWRkQ2hhbmdlZE1vbml0b3IodGhpcy5wcm9wcy5sb2FkaW5nSWQpO1xuICAgIHRoaXMuYWRkQ2hhbmdlZE1vbml0b3IodGhpcy5wcm9wcy5wYWdpbmF0aW9uSWQpO1xuICB9XG5cbiAgcm12RXh0ZW5kQ2hhbmdlZE1vbml0b3IoKSB7XG4gICAgdGhpcy5ybXZDaGFuZ2VkTW9uaXRvcih0aGlzLnByb3BzLmxvYWRpbmdJZCk7XG4gICAgdGhpcy5ybXZDaGFuZ2VkTW9uaXRvcih0aGlzLnByb3BzLnBhZ2luYXRpb25JZCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtjb21wVGFnOiBDb21wVGFnLCBjb2x1bW5zLCBzY3JvbGx9ID0gdGhpcy5wcm9wcztcblxuICAgIGxldCB0bXBTY3JvbGwgPSB7eTogZmFsc2V9O1xuICAgIHRtcFNjcm9sbC54ID0gY29sdW1ucy5yZWR1Y2UoKCRzdW0sICRpdGVtKSA9PiB7XG4gICAgICByZXR1cm4gJHN1bSArICRpdGVtLndpZHRoO1xuICAgIH0sIDApO1xuICAgIHRtcFNjcm9sbCA9IHNjcm9sbCB8fCB0bXBTY3JvbGw7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBUYWcgey4uLnRoaXMuY29tcFZhbGlkUHJvcHMoQ29tcFRhZyl9XG4gICAgICAgICAgICAgICBkYXRhU291cmNlPXt0aGlzLnNrVmFsKCl9XG4gICAgICAgICAgICAgICBsb2FkaW5nPXt0aGlzLmlNb2RlbCgpLnNrVmFsKHRoaXMucHJvcHMubG9hZGluZ0lkKX1cbiAgICAgICAgICAgICAgIHBhZ2luYXRpb249e3RoaXMuaU1vZGVsKCkuc2tWYWwodGhpcy5wcm9wcy5wYWdpbmF0aW9uSWQpfVxuICAgICAgICAgICAgICAgc2Nyb2xsPXt0bXBTY3JvbGx9Lz5cbiAgICApO1xuICB9XG59XG4iXX0=