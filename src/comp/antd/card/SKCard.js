import {Card} from 'antd';
import {SK} from 'sk-js';
import React from 'react';
import AntdComp from '../AntdComp';

export default class SKCard extends AntdComp {
  static defaultProps = SK.assign({}, AntdComp.defaultProps, {
    compTag: Card
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, {});

  constructor(...args) {
    super(...args);
    this.compName = 'SKCard';
  }
}
