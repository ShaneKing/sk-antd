import {Spin} from 'antd';
import React from 'react';
import {SK} from 'sk-js';
import AntdComp from '../AntdComp';

export default class SKSpin extends AntdComp {
  static defaultProps = SK.assign({}, AntdComp.defaultProps, {
    compTag: Spin
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, {});

  constructor(...args) {
    super(...args);
    this.compName = 'SKSpin';
  }

  render() {
    let {compTag: CompTag, className} = this.props;

    return (
      <CompTag {...this.skTransProps2Self(CompTag)}
               className={className}
               spinning={this.skVal()}>
        {this.skTransProps2Child()}
      </CompTag>
    );
  }
}
