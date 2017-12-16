'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _jdenticon = require('jdenticon');

var _jdenticon2 = _interopRequireDefault(_jdenticon);

var _jsMd = require('js-md5');

var _jsMd2 = _interopRequireDefault(_jsMd);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _Comp2 = require('../../util/Comp');

var _Comp3 = _interopRequireDefault(_Comp2);

var _REACT = require('../../util/REACT');

var _REACT2 = _interopRequireDefault(_REACT);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //<SKJdenticon modelId='user.username' size={32}/>


var SKJdenticon = function (_Comp) {
  _inherits(SKJdenticon, _Comp);

  function SKJdenticon() {
    var _ref;

    _classCallCheck(this, SKJdenticon);

    for (var _len = arguments.length, props = Array(_len), _key = 0; _key < _len; _key++) {
      props[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SKJdenticon.__proto__ || Object.getPrototypeOf(SKJdenticon)).call.apply(_ref, [this].concat(props)));

    _this.compName = 'SKJdenticon';
    return _this;
  }

  _createClass(SKJdenticon, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _get(SKJdenticon.prototype.__proto__ || Object.getPrototypeOf(SKJdenticon.prototype), 'componentDidMount', this).call(this);
      _jdenticon2.default.update(this.refs.jdenticonDomRef, (0, _jsMd2.default)(this.skVal()));
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      _get(SKJdenticon.prototype.__proto__ || Object.getPrototypeOf(SKJdenticon.prototype), 'componentDidUpdate', this).call(this);
      _jdenticon2.default.update(this.refs.jdenticonDomRef, (0, _jsMd2.default)(this.skVal()));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          CompTag = _props.compTag,
          size = _props.size;


      return _react2.default.createElement(CompTag, _extends({}, this.skTransProps2Self(CompTag), { height: size, width: size, ref: 'jdenticonDomRef' }));
    }
  }]);

  return SKJdenticon;
}(_Comp3.default);

