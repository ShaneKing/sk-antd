'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _echarts = require('echarts');

var _echarts2 = _interopRequireDefault(_echarts);

var _elementResizeEvent = require('element-resize-event');

var _elementResizeEvent2 = _interopRequireDefault(_elementResizeEvent);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _SKSpin = require('../antd/spin/SKSpin');

var _SKSpin2 = _interopRequireDefault(_SKSpin);

var _Comp2 = require('../../util/Comp');

var _Comp3 = _interopRequireDefault(_Comp2);

var _Const = require('../../util/Const');

var _REACT = require('../../util/REACT');

var _REACT2 = _interopRequireDefault(_REACT);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //https://github.com/ecomfe/echarts


var SKECharts = function (_Comp) {
  _inherits(SKECharts, _Comp);

  function SKECharts() {
    var _ref;

    _classCallCheck(this, SKECharts);

    for (var _len = arguments.length, props = Array(_len), _key = 0; _key < _len; _key++) {
      props[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SKECharts.__proto__ || Object.getPrototypeOf(SKECharts)).call.apply(_ref, [this].concat(props)));

    _this.compName = 'SKECharts';
    return _this;
  }

  _createClass(SKECharts, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _get(SKECharts.prototype.__proto__ || Object.getPrototypeOf(SKECharts.prototype), 'componentDidMount', this).call(this);

      var echartsIns = this.renderEChartDom();
      this.bindEvents(echartsIns, this.props.onEvents);
      // on chart ready
      if (_lodash2.default.isFunction(this.props.onChartReady)) {
        this.props.onChartReady(echartsIns);
      }

      // on resize
      (0, _elementResizeEvent2.default)(this.refs.echartsDomRef, function () {
        echartsIns.resize();
      });
    }

    //!important
    // componentWillUpdate(){
    //   echarts.dispose(this.refs.echartsDomRef);
    //   super.componentWillUpdate();
    // }

  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      _get(SKECharts.prototype.__proto__ || Object.getPrototypeOf(SKECharts.prototype), 'componentDidUpdate', this).call(this);
      var echartsIns = this.renderEChartDom();
      this.bindEvents(echartsIns, this.props.onEvents);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (_typeof(_elementResizeEvent2.default.unbind) === _skJs.SK.JS_KEYWORD_FUNCTION) {
        _elementResizeEvent2.default.unbind(this.refs.echartsDomRef);
      }
      _echarts2.default.dispose(this.refs.echartsDomRef);
      _get(SKECharts.prototype.__proto__ || Object.getPrototypeOf(SKECharts.prototype), 'componentWillUnmount', this).call(this);
    }
  }, {
    key: 'bindEvents',
    value: function bindEvents(instance, events) {
      var _loop = function _loop(eventName) {
        // ignore the event config which not satisfy
        if (_lodash2.default.isString(eventName) && _lodash2.default.isFunction(events[eventName])) {
          // binding event
          instance.off(eventName);
          instance.on(eventName, function (param) {
            events[eventName](param, instance);
          });
        }
      };

      for (var eventName in events) {
        _loop(eventName);
      }
    }
  }, {
    key: 'getEChartsInstance',
    value: function getEChartsInstance() {
      // return the echarts object
      return _echarts2.default.getInstanceByDom(this.refs.echartsDomRef) || _echarts2.default.init(this.refs.echartsDomRef, this.props.theme);
    }
  }, {
    key: 'handleOptionUpdate',
    value: function handleOptionUpdate(option) {
      return this.props.optionUpdate ? this.props.optionUpdate.call(this, option) : option;
    }
  }, {
    key: 'renderEChartDom',
    value: function renderEChartDom() {
      // init the echarts instance
      var echartsIns = this.getEChartsInstance();
      // set the echarts option
      // echartsIns.setOption(this.handleOptionUpdate(this.props.option), this.props.notMerge, this.props.lazyUpdate);
      echartsIns.setOption(this.handleOptionUpdate(this.skVal()), this.props.notMerge, this.props.lazyUpdate);
      // set loading mask
      if (this.props.showLoading) {
        echartsIns.showLoading(this.props.loadingOption);
      } else {
        echartsIns.hideLoading();
      }
      return echartsIns;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          CompTag = _props.compTag,
          loadingId = _props.loadingId,
          style = _props.style;


      return _react2.default.createElement(
        _SKSpin2.default,
        _extends({}, this.skTransProps2Self(_SKSpin2.default), { modelId: loadingId, size: _Const.SIZE.Large }),
        _react2.default.createElement(CompTag, _extends({}, this.skTransProps2Self(CompTag), {
          style: _lodash2.default.isEmpty(style) ? { height: '300px', width: '100%' } : style,
          ref: 'echartsDomRef' }))
      );
    }
  }]);

  return SKECharts;
}(_Comp3.default);

