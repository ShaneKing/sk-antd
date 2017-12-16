import {Layout} from 'antd';
import classNames from 'classnames/dedupe';
import PropTypes from 'prop-types';
import React from 'react';
import {SK} from 'sk-js';
import AntdComp from './AntdComp';

Layout.COMMON_DEFAULT_PROPS = SK.assign({}, {}, {});
Layout.COMMON_PROP_TYPES = SK.assign({}, {
  className: PropTypes.string,
  style: PropTypes.object
}, {});

Layout.defaultProps = SK.assign({}, {}, Layout.COMMON_DEFAULT_PROPS, Layout.defaultProps, {});
Layout.propTypes = SK.assign({}, {}, Layout.COMMON_PROP_TYPES, Layout.propTypes, {});

export default class SKLayout extends AntdComp {
  static defaultProps = SK.assign({}, AntdComp.defaultProps, Layout.defaultProps, {
    compTag: Layout
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, Layout.propTypes, {});


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
