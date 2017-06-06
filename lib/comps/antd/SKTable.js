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

var _Comp2 = require('../../utils/Comp');

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
      if (!_.isEmpty(this.props.loadingId)) {
        this.addChangedMonitor(this.props.loadingId);
      }
      if (!_.isEmpty(this.props.paginationId)) {
        this.addChangedMonitor(this.props.paginationId);
      }
    }
  }, {
    key: 'rmvExtendChangedMonitor',
    value: function rmvExtendChangedMonitor() {
      if (!_.isEmpty(this.props.loadingId)) {
        this.rmvChangedMonitor(this.props.loadingId);
      }
      if (!_.isEmpty(this.props.paginationId)) {
        this.rmvChangedMonitor(this.props.paginationId);
      }
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
  loadingId: _react2.default.PropTypes.string,
  paginationId: _react2.default.PropTypes.string
});
exports.default = SKTable;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FudGQvU0tUYWJsZS5qcyJdLCJuYW1lcyI6WyJwcm9wVHlwZXMiLCJhc3NpZ24iLCJyb3dLZXkiLCJQcm9wVHlwZXMiLCJmdW5jIiwic2Nyb2xsIiwib2JqZWN0Iiwic2l6ZSIsInN0cmluZyIsIlNLVGFibGUiLCJhcmdzIiwiXyIsImlzRW1wdHkiLCJwcm9wcyIsImxvYWRpbmdJZCIsImFkZENoYW5nZWRNb25pdG9yIiwicGFnaW5hdGlvbklkIiwicm12Q2hhbmdlZE1vbml0b3IiLCJDb21wVGFnIiwiY29tcFRhZyIsImNvbHVtbnMiLCJ0bXBTY3JvbGwiLCJ5IiwieCIsInJlZHVjZSIsIiRzdW0iLCIkaXRlbSIsIndpZHRoIiwiY29tcFZhbGlkUHJvcHMiLCJza1ZhbCIsImlNb2RlbCIsImRlZmF1bHRQcm9wcyIsImJvcmRlcmVkIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxnQkFBTUEsU0FBTixHQUFrQixlQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLGdCQUFNRCxTQUFwQixFQUErQjtBQUMvQ0UsVUFBUSxnQkFBTUMsU0FBTixDQUFnQkMsSUFEdUI7QUFFL0NDLFVBQVEsZ0JBQU1GLFNBQU4sQ0FBZ0JHLE1BRnVCO0FBRy9DQyxRQUFNLGdCQUFNSixTQUFOLENBQWdCSztBQUh5QixDQUEvQixFQUlmLEVBSmUsQ0FBbEI7O0lBTXFCQyxPOzs7QUFZbkIscUJBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLHdJQUNWQSxJQURVO0FBRXBCOzs7OzhDQUV5QjtBQUN4QixVQUFJLENBQUNDLEVBQUVDLE9BQUYsQ0FBVSxLQUFLQyxLQUFMLENBQVdDLFNBQXJCLENBQUwsRUFBc0M7QUFDcEMsYUFBS0MsaUJBQUwsQ0FBdUIsS0FBS0YsS0FBTCxDQUFXQyxTQUFsQztBQUNEO0FBQ0QsVUFBSSxDQUFDSCxFQUFFQyxPQUFGLENBQVUsS0FBS0MsS0FBTCxDQUFXRyxZQUFyQixDQUFMLEVBQXlDO0FBQ3ZDLGFBQUtELGlCQUFMLENBQXVCLEtBQUtGLEtBQUwsQ0FBV0csWUFBbEM7QUFDRDtBQUNGOzs7OENBRXlCO0FBQ3hCLFVBQUksQ0FBQ0wsRUFBRUMsT0FBRixDQUFVLEtBQUtDLEtBQUwsQ0FBV0MsU0FBckIsQ0FBTCxFQUFzQztBQUNwQyxhQUFLRyxpQkFBTCxDQUF1QixLQUFLSixLQUFMLENBQVdDLFNBQWxDO0FBQ0Q7QUFDRCxVQUFJLENBQUNILEVBQUVDLE9BQUYsQ0FBVSxLQUFLQyxLQUFMLENBQVdHLFlBQXJCLENBQUwsRUFBeUM7QUFDdkMsYUFBS0MsaUJBQUwsQ0FBdUIsS0FBS0osS0FBTCxDQUFXRyxZQUFsQztBQUNEO0FBQ0Y7Ozs2QkFFUTtBQUFBLG1CQUNtQyxLQUFLSCxLQUR4QztBQUFBLFVBQ09LLE9BRFAsVUFDRkMsT0FERTtBQUFBLFVBQ2dCQyxPQURoQixVQUNnQkEsT0FEaEI7QUFBQSxVQUN5QmYsTUFEekIsVUFDeUJBLE1BRHpCOzs7QUFHUCxVQUFJZ0IsWUFBWSxFQUFDQyxHQUFHLEtBQUosRUFBaEI7QUFDQUQsZ0JBQVVFLENBQVYsR0FBY0gsUUFBUUksTUFBUixDQUFlLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUM1QyxlQUFPRCxPQUFPQyxNQUFNQyxLQUFwQjtBQUNELE9BRmEsRUFFWCxDQUZXLENBQWQ7QUFHQU4sa0JBQVloQixVQUFVZ0IsU0FBdEI7O0FBRUEsYUFDRSw4QkFBQyxPQUFELGVBQWEsS0FBS08sY0FBTCxDQUFvQlYsT0FBcEIsQ0FBYjtBQUNFLG9CQUFZLEtBQUtXLEtBQUwsRUFEZDtBQUVFLGlCQUFTLEtBQUtDLE1BQUwsR0FBY0QsS0FBZCxDQUFvQixLQUFLaEIsS0FBTCxDQUFXQyxTQUEvQixDQUZYO0FBR0Usb0JBQVksS0FBS2dCLE1BQUwsR0FBY0QsS0FBZCxDQUFvQixLQUFLaEIsS0FBTCxDQUFXRyxZQUEvQixDQUhkO0FBSUUsZ0JBQVFLLFNBSlYsSUFERjtBQU9EOzs7Ozs7QUFsRGtCWixPLENBQ1pzQixZLEdBQWU7QUFDcEJaLDBCQURvQjtBQUVwQmEsWUFBVSxJQUZVO0FBR3BCbEIsYUFBV21CLFNBSFM7QUFJcEJqQixnQkFBY2lCO0FBSk0sQztBQURIeEIsTyxDQU9aVCxTLEdBQVksZUFBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxlQUFLRCxTQUFuQixFQUE4QixnQkFBTUEsU0FBcEMsRUFBK0M7QUFDaEVjLGFBQVcsZ0JBQU1YLFNBQU4sQ0FBZ0JLLE1BRHFDO0FBRWhFUSxnQkFBYyxnQkFBTWIsU0FBTixDQUFnQks7QUFGa0MsQ0FBL0MsQztrQkFQQUMsTyIsImZpbGUiOiJjb21wcy9hbnRkL1NLVGFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1RhYmxlfSBmcm9tICdhbnRkJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU0sgZnJvbSAnc2stanMnO1xuaW1wb3J0IENvbXAgZnJvbSAnLi4vLi4vdXRpbHMvQ29tcCc7XG5cblRhYmxlLnByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgVGFibGUucHJvcFR5cGVzLCB7XG4gIHJvd0tleTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIHNjcm9sbDogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgc2l6ZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZ1xufSwge30pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS1RhYmxlIGV4dGVuZHMgQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY29tcFRhZzogVGFibGUsXG4gICAgYm9yZGVyZWQ6IHRydWUsXG4gICAgbG9hZGluZ0lkOiB1bmRlZmluZWQsXG4gICAgcGFnaW5hdGlvbklkOiB1bmRlZmluZWRcbiAgfTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQ29tcC5wcm9wVHlwZXMsIFRhYmxlLnByb3BUeXBlcywge1xuICAgIGxvYWRpbmdJZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBwYWdpbmF0aW9uSWQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcbiAgfSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICB9XG5cbiAgYWRkRXh0ZW5kQ2hhbmdlZE1vbml0b3IoKSB7XG4gICAgaWYgKCFfLmlzRW1wdHkodGhpcy5wcm9wcy5sb2FkaW5nSWQpKSB7XG4gICAgICB0aGlzLmFkZENoYW5nZWRNb25pdG9yKHRoaXMucHJvcHMubG9hZGluZ0lkKTtcbiAgICB9XG4gICAgaWYgKCFfLmlzRW1wdHkodGhpcy5wcm9wcy5wYWdpbmF0aW9uSWQpKSB7XG4gICAgICB0aGlzLmFkZENoYW5nZWRNb25pdG9yKHRoaXMucHJvcHMucGFnaW5hdGlvbklkKTtcbiAgICB9XG4gIH1cblxuICBybXZFeHRlbmRDaGFuZ2VkTW9uaXRvcigpIHtcbiAgICBpZiAoIV8uaXNFbXB0eSh0aGlzLnByb3BzLmxvYWRpbmdJZCkpIHtcbiAgICAgIHRoaXMucm12Q2hhbmdlZE1vbml0b3IodGhpcy5wcm9wcy5sb2FkaW5nSWQpO1xuICAgIH1cbiAgICBpZiAoIV8uaXNFbXB0eSh0aGlzLnByb3BzLnBhZ2luYXRpb25JZCkpIHtcbiAgICAgIHRoaXMucm12Q2hhbmdlZE1vbml0b3IodGhpcy5wcm9wcy5wYWdpbmF0aW9uSWQpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge2NvbXBUYWc6IENvbXBUYWcsIGNvbHVtbnMsIHNjcm9sbH0gPSB0aGlzLnByb3BzO1xuXG4gICAgbGV0IHRtcFNjcm9sbCA9IHt5OiBmYWxzZX07XG4gICAgdG1wU2Nyb2xsLnggPSBjb2x1bW5zLnJlZHVjZSgoJHN1bSwgJGl0ZW0pID0+IHtcbiAgICAgIHJldHVybiAkc3VtICsgJGl0ZW0ud2lkdGg7XG4gICAgfSwgMCk7XG4gICAgdG1wU2Nyb2xsID0gc2Nyb2xsIHx8IHRtcFNjcm9sbDtcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcFRhZyB7Li4udGhpcy5jb21wVmFsaWRQcm9wcyhDb21wVGFnKX1cbiAgICAgICAgZGF0YVNvdXJjZT17dGhpcy5za1ZhbCgpfVxuICAgICAgICBsb2FkaW5nPXt0aGlzLmlNb2RlbCgpLnNrVmFsKHRoaXMucHJvcHMubG9hZGluZ0lkKX1cbiAgICAgICAgcGFnaW5hdGlvbj17dGhpcy5pTW9kZWwoKS5za1ZhbCh0aGlzLnByb3BzLnBhZ2luYXRpb25JZCl9XG4gICAgICAgIHNjcm9sbD17dG1wU2Nyb2xsfS8+XG4gICAgKTtcbiAgfVxufVxuIl19