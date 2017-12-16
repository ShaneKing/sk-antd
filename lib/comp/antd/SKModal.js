'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _modal = require('antd/lib/modal');

var _modal2 = _interopRequireDefault(_modal);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/modal/style');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _skJs = require('sk-js');

var _skL10n = require('sk-l10n');

var _AntdComp2 = require('./AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

var _SKButton = require('./SKButton');

var _SKButton2 = _interopRequireDefault(_SKButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_modal2.default.defaultProps = _skJs.SK.assign({}, {
  bodyStyle: {},
  cancelText: _skL10n.I18N.get('Cancel'),
  closable: true,
  mask: true,
  maskClosable: true,
  maskStyle: {},
  okText: _skL10n.I18N.get('Ok'),
  okType: _SKButton2.default.TYPE.Primary,
  width: 520,
  zIndex: 1000
}, _modal2.default.defaultProps, {});

_modal2.default.propTypes = _skJs.SK.assign({}, {
  afterClose: _propTypes2.default.func,
  bodyStyle: _propTypes2.default.object,
  cancelText: _propTypes2.default.string,
  closable: _propTypes2.default.bool,
  confirmLoading: _propTypes2.default.bool,
  footer: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  getContainer: _propTypes2.default.func,
  mask: _propTypes2.default.bool,
  maskClosable: _propTypes2.default.bool,
  maskStyle: _propTypes2.default.object,
  okText: _propTypes2.default.string,
  okType: _propTypes2.default.string,
  style: _propTypes2.default.object,
  title: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  visible: _propTypes2.default.bool,
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  wrapClassName: _propTypes2.default.string,
  zIndex: _propTypes2.default.number,
  onCancel: _propTypes2.default.func,
  onOk: _propTypes2.default.func
}, _modal2.default.propTypes, {});

var SKModal = function (_AntdComp) {
  _inherits(SKModal, _AntdComp);

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

    _this.compName = 'SKModal';
    return _this;
  }

  _createClass(SKModal, [{
    key: 'render',
    value: function render() {
      var CompTag = this.props.compTag;


      return React.createElement(
        CompTag,
        _extends({}, this.skTransProps2Self(CompTag), {
          onCancel: this.handleCancel.bind(this),
          visible: this.skVal() }),
        this.skTransProps2Child()
      );
    }
  }]);

  return SKModal;
}(_AntdComp3.default);

SKModal.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, _modal2.default.defaultProps, {
  compTag: _modal2.default
});
SKModal.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _modal2.default.propTypes, {});
exports.default = SKModal;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9TS01vZGFsLmpzIl0sIm5hbWVzIjpbImRlZmF1bHRQcm9wcyIsImFzc2lnbiIsImJvZHlTdHlsZSIsImNhbmNlbFRleHQiLCJnZXQiLCJjbG9zYWJsZSIsIm1hc2siLCJtYXNrQ2xvc2FibGUiLCJtYXNrU3R5bGUiLCJva1RleHQiLCJva1R5cGUiLCJUWVBFIiwiUHJpbWFyeSIsIndpZHRoIiwiekluZGV4IiwicHJvcFR5cGVzIiwiYWZ0ZXJDbG9zZSIsImZ1bmMiLCJvYmplY3QiLCJzdHJpbmciLCJib29sIiwiY29uZmlybUxvYWRpbmciLCJmb290ZXIiLCJvbmVPZlR5cGUiLCJub2RlIiwiZ2V0Q29udGFpbmVyIiwic3R5bGUiLCJ0aXRsZSIsInZpc2libGUiLCJudW1iZXIiLCJ3cmFwQ2xhc3NOYW1lIiwib25DYW5jZWwiLCJvbk9rIiwiU0tNb2RhbCIsImFyZ3MiLCJoYW5kbGVDYW5jZWwiLCJkb21FdmVudCIsInNrVmFsIiwiY29tcE5hbWUiLCJDb21wVGFnIiwicHJvcHMiLCJjb21wVGFnIiwic2tUcmFuc1Byb3BzMlNlbGYiLCJiaW5kIiwic2tUcmFuc1Byb3BzMkNoaWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxnQkFBTUEsWUFBTixHQUFxQixTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjO0FBQ2pDQyxhQUFXLEVBRHNCO0FBRWpDQyxjQUFZLGFBQUtDLEdBQUwsQ0FBUyxRQUFULENBRnFCO0FBR2pDQyxZQUFVLElBSHVCO0FBSWpDQyxRQUFNLElBSjJCO0FBS2pDQyxnQkFBYyxJQUxtQjtBQU1qQ0MsYUFBVyxFQU5zQjtBQU9qQ0MsVUFBUSxhQUFLTCxHQUFMLENBQVMsSUFBVCxDQVB5QjtBQVFqQ00sVUFBUSxtQkFBU0MsSUFBVCxDQUFjQyxPQVJXO0FBU2pDQyxTQUFPLEdBVDBCO0FBVWpDQyxVQUFRO0FBVnlCLENBQWQsRUFXbEIsZ0JBQU1kLFlBWFksRUFXRSxFQVhGLENBQXJCOztBQWFBLGdCQUFNZSxTQUFOLEdBQWtCLFNBQUdkLE1BQUgsQ0FBVSxFQUFWLEVBQWM7QUFDOUJlLGNBQVksb0JBQVVDLElBRFE7QUFFOUJmLGFBQVcsb0JBQVVnQixNQUZTO0FBRzlCZixjQUFZLG9CQUFVZ0IsTUFIUTtBQUk5QmQsWUFBVSxvQkFBVWUsSUFKVTtBQUs5QkMsa0JBQWdCLG9CQUFVRCxJQUxJO0FBTTlCRSxVQUFRLG9CQUFVQyxTQUFWLENBQW9CLENBQzFCLG9CQUFVSixNQURnQixFQUUxQixvQkFBVUssSUFGZ0IsQ0FBcEIsQ0FOc0I7QUFVOUJDLGdCQUFjLG9CQUFVUixJQVZNO0FBVzlCWCxRQUFNLG9CQUFVYyxJQVhjO0FBWTlCYixnQkFBYyxvQkFBVWEsSUFaTTtBQWE5QlosYUFBVyxvQkFBVVUsTUFiUztBQWM5QlQsVUFBUSxvQkFBVVUsTUFkWTtBQWU5QlQsVUFBUSxvQkFBVVMsTUFmWTtBQWdCOUJPLFNBQU8sb0JBQVVSLE1BaEJhO0FBaUI5QlMsU0FBTyxvQkFBVUosU0FBVixDQUFvQixDQUN6QixvQkFBVUosTUFEZSxFQUV6QixvQkFBVUssSUFGZSxDQUFwQixDQWpCdUI7QUFxQjlCSSxXQUFTLG9CQUFVUixJQXJCVztBQXNCOUJQLFNBQU8sb0JBQVVVLFNBQVYsQ0FBb0IsQ0FDekIsb0JBQVVKLE1BRGUsRUFFekIsb0JBQVVVLE1BRmUsQ0FBcEIsQ0F0QnVCO0FBMEI5QkMsaUJBQWUsb0JBQVVYLE1BMUJLO0FBMkI5QkwsVUFBUSxvQkFBVWUsTUEzQlk7QUE0QjlCRSxZQUFVLG9CQUFVZCxJQTVCVTtBQTZCOUJlLFFBQU0sb0JBQVVmO0FBN0JjLENBQWQsRUE4QmYsZ0JBQU1GLFNBOUJTLEVBOEJFLEVBOUJGLENBQWxCOztJQWdDcUJrQixPOzs7QUFNbkIscUJBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLDZJQUNWQSxJQURVOztBQUFBLFVBS3JCQyxZQUxxQixHQUtOLFVBQUNDLFFBQUQsRUFBYztBQUMzQixZQUFLQyxLQUFMLENBQVcsS0FBWDtBQUNELEtBUG9COztBQUVuQixVQUFLQyxRQUFMLEdBQWdCLFNBQWhCO0FBRm1CO0FBR3BCOzs7OzZCQU1RO0FBQUEsVUFDT0MsT0FEUCxHQUNrQixLQUFLQyxLQUR2QixDQUNGQyxPQURFOzs7QUFHUCxhQUNFO0FBQUMsZUFBRDtBQUFBLHFCQUFhLEtBQUtDLGlCQUFMLENBQXVCSCxPQUF2QixDQUFiO0FBQ1Msb0JBQVUsS0FBS0osWUFBTCxDQUFrQlEsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FEbkI7QUFFUyxtQkFBUyxLQUFLTixLQUFMLEVBRmxCO0FBR0csYUFBS08sa0JBQUw7QUFISCxPQURGO0FBT0Q7Ozs7OztBQXpCa0JYLE8sQ0FDWmpDLFksR0FBZSxTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTRCxZQUF2QixFQUFxQyxnQkFBTUEsWUFBM0MsRUFBeUQ7QUFDN0V5QztBQUQ2RSxDQUF6RCxDO0FBREhSLE8sQ0FJWmxCLFMsR0FBWSxTQUFHZCxNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTYyxTQUF2QixFQUFrQyxnQkFBTUEsU0FBeEMsRUFBbUQsRUFBbkQsQztrQkFKQWtCLE8iLCJmaWxlIjoiY29tcC9hbnRkL1NLTW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01vZGFsfSBmcm9tICdhbnRkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge1NLfSBmcm9tICdzay1qcyc7XG5pbXBvcnQge0kxOE59IGZyb20gJ3NrLWwxMG4nO1xuaW1wb3J0IEFudGRDb21wIGZyb20gJy4vQW50ZENvbXAnO1xuaW1wb3J0IFNLQnV0dG9uIGZyb20gJy4vU0tCdXR0b24nO1xuXG5Nb2RhbC5kZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIHtcbiAgYm9keVN0eWxlOiB7fSxcbiAgY2FuY2VsVGV4dDogSTE4Ti5nZXQoJ0NhbmNlbCcpLFxuICBjbG9zYWJsZTogdHJ1ZSxcbiAgbWFzazogdHJ1ZSxcbiAgbWFza0Nsb3NhYmxlOiB0cnVlLFxuICBtYXNrU3R5bGU6IHt9LFxuICBva1RleHQ6IEkxOE4uZ2V0KCdPaycpLFxuICBva1R5cGU6IFNLQnV0dG9uLlRZUEUuUHJpbWFyeSxcbiAgd2lkdGg6IDUyMCxcbiAgekluZGV4OiAxMDAwXG59LCBNb2RhbC5kZWZhdWx0UHJvcHMsIHt9KTtcblxuTW9kYWwucHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCB7XG4gIGFmdGVyQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuICBib2R5U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIGNhbmNlbFRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsb3NhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgY29uZmlybUxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuICBmb290ZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm5vZGVcbiAgXSksXG4gIGdldENvbnRhaW5lcjogUHJvcFR5cGVzLmZ1bmMsXG4gIG1hc2s6IFByb3BUeXBlcy5ib29sLFxuICBtYXNrQ2xvc2FibGU6IFByb3BUeXBlcy5ib29sLFxuICBtYXNrU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIG9rVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgb2tUeXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgdGl0bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm5vZGVcbiAgXSksXG4gIHZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICB3aWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyXG4gIF0pLFxuICB3cmFwQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB6SW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gIG9uQ2FuY2VsOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25PazogUHJvcFR5cGVzLmZ1bmNcbn0sIE1vZGFsLnByb3BUeXBlcywge30pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS01vZGFsIGV4dGVuZHMgQW50ZENvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5kZWZhdWx0UHJvcHMsIE1vZGFsLmRlZmF1bHRQcm9wcywge1xuICAgIGNvbXBUYWc6IE1vZGFsXG4gIH0pO1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5wcm9wVHlwZXMsIE1vZGFsLnByb3BUeXBlcywge30pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLmNvbXBOYW1lID0gJ1NLTW9kYWwnO1xuICB9XG5cbiAgaGFuZGxlQ2FuY2VsID0gKGRvbUV2ZW50KSA9PiB7XG4gICAgdGhpcy5za1ZhbChmYWxzZSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7Y29tcFRhZzogQ29tcFRhZ30gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wVGFnIHsuLi50aGlzLnNrVHJhbnNQcm9wczJTZWxmKENvbXBUYWcpfVxuICAgICAgICAgICAgICAgb25DYW5jZWw9e3RoaXMuaGFuZGxlQ2FuY2VsLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICB2aXNpYmxlPXt0aGlzLnNrVmFsKCl9PlxuICAgICAgICB7dGhpcy5za1RyYW5zUHJvcHMyQ2hpbGQoKX1cbiAgICAgIDwvQ29tcFRhZz5cbiAgICApO1xuICB9XG59XG4iXX0=