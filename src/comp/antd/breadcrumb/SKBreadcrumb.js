import {Breadcrumb} from 'antd';
import React from 'react';
import {SK} from 'sk-js';
import AntdComp from '../AntdComp';

export default class SKBreadcrumb extends AntdComp {
  static defaultProps = SK.assign({}, AntdComp.defaultProps, {
    compTag: Breadcrumb
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, {});

  constructor(...args) {
    super(...args);
    this.compName = 'SKBreadcrumb';
  }

  render() {
    let {compTag: CompTag, routes, params} = this.props;

    return (
      <CompTag {...this.skTransProps2Self(CompTag)}
               params={params}
               routes={routes}>
        {this.skTransProps2Child()}
      </CompTag>
    );
  }
}
