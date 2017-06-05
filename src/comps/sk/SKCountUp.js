import CountUp from 'countup.js';
import SK from 'sk-js';
import _ from 'lodash';
import React from 'react';
import Comp from '../../utils/Comp';
import REACT from '../../utils/REACT';

export default class SKCountUp extends Comp {
  static defaultProps = {
    compTag: REACT.TAG.span,
    decimal: '.',
    decimals: 0,
    duration: 3,
    easingFn: null,
    end: 100,
    formattingFn: null,
    onComplete: undefined,
    onStart: undefined,
    prefix: '',
    separator: ',',
    start: 0,
    suffix: '',
    redraw: false,
    style: undefined,
    useEasing: true,
    useGrouping: true
  };
  static propTypes = SK.assign({}, Comp.propTypes, {
    decimal: React.PropTypes.string,
    decimals: React.PropTypes.number,
    duration: React.PropTypes.number,
    easingFn: React.PropTypes.func,
    end: React.PropTypes.number,
    formattingFn: React.PropTypes.func,
    onComplete: React.PropTypes.func,
    onStart: React.PropTypes.func,
    prefix: React.PropTypes.string,
    separator: React.PropTypes.string,
    start: React.PropTypes.number,
    suffix: React.PropTypes.string,
    useEasing: React.PropTypes.bool,
    useGrouping: React.PropTypes.bool
  });

  constructor(...args) {
    super(...args);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.duration !== nextProps.duration ||
      this.props.end !== nextProps.end ||
      this.props.start !== nextProps.start;
  }

  updateUI(evt) {
    super.updateUI(evt);
    this.startAnimation(this);
  }

  startAnimation(comp) {
    if (comp && comp.refs.countupDomRef) {
      let {
        decimal,
        decimals,
        duration,
        easingFn,
        end,
        formattingFn,
        onComplete,
        onStart,
        prefix,
        separator,
        start,
        suffix,
        useEasing,
        useGrouping
      } = comp.props;

      end = this.skVal();

      const countupInstance = new CountUp(
        comp.refs.countupDomRef,
        start,
        end,
        decimals,
        duration,
        {
          decimal,
          easingFn,
          formattingFn,
          separator,
          prefix,
          suffix,
          useEasing,
          useGrouping
        },
      );

      if (_.isFunction(onStart)) {
        onStart();
      }

      countupInstance.start(onComplete);
    } else {
      throw new Error(
        'You need to pass the CountUp component as an argument!\neg. this.myCountUp.startAnimation(this.myCountUp);',
      );
    }
  }

  render() {
    let {compTag: CompTag, start} = this.props;

    return (
      <CompTag {...this.compValidProps(CompTag)} ref='countupDomRef'>
        {start}
      </CompTag>
    );
  }
}