SKECharts.defaultProps = _skJs.SK.assign({}, _Comp3.default.defaultProps, {
  compTag: _REACT2.default.TAG.div,

  lazyUpdate: true,
  live: true,
  locale: _skJs.SK.cookies(_skJs.SK.STR_LANGUAGE),
  notMerge: false,
  onChartReady: function onChartReady(chart) {
    chart.hideLoading();
  },
  onEvents: {}
});
SKECharts.propTypes = _skJs.SK.assign({}, _Comp3.default.propTypes, {
  lazyUpdate: _propTypes2.default.bool,
  loadingId: _propTypes2.default.string.isRequired,
  notMerge: _propTypes2.default.bool,
  onChartReady: _propTypes2.default.func,
  onEvents: _propTypes2.default.object,
  // option: PropTypes.object,
  optionUpdate: _propTypes2.default.func,
  style: _propTypes2.default.object,
  theme: _propTypes2.default.string
});
exports.default = SKECharts;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvc2svU0tFQ2hhcnRzLmpzIl0sIm5hbWVzIjpbIlNLRUNoYXJ0cyIsInByb3BzIiwiY29tcE5hbWUiLCJlY2hhcnRzSW5zIiwicmVuZGVyRUNoYXJ0RG9tIiwiYmluZEV2ZW50cyIsIm9uRXZlbnRzIiwiaXNGdW5jdGlvbiIsIm9uQ2hhcnRSZWFkeSIsInJlZnMiLCJlY2hhcnRzRG9tUmVmIiwicmVzaXplIiwidW5iaW5kIiwiSlNfS0VZV09SRF9GVU5DVElPTiIsImRpc3Bvc2UiLCJpbnN0YW5jZSIsImV2ZW50cyIsIl9sb29wIiwiZXZlbnROYW1lIiwiaXNTdHJpbmciLCJvZmYiLCJvbiIsInBhcmFtIiwiZ2V0SW5zdGFuY2VCeURvbSIsImluaXQiLCJ0aGVtZSIsIm9wdGlvbiIsIm9wdGlvblVwZGF0ZSIsImNhbGwiLCJnZXRFQ2hhcnRzSW5zdGFuY2UiLCJzZXRPcHRpb24iLCJoYW5kbGVPcHRpb25VcGRhdGUiLCJza1ZhbCIsIm5vdE1lcmdlIiwibGF6eVVwZGF0ZSIsInNob3dMb2FkaW5nIiwibG9hZGluZ09wdGlvbiIsImhpZGVMb2FkaW5nIiwiQ29tcFRhZyIsImNvbXBUYWciLCJsb2FkaW5nSWQiLCJzdHlsZSIsInNrVHJhbnNQcm9wczJTZWxmIiwiTGFyZ2UiLCJpc0VtcHR5IiwiaGVpZ2h0Iiwid2lkdGgiLCJkZWZhdWx0UHJvcHMiLCJhc3NpZ24iLCJUQUciLCJkaXYiLCJsaXZlIiwibG9jYWxlIiwiY29va2llcyIsIlNUUl9MQU5HVUFHRSIsImNoYXJ0IiwicHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJmdW5jIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7K2VBVkE7OztJQVlxQkEsUzs7O0FBMEJuQix1QkFBc0I7QUFBQTs7QUFBQTs7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OEI7QUFTL0NwQyxTQUFPLG9CQUFVaUM7QUFUOEIsQ0FBOUIsQztrQkFiQTFELFMiLCJmaWxlIjoiY29tcC9zay9TS0VDaGFydHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2h0dHBzOi8vZ2l0aHViLmNvbS9lY29tZmUvZWNoYXJ0c1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBlY2hhcnRzIGZyb20gJ2VjaGFydHMnO1xuaW1wb3J0IGVsZW1lbnRSZXNpemVFdmVudCBmcm9tICdlbGVtZW50LXJlc2l6ZS1ldmVudCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U0t9IGZyb20gJ3NrLWpzJztcbmltcG9ydCBTS1NwaW4gZnJvbSAnLi4vYW50ZC9zcGluL1NLU3Bpbic7XG5pbXBvcnQgQ29tcCBmcm9tICcuLi8uLi91dGlsL0NvbXAnO1xuaW1wb3J0IHtTSVpFfSBmcm9tICcuLi8uLi91dGlsL0NvbnN0JztcbmltcG9ydCBSRUFDVCBmcm9tICcuLi8uLi91dGlsL1JFQUNUJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tFQ2hhcnRzIGV4dGVuZHMgQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIENvbXAuZGVmYXVsdFByb3BzLCB7XG4gICAgY29tcFRhZzogUkVBQ1QuVEFHLmRpdixcblxuICAgIGxhenlVcGRhdGU6IHRydWUsXG4gICAgbGl2ZTogdHJ1ZSxcbiAgICBsb2NhbGU6IFNLLmNvb2tpZXMoU0suU1RSX0xBTkdVQUdFKSxcbiAgICBub3RNZXJnZTogZmFsc2UsXG4gICAgb25DaGFydFJlYWR5OiAoY2hhcnQpID0+IHtcbiAgICAgIGNoYXJ0LmhpZGVMb2FkaW5nKCk7XG4gICAgfSxcbiAgICBvbkV2ZW50czoge31cbiAgfSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIENvbXAucHJvcFR5cGVzLCB7XG4gICAgbGF6eVVwZGF0ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgbG9hZGluZ0lkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgbm90TWVyZ2U6IFByb3BUeXBlcy5ib29sLFxuICAgIG9uQ2hhcnRSZWFkeTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25FdmVudHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgLy8gb3B0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIG9wdGlvblVwZGF0ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgdGhlbWU6IFByb3BUeXBlcy5zdHJpbmdcbiAgfSk7XG5cblxuICBjb25zdHJ1Y3RvciguLi5wcm9wcykge1xuICAgIHN1cGVyKC4uLnByb3BzKTtcbiAgICB0aGlzLmNvbXBOYW1lID0gJ1NLRUNoYXJ0cyc7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBzdXBlci5jb21wb25lbnREaWRNb3VudCgpO1xuXG4gICAgbGV0IGVjaGFydHNJbnMgPSB0aGlzLnJlbmRlckVDaGFydERvbSgpO1xuICAgIHRoaXMuYmluZEV2ZW50cyhlY2hhcnRzSW5zLCB0aGlzLnByb3BzLm9uRXZlbnRzKTtcbiAgICAvLyBvbiBjaGFydCByZWFkeVxuICAgIGlmIChfLmlzRnVuY3Rpb24odGhpcy5wcm9wcy5vbkNoYXJ0UmVhZHkpKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhcnRSZWFkeShlY2hhcnRzSW5zKTtcbiAgICB9XG5cbiAgICAvLyBvbiByZXNpemVcbiAgICBlbGVtZW50UmVzaXplRXZlbnQodGhpcy5yZWZzLmVjaGFydHNEb21SZWYsICgpID0+IHtcbiAgICAgIGVjaGFydHNJbnMucmVzaXplKCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyFpbXBvcnRhbnRcbiAgLy8gY29tcG9uZW50V2lsbFVwZGF0ZSgpe1xuICAvLyAgIGVjaGFydHMuZGlzcG9zZSh0aGlzLnJlZnMuZWNoYXJ0c0RvbVJlZik7XG4gIC8vICAgc3VwZXIuY29tcG9uZW50V2lsbFVwZGF0ZSgpO1xuICAvLyB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHN1cGVyLmNvbXBvbmVudERpZFVwZGF0ZSgpO1xuICAgIGxldCBlY2hhcnRzSW5zID0gdGhpcy5yZW5kZXJFQ2hhcnREb20oKTtcbiAgICB0aGlzLmJpbmRFdmVudHMoZWNoYXJ0c0lucywgdGhpcy5wcm9wcy5vbkV2ZW50cyk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodHlwZW9mIGVsZW1lbnRSZXNpemVFdmVudC51bmJpbmQgPT09IFNLLkpTX0tFWVdPUkRfRlVOQ1RJT04pIHtcbiAgICAgIGVsZW1lbnRSZXNpemVFdmVudC51bmJpbmQodGhpcy5yZWZzLmVjaGFydHNEb21SZWYpO1xuICAgIH1cbiAgICBlY2hhcnRzLmRpc3Bvc2UodGhpcy5yZWZzLmVjaGFydHNEb21SZWYpO1xuICAgIHN1cGVyLmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XG4gIH1cblxuICBiaW5kRXZlbnRzKGluc3RhbmNlLCBldmVudHMpIHtcbiAgICBsZXQgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChldmVudE5hbWUpIHtcbiAgICAgIC8vIGlnbm9yZSB0aGUgZXZlbnQgY29uZmlnIHdoaWNoIG5vdCBzYXRpc2Z5XG4gICAgICBpZiAoXy5pc1N0cmluZyhldmVudE5hbWUpICYmIF8uaXNGdW5jdGlvbihldmVudHNbZXZlbnROYW1lXSkpIHtcbiAgICAgICAgLy8gYmluZGluZyBldmVudFxuICAgICAgICBpbnN0YW5jZS5vZmYoZXZlbnROYW1lKTtcbiAgICAgICAgaW5zdGFuY2Uub24oZXZlbnROYW1lLCBmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICBldmVudHNbZXZlbnROYW1lXShwYXJhbSwgaW5zdGFuY2UpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZm9yIChsZXQgZXZlbnROYW1lIGluIGV2ZW50cykge1xuICAgICAgX2xvb3AoZXZlbnROYW1lKTtcbiAgICB9XG5cbiAgfVxuXG4gIGdldEVDaGFydHNJbnN0YW5jZSgpIHtcbiAgICAvLyByZXR1cm4gdGhlIGVjaGFydHMgb2JqZWN0XG4gICAgcmV0dXJuIGVjaGFydHMuZ2V0SW5zdGFuY2VCeURvbSh0aGlzLnJlZnMuZWNoYXJ0c0RvbVJlZikgfHwgZWNoYXJ0cy5pbml0KHRoaXMucmVmcy5lY2hhcnRzRG9tUmVmLCB0aGlzLnByb3BzLnRoZW1lKTtcbiAgfVxuXG4gIGhhbmRsZU9wdGlvblVwZGF0ZShvcHRpb24pIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5vcHRpb25VcGRhdGUgPyB0aGlzLnByb3BzLm9wdGlvblVwZGF0ZS5jYWxsKHRoaXMsIG9wdGlvbikgOiBvcHRpb247XG4gIH1cblxuICByZW5kZXJFQ2hhcnREb20oKSB7XG4gICAgLy8gaW5pdCB0aGUgZWNoYXJ0cyBpbnN0YW5jZVxuICAgIGxldCBlY2hhcnRzSW5zID0gdGhpcy5nZXRFQ2hhcnRzSW5zdGFuY2UoKTtcbiAgICAvLyBzZXQgdGhlIGVjaGFydHMgb3B0aW9uXG4gICAgLy8gZWNoYXJ0c0lucy5zZXRPcHRpb24odGhpcy5oYW5kbGVPcHRpb25VcGRhdGUodGhpcy5wcm9wcy5vcHRpb24pLCB0aGlzLnByb3BzLm5vdE1lcmdlLCB0aGlzLnByb3BzLmxhenlVcGRhdGUpO1xuICAgIGVjaGFydHNJbnMuc2V0T3B0aW9uKHRoaXMuaGFuZGxlT3B0aW9uVXBkYXRlKHRoaXMuc2tWYWwoKSksIHRoaXMucHJvcHMubm90TWVyZ2UsIHRoaXMucHJvcHMubGF6eVVwZGF0ZSk7XG4gICAgLy8gc2V0IGxvYWRpbmcgbWFza1xuICAgIGlmICh0aGlzLnByb3BzLnNob3dMb2FkaW5nKSB7XG4gICAgICBlY2hhcnRzSW5zLnNob3dMb2FkaW5nKHRoaXMucHJvcHMubG9hZGluZ09wdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVjaGFydHNJbnMuaGlkZUxvYWRpbmcoKTtcbiAgICB9XG4gICAgcmV0dXJuIGVjaGFydHNJbnM7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtjb21wVGFnOiBDb21wVGFnLCBsb2FkaW5nSWQsIHN0eWxlfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFNLU3BpbiB7Li4udGhpcy5za1RyYW5zUHJvcHMyU2VsZihTS1NwaW4pfSBtb2RlbElkPXtsb2FkaW5nSWR9IHNpemU9e1NJWkUuTGFyZ2V9PlxuICAgICAgICA8Q29tcFRhZyB7Li4udGhpcy5za1RyYW5zUHJvcHMyU2VsZihDb21wVGFnKX1cbiAgICAgICAgICAgICAgICAgc3R5bGU9e18uaXNFbXB0eShzdHlsZSkgPyB7aGVpZ2h0OiAnMzAwcHgnLCB3aWR0aDogJzEwMCUnfSA6IHN0eWxlfVxuICAgICAgICAgICAgICAgICByZWY9J2VjaGFydHNEb21SZWYnLz5cbiAgICAgIDwvU0tTcGluPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==