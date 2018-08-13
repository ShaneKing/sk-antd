import _ from 'lodash';
import React from 'react';
import {SK} from 'sk-js';
import HtmlComp from './HtmlComp';
import Reacts from '../Reacts';

/*eslint no-script-url: "off"*/

export default class SKA extends HtmlComp {
  static SK_COMP_NAME = 'SKA';
  static defaultProps = SK.extend(true, {}, HtmlComp.defaultProps, {
    compTag: Reacts.TAG.a,
  });
  static propTypes = SK.extend(true, {}, HtmlComp.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKA.SK_COMP_NAME;
    this.handleClick = (e) => {
      if (this.props.onClick && _.isFunction(this.props.onClick)) {
        this.props.onClick(e);
      }
    };
  }

  render() {
    const {compTag: CompTag} = this.props;
    return (
      <CompTag
        {...this.skTransProps2Self(CompTag)}
        href="javascript:void(0);"
        onClick={this.handleClick}
      >
        {this.skTransProps2Child()}
      </CompTag>
    );
  }
}
