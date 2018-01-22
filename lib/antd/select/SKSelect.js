'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _select = require('antd/lib/select');

var _select2 = _interopRequireDefault(_select);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/select/style');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _AntdComp2 = require('../AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

var _Const = require('../../Const');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_select2.default.defaultProps = _skJs.SK.assign({}, {
  allowClear: false,
  autoFocus: false,
  combobox: false,
  defaultActiveFirstOption: true,
  disabled: false,
  dropdownMatchSelectWidth: true,
  filterOption: true,
  labelInValue: false,
  // multiple: false,
  notFoundContent: _skJs.Mesgs.get('Not_Found'),
  // optionFilterProp:'value',
  showSearch: false,
  size: _Const.SIZE.Default,
  tags: false
}, _select2.default.defaultProps, {});

_select2.default.propTypes = _skJs.SK.assign({}, {
  //https://ant.design/components/select-cn/#API
  allowClear: _propTypes2.default.bool,
  autoFocus: _propTypes2.default.bool,
  combobox: _propTypes2.default.bool,
  defaultActiveFirstOption: _propTypes2.default.bool,
  defaultValue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
  disabled: _propTypes2.default.bool,
  dropdownClassName: _propTypes2.default.string,
  dropdownMatchSelectWidth: _propTypes2.default.bool,
  dropdownStyle: _propTypes2.default.object,
  filterOption: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.func]),
  firstActiveValue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
  getPopupContainer: _propTypes2.default.func,
  labelInValue: _propTypes2.default.bool,
  maxTagCount: _propTypes2.default.number,
  maxTagPlaceholder: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]),
  mode: _propTypes2.default.oneOf(Object.values(_Const.SELECT_MODE)),
  multiple: _propTypes2.default.bool,
  notFoundContent: _propTypes2.default.string,
  optionFilterProp: _propTypes2.default.string,
  optionLabelProp: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  showSearch: _propTypes2.default.bool,
  size: _propTypes2.default.string,
  tags: _propTypes2.default.bool,
  tokenSeparators: _propTypes2.default.array,
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
  onBlur: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onDeselect: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onMouseEnter: _propTypes2.default.func,
  onMouseLeave: _propTypes2.default.func,
  onPopupScroll: _propTypes2.default.func,
  onSearch: _propTypes2.default.func,
  onSelect: _propTypes2.default.func
}, _select2.default.propTypes, {});

var SKSelect = function (_AntdComp) {
  _inherits(SKSelect, _AntdComp);

  function SKSelect() {
    var _ref;

    _classCallCheck(this, SKSelect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SKSelect.__proto__ || Object.getPrototypeOf(SKSelect)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'SKSelect';
    _this.handleSelect = function (value, option) {
      if (_this.props.onSelect && _lodash2.default.isFunction(_this.props.onSelect)) {
        _this.props.onSelect(value);
      } else {
        _this.skVal(value);
      }
    };
    return _this;
  }

  _createClass(SKSelect, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          CompTag = _props.compTag,
          dataId = _props.dataId;


      return _react2.default.createElement(
        CompTag,
        _extends({}, this.skTransProps2Self(CompTag), {
          onSelect: this.handleSelect,
          value: this.skVal() }),
        dataId ? this.skModel().skVal(dataId).map(function (selectOption) {
          return SKSelect.optionMap(selectOption);
        }) : this.skTransProps2Child()
      );
    }
  }], [{
    key: 'optionMap',
    value: function optionMap(selectOption) {
      return _react2.default.createElement(
        _select2.default.Option,
        { key: selectOption.id },
        selectOption.text
      );
    }
  }]);

  return SKSelect;
}(_AntdComp3.default);

