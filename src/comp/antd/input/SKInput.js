import {Input} from 'antd';
import React from 'react';
import {SK} from 'sk-js';
import AntdComp from '../AntdComp';

//origin exist, use origin
export default class SKInput extends AntdComp {
  static defaultProps = SK.assign({}, AntdComp.defaultProps, {
    compTag: Input
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, {});

  constructor(...args) {
    super(...args);
    this.compName = 'SKInput';
    this.handleChange = (domEvent) => {
      this.skVal(domEvent.target.value);
    };
  }

  render() {
    let {compTag: CompTag} = this.props;

    return (
      <CompTag {...this.skTransProps2Self(CompTag)}
               onChange={this.handleChange}
               size={this.skProp(AntdComp.SK_PROPS.SIZE)}
               value={this.skVal()}>
        {this.skTransProps2Child()}
      </CompTag>
    );
  }
}
