'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _echarts = require('echarts');

var _echarts2 = _interopRequireDefault(_echarts);

var _elementResizeEvent = require('element-resize-event');

var _elementResizeEvent2 = _interopRequireDefault(_elementResizeEvent);

var _skJs = require('sk-js');

var _skJs2 = _interopRequireDefault(_skJs);

var _SKSpin = require('../antd/SKSpin');

var _SKSpin2 = _interopRequireDefault(_SKSpin);

var _Comp2 = require('../../utils/Comp');

var _Comp3 = _interopRequireDefault(_Comp2);

var _REACT = require('../../utils/REACT');

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

    return _possibleConstructorReturn(this, (_ref = SKECharts.__proto__ || Object.getPrototypeOf(SKECharts)).call.apply(_ref, [this].concat(props)));
  }

  _createClass(SKECharts, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _get(SKECharts.prototype.__proto__ || Object.getPrototypeOf(SKECharts.prototype), 'componentDidMount', this).call(this);

      var echartsIns = this.renderEChartDom();
      this.bindEvents(echartsIns, this.props.onEvents);
      // on chart ready
      if (_.isFunction(this.props.onChartReady)) {
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
      if (typeof _elementResizeEvent2.default.unbind === 'function') {
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
        if (_.isString(eventName) && _.isFunction(events[eventName])) {
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
        _extends({}, this.compValidProps(_SKSpin2.default), { modelId: loadingId, size: 'large' }),
        _react2.default.createElement(CompTag, _extends({}, this.compValidProps(CompTag), {
          style: _.isEmpty(style) ? { height: '300px', width: '100%' } : style,
          ref: 'echartsDomRef' }))
      );
    }
  }]);

  return SKECharts;
}(_Comp3.default);

