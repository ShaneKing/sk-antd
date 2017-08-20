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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _skJs2 = _interopRequireDefault(_skJs);

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

    return _possibleConstructorReturn(this, (_ref = SKJdenticon.__proto__ || Object.getPrototypeOf(SKJdenticon)).call.apply(_ref, [this].concat(props)));
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


      return _react2.default.createElement(CompTag, _extends({}, this.compValidProps(CompTag), { height: size, width: size, ref: 'jdenticonDomRef' }));
    }
  }]);

  return SKJdenticon;
}(_Comp3.default);

SKJdenticon.defaultProps = {
  compTag: _REACT2.default.TAG.canvas

};
SKJdenticon.propTypes = _skJs2.default.assign({}, _Comp3.default.SK_PROPS_TYPE, {
  size: _react2.default.PropTypes.number
});
exports.default = SKJdenticon;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvc2svU0tKZGVudGljb24uanMiXSwibmFtZXMiOlsiU0tKZGVudGljb24iLCJwcm9wcyIsInVwZGF0ZSIsInJlZnMiLCJqZGVudGljb25Eb21SZWYiLCJza1ZhbCIsIkNvbXBUYWciLCJjb21wVGFnIiwic2l6ZSIsImNvbXBWYWxpZFByb3BzIiwiZGVmYXVsdFByb3BzIiwiVEFHIiwiY2FudmFzIiwicHJvcFR5cGVzIiwiYXNzaWduIiwiU0tfUFJPUFNfVFlQRSIsIlByb3BUeXBlcyIsIm51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7OytlQU5BOzs7SUFRcUJBLFc7OztBQVNuQix5QkFBc0I7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBUEMsS0FBTztBQUFQQSxXQUFPO0FBQUE7O0FBQUEsZ0pBQ1hBLEtBRFc7QUFFckI7Ozs7d0NBRW1CO0FBQ2xCO0FBQ0EsMEJBQVVDLE1BQVYsQ0FBaUIsS0FBS0MsSUFBTCxDQUFVQyxlQUEzQixFQUE0QyxvQkFBSSxLQUFLQyxLQUFMLEVBQUosQ0FBNUM7QUFDRDs7O3lDQUVvQjtBQUNuQjtBQUNBLDBCQUFVSCxNQUFWLENBQWlCLEtBQUtDLElBQUwsQ0FBVUMsZUFBM0IsRUFBNEMsb0JBQUksS0FBS0MsS0FBTCxFQUFKLENBQTVDO0FBQ0Q7Ozs2QkFFUTtBQUFBLG1CQUN3QixLQUFLSixLQUQ3QjtBQUFBLFVBQ09LLE9BRFAsVUFDRkMsT0FERTtBQUFBLFVBQ2dCQyxJQURoQixVQUNnQkEsSUFEaEI7OztBQUdQLGFBQ0UsOEJBQUMsT0FBRCxlQUFhLEtBQUtDLGNBQUwsQ0FBb0JILE9BQXBCLENBQWIsSUFBMkMsUUFBUUUsSUFBbkQsRUFBeUQsT0FBT0EsSUFBaEUsRUFBc0UsS0FBSSxpQkFBMUUsSUFERjtBQUdEOzs7Ozs7QUE3QmtCUixXLENBQ1pVLFksR0FBZTtBQUNwQkgsV0FBUyxnQkFBTUksR0FBTixDQUFVQzs7QUFEQyxDO0FBREhaLFcsQ0FLWmEsUyxHQUFZLGVBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsZUFBS0MsYUFBbkIsRUFBa0M7QUFDbkRQLFFBQU0sZ0JBQU1RLFNBQU4sQ0FBZ0JDO0FBRDZCLENBQWxDLEM7a0JBTEFqQixXIiwiZmlsZSI6ImNvbXAvc2svU0tKZGVudGljb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLzxTS0pkZW50aWNvbiBtb2RlbElkPSd1c2VyLnVzZXJuYW1lJyBzaXplPXszMn0vPlxuaW1wb3J0IGpkZW50aWNvbiBmcm9tICdqZGVudGljb24nO1xuaW1wb3J0IG1kNSBmcm9tICdqcy1tZDUnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTSyBmcm9tICdzay1qcyc7XG5pbXBvcnQgQ29tcCBmcm9tICcuLi8uLi91dGlsL0NvbXAnO1xuaW1wb3J0IFJFQUNUIGZyb20gJy4uLy4uL3V0aWwvUkVBQ1QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS0pkZW50aWNvbiBleHRlbmRzIENvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbXBUYWc6IFJFQUNULlRBRy5jYW52YXNcblxuICB9O1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBDb21wLlNLX1BST1BTX1RZUEUsIHtcbiAgICBzaXplOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyXG4gIH0pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLnByb3BzKSB7XG4gICAgc3VwZXIoLi4ucHJvcHMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgc3VwZXIuY29tcG9uZW50RGlkTW91bnQoKTtcbiAgICBqZGVudGljb24udXBkYXRlKHRoaXMucmVmcy5qZGVudGljb25Eb21SZWYsIG1kNSh0aGlzLnNrVmFsKCkpKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICBzdXBlci5jb21wb25lbnREaWRVcGRhdGUoKTtcbiAgICBqZGVudGljb24udXBkYXRlKHRoaXMucmVmcy5qZGVudGljb25Eb21SZWYsIG1kNSh0aGlzLnNrVmFsKCkpKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge2NvbXBUYWc6IENvbXBUYWcsIHNpemV9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcFRhZyB7Li4udGhpcy5jb21wVmFsaWRQcm9wcyhDb21wVGFnKX0gaGVpZ2h0PXtzaXplfSB3aWR0aD17c2l6ZX0gcmVmPSdqZGVudGljb25Eb21SZWYnLz5cbiAgICApO1xuICB9XG59XG4iXX0=