'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style2 = require('antd/lib/select/style');

var _select = require('antd/lib/select');

var _select2 = _interopRequireDefault(_select);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

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

var SKSelect = function (_Comp) {
  _inherits(SKSelect, _Comp);

  function SKSelect() {
    var _ref;

    _classCallCheck(this, SKSelect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(this, (_ref = SKSelect.__proto__ || Object.getPrototypeOf(SKSelect)).call.apply(_ref, [this].concat(args)));
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
    key: 'optionMap',
    value: function optionMap(selectOption) {
      return _react2.default.createElement(
        _select2.default.Option,
        { key: selectOption.id },
        selectOption.text
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          CompTag = _props.compTag,
          dataId = _props.dataId;


      return _react2.default.createElement(
        CompTag,
        _extends({}, this.compValidProps(CompTag), {
          onSelect: this.handleSelect.bind(this),
          value: this.skVal() }),
        dataId ? this.iModel().skVal(dataId).map(function (selectOption) {
          return _this2.optionMap(selectOption);
        }) : this.skPropsTrans()
      );
    }
  }]);

  return SKSelect;
}(_Comp3.default);

SKSelect.defaultProps = _skJs2.default.assign({}, _select2.default.defaultProps, {
  compTag: _select2.default,
  dataId: undefined
});
SKSelect.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _select2.default.Option.propTypes, _select2.default.propTypes, {
  dataId: _react2.default.PropTypes.string
});
exports.default = SKSelect;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9TS1NlbGVjdC5qcyJdLCJuYW1lcyI6WyJTS1NlbGVjdCIsImFyZ3MiLCJ2YWx1ZSIsIm9wdGlvbiIsInByb3BzIiwib25TZWxlY3QiLCJpc0Z1bmN0aW9uIiwic2tWYWwiLCJzZWxlY3RPcHRpb24iLCJpZCIsInRleHQiLCJDb21wVGFnIiwiY29tcFRhZyIsImRhdGFJZCIsImNvbXBWYWxpZFByb3BzIiwiaGFuZGxlU2VsZWN0IiwiYmluZCIsImlNb2RlbCIsIm1hcCIsIm9wdGlvbk1hcCIsInNrUHJvcHNUcmFucyIsImRlZmF1bHRQcm9wcyIsImFzc2lnbiIsInVuZGVmaW5lZCIsInByb3BUeXBlcyIsIk9wdGlvbiIsIlByb3BUeXBlcyIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFE7OztBQVNuQixzQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsMElBQ1ZBLElBRFU7QUFFcEI7Ozs7aUNBRVlDLEssRUFBT0MsTSxFQUFRO0FBQzFCLFVBQUksS0FBS0MsS0FBTCxDQUFXQyxRQUFYLElBQXVCLGlCQUFFQyxVQUFGLENBQWEsS0FBS0YsS0FBTCxDQUFXQyxRQUF4QixDQUEzQixFQUE4RDtBQUM1RCxhQUFLRCxLQUFMLENBQVdDLFFBQVgsQ0FBb0JILEtBQXBCO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsYUFBS0ssS0FBTCxDQUFXTCxLQUFYO0FBQ0Q7QUFDRjs7OzhCQUVTTSxZLEVBQWM7QUFDdEIsYUFBUTtBQUFBLHlCQUFRLE1BQVI7QUFBQSxVQUFlLEtBQUtBLGFBQWFDLEVBQWpDO0FBQXNDRCxxQkFBYUU7QUFBbkQsT0FBUjtBQUNEOzs7NkJBRVE7QUFBQTs7QUFBQSxtQkFDMEIsS0FBS04sS0FEL0I7QUFBQSxVQUNPTyxPQURQLFVBQ0ZDLE9BREU7QUFBQSxVQUNnQkMsTUFEaEIsVUFDZ0JBLE1BRGhCOzs7QUFHUCxhQUNFO0FBQUMsZUFBRDtBQUFBLHFCQUFhLEtBQUtDLGNBQUwsQ0FBb0JILE9BQXBCLENBQWI7QUFDUyxvQkFBVSxLQUFLSSxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQURuQjtBQUVTLGlCQUFPLEtBQUtULEtBQUwsRUFGaEI7QUFHR00saUJBQVMsS0FBS0ksTUFBTCxHQUFjVixLQUFkLENBQW9CTSxNQUFwQixFQUE0QkssR0FBNUIsQ0FBZ0MsVUFBQ1YsWUFBRCxFQUFrQjtBQUMxRCxpQkFBTyxPQUFLVyxTQUFMLENBQWVYLFlBQWYsQ0FBUDtBQUNELFNBRlMsQ0FBVCxHQUVJLEtBQUtZLFlBQUw7QUFMUCxPQURGO0FBU0Q7Ozs7OztBQXJDa0JwQixRLENBQ1pxQixZLEdBQWUsZUFBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxpQkFBT0QsWUFBckIsRUFBbUM7QUFDdkRULDJCQUR1RDtBQUV2REMsVUFBUVU7QUFGK0MsQ0FBbkMsQztBQURIdkIsUSxDQUtad0IsUyxHQUFZLGVBQUdGLE1BQUgsQ0FBVSxFQUFWLEVBQWMsZUFBS0UsU0FBbkIsRUFBOEIsaUJBQU9DLE1BQVAsQ0FBY0QsU0FBNUMsRUFBdUQsaUJBQU9BLFNBQTlELEVBQXlFO0FBQzFGWCxVQUFRLGdCQUFNYSxTQUFOLENBQWdCQztBQURrRSxDQUF6RSxDO2tCQUxBM0IsUSIsImZpbGUiOiJjb21wL2FudGQvU0tTZWxlY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NlbGVjdH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTSyBmcm9tICdzay1qcyc7XG5pbXBvcnQgQ29tcCBmcm9tICcuLi8uLi91dGlsL0NvbXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS1NlbGVjdCBleHRlbmRzIENvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCBTZWxlY3QuZGVmYXVsdFByb3BzLCB7XG4gICAgY29tcFRhZzogU2VsZWN0LFxuICAgIGRhdGFJZDogdW5kZWZpbmVkXG4gIH0pO1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBDb21wLnByb3BUeXBlcywgU2VsZWN0Lk9wdGlvbi5wcm9wVHlwZXMsIFNlbGVjdC5wcm9wVHlwZXMsIHtcbiAgICBkYXRhSWQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcbiAgfSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICB9XG5cbiAgaGFuZGxlU2VsZWN0KHZhbHVlLCBvcHRpb24pIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCAmJiBfLmlzRnVuY3Rpb24odGhpcy5wcm9wcy5vblNlbGVjdCkpIHtcbiAgICAgIHRoaXMucHJvcHMub25TZWxlY3QodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNrVmFsKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBvcHRpb25NYXAoc2VsZWN0T3B0aW9uKSB7XG4gICAgcmV0dXJuICg8U2VsZWN0Lk9wdGlvbiBrZXk9e3NlbGVjdE9wdGlvbi5pZH0+e3NlbGVjdE9wdGlvbi50ZXh0fTwvU2VsZWN0Lk9wdGlvbj4pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7Y29tcFRhZzogQ29tcFRhZywgZGF0YUlkfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBUYWcgey4uLnRoaXMuY29tcFZhbGlkUHJvcHMoQ29tcFRhZyl9XG4gICAgICAgICAgICAgICBvblNlbGVjdD17dGhpcy5oYW5kbGVTZWxlY3QuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnNrVmFsKCl9PlxuICAgICAgICB7ZGF0YUlkID8gdGhpcy5pTW9kZWwoKS5za1ZhbChkYXRhSWQpLm1hcCgoc2VsZWN0T3B0aW9uKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uTWFwKHNlbGVjdE9wdGlvbik7XG4gICAgICAgIH0pIDogdGhpcy5za1Byb3BzVHJhbnMoKX1cbiAgICAgIDwvQ29tcFRhZz5cbiAgICApO1xuICB9XG59XG4iXX0=