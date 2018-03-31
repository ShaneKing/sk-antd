import _ from 'lodash';
import React from 'react';
import { SK } from 'sk-js';
import Comp from '../Comp';
import Reacts from '../Reacts';

/*eslint no-script-url: "off"*/

export default class SKA extends Comp {
  static SK_COMP_NAME = 'SKA';
  static defaultProps = SK.assign({}, Comp.defaultProps, {
    compTag: Reacts.TAG.a,
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
    const { compTag: CompTag } = this.props;
    return (
      <CompTag
        {...this.skTransProps2Self(CompTag)}
        href='javascript:void(0);'
        onClick={this.handleClick}
      >
        {this.skTransProps2Child()}
      </CompTag>
    );
  }
}
