import {Badge} from 'antd';
import React from 'react';
import {SK} from 'sk-js';
import AntdComp from '../AntdComp';

export default class SKBadge extends AntdComp {
  static defaultProps = SK.assign({}, AntdComp.defaultProps, {
    compTag: Badge
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, {});

  constructor(...args) {
    super(...args);
    this.compName = 'SKBadge';
  }

  render() {
    let {compTag: CompTag} = this.props;

    return (
      <CompTag {...this.skTransProps2Self(CompTag)} count={this.skVal()}>
        {this.skTransProps2Child()}
      </CompTag>
    );
  }
}
