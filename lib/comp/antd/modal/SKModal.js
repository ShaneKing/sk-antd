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

var _AntdComp2 = require('../AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

var _SKButton = require('../button/SKButton');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9tb2RhbC9TS01vZGFsLmpzIl0sIm5hbWVzIjpbImRlZmF1bHRQcm9wcyIsImFzc2lnbiIsImJvZHlTdHlsZSIsImNhbmNlbFRleHQiLCJnZXQiLCJjbG9zYWJsZSIsIm1hc2siLCJtYXNrQ2xvc2FibGUiLCJtYXNrU3R5bGUiLCJva1RleHQiLCJva1R5cGUiLCJUWVBFIiwiUHJpbWFyeSIsIndpZHRoIiwiekluZGV4IiwicHJvcFR5cGVzIiwiYWZ0ZXJDbG9zZSIsImZ1bmMiLCJvYmplY3QiLCJzdHJpbmciLCJib29sIiwiY29uZmlybUxvYWRpbmciLCJmb290ZXIiLCJvbmVPZlR5cGUiLCJub2RlIiwiZ2V0Q29udGFpbmVyIiwic3R5bGUiLCJ0aXRsZSIsInZpc2libGUiLCJudW1iZXIiLCJ3cmFwQ2xhc3NOYW1lIiwib25DYW5jZWwiLCJvbk9rIiwiU0tNb2RhbCIsImFyZ3MiLCJjb21wTmFtZSIsImhhbmRsZUNhbmNlbCIsImRvbUV2ZW50Iiwic2tWYWwiLCJDb21wVGFnIiwicHJvcHMiLCJjb21wVGFnIiwic2tUcmFuc1Byb3BzMlNlbGYiLCJza1RyYW5zUHJvcHMyQ2hpbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLGdCQUFNQSxZQUFOLEdBQXFCLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWM7QUFDakNDLGFBQVcsRUFEc0I7QUFFakNDLGNBQVksYUFBS0MsR0FBTCxDQUFTLFFBQVQsQ0FGcUI7QUFHakNDLFlBQVUsSUFIdUI7QUFJakNDLFFBQU0sSUFKMkI7QUFLakNDLGdCQUFjLElBTG1CO0FBTWpDQyxhQUFXLEVBTnNCO0FBT2pDQyxVQUFRLGFBQUtMLEdBQUwsQ0FBUyxJQUFULENBUHlCO0FBUWpDTSxVQUFRLG1CQUFTQyxJQUFULENBQWNDLE9BUlc7QUFTakNDLFNBQU8sR0FUMEI7QUFVakNDLFVBQVE7QUFWeUIsQ0FBZCxFQVdsQixnQkFBTWQsWUFYWSxFQVdFLEVBWEYsQ0FBckI7O0FBYUEsZ0JBQU1lLFNBQU4sR0FBa0IsU0FBR2QsTUFBSCxDQUFVLEVBQVYsRUFBYztBQUM5QjtBQUNBZSxjQUFZLG9CQUFVQyxJQUZRO0FBRzlCZixhQUFXLG9CQUFVZ0IsTUFIUztBQUk5QmYsY0FBWSxvQkFBVWdCLE1BSlE7QUFLOUJkLFlBQVUsb0JBQVVlLElBTFU7QUFNOUJDLGtCQUFnQixvQkFBVUQsSUFOSTtBQU85QkUsVUFBUSxvQkFBVUMsU0FBVixDQUFvQixDQUMxQixvQkFBVUosTUFEZ0IsRUFFMUIsb0JBQVVLLElBRmdCLENBQXBCLENBUHNCO0FBVzlCQyxnQkFBYyxvQkFBVVIsSUFYTTtBQVk5QlgsUUFBTSxvQkFBVWMsSUFaYztBQWE5QmIsZ0JBQWMsb0JBQVVhLElBYk07QUFjOUJaLGFBQVcsb0JBQVVVLE1BZFM7QUFlOUJULFVBQVEsb0JBQVVVLE1BZlk7QUFnQjlCVCxVQUFRLG9CQUFVUyxNQWhCWTtBQWlCOUJPLFNBQU8sb0JBQVVSLE1BakJhO0FBa0I5QlMsU0FBTyxvQkFBVUosU0FBVixDQUFvQixDQUN6QixvQkFBVUosTUFEZSxFQUV6QixvQkFBVUssSUFGZSxDQUFwQixDQWxCdUI7QUFzQjlCSSxXQUFTLG9CQUFVUixJQXRCVztBQXVCOUJQLFNBQU8sb0JBQVVVLFNBQVYsQ0FBb0IsQ0FDekIsb0JBQVVKLE1BRGUsRUFFekIsb0JBQVVVLE1BRmUsQ0FBcEIsQ0F2QnVCO0FBMkI5QkMsaUJBQWUsb0JBQVVYLE1BM0JLO0FBNEI5QkwsVUFBUSxvQkFBVWUsTUE1Qlk7QUE2QjlCRSxZQUFVLG9CQUFVZCxJQTdCVTtBQThCOUJlLFFBQU0sb0JBQVVmO0FBOUJjLENBQWQsRUErQmYsZ0JBQU1GLFNBL0JTLEVBK0JFLEVBL0JGLENBQWxCOztJQWlDcUJrQixPOzs7QUFNbkIscUJBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLDZJQUNWQSxJQURVOztBQUVuQixVQUFLQyxRQUFMLEdBQWdCLFNBQWhCO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixVQUFDQyxRQUFELEVBQWM7QUFDaEMsWUFBS0MsS0FBTCxDQUFXLEtBQVg7QUFDRCxLQUZEO0FBSG1CO0FBTXBCOzs7OzZCQUVRO0FBQUEsVUFDT0MsT0FEUCxHQUNrQixLQUFLQyxLQUR2QixDQUNGQyxPQURFOzs7QUFHUCxhQUNFO0FBQUMsZUFBRDtBQUFBLHFCQUFhLEtBQUtDLGlCQUFMLENBQXVCSCxPQUF2QixDQUFiO0FBQ1Msb0JBQVUsS0FBS0gsWUFEeEI7QUFFUyxtQkFBUyxLQUFLRSxLQUFMLEVBRmxCO0FBR0csYUFBS0ssa0JBQUw7QUFISCxPQURGO0FBT0Q7Ozs7OztBQXhCa0JWLE8sQ0FDWmpDLFksR0FBZSxTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTRCxZQUF2QixFQUFxQyxnQkFBTUEsWUFBM0MsRUFBeUQ7QUFDN0V5QztBQUQ2RSxDQUF6RCxDO0FBREhSLE8sQ0FJWmxCLFMsR0FBWSxTQUFHZCxNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTYyxTQUF2QixFQUFrQyxnQkFBTUEsU0FBeEMsRUFBbUQsRUFBbkQsQztrQkFKQWtCLE8iLCJmaWxlIjoiY29tcC9hbnRkL21vZGFsL1NLTW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01vZGFsfSBmcm9tICdhbnRkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge1NLfSBmcm9tICdzay1qcyc7XG5pbXBvcnQge0kxOE59IGZyb20gJ3NrLWwxMG4nO1xuaW1wb3J0IEFudGRDb21wIGZyb20gJy4uL0FudGRDb21wJztcbmltcG9ydCBTS0J1dHRvbiBmcm9tICcuLi9idXR0b24vU0tCdXR0b24nO1xuXG5Nb2RhbC5kZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIHtcbiAgYm9keVN0eWxlOiB7fSxcbiAgY2FuY2VsVGV4dDogSTE4Ti5nZXQoJ0NhbmNlbCcpLFxuICBjbG9zYWJsZTogdHJ1ZSxcbiAgbWFzazogdHJ1ZSxcbiAgbWFza0Nsb3NhYmxlOiB0cnVlLFxuICBtYXNrU3R5bGU6IHt9LFxuICBva1RleHQ6IEkxOE4uZ2V0KCdPaycpLFxuICBva1R5cGU6IFNLQnV0dG9uLlRZUEUuUHJpbWFyeSxcbiAgd2lkdGg6IDUyMCxcbiAgekluZGV4OiAxMDAwXG59LCBNb2RhbC5kZWZhdWx0UHJvcHMsIHt9KTtcblxuTW9kYWwucHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCB7XG4gIC8vaHR0cHM6Ly9hbnQuZGVzaWduL2NvbXBvbmVudHMvbW9kYWwtY24vI0FQSVxuICBhZnRlckNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcbiAgYm9keVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBjYW5jZWxUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbG9zYWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIGNvbmZpcm1Mb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgZm9vdGVyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5ub2RlXG4gIF0pLFxuICBnZXRDb250YWluZXI6IFByb3BUeXBlcy5mdW5jLFxuICBtYXNrOiBQcm9wVHlwZXMuYm9vbCxcbiAgbWFza0Nsb3NhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgbWFza1N0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBva1RleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9rVHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIHRpdGxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5ub2RlXG4gIF0pLFxuICB2aXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgd2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlclxuICBdKSxcbiAgd3JhcENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgekluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICBvbkNhbmNlbDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uT2s6IFByb3BUeXBlcy5mdW5jXG59LCBNb2RhbC5wcm9wVHlwZXMsIHt9KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tNb2RhbCBleHRlbmRzIEFudGRDb21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAuZGVmYXVsdFByb3BzLCBNb2RhbC5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBNb2RhbFxuICB9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAucHJvcFR5cGVzLCBNb2RhbC5wcm9wVHlwZXMsIHt9KTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5jb21wTmFtZSA9ICdTS01vZGFsJztcbiAgICB0aGlzLmhhbmRsZUNhbmNlbCA9IChkb21FdmVudCkgPT4ge1xuICAgICAgdGhpcy5za1ZhbChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7Y29tcFRhZzogQ29tcFRhZ30gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wVGFnIHsuLi50aGlzLnNrVHJhbnNQcm9wczJTZWxmKENvbXBUYWcpfVxuICAgICAgICAgICAgICAgb25DYW5jZWw9e3RoaXMuaGFuZGxlQ2FuY2VsfVxuICAgICAgICAgICAgICAgdmlzaWJsZT17dGhpcy5za1ZhbCgpfT5cbiAgICAgICAge3RoaXMuc2tUcmFuc1Byb3BzMkNoaWxkKCl9XG4gICAgICA8L0NvbXBUYWc+XG4gICAgKTtcbiAgfVxufVxuIl19