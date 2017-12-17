//https://github.com/ecomfe/echarts
import _ from 'lodash';
import echarts from 'echarts';
import elementResizeEvent from 'element-resize-event';
import PropTypes from 'prop-types';
import React from 'react';
import {SK} from 'sk-js';
import SKSpin from '../antd/spin/SKSpin';
import Comp from '../../util/Comp';
import {SIZE} from '../../util/Const';
import REACT from '../../util/REACT';

export default class SKECharts extends Comp {
  static defaultProps = SK.assign({}, Comp.defaultProps, {
    compTag: REACT.TAG.div,

    lazyUpdate: true,
    live: true,
    locale: SK.cookies(SK.STR_LANGUAGE),
    notMerge: false,
    onChartReady: (chart) => {
      chart.hideLoading();
    },
    onEvents: {}
  });
  static propTypes = SK.assign({}, Comp.propTypes, {
    lazyUpdate: PropTypes.bool,
    loadingId: PropTypes.string.isRequired,
    notMerge: PropTypes.bool,
    onChartReady: PropTypes.func,
    onEvents: PropTypes.object,
    // option: PropTypes.object,
    optionUpdate: PropTypes.func,
    style: PropTypes.object,
    theme: PropTypes.string
  });


  constructor(...props) {
    super(...props);
    this.compName = 'SKECharts';
  }

  componentDidMount() {
    super.componentDidMount();

    let echartsIns = this.renderEChartDom();
    this.bindEvents(echartsIns, this.props.onEvents);
    // on chart ready
    if (_.isFunction(this.props.onChartReady)) {
      this.props.onChartReady(echartsIns);
    }

    // on resize
    elementResizeEvent(this.refs.echartsDomRef, () => {
      echartsIns.resize();
    });
  }

  //!important
  // componentWillUpdate(){
  //   echarts.dispose(this.refs.echartsDomRef);
  //   super.componentWillUpdate();
  // }

  componentDidUpdate() {
    super.componentDidUpdate();
    let echartsIns = this.renderEChartDom();
    this.bindEvents(echartsIns, this.props.onEvents);
  }

  componentWillUnmount() {
    if (typeof elementResizeEvent.unbind === SK.JS_KEYWORD_FUNCTION) {
      elementResizeEvent.unbind(this.refs.echartsDomRef);
    }
    echarts.dispose(this.refs.echartsDomRef);
    super.componentWillUnmount();
  }

  bindEvents(instance, events) {
    let _loop = function _loop(eventName) {
      // ignore the event config which not satisfy
      if (_.isString(eventName) && _.isFunction(events[eventName])) {
        // binding event
        instance.off(eventName);
        instance.on(eventName, function (param) {
          events[eventName](param, instance);
        });
      }
    };

    for (let eventName in events) {
      _loop(eventName);
    }

  }

  getEChartsInstance() {
    // return the echarts object
    return echarts.getInstanceByDom(this.refs.echartsDomRef) || echarts.init(this.refs.echartsDomRef, this.props.theme);
  }

  handleOptionUpdate(option) {
    return this.props.optionUpdate ? this.props.optionUpdate.call(this, option) : option;
  }

  renderEChartDom() {
    // init the echarts instance
    let echartsIns = this.getEChartsInstance();
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

  render() {
    let {compTag: CompTag, loadingId, style} = this.props;

    return (
      <SKSpin {...this.skTransProps2Self(SKSpin)} modelId={loadingId} size={SIZE.Large}>
        <CompTag {...this.skTransProps2Self(CompTag)}
                 style={_.isEmpty(style) ? {height: '300px', width: '100%'} : style}
                 ref='echartsDomRef'/>
      </SKSpin>
    );
  }
}
