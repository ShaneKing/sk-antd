import {Layout} from 'antd';
import classNames from 'classnames/dedupe';
import React from 'react';
import {SK} from 'sk-js';
import OriginLayout from './OriginLayout';
import AntdComp from '../AntdComp';


export default class SKLayout extends AntdComp {
  static SK_COMP_NAME = 'SKLayout';
  static defaultProps = SK.extend(true, {}, AntdComp.defaultProps, OriginLayout.defaultProps, {
    compTag: Layout,
  });
  static propTypes = SK.extend(true, {}, AntdComp.propTypes, OriginLayout.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKLayout.SK_COMP_NAME;
  }

  render() {
    const {compTag: CompTag, className} = this.props;

    const classes = {};
    classes['ant-layout-has-sider'] = this.hasSpecialChild('SKSider');

    return (
      <CompTag {...this.skTransProps2Self(CompTag)} className={classNames(classes, className)}>
        {this.skTransProps2Child()}
      </CompTag>
    );
  }
}
