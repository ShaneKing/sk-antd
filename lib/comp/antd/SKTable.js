'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _table = require('antd/lib/table');

var _table2 = _interopRequireDefault(_table);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/table/style');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _AntdComp2 = require('./AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

var _Const = require('../../util/Const');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_table2.default.defaultProps = _skJs.SK.assign({}, {
  bordered: false,
  defaultExpandAllRows: false,
  expandRowByClick: false,
  indentSize: 15,
  loading: false,
  rowSelection: null,
  showHeader: true,
  size: _Const.SIZE.Default
}, _table2.default.defaultProps, {});

_table2.default.propTypes = _skJs.SK.assign({}, {
  bordered: _propTypes2.default.bool,
  columns: _propTypes2.default.array,
  components: _propTypes2.default.object,
  dataSource: _propTypes2.default.array,
  defaultExpandAllRows: _propTypes2.default.bool,
  defaultExpandedRowKeys: _propTypes2.default.array,
  expandedRowKeys: _propTypes2.default.array,
  expandedRowRender: _propTypes2.default.func,
  expandRowByClick: _propTypes2.default.bool,
  footer: _propTypes2.default.func,
  indentSize: _propTypes2.default.number,
  loading: _propTypes2.default.any, //
  locale: _propTypes2.default.object,
  pagination: _propTypes2.default.object,
  rowClassName: _propTypes2.default.func,
  rowKey: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  rowSelection: _propTypes2.default.object,
  scroll: _propTypes2.default.object,
  showHeader: _propTypes2.default.bool,
  size: _propTypes2.default.string,
  title: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onExpand: _propTypes2.default.func,
  onExpandedRowsChange: _propTypes2.default.func,
  onHeaderRow: _propTypes2.default.func,
  onRow: _propTypes2.default.func
}, _table2.default.propTypes, {});

var SKTable = function (_AntdComp) {
  _inherits(SKTable, _AntdComp);

  function SKTable() {
    var _ref;

    _classCallCheck(this, SKTable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SKTable.__proto__ || Object.getPrototypeOf(SKTable)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'SKTable';
    return _this;
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

      return _react2.default.createElement(CompTag, _extends({}, this.skTransProps2Self(CompTag), {
        dataSource: this.skVal(),
        loading: this.skModel().skVal(this.props.loadingId),
        pagination: this.skModel().skVal(this.props.paginationId),
        scroll: tmpScroll }));
    }
  }]);

  return SKTable;
}(_AntdComp3.default);

