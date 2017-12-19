import {Popover} from 'antd';
import React from 'react';
import {SK} from 'sk-js';
import AntdComp from '../AntdComp';

export default class SKPopover extends AntdComp {
  static defaultProps = SK.assign({}, AntdComp.defaultProps, {
    compTag: Popover
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, {});


  constructor(...args) {
    super(...args);
    this.compName = 'SKPopover';
    this.handleVisibleChange = (visible) => {
      this.skVal(visible);
    };
  }

  render() {
    let {compTag: CompTag} = this.props;

    return (
      <CompTag {...this.skTransProps2Self(CompTag)}
               onVisibleChange={this.handleVisibleChange}
               visible={this.skVal()}>
        {this.skTransProps2Child()}
      </CompTag>
    );
  }
}
