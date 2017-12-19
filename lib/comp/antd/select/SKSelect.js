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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

SKSelect.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, {
  compTag: _select2.default,
  dataId: undefined
});
SKSelect.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, {
  dataId: _propTypes2.default.string
});
exports.default = SKSelect;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9zZWxlY3QvU0tTZWxlY3QuanMiXSwibmFtZXMiOlsiU0tTZWxlY3QiLCJhcmdzIiwiY29tcE5hbWUiLCJoYW5kbGVTZWxlY3QiLCJ2YWx1ZSIsIm9wdGlvbiIsInByb3BzIiwib25TZWxlY3QiLCJpc0Z1bmN0aW9uIiwic2tWYWwiLCJDb21wVGFnIiwiY29tcFRhZyIsImRhdGFJZCIsInNrVHJhbnNQcm9wczJTZWxmIiwic2tNb2RlbCIsIm1hcCIsInNlbGVjdE9wdGlvbiIsIm9wdGlvbk1hcCIsInNrVHJhbnNQcm9wczJDaGlsZCIsImlkIiwidGV4dCIsImRlZmF1bHRQcm9wcyIsImFzc2lnbiIsInVuZGVmaW5lZCIsInByb3BUeXBlcyIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFE7OztBQVNuQixzQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsK0lBQ1ZBLElBRFU7O0FBRW5CLFVBQUtDLFFBQUwsR0FBZ0IsVUFBaEI7QUFDQSxVQUFLQyxZQUFMLEdBQW9CLFVBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUNyQyxVQUFJLE1BQUtDLEtBQUwsQ0FBV0MsUUFBWCxJQUF1QixpQkFBRUMsVUFBRixDQUFhLE1BQUtGLEtBQUwsQ0FBV0MsUUFBeEIsQ0FBM0IsRUFBOEQ7QUFDNUQsY0FBS0QsS0FBTCxDQUFXQyxRQUFYLENBQW9CSCxLQUFwQjtBQUNELE9BRkQsTUFFTztBQUNMLGNBQUtLLEtBQUwsQ0FBV0wsS0FBWDtBQUNEO0FBQ0YsS0FORDtBQUhtQjtBQVVwQjs7Ozs2QkFNUTtBQUFBLG1CQUMwQixLQUFLRSxLQUQvQjtBQUFBLFVBQ09JLE9BRFAsVUFDRkMsT0FERTtBQUFBLFVBQ2dCQyxNQURoQixVQUNnQkEsTUFEaEI7OztBQUdQLGFBQ0U7QUFBQyxlQUFEO0FBQUEscUJBQWEsS0FBS0MsaUJBQUwsQ0FBdUJILE9BQXZCLENBQWI7QUFDUyxvQkFBVSxLQUFLUCxZQUR4QjtBQUVTLGlCQUFPLEtBQUtNLEtBQUwsRUFGaEI7QUFHR0csaUJBQVMsS0FBS0UsT0FBTCxHQUFlTCxLQUFmLENBQXFCRyxNQUFyQixFQUE2QkcsR0FBN0IsQ0FBaUMsVUFBQ0MsWUFBRCxFQUFrQjtBQUMzRCxpQkFBT2hCLFNBQVNpQixTQUFULENBQW1CRCxZQUFuQixDQUFQO0FBQ0QsU0FGUyxDQUFULEdBRUksS0FBS0Usa0JBQUw7QUFMUCxPQURGO0FBU0Q7Ozs4QkFoQmdCRixZLEVBQWM7QUFDN0IsYUFBUTtBQUFBLHlCQUFRLE1BQVI7QUFBQSxVQUFlLEtBQUtBLGFBQWFHLEVBQWpDO0FBQXNDSCxxQkFBYUk7QUFBbkQsT0FBUjtBQUNEOzs7Ozs7QUF2QmtCcEIsUSxDQUNacUIsWSxHQUFlLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNELFlBQXZCLEVBQXFDO0FBQ3pEViwyQkFEeUQ7QUFFekRDLFVBQVFXO0FBRmlELENBQXJDLEM7QUFESHZCLFEsQ0FLWndCLFMsR0FBWSxTQUFHRixNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTRSxTQUF2QixFQUFrQztBQUNuRFosVUFBUSxvQkFBVWE7QUFEaUMsQ0FBbEMsQztrQkFMQXpCLFEiLCJmaWxlIjoiY29tcC9hbnRkL3NlbGVjdC9TS1NlbGVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2VsZWN0fSBmcm9tICdhbnRkJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U0t9IGZyb20gJ3NrLWpzJztcbmltcG9ydCBBbnRkQ29tcCBmcm9tICcuLi9BbnRkQ29tcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNLU2VsZWN0IGV4dGVuZHMgQW50ZENvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBTZWxlY3QsXG4gICAgZGF0YUlkOiB1bmRlZmluZWRcbiAgfSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLnByb3BUeXBlcywge1xuICAgIGRhdGFJZDogUHJvcFR5cGVzLnN0cmluZ1xuICB9KTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5jb21wTmFtZSA9ICdTS1NlbGVjdCc7XG4gICAgdGhpcy5oYW5kbGVTZWxlY3QgPSAodmFsdWUsIG9wdGlvbikgPT4ge1xuICAgICAgaWYgKHRoaXMucHJvcHMub25TZWxlY3QgJiYgXy5pc0Z1bmN0aW9uKHRoaXMucHJvcHMub25TZWxlY3QpKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25TZWxlY3QodmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5za1ZhbCh2YWx1ZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBvcHRpb25NYXAoc2VsZWN0T3B0aW9uKSB7XG4gICAgcmV0dXJuICg8U2VsZWN0Lk9wdGlvbiBrZXk9e3NlbGVjdE9wdGlvbi5pZH0+e3NlbGVjdE9wdGlvbi50ZXh0fTwvU2VsZWN0Lk9wdGlvbj4pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7Y29tcFRhZzogQ29tcFRhZywgZGF0YUlkfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBUYWcgey4uLnRoaXMuc2tUcmFuc1Byb3BzMlNlbGYoQ29tcFRhZyl9XG4gICAgICAgICAgICAgICBvblNlbGVjdD17dGhpcy5oYW5kbGVTZWxlY3R9XG4gICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5za1ZhbCgpfT5cbiAgICAgICAge2RhdGFJZCA/IHRoaXMuc2tNb2RlbCgpLnNrVmFsKGRhdGFJZCkubWFwKChzZWxlY3RPcHRpb24pID0+IHtcbiAgICAgICAgICByZXR1cm4gU0tTZWxlY3Qub3B0aW9uTWFwKHNlbGVjdE9wdGlvbik7XG4gICAgICAgIH0pIDogdGhpcy5za1RyYW5zUHJvcHMyQ2hpbGQoKX1cbiAgICAgIDwvQ29tcFRhZz5cbiAgICApO1xuICB9XG59XG4iXX0=