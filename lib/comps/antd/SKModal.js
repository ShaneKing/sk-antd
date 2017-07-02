'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style2 = require('antd/lib/modal/style');

var _modal = require('antd/lib/modal');

var _modal2 = _interopRequireDefault(_modal);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _skJs = require('sk-js');

var _skJs2 = _interopRequireDefault(_skJs);

var _Comp2 = require('../../utils/Comp');

var _Comp3 = _interopRequireDefault(_Comp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SKModal = function (_Comp) {
  _inherits(SKModal, _Comp);

  function SKModal() {
    var _ref;

    _classCallCheck(this, SKModal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SKModal.__proto__ || Object.getPrototypeOf(SKModal)).call.apply(_ref, [this].concat(args)));

    _this.handleCancel = function () {
      _this.skVal(false);
    };

    return _this;
  }

  _createClass(SKModal, [{
    key: 'render',
    value: function render() {
      var CompTag = this.props.compTag;


      return React.createElement(
        CompTag,
        _extends({}, this.compValidProps(CompTag), {
          visible: this.skVal() }),
        this.skPropsTrans()
      );
    }
  }]);

  return SKModal;
}(_Comp3.default);

SKModal.defaultProps = {
  compTag: _modal2.default
};
SKModal.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _modal2.default.propTypes, {});
exports.default = SKModal;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FudGQvU0tNb2RhbC5qcyJdLCJuYW1lcyI6WyJTS01vZGFsIiwiYXJncyIsImhhbmRsZUNhbmNlbCIsInNrVmFsIiwiQ29tcFRhZyIsInByb3BzIiwiY29tcFRhZyIsImNvbXBWYWxpZFByb3BzIiwic2tQcm9wc1RyYW5zIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxPOzs7QUFNbkIscUJBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLDZJQUNWQSxJQURVOztBQUFBLFVBSXJCQyxZQUpxQixHQUlOLFlBQU07QUFDbkIsWUFBS0MsS0FBTCxDQUFXLEtBQVg7QUFDRCxLQU5vQjs7QUFBQTtBQUVwQjs7Ozs2QkFNUTtBQUFBLFVBQ09DLE9BRFAsR0FDa0IsS0FBS0MsS0FEdkIsQ0FDRkMsT0FERTs7O0FBR1AsYUFDRTtBQUFDLGVBQUQ7QUFBQSxxQkFBYSxLQUFLQyxjQUFMLENBQW9CSCxPQUFwQixDQUFiO0FBQ0UsbUJBQVMsS0FBS0QsS0FBTCxFQURYO0FBRUcsYUFBS0ssWUFBTDtBQUZILE9BREY7QUFNRDs7Ozs7O0FBdkJrQlIsTyxDQUNaUyxZLEdBQWU7QUFDcEJIO0FBRG9CLEM7QUFESE4sTyxDQUlaVSxTLEdBQVksZUFBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxlQUFLRCxTQUFuQixFQUE4QixnQkFBTUEsU0FBcEMsRUFBK0MsRUFBL0MsQztrQkFKQVYsTyIsImZpbGUiOiJjb21wcy9hbnRkL1NLTW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01vZGFsfSBmcm9tICdhbnRkJztcbmltcG9ydCBTSyBmcm9tICdzay1qcyc7XG5pbXBvcnQgQ29tcCBmcm9tICcuLi8uLi91dGlscy9Db21wJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tNb2RhbCBleHRlbmRzIENvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbXBUYWc6IE1vZGFsXG4gIH07XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIENvbXAucHJvcFR5cGVzLCBNb2RhbC5wcm9wVHlwZXMsIHt9KTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gIH1cblxuICBoYW5kbGVDYW5jZWwgPSAoKSA9PiB7XG4gICAgdGhpcy5za1ZhbChmYWxzZSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7Y29tcFRhZzogQ29tcFRhZ30gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wVGFnIHsuLi50aGlzLmNvbXBWYWxpZFByb3BzKENvbXBUYWcpfVxuICAgICAgICB2aXNpYmxlPXt0aGlzLnNrVmFsKCl9PlxuICAgICAgICB7dGhpcy5za1Byb3BzVHJhbnMoKX1cbiAgICAgIDwvQ29tcFRhZz5cbiAgICApO1xuICB9XG59XG4iXX0=