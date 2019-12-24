import { BackTop } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { SK } from 'sk-js';
import AntdComp from '../AntdComp';

BackTop.defaultProps = SK.extends(true, {}, {}, BackTop.defaultProps, {
  visibilityHeight: 400,
});

BackTop.propTypes = SK.extends(true, {}, {
  //https://ant.design/components/back-top-cn/#API
  target: PropTypes.func,
  visibilityHeight: PropTypes.number,
  onClick: PropTypes.func,
}, BackTop.propTypes, {});

BackTop.NON_SK_COMP_NAME = 'BackTop';

export default class SKBackTop extends AntdComp {
  static SK_COMP_NAME = 'SKBackTop';
  static defaultProps = SK.extends(true, {}, AntdComp.defaultProps, BackTop.defaultProps, {
    compTag: BackTop,
  });
  static propTypes = SK.extends(true, {}, AntdComp.propTypes, BackTop.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKBackTop.SK_COMP_NAME;
  }
}
