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

var _skL10n = require('sk-l10n');

var _AntdComp2 = require('./AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

var _Const = require('../../util/Const');

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
  notFoundContent: _skL10n.I18N.get('Not_Found'),
  // optionFilterProp:'value',
  showSearch: false,
  size: _Const.SIZE.Default,
  tags: false
}, _select2.default.defaultProps, {});

_select2.default.propTypes = _skJs.SK.assign({}, {
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

  _createClass(SKSelect, null, [{
    key: 'optionMap',
    value: function optionMap(selectOption) {
      return _react2.default.createElement(
        _select2.default.Option,
        { key: selectOption.id },
        selectOption.text
      );
    }
  }]);

  function SKSelect() {
    var _ref;

    _classCallCheck(this, SKSelect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SKSelect.__proto__ || Object.getPrototypeOf(SKSelect)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'SKSelect';
    return _this;
  }

  _createClass(SKSelect, [{
    key: 'handleSelect',
    value: function handleSelect(value, option) {
      if (this.props.onSelect && _lodash2.default.isFunction(this.props.onSelect)) {
        this.props.onSelect(value);
      } else {
        this.skVal(value);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          CompTag = _props.compTag,
          dataId = _props.dataId;


      return _react2.default.createElement(
        CompTag,
        _extends({}, this.skTransProps2Self(CompTag), {
          onSelect: this.handleSelect.bind(this),
          value: this.skVal() }),
        dataId ? this.skModel().skVal(dataId).map(function (selectOption) {
          return SKSelect.optionMap(selectOption);
        }) : this.skTransProps2Child()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9TS1NlbGVjdC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0UHJvcHMiLCJhc3NpZ24iLCJhbGxvd0NsZWFyIiwiYXV0b0ZvY3VzIiwiY29tYm9ib3giLCJkZWZhdWx0QWN0aXZlRmlyc3RPcHRpb24iLCJkaXNhYmxlZCIsImRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aCIsImZpbHRlck9wdGlvbiIsImxhYmVsSW5WYWx1ZSIsIm5vdEZvdW5kQ29udGVudCIsImdldCIsInNob3dTZWFyY2giLCJzaXplIiwiRGVmYXVsdCIsInRhZ3MiLCJwcm9wVHlwZXMiLCJib29sIiwiZGVmYXVsdFZhbHVlIiwib25lT2ZUeXBlIiwic3RyaW5nIiwiYXJyYXkiLCJkcm9wZG93bkNsYXNzTmFtZSIsImRyb3Bkb3duU3R5bGUiLCJvYmplY3QiLCJmdW5jIiwiZmlyc3RBY3RpdmVWYWx1ZSIsImdldFBvcHVwQ29udGFpbmVyIiwibWF4VGFnQ291bnQiLCJudW1iZXIiLCJtYXhUYWdQbGFjZWhvbGRlciIsIm5vZGUiLCJtb2RlIiwib25lT2YiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtdWx0aXBsZSIsIm9wdGlvbkZpbHRlclByb3AiLCJvcHRpb25MYWJlbFByb3AiLCJwbGFjZWhvbGRlciIsInRva2VuU2VwYXJhdG9ycyIsInZhbHVlIiwib25CbHVyIiwib25DaGFuZ2UiLCJvbkRlc2VsZWN0Iiwib25Gb2N1cyIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsIm9uUG9wdXBTY3JvbGwiLCJvblNlYXJjaCIsIm9uU2VsZWN0IiwiU0tTZWxlY3QiLCJzZWxlY3RPcHRpb24iLCJpZCIsInRleHQiLCJhcmdzIiwiY29tcE5hbWUiLCJvcHRpb24iLCJwcm9wcyIsImlzRnVuY3Rpb24iLCJza1ZhbCIsIkNvbXBUYWciLCJjb21wVGFnIiwiZGF0YUlkIiwic2tUcmFuc1Byb3BzMlNlbGYiLCJoYW5kbGVTZWxlY3QiLCJiaW5kIiwic2tNb2RlbCIsIm1hcCIsIm9wdGlvbk1h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USxDQUNabkQsWSxHQUFlLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNELFlBQXZCLEVBQXFDLGlCQUFPdUUsTUFBUCxDQUFjdkUsWUFBbkQsRUFBaUUsaUJBQU9BLFlBQXhFLEVBQXNGO0FBQzFHOEQsMkJBRDBHO0FBRTFHQyxVQUFRUztBQUZrRyxDQUF0RixDO0FBREhyQixRLENBS1puQyxTLEdBQVksU0FBR2YsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU2UsU0FBdkIsRUFBa0MsaUJBQU91RCxNQUFQLENBQWN2RCxTQUFoRCxFQUEyRCxpQkFBT0EsU0FBbEUsRUFBNkU7QUFDOUYrQyxVQUFRLG9CQUFVM0M7QUFENEUsQ0FBN0UsQztrQkFMQStCLFEiLCJmaWxlIjoiY29tcC9hbnRkL1NLU2VsZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTZWxlY3R9IGZyb20gJ2FudGQnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTS30gZnJvbSAnc2stanMnO1xuaW1wb3J0IHtJMThOfSBmcm9tICdzay1sMTBuJztcbmltcG9ydCBBbnRkQ29tcCBmcm9tICcuL0FudGRDb21wJztcbmltcG9ydCB7U0VMRUNUX01PREUsIFNJWkV9IGZyb20gJy4uLy4uL3V0aWwvQ29uc3QnO1xuXG5TZWxlY3QuZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCB7XG4gIGFsbG93Q2xlYXI6IGZhbHNlLFxuICBhdXRvRm9jdXM6IGZhbHNlLFxuICBjb21ib2JveDogZmFsc2UsXG4gIGRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbjogdHJ1ZSxcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg6IHRydWUsXG4gIGZpbHRlck9wdGlvbjogdHJ1ZSxcbiAgbGFiZWxJblZhbHVlOiBmYWxzZSxcbiAgLy8gbXVsdGlwbGU6IGZhbHNlLFxuICBub3RGb3VuZENvbnRlbnQ6IEkxOE4uZ2V0KCdOb3RfRm91bmQnKSxcbiAgLy8gb3B0aW9uRmlsdGVyUHJvcDondmFsdWUnLFxuICBzaG93U2VhcmNoOiBmYWxzZSxcbiAgc2l6ZTogU0laRS5EZWZhdWx0LFxuICB0YWdzOiBmYWxzZVxufSwgU2VsZWN0LmRlZmF1bHRQcm9wcywge30pO1xuXG5TZWxlY3QucHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCB7XG4gIGFsbG93Q2xlYXI6IFByb3BUeXBlcy5ib29sLFxuICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuICBjb21ib2JveDogUHJvcFR5cGVzLmJvb2wsXG4gIGRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbjogUHJvcFR5cGVzLmJvb2wsXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMuYXJyYXlcbiAgXSksXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZHJvcGRvd25DbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aDogUHJvcFR5cGVzLmJvb2wsXG4gIGRyb3Bkb3duU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIGZpbHRlck9wdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLmJvb2wsXG4gICAgUHJvcFR5cGVzLmZ1bmNcbiAgXSksXG4gIGZpcnN0QWN0aXZlVmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLmFycmF5XG4gIF0pLFxuICBnZXRQb3B1cENvbnRhaW5lcjogUHJvcFR5cGVzLmZ1bmMsXG4gIGxhYmVsSW5WYWx1ZTogUHJvcFR5cGVzLmJvb2wsXG4gIG1heFRhZ0NvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICBtYXhUYWdQbGFjZWhvbGRlcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLm5vZGUsXG4gICAgUHJvcFR5cGVzLmZ1bmNcbiAgXSksXG4gIG1vZGU6IFByb3BUeXBlcy5vbmVPZihPYmplY3QudmFsdWVzKFNFTEVDVF9NT0RFKSksXG4gIG11bHRpcGxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgbm90Rm91bmRDb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvcHRpb25GaWx0ZXJQcm9wOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvcHRpb25MYWJlbFByb3A6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzaG93U2VhcmNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2l6ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGFnczogUHJvcFR5cGVzLmJvb2wsXG4gIHRva2VuU2VwYXJhdG9yczogUHJvcFR5cGVzLmFycmF5LFxuICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMuYXJyYXlcbiAgXSksXG4gIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25EZXNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRm9jdXM6IFByb3BUeXBlcy5mdW5jLFxuICBvbk1vdXNlRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBvbk1vdXNlTGVhdmU6IFByb3BUeXBlcy5mdW5jLFxuICBvblBvcHVwU2Nyb2xsOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25TZWFyY2g6IFByb3BUeXBlcy5mdW5jLFxuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmNcbn0sIFNlbGVjdC5wcm9wVHlwZXMsIHt9KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tTZWxlY3QgZXh0ZW5kcyBBbnRkQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLmRlZmF1bHRQcm9wcywgU2VsZWN0Lk9wdGlvbi5kZWZhdWx0UHJvcHMsIFNlbGVjdC5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBTZWxlY3QsXG4gICAgZGF0YUlkOiB1bmRlZmluZWRcbiAgfSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLnByb3BUeXBlcywgU2VsZWN0Lk9wdGlvbi5wcm9wVHlwZXMsIFNlbGVjdC5wcm9wVHlwZXMsIHtcbiAgICBkYXRhSWQ6IFByb3BUeXBlcy5zdHJpbmdcbiAgfSk7XG5cbiAgc3RhdGljIG9wdGlvbk1hcChzZWxlY3RPcHRpb24pIHtcbiAgICByZXR1cm4gKDxTZWxlY3QuT3B0aW9uIGtleT17c2VsZWN0T3B0aW9uLmlkfT57c2VsZWN0T3B0aW9uLnRleHR9PC9TZWxlY3QuT3B0aW9uPik7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5jb21wTmFtZSA9ICdTS1NlbGVjdCc7XG4gIH1cblxuICBoYW5kbGVTZWxlY3QodmFsdWUsIG9wdGlvbikge1xuICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0ICYmIF8uaXNGdW5jdGlvbih0aGlzLnByb3BzLm9uU2VsZWN0KSkge1xuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdCh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2tWYWwodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge2NvbXBUYWc6IENvbXBUYWcsIGRhdGFJZH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wVGFnIHsuLi50aGlzLnNrVHJhbnNQcm9wczJTZWxmKENvbXBUYWcpfVxuICAgICAgICAgICAgICAgb25TZWxlY3Q9e3RoaXMuaGFuZGxlU2VsZWN0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5za1ZhbCgpfT5cbiAgICAgICAge2RhdGFJZCA/IHRoaXMuc2tNb2RlbCgpLnNrVmFsKGRhdGFJZCkubWFwKChzZWxlY3RPcHRpb24pID0+IHtcbiAgICAgICAgICByZXR1cm4gU0tTZWxlY3Qub3B0aW9uTWFwKHNlbGVjdE9wdGlvbik7XG4gICAgICAgIH0pIDogdGhpcy5za1RyYW5zUHJvcHMyQ2hpbGQoKX1cbiAgICAgIDwvQ29tcFRhZz5cbiAgICApO1xuICB9XG59XG4iXX0=