SKECharts.defaultProps = {
  compTag: _REACT2.default.TAG.div,

  lazyUpdate: true,
  live: true,
  locale: _skJs2.default.cookies(_skJs2.default.COOKIE_LANGUAGE),
  notMerge: false,
  onChartReady: function onChartReady(chart) {
    chart.hideLoading();
  },
  onEvents: {}
};
SKECharts.propTypes = _skJs2.default.assign({}, _Comp3.default.SK_PROPS_TYPE, {
  lazyUpdate: _react2.default.PropTypes.bool,
  loadingId: _react2.default.PropTypes.string.isRequired,
  notMerge: _react2.default.PropTypes.bool,
  onChartReady: _react2.default.PropTypes.func,
  onEvents: _react2.default.PropTypes.object,
  // option: React.PropTypes.object,
  optionUpdate: _react2.default.PropTypes.func,
  style: _react2.default.PropTypes.object,
  theme: _react2.default.PropTypes.string
});
exports.default = SKECharts;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL3NrL1NLRUNoYXJ0cy5qcyJdLCJuYW1lcyI6WyJTS0VDaGFydHMiLCJwcm9wcyIsImVjaGFydHNJbnMiLCJyZW5kZXJFQ2hhcnREb20iLCJiaW5kRXZlbnRzIiwib25FdmVudHMiLCJfIiwiaXNGdW5jdGlvbiIsIm9uQ2hhcnRSZWFkeSIsInJlZnMiLCJlY2hhcnRzRG9tUmVmIiwicmVzaXplIiwidW5iaW5kIiwiZGlzcG9zZSIsImluc3RhbmNlIiwiZXZlbnRzIiwiX2xvb3AiLCJldmVudE5hbWUiLCJpc1N0cmluZyIsIm9mZiIsIm9uIiwicGFyYW0iLCJnZXRJbnN0YW5jZUJ5RG9tIiwiaW5pdCIsInRoZW1lIiwib3B0aW9uIiwib3B0aW9uVXBkYXRlIiwiY2FsbCIsImdldEVDaGFydHNJbnN0YW5jZSIsInNldE9wdGlvbiIsImhhbmRsZU9wdGlvblVwZGF0ZSIsInNrVmFsIiwibm90TWVyZ2UiLCJsYXp5VXBkYXRlIiwic2hvd0xvYWRpbmciLCJsb2FkaW5nT3B0aW9uIiwiaGlkZUxvYWRpbmciLCJDb21wVGFnIiwiY29tcFRhZyIsImxvYWRpbmdJZCIsInN0eWxlIiwiY29tcFZhbGlkUHJvcHMiLCJpc0VtcHR5IiwiaGVpZ2h0Iiwid2lkdGgiLCJkZWZhdWx0UHJvcHMiLCJUQUciLCJkaXYiLCJsaXZlIiwibG9jYWxlIiwiY29va2llcyIsIkNPT0tJRV9MQU5HVUFHRSIsImNoYXJ0IiwicHJvcFR5cGVzIiwiYXNzaWduIiwiU0tfUFJPUFNfVFlQRSIsIlByb3BUeXBlcyIsImJvb2wiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiZnVuYyIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7K2VBUEE7OztJQVNxQkEsUzs7O0FBeUJuQix1QkFBc0I7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBUEMsS0FBTztBQUFQQSxXQUFPO0FB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QWJBMUQsUyIsImZpbGUiOiJjb21wcy9zay9TS0VDaGFydHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2h0dHBzOi8vZ2l0aHViLmNvbS9lY29tZmUvZWNoYXJ0c1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBlY2hhcnRzIGZyb20gJ2VjaGFydHMnO1xuaW1wb3J0IGVsZW1lbnRSZXNpemVFdmVudCBmcm9tICdlbGVtZW50LXJlc2l6ZS1ldmVudCc7XG5pbXBvcnQgU0sgZnJvbSAnc2stanMnO1xuaW1wb3J0IFNLU3BpbiBmcm9tICcuLi9hbnRkL1NLU3Bpbic7XG5pbXBvcnQgQ29tcCBmcm9tICcuLi8uLi91dGlscy9Db21wJztcbmltcG9ydCBSRUFDVCBmcm9tICcuLi8uLi91dGlscy9SRUFDVCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNLRUNoYXJ0cyBleHRlbmRzIENvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbXBUYWc6IFJFQUNULlRBRy5kaXYsXG5cbiAgICBsYXp5VXBkYXRlOiB0cnVlLFxuICAgIGxpdmU6IHRydWUsXG4gICAgbG9jYWxlOiBTSy5jb29raWVzKFNLLkNPT0tJRV9MQU5HVUFHRSksXG4gICAgbm90TWVyZ2U6IGZhbHNlLFxuICAgIG9uQ2hhcnRSZWFkeTogKGNoYXJ0KSA9PiB7XG4gICAgICBjaGFydC5oaWRlTG9hZGluZygpO1xuICAgIH0sXG4gICAgb25FdmVudHM6IHt9XG4gIH07XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIENvbXAuU0tfUFJPUFNfVFlQRSwge1xuICAgIGxhenlVcGRhdGU6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIGxvYWRpbmdJZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIG5vdE1lcmdlOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBvbkNoYXJ0UmVhZHk6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uRXZlbnRzOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIC8vIG9wdGlvbjogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBvcHRpb25VcGRhdGU6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIHN0eWxlOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIHRoZW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXG4gIH0pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLnByb3BzKSB7XG4gICAgc3VwZXIoLi4ucHJvcHMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgc3VwZXIuY29tcG9uZW50RGlkTW91bnQoKTtcblxuICAgIGxldCBlY2hhcnRzSW5zID0gdGhpcy5yZW5kZXJFQ2hhcnREb20oKTtcbiAgICB0aGlzLmJpbmRFdmVudHMoZWNoYXJ0c0lucywgdGhpcy5wcm9wcy5vbkV2ZW50cyk7XG4gICAgLy8gb24gY2hhcnQgcmVhZHlcbiAgICBpZiAoXy5pc0Z1bmN0aW9uKHRoaXMucHJvcHMub25DaGFydFJlYWR5KSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYXJ0UmVhZHkoZWNoYXJ0c0lucyk7XG4gICAgfVxuXG4gICAgLy8gb24gcmVzaXplXG4gICAgZWxlbWVudFJlc2l6ZUV2ZW50KHRoaXMucmVmcy5lY2hhcnRzRG9tUmVmLCAoKSA9PiB7XG4gICAgICBlY2hhcnRzSW5zLnJlc2l6ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8haW1wb3J0YW50XG4gIC8vIGNvbXBvbmVudFdpbGxVcGRhdGUoKXtcbiAgLy8gICBlY2hhcnRzLmRpc3Bvc2UodGhpcy5yZWZzLmVjaGFydHNEb21SZWYpO1xuICAvLyAgIHN1cGVyLmNvbXBvbmVudFdpbGxVcGRhdGUoKTtcbiAgLy8gfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICBzdXBlci5jb21wb25lbnREaWRVcGRhdGUoKTtcbiAgICBsZXQgZWNoYXJ0c0lucyA9IHRoaXMucmVuZGVyRUNoYXJ0RG9tKCk7XG4gICAgdGhpcy5iaW5kRXZlbnRzKGVjaGFydHNJbnMsIHRoaXMucHJvcHMub25FdmVudHMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHR5cGVvZiBlbGVtZW50UmVzaXplRXZlbnQudW5iaW5kID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBlbGVtZW50UmVzaXplRXZlbnQudW5iaW5kKHRoaXMucmVmcy5lY2hhcnRzRG9tUmVmKTtcbiAgICB9XG4gICAgZWNoYXJ0cy5kaXNwb3NlKHRoaXMucmVmcy5lY2hhcnRzRG9tUmVmKTtcbiAgICBzdXBlci5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuICB9XG5cbiAgYmluZEV2ZW50cyhpbnN0YW5jZSwgZXZlbnRzKSB7XG4gICAgbGV0IF9sb29wID0gZnVuY3Rpb24gX2xvb3AoZXZlbnROYW1lKSB7XG4gICAgICAvLyBpZ25vcmUgdGhlIGV2ZW50IGNvbmZpZyB3aGljaCBub3Qgc2F0aXNmeVxuICAgICAgaWYgKF8uaXNTdHJpbmcoZXZlbnROYW1lKSAmJiBfLmlzRnVuY3Rpb24oZXZlbnRzW2V2ZW50TmFtZV0pKSB7XG4gICAgICAgIC8vIGJpbmRpbmcgZXZlbnRcbiAgICAgICAgaW5zdGFuY2Uub2ZmKGV2ZW50TmFtZSk7XG4gICAgICAgIGluc3RhbmNlLm9uKGV2ZW50TmFtZSwgZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgZXZlbnRzW2V2ZW50TmFtZV0ocGFyYW0sIGluc3RhbmNlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZvciAobGV0IGV2ZW50TmFtZSBpbiBldmVudHMpIHtcbiAgICAgIF9sb29wKGV2ZW50TmFtZSk7XG4gICAgfVxuXG4gIH1cblxuICBnZXRFQ2hhcnRzSW5zdGFuY2UoKSB7XG4gICAgLy8gcmV0dXJuIHRoZSBlY2hhcnRzIG9iamVjdFxuICAgIHJldHVybiBlY2hhcnRzLmdldEluc3RhbmNlQnlEb20odGhpcy5yZWZzLmVjaGFydHNEb21SZWYpIHx8IGVjaGFydHMuaW5pdCh0aGlzLnJlZnMuZWNoYXJ0c0RvbVJlZiwgdGhpcy5wcm9wcy50aGVtZSk7XG4gIH1cblxuICBoYW5kbGVPcHRpb25VcGRhdGUob3B0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMub3B0aW9uVXBkYXRlID8gdGhpcy5wcm9wcy5vcHRpb25VcGRhdGUuY2FsbCh0aGlzLCBvcHRpb24pIDogb3B0aW9uO1xuICB9XG5cbiAgcmVuZGVyRUNoYXJ0RG9tKCkge1xuICAgIC8vIGluaXQgdGhlIGVjaGFydHMgaW5zdGFuY2VcbiAgICBsZXQgZWNoYXJ0c0lucyA9IHRoaXMuZ2V0RUNoYXJ0c0luc3RhbmNlKCk7XG4gICAgLy8gc2V0IHRoZSBlY2hhcnRzIG9wdGlvblxuICAgIC8vIGVjaGFydHNJbnMuc2V0T3B0aW9uKHRoaXMuaGFuZGxlT3B0aW9uVXBkYXRlKHRoaXMucHJvcHMub3B0aW9uKSwgdGhpcy5wcm9wcy5ub3RNZXJnZSwgdGhpcy5wcm9wcy5sYXp5VXBkYXRlKTtcbiAgICBlY2hhcnRzSW5zLnNldE9wdGlvbih0aGlzLmhhbmRsZU9wdGlvblVwZGF0ZSh0aGlzLnNrVmFsKCkpLCB0aGlzLnByb3BzLm5vdE1lcmdlLCB0aGlzLnByb3BzLmxhenlVcGRhdGUpO1xuICAgIC8vIHNldCBsb2FkaW5nIG1hc2tcbiAgICBpZiAodGhpcy5wcm9wcy5zaG93TG9hZGluZykge1xuICAgICAgZWNoYXJ0c0lucy5zaG93TG9hZGluZyh0aGlzLnByb3BzLmxvYWRpbmdPcHRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlY2hhcnRzSW5zLmhpZGVMb2FkaW5nKCk7XG4gICAgfVxuICAgIHJldHVybiBlY2hhcnRzSW5zO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7Y29tcFRhZzogQ29tcFRhZywgbG9hZGluZ0lkLCBzdHlsZX0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTS1NwaW4gey4uLnRoaXMuY29tcFZhbGlkUHJvcHMoU0tTcGluKX0gbW9kZWxJZD17bG9hZGluZ0lkfSBzaXplPSdsYXJnZSc+XG4gICAgICAgIDxDb21wVGFnIHsuLi50aGlzLmNvbXBWYWxpZFByb3BzKENvbXBUYWcpfVxuICAgICAgICAgIHN0eWxlPXtfLmlzRW1wdHkoc3R5bGUpID8ge2hlaWdodDogJzMwMHB4Jywgd2lkdGg6ICcxMDAlJ30gOiBzdHlsZX1cbiAgICAgICAgICByZWY9J2VjaGFydHNEb21SZWYnLz5cbiAgICAgIDwvU0tTcGluPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==