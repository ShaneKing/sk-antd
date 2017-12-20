import _ from 'lodash';
import React from 'react';
import {SK} from 'sk-js';
import Comp from '../Comp';
import REACT from '../../util/REACT';

export default class SKA extends Comp {
  static defaultProps = SK.assign({}, Comp.defaultProps, {
    compTag: REACT.TAG.a
  });
  static propTypes = SK.assign({}, Comp.propTypes, {});

  constructor(...args) {
    super(...args);
    this.compName = 'SKA';
    this.handleClick = (e) => {
      if (this.props.onClick && _.isFunction(this.props.onClick)) {
        this.props.onClick(e);
      }
    };
  }

  render() {
    let {compTag: CompTag} = this.props;
    return (
      <CompTag {...this.skTransProps2Self(CompTag)}
               href={'javascript:void(0);'}
               onClick={this.handleClick}>
        {this.skTransProps2Child()}
      </CompTag>
    );
  }
}
