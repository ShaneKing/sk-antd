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

var _Comp2 = require('../../utils/Comp');

var _Comp3 = _interopRequireDefault(_Comp2);

var _REACT = require('../../utils/REACT');

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
SKJdenticon.propTypes = SK.assign({}, _Comp3.default.SK_PROPS_TYPE, {
  size: _react2.default.PropTypes.number
});
exports.default = SKJdenticon;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL3NrL1NLSmRlbnRpY29uLmpzIl0sIm5hbWVzIjpbIlNLSmRlbnRpY29uIiwicHJvcHMiLCJ1cGRhdGUiLCJyZWZzIiwiamRlbnRpY29uRG9tUmVmIiwic2tWYWwiLCJDb21wVGFnIiwiY29tcFRhZyIsInNpemUiLCJjb21wVmFsaWRQcm9wcyIsImRlZmF1bHRQcm9wcyIsIlRBRyIsImNhbnZhcyIsInByb3BUeXBlcyIsIlNLIiwiYXNzaWduIiwiU0tfUFJPUFNfVFlQRSIsIlByb3BUeXBlcyIsIm51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OzsrZUFMQTs7O0lBT3FCQSxXOzs7QUFTbkIseUJBQXNCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQVBDLEtBQU87QUFBUEEsV0FBTztBQUFBOztBQUFBLGdKQUNYQSxLQURXO0FBRXJCOzs7O3dDQUVtQjtBQUNsQjtBQUNBLDBCQUFVQyxNQUFWLENBQWlCLEtBQUtDLElBQUwsQ0FBVUMsZUFBM0IsRUFBNEMsb0JBQUksS0FBS0MsS0FBTCxFQUFKLENBQTVDO0FBQ0Q7Ozt5Q0FFb0I7QUFDbkI7QUFDQSwwQkFBVUgsTUFBVixDQUFpQixLQUFLQyxJQUFMLENBQVVDLGVBQTNCLEVBQTRDLG9CQUFJLEtBQUtDLEtBQUwsRUFBSixDQUE1QztBQUNEOzs7NkJBRVE7QUFBQSxtQkFDd0IsS0FBS0osS0FEN0I7QUFBQSxVQUNPSyxPQURQLFVBQ0ZDLE9BREU7QUFBQSxVQUNnQkMsSUFEaEIsVUFDZ0JBLElBRGhCOzs7QUFHUCxhQUNFLDhCQUFDLE9BQUQsZUFBYSxLQUFLQyxjQUFMLENBQW9CSCxPQUFwQixDQUFiLElBQTJDLFFBQVFFLElBQW5ELEVBQXlELE9BQU9BLElBQWhFLEVBQXNFLEtBQUksaUJBQTFFLElBREY7QUFHRDs7Ozs7O0FBN0JrQlIsVyxDQUNaVSxZLEdBQWU7QUFDcEJILFdBQVMsZ0JBQU1JLEdBQU4sQ0FBVUM7O0FBREMsQztBQURIWixXLENBS1phLFMsR0FBWUMsR0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxlQUFLQyxhQUFuQixFQUFrQztBQUNuRFIsUUFBTSxnQkFBTVMsU0FBTixDQUFnQkM7QUFENkIsQ0FBbEMsQztrQkFMQWxCLFciLCJmaWxlIjoiY29tcHMvc2svU0tKZGVudGljb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLzxTS0pkZW50aWNvbiBtb2RlbElkPSd1c2VyLnVzZXJuYW1lJyBzaXplPXszMn0vPlxuaW1wb3J0IGpkZW50aWNvbiBmcm9tICdqZGVudGljb24nO1xuaW1wb3J0IG1kNSBmcm9tICdqcy1tZDUnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb21wIGZyb20gJy4uLy4uL3V0aWxzL0NvbXAnO1xuaW1wb3J0IFJFQUNUIGZyb20gJy4uLy4uL3V0aWxzL1JFQUNUJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tKZGVudGljb24gZXh0ZW5kcyBDb21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb21wVGFnOiBSRUFDVC5UQUcuY2FudmFzXG5cbiAgfTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQ29tcC5TS19QUk9QU19UWVBFLCB7XG4gICAgc2l6ZTogUmVhY3QuUHJvcFR5cGVzLm51bWJlclxuICB9KTtcblxuICBjb25zdHJ1Y3RvciguLi5wcm9wcykge1xuICAgIHN1cGVyKC4uLnByb3BzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHN1cGVyLmNvbXBvbmVudERpZE1vdW50KCk7XG4gICAgamRlbnRpY29uLnVwZGF0ZSh0aGlzLnJlZnMuamRlbnRpY29uRG9tUmVmLCBtZDUodGhpcy5za1ZhbCgpKSk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgc3VwZXIuY29tcG9uZW50RGlkVXBkYXRlKCk7XG4gICAgamRlbnRpY29uLnVwZGF0ZSh0aGlzLnJlZnMuamRlbnRpY29uRG9tUmVmLCBtZDUodGhpcy5za1ZhbCgpKSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtjb21wVGFnOiBDb21wVGFnLCBzaXplfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBUYWcgey4uLnRoaXMuY29tcFZhbGlkUHJvcHMoQ29tcFRhZyl9IGhlaWdodD17c2l6ZX0gd2lkdGg9e3NpemV9IHJlZj0namRlbnRpY29uRG9tUmVmJy8+XG4gICAgKTtcbiAgfVxufVxuIl19