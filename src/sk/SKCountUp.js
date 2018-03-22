import CountUp from 'countup.js';
import $ from 'jquery';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import {SK} from 'sk-js';
import Comp from '../Comp';
import Reacts from '../Reacts';

export default class SKCountUp extends Comp {
  static defaultProps = SK.assign({}, Comp.defaultProps, {
    compTag: Reacts.TAG.span,
    decimal: SK.CHAR_DOT,
    decimals: 0,
    duration: 3,
    easingFn: null,
    end: 100,
    formattingFn: null,
    onComplete: undefined,
    onStart: undefined,
    prefix: SK.EMPTY,
    separator: SK.CHAR_COMMA,
    start: 0,
    suffix: SK.EMPTY,
    redraw: false,
    style: undefined,
    useEasing: true,
    useGrouping: true
  });
  static propTypes = SK.assign({}, Comp.propTypes, {
    decimal: PropTypes.string,
    decimals: PropTypes.number,
    duration: PropTypes.number,
    easingFn: PropTypes.func,
    end: PropTypes.number,
    formattingFn: PropTypes.func,
    onComplete: PropTypes.func,
    onStart: PropTypes.func,
    prefix: PropTypes.string,
    separator: PropTypes.string,
    start: PropTypes.number,
    suffix: PropTypes.string,
    useEasing: PropTypes.bool,
    useGrouping: PropTypes.bool
  });

  constructor(...args) {
    super(...args);
    this.compName = 'SKCountUp';
  }

  componentDidMount() {
    super.componentDidMount();
    this.startAnimation(this);
  }

  componentDidUpdate() {
    super.componentDidUpdate();
    this.startAnimation(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.duration !== nextProps.duration ||
      this.props.end !== nextProps.end ||
      $(this.refs.countupDomRef).text() !== this.skVal().skCurrencyFmt(nextProps.decimals) ||
      this.props.start !== nextProps.start;
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
      <CompTag {...this.skTransProps2Self(CompTag)} ref='countupDomRef'>
        {start}
      </CompTag>
    );
  }
}
