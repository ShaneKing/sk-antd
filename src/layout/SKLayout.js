import { Layout } from 'antd';
import React from 'react';
import { SK } from 'sk-js';
import OriginLayout from './OriginLayout';
import AntdComp from '../AntdComp';


export default class SKLayout extends AntdComp {
  static SK_COMP_NAME = 'SKLayout';
  static defaultProps = SK.extends(true, {}, AntdComp.defaultProps, OriginLayout.defaultProps, {
    compTag: Layout,
  });
  static propTypes = SK.extends(true, {}, AntdComp.propTypes, OriginLayout.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKLayout.SK_COMP_NAME;
  }
}
