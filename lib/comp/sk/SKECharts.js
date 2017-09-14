'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
      if (_typeof(_elementResizeEvent2.default.unbind) === _skJs2.default.JS_KEYWORD_FUNCTION) {
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
        _extends({}, this.compValidProps(_SKSpin2.default), { modelId: loadingId, size: _Const.SIZE.Large }),
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
  locale: _skJs2.default.cookies(_skJs2.default.STR_LANGUAGE),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvc2svU0tFQ2hhcnRzLmpzIl0sIm5hbWVzIjpbIlNLRUNoYXJ0cyIsInByb3BzIiwiZWNoYXJ0c0lucyIsInJlbmRlckVDaGFydERvbSIsImJpbmRFdmVudHMiLCJvbkV2ZW50cyIsIl8iLCJpc0Z1bmN0aW9uIiwib25DaGFydFJlYWR5IiwicmVmcyIsImVjaGFydHNEb21SZWYiLCJyZXNpemUiLCJ1bmJpbmQiLCJKU19LRVlXT1JEX0ZVTkNUSU9OIiwiZGlzcG9zZSIsImluc3RhbmNlIiwiZXZlbnRzIiwiX2xvb3AiLCJldmVudE5hbWUiLCJpc1N0cmluZyIsIm9mZiIsIm9uIiwicGFyYW0iLCJnZXRJbnN0YW5jZUJ5RG9tIiwiaW5pdCIsInRoZW1lIiwib3B0aW9uIiwib3B0aW9uVXBkYXRlIiwiY2FsbCIsImdldEVDaGFydHNJbnN0YW5jZSIsInNldE9wdGlvbiIsImhhbmRsZU9wdGlvblVwZGF0ZSIsInNrVmFsIiwibm90TWVyZ2UiLCJsYXp5VXBkYXRlIiwic2hvd0xvYWRpbmciLCJsb2FkaW5nT3B0aW9uIiwiaGlkZUxvYWRpbmciLCJDb21wVGFnIiwiY29tcFRhZyIsImxvYWRpbmdJZCIsInN0eWxlIiwiY29tcFZhbGlkUHJvcHMiLCJMYXJnZSIsImlzRW1wdHkiLCJoZWlnaHQiLCJ3aWR0aCIsImRlZmF1bHRQcm9wcyIsIlRBRyIsImRpdiIsImxpdmUiLCJsb2NhbGUiLCJjb29raWVzIiwiU1RSX0xBTkdVQUdFIiwiY2hhcnQiLCJwcm9wVHlwZXMiLCJhc3NpZ24iLCJTS19QUk9QU19UWVBFIiwiUHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJmdW5jIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7OytlQVJBOzs7SUFVcUJBLFM7OztBQXlCbkIsdUJBQXNCO0FBQUE7O0FB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QVNuRHRDLFNBQU8sZ0JBQU1pQyxTQUFOLENBQWdCRTtBQVQ0QixDQUFsQyxDO2tCQWJBNUQsUyIsImZpbGUiOiJjb21wL3NrL1NLRUNoYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vaHR0cHM6Ly9naXRodWIuY29tL2Vjb21mZS9lY2hhcnRzXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGVjaGFydHMgZnJvbSAnZWNoYXJ0cyc7XG5pbXBvcnQgZWxlbWVudFJlc2l6ZUV2ZW50IGZyb20gJ2VsZW1lbnQtcmVzaXplLWV2ZW50JztcbmltcG9ydCBTSyBmcm9tICdzay1qcyc7XG5pbXBvcnQgU0tTcGluIGZyb20gJy4uL2FudGQvU0tTcGluJztcbmltcG9ydCBDb21wIGZyb20gJy4uLy4uL3V0aWwvQ29tcCc7XG5pbXBvcnQge1NJWkV9IGZyb20gJy4uLy4uL3V0aWwvQ29uc3QnO1xuaW1wb3J0IFJFQUNUIGZyb20gJy4uLy4uL3V0aWwvUkVBQ1QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS0VDaGFydHMgZXh0ZW5kcyBDb21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb21wVGFnOiBSRUFDVC5UQUcuZGl2LFxuXG4gICAgbGF6eVVwZGF0ZTogdHJ1ZSxcbiAgICBsaXZlOiB0cnVlLFxuICAgIGxvY2FsZTogU0suY29va2llcyhTSy5TVFJfTEFOR1VBR0UpLFxuICAgIG5vdE1lcmdlOiBmYWxzZSxcbiAgICBvbkNoYXJ0UmVhZHk6IChjaGFydCkgPT4ge1xuICAgICAgY2hhcnQuaGlkZUxvYWRpbmcoKTtcbiAgICB9LFxuICAgIG9uRXZlbnRzOiB7fVxuICB9O1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBDb21wLlNLX1BST1BTX1RZUEUsIHtcbiAgICBsYXp5VXBkYXRlOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBsb2FkaW5nSWQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBub3RNZXJnZTogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgb25DaGFydFJlYWR5OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvbkV2ZW50czogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICAvLyBvcHRpb246IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgb3B0aW9uVXBkYXRlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBzdHlsZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICB0aGVtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZ1xuICB9KTtcblxuICBjb25zdHJ1Y3RvciguLi5wcm9wcykge1xuICAgIHN1cGVyKC4uLnByb3BzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHN1cGVyLmNvbXBvbmVudERpZE1vdW50KCk7XG5cbiAgICBsZXQgZWNoYXJ0c0lucyA9IHRoaXMucmVuZGVyRUNoYXJ0RG9tKCk7XG4gICAgdGhpcy5iaW5kRXZlbnRzKGVjaGFydHNJbnMsIHRoaXMucHJvcHMub25FdmVudHMpO1xuICAgIC8vIG9uIGNoYXJ0IHJlYWR5XG4gICAgaWYgKF8uaXNGdW5jdGlvbih0aGlzLnByb3BzLm9uQ2hhcnRSZWFkeSkpIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFydFJlYWR5KGVjaGFydHNJbnMpO1xuICAgIH1cblxuICAgIC8vIG9uIHJlc2l6ZVxuICAgIGVsZW1lbnRSZXNpemVFdmVudCh0aGlzLnJlZnMuZWNoYXJ0c0RvbVJlZiwgKCkgPT4ge1xuICAgICAgZWNoYXJ0c0lucy5yZXNpemUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIWltcG9ydGFudFxuICAvLyBjb21wb25lbnRXaWxsVXBkYXRlKCl7XG4gIC8vICAgZWNoYXJ0cy5kaXNwb3NlKHRoaXMucmVmcy5lY2hhcnRzRG9tUmVmKTtcbiAgLy8gICBzdXBlci5jb21wb25lbnRXaWxsVXBkYXRlKCk7XG4gIC8vIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgc3VwZXIuY29tcG9uZW50RGlkVXBkYXRlKCk7XG4gICAgbGV0IGVjaGFydHNJbnMgPSB0aGlzLnJlbmRlckVDaGFydERvbSgpO1xuICAgIHRoaXMuYmluZEV2ZW50cyhlY2hhcnRzSW5zLCB0aGlzLnByb3BzLm9uRXZlbnRzKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0eXBlb2YgZWxlbWVudFJlc2l6ZUV2ZW50LnVuYmluZCA9PT0gU0suSlNfS0VZV09SRF9GVU5DVElPTikge1xuICAgICAgZWxlbWVudFJlc2l6ZUV2ZW50LnVuYmluZCh0aGlzLnJlZnMuZWNoYXJ0c0RvbVJlZik7XG4gICAgfVxuICAgIGVjaGFydHMuZGlzcG9zZSh0aGlzLnJlZnMuZWNoYXJ0c0RvbVJlZik7XG4gICAgc3VwZXIuY29tcG9uZW50V2lsbFVubW91bnQoKTtcbiAgfVxuXG4gIGJpbmRFdmVudHMoaW5zdGFuY2UsIGV2ZW50cykge1xuICAgIGxldCBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKGV2ZW50TmFtZSkge1xuICAgICAgLy8gaWdub3JlIHRoZSBldmVudCBjb25maWcgd2hpY2ggbm90IHNhdGlzZnlcbiAgICAgIGlmIChfLmlzU3RyaW5nKGV2ZW50TmFtZSkgJiYgXy5pc0Z1bmN0aW9uKGV2ZW50c1tldmVudE5hbWVdKSkge1xuICAgICAgICAvLyBiaW5kaW5nIGV2ZW50XG4gICAgICAgIGluc3RhbmNlLm9mZihldmVudE5hbWUpO1xuICAgICAgICBpbnN0YW5jZS5vbihldmVudE5hbWUsIGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgIGV2ZW50c1tldmVudE5hbWVdKHBhcmFtLCBpbnN0YW5jZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmb3IgKGxldCBldmVudE5hbWUgaW4gZXZlbnRzKSB7XG4gICAgICBfbG9vcChldmVudE5hbWUpO1xuICAgIH1cblxuICB9XG5cbiAgZ2V0RUNoYXJ0c0luc3RhbmNlKCkge1xuICAgIC8vIHJldHVybiB0aGUgZWNoYXJ0cyBvYmplY3RcbiAgICByZXR1cm4gZWNoYXJ0cy5nZXRJbnN0YW5jZUJ5RG9tKHRoaXMucmVmcy5lY2hhcnRzRG9tUmVmKSB8fCBlY2hhcnRzLmluaXQodGhpcy5yZWZzLmVjaGFydHNEb21SZWYsIHRoaXMucHJvcHMudGhlbWUpO1xuICB9XG5cbiAgaGFuZGxlT3B0aW9uVXBkYXRlKG9wdGlvbikge1xuICAgIHJldHVybiB0aGlzLnByb3BzLm9wdGlvblVwZGF0ZSA/IHRoaXMucHJvcHMub3B0aW9uVXBkYXRlLmNhbGwodGhpcywgb3B0aW9uKSA6IG9wdGlvbjtcbiAgfVxuXG4gIHJlbmRlckVDaGFydERvbSgpIHtcbiAgICAvLyBpbml0IHRoZSBlY2hhcnRzIGluc3RhbmNlXG4gICAgbGV0IGVjaGFydHNJbnMgPSB0aGlzLmdldEVDaGFydHNJbnN0YW5jZSgpO1xuICAgIC8vIHNldCB0aGUgZWNoYXJ0cyBvcHRpb25cbiAgICAvLyBlY2hhcnRzSW5zLnNldE9wdGlvbih0aGlzLmhhbmRsZU9wdGlvblVwZGF0ZSh0aGlzLnByb3BzLm9wdGlvbiksIHRoaXMucHJvcHMubm90TWVyZ2UsIHRoaXMucHJvcHMubGF6eVVwZGF0ZSk7XG4gICAgZWNoYXJ0c0lucy5zZXRPcHRpb24odGhpcy5oYW5kbGVPcHRpb25VcGRhdGUodGhpcy5za1ZhbCgpKSwgdGhpcy5wcm9wcy5ub3RNZXJnZSwgdGhpcy5wcm9wcy5sYXp5VXBkYXRlKTtcbiAgICAvLyBzZXQgbG9hZGluZyBtYXNrXG4gICAgaWYgKHRoaXMucHJvcHMuc2hvd0xvYWRpbmcpIHtcbiAgICAgIGVjaGFydHNJbnMuc2hvd0xvYWRpbmcodGhpcy5wcm9wcy5sb2FkaW5nT3B0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWNoYXJ0c0lucy5oaWRlTG9hZGluZygpO1xuICAgIH1cbiAgICByZXR1cm4gZWNoYXJ0c0lucztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge2NvbXBUYWc6IENvbXBUYWcsIGxvYWRpbmdJZCwgc3R5bGV9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8U0tTcGluIHsuLi50aGlzLmNvbXBWYWxpZFByb3BzKFNLU3Bpbil9IG1vZGVsSWQ9e2xvYWRpbmdJZH0gc2l6ZT17U0laRS5MYXJnZX0+XG4gICAgICAgIDxDb21wVGFnIHsuLi50aGlzLmNvbXBWYWxpZFByb3BzKENvbXBUYWcpfVxuICAgICAgICAgICAgICAgICBzdHlsZT17Xy5pc0VtcHR5KHN0eWxlKSA/IHtoZWlnaHQ6ICczMDBweCcsIHdpZHRoOiAnMTAwJSd9IDogc3R5bGV9XG4gICAgICAgICAgICAgICAgIHJlZj0nZWNoYXJ0c0RvbVJlZicvPlxuICAgICAgPC9TS1NwaW4+XG4gICAgKTtcbiAgfVxufVxuIl19