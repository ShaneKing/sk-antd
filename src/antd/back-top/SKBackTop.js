import {BackTop} from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import {SK} from 'sk-js';
import AntdComp from '../AntdComp';

BackTop.defaultProps = SK.extend(true, {}, {}, BackTop.defaultProps, {
  visibilityHeight: 400,
});

BackTop.propTypes = SK.extend(true, {}, {
  //https://ant.design/components/back-top-cn/#API
  target: PropTypes.func,
  visibilityHeight: PropTypes.number,
  onClick: PropTypes.func,
}, BackTop.propTypes, {});

BackTop.NON_SK_COMP_NAME = 'BackTop';

export default class SKBackTop extends AntdComp {
  static SK_COMP_NAME = 'SKBackTop';
  static defaultProps = SK.extend(true, {}, AntdComp.defaultProps, BackTop.defaultProps, {
    compTag: BackTop,
  });
  static propTypes = SK.extend(true, {}, AntdComp.propTypes, BackTop.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKBackTop.SK_COMP_NAME;
  }
}
