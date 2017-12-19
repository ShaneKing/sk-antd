import {Tooltip} from 'antd';
import React from 'react';
import {SK} from 'sk-js';
import AntdComp from '../AntdComp';

export default class SKTooltip extends AntdComp {
  static defaultProps = SK.assign({}, AntdComp.defaultProps, {
    compTag: Tooltip
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, {});

  constructor(...args) {
    super(...args);
    this.compName = 'SKTooltip';
  }
}
