import {Breadcrumb} from 'antd';
import React from 'react';
import SK from 'sk-js';
import Comp from '../../util/Comp';

export default class SKBreadcrumb extends Comp {
  static defaultProps = {
    compTag: Breadcrumb
  };
  static propTypes = SK.assign({}, Comp.propTypes, Breadcrumb.propTypes, {});

  constructor(...args) {
    super(...args);
  }

  render() {
    let {compTag: CompTag, routes, params} = this.props;

    return (
      <CompTag {...this.compValidProps(CompTag)}
               params={params}
               routes={routes}>
        {this.skPropsTrans()}
      </CompTag>
    );
  }
}