SKSelect.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, _select2.default.Option.defaultProps, _select2.default.defaultProps, {
  compTag: _select2.default,
  dataId: undefined
});
SKSelect.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _select2.default.Option.propTypes, _select2.default.propTypes, {
  dataId: _propTypes2.default.string
});
exports.default = SKSelect;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGQvc2VsZWN0L1NLU2VsZWN0LmpzIl0sIm5hbWVzIjpbImRlZmF1bHRQcm9wcyIsImFzc2lnbiIsImFsbG93Q2xlYXIiLCJhdXRvRm9jdXMiLCJjb21ib2JveCIsImRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbiIsImRpc2FibGVkIiwiZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoIiwiZmlsdGVyT3B0aW9uIiwibGFiZWxJblZhbHVlIiwibm90Rm91bmRDb250ZW50IiwiZ2V0Iiwic2hvd1NlYXJjaCIsInNpemUiLCJEZWZhdWx0IiwidGFncyIsInByb3BUeXBlcyIsImJvb2wiLCJkZWZhdWx0VmFsdWUiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJhcnJheSIsImRyb3Bkb3duQ2xhc3NOYW1lIiwiZHJvcGRvd25TdHlsZSIsIm9iamVjdCIsImZ1bmMiLCJmaXJzdEFjdGl2ZVZhbHVlIiwiZ2V0UG9wdXBDb250YWluZXIiLCJtYXhUYWdDb3VudCIsIm51bWJlciIsIm1heFRhZ1BsYWNlaG9sZGVyIiwibm9kZSIsIm1vZGUiLCJvbmVPZiIsIk9iamVjdCIsInZhbHVlcyIsIm11bHRpcGxlIiwib3B0aW9uRmlsdGVyUHJvcCIsIm9wdGlvbkxhYmVsUHJvcCIsInBsYWNlaG9sZGVyIiwidG9rZW5TZXBhcmF0b3JzIiwidmFsdWUiLCJvbkJsdXIiLCJvbkNoYW5nZSIsIm9uRGVzZWxlY3QiLCJvbkZvY3VzIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwib25Qb3B1cFNjcm9sbCIsIm9uU2VhcmNoIiwib25TZWxlY3QiLCJTS1NlbGVjdCIsImFyZ3MiLCJjb21wTmFtZSIsImhhbmRsZVNlbGVjdCIsIm9wdGlvbiIsInByb3BzIiwiaXNGdW5jdGlvbiIsInNrVmFsIiwiQ29tcFRhZyIsImNvbXBUYWciLCJkYXRhSWQiLCJza1RyYW5zUHJvcHMyU2VsZiIsInNrTW9kZWwiLCJtYXAiLCJzZWxlY3RPcHRpb24iLCJvcHRpb25NYXAiLCJza1RyYW5zUHJvcHMy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LEdBQWUsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0QsWUFBdkIsRUFBcUMsaUJBQU9zRSxNQUFQLENBQWN0RSxZQUFuRCxFQUFpRSxpQkFBT0EsWUFBeEUsRUFBc0Y7QUFDMUc0RCwyQkFEMEc7QUFFMUdDLFVBQVFVO0FBRmtHLENBQXRGLEM7QUFESHBCLFEsQ0FLWm5DLFMsR0FBWSxTQUFHZixNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTZSxTQUF2QixFQUFrQyxpQkFBT3NELE1BQVAsQ0FBY3RELFNBQWhELEVBQTJELGlCQUFPQSxTQUFsRSxFQUE2RTtBQUM5RjZDLFVBQVEsb0JBQVV6QztBQUQ0RSxDQUE3RSxDO2tCQUxBK0IsUSIsImZpbGUiOiJhbnRkL3NlbGVjdC9TS1NlbGVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2VsZWN0fSBmcm9tICdhbnRkJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U0ssIE1lc2dzfSBmcm9tICdzay1qcyc7XG5pbXBvcnQgQW50ZENvbXAgZnJvbSAnLi4vQW50ZENvbXAnO1xuaW1wb3J0IHtTRUxFQ1RfTU9ERSwgU0laRX0gZnJvbSAnLi4vLi4vQ29uc3QnO1xuXG5TZWxlY3QuZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCB7XG4gIGFsbG93Q2xlYXI6IGZhbHNlLFxuICBhdXRvRm9jdXM6IGZhbHNlLFxuICBjb21ib2JveDogZmFsc2UsXG4gIGRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbjogdHJ1ZSxcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg6IHRydWUsXG4gIGZpbHRlck9wdGlvbjogdHJ1ZSxcbiAgbGFiZWxJblZhbHVlOiBmYWxzZSxcbiAgLy8gbXVsdGlwbGU6IGZhbHNlLFxuICBub3RGb3VuZENvbnRlbnQ6IE1lc2dzLmdldCgnTm90X0ZvdW5kJyksXG4gIC8vIG9wdGlvbkZpbHRlclByb3A6J3ZhbHVlJyxcbiAgc2hvd1NlYXJjaDogZmFsc2UsXG4gIHNpemU6IFNJWkUuRGVmYXVsdCxcbiAgdGFnczogZmFsc2Vcbn0sIFNlbGVjdC5kZWZhdWx0UHJvcHMsIHt9KTtcblxuU2VsZWN0LnByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwge1xuICAvL2h0dHBzOi8vYW50LmRlc2lnbi9jb21wb25lbnRzL3NlbGVjdC1jbi8jQVBJXG4gIGFsbG93Q2xlYXI6IFByb3BUeXBlcy5ib29sLFxuICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuICBjb21ib2JveDogUHJvcFR5cGVzLmJvb2wsXG4gIGRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbjogUHJvcFR5cGVzLmJvb2wsXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMuYXJyYXlcbiAgXSksXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZHJvcGRvd25DbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aDogUHJvcFR5cGVzLmJvb2wsXG4gIGRyb3Bkb3duU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIGZpbHRlck9wdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLmJvb2wsXG4gICAgUHJvcFR5cGVzLmZ1bmNcbiAgXSksXG4gIGZpcnN0QWN0aXZlVmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLmFycmF5XG4gIF0pLFxuICBnZXRQb3B1cENvbnRhaW5lcjogUHJvcFR5cGVzLmZ1bmMsXG4gIGxhYmVsSW5WYWx1ZTogUHJvcFR5cGVzLmJvb2wsXG4gIG1heFRhZ0NvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICBtYXhUYWdQbGFjZWhvbGRlcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLm5vZGUsXG4gICAgUHJvcFR5cGVzLmZ1bmNcbiAgXSksXG4gIG1vZGU6IFByb3BUeXBlcy5vbmVPZihPYmplY3QudmFsdWVzKFNFTEVDVF9NT0RFKSksXG4gIG11bHRpcGxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgbm90Rm91bmRDb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvcHRpb25GaWx0ZXJQcm9wOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvcHRpb25MYWJlbFByb3A6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzaG93U2VhcmNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2l6ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGFnczogUHJvcFR5cGVzLmJvb2wsXG4gIHRva2VuU2VwYXJhdG9yczogUHJvcFR5cGVzLmFycmF5LFxuICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMuYXJyYXlcbiAgXSksXG4gIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25EZXNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRm9jdXM6IFByb3BUeXBlcy5mdW5jLFxuICBvbk1vdXNlRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBvbk1vdXNlTGVhdmU6IFByb3BUeXBlcy5mdW5jLFxuICBvblBvcHVwU2Nyb2xsOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25TZWFyY2g6IFByb3BUeXBlcy5mdW5jLFxuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmNcbn0sIFNlbGVjdC5wcm9wVHlwZXMsIHt9KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tTZWxlY3QgZXh0ZW5kcyBBbnRkQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLmRlZmF1bHRQcm9wcywgU2VsZWN0Lk9wdGlvbi5kZWZhdWx0UHJvcHMsIFNlbGVjdC5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBTZWxlY3QsXG4gICAgZGF0YUlkOiB1bmRlZmluZWRcbiAgfSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLnByb3BUeXBlcywgU2VsZWN0Lk9wdGlvbi5wcm9wVHlwZXMsIFNlbGVjdC5wcm9wVHlwZXMsIHtcbiAgICBkYXRhSWQ6IFByb3BUeXBlcy5zdHJpbmdcbiAgfSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnU0tTZWxlY3QnO1xuICAgIHRoaXMuaGFuZGxlU2VsZWN0ID0gKHZhbHVlLCBvcHRpb24pID0+IHtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0ICYmIF8uaXNGdW5jdGlvbih0aGlzLnByb3BzLm9uU2VsZWN0KSkge1xuICAgICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2tWYWwodmFsdWUpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgb3B0aW9uTWFwKHNlbGVjdE9wdGlvbikge1xuICAgIHJldHVybiAoPFNlbGVjdC5PcHRpb24ga2V5PXtzZWxlY3RPcHRpb24uaWR9PntzZWxlY3RPcHRpb24udGV4dH08L1NlbGVjdC5PcHRpb24+KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge2NvbXBUYWc6IENvbXBUYWcsIGRhdGFJZH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wVGFnIHsuLi50aGlzLnNrVHJhbnNQcm9wczJTZWxmKENvbXBUYWcpfVxuICAgICAgICAgICAgICAgb25TZWxlY3Q9e3RoaXMuaGFuZGxlU2VsZWN0fVxuICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc2tWYWwoKX0+XG4gICAgICAgIHtkYXRhSWQgPyB0aGlzLnNrTW9kZWwoKS5za1ZhbChkYXRhSWQpLm1hcCgoc2VsZWN0T3B0aW9uKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIFNLU2VsZWN0Lm9wdGlvbk1hcChzZWxlY3RPcHRpb24pO1xuICAgICAgICB9KSA6IHRoaXMuc2tUcmFuc1Byb3BzMkNoaWxkKCl9XG4gICAgICA8L0NvbXBUYWc+XG4gICAgKTtcbiAgfVxufVxuIl19