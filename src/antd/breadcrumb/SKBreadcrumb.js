import {Breadcrumb} from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import {SK} from 'sk-js';
import AntdComp from '../AntdComp';

Breadcrumb.defaultProps = SK.assign({}, {
  separator: SK.CHAR_SLASH
}, Breadcrumb.defaultProps, {});

Breadcrumb.propTypes = SK.assign({}, {
  //https://ant.design/components/breadcrumb-cn/#API
  itemRender: PropTypes.func,
  params: PropTypes.object,
  routes: PropTypes.array,
  separator: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ])
}, Breadcrumb.propTypes, {});

export default class SKBreadcrumb extends AntdComp {
  static defaultProps = SK.assign({}, AntdComp.defaultProps, Breadcrumb.defaultProps, {
    compTag: Breadcrumb
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, Breadcrumb.propTypes, {});

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