SKJdenticon.defaultProps = _skJs.SK.assign({}, _Comp3.default.defaultProps, {
  compTag: _REACT2.default.TAG.canvas

});
SKJdenticon.propTypes = _skJs.SK.assign({}, _Comp3.default.propTypes, {
  size: _propTypes2.default.number
});
exports.default = SKJdenticon;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvc2svU0tKZGVudGljb24uanMiXSwibmFtZXMiOlsiU0tKZGVudGljb24iLCJwcm9wcyIsImNvbXBOYW1lIiwidXBkYXRlIiwicmVmcyIsImpkZW50aWNvbkRvbVJlZiIsInNrVmFsIiwiQ29tcFRhZyIsImNvbXBUYWciLCJzaXplIiwic2tUcmFuc1Byb3BzMlNlbGYiLCJkZWZhdWx0UHJvcHMiLCJhc3NpZ24iLCJUQUciLCJjYW52YXMiLCJwcm9wVHlwZXMiLCJudW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OzsrZUFQQTs7O0lBU3FCQSxXOzs7QUFVbkIseUJBQXNCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQVBDLEtBQU87QUFBUEEsV0FBTztBQUFBOztBQUFBLHFKQUNYQSxLQURXOztBQUVwQixVQUFLQyxRQUFMLEdBQWdCLGFBQWhCO0FBRm9CO0FBR3JCOzs7O3dDQUVtQjtBQUNsQjtBQUNBLDBCQUFVQyxNQUFWLENBQWlCLEtBQUtDLElBQUwsQ0FBVUMsZUFBM0IsRUFBNEMsb0JBQUksS0FBS0MsS0FBTCxFQUFKLENBQTVDO0FBQ0Q7Ozt5Q0FFb0I7QUFDbkI7QUFDQSwwQkFBVUgsTUFBVixDQUFpQixLQUFLQyxJQUFMLENBQVVDLGVBQTNCLEVBQTRDLG9CQUFJLEtBQUtDLEtBQUwsRUFBSixDQUE1QztBQUNEOzs7NkJBRVE7QUFBQSxtQkFDd0IsS0FBS0wsS0FEN0I7QUFBQSxVQUNPTSxPQURQLFVBQ0ZDLE9BREU7QUFBQSxVQUNnQkMsSUFEaEIsVUFDZ0JBLElBRGhCOzs7QUFHUCxhQUNFLDhCQUFDLE9BQUQsZUFBYSxLQUFLQyxpQkFBTCxDQUF1QkgsT0FBdkIsQ0FBYixJQUE4QyxRQUFRRSxJQUF0RCxFQUE0RCxPQUFPQSxJQUFuRSxFQUF5RSxLQUFJLGlCQUE3RSxJQURGO0FBR0Q7Ozs7OztBQS9Ca0JULFcsQ0FDWlcsWSxHQUFlLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsZUFBS0QsWUFBbkIsRUFBaUM7QUFDckRILFdBQVMsZ0JBQU1LLEdBQU4sQ0FBVUM7O0FBRGtDLENBQWpDLEM7QUFESGQsVyxDQUtaZSxTLEdBQVksU0FBR0gsTUFBSCxDQUFVLEVBQVYsRUFBYyxlQUFLRyxTQUFuQixFQUE4QjtBQUMvQ04sUUFBTSxvQkFBVU87QUFEK0IsQ0FBOUIsQztrQkFMQWhCLFciLCJmaWxlIjoiY29tcC9zay9TS0pkZW50aWNvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vPFNLSmRlbnRpY29uIG1vZGVsSWQ9J3VzZXIudXNlcm5hbWUnIHNpemU9ezMyfS8+XG5pbXBvcnQgamRlbnRpY29uIGZyb20gJ2pkZW50aWNvbic7XG5pbXBvcnQgbWQ1IGZyb20gJ2pzLW1kNSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U0t9IGZyb20gJ3NrLWpzJztcbmltcG9ydCBDb21wIGZyb20gJy4uLy4uL3V0aWwvQ29tcCc7XG5pbXBvcnQgUkVBQ1QgZnJvbSAnLi4vLi4vdXRpbC9SRUFDVCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNLSmRlbnRpY29uIGV4dGVuZHMgQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIENvbXAuZGVmYXVsdFByb3BzLCB7XG4gICAgY29tcFRhZzogUkVBQ1QuVEFHLmNhbnZhc1xuXG4gIH0pO1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBDb21wLnByb3BUeXBlcywge1xuICAgIHNpemU6IFByb3BUeXBlcy5udW1iZXJcbiAgfSk7XG5cblxuICBjb25zdHJ1Y3RvciguLi5wcm9wcykge1xuICAgIHN1cGVyKC4uLnByb3BzKTtcbiAgICB0aGlzLmNvbXBOYW1lID0gJ1NLSmRlbnRpY29uJztcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHN1cGVyLmNvbXBvbmVudERpZE1vdW50KCk7XG4gICAgamRlbnRpY29uLnVwZGF0ZSh0aGlzLnJlZnMuamRlbnRpY29uRG9tUmVmLCBtZDUodGhpcy5za1ZhbCgpKSk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgc3VwZXIuY29tcG9uZW50RGlkVXBkYXRlKCk7XG4gICAgamRlbnRpY29uLnVwZGF0ZSh0aGlzLnJlZnMuamRlbnRpY29uRG9tUmVmLCBtZDUodGhpcy5za1ZhbCgpKSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtjb21wVGFnOiBDb21wVGFnLCBzaXplfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBUYWcgey4uLnRoaXMuc2tUcmFuc1Byb3BzMlNlbGYoQ29tcFRhZyl9IGhlaWdodD17c2l6ZX0gd2lkdGg9e3NpemV9IHJlZj0namRlbnRpY29uRG9tUmVmJy8+XG4gICAgKTtcbiAgfVxufVxuIl19