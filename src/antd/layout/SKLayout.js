import { Layout } from 'antd';
import classNames from 'classnames/dedupe';
import React from 'react';
import { SK } from 'sk-js';
import OriginLayout from './OriginLayout';
import AntdComp from '../AntdComp';


export default class SKLayout extends AntdComp {
  static defaultProps = SK.assign({}, AntdComp.defaultProps, OriginLayout.defaultProps, {
    compTag: Layout,
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, OriginLayout.propTypes, {});

  constructor(...args) {
    super(...args);
    this.compName = 'SKLayout';
  }

  render() {
    const { compTag: CompTag, className } = this.props;

    const classes = {};
    classes['ant-layout-has-sider'] = this.hasSpecialChild('SKSider');

    return (
      <CompTag {...this.skTransProps2Self(CompTag)} className={classNames(classes, className)}>
        {this.skTransProps2Child()}
      </CompTag>
    );
  }
}
