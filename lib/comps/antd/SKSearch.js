'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _antd = require('antd');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _skJs2 = _interopRequireDefault(_skJs);

var _SKInput2 = require('./SKInput');

var _SKInput3 = _interopRequireDefault(_SKInput2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SKSearch = function (_SKInput) {
  _inherits(SKSearch, _SKInput);

  function SKSearch() {
    var _ref;

    _classCallCheck(this, SKSearch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(this, (_ref = SKSearch.__proto__ || Object.getPrototypeOf(SKSearch)).call.apply(_ref, [this].concat(args)));
  }

  _createClass(SKSearch, [{
    key: 'handleSearch',
    value: function handleSearch(value) {
      if (this.props.searchFuncId) {
        var searchFunc = this.iModel().skVal(this.props.searchFuncId);
        if (_lodash2.default.isFunction(searchFunc)) {
          searchFunc(value);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var CompTag = this.props.compTag;


      return _react2.default.createElement(
        CompTag,
        _extends({}, this.compValidProps(CompTag), {
          onChange: this.handleChange.bind(this),
          onSearch: this.handleSearch.bind(this),
          value: this.skVal() }),
        this.skPropsTrans()
      );
    }
  }]);

  return SKSearch;
}(_SKInput3.default);

SKSearch.defaultProps = _skJs2.default.assign({}, _antd.Input.Search.defaultProps, {
  compTag: _antd.Input.Search
});
SKSearch.propTypes = _skJs2.default.assign({}, _SKInput3.default.propTypes, _antd.Input.Search.propTypes, {
  searchFuncId: _react2.default.PropTypes.string
});
exports.default = SKSearch;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FudGQvU0tTZWFyY2guanMiXSwibmFtZXMiOlsiU0tTZWFyY2giLCJhcmdzIiwidmFsdWUiLCJwcm9wcyIsInNlYXJjaEZ1bmNJZCIsInNlYXJjaEZ1bmMiLCJpTW9kZWwiLCJza1ZhbCIsImlzRnVuY3Rpb24iLCJDb21wVGFnIiwiY29tcFRhZyIsImNvbXBWYWxpZFByb3BzIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsImhhbmRsZVNlYXJjaCIsInNrUHJvcHNUcmFucyIsImRlZmF1bHRQcm9wcyIsImFzc2lnbiIsIlNlYXJjaCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFE7OztBQVFuQixzQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsMElBQ1ZBLElBRFU7QUFFcEI7Ozs7aUNBRVlDLEssRUFBTztBQUNsQixVQUFJLEtBQUtDLEtBQUwsQ0FBV0MsWUFBZixFQUE2QjtBQUMzQixZQUFJQyxhQUFhLEtBQUtDLE1BQUwsR0FBY0MsS0FBZCxDQUFvQixLQUFLSixLQUFMLENBQVdDLFlBQS9CLENBQWpCO0FBQ0EsWUFBSSxpQkFBRUksVUFBRixDQUFhSCxVQUFiLENBQUosRUFBOEI7QUFDNUJBLHFCQUFXSCxLQUFYO0FBQ0Q7QUFDRjtBQUNGOzs7NkJBRVE7QUFBQSxVQUNPTyxPQURQLEdBQ2tCLEtBQUtOLEtBRHZCLENBQ0ZPLE9BREU7OztBQUdQLGFBQ0U7QUFBQyxlQUFEO0FBQUEscUJBQWEsS0FBS0MsY0FBTCxDQUFvQkYsT0FBcEIsQ0FBYjtBQUNFLG9CQUFVLEtBQUtHLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBRFo7QUFFRSxvQkFBVSxLQUFLQyxZQUFMLENBQWtCRCxJQUFsQixDQUF1QixJQUF2QixDQUZaO0FBR0UsaUJBQU8sS0FBS04sS0FBTCxFQUhUO0FBSUcsYUFBS1EsWUFBTDtBQUpILE9BREY7QUFRRDs7Ozs7O0FBaENrQmYsUSxDQUNaZ0IsWSxHQUFlLGVBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsWUFBTUMsTUFBTixDQUFhRixZQUEzQixFQUF5QztBQUM3RE4sV0FBUyxZQUFNUTtBQUQ4QyxDQUF6QyxDO0FBREhsQixRLENBSVptQixTLEdBQVksZUFBR0YsTUFBSCxDQUFVLEVBQVYsRUFBYyxrQkFBUUUsU0FBdEIsRUFBaUMsWUFBTUQsTUFBTixDQUFhQyxTQUE5QyxFQUF5RDtBQUMxRWYsZ0JBQWMsZ0JBQU1nQixTQUFOLENBQWdCQztBQUQ0QyxDQUF6RCxDO2tCQUpBckIsUSIsImZpbGUiOiJjb21wcy9hbnRkL1NLU2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbnB1dH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTSyBmcm9tICdzay1qcyc7XG5pbXBvcnQgU0tJbnB1dCBmcm9tICcuL1NLSW5wdXQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS1NlYXJjaCBleHRlbmRzIFNLSW5wdXQge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCBJbnB1dC5TZWFyY2guZGVmYXVsdFByb3BzLCB7XG4gICAgY29tcFRhZzogSW5wdXQuU2VhcmNoXG4gIH0pO1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBTS0lucHV0LnByb3BUeXBlcywgSW5wdXQuU2VhcmNoLnByb3BUeXBlcywge1xuICAgIHNlYXJjaEZ1bmNJZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZ1xuICB9KTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gIH1cblxuICBoYW5kbGVTZWFyY2godmFsdWUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5zZWFyY2hGdW5jSWQpIHtcbiAgICAgIGxldCBzZWFyY2hGdW5jID0gdGhpcy5pTW9kZWwoKS5za1ZhbCh0aGlzLnByb3BzLnNlYXJjaEZ1bmNJZCk7XG4gICAgICBpZiAoXy5pc0Z1bmN0aW9uKHNlYXJjaEZ1bmMpKSB7XG4gICAgICAgIHNlYXJjaEZ1bmModmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge2NvbXBUYWc6IENvbXBUYWd9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcFRhZyB7Li4udGhpcy5jb21wVmFsaWRQcm9wcyhDb21wVGFnKX1cbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgIG9uU2VhcmNoPXt0aGlzLmhhbmRsZVNlYXJjaC5iaW5kKHRoaXMpfVxuICAgICAgICB2YWx1ZT17dGhpcy5za1ZhbCgpfT5cbiAgICAgICAge3RoaXMuc2tQcm9wc1RyYW5zKCl9XG4gICAgICA8L0NvbXBUYWc+XG4gICAgKTtcbiAgfVxufVxuIl19