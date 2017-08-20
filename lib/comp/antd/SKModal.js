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

var _Comp2 = require('../../util/Comp');

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

    _this.handleCancel = function (domEvent) {
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
          onCancel: this.handleCancel.bind(this),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9TS01vZGFsLmpzIl0sIm5hbWVzIjpbIlNLTW9kYWwiLCJhcmdzIiwiaGFuZGxlQ2FuY2VsIiwiZG9tRXZlbnQiLCJza1ZhbCIsIkNvbXBUYWciLCJwcm9wcyIsImNvbXBUYWciLCJjb21wVmFsaWRQcm9wcyIsImJpbmQiLCJza1Byb3BzVHJhbnMiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLE87OztBQU1uQixxQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsNklBQ1ZBLElBRFU7O0FBQUEsVUFJckJDLFlBSnFCLEdBSU4sVUFBQ0MsUUFBRCxFQUFjO0FBQzNCLFlBQUtDLEtBQUwsQ0FBVyxLQUFYO0FBQ0QsS0FOb0I7O0FBQUE7QUFFcEI7Ozs7NkJBTVE7QUFBQSxVQUNPQyxPQURQLEdBQ2tCLEtBQUtDLEtBRHZCLENBQ0ZDLE9BREU7OztBQUdQLGFBQ0U7QUFBQyxlQUFEO0FBQUEscUJBQWEsS0FBS0MsY0FBTCxDQUFvQkgsT0FBcEIsQ0FBYjtBQUNFLG9CQUFVLEtBQUtILFlBQUwsQ0FBa0JPLElBQWxCLENBQXVCLElBQXZCLENBRFo7QUFFRSxtQkFBUyxLQUFLTCxLQUFMLEVBRlg7QUFHRyxhQUFLTSxZQUFMO0FBSEgsT0FERjtBQU9EOzs7Ozs7QUF4QmtCVixPLENBQ1pXLFksR0FBZTtBQUNwQko7QUFEb0IsQztBQURIUCxPLENBSVpZLFMsR0FBWSxlQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLGVBQUtELFNBQW5CLEVBQThCLGdCQUFNQSxTQUFwQyxFQUErQyxFQUEvQyxDO2tCQUpBWixPIiwiZmlsZSI6ImNvbXAvYW50ZC9TS01vZGFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNb2RhbH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgU0sgZnJvbSAnc2stanMnO1xuaW1wb3J0IENvbXAgZnJvbSAnLi4vLi4vdXRpbC9Db21wJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tNb2RhbCBleHRlbmRzIENvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbXBUYWc6IE1vZGFsXG4gIH07XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIENvbXAucHJvcFR5cGVzLCBNb2RhbC5wcm9wVHlwZXMsIHt9KTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gIH1cblxuICBoYW5kbGVDYW5jZWwgPSAoZG9tRXZlbnQpID0+IHtcbiAgICB0aGlzLnNrVmFsKGZhbHNlKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtjb21wVGFnOiBDb21wVGFnfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBUYWcgey4uLnRoaXMuY29tcFZhbGlkUHJvcHMoQ29tcFRhZyl9XG4gICAgICAgIG9uQ2FuY2VsPXt0aGlzLmhhbmRsZUNhbmNlbC5iaW5kKHRoaXMpfVxuICAgICAgICB2aXNpYmxlPXt0aGlzLnNrVmFsKCl9PlxuICAgICAgICB7dGhpcy5za1Byb3BzVHJhbnMoKX1cbiAgICAgIDwvQ29tcFRhZz5cbiAgICApO1xuICB9XG59XG4iXX0=