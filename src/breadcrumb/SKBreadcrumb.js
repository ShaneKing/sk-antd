import {Breadcrumb} from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import {SK} from 'sk-js';
import AntdComp from '../AntdComp';

Breadcrumb.defaultProps = SK.extends(true, {}, {
  separator: SK.CHAR_SLASH,
}, Breadcrumb.defaultProps, {});

Breadcrumb.propTypes = SK.extends(true, {}, {
  //https://ant.design/components/breadcrumb-cn/#API
  itemRender: PropTypes.func,
  params: PropTypes.object,
  routes: PropTypes.array,
  separator: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
}, Breadcrumb.propTypes, {});

Breadcrumb.NON_SK_COMP_NAME = 'Breadcrumb';

export default class SKBreadcrumb extends AntdComp {
  static SK_COMP_NAME = 'SKBreadcrumb';
  static defaultProps = SK.extends(true, {}, AntdComp.defaultProps, Breadcrumb.defaultProps, {
    compTag: Breadcrumb,
  });
  static propTypes = SK.extends(true, {}, AntdComp.propTypes, Breadcrumb.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKBreadcrumb.SK_COMP_NAME;
  }

  render() {
    const {compTag: CompTag, routes, params} = this.props;

    return (
      <CompTag
        {...this.skTransProps2Self(CompTag)}
        params={params}
        routes={routes}
      >
        {this.skTransProps2Child()}
      </CompTag>
    );
  }
}
