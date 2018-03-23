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

var _AntdComp2 = require('../AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

var _SKButton = require('../button/SKButton');

var _SKButton2 = _interopRequireDefault(_SKButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*eslint no-unused-vars: "off"*/

_modal2.default.defaultProps = _skJs.SK.assign({}, {
  bodyStyle: {},
  cancelText: _skJs.Mesgs.get('Cancel'),
  closable: true,
  mask: true,
  maskClosable: true,
  maskStyle: {},
  okText: _skJs.Mesgs.get('Ok'),
  okType: _SKButton2.default.TYPE.Primary,
  width: 520,
  zIndex: 1000
}, _modal2.default.defaultProps, {});

_modal2.default.propTypes = _skJs.SK.assign({}, {
  //https://ant.design/components/modal-cn/#API
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

    _this.compName = 'SKModal';
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
        _extends({}, this.skTransProps2Self(CompTag), {
          onCancel: this.handleCancel,
          visible: this.skVal()
        }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGQvbW9kYWwvU0tNb2RhbC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0UHJvcHMiLCJhc3NpZ24iLCJib2R5U3R5bGUiLCJjYW5jZWxUZXh0IiwiZ2V0IiwiY2xvc2FibGUiLCJtYXNrIiwibWFza0Nsb3NhYmxlIiwibWFza1N0eWxlIiwib2tUZXh0Iiwib2tUeXBlIiwiVFlQRSIsIlByaW1hcnkiLCJ3aWR0aCIsInpJbmRleCIsInByb3BUeXBlcyIsImFmdGVyQ2xvc2UiLCJmdW5jIiwib2JqZWN0Iiwic3RyaW5nIiwiYm9vbCIsImNvbmZpcm1Mb2FkaW5nIiwiZm9vdGVyIiwib25lT2ZUeXBlIiwibm9kZSIsImdldENvbnRhaW5lciIsInN0eWxlIiwidGl0bGUiLCJ2aXNpYmxlIiwibnVtYmVyIiwid3JhcENsYXNzTmFtZSIsIm9uQ2FuY2VsIiwib25PayIsIlNLTW9kYWwiLCJhcmdzIiwiY29tcE5hbWUiLCJoYW5kbGVDYW5jZWwiLCJkb21FdmVudCIsInNrVmFsIiwiQ29tcFRhZyIsInByb3BzIiwiY29tcFRhZyIsInNrVHJhbnNQcm9wczJTZWxmIiwic2tUcmFuc1Byb3BzMkNoaWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7QUFFQSxnQkFBTUEsWUFBTixHQUFxQixTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjO0FBQ2pDQyxhQUFXLEVBRHNCO0FBRWpDQyxjQUFZLFlBQU1DLEdBQU4sQ0FBVSxRQUFWLENBRnFCO0FBR2pDQyxZQUFVLElBSHVCO0FBSWpDQyxRQUFNLElBSjJCO0FBS2pDQyxnQkFBYyxJQUxtQjtBQU1qQ0MsYUFBVyxFQU5zQjtBQU9qQ0MsVUFBUSxZQUFNTCxHQUFOLENBQVUsSUFBVixDQVB5QjtBQVFqQ00sVUFBUSxtQkFBU0MsSUFBVCxDQUFjQyxPQVJXO0FBU2pDQyxTQUFPLEdBVDBCO0FBVWpDQyxVQUFRO0FBVnlCLENBQWQsRUFXbEIsZ0JBQU1kLFlBWFksRUFXRSxFQVhGLENBQXJCOztBQWFBLGdCQUFNZSxTQUFOLEdBQWtCLFNBQUdkLE1BQUgsQ0FBVSxFQUFWLEVBQWM7QUFDOUI7QUFDQWUsY0FBWSxvQkFBVUMsSUFGUTtBQUc5QmYsYUFBVyxvQkFBVWdCLE1BSFM7QUFJOUJmLGNBQVksb0JBQVVnQixNQUpRO0FBSzlCZCxZQUFVLG9CQUFVZSxJQUxVO0FBTTlCQyxrQkFBZ0Isb0JBQVVELElBTkk7QUFPOUJFLFVBQVEsb0JBQVVDLFNBQVYsQ0FBb0IsQ0FDMUIsb0JBQVVKLE1BRGdCLEVBRTFCLG9CQUFVSyxJQUZnQixDQUFwQixDQVBzQjtBQVc5QkMsZ0JBQWMsb0JBQVVSLElBWE07QUFZOUJYLFFBQU0sb0JBQVVjLElBWmM7QUFhOUJiLGdCQUFjLG9CQUFVYSxJQWJNO0FBYzlCWixhQUFXLG9CQUFVVSxNQWRTO0FBZTlCVCxVQUFRLG9CQUFVVSxNQWZZO0FBZ0I5QlQsVUFBUSxvQkFBVVMsTUFoQlk7QUFpQjlCTyxTQUFPLG9CQUFVUixNQWpCYTtBQWtCOUJTLFNBQU8sb0JBQVVKLFNBQVYsQ0FBb0IsQ0FDekIsb0JBQVVKLE1BRGUsRUFFekIsb0JBQVVLLElBRmUsQ0FBcEIsQ0FsQnVCO0FBc0I5QkksV0FBUyxvQkFBVVIsSUF0Qlc7QUF1QjlCUCxTQUFPLG9CQUFVVSxTQUFWLENBQW9CLENBQ3pCLG9CQUFVSixNQURlLEVBRXpCLG9CQUFVVSxNQUZlLENBQXBCLENBdkJ1QjtBQTJCOUJDLGlCQUFlLG9CQUFVWCxNQTNCSztBQTRCOUJMLFVBQVEsb0JBQVVlLE1BNUJZO0FBNkI5QkUsWUFBVSxvQkFBVWQsSUE3QlU7QUE4QjlCZSxRQUFNLG9CQUFVZjtBQTlCYyxDQUFkLEVBK0JmLGdCQUFNRixTQS9CUyxFQStCRSxFQS9CRixDQUFsQjs7SUFpQ3FCa0IsTzs7O0FBTW5CLHFCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSw2SUFDVkEsSUFEVTs7QUFFbkIsVUFBS0MsUUFBTCxHQUFnQixTQUFoQjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsVUFBQ0MsUUFBRCxFQUFjO0FBQ2hDLFlBQUtDLEtBQUwsQ0FBVyxLQUFYO0FBQ0QsS0FGRDtBQUhtQjtBQU1wQjs7Ozs2QkFFUTtBQUFBLFVBQ1VDLE9BRFYsR0FDc0IsS0FBS0MsS0FEM0IsQ0FDQ0MsT0FERDs7O0FBR1AsYUFDRTtBQUFDLGVBQUQ7QUFBQSxxQkFDTSxLQUFLQyxpQkFBTCxDQUF1QkgsT0FBdkIsQ0FETjtBQUVFLG9CQUFVLEtBQUtILFlBRmpCO0FBR0UsbUJBQVMsS0FBS0UsS0FBTDtBQUhYO0FBS0csYUFBS0ssa0JBQUw7QUFMSCxPQURGO0FBU0Q7Ozs7OztBQTFCa0JWLE8sQ0FDWmpDLFksR0FBZSxTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTRCxZQUF2QixFQUFxQyxnQkFBTUEsWUFBM0MsRUFBeUQ7QUFDN0V5QztBQUQ2RSxDQUF6RCxDO0FBREhSLE8sQ0FJWmxCLFMsR0FBWSxTQUFHZCxNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTYyxTQUF2QixFQUFrQyxnQkFBTUEsU0FBeEMsRUFBbUQsRUFBbkQsQztrQkFKQWtCLE8iLCJmaWxlIjoiYW50ZC9tb2RhbC9TS01vZGFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdhbnRkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBTSywgTWVzZ3MgfSBmcm9tICdzay1qcyc7XG5pbXBvcnQgQW50ZENvbXAgZnJvbSAnLi4vQW50ZENvbXAnO1xuaW1wb3J0IFNLQnV0dG9uIGZyb20gJy4uL2J1dHRvbi9TS0J1dHRvbic7XG5cbi8qZXNsaW50IG5vLXVudXNlZC12YXJzOiBcIm9mZlwiKi9cblxuTW9kYWwuZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCB7XG4gIGJvZHlTdHlsZToge30sXG4gIGNhbmNlbFRleHQ6IE1lc2dzLmdldCgnQ2FuY2VsJyksXG4gIGNsb3NhYmxlOiB0cnVlLFxuICBtYXNrOiB0cnVlLFxuICBtYXNrQ2xvc2FibGU6IHRydWUsXG4gIG1hc2tTdHlsZToge30sXG4gIG9rVGV4dDogTWVzZ3MuZ2V0KCdPaycpLFxuICBva1R5cGU6IFNLQnV0dG9uLlRZUEUuUHJpbWFyeSxcbiAgd2lkdGg6IDUyMCxcbiAgekluZGV4OiAxMDAwLFxufSwgTW9kYWwuZGVmYXVsdFByb3BzLCB7fSk7XG5cbk1vZGFsLnByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwge1xuICAvL2h0dHBzOi8vYW50LmRlc2lnbi9jb21wb25lbnRzL21vZGFsLWNuLyNBUElcbiAgYWZ0ZXJDbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGJvZHlTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgY2FuY2VsVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xvc2FibGU6IFByb3BUeXBlcy5ib29sLFxuICBjb25maXJtTG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gIGZvb3RlcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubm9kZSxcbiAgXSksXG4gIGdldENvbnRhaW5lcjogUHJvcFR5cGVzLmZ1bmMsXG4gIG1hc2s6IFByb3BUeXBlcy5ib29sLFxuICBtYXNrQ2xvc2FibGU6IFByb3BUeXBlcy5ib29sLFxuICBtYXNrU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIG9rVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgb2tUeXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgdGl0bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm5vZGUsXG4gIF0pLFxuICB2aXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgd2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgXSksXG4gIHdyYXBDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHpJbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgb25DYW5jZWw6IFByb3BUeXBlcy5mdW5jLFxuICBvbk9rOiBQcm9wVHlwZXMuZnVuYyxcbn0sIE1vZGFsLnByb3BUeXBlcywge30pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS01vZGFsIGV4dGVuZHMgQW50ZENvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5kZWZhdWx0UHJvcHMsIE1vZGFsLmRlZmF1bHRQcm9wcywge1xuICAgIGNvbXBUYWc6IE1vZGFsLFxuICB9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAucHJvcFR5cGVzLCBNb2RhbC5wcm9wVHlwZXMsIHt9KTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5jb21wTmFtZSA9ICdTS01vZGFsJztcbiAgICB0aGlzLmhhbmRsZUNhbmNlbCA9IChkb21FdmVudCkgPT4ge1xuICAgICAgdGhpcy5za1ZhbChmYWxzZSk7XG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNvbXBUYWc6IENvbXBUYWcgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBUYWdcbiAgICAgICAgey4uLnRoaXMuc2tUcmFuc1Byb3BzMlNlbGYoQ29tcFRhZyl9XG4gICAgICAgIG9uQ2FuY2VsPXt0aGlzLmhhbmRsZUNhbmNlbH1cbiAgICAgICAgdmlzaWJsZT17dGhpcy5za1ZhbCgpfVxuICAgICAgPlxuICAgICAgICB7dGhpcy5za1RyYW5zUHJvcHMyQ2hpbGQoKX1cbiAgICAgIDwvQ29tcFRhZz5cbiAgICApO1xuICB9XG59XG4iXX0=