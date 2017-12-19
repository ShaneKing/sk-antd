import {Layout} from 'antd';
import classNames from 'classnames/dedupe';
import React from 'react';
import {SK} from 'sk-js';
import AntdComp from '../AntdComp';


export default class SKLayout extends AntdComp {
  static defaultProps = SK.assign({}, AntdComp.defaultProps, {
    compTag: Layout
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, {});

  constructor(...args) {
    super(...args);
    this.compName = 'SKLayout';
  }

  render() {
    let {compTag: CompTag, className} = this.props;

    let classes = {};
    classes['ant-layout-has-sider'] = this.hasSpecialChild('SKSider');

    return (
      <CompTag {...this.skTransProps2Self(CompTag)} className={classNames(classes, className)}>
        {this.skTransProps2Child()}
      </CompTag>
    );
  }
}
