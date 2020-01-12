import {Popover} from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import {Mesgs, SK} from 'sk-js';
import AntdComp from '../AntdComp';
import CommonTip from '../tooltip/CommonTip';

Popover.defaultProps = SK.extends(true, {}, {}, CommonTip.defaultProps, Popover.defaultProps, {});
Popover.propTypes = SK.extends(true, {}, {
  //https://ant.design/components/popover-cn/#API
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
}, CommonTip.propTypes, Popover.propTypes, {});

Popover.NON_SK_COMP_NAME = 'Popover';

export default class SKPopover extends AntdComp {
  static SK_COMP_NAME = 'SKPopover';
  static defaultProps = SK.extends(true, {}, AntdComp.defaultProps, Popover.defaultProps, {
    compTag: Popover,
    title: Mesgs.get('Description')
  });
  static propTypes = SK.extends(true, {}, AntdComp.propTypes, Popover.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKPopover.SK_COMP_NAME;
  }
}
