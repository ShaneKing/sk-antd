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

var _Comp2 = require('../Comp');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvc2svU0tFQ2hhcnRzLmpzIl0sIm5hbWVzIjpbIlNLRUNoYXJ0cyIsInByb3BzIiwiY29tcE5hbWUiLCJlY2hhcnRzSW5zIiwicmVuZGVyRUNoYXJ0RG9tIiwiYmluZEV2ZW50cyIsIm9uRXZlbnRzIiwiaXNGdW5jdGlvbiIsIm9uQ2hhcnRSZWFkeSIsInJlZnMiLCJlY2hhcnRzRG9tUmVmIiwicmVzaXplIiwidW5iaW5kIiwiSlNfS0VZV09SRF9GVU5DVElPTiIsImRpc3Bvc2UiLCJpbnN0YW5jZSIsImV2ZW50cyIsIl9sb29wIiwiZXZlbnROYW1lIiwiaXNTdHJpbmciLCJvZmYiLCJvbiIsInBhcmFtIiwiZ2V0SW5zdGFuY2VCeURvbSIsImluaXQiLCJ0aGVtZSIsIm9wdGlvbiIsIm9wdGlvblVwZGF0ZSIsImNhbGwiLCJnZXRFQ2hhcnRzSW5zdGFuY2UiLCJzZXRPcHRpb24iLCJoYW5kbGVPcHRpb25VcGRhdGUiLCJza1ZhbCIsIm5vdE1lcmdlIiwibGF6eVVwZGF0ZSIsInNob3dMb2FkaW5nIiwibG9hZGluZ09wdGlvbiIsImhpZGVMb2FkaW5nIiwiQ29tcFRhZyIsImNvbXBUYWciLCJsb2FkaW5nSWQiLCJzdHlsZSIsInNrVHJhbnNQcm9wczJTZWxmIiwiTGFyZ2UiLCJpc0VtcHR5IiwiaGVpZ2h0Iiwid2lkdGgiLCJkZWZhdWx0UHJvcHMiLCJhc3NpZ24iLCJUQUciLCJkaXYiLCJsaXZlIiwibG9jYWxlIiwiY29va2llcyIsIlNUUl9MQU5HVUFHRSIsImNoYXJ0IiwicHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJmdW5jIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7K2VBVkE7OztJQVlxQkEsUzs7O0FBeUJuQix1QkFBc0I7QUFBQTs7QUFBQTs7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OEI7QUFTL0NwQyxTQUFPLG9CQUFVaUM7QUFUOEIsQ0FBOUIsQztrQkFiQTFELFMiLCJmaWxlIjoiY29tcC9zay9TS0VDaGFydHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2h0dHBzOi8vZ2l0aHViLmNvbS9lY29tZmUvZWNoYXJ0c1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBlY2hhcnRzIGZyb20gJ2VjaGFydHMnO1xuaW1wb3J0IGVsZW1lbnRSZXNpemVFdmVudCBmcm9tICdlbGVtZW50LXJlc2l6ZS1ldmVudCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U0t9IGZyb20gJ3NrLWpzJztcbmltcG9ydCBTS1NwaW4gZnJvbSAnLi4vYW50ZC9zcGluL1NLU3Bpbic7XG5pbXBvcnQgQ29tcCBmcm9tICcuLi9Db21wJztcbmltcG9ydCB7U0laRX0gZnJvbSAnLi4vLi4vdXRpbC9Db25zdCc7XG5pbXBvcnQgUkVBQ1QgZnJvbSAnLi4vLi4vdXRpbC9SRUFDVCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNLRUNoYXJ0cyBleHRlbmRzIENvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCBDb21wLmRlZmF1bHRQcm9wcywge1xuICAgIGNvbXBUYWc6IFJFQUNULlRBRy5kaXYsXG5cbiAgICBsYXp5VXBkYXRlOiB0cnVlLFxuICAgIGxpdmU6IHRydWUsXG4gICAgbG9jYWxlOiBTSy5jb29raWVzKFNLLlNUUl9MQU5HVUFHRSksXG4gICAgbm90TWVyZ2U6IGZhbHNlLFxuICAgIG9uQ2hhcnRSZWFkeTogKGNoYXJ0KSA9PiB7XG4gICAgICBjaGFydC5oaWRlTG9hZGluZygpO1xuICAgIH0sXG4gICAgb25FdmVudHM6IHt9XG4gIH0pO1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBDb21wLnByb3BUeXBlcywge1xuICAgIGxhenlVcGRhdGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGxvYWRpbmdJZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIG5vdE1lcmdlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvbkNoYXJ0UmVhZHk6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uRXZlbnRzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIC8vIG9wdGlvbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBvcHRpb25VcGRhdGU6IFByb3BUeXBlcy5mdW5jLFxuICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHRoZW1lOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH0pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLnByb3BzKSB7XG4gICAgc3VwZXIoLi4ucHJvcHMpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnU0tFQ2hhcnRzJztcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHN1cGVyLmNvbXBvbmVudERpZE1vdW50KCk7XG5cbiAgICBsZXQgZWNoYXJ0c0lucyA9IHRoaXMucmVuZGVyRUNoYXJ0RG9tKCk7XG4gICAgdGhpcy5iaW5kRXZlbnRzKGVjaGFydHNJbnMsIHRoaXMucHJvcHMub25FdmVudHMpO1xuICAgIC8vIG9uIGNoYXJ0IHJlYWR5XG4gICAgaWYgKF8uaXNGdW5jdGlvbih0aGlzLnByb3BzLm9uQ2hhcnRSZWFkeSkpIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFydFJlYWR5KGVjaGFydHNJbnMpO1xuICAgIH1cblxuICAgIC8vIG9uIHJlc2l6ZVxuICAgIGVsZW1lbnRSZXNpemVFdmVudCh0aGlzLnJlZnMuZWNoYXJ0c0RvbVJlZiwgKCkgPT4ge1xuICAgICAgZWNoYXJ0c0lucy5yZXNpemUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIWltcG9ydGFudFxuICAvLyBjb21wb25lbnRXaWxsVXBkYXRlKCl7XG4gIC8vICAgZWNoYXJ0cy5kaXNwb3NlKHRoaXMucmVmcy5lY2hhcnRzRG9tUmVmKTtcbiAgLy8gICBzdXBlci5jb21wb25lbnRXaWxsVXBkYXRlKCk7XG4gIC8vIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgc3VwZXIuY29tcG9uZW50RGlkVXBkYXRlKCk7XG4gICAgbGV0IGVjaGFydHNJbnMgPSB0aGlzLnJlbmRlckVDaGFydERvbSgpO1xuICAgIHRoaXMuYmluZEV2ZW50cyhlY2hhcnRzSW5zLCB0aGlzLnByb3BzLm9uRXZlbnRzKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0eXBlb2YgZWxlbWVudFJlc2l6ZUV2ZW50LnVuYmluZCA9PT0gU0suSlNfS0VZV09SRF9GVU5DVElPTikge1xuICAgICAgZWxlbWVudFJlc2l6ZUV2ZW50LnVuYmluZCh0aGlzLnJlZnMuZWNoYXJ0c0RvbVJlZik7XG4gICAgfVxuICAgIGVjaGFydHMuZGlzcG9zZSh0aGlzLnJlZnMuZWNoYXJ0c0RvbVJlZik7XG4gICAgc3VwZXIuY29tcG9uZW50V2lsbFVubW91bnQoKTtcbiAgfVxuXG4gIGJpbmRFdmVudHMoaW5zdGFuY2UsIGV2ZW50cykge1xuICAgIGxldCBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKGV2ZW50TmFtZSkge1xuICAgICAgLy8gaWdub3JlIHRoZSBldmVudCBjb25maWcgd2hpY2ggbm90IHNhdGlzZnlcbiAgICAgIGlmIChfLmlzU3RyaW5nKGV2ZW50TmFtZSkgJiYgXy5pc0Z1bmN0aW9uKGV2ZW50c1tldmVudE5hbWVdKSkge1xuICAgICAgICAvLyBiaW5kaW5nIGV2ZW50XG4gICAgICAgIGluc3RhbmNlLm9mZihldmVudE5hbWUpO1xuICAgICAgICBpbnN0YW5jZS5vbihldmVudE5hbWUsIGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgIGV2ZW50c1tldmVudE5hbWVdKHBhcmFtLCBpbnN0YW5jZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmb3IgKGxldCBldmVudE5hbWUgaW4gZXZlbnRzKSB7XG4gICAgICBfbG9vcChldmVudE5hbWUpO1xuICAgIH1cblxuICB9XG5cbiAgZ2V0RUNoYXJ0c0luc3RhbmNlKCkge1xuICAgIC8vIHJldHVybiB0aGUgZWNoYXJ0cyBvYmplY3RcbiAgICByZXR1cm4gZWNoYXJ0cy5nZXRJbnN0YW5jZUJ5RG9tKHRoaXMucmVmcy5lY2hhcnRzRG9tUmVmKSB8fCBlY2hhcnRzLmluaXQodGhpcy5yZWZzLmVjaGFydHNEb21SZWYsIHRoaXMucHJvcHMudGhlbWUpO1xuICB9XG5cbiAgaGFuZGxlT3B0aW9uVXBkYXRlKG9wdGlvbikge1xuICAgIHJldHVybiB0aGlzLnByb3BzLm9wdGlvblVwZGF0ZSA/IHRoaXMucHJvcHMub3B0aW9uVXBkYXRlLmNhbGwodGhpcywgb3B0aW9uKSA6IG9wdGlvbjtcbiAgfVxuXG4gIHJlbmRlckVDaGFydERvbSgpIHtcbiAgICAvLyBpbml0IHRoZSBlY2hhcnRzIGluc3RhbmNlXG4gICAgbGV0IGVjaGFydHNJbnMgPSB0aGlzLmdldEVDaGFydHNJbnN0YW5jZSgpO1xuICAgIC8vIHNldCB0aGUgZWNoYXJ0cyBvcHRpb25cbiAgICAvLyBlY2hhcnRzSW5zLnNldE9wdGlvbih0aGlzLmhhbmRsZU9wdGlvblVwZGF0ZSh0aGlzLnByb3BzLm9wdGlvbiksIHRoaXMucHJvcHMubm90TWVyZ2UsIHRoaXMucHJvcHMubGF6eVVwZGF0ZSk7XG4gICAgZWNoYXJ0c0lucy5zZXRPcHRpb24odGhpcy5oYW5kbGVPcHRpb25VcGRhdGUodGhpcy5za1ZhbCgpKSwgdGhpcy5wcm9wcy5ub3RNZXJnZSwgdGhpcy5wcm9wcy5sYXp5VXBkYXRlKTtcbiAgICAvLyBzZXQgbG9hZGluZyBtYXNrXG4gICAgaWYgKHRoaXMucHJvcHMuc2hvd0xvYWRpbmcpIHtcbiAgICAgIGVjaGFydHNJbnMuc2hvd0xvYWRpbmcodGhpcy5wcm9wcy5sb2FkaW5nT3B0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWNoYXJ0c0lucy5oaWRlTG9hZGluZygpO1xuICAgIH1cbiAgICByZXR1cm4gZWNoYXJ0c0lucztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge2NvbXBUYWc6IENvbXBUYWcsIGxvYWRpbmdJZCwgc3R5bGV9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8U0tTcGluIHsuLi50aGlzLnNrVHJhbnNQcm9wczJTZWxmKFNLU3Bpbil9IG1vZGVsSWQ9e2xvYWRpbmdJZH0gc2l6ZT17U0laRS5MYXJnZX0+XG4gICAgICAgIDxDb21wVGFnIHsuLi50aGlzLnNrVHJhbnNQcm9wczJTZWxmKENvbXBUYWcpfVxuICAgICAgICAgICAgICAgICBzdHlsZT17Xy5pc0VtcHR5KHN0eWxlKSA/IHtoZWlnaHQ6ICczMDBweCcsIHdpZHRoOiAnMTAwJSd9IDogc3R5bGV9XG4gICAgICAgICAgICAgICAgIHJlZj0nZWNoYXJ0c0RvbVJlZicvPlxuICAgICAgPC9TS1NwaW4+XG4gICAgKTtcbiAgfVxufVxuIl19