SKTable.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, _table2.default.defaultProps, {
  compTag: _table2.default,
  bordered: true,
  loadingId: undefined,
  paginationId: undefined
});
SKTable.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _table2.default.propTypes, {
  loadingId: _propTypes2.default.string.isRequired,
  paginationId: _propTypes2.default.string.isRequired
});
exports.default = SKTable;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9TS1RhYmxlLmpzIl0sIm5hbWVzIjpbImRlZmF1bHRQcm9wcyIsImFzc2lnbiIsImJvcmRlcmVkIiwiZGVmYXVsdEV4cGFuZEFsbFJvd3MiLCJleHBhbmRSb3dCeUNsaWNrIiwiaW5kZW50U2l6ZSIsImxvYWRpbmciLCJyb3dTZWxlY3Rpb24iLCJzaG93SGVhZGVyIiwic2l6ZSIsIkRlZmF1bHQiLCJwcm9wVHlwZXMiLCJib29sIiwiY29sdW1ucyIsImFycmF5IiwiY29tcG9uZW50cyIsIm9iamVjdCIsImRhdGFTb3VyY2UiLCJkZWZhdWx0RXhwYW5kZWRSb3dLZXlzIiwiZXhwYW5kZWRSb3dLZXlzIiwiZXhwYW5kZWRSb3dSZW5kZXIiLCJmdW5jIiwiZm9vdGVyIiwibnVtYmVyIiwiYW55IiwibG9jYWxlIiwicGFnaW5hdGlvbiIsInJvd0NsYXNzTmFtZSIsInJvd0tleSIsIm9uZU9mVHlwZSIsInN0cmluZyIsInNjcm9sbCIsInRpdGxlIiwib25DaGFuZ2UiLCJvbkV4cGFuZCIsIm9uRXhwYW5kZWRSb3dzQ2hhbmdlIiwib25IZWFkZXJSb3ciLCJvblJvdyIsIlNLVGFibGUiLCJhcmdzIiwiY29tcE5hbWUiLCJhZGRDaGFuZ2VkTW9uaXRvciIsInByb3BzIiwibG9hZGluZ0lkIiwicGFnaW5hdGlvbklkIiwicm12Q2hhbmdlZE1vbml0b3IiLCJDb21wVGFnIiwiY29tcFRhZyIsInRtcFNjcm9sbCIsInkiLCJ4IiwicmVkdWNlIiwiJHN1bSIsIiRpdGVtIiwid2lkdGgiLCJza1RyYW5zUHJvcHMyU2VsZiIsInNrVmFsIiwic2tNb2RlbCIsInVuZGVmaW5lZCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVBLGdCQUFNQSxZQUFOLEdBQXFCLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWM7QUFDakNDLFlBQVUsS0FEdUI7QUFF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QyxDQUZsQjtBQUdTLG9CQUFZLEtBQUtjLE9BQUwsR0FBZUQsS0FBZixDQUFxQixLQUFLZCxLQUFMLENBQVdFLFlBQWhDLENBSHJCO0FBSVMsZ0JBQVFJLFNBSmpCLElBREY7QUFPRDs7Ozs7O0FBNUNrQlYsTyxDQUNadEMsWSxHQUFlLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNELFlBQXZCLEVBQXFDLGdCQUFNQSxZQUEzQyxFQUF5RDtBQUM3RStDLDBCQUQ2RTtBQUU3RTdDLFlBQVUsSUFGbUU7QUFHN0V5QyxhQUFXZSxTQUhrRTtBQUk3RWQsZ0JBQWNjO0FBSitELENBQXpELEM7QUFESHBCLE8sQ0FPWjNCLFMsR0FBWSxTQUFHVixNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTVSxTQUF2QixFQUFrQyxnQkFBTUEsU0FBeEMsRUFBbUQ7QUFDcEVnQyxhQUFXLG9CQUFVYixNQUFWLENBQWlCNkIsVUFEd0M7QUFFcEVmLGdCQUFjLG9CQUFVZCxNQUFWLENBQWlCNkI7QUFGcUMsQ0FBbkQsQztrQkFQQXJCLE8iLCJmaWxlIjoiY29tcC9hbnRkL1NLVGFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1RhYmxlfSBmcm9tICdhbnRkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTS30gZnJvbSAnc2stanMnO1xuaW1wb3J0IEFudGRDb21wIGZyb20gJy4vQW50ZENvbXAnO1xuaW1wb3J0IHtTSVpFfSBmcm9tICcuLi8uLi91dGlsL0NvbnN0JztcblxuVGFibGUuZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCB7XG4gIGJvcmRlcmVkOiBmYWxzZSxcbiAgZGVmYXVsdEV4cGFuZEFsbFJvd3M6IGZhbHNlLFxuICBleHBhbmRSb3dCeUNsaWNrOiBmYWxzZSxcbiAgaW5kZW50U2l6ZTogMTUsXG4gIGxvYWRpbmc6IGZhbHNlLFxuICByb3dTZWxlY3Rpb246IG51bGwsXG4gIHNob3dIZWFkZXI6IHRydWUsXG4gIHNpemU6IFNJWkUuRGVmYXVsdFxufSwgVGFibGUuZGVmYXVsdFByb3BzLCB7fSk7XG5cblRhYmxlLnByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwge1xuICBib3JkZXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGNvbHVtbnM6IFByb3BUeXBlcy5hcnJheSxcbiAgY29tcG9uZW50czogUHJvcFR5cGVzLm9iamVjdCxcbiAgZGF0YVNvdXJjZTogUHJvcFR5cGVzLmFycmF5LFxuICBkZWZhdWx0RXhwYW5kQWxsUm93czogUHJvcFR5cGVzLmJvb2wsXG4gIGRlZmF1bHRFeHBhbmRlZFJvd0tleXM6IFByb3BUeXBlcy5hcnJheSxcbiAgZXhwYW5kZWRSb3dLZXlzOiBQcm9wVHlwZXMuYXJyYXksXG4gIGV4cGFuZGVkUm93UmVuZGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgZXhwYW5kUm93QnlDbGljazogUHJvcFR5cGVzLmJvb2wsXG4gIGZvb3RlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIGluZGVudFNpemU6IFByb3BUeXBlcy5udW1iZXIsXG4gIGxvYWRpbmc6IFByb3BUeXBlcy5hbnksLy9cbiAgbG9jYWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBwYWdpbmF0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxuICByb3dDbGFzc05hbWU6IFByb3BUeXBlcy5mdW5jLFxuICByb3dLZXk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLmZ1bmNcbiAgXSksXG4gIHJvd1NlbGVjdGlvbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgc2Nyb2xsOiBQcm9wVHlwZXMub2JqZWN0LFxuICBzaG93SGVhZGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2l6ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGl0bGU6IFByb3BUeXBlcy5mdW5jLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRXhwYW5kOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25FeHBhbmRlZFJvd3NDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvbkhlYWRlclJvdzogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uUm93OiBQcm9wVHlwZXMuZnVuY1xufSwgVGFibGUucHJvcFR5cGVzLCB7fSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNLVGFibGUgZXh0ZW5kcyBBbnRkQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLmRlZmF1bHRQcm9wcywgVGFibGUuZGVmYXVsdFByb3BzLCB7XG4gICAgY29tcFRhZzogVGFibGUsXG4gICAgYm9yZGVyZWQ6IHRydWUsXG4gICAgbG9hZGluZ0lkOiB1bmRlZmluZWQsXG4gICAgcGFnaW5hdGlvbklkOiB1bmRlZmluZWRcbiAgfSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLnByb3BUeXBlcywgVGFibGUucHJvcFR5cGVzLCB7XG4gICAgbG9hZGluZ0lkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgcGFnaW5hdGlvbklkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgfSk7XG5cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5jb21wTmFtZSA9ICdTS1RhYmxlJztcbiAgfVxuXG4gIGFkZEV4dGVuZENoYW5nZWRNb25pdG9yKCkge1xuICAgIHRoaXMuYWRkQ2hhbmdlZE1vbml0b3IodGhpcy5wcm9wcy5sb2FkaW5nSWQpO1xuICAgIHRoaXMuYWRkQ2hhbmdlZE1vbml0b3IodGhpcy5wcm9wcy5wYWdpbmF0aW9uSWQpO1xuICB9XG5cbiAgcm12RXh0ZW5kQ2hhbmdlZE1vbml0b3IoKSB7XG4gICAgdGhpcy5ybXZDaGFuZ2VkTW9uaXRvcih0aGlzLnByb3BzLmxvYWRpbmdJZCk7XG4gICAgdGhpcy5ybXZDaGFuZ2VkTW9uaXRvcih0aGlzLnByb3BzLnBhZ2luYXRpb25JZCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtjb21wVGFnOiBDb21wVGFnLCBjb2x1bW5zLCBzY3JvbGx9ID0gdGhpcy5wcm9wcztcblxuICAgIGxldCB0bXBTY3JvbGwgPSB7eTogZmFsc2V9O1xuICAgIHRtcFNjcm9sbC54ID0gY29sdW1ucy5yZWR1Y2UoKCRzdW0sICRpdGVtKSA9PiB7XG4gICAgICByZXR1cm4gJHN1bSArICRpdGVtLndpZHRoO1xuICAgIH0sIDApO1xuICAgIHRtcFNjcm9sbCA9IHNjcm9sbCB8fCB0bXBTY3JvbGw7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBUYWcgey4uLnRoaXMuc2tUcmFuc1Byb3BzMlNlbGYoQ29tcFRhZyl9XG4gICAgICAgICAgICAgICBkYXRhU291cmNlPXt0aGlzLnNrVmFsKCl9XG4gICAgICAgICAgICAgICBsb2FkaW5nPXt0aGlzLnNrTW9kZWwoKS5za1ZhbCh0aGlzLnByb3BzLmxvYWRpbmdJZCl9XG4gICAgICAgICAgICAgICBwYWdpbmF0aW9uPXt0aGlzLnNrTW9kZWwoKS5za1ZhbCh0aGlzLnByb3BzLnBhZ2luYXRpb25JZCl9XG4gICAgICAgICAgICAgICBzY3JvbGw9e3RtcFNjcm9sbH0vPